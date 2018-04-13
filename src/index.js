import React from "react";
import ReactDOM from "react-dom";

const API_KEY = "AIzaSyDbfIaizEXduqymPy1PIWBsWhIsdA1KWPk";

// Create a new component. This component should produce some HTML

const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it into the DOM

ReactDOM.render(<App />, document.querySelector(".container"));