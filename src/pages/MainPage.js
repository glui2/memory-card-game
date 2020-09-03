import React, { useState } from "react";
import { Card } from "../components/Card";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import "./MainPage.css";

const MainPage = () => {
  const [cardValues, setCardValues] = useState([]);

  const generateCardValues = () => {
    const randomArray = [];

    for (var i = 0; i < 10; i++) {
      randomArray[i] = Math.floor(Math.random() * 10);
    }

    const pairsArray = randomArray.concat(randomArray);
    pairsArray.map((value) => {
      console.log(value);
    });
    setCardValues(pairsArray);
  };

  return (
    <div className="mainPage">
      <Grid container direction="row">
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={generateCardValues}
          >
            Start Game
          </Button>
        </Grid>
        {cardValues.map((value, index) => {
          return (
            <Grid item xs={2} key={index}>
              <Card value={value}></Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export { MainPage };
