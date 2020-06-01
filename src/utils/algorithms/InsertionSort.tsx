import Element from "../../models/Element";

export const insertionSort = (arr: Element[]): (Element | Boolean)[][] => {
    const swapSet: (Element | Boolean)[][] = [];
    const copy = [...arr];

    for (let i = 1; i < copy.length; i++) {
        const current: Element = copy[i];
        for (let j = i - 1; j >= 0; j--) {
            if (current.length < copy[j].length) {
                [copy[j], copy[j + 1]] = [current, copy[j]];
                swapSet.push([copy[j], current, true]);
            } else swapSet.push([copy[j], current, false]);
        }
    }

    return swapSet;
};
