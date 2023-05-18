import { DragDropContext, resetServerContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

import Column from "../Column";
import { PuzzleSetup } from "../../types/puzzleDataType";
import { Stack } from "@mui/material";

type CodePuzzleProps = {
  puzzleSetup: PuzzleSetup;
  color: string;
  onPuzzleResponseChange: (newSnippetOrder: Array<string>) => void;
};

const CodePuzzle = ({
  puzzleSetup,
  color,
  onPuzzleResponseChange,
}: CodePuzzleProps) => {
  const [puzzleData, setPuzzleData] = useState(puzzleSetup);

  useEffect(() => {
    setPuzzleData(puzzleSetup);
  }, [puzzleSetup]);

  useEffect(() => {
    resetServerContext();
  }, []);

  const handleDragEnd = (result: {
    destination: any;
    source: any;
    draggableId: any;
  }) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = puzzleData.columns[source.droppableId];
    const finish = puzzleData.columns[destination.droppableId];

    if (start === finish) {
      const newSnippetIds = Array.from(start.snippetIds);
      newSnippetIds.splice(source.index, 1);
      newSnippetIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        snippetIds: newSnippetIds,
      };

      const newState = {
        ...puzzleData,
        columns: {
          ...puzzleData.columns,
          [newColumn.id]: newColumn,
        },
      };

      setPuzzleData(newState);
      onPuzzleResponseChange(newState.columns["column-2"].snippetIds);

      return;
    }

    // Moving from one list to another
    const startSnippetIds = Array.from(start.snippetIds);
    startSnippetIds.splice(source.index, 1);
    const newStart = {
      ...start,
      snippetIds: startSnippetIds,
    };

    const finishSnippetIds = Array.from(finish.snippetIds);
    finishSnippetIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      snippetIds: finishSnippetIds,
    };

    const newState = {
      ...puzzleData,
      columns: {
        ...puzzleData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setPuzzleData(newState);
    onPuzzleResponseChange(newState.columns["column-2"].snippetIds);
  };

  const displayColumns = () => {
    return puzzleData.columnOrder.map((columnId: string) => {
      const column = puzzleData.columns[columnId];
      const snippets = column.snippetIds.map(
        (snippetId: string) => puzzleData.snippets[snippetId]
      );

      return (
        <Column
          key={column.id}
          column={column}
          snippets={snippets}
          color={color}
        />
      );
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Stack direction={"row"} spacing={2} className="w-full h-full">
        {displayColumns()}
      </Stack>
    </DragDropContext>
  );
};

export default CodePuzzle;
