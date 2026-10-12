import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_CAROUSEL } from "../data/media";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_CAROUSEL.length);
    }, 5000);

    // Clean up the interval when component is removed
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((i) => (i + 1) % HERO_CAROUSEL.length);
  };

  const prev = () => {
    setIndex(
      (i) => (i - 1 + HERO_CAROUSEL.length) % HERO_CAROUSEL.length
    );
  };

  return (
    <div className="hero-carousel">
      {HERO_CAROUSEL.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="hero-carousel-slide"
          style={{
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}

      <div className="hero-carousel-scrim" />

      {/* Previous button */}
      <button
        className="hero-carousel-arrow hero-carousel-arrow-left"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next button */}
      <button
        className="hero-carousel-arrow hero-carousel-arrow-right"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Navigation dots */}
      <div className="hero-carousel-dots">
        {HERO_CAROUSEL.map((img, i) => (
          <button
            key={img.src}
            className={`hero-carousel-dot${
              i === index ? " active" : ""
            }`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}