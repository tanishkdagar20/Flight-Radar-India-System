import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import c from "../utils/nullCheck";
import { open } from "../redux/slices/detailSlice";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  // Index to start slicing from
  const [start, setStart] = useState(0);

  // Items per page
  const perPage = 12;

  // Index to slice until
  const end = start + perPage;

  // Slice the flights for current page
  const currFlights = flights.slice(start, end);

  // Total number of pages
  const total = Math.ceil(flights.length / perPage);

  // When a new page is selected
  const handlePage = (event) => {
    setStart(event.selected * perPage);
  };

  if (isLoading)
    return (
      <div className="list-wrapper">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="list-wrapper">
        <Error message={error} />
      </div>
    );

  return (
    <div className="list-container">
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Degree</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {currFlights.map((flight) => (
            <tr key={flight.id}>
              <td>{c(flight.id)}</td>
              <td>{c(flight.code)}</td>
              <td>{c(flight.lat)}</td>
              <td>{c(flight.lng)}</td>
              <td>{c(flight.deg)}</td>
              <td>
                <button onClick={() => dispatch(open(flight.id))}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-wrapper">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          className="pagination"
          pageCount={total || 0}
          pageRangeDisplayed={1}
          onPageChange={handlePage}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default List;
