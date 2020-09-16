import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import "./MainPage.css";
import { wait } from "@testing-library/react";

const CardContext = React.createContext("closed");

const MainPage = () => {
  const [cards, setCards] = useState([]); // store card values in array of tupies with structure index: {value: int, cardState: open/closed}
  const [newTurn, setNewTurn] = useState(true); // store whether is a new turn (true, picking first card) or same turn (false, picking 2nd card)
  const [firstCard, setFirstCard] = useState({
    index: null,
    value: null,
  }); // store value of first card

  const openCard = (index) => {
    console.log("This card has been clicked");
    const currentCards = [...cards];
    const selectedCard = { ...cards[index] };

    if (!selectedCard.isCardOpened) {
      selectedCard.isCardOpened = true;
      currentCards[index] = selectedCard;
      setCards(currentCards);
      console.log(cards);
      console.log(selectedCard);
      if (!newTurn) {
        //compare value with firstCard
        if (selectedCard.value === firstCard.value) {
          console.log("You've found a pair!");
          setNewTurn(true);
          setFirstCard({ index: "", value: "" });
        } else {
          currentCards[firstCard.index].isCardOpened = false;
          currentCards[index].isCardOpened = false;
          setTimeout(setCards(currentCards), 3000);
          setNewTurn(true);
          setFirstCard({ index: "", value: "" });
        }
      } else {
        //setFirstCard(this card's value)
        setFirstCard({ index: index, value: selectedCard.value });
        setNewTurn(false);
        console.log(firstCard);
      }
    }
  };

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
              <div
                onClick={() => {
                  openCard(index);
                }}
              >
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
