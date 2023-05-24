import { Box, Stack, Typography } from "@mui/material";

const SuccessMessage = () => {
  return (
    <Stack
      direction="row"
      component="div"
      className="rounded-md p-2 mx-auto w-full h-full"
      sx={(theme) => ({
        backgroundColor: theme.palette.ixColorSuccess.main,
        color: theme.palette.ixTextColorWhite.main,
      })}
    >
      <Typography variant="h2" gutterBottom>
        {"Congrats! You actually did it. Who would have thought?"}
      </Typography>
      <Box component={"div"} className="rounded-md p-2 text-6xl">
        &#128526;
      </Box>
    </Stack>
  );
};

export default SuccessMessage;
