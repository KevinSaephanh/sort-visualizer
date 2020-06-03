import Element from "../../models/Element";

export const mergeSort = (arr: Element[], left: number, right: number): any => {
    if (left < right) {
        const pivot: number = Math.floor((left + right) / 2);
        mergeSort(arr, left, pivot);
        mergeSort(arr, pivot + 1, right);
        merge(arr, left, pivot, right);
    }
    return arr;
};

const merge = (
    arr: Element[],
    left: number,
    pivot: number,
    right: number
): void => {
    const temp: Element[] = [];
    temp.length = right - left + 1;
    let i = left;
    let j = pivot + 1;
    let k = 0;

    while (i <= pivot && j <= right) {
        if (arr[i] <= arr[j]) temp[k] = arr[i];
        else temp[k] = arr[j];
        k++;
        i++;
    }

    while (i <= pivot) {
        temp[k] = arr[i];
        k++;
        i++;
    }

    while (j <= right) {
        temp[k] = arr[i];
        k++;
        i++;
    }

    for (let i = left; i <= right; i++) arr[i] = temp[i - left];

    console.log(arr);
};
