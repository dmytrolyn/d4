import { Box, Typography, CircularProgress } from "@mui/material";
import { useState } from "react";
import useSWR from "swr";
import { VerticalList, CVETable } from "@/components";
import { Response } from "@/types";
import { cveUrls, fetcher } from "@/api";

export const CvePage = () => {
  const [currentUrl, setCurrentUrl] = useState<string>(cveUrls.all);
  const { data, isLoading } = useSWR<Response>(currentUrl, fetcher);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px",
      }}
    >
      <Box
        sx={{
          marginRight: "40px",
        }}
      >
        <Typography variant="h6" gutterBottom textAlign="center">
          Show CVE
        </Typography>
        <VerticalList />
      </Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <CVETable data={data?.vulnerabilities} styles={{ maxWidth: "700px" }} />
      )}
    </Box>
  );
};
