import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { personsFetchData } from "../action/persons";


class App extends Component {
    componentDidMount() {
        this.props.fetchData("/api/artist");
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
1231321
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    };

};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(personsFetchData(url))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);