
import accidentData from "../data/accidents.json";

function BlackspotTable() {
  const sortedData = [...accidentData].sort((a, b) => b.accidents - a.accidents);

  return (
    <div>
      <h2>Top Accident Blackspots</h2>
      <ul>
        {sortedData.map((spot) => (
          <li key={spot.id}>
            {spot.location} - {spot.accidents} accidents
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlackspotTable;
