import { Puzzle } from "../types/puzzleDataType";
import _ from "lodash";

const puzzles = Object.freeze({
  towerOfHanoiPuzzle: {
    title: "Tower of Hanoi Puzzle",
    description: `<div style="display: flex;flex-direction: column;">
      <p>Tower of Hanoi is a mathematical puzzle where we have three rods (<strong>A</strong>, <strong>B</strong>, and <strong>C</strong>) and <strong>N</strong> disks. Initially, all the disks are stacked in decreasing value of diameter i.e., the smallest disk is placed on the top and they are on rod <strong>A</strong>. The objective of the puzzle is to move the entire stack to another rod (here considered <strong>C</strong>), obeying the following simple rules:&nbsp;</p>
      <ul style="list-style: outside disc;display: flex;flex-direction: column;padding: 24px;">
        <li>Only one disk can be moved at a time.</li>
        <li>Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.</li>
        <li>No disk may be placed on top of a smaller disk.</li>
      </ul>
    </div>
    `,
    snippets: {
      "snippet-1": {
        id: "snippet-1",
        content: "1 FUNCTION MoveTower(disk, source, dest, spare)",
      },
      "snippet-2": { id: "snippet-2", content: "2 IF disk == 0, THEN " },
      "snippet-3": {
        id: "snippet-3",
        content: "3 Move disk from source to dest",
      },
      "snippet-4": { id: "snippet-4", content: "4 ELSE" },
      "snippet-5": {
        id: "snippet-5",
        content: "5 MoveTower(disk - 1, source, spare, dest)   ",
      },
      "snippet-6": {
        id: "snippet-6",
        content: "6 Move disk from source to dest              ",
      },
      "snippet-7": {
        id: "snippet-7",
        content: "7 MoveTower(disk - 1, spare, dest, source)   ",
      },
      "snippet-8": { id: "snippet-8", content: "8 END IF" },
      "snippet-9": { id: "snippet-9", content: "9 END FUNCTION" },
    },
  },
  factorialPuzzle: {
    title: "Factorial of a Number Puzzle",
    description: `<div style="display: flex;flex-direction: column;">
          <ul style="list-style: outside disc;display: flex;flex-direction: column;padding: 24px;">
            <li> Factorial of a non-negative integer is the multiplication of all positive integers smaller than or equal to n. For example factorial of 6 is 6*5*4*3*2*1 which is 720.</li>
            <li> factorial is represented by a number and a  ” ! ”  mark at the end. It is widely used in permutations and combinations to calculate the total possible outcomes. A French mathematician Christian Kramp firstly used the exclamation.</li>
          </ul>
      </div>
    `,
    snippets: {
      "snippet-1": { id: "snippet-1", content: "FUNCTION Factorial(number)" },
      "snippet-2": { id: "snippet-2", content: "IF number <= 1" },
      "snippet-3": { id: "snippet-3", content: "RETURN 1" },
      "snippet-4": { id: "snippet-4", content: "ELSE" },
      "snippet-5": {
        id: "snippet-5",
        content: "RETURN number * Factorial(number-1)",
      },
      "snippet-6": { id: "snippet-6", content: "END IF" },
      "snippet-7": { id: "snippet-7", content: "END FUNCTION" },
    },
  },
  reverseString: {
    title: "Reverse String Puzzle",
    description: `<div style="display: flex;flex-direction: column;">
        <p> The reverse of a string is a string with the same symbols but in reverse order. For example, if <i>s</i> = abc (where a, b, and c are symbols of the alphabet), then the reverse of <i>s</i> is cba. </p>
        <p> A string that is the reverse of itself (e.g., <i>s</i> = madam) is called a <strong>Palindrome</strong>, which also includes the empty string and all strings of length 1.</p>
    </div>
    `,
    snippets: {
      "snippet-1": { id: "snippet-1", content: "FUNCTION Reverse(s)" },
      "snippet-2": { id: "snippet-2", content: "reverseString = “”" },
      "snippet-3": {
        id: "snippet-3",
        content: "FOR (i = s.length - 1; i >= 0; i--)",
      },
      "snippet-4": { id: "snippet-4", content: "reverseString += s[i]" },
      "snippet-5": {
        id: "snippet-5",
        content: "END FOR",
      },
      "snippet-6": { id: "snippet-6", content: "RETURN reverseString" },
      "snippet-7": { id: "snippet-7", content: "END FUNCTION" },
    },
  },
  linearSearch: {
    title: "Linear Search Puzzle",
    description: `<div style="display: flex;flex-direction: column;">
        <p>Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.</p>
        <ul style="list-style: outside disc;display: flex;flex-direction: column;padding: 24px;">
          <li> Every element is considered as a potential match for the key and checked for the same.</li>
          <li> If any element is found equal to the key, the search is successful and the index of that element is returned.</li>
          <li> If no element is found equal to the key, the search yields <strong>not_found</strong>.</li>
      </ul>
    </div>`,
    snippets: {
      "snippet-1": { id: "snippet-1", content: "FUNCTION Linear(list, value)" },
      "snippet-2": {
        id: "snippet-2",
        content: "FOR (i = 0; i < list.length; i++)",
      },
      "snippet-3": {
        id: "snippet-3",
        content: "IF list[i] == value",
      },
      "snippet-4": { id: "snippet-4", content: "RETURN i" },
      "snippet-5": {
        id: "snippet-5",
        content: "END IF",
      },
      "snippet-6": { id: "snippet-6", content: "END FOR" },
      "snippet-7": { id: "snippet-7", content: "RETURN not_found" },
      "snippet-8": { id: "snippet-8", content: "END FUNCTION" },
    },
  },
  binarySearch: {
    title: "Binary Search Puzzle",
    description: `<div style="display: flex;flex-direction: column;">
        <p>Binary Search is defined as a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N).</p>
        <ul style="list-style: outside disc;display: flex;flex-direction: column;padding: 24px;">
          <li> Divide the search space into two halves.</li>
          <li> Compare the middle element of the search space with the key.</li>
          <li> If the key is found at middle element, the process is terminated.</li>
          <li>If the key is not found at middle element, choose which half will be used as the next search space.</li>
          <li>This process is continued until the key is found or the total search space is exhausted.</li>
        </ul>
    </div>`,
    snippets: {
      "snippet-1": {
        id: "snippet-1",
        content: "FUNCTION Binary( array[0...n-1], value)",
      },
      "snippet-2": { id: "snippet-2", content: "low = 0" },
      "snippet-3": { id: "snippet-3", content: "high = n - 1" },
      "snippet-4": { id: "snippet-4", content: "WHILE (low <= high)" },
      "snippet-5": { id: "snippet-5", content: "mid = (low + high) / 2" },
      "snippet-6": { id: "snippet-6", content: "IF array[mid] > value" },
      "snippet-7": { id: "snippet-7", content: "high = mid - 1" },
      "snippet-8": { id: "snippet-8", content: "ELSE IF array[mid] < value" },
      "snippet-9": { id: "snippet-9", content: "low = mid + 1" },
      "snippet-10": { id: "snippet-10", content: "ELSE" },
      "snippet-11": { id: "snippet-11", content: "RETURN MID" },
      "snippet-12": { id: "snippet-12", content: "END IF" },
      "snippet-13": { id: "snippet-13", content: "RETURN NOT_FOUND" },
      "snippet-14": { id: "snippet-14", content: "END FUNCTION" },
    },
  },
});

