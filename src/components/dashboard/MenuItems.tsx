import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from '@mui/icons-material/BarChart';

export const MenuItems = (
  <>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Katas" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Ranking" />
    </ListItemButton>
  </>
);
