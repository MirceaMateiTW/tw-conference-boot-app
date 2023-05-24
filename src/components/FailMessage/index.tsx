import { Box, Stack, Typography } from "@mui/material";

const FailMessage = () => {
  return (
    <Stack
      direction="row"
      component="div"
      className="rounded-md p-2 mx-auto w-full h-full"
      sx={(theme) => ({
        backgroundColor: theme.palette.ixColorError.main,
        color: theme.palette.ixTextColorWhite.main,
      })}
    >
      <Typography variant="h2" gutterBottom>
        {"Ooops! Wrong answer"}
      </Typography>
      <Box component={"div"} className="rounded-md p-2 text-6xl">
        &#128540;
      </Box>
    </Stack>
  );
};

export default FailMessage;
