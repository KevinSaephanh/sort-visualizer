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
                resetArr();
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
                return SortUtils.quickSort(arr);
            case "Merge Sort":
                return null;
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

            // Change element background to blueviolet to indicate visit
            ElementUtils.changeElementColor(arr, current, "blueviolet");
            ElementUtils.changeElementColor(arr, next, "blueviolet");

            setTimeout(() => {
                // Swap element indexes in array
                if (swap) handleUpdateArray(current, next);

                // Reset element background to black
                ElementUtils.changeElementColor(arr, current, "black");
                ElementUtils.changeElementColor(arr, next, "black");

                // Recursive call
                animateSort(sortedArr);
            }, 100);
        } else highlightSorted(0);
    };

    const handleUpdateArray = (current: Element, next: Element): void => {
        setArr((arr) => {
            const newArr = [...arr];
            const currIndex = newArr.indexOf(current);
            const nextIndex = newArr.indexOf(next);

            [newArr[currIndex], newArr[nextIndex]] = [
                newArr[nextIndex],
                newArr[currIndex],
            ];
            return newArr;
        });
    };

    const highlightSorted = (index: number): void => {
        if (arr[index]) {
            setTimeout(() => {
                ElementUtils.changeElementColor(arr, arr[index], "green");
                highlightSorted(index + 1);
            }, 25);
        }
    };

    const resetArr = (): void => {
        const temp = [...arr];
        temp.splice(0, temp.length, ...ElementUtils.initArray());
        setArr(temp);
        arr.forEach((element) => {
            ElementUtils.changeElementColor(arr, element, "black");
        });
    };

    return (
        <div className="content">
            {arr.map((element, key) => {
                const { length, image } = element;

                return (
                    <div
                        className="element"
                        id={`element-${arr.indexOf(element)}`}
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
