import Element from "../../models/Element";

/**
 * Best Case: O(n log(n))
 * Average Case: O(n log(n))
 * Worst Case: O(n^2)
 */

export const quickSort = (
    arr: Element[],
    low: number,
    high: number,
    swapSet: (Element | Boolean)[][]
): (Element | Boolean)[][] => {
    if (low < high) {
        const pi: number = partition(arr, low, high, swapSet);

        // Before partition
        if (low < pi - 1) quickSort(arr, low, pi - 1, swapSet);

        // After partition
        if (high > pi) quickSort(arr, pi, high, swapSet);
    }
    return swapSet;
};

// Hoare partition scheme initialized with indexes from edges of array
// Starting at each edge, traverse toward each other until an inversion is detected
// Swap inverted elements
const partition = (
    arr: Element[],
    low: number,
    high: number,
    swapSet: (Element | Boolean)[][]
): number => {
    const pivot: Element = arr[Math.floor((low + high) / 2)];

    while (low <= high) {
        // Forward traversal and comparison until pivot is reached
        while (arr[low].length < pivot.length) low++;

        // Backward traversal and comparison until pivot is reached
        while (arr[high].length > pivot.length) high--;

        if (low <= high) {
            swapSet.push([arr[low], arr[high], true]);
            [arr[low], arr[high]] = [arr[high], arr[low]];
            low++;
            high--;
        } else swapSet.push([arr[low], arr[high], false]);
    }

    return low;
};
