import * as React from "react";
import Element from "../../models/Element";
import SpiritedAway from "../../assets/spirited_away.jpg";
import "./Array.css";

type AppProps = {
    algorithm: string;
    mode: string;
};

export const Array = ({ algorithm, mode }: AppProps) => {
    const elements: Element[] = [];

    React.useEffect(() => {
        switch (mode) {
            case "Sort":
                break;
            case "Reset":
                elements.length = 0;
                break;
            default:
                initArray();
                break;
        }
    }, [mode]);

    const initArray = (): void => {
        // Generate a series of random numbers for each element in the array
        for (let i = 0; i < 50; i++) {
            const randNum = Math.floor(Math.random() * (50 - 5) + 5);
            const newElement: Element = {
                image: SpiritedAway,
                length: randNum,
            };

            elements.push(newElement);
        }
    };

    return (
        <div className="content">
            <img src={SpiritedAway} alt="" />
            {elements.map((element, key) => {
                return (
                    <div key={key}>
                        <img src={element.image} alt="" />
                        {element.length} HELLO
                    </div>
                );
            })}
        </div>
    );
};
