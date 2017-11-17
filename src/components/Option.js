import React from 'react';

const Option = (props) => <li>{props.option}<button onClick={(e) => {
    props.handleDeleteOption(props.option);
}}>Delete</button></li>;

export default Option;