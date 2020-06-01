import Element from "../../models/Element";

export const quickSort = (arr: Element[]): (Element | Boolean)[][] => {
    const pivot: Element = arr[Math.floor(arr.length / 2)]; // Middle element becomes pivot
    const swapSet: (Element | Boolean)[][] = [];
    const copy = [...arr];

    return swapSet;
};

const partition = (left: number, right: number, pivot: Element): any => {};
