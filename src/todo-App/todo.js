import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export default function Todo() {
  const name = "Batu";
  const age = 25;

  let array = ["spoe", "mzik", 3, 4, 5];
  array.map((item) => {});

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      display="flex"
      height={"100vh"}
      flexDirection="column"
      width="100%"
    >
      <Grid item>
        <Typography>Todo Application</Typography>
      </Grid>
      <Grid item width="100%">
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={2}>
            <TextField />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">Add</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item width="100%">
        <Grid
          container
          width="100%"
          flexDirection="row"
          display="flex"
          justifyContent="space-evenly"
        >
          <Grid item>
            <Box
              sx={{
                border: "6px dashed grey",
                height: 400,
                width: 400,
              }}
            />
          </Grid>
          <Grid item>
            <Box
              sx={{
                border: "6px dashed grey",
                height: 400,
                width: 400,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
