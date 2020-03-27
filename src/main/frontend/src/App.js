import React, { useReducer } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import OLMap from "./components/OLMap";
import LoginFragment from "./components/LoginFragment";
import SignUpFragment from "./components/SignUpFragment";

const drawerWidth = 400;
export const MyContext = React.createContext(null)

const initialState = {
  currentComponent: "Login",
  loggedIn: false
}
const useStyles = makeStyles(theme => ({
  root: {
    offset: theme.mixins.toolbar
  },
  appBar: {
    background: '#5077a8',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    container: {
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
  },
}));
export const UPDATE_COMPONENT = 'UPDATE_COMPONENT';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';


function reducer(state, action) {
  switch (action.type) {
    case UPDATE_COMPONENT:
      return {
        currentComponent: action.currentComponent
      }
    case SET_LOGGED_IN:
      return {
        loggedIn: action.loggedIn
      }
    default:
      return initialState
  }
}

export default function AdoptAStormDrain() {
  const classes = useStyles();
  const theme = useTheme();
  const [user, dispatch] = useReducer(reducer, initialState);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const getComponent = () => {
    let component;
    switch (user.currentComponent){
      case 'Login' :
        component = <LoginFragment />;
        break;
      case 'SignUp' :
        component = <SignUpFragment />;
        break;
      default:
        component = <LoginFragment />;
    }
    return component;
  };

  return (
      <div >
        <MyContext.Provider value={{ user, dispatch }}>
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
        >
          <Toolbar style={{justifyContent: 'space-between'}}>
            <Typography variant="h6" noWrap>
              Adopt a Storm Drain Lafayette
            </Typography>
            <div >
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="end"
                  className={clsx( open && classes.hide)}
              >
                  <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            {getComponent()}
          </div>
        </Drawer>
         <Toolbar />
        <OLMap />
        </MyContext.Provider>
        </div>

  );
}
