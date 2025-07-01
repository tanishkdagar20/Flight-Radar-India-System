import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { getIcon } from "../utils/constants";
import { clearRoute, open } from "../redux/slices/detailSlice";
import { useEffect } from "react";
import { getFlights } from "../redux/actions";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flight);
  const { route } = useSelector((store) => store.detail);

  useEffect(() => {
    // Fetch updated flight data every 10 seconds
    const id = setInterval(() => dispatch(getFlights()), 10000);

    // Stop the interval on component unmount
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <MapContainer
  center={[22.9734, 78.6569]}  // Center of India
  zoom={5}
  scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight) => {
        return (
          <Marker
            key={flight.id}
            position={[flight.lat, flight.lng]}
            icon={getIcon(flight.deg)}
          >
            <Popup>
              <div className="popup">
                <span>Code: {flight.code}</span>
                <button onClick={() => dispatch(open(flight.id))}>Details</button>
                {route.length > 0 && (
                  <button onClick={() => dispatch(clearRoute())}>
                    Clear Route
                  </button>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}
      {route && route.length > 0 && <Polyline positions={route} />}
    </MapContainer>
  );
};

export default Map;
