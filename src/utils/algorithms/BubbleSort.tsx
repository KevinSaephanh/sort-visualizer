import Element from "../../models/Element";

export const bubbleSort = (array: Element[]): (Element | Boolean)[][] => {
    const swapSet: (Element | Boolean)[][] = [];
    const copyArr = [...array];
    let swapped: Boolean = false;

    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            const current: Element = copyArr[i];
            const next: Element = copyArr[i + 1];

            // If first element is greater than second, swap places
            if (current && next && current.length > next.length) {
                swapSet.push([current, next, true]);
                [copyArr[i], copyArr[i + 1]] = [next, current];
                swapped = true;
            } else swapSet.push([current, next, false]);
        }
    } while (swapped);

    return swapSet;
};
