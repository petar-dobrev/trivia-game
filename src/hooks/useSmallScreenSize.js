import useMediaQuery from "@mui/material/useMediaQuery";

const useSmallScreenSize = () => {
  const isSmallScreenSize = useMediaQuery("(max-width:600px)");
  return isSmallScreenSize;
};

export default useSmallScreenSize;
