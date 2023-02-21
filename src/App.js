import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';





function App(props) {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = "logo.png"
        className = "App-logo"
        alt = "logo" / >
        <
        /header>



        <
        main >
        <
        p > Analyz 'ESME est un site qui vous permet de connaitre la population de votre commune à l'
        aide de l 'âge et du sexe des individus.</p> <
        Container >
        <
        Row className = "justify-content-center"
        style = {
            { display: "flex" }
        } >
        <
        Col xs = { 12 }
        md = { 6 }
        lg = { 6 } > < img src = "image1.png"
        alt = "image1"

        /
        >
        <
        /
        Col >
        <
        /Row>   <
        Row className = "justify-content-center"
        style = {
            { marginTop: "3%" }
        } >
        <
        Col >

        <
        button className = "GET-STARTED-button" >
        Get Started < /button> < /
        Col > < /
        Row > < /
        Container > <
        /main>



        <
        /div>
    );
}


export default App;