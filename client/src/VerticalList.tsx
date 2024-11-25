import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  CircularProgress,
} from "@mui/material";

export const VerticalList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const handleItemClick = async (item) => {
    setSelectedItem(item);
    setLoading(true);
    setResponse("");

    // Імітація API-запиту
    try {
      const res = await new Promise((resolve) =>
        setTimeout(() => resolve(`Response from API for ${item}`), 1500)
      );
      setResponse(res);
    } catch (error) {
      setResponse("Error fetching data!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}
    >
      <Typography variant="h6" gutterBottom>
        Clickable List
      </Typography>
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

      <div style={{ marginTop: "20px" }}>
        {loading ? (
          <CircularProgress />
        ) : (
          response && <Typography>{response}</Typography>
        )}
      </div>
    </div>
  );
};
