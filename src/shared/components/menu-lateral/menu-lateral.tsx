import {
    Avatar,
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  
  interface IMenuLateralProps {
    children: React.ReactNode;
  }
  
  export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <>
        <Drawer open={true} variant={smDown ? "temporary" : "permanent"}>
          <Box
            width={theme.spacing(28)}
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Box
              width="100%"
              height={theme.spacing(20)}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                src=""
              />
            </Box>
  
            <Divider />
  
            <Box flex={1}>
              <List component="nav">
                <ListItemButton>
                  <ListItemIcon>
                    
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </List>
            </Box>
          </Box>
        </Drawer>
  
        <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
          {children}
        </Box>
      </>
    );
  };
  
