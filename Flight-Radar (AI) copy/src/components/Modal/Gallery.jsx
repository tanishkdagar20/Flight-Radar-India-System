import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Gallery = ({ data }) => {
  const arr = data?.large
    ? data.large
    : data?.medium
    ? data.medium
    : data?.thummbanils;

  return (
    <div className="gallery">
      {arr?.length > 0 ? (
        <Splide aria-label="Aircraft Gallery">
          {arr.map((item, key) => (
            <SplideSlide key={key}>
              <img src={item.src} alt="Aircraft" />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="warning">
          <p>No image content available</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
