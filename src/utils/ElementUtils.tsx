import Element from "../models/Element";
import Snek from "../assets/snek.png";

export default class ElementUtils {
    static initArray = (): Element[] => {
        const array: Element[] = [];

        // Generate a series of random numbers for each element in the array
        for (let i = 0; i < 30; i++) {
            const newElement = ElementUtils.createRandomElement();
            array.push(newElement);
        }

        return array;
    };

    static createRandomElement = (): Element => {
        const randNum = Math.floor(Math.random() * (350 - 100) + 100);
        const newElement: Element = {
            image: Snek,
            length: randNum,
        };
        return newElement;
    };

    static isSorted = (arr: Element[]): Boolean => {
        const lengths: number[] = [];

        arr.forEach((element: Element) => {
            // Check if the element length is lower/equal to all numbers in lengths array
            if (!ElementUtils.hasLowerLength(lengths, arr.indexOf(element)))
                return false;

            // Push length to array and continue to next iteration
            lengths.push(element.length);
        });
        return true;
    };

    static hasLowerLength = (nums: number[], n: number): Boolean => {
        if (nums.length <= 0) return true;
        return Math.max(...nums) >= n;
    };

    static swap = (
        arr: Element[],
        current: Element,
        next: Element
    ): Element[] => {
        const temp = [...arr];
        const currIndex = arr.indexOf(current);
        const nextIndex = arr.indexOf(next);

        [temp[currIndex], temp[nextIndex]] = [temp[nextIndex], temp[currIndex]];
        return temp;
    };

    static changeElementColor = (
        arr: Element[],
        element: Element,
        color: string
    ) => {
        if (arr[arr.indexOf(element)]) {
            const style: CSSStyleDeclaration = document.getElementById(
                `element-${arr.indexOf(element)}`
            )?.style!;
            style.background = color;
        }
    };
}
