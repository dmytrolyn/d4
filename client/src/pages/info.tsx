import { Box, Typography, CircularProgress } from "@mui/material";
import useSWR from "swr";
import { fetcher, infoUrl } from "@/api";
import { Info } from "@/types";

export const InfoPage = () => {
  const { data } = useSWR<Info>(infoUrl, fetcher);

  if (!data) return <CircularProgress />;

  return (
    <Box>
      <Typography>{data.app}</Typography>
      <Typography>{data.description}</Typography>
      <Typography>{data.usage}</Typography>
      <Typography>{data.author}</Typography>
    </Box>
  );
};
