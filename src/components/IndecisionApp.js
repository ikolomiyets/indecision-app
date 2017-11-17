import React from 'react';
import AddOption from './AppOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

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

export default IndecisionApp;