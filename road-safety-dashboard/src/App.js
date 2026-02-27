
import HeatmapMap from "./components/HeatmapMap";
import AccidentChart from "./components/AccidentChart";
import BlackspotTable from "./components/BlackspotTable";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>🚦 Road Safety Analytics Dashboard</h1>
      <HeatmapMap />
      <AccidentChart />
      <BlackspotTable />
    </div>
  );
}

export default App;
