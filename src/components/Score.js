import "./Score.css";
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const Score = (props) => {
  // const [isCardOpenedState, setIsCardOpenedState] = useState(false);
  const scoreValue = props.score;

  return (
    <Card className="scoreboard" variant="outlined">
      <Typography>{scoreValue}</Typography>
    </Card>
  );
};

export { Score };
