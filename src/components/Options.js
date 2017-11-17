import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map((value, index) => <Option key={value} option={value} handleDeleteOption={props.handleDeleteOption}/>)}
        </div>
    );
};

export default Options;