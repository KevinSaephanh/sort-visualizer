import Element from "../../models/Element";

export const bubbleSort = (array: Element[]): Element[] => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            const firstNode: Element = array[j];
            const secondNode: Element = array[j + 1];

            firstNode.visited = true;
            secondNode.visited = true;

            // If first node is greater than second, swap places
            if (firstNode.length > secondNode.length) {
                [array[j], array[j + 1]] = [secondNode, firstNode];
            }
        }
    }

    console.log(array);
    return array;
};
