import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/actions";
import Head from "./Head";
import Loader from "../Loader";
import Airport from "./Airport";
import Time from "./Time";
import Aircraft from "./Aircraft";
import Gallery from "./Gallery";

const Modal = () => {
  const dispatch = useDispatch();
  const { detailId, isLoading, error, info } = useSelector(
    (store) => store.detail
  );

  useEffect(() => {
    // Stop the function if there is no ID
    if (!detailId) return;

    // Fetch details of the flight with the given ID
    dispatch(getDetails(detailId));
  }, [detailId]);

  return (
    detailId && (
      <div className="modal-outer">
        <div className="modal-inner">
          <Head info={info} />
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error message={error} />
          ) : (
            info && (
              <div className="info-wrapper">
                <div>
                  <Gallery data={info.aircraft.images} />
                  <Airport data={info.airport} />
                  <Time data={info.time} />
                  <Aircraft data={info.aircraft} />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    )
  );
};

export default Modal;
