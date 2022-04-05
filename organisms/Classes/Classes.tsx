import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Classroom } from './type'

type ClassroomsListResultsProps = {
  classrooms: Classroom[];
};

const ClassroomsListResults = ({ classrooms }: ClassroomsListResultsProps) => {
  const [selectedClassroomIds, setSelectedClassroomIds] = useState([]);
  const limit = 10;

  const handleSelectAll = (event: any) => {
    let newSelectedClassroomIds = [];

    if (event.target.checked) {
      newSelectedClassroomIds = classrooms.map((customer) => customer.id);
    }

    setSelectedClassroomIds(newSelectedClassroomIds);
  };

  const handleSelectOne = (event: any, id: any) => {
    const selectedIndex = selectedClassroomIds.indexOf(id);
    let newSelectedClassroomIds = [];

    if (selectedIndex === -1) {
      newSelectedClassroomIds = newSelectedClassroomIds.concat(
        selectedClassroomIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedClassroomIds = newSelectedClassroomIds.concat(
        selectedClassroomIds.slice(1)
      );
    } else if (selectedIndex === selectedClassroomIds.length - 1) {
      newSelectedClassroomIds = newSelectedClassroomIds.concat(
        selectedClassroomIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedClassroomIds = newSelectedClassroomIds.concat(
        selectedClassroomIds.slice(0, selectedIndex),
        selectedClassroomIds.slice(selectedIndex + 1)
      );
    }

    setSelectedClassroomIds(newSelectedClassroomIds);
  };

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedClassroomIds.length === classrooms.length}
                    color="primary"
                    indeterminate={
                      selectedClassroomIds.length > 0 &&
                      selectedClassroomIds.length < classrooms.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classrooms.slice(0, limit).map((classroom) => (
                <TableRow
                  hover
                  key={classroom.id}
                  selected={selectedClassroomIds.indexOf(classroom.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedClassroomIds.indexOf(classroom.id) !== -1}
                      onChange={(event) => handleSelectOne(event, classroom.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        {classroom.label}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default ClassroomsListResults;
