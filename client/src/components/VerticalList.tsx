import { useState } from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { type ListItem as ListOption } from "@/types";

interface ListProps {
  items: ListOption[];
  currentOption: ListOption;
  changeOption: (item: ListOption) => void;
}

export const VerticalList: React.FC<ListProps> = ({
  items,
  currentOption,
  changeOption,
}) => {
  const [selectedItem, setSelectedItem] = useState<ListOption>(currentOption);

  const handleItemClick = async (item: ListOption) => {
    setSelectedItem(item);
    changeOption(item);
  };

  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            selected={selectedItem.title === item.title}
            onClick={() => handleItemClick(item)}
          >
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
