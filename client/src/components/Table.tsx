import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const CVETable: React.FC<{
  data?: any[];
  styles?: React.CSSProperties;
}> = ({ data, styles }) => {
  return (
    <TableContainer
      sx={{
        ...styles,
      }}
      component={Paper}
    >
      <Table>
        <TableHead
          sx={{
            backgroundColor: "black",
            "& .MuiTableCell-head": {
              fontWeight: "bold",
              color: "white",
            },
          }}
        >
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>SourceIdentifier</TableCell>
            <TableCell>Published</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ overflowY: "scroll" }}>
          {data?.map((item) => {
            return (
              <TableRow key={item._id}>
                <TableCell>{item._id}</TableCell>
                {/* <TableCell>{item.description[0]}</TableCell>
                <TableCell>{item.description[1]}</TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
