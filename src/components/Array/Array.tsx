import * as React from "react";
import Element from "../../models/Element";
import ElementUtils from "../../utils/ElementUtils";
import * as SortUtils from "../../utils/algorithms/index";
import "./Array.css";

type AppProps = {
    algorithm: string;
    mode: string;
    toggleSorting: () => void;
    toggleSorted: () => void;
};

const elements: Element[] = ElementUtils.initArray();

export const Array = ({
    algorithm,
    mode,
    toggleSorting,
    toggleSorted,
}: AppProps) => {
    const [arr, setArr] = React.useState<Element[]>(elements);
    const [sorting, setSorting] = React.useState<Boolean>(false);

    React.useEffect(() => {
        switch (mode) {
            case "Sort":
                const swapSet = sort(algorithm)!;
                setSorting(true);
                toggleSorting();
                animateSort(swapSet);
                break;
            case "Reset":
                resetArr();
                break;
            default:
                break;
        }
    }, [mode]);

    React.useEffect(() => {
        if (ElementUtils.isSorted(arr) && !sorting) highlightSorted(0);
    }, [sorting]);

    const sort = (sorter: string): (Element | Boolean)[][] | null => {
        const temp = [...arr];
        const swapSet: (Element | Boolean)[][] = [];
        switch (sorter) {
            case "Bubble Sort":
                return SortUtils.bubbleSort(temp);
            case "Quick Sort":
                return SortUtils.quickSort(temp, 0, temp.length - 1, swapSet);
            case "Insertion Sort":
                return SortUtils.insertionSort(temp);
            case "Selection Sort":
                return SortUtils.selectionSort(temp);
            default:
                return null;
        }
    };

    const animateSort = (swapSet: (Element | Boolean)[][]): void => {
        if (swapSet.length > 0) {
            const pair: (Element | Boolean)[] = swapSet.shift()!;
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
                animateSort(swapSet);
            }, 100);
        } else setSorting(false);
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
            }, 35);
        } else {
            toggleSorting();
            toggleSorted();
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
