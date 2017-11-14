const model = {
    title: 'Visibility Toggle',
    isVisible: false,
    message: 'Hey. These are some details you can now see!'
};

const doToggle = () => {
    model.isVisible = !model.isVisible;
    render();
};

const appRoot = document.getElementById('app');
const render = () => {
    const template =
        <div>
            <h1>{model.title}</h1>
            <button onClick={doToggle}>{model.isVisible ? 'Hide details' : 'Show Details'}</button>
            <p>{model.isVisible && model.message}</p>
        </div>;

    ReactDOM.render(template, appRoot);
};

render();