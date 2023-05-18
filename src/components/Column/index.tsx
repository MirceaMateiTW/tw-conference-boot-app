import { Box, Typography } from "@mui/material";
import {
  PuzzleColumnData,
  PuzzleSnippetData,
} from "../../types/puzzleDataType";

import { Droppable } from "react-beautiful-dnd";
import PuzzleSnippet from "../PuzzleSnippet";

type ColumnProps = {
  column: PuzzleColumnData;
  snippets: Array<PuzzleSnippetData>;
  color: string;
};

const Column = ({ column, snippets, color }: ColumnProps) => {
  const displayTasks = () => {
    return snippets.map((snippet, index) => (
      <PuzzleSnippet key={snippet.id} puzzleSnippet={snippet} index={index} />
    ));
  };

  return (
    <div className="border-solid border-2 rounded-md p-2 w-full h-full">
      <Typography variant="h6" gutterBottom className="p-2 m-2">
        {column.title}
      </Typography>
      <Droppable droppableId={column.id} isDropDisabled={false} type="task">
        {(provided) => {
          return (
            <Box
              sx={(theme) => {
                // @ts-ignore
                const backgroundColor = theme.palette[color];
                return {
                  backgroundColor: backgroundColor?.main,
                  color: theme.palette.ixTextColorWhite.main,
                };
              }}
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`rounded-md p-2 m-2 w-auto h-full min-h-1/2`}
            >
              {displayTasks()}
              {provided.placeholder}
            </Box>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Column;
