import { MapContainer, TileLayer } from "react-leaflet";

const MapArea = () => {
  return (
    <section className="flex-1 p-4">
      <div className="h-full min-h-[300px]">
        <MapContainer
          center={[49.2827, -123.1207]}
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </section>
  );
};

export default MapArea;
