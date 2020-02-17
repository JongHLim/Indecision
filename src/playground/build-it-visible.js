console.log('Visibility Toggle is running!');

const app = {
    title: 'Visibility Toggle',
    toggled: true
};

const appRoot = document.getElementById('app');

const flip = () => {
    app.toggled = !app.toggled;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={flip}>{app.toggled ? 'Hide details' : 'Show details'}</button>
            <p>{app.toggled ? 'This is the details.' : ''}</p>
            {app.toggled && (<div><p>This is the details.</p></div>
                
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();