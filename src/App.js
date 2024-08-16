import "./App.css";
import StringCalculator from "./pages/stringCalculator";
import Header from "./components/Header";

function App() {
  return (
    <div className="App" data-testid="app">
      <Header />
      <StringCalculator />
    </div>
  );
}

export default App;
