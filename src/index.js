import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
const API_KEY = "AIzaSyDbfIaizEXduqymPy1PIWBsWhIsdA1KWPk";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: "surfboards"}, videos => {
            // ES6 syntax for setting an object with identical key/value named pairs
            // Will resolve to this.setState({ videos: videos });
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector(".container"));