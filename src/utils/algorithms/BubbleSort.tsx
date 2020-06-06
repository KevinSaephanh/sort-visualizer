import Element from "../../models/Element";

/**
 * Optimized implementation always runs at O(n^2)
 */

export const bubbleSort = (arr: Element[]): (Element | Boolean)[][] => {
    const swapSet: (Element | Boolean)[][] = [];
    let swapped: Boolean = false;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            const current: Element = arr[i];
            const next: Element = arr[i + 1];

            // If first element is greater than second, swap places
            if (current && next && current.length > next.length) {
                swapSet.push([current, next, true]);
                [arr[i], arr[i + 1]] = [next, current];
                swapped = true;
            } else swapSet.push([current, next, false]);
        }
    } while (swapped);

    return swapSet;
};
