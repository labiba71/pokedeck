import React from "react";
import "./App.css";
import {
  // Button,
  // Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Content from "./Content";

const useStyles = makeStyles({
  heyStyle: {
    fontStyle: "oblique",
    color: "red",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      {/* <Typography className={classes.heyStyle} variant="h3">Hey it's me LABIBA</Typography>
      <Button color="secondary" variant="outlined">Hello World</Button> */}
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
          <Grid xs={12} sm={8}>
            <Content/>
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
