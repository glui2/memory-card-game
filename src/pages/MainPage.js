import React, { useState } from "react";
import { Card } from "../components/Card";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

const MainPage = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item>
          <Card></Card>
        </Grid>
        <Grid item>
          <Card></Card>
        </Grid>
        <Grid item>
          <Card></Card>
        </Grid>
        <Grid item>
          <Card></Card>
        </Grid>
        <Grid item>
          <Card></Card>
        </Grid>
      </Grid>
    </div>
  );
};

export { MainPage };
