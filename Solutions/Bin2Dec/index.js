import React, { Component } from "react";
import ReatDOM from "react-dom";

var Teste = function Teste(props) {
    return React.createElement(
        "div",
        null,
        "Hello World!"
    );
};

ReactDOM.render(React.createElement(Teste, null), document.querySelector('#root'));