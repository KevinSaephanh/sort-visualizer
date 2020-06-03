import Element from "../../models/Element";

export const selectionSort = (arr: Element[]): (Element | Boolean)[][] => {
    const swapSet: (Element | Boolean)[][] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min].length > arr[j].length) min = j;
        }

        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
            swapSet.push([arr[i], arr[min], true]);
        } else swapSet.push([arr[i], arr[min], false]);
    }

    return swapSet;
};
