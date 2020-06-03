import Element from "../../models/Element";

export const insertionSort = (arr: Element[]): (Element | Boolean)[][] => {
    const swapSet: (Element | Boolean)[][] = [];

    for (let i = 1; i < arr.length; i++) {
        const current: Element = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            const previous: Element = arr[j];
            if (current.length < previous.length) {
                [arr[j], arr[j + 1]] = [current, previous];
                swapSet.push([previous, current, true]);
            } else swapSet.push([previous, current, false]);
        }
    }

    return swapSet;
};
