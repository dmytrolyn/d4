import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const App = () => {
  const [rows, setRows] = useState([
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
    { id: 3, name: "Sam Brown", age: 22 },
  ]);

  // Поля введення
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleAddRow = () => {
    if (name && age) {
      setRows([...rows, { id: rows.length + 1, name, age: Number(age) }]);
      setName("");
      setAge("");
    }
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Data Table
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Форма для додавання записів */}
      <Box sx={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Age"
          variant="outlined"
          type="number"
          fullWidth
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddRow}>
          Add
        </Button>
      </Box>
    </Box>
  );
};
