import { Box, Button, Stack, Typography } from "@mui/material";

import CodePuzzle from "../CodePuzzle";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import _ from "lodash";
import { getRandomPuzzleData } from "../../services/snippetService";
import parse from "html-react-parser";
import { useState } from "react";

const PuzzleDashboard = () => {
  const [displayResponseMessage, setDisplayResponseMessage] = useState(false);
  const [isResponseCorrect, setIsResponseCorrect] = useState(false);
  const [puzzleData, setPuzzleData] = useState(getRandomPuzzleData());
  const [snippetOrder, setSnippetOrder] = useState<Array<string>>([]);

  const handleRefreshPuzzle = () => {
    setPuzzleData(getRandomPuzzleData());
    setDisplayResponseMessage(false);
    setIsResponseCorrect(false);
  };
  const handlePuzzleResponseChange = (newSnippetOrder: Array<string>) => {
    setSnippetOrder(newSnippetOrder);
    console.log("newSnippetOrder", newSnippetOrder);
  };

  const handleSubmitPuzzleResponse = () => {
    setDisplayResponseMessage(true);
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
        {displayResponseMessage && (
          <Box
            component="div"
            className="rounded-md p-2 mx-auto w-full h-full"
            sx={(theme) => ({
              backgroundColor: isResponseCorrect
                ? theme.palette.ixColorSuccess.main
                : theme.palette.ixColorError.main,
              color: theme.palette.ixTextColorWhite.main,
            })}
          >
            <Typography variant="h2" gutterBottom>
              {isResponseCorrect ? "CORRECT" : "FAILURE"}
            </Typography>
          </Box>
        )}
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
