import Element from "../../models/Element";

export const quickSort = (
    arr: Element[],
    low: number,
    high: number,
    swapSet: (Element | Boolean)[][]
): (Element | Boolean)[][] => {
    if (low < high) {
        const pi: number = partition(arr, low, high, swapSet);

        // Before partition
        quickSort(arr, low, pi - 1, swapSet);

        // After partition
        quickSort(arr, pi, high, swapSet);
    }
    console.log(swapSet.length);
    return swapSet;
};

const partition = (
    arr: Element[],
    low: number,
    high: number,
    swapSet: (Element | Boolean)[][]
): number => {
    const pivot: number = Math.floor((low + high) / 2);
    const left: Element = arr[low];
    const right: Element = arr[high];

    if (left && right) {
        while (low < high) {
            while (left.length < arr[pivot].length) low++;
            while (right.length < arr[pivot].length) high++;

            if (low <= high) {
                swapSet.push([left, right, true]);
                [arr[low], arr[high]] = [right, left];
                low++;
                high--;
            } else swapSet.push([left, right, false]);
        }
    }

    return low;
};
