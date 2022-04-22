import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import "./play.css";

function Play() {
  const questionIsAnswered = true; //Placeholder

  const Question = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minHeight: "300px",
    padding: theme.spacing(2),
    marginBlock: theme.spacing(2),
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    textAlign: "center",
    fontSize: "1.8rem",
  }));

  const Dashboard = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    textAlign: "center",
  }));

  return (
    <div className="">
      <Container>
        <Grid container spacing={2} marginY={1}>
          <Grid item xs={6}>
            <Dashboard>
              <p className="dashboardTitle">Timer</p>
              <p className="dashboardValue">01:12</p>
            </Dashboard>
          </Grid>
          <Grid item xs={6}>
            <Dashboard>
              <p className="dashboardTitle">Score</p>
              <p className="dashboardValue">200</p>
            </Dashboard>
          </Grid>
        </Grid>
        <Question>
          The song &quot;Caramelldansen&quot; is commonly mistaken as a Japanese song, what language
          is the song actually sung in?
        </Question>
        <ButtonGroup variant="contained" size="large" fullWidth>
          <Button
            color="success"
            className="playBtn"
            endIcon={<CheckCircleOutlineSharpIcon className="playBtnIcon" />}
          >
            True
          </Button>
          <Button
            color="error"
            className="playBtn"
            endIcon={<HighlightOffSharpIcon className="playBtnIcon" />}
          >
            False
          </Button>
        </ButtonGroup>
        {questionIsAnswered && (
          <div className="nextQuestionBtnContainer">
            <Button variant="outlined" color="secondary" size="large" fullWidth className="playBtn">
              Next Question
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Play;
