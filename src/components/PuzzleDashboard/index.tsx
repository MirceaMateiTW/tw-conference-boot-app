import { Box, Button, Stack, Typography } from "@mui/material";

import CodePuzzle from "../CodePuzzle";
import FailMessage from "../FailMessage";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SuccessMessage from "../SuccessMessage";
import _ from "lodash";
import { getRandomPuzzleData } from "../../services/snippetService";
import parse from "html-react-parser";
import { useKeyDown } from "../hooks/useKeyDown";
import { useState } from "react";

const PuzzleDashboard = () => {
  const [displayResponseMessage, setDisplayResponseMessage] = useState(false);
  const [isResponseCorrect, setIsResponseCorrect] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [puzzleData, setPuzzleData] = useState(getRandomPuzzleData());
  const [snippetOrder, setSnippetOrder] = useState<Array<string>>([]);
  useKeyDown(() => {
    handleSolvePuzzle();
  }, ["Meta", "Shift", "s"]);

  const handleRefreshPuzzle = () => {
    setPuzzleData(getRandomPuzzleData());
    setDisplayResponseMessage(false);
    setIsResponseCorrect(false);
    setIsGameOver(false);
  };
  const handlePuzzleResponseChange = (newSnippetOrder: Array<string>) => {
    setSnippetOrder(newSnippetOrder);
    console.log("newSnippetOrder", newSnippetOrder);
  };

  const handleSolvePuzzle = () => {
    setPuzzleData({
      ...puzzleData,
      setup: {
        ...puzzleData.setup,
        columns: {
          ...puzzleData.setup.columns,
          "column-2": {
            ...puzzleData.setup.columns["column-2"],
            snippetIds: puzzleData.setup.correctSnippetOrder,
          },
          "column-1": {
            ...puzzleData.setup.columns["column-1"],
            snippetIds: [],
          },
        },
      },
    });
    setIsResponseCorrect(true);
    setIsGameOver(true);
    setDisplayResponseMessage(true);
  };

  const handleSubmitPuzzleResponse = () => {
    setDisplayResponseMessage(true);
    const snippetOrderLength = snippetOrder.length;
    const correctSnippetOrderLength =
      puzzleData.setup.correctSnippetOrder.length;

    if (snippetOrderLength < correctSnippetOrderLength) {
      setIsGameOver(false);
      return;
    }
    setIsGameOver(true);
    setIsResponseCorrect(
      _.isEqual(snippetOrder, puzzleData.setup.correctSnippetOrder)
    );
  };

  return (
    <Box component="div" className="rounded-md p-2 mx-auto w-full h-full">
      <Box component="div" className="rounded-md p-2 mx-auto w-full h-full">
        <Typography variant="h2" gutterBottom>
          {puzzleData.title}
        </Typography>

        {parse(puzzleData.description)}
      </Box>
      <Box component="div" className="rounded-md p-2 mx-auto w-full h-full ">
        {displayResponseMessage &&
          isGameOver &&
          (isResponseCorrect ? (
            <SuccessMessage></SuccessMessage>
          ) : (
            <FailMessage></FailMessage>
          ))}
      </Box>
      <Stack
        spacing={2}
        direction="row"
        className="rounded-md p-2 mx-auto w-full h-full"
      >
        <Button
          variant="outlined"
          // @ts-ignore
          color="ixColorWave"
          startIcon={<RefreshOutlinedIcon />}
          onClick={handleRefreshPuzzle}
        >
          Refresh
        </Button>
        <Button
          className="rounded-md m-auto"
          variant="outlined"
          // @ts-ignore
          color="ixColorWave"
          startIcon={<SendOutlinedIcon />}
          onClick={handleSubmitPuzzleResponse}
        >
          Submit
        </Button>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        className="rounded-md p-2 mx-auto w-full h-full"
      >
        <CodePuzzle
          puzzleSetup={puzzleData.setup}
          color={puzzleData.color}
          onPuzzleResponseChange={handlePuzzleResponseChange}
        />
      </Stack>
    </Box>
  );
};

export default PuzzleDashboard;
