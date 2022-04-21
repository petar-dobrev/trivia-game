import useSmallScreenSize from "../../hooks/useSmallScreenSize";
import { formatDate, displayRank } from "../../helpers/helpers";
import { Link } from "react-router-dom";
import GamesDataGrid from "../../components/gamesDataGrid/GamesDataGrid";
import BackToMenu from "../../components/backToMenu/BackToMenu";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Leaderboard() {
  const games = [
    // Mock data
    {
      id: 123,
      score: 400,
      datePlayed: "April 18, 2022 at 1:00:00 PM UTC+3",
      user: {
        name: "Ivan",
        id: "userId",
      },
    },
    {
      id: 1234,
      score: 349,
      datePlayed: "April 20, 2022 at 1:00:00 PM UTC+3",
      user: {
        name: "Gosho",
        id: "userId",
      },
    },
    {
      id: 12324,
      score: 250,
      datePlayed: "April 20, 2022 at 1:00:00 PM UTC+3",
      user: {
        name: "Mitko",
        id: "userId",
      },
    },
    {
      id: 122324,
      score: 250,
      datePlayed: "April 20, 2022 at 1:00:00 PM UTC+3",
      user: {
        name: "Spas",
        id: "userId",
      },
    },
  ];

  const columns = [
    {
      field: "rank",
      headerName: "Rank",
      type: "number",
      flex: useSmallScreenSize ? 2 : 2,
      headerAlign: "center",
      cellClassName: "cell cellRank",
      renderCell: (params) => displayRank(params.value),
    },
    {
      field: "score",
      headerName: "Score",
      type: "number",
      flex: useSmallScreenSize ? 3 : 2,
      headerAlign: "center",
      cellClassName: "cell",
    },
    {
      field: "user",
      headerName: "User",
      flex: useSmallScreenSize ? 2 : 2,
      headerAlign: "center",
      cellClassName: "cell",
      sortable: false,
      renderCell: (params) => <Link to={`/users/:${params.value.id}`}>{params.value.name}</Link>,
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

  const rows = games.map((game, index) => ({
    id: game.id,
    rank: index + 1,
    score: game.score,
    user: game.user,
    datePlayed: formatDate(game.datePlayed),
  }));

  return (
    <Container>
      <Grid container>
        <Grid item xs={10}>
          <h1>Leaderboard</h1>
        </Grid>
        <Grid item xs={2}>
          <BackToMenu />
        </Grid>
      </Grid>
      <GamesDataGrid columns={columns} rows={rows} />
    </Container>
  );
}

export default Leaderboard;
