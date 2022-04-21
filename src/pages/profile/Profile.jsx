import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import BackToMenu from "../../components/backToMenu/BackToMenu";
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
          {/* GamesGrid Component */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
