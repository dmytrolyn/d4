import { Box } from "@mui/material";
import useSWR from "swr";
import { VerticalList, CVETable } from "@/components";
import { Response } from "@/types";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  });

export const CvePage = () => {
  const { data, isLoading } = useSWR<Response>(
    "http://localhost:8000/get/all",
    fetcher
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <VerticalList />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CVETable data={data?.vulnerabilities} styles={{ maxWidth: "700px" }} />
      )}
    </Box>
  );
};