import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      data-testid="loader"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
