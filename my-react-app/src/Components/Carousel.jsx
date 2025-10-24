import React, { useState, useCallback, useEffect } from "react";

const Carousel = ({ images = [], className = "", showCounter = true }) => {
    const [index, setIndex] = useState(0);
    const n = Array.isArray(images) ? images.length : 0;

    useEffect(() => {
        setIndex(0);
    }, [n]);

    const go = useCallback(
        (delta) => {
            if (n <= 1) return;
            setIndex((prev) => (prev + delta + n) % n);
        },
        [n]
    );

    if (n === 0) return null;

    return (
        <div className={`carousel ${className}`}>
            <img
                className="carousel__img"
                src={images[index]}
                alt={`photo ${index + 1} sur ${n}`}
                loading="lazy"
            />

            {n > 1 && (
                <>
                    <button
                        type="button"
                        className="carousel__arrow carousel__arrow--left"
                        aria-label="Image précédente"
                        onClick={() => go(-1)}
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        className="carousel__arrow carousel__arrow--right"
                        aria-label="Image suivante"
                        onClick={() => go(1)}
                    >
                        ›
                    </button>
                    {showCounter && (
                        <div className="carousel__counter">
                            {index + 1}/{n}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Carousel;
