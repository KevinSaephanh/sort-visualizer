import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Array } from "./components/Array/Array";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
    const [algorithm, setAlgorithm] = useState("Algorithms");
    const [mode, setMode] = useState("");

    const handleClickAlgorithm = (e: any): void => {
        e.preventDefault();
        setAlgorithm(e.target.name);
    };

    const handleClickMode = (e: any): void => {
        e.preventDefault();
        setMode(e.target.name);
    };

    return (
        <div className="App">
            <Header
                algorithm={algorithm}
                mode={mode}
                handleClickAlgorithm={handleClickAlgorithm}
                handleClickMode={handleClickMode}
            />
            <Container fluid>
                <Array algorithm={algorithm} mode={mode} />
            </Container>
        </div>
    );
};
