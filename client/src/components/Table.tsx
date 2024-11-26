/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
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
            <TableCell>Description</TableCell>
            <TableCell>Reference</TableCell>
            <TableCell>Published</TableCell>
            <TableCell>Severity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ overflowY: "scroll" }}>
          {data?.map((item) => {
            return (
              <TableRow key={item._id}>
                <TableCell>
                  <Box sx={{ minWidth: "min-content" }}>{item._id}</Box>
                </TableCell>
                <TableCell
                  dangerouslySetInnerHTML={{ __html: item.flatDescription }}
                ></TableCell>
                <TableCell>
                  <a
                    href={item._source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item._source.href}
                  </a>
                </TableCell>
                <TableCell>
                  {new Date(item._source.published).toLocaleString()}
                </TableCell>
                <TableCell>{item._source.cvss.severity}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
