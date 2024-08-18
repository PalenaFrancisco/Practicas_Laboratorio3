import "./App.css";
import Tables from "./components/Tables"

const netIncomes = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
];

const App = () => {
  return (
    <div className="app">
      <Tables incomes= {netIncomes}/>
    </div>
  );
}

export default App;
