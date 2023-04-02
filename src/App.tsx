import Typography from "@mui/material/Typography/Typography";
import "./App.css";
import Header from "./Components/Header";
import Shapes from "./Components/Shapes"; 

function App() {
  return (   
      <div className="App">
        <Typography>Круги и квадраты, v.1.0</Typography>
        <Header />
        <Shapes />
      </div>   
  );
}

export default App;
