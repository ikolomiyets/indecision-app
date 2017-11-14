const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [
        'Option One',
        'Option Two'
    ]
};

const removeAll = () => {
    app.options.splice(0, app.options.length);
    render();
};

const decide = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
};

const appRoot = document.getElementById('app');
const render = () => {
// JSX - JavaScript XML
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app.subtitle && <p>{app.subtitle}</p> }
            <p>{ app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={decide}>What Should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((value, index) => <li key={index}>{value}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const user = {
    name: 'Igor Kolomiyets',
    age: 48,
    location: 'Limerick, Ireland'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

render();
