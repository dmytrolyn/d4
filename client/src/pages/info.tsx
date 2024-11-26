import { Box, Typography, CircularProgress } from "@mui/material";
import useSWR from "swr";
import { fetcher, infoUrl } from "@/api";
import { Info } from "@/types";

export const InfoPage = () => {
  const { data } = useSWR<Info>(infoUrl, fetcher);

  if (!data) return <CircularProgress />;

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography fontSize={32} fontWeight={600} fontFamily={"monospace"}>
        {data.app}
      </Typography>
      <Typography fontSize={20}>{data.description}</Typography>
      <Typography fontSize={20}>{data.usage}</Typography>
      <Typography fontSize={18} fontWeight={600} fontFamily={"monospace"}>
        {data.author}
      </Typography>
    </Box>
  );
};
