import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import "./MainPage.css";

const CardContext = React.createContext("closed");

const MainPage = () => {
  const [cards, setCards] = useState([]); // store card values in array of tupies with structure index: {value: int, cardState: open/closed}
  const [newTurn, setNewTurn] = useState(true); // store whether is a new turn (true, picking first card) or same turn (false, picking 2nd card)
  const [firstCard, setFirstCard] = useState({ "": "" }); // store value of first card
  const [numberOfCardsOpened, setNumberOfCardsOpened] = useState(0);

  // useEffect(() => {
  //   if (numberOfCardsOpened == 2) {
  //     console.log("there are two cards opened ");
  //   }
  // }, [numberOfCardsOpened]);

  // const updateNumberOfOpenCards = () => {
  //   console.log("This card has been clicked");
  //   setNumberOfCardsOpened((numberOfCardsOpened) => numberOfCardsOpened + 1);

  //   setTimeout(() => {
  //     if (numberOfCardsOpened == 2) {
  //       const openCards = document.getElementsByClassName("show-white");
  //       console.log(openCards);
  //       for (let i = 0; i < openCards.length; i++) {
  //         openCards[i].classList.replace("show-white", "show-black");
  //       }
  //       setNumberOfCardsOpened(0);
  //     }
  //   }, 500);
  // };

  const generateCards = () => {
    const randomArray = [];

    for (var i = 0; i < 9; i++) {
      randomArray[i] = {
        value: Math.floor(Math.random() * 10),
        isCardOpened: false,
      };
    }

    const pairsArray = randomArray.concat(randomArray);
    const shuffledPairsArray = pairsArray.sort(() => {
      return Math.random() - 0.5;
    });

    console.log(shuffledPairsArray);
    setCards(shuffledPairsArray);
  };

  return (
    <div className="mainPage">
      <Grid container direction="row">
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={generateCards}>
            Start Game
          </Button>
        </Grid>
        {cards.map((card, index) => {
          return (
            <Grid item xs={2} key={index}>
              <div>
                <Card
                  value={card.value}
                  isCardOpened={card.isCardOpened}
                ></Card>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export { MainPage };
