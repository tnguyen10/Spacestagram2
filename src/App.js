import "./App.css";
import NASACards from "./components/NASACards";
import Typography from "@mui/material/Typography";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

function App() {
  return (
    <div className="App" style={{ padding: "1%" }}>
      <Typography gutterBottom variant="h3" component="div">
        <RocketLaunchIcon/>
        {"   "}
        Spacestagram
        {"   "}
        <RocketLaunchIcon/>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Brought to you by NASA's Image API
      </Typography>
      <NASACards></NASACards>
    </div>
  );
}

export default App;
