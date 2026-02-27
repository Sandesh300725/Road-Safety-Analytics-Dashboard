
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import accidentData from "../data/accidents.json";

function HeatmapMap() {
  return (
    <MapContainer center={[23.2599, 77.4126]} zoom={6} style={{ height: "400px" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {accidentData.map((data) => (
        <CircleMarker
          key={data.id}
          center={[data.lat, data.lng]}
          radius={data.accidents / 10}
          color="red"
        >
          <Popup>
            {data.location} <br />
            Accidents: {data.accidents}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

export default HeatmapMap;
