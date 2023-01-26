import * as React from 'react';
import Element from '../../models/Element';
import ElementUtils from '../../utils/ElementUtils';
import * as SortUtils from '../../utils/algorithms/index';
import './Array.css';

type AppProps = {
  algorithm: string;
  mode: string;
  toggleSorting: () => void;
};

const elements: Element[] = ElementUtils.initArray();

export const Array = ({ algorithm, mode, toggleSorting }: AppProps) => {
  const [arr, setArr] = React.useState<Element[]>(elements);
  const [sorting, setSorting] = React.useState<Boolean>(false);

  React.useEffect(() => {
    switch (mode) {
      case 'Sort':
        const swapSet = sort(algorithm)!;
        setSorting(true);
        toggleSorting();
        animateSort(swapSet);
        break;
      case 'Reset':
        resetArr();
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  React.useEffect(() => {
    if (ElementUtils.isSorted(arr) && !sorting) highlightSorted(0);
  }, [sorting]);

  const sort = (sorter: string): (Element | Boolean)[][] | null => {
    const temp = [...arr];
    const swapSet: (Element | Boolean)[][] = [];
    switch (sorter) {
      case 'Bubble Sort':
        return SortUtils.bubbleSort(temp);
      case 'Quick Sort':
        return SortUtils.quickSort(temp, 0, temp.length - 1, swapSet);
      case 'Insertion Sort':
        return SortUtils.insertionSort(temp);
      case 'Selection Sort':
        return SortUtils.selectionSort(temp);
      default:
        return null;
    }
  };

  const animateSort = (swapSet: (Element | Boolean)[][]): void => {
    if (swapSet.length > 0) {
      const pair: (Element | Boolean)[] = swapSet.shift()!;
      const current = pair[0] as Element;
      const next = pair[1] as Element;
      const swap = pair[2] as Boolean;

      // Change element color to new hsl to indicate visit
      ElementUtils.changeElementColor(arr, current, '276, 100%, 50%');
      ElementUtils.changeElementColor(arr, next, '276, 100%, 50%');

      setTimeout(() => {
        // Swap element indexes in array
        if (swap) handleUpdateArray(current, next);

        // Reset element color to original hsl
        ElementUtils.changeElementColor(arr, current, '219, 100%, 50%');
        ElementUtils.changeElementColor(arr, next, '219, 100%, 50%');

        // Recursive call
        animateSort(swapSet);
      }, 100);
    } else setSorting(false);
  };

  const handleUpdateArray = (current: Element, next: Element): void => {
    setArr((arr) => {
      return ElementUtils.swap([...arr], current, next);
    });
  };

  const highlightSorted = (index: number): void => {
    if (arr[index]) {
      setTimeout(() => {
        ElementUtils.changeElementColor(arr, arr[index], '155, 100%, 50%');
        highlightSorted(index + 1);
      }, 35);
    } else {
      toggleSorting();
    }
  };

  const resetArr = (): void => {
    const temp = [...arr];
    temp.splice(0, temp.length, ...ElementUtils.initArray());
    setArr(temp);
    arr.forEach((element) => {
      ElementUtils.changeElementColor(arr, element, '219, 100%, 50%');
    });
  };

  return (
    <div className='content'>
      {arr.map((element, key) => {
        const { length } = element;

        return (
          <div
            className='element'
            id={`element-${arr.indexOf(element)}`}
            key={key}
            style={{ height: length }}
          ></div>
        );
      })}
    </div>
  );
};
