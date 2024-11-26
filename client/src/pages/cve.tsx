/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, CircularProgress } from "@mui/material";
import { useState } from "react";
import useSWR from "swr";
import { VerticalList, CVETable, SearchBar } from "@/components";
import { type ListItem } from "@/types";
import { fetcher } from "@/api";
import { requestsMapping, searchItem } from "@/utils";

export const CvePage = () => {
  const [currentOption, setCurrentOption] = useState<ListItem>(
    requestsMapping.find((i) => i.title === "Past 5 days (max 40)")!
  );
  const { data, isLoading } = useSWR<any>(currentOption.url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "40px",
      }}
    >
      <Box
        sx={{
          marginRight: "40px",
          minWidth: "200px",
        }}
      >
        <Typography variant="h6" gutterBottom textAlign="center">
          Show CVE
        </Typography>
        <VerticalList
          items={requestsMapping}
          currentOption={currentOption}
          changeOption={setCurrentOption}
        />
        <SearchBar
          changeOption={(value: string) => setCurrentOption(searchItem(value))}
        />
      </Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <CVETable
          data={data}
          styles={{
            maxWidth: "1000px",
            minHeight: "585px",
          }}
        />
      )}
    </Box>
  );
};
