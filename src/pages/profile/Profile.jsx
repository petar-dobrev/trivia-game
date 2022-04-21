import useSmallScreenSize from "../../hooks/useSmallScreenSize";
import { formatDate, secondsToMinutes } from "../../helpers/helpers";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import BackToMenu from "../../components/backToMenu/BackToMenu";
import GamesDataGrid from "../../components/gamesDataGrid/GamesDataGrid";
import "./profile.css";

function Profile() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    padding: "theme.spacing(1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  }));

  const games = [
    //Mock data
    {
      id: 123,
      highScore: 300,
      correctAnswers: 4,
      timePlayed: 321,
      datePlayed: "April 18, 2022 at 1:00:00 PM UTC+3",
    },
    {
      id: 125,
      highScore: 412,
      correctAnswers: 6,
      timePlayed: 280,
      datePlayed: "April 18, 2022 at 2:00:00 PM UTC+3",
    },
    {
      id: 1232,
      highScore: 300,
      correctAnswers: 4,
      timePlayed: 321,
      datePlayed: "April 18, 2022 at 1:00:00 PM UTC+3",
    },
    {
      id: 1125,
      highScore: 412,
      correctAnswers: 6,
      timePlayed: 280,
      datePlayed: "April 18, 2022 at 2:00:00 PM UTC+3",
    },
    {
      id: 1263,
      highScore: 300,
      correctAnswers: 4,
      timePlayed: 321,
      datePlayed: "April 18, 2022 at 1:00:00 PM UTC+3",
    },
    {
      id: 1235,
      highScore: 412,
      correctAnswers: 6,
      timePlayed: 280,
      datePlayed: "April 18, 2022 at 2:00:00 PM UTC+3",
    },
    {
      id: 12133,
      highScore: 300,
      correctAnswers: 4,
      timePlayed: 321,
      datePlayed: "April 18, 2022 at 1:00:00 PM UTC+3",
    },
    {
      id: 1675,
      highScore: 412,
      correctAnswers: 6,
      timePlayed: 280,
      datePlayed: "April 18, 2022 at 2:00:00 PM UTC+3",
    },
    {
      id: 121233,
      highScore: 300,
      correctAnswers: 4,
      timePlayed: 321,
      datePlayed: "April 17, 2022 at 1:00:00 PM UTC+3",
    },
    {
      id: 124125,
      highScore: 412,
      correctAnswers: 6,
      timePlayed: 280,
      datePlayed: "April 19, 2022 at 2:00:00 PM UTC+3",
    },
    {
      id: 1211233,
      highScore: 300,
      correctAnswers: 4,
      timePlayed: 321,
      datePlayed: "April 17, 2022 at 1:00:00 PM UTC+3",
    },
    {
      id: 1244125,
      highScore: 412,
      correctAnswers: 6,
      timePlayed: 280,
      datePlayed: "April 19, 2022 at 2:00:00 PM UTC+3",
    },
  ];

  const columns = [
    {
      field: "highScore",
      headerName: "High Score",
      type: "number",
      flex: useSmallScreenSize ? 2 : 2,
      headerAlign: "center",
      cellClassName: "cell",
    },
    {
      field: "correctAnsers",
      headerName: "Correct Answers",
      type: "number",
      flex: useSmallScreenSize ? 3 : 2,
      headerAlign: "center",
      cellClassName: "cell",
      sortable: false,
    },
    {
      field: "timePayed",
      headerName: "Time Played",
      type: "number",
      flex: useSmallScreenSize ? 2 : 2,
      headerAlign: "center",
      cellClassName: "cell",
      sortable: false,
    },
    {
      field: "datePlayed",
      headerName: "Date Played",
      type: "date",
      flex: 2,
      headerAlign: "center",
      cellClassName: "cell",
    },
  ];

  const rows = games.map((game) => ({
    id: game.id,
    highScore: game.highScore,
    correctAnsers: game.correctAnswers,
    timePayed: secondsToMinutes(game.timePlayed),
    datePlayed: formatDate(game.datePlayed),
  }));

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <h1>Username</h1>
        </Grid>
        <Grid item xs={2}>
          <BackToMenu />{" "}
        </Grid>
        <Grid item xs={4}>
          <Item>
            <p className="statTitle">High Score</p>
            <p className="statValue">431</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <p className="statTitle">Games Played</p>
            <p className="statValue">2</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <p className="statTitle">Correct Answers</p>
            <p className="statValue">30%</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <h2>Game History</h2>
          <GamesDataGrid columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
