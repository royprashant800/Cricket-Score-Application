import logo from './logo.svg';
import './App.css';
import {Button, Container, Grid, Typography} from "@material-ui/core";
import Navbar from './components/Navbar';
import {getMatches} from "./api/api"
import { Fragment, useEffect, useState } from 'react';
import MyCard from './components/MyCard';

function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        console.log(data);
      })
      .catch((Error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Welcome to CricSpirit</h1>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <MyCard match={match}></MyCard>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
