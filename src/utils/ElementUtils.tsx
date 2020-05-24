import Element from "../models/Element";
import Snek from "../assets/snek.png";

export default class ElementUtils {
    static initArray = (): Element[] => {
        const array: Element[] = [];

        // Generate a series of random numbers for each element in the array
        for (let i = 0; i < 35; i++) {
            const randNum = Math.floor(Math.random() * (350 - 100) + 100);
            const newElement: Element = {
                image: Snek,
                length: randNum,
                visited: false,
            };

            array.push(newElement);
        }

        return array;
    };
}