const colors = [
  "ixColorOnyx",
  "ixColorFlamingo",
  "ixColorWave",
  "ixColorTurmeric",
  "ixColorJade",
  "ixColorSapphire",
  "ixColorAmethyst",
];

export const getRandomPuzzleData = (): Puzzle => {
  const puzzleKeys = Object.keys(puzzles);
  const randomPuzzleKey: string = _.sample(puzzleKeys) || "towerOfHanoiPuzzle";
  // @ts-ignore
  const randomPuzzle = puzzles[randomPuzzleKey];

  const snippetKeys = Object.keys(randomPuzzle?.snippets);
  const shuffledSnippedIds = _.shuffle(snippetKeys);

  const randomColor: string = _.sample(colors) || "ixColorWave";

  return {
    title: randomPuzzle?.title,
    description: randomPuzzle?.description,
    color: randomColor,
    setup: {
      snippets: randomPuzzle?.snippets,
      correctSnippetOrder: snippetKeys,
      columns: {
        "column-1": {
          id: "column-1",
          title: "Scrambled",
          snippetIds: shuffledSnippedIds,
        },
        "column-2": {
          id: "column-2",
          title: "Solution",
          snippetIds: [],
        },
      },
      columnOrder: ["column-1", "column-2"],
    },
  };
};
