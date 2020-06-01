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
    const [arr, setArr] = React.useState<Element[]>(elements);

    React.useEffect(() => {
        switch (mode) {
            case "Sort":
                const sortedArr = sort(algorithm)!;
                animateSort(sortedArr);
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

    const sort = (sorter: string): (Element | Boolean)[][] | null => {
        switch (sorter) {
            case "Bubble Sort":
                return SortUtils.bubbleSort(arr);
            case "Quick Sort":
            case "Merge Sort":
            case "Selection Sort":
                return SortUtils.selectionSort(arr);
            case "Insertion Sort":
                return SortUtils.insertionSort(arr);
            default:
                return null;
        }
    };

    const animateSort = (sortedArr: (Element | Boolean)[][]): void => {
        if (sortedArr.length > 0) {
            const pair: (Element | Boolean)[] = sortedArr.shift()!;
            const current = pair[0] as Element;
            const next = pair[1] as Element;
            const swap = pair[2] as Boolean;
            const currentStyle: CSSStyleDeclaration = document.getElementById(
                `element-${arr.indexOf(current)}`
            )?.style!;
            const nextStyle: CSSStyleDeclaration = document.getElementById(
                `element-${arr.indexOf(next)}`
            )?.style!;

            if (currentStyle && nextStyle) {
                // Change element background to blueviolet to indicate visit
                currentStyle.background = "blueviolet";
                nextStyle.background = "blueviolet";

                // Swap element indexes in array
                if (swap) {
                    handleUpdateArray(current);

                    // Change element background to green to indicate swap
                    currentStyle.background = "green";
                    nextStyle.background = "green";
                }

                setTimeout(() => {
                    // Reset element background to black
                    currentStyle.background = "black";
                    nextStyle.background = "black";

                    // Recursive call
                    animateSort(sortedArr);
                }, 100);
            }
        }
    };

    const handleUpdateArray = (current: Element): void => {
        setArr((arr) => {
            const newArr = [...arr];
            const currIndex = newArr.indexOf(current);
            const nextIndex = currIndex + 1;

            [newArr[currIndex], newArr[nextIndex]] = [
                newArr[nextIndex],
                newArr[currIndex],
            ];
            return newArr;
        });
    };

    return (
        <div className="content">
            {arr.map((element, key) => {
                const { length, image } = element;

                return (
                    <div
                        className="element"
                        id={`element-${key}`}
                        key={key}
                        style={{ height: length }}
                    >
                        {/* <img src={image} alt="" style={{ height: length }} /> */}
                    </div>
                );
            })}
        </div>
    );
};
