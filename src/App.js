import React from "react";
import { useSelector } from "react-redux";
import {  BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import ReadmeViewer from "./views/ReadmeViewer";
import ReposList from "./components/ReposList";
import SearchBox from "./components/SearchBox";
import HomeView from "./views/HomeView";
const drawerWidth = 340;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: 150
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
export default function App() {
  const classes = useStyles();
  const reposList = useSelector(state => state.repo);

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <SearchBox />
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          {reposList.count > 0 ? <ReposList /> : " no content"}
        </Drawer>
        <main className={classes.content}>
          <ReadmeViewer />
        </main>
      </div>
    </BrowserRouter>
  );
}
