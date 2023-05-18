export type Puzzle = {
  title: string;
  description: string;
  color: string;
  setup: PuzzleSetup;
};

export type PuzzleSetup = {
  snippets: PuzzleSnippet;
  correctSnippetOrder: Array<string>;
  columns: PuzzleColumn;
  columnOrder: Array<string>;
};

export type PuzzleSnippet = { [key: string]: PuzzleSnippetData };
export type PuzzleSnippetData = { id: string; content: string };
export type PuzzleColumn = {
  [key: string]: PuzzleColumnData;
};
export type PuzzleColumnData = {
  id: string;
  title: string;
  snippetIds: Array<string>;
};
