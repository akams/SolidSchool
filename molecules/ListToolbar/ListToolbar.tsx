import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

import { Search as SearchIcon } from "@Atoms/Icons/search";
import { Upload as UploadIcon } from "@Atoms/Icons/upload";
import { Download as DownloadIcon } from "@Atoms/Icons/download";

type ListToolbarProps = {
  titleHeaderComponent: string;
  subTextBtnCreate: string;
  urlCreateBtn?: string;
  placeholderTextSearchBar: string;
};

const ListToolbar = ({
  titleHeaderComponent,
  subTextBtnCreate,
  urlCreateBtn,
  placeholderTextSearchBar,
}: ListToolbarProps) => {
  const router = useRouter();
  return (
    <Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          {titleHeaderComponent}
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button startIcon={<UploadIcon fontSize="small" />} sx={{ mr: 1 }}>
            Import
          </Button>
          <Button startIcon={<DownloadIcon fontSize="small" />} sx={{ mr: 1 }}>
            Export
          </Button>
          <Button color="primary" variant="contained" onClick={() => router.push(urlCreateBtn)}>
            Ajouter {subTextBtnCreate}
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder={`Search ${placeholderTextSearchBar}`}
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ListToolbar;
