import * as React from "react";
import Element from "../../models/Element";
import ElementUtils from "../../utils/ElementUtils";
import * as SortUtils from "../../utils/algorithms/index";
import "./Array.css";

type AppProps = {
    algorithm: string;
    mode: string;
};

const elements: Element[] = ElementUtils.initArray();

export const Array = ({ algorithm, mode }: AppProps) => {
    const [arr, setArr] = React.useState(elements);

    React.useEffect(() => {
        switch (mode) {
            case "Sort":
                sort(algorithm);
                break;
            case "Reset":
                const temp = [...arr];
                temp.splice(0, temp.length, ...ElementUtils.initArray());
                setArr(temp);
                break;
            default:
                break;
        }
    }, [mode]);

    const sort = (sorter: string): void => {
        switch (sorter) {
            case "Bubble Sort":
                SortUtils.bubbleSort(arr);
                break;
        }
        console.log(sorter);
    };

    return (
        <div className="content">
            {arr.map((element, key) => {
                const { length, image, visited } = element;

                return (
                    <div
                        className={`element element-visited-${visited}`}
                        id={`element-${key}`}
                        key={key}
                    >
                        <img src={image} alt="" style={{ height: length }} />
                    </div>
                );
            })}
        </div>
    );
};
