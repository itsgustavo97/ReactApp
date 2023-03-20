import PropTypes from "prop-types";

{/* No se debe renderizar object en el componente */}
const FisrtAppComponent = ({ title }) => {
    return (
        <>
        <h2>{ title }</h2>
        <p>{ 5 + 5 }</p>
        </>
    )
}
FisrtAppComponent.propTypes = {
    title: PropTypes.string.isRequired
    
};
FisrtAppComponent.defaultProps = {
    title: 'Hello World'
    
};


export default FisrtAppComponent;
