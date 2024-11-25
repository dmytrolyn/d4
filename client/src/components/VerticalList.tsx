import { useState } from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export const VerticalList = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const items = ["Past 5 days", "10 newest", "10 critical", "Search"];

  const handleItemClick = async (item: string) => {
    setSelectedItem(item);
  };

  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            selected={selectedItem === item}
            onClick={() => handleItemClick(item)}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
