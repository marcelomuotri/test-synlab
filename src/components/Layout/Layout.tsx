import { Outlet } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./layout.scss";

export default function Layout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleListItemClick = () => {
    navigate("/");
  };

  return (
    <Box
      className={`layout ${isMobile ? "layout--mobile" : "layout--desktop"}`}
    >
      <Box
        className={`layout__sidebar ${
          isMobile ? "layout__sidebar--mobile" : "layout__sidebar--desktop"
        }`}
      >
        <List>
          <ListItemButton onClick={handleListItemClick}>
            <ListItemText className="layout__list-text" primary="Home" />
          </ListItemButton>
        </List>
      </Box>
      <Box className="layout__content">
        <Outlet />
      </Box>
    </Box>
  );
}
