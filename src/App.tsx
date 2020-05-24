import * as React from "react";
import { Header } from "./components/Header/Header";
import { Array } from "./components/Array/Array";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
    const [algorithm, setAlgorithm] = React.useState<string>("Algorithms");
    const [mode, setMode] = React.useState<string>("");

    const handleClickAlgorithm = (e: any): void => {
        e.preventDefault();
        setAlgorithm(e.target.name);
    };

    const handleClickMode = (e: any): void => {
        e.preventDefault();
        setMode(e.target.name);

        // Reset mode to enable constant re-initialization of array
        setTimeout(() => {
            setMode("");
        }, 100);
    };

    return (
        <div>
            <Header
                algorithm={algorithm}
                mode={mode}
                handleClickAlgorithm={handleClickAlgorithm}
                handleClickMode={handleClickMode}
            />
            <Array algorithm={algorithm} mode={mode} />
        </div>
    );
};
