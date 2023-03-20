import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const incrementar = () => {
        setCounter(counter+1);
    };
    const decrementar = () => {
        setCounter(counter-1);
    };
    const reset = () => {
        setCounter(value);
    };

    return (
        <>
        <h1>Counter app</h1>
        <h3>{ counter }</h3>
        <input type="button" value="Incrementar" onClick={incrementar}/>
        <input type="button" value="Decrementar" onClick={decrementar}/>
        <input type="button" value="Resetear" onClick={reset}/>
        </>
    );
};


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
    
};

CounterApp.defaultProps = {
    value: 0

};

export default CounterApp;