import Element from '../models/Element';
import Snek from '../assets/snek.png';

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
    for (let i = 1; i < arr.length - 1; i++) {
      const current: Element = arr[i];
      const previous: Element = arr[i - 1];

      if (current && previous && current.length < previous.length) return false;
    }
    return true;
  };

  static swap = (arr: Element[], current: Element, next: Element): Element[] => {
    const temp = [...arr];
    const currIndex = arr.indexOf(current);
    const nextIndex = arr.indexOf(next);

    [temp[currIndex], temp[nextIndex]] = [temp[nextIndex], temp[currIndex]];
    return temp;
  };

  static changeElementColor = (arr: Element[], element: Element, hsl: string) => {
    if (arr[arr.indexOf(element)]) {
      const style: CSSStyleDeclaration = document.getElementById(`element-${arr.indexOf(element)}`)
        ?.style!;
      style.background = `linear-gradient(to bottom right, hsl(0, 3%, 50%), hsl(${hsl}))`;
    }
  };
}
