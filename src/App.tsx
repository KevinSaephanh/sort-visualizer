import * as React from "react";
import { Header } from "./components/Header/Header";
import { Array } from "./components/Array/Array";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
    const [algorithm, setAlgorithm] = React.useState<string>("Algorithms");
    const [mode, setMode] = React.useState<string>("");
    const [sorting, setSorting] = React.useState<Boolean>(false);
    const [sorted, setSorted] = React.useState<Boolean>(false);

    const handleClickAlgorithm = (e: any): void => {
        e.preventDefault();
        setAlgorithm(e.target.name);
    };

    const handleClickMode = (e: any): void => {
        e.preventDefault();
        setMode(e.target.name);

        if (e.target.name === "Reset") setSorted(false);

        // Reset mode to enable constant re-initialization of array
        setTimeout(() => {
            setMode("");
        }, 100);
    };

    const toggleSorting = (): void => {
        setSorting(!sorting);
    };

    const toggleSorted = (): void => {
        setSorted(!sorted);
    };

    return (
        <div>
            <Header
                algorithm={algorithm}
                mode={mode}
                sorting={sorting}
                sorted={sorted}
                handleClickAlgorithm={handleClickAlgorithm}
                handleClickMode={handleClickMode}
            />
            <Array
                algorithm={algorithm}
                mode={mode}
                sorting={sorting}
                toggleSorting={toggleSorting}
                toggleSorted={toggleSorted}
            />
        </div>
    );
};
