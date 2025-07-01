import c from "../../utils/nullCheck";

const Airport = ({ data }) => {
  return (
    <div className="airport">
      {/* Origin Airport Info */}
      <div>
        <h2>{c(data.origin?.code?.iata)}</h2>
        <h3>{c(data.origin?.position?.region?.city)}</h3>
        <span>
          ({c(data.origin?.timezone?.abbr)}) <br />
          ({c(data.origin?.timezone?.name)})
        </span>
      </div>

      {/* Airplane Icon */}
      <div className="icon">
        <img src="/plane_icon.png" alt="Airplane Icon" />
      </div>

      {/* Destination Airport Info */}
      <div>
        <h2>{c(data.destination?.code?.iata)}</h2>
        <h3>{c(data.destination?.position?.region?.city)}</h3>
        <span>
          ({c(data.destination?.timezone?.abbr)}) <br />
          ({c(data.destination?.timezone?.name)})
        </span>
      </div>
    </div>
  );
};

export default Airport;
