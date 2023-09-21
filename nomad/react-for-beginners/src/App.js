import { useState, useEffect } from 'react';

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    function Hello() {
        const byeFn = () => console.log('bye');
        const hiFn = () => {
            console.log('created');
            return byeFn;
        };
        useEffect(hiFn, []);
        return <h1>Hello</h1>;
    }
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
        </div>
    );
}

export default App;
