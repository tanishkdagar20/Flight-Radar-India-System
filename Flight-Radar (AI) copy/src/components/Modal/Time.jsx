import c from "../../utils/nullCheck";
import t from "../../utils/formatDate";

const Time = ({ data }) => {
  return (
    <div className="time">
      <div>
        <span>Scheduled Departure</span>
        <span>{c(t(data.scheduled?.departure))}</span>
      </div>
      <div>
        <span>Scheduled Arrival</span>
        <span>{c(t(data.scheduled?.arrival))}</span>
      </div>
      <div>
        <span>Actual Departure</span>
        <span>{c(t(data.real?.departure))}</span>
      </div>
      <div>
        <span>Estimated Arrival</span>
        <span>{c(t(data.estimated?.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;
