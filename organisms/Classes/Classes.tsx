import { useState, useEffect } from "react";
import {
  useQueryClient
} from "react-query";
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
  IconButton,
} from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Spinner from "@Atoms/Spinner";

import { useClassrooms, useDeleteMutationClassrooms } from '@Services/classrooms'

import { Classroom } from './type'

const ClassroomsListResults = () => {
  const queryClient = useQueryClient()
  const [classrooms, setClassrooms] = useState([]);
  const [selectedClassroomIds, setSelectedClassroomIds] = useState([]);
  const limit = 10;

  const { isLoading, error, data, status} = useClassrooms()

  const { mutate: mutateDelete, isSuccess: isSuccessDelete, error: errorDelete, isLoading: isLoadingDelete } = useDeleteMutationClassrooms(queryClient)

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

  function deleteSelected({ id }: Classroom) {
    mutateDelete(id);
  }

  useEffect(() => {
    if (status === 'success') {
      setClassrooms(data)
    }
  }, [data, status])

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
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading && classrooms.length === 0 && <Spinner />}
              {classrooms.length !== 0 && classrooms.slice(0, limit).map((classroom: Classroom) => (
                <TableRow
                  hover
                  key={classroom.id}
                  //@ts-ignore
                  selected={selectedClassroomIds.indexOf(classroom?.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      //@ts-ignore
                      checked={selectedClassroomIds.indexOf(classroom.id) !== -1}
                      onChange={(event) => handleSelectOne(event, classroom?.id)}
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
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        <IconButton edge="start" aria-label="edit">
                          <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteSelected(classroom)}>
                          <DeleteIcon />
                        </IconButton>
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
