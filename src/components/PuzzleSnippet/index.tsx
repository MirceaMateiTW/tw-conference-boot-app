import { Box, Typography } from "@mui/material";

import { Draggable } from "react-beautiful-dnd";

type PuzzleSnippet = {
  puzzleSnippet: {
    id: string;
    content: string;
  };
  index: number;
};

const PuzzleSnippet = ({ puzzleSnippet, index }: PuzzleSnippet) => {
  return (
    <Draggable
      draggableId={puzzleSnippet.id}
      index={index}
      key={puzzleSnippet.id}
    >
      {(provided, snapshot) => {
        const { isDragging } = snapshot;
        return (
          <Box
            id={puzzleSnippet.id}
            // @ts-ignore
            sx={(theme) => ({
              backgroundColor: isDragging && theme.palette.ixColorWave60.main,
              color: isDragging && theme.palette.ixTextColorWhite.main,
              "&:hover": {
                backgroundColor: theme.palette.ixColorWave60.main,
                color: theme.palette.ixTextColorWhite.main,
              },
            })}
            className={`border-solid border-2 rounded-md shadow-l p-2 m-2 w-auto h-auto`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            draggable={true}
          >
            <Typography variant="body1">{puzzleSnippet.content}</Typography>
          </Box>
        );
      }}
    </Draggable>
  );
};

export default PuzzleSnippet;
