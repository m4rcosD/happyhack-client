import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "../myNav.css";
import { useNavigate } from "react-router-dom";

const MyNav = (props) => {
  let { user } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const pages = [
    <Link className="toggle-link" to={"/add-form"}>
      Create a job
    </Link>,
    <Link className="toggle-link" to={"/events"}>
      Events
    </Link>,
  ];

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const settings = [
    <Link className="toggle-link" to={"/profile"}>
      Profile
    </Link>,
    <Link className="toggle-link" to={"/yourjobs"}>
      Your Jobs
    </Link>,
    <Link className="toggle-link" to={"/yourevents"}>
      Your Events
    </Link>,
    <Link className="toggle-link" to={"/userlist"}>
      User List
    </Link>,
    <Link
      className="toggle-link"
      onClick={() => {
        props.onLogout();
        handleCloseUserMenu();
      }}
      to={"/"}
    >
      Logout
    </Link>,
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    navigate("/profile");
  };
  const handleOpenUserMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{ backgroundColor: "#E7E7E7" }} position="static">
      <Container className="bar" maxWidth="xl">
        <Toolbar className="bar" disableGutters>
          <Typography
            className="text"
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link className="toggle-link" to={"/"}>
              {" "}
              HappyHack{" "}
            </Link>
          </Typography>

          <Box
            className="text"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem
                  className="text"
                  key={page + i}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            className="text"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link className="toggle-link" to={`/`}>
              {" "}
              HappyHack{" "}
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {!props.user ? (
              <div></div>
            ) : (
              pages.map((page, i) => (
                <Button
                  key={page + i}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!props.user ? (
              <div>
                <Link className="toggle-link" to="/signin">
                  {" "}
                  Sign In{" "}
                </Link>
                <Link className="toggle-link" to="/signup">
                  {" "}
                  Sign Up{" "}
                </Link>
              </div>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user.image} />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, i) => (
                    <MenuItem key={setting + i} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MyNav;
