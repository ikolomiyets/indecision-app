class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            title: 'Visibility Toggle',
            isVisible: false,
            message: 'Hey. These are some details you can now see!'
        };
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggle}>{this.state.isVisible ? 'Hide details' : 'Show Details'}</button>
                <p>{this.state.isVisible && this.state.message}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));