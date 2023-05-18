import { Puzzle } from "../types/puzzleDataType";
import _ from "lodash";

const puzzles = Object.freeze({
  towerOfHanoiPuzzle: {
    title: "Tower of Hanoi Puzzle",
    description: `<p>The <b>Tower of Hanoi</b> (also called <b>The problem of Benares Temple</b><sup id="cite_ref-oeis_1-0" class="reference"><a href="#cite_note-oeis-1">[1]</a></sup> or <b>Tower of Brahma</b> or <b>Lucas' Tower</b><sup id="cite_ref-2" class="reference"><a href="#cite_note-2">[2]</a></sup> and sometimes pluralized as <b>Towers</b>, or simply <b>pyramid puzzle</b><sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup>) is a <a href="/wiki/Mathematical_game" title="Mathematical game">mathematical game</a> or <a href="/wiki/Puzzle" title="Puzzle">puzzle</a> consisting of three rods and a number of disks of various <a href="/wiki/Diameter" title="Diameter">diameters</a>, which can slide onto any rod. The puzzle begins with the disks stacked on one rod in order of decreasing size, the smallest at the top, thus approximating a <a href="/wiki/Cone" title="Cone">conical</a> shape. The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:
    </p>
    <p><ol><li>Only one disk may be moved at a time.</li>
    <li>Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.</li>
    <li>No disk may be placed on top of a disk that is smaller than it.</li></ol></p>
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
    title: "Factorial Puzzle",
    description: `<div role="note" class="hatnote navigation-not-searchable">This article is about products of consecutive integers. For statistical experiments over all combinations of values, see <a href="/wiki/Factorial_experiment" title="Factorial experiment">factorial experiment</a>. For data representation by independent components, see <a href="/wiki/Factorial_code" title="Factorial code">factorial code</a>.</div>
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
    description: `<p>The reverse of a string is a string with the same symbols but in reverse order. For example, if <i>s</i> = abc (where a, b, and c are symbols of the alphabet), then the reverse of <i>s</i> is cba. A string that is the reverse of itself (e.g., <i>s</i> = madam) is called a <a href="/wiki/Palindrome#Computation_theory" title="Palindrome">palindrome</a>, which also includes the empty string and all strings of length 1.</p>
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
    description: `<p>In <a href="/wiki/Computer_science" title="Computer science">computer science</a>, a <b>linear search</b> or <b>sequential search</b> is a method for finding an element within a <a href="/wiki/List_(computing)" class="mw-redirect" title="List (computing)">list</a>. It sequentially checks each element of the list until a match is found or the whole list has been searched.<sup id="cite_ref-FOOTNOTEKnuth1998§6.1_(&quot;Sequential_search&quot;)_1-0" class="reference"><a href="#cite_note-FOOTNOTEKnuth1998§6.1_(&quot;Sequential_search&quot;)-1">[1]</a></sup>
    </p>`,
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
    description: `<p>In <a href="/wiki/Computer_science" title="Computer science">computer science</a>, <b>binary search</b>, also known as <b>half-interval search</b>,<sup id="cite_ref-Williams1976_1-0" class="reference"><a href="#cite_note-Williams1976-1">[1]</a></sup> <b>logarithmic search</b>,<sup id="cite_ref-FOOTNOTEKnuth1998§6.2.1_(&quot;Searching_an_ordered_table&quot;),_subsection_&quot;Binary_search&quot;_2-0" class="reference"><a href="#cite_note-FOOTNOTEKnuth1998§6.2.1_(&quot;Searching_an_ordered_table&quot;),_subsection_&quot;Binary_search&quot;-2">[2]</a></sup> or <b>binary chop</b>,<sup id="cite_ref-FOOTNOTEButterfieldNgondi201646_3-0" class="reference"><a href="#cite_note-FOOTNOTEButterfieldNgondi201646-3">[3]</a></sup> is a <a href="/wiki/Search_algorithm" title="Search algorithm">search algorithm</a> that finds the position of a target value within a <a href="/wiki/Sorted_array" title="Sorted array">sorted array</a>.<sup id="cite_ref-FOOTNOTECormenLeisersonRivestStein200939_4-0" class="reference"><a href="#cite_note-FOOTNOTECormenLeisersonRivestStein200939-4">[4]</a></sup><sup id="cite_ref-5" class="reference"><a href="#cite_note-5">[5]</a></sup> Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.
    </p>`,
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
