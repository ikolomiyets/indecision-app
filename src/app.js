class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        console.log('constructor');
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        const json = localStorage.getItem('options');
        try {
            if (json) {
                console.log('setting state', json);
                this.setState(() => ({options: JSON.parse(json)}));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    handleDeleteOptions() {
        this.setState((prevState) => ({ options: [] }));
    }

    handleAddOption(newOption) {
        if (!newOption) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(newOption) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ( { options: prevState.options.concat([newOption]) }));
    }

    handleDeleteOption(optionToRemove) {
        if (optionToRemove >= this.state.options.length) {
            return 'Incorrect element selected';
        } else {
            this.setState((prevState) => (
                {
                    options: prevState.options.filter((option) => optionToRemove !== option)
                }
            ));
        }
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }

    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map((value, index) => <Option key={value} option={value} handleDeleteOption={props.handleDeleteOption}/>)}
        </div>
    );
};

const Option = (props) => <li>{props.option}<button onClick={(e) => {
    props.handleDeleteOption(props.option);
}}>Delete</button></li>;

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error  }));
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp options={['AAA', 'BBB']}/>, document.getElementById('app'));