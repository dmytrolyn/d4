import { Box } from "@mui/material";
import useSWR from "swr";
import { Header } from "./Header";
import { CVETable } from "./Table";
import { VerticalList } from "./VerticalList";
import { Response } from "./types";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  });

export const App = () => {
  const { data, error, isLoading } = useSWR<Response>(
    "http://localhost:8000/get/all",
    fetcher
  );
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <VerticalList />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <CVETable
            data={data?.vulnerabilities}
            styles={{ maxWidth: "700px" }}
          />
        )}
        <Box sx={{ padding: "20px", maxWidth: "600px", margin: "auto" }}></Box>
      </Box>
    </>
  );
};
