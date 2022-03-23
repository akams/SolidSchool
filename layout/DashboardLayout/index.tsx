import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useLayoutGlobalState } from "@Context/LayoutContext";
import { useGlobalState } from "@Context/UserContext";
import { DashboardNavbar } from "@Layout/DashboardNavbar";
import { DashboardSidebar } from "@Layout/DashboardSidebar";
import { redirectPage } from "@Utils/redirect";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export const DashboardLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [layoutState] = useLayoutGlobalState();
  const { isSidebarOpened } = layoutState;
  const [state, dispatch] = useGlobalState();
  const { user } = state;
  // console.log("layoutState", layoutState);
  // console.log("state", state);
  // console.log("user", user);

  const isAuthenticated = Object.keys(user).length !== 0;

  // console.log("isAuthenticated", isAuthenticated);

  if (!isAuthenticated) {
    redirectPage("/login");
  }

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(false)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpened}
      />
    </>
  );
};
