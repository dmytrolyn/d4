/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar: React.FC<{ changeOption: (value: string) => void }> = ({
  changeOption,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    changeOption(searchQuery);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        size="small"
      />
      <IconButton
        onClick={handleSearchSubmit}
        color="primary"
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};
