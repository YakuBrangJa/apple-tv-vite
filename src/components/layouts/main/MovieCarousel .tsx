import React from "react";
import "./style/MovieCarousel.scss";
import ButtonPrimary from "../../ui/buttons/ButtonPrimary";
import InfiteSlideContainer from "../../ui/area/InfiteSlideContainer";

const SLIDE_ARRAY = [1, 2, 3, 4, 5, 6, 7];

function MovieCarousel() {
  return (
    <section className="MovieCarousel">
      <FeaturedPrimary />
      <FeaturedSecondary1 />
      <FeaturedSecondary2 />
    </section>
  );
}

export default MovieCarousel;

function FeaturedPrimary() {
  const intervalRef = React.useRef<any>(null);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {}, 4000);
    console.log("interval callback");
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [intervalRef]);

  return (
    <div className="FeaturedPrimary">
      <InfiteSlideContainer>
        <InfiteSlideContainer slideClassName="slider-animation">
          {SLIDE_ARRAY.map((slide) => (
            <div
              key={slide}
              className="primary-poster">
              Poster placeholder
            </div>
          ))}
        </InfiteSlideContainer>
      </InfiteSlideContainer>
    </div>
  );
}

function FeaturedSecondary1() {
  return (
    <div className="FeaturedSecondary1">
      <InfiteSlideContainer
        slideClassName="slider-animation"
        reverseSlideClassName="reverse-slider">
        {SLIDE_ARRAY.map((slide) => (
          <div
            key={slide}
            className="secondary-poster">
            Poster placeholder
            <StreamNowBtn />
          </div>
        ))}
      </InfiteSlideContainer>
    </div>
  );
}
function FeaturedSecondary2() {
  return (
    <div className="FeaturedSecondary2">
      <InfiteSlideContainer
        slideClassName="slider-animation"
        reverseSlideClassName="reverse-slider">
        {SLIDE_ARRAY.map((slide) => (
          <div
            key={slide}
            className="secondary-poster">
            Poster placeholder
            <StreamNowBtn />
          </div>
        ))}
      </InfiteSlideContainer>
    </div>
  );
}

function StreamNowBtn() {
  return (
    <div className="StreamNowBtn">
      <ButtonPrimary
        config={{
          size: "normal",
        }}>
        <span className="">Stream now</span>
      </ButtonPrimary>
    </div>
  );
}
