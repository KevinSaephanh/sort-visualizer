import Element from "../../models/Element";

export const selectionSort = (arr: Element[]): (Element | Boolean)[][] => {
    const swapSet: (Element | Boolean)[][] = [];
    const copy = [...arr];

    for (let i = 0; i < copy.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < copy.length; j++) {
            if (copy[min].length > copy[j].length) min = j;
        }

        if (min !== i) {
            [copy[i], copy[min]] = [copy[min], copy[i]];
            swapSet.push([copy[i], copy[min], true]);
        } else swapSet.push([copy[i], copy[min], false]);
    }

    console.log(copy);
    return swapSet;
};
