import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Score } from "../components/Score";
import "./MainPage.css";
import { wait } from "@testing-library/react";

const MainPage = () => {
  const [cards, setCards] = useState([]); // store card values in array of tupies with structure index: {value: int, cardState: open/closed}
  const [newTurn, setNewTurn] = useState(true); // store whether is a new turn (true, picking first card) or same turn (false, picking 2nd card)
  const [firstCard, setFirstCard] = useState({}); // store value of first card
  const [score, setScore] = useState(0);

  // useEffect(() => {
  //   console.log({ firstCard });
  // }, [firstCard]);

  const openCard = (index) => {
    console.log("Card index " + index + " has been clicked");
    // const currentCards = [...cards];
    const selectedCard = cards[index];
    console.log({ selectedCard });

    if (!selectedCard.isCardOpened) {
      selectedCard.isCardOpened = true;
      console.log("Selected card is now open");
      // currentCards[index] = selectedCard;
      // setCards(currentCards);
      console.log(cards);
      console.log({ selectedCard });

      if (!newTurn) {
        //compare value with firstCard
        console.log("SECOND CARD SELECTED");
        console.log({ firstCard });
        if (selectedCard.value === firstCard.value) {
          console.log("You've found a pair!");
          setScore(score + 1);
          setNewTurn(true);
          setFirstCard({ index: "", value: "" });
        } else {
          console.log("Try again!");
          cards[firstCard.index].isCardOpened = false;
          cards[index].isCardOpened = false;
          console.log(
            "flipping over cards with index: " + index + " " + firstCard.index
          );
          console.log(cards);
          setNewTurn(true);
          setFirstCard({ index: "", value: "" });
        }
      } else {
        //setFirstCard(this card's value)
        console.log("FIRST CARD SELECTED");

        setFirstCard({ index: index, value: selectedCard.value });
        setNewTurn(false);
      }
    }
  };

  const generateCards = () => {
    setScore(0);
    var randomArray1 = [];
    var randomArray2 = [];

    for (var i = 0; i < 9; i++) {
      var randomNumber = Math.floor(Math.random() * 10);

      randomArray1[i] = {
        value: randomNumber,
        isCardOpened: false,
      };
      randomArray2[i] = {
        value: randomNumber,
        isCardOpened: false,
      };
    }

    console.log(randomArray1);

    // randomArray2 = randomArray1.map((element) => {
    //   return { ...element };
    // });

    console.log(randomArray2);

    const pairsArray = randomArray1.concat(randomArray2);
    console.log(pairsArray);
    const shuffledPairsArray = pairsArray.sort(() => {
      return Math.random() - 0.5;
    });

    console.log(shuffledPairsArray);
    setCards(shuffledPairsArray);
  };

  return (
    <div className="mainPage">
      <Grid container direction="row">
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={generateCards}>
            New Game
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Score score={score}></Score>
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
