
import React from "react";
import starFull from "@/Assets/Images/full-star.png";
import starEmpty from "@/assets/images/empty-star.png";

const Rate = ({ rating }) => {
    const numOfStar = [1, 2, 3, 4, 5]

    return (
        <div className="allStars">
            {numOfStar.map((starIndex) =>
                rating >= starIndex ? (
                    <img
                        key={starIndex}
                        className="etoile"
                        src={starFull}
                        alt="Full star"
                    />
                ) : (
                    <img
                        key={starIndex}
                        className="etoile"
                        src={starEmpty}
                        alt="Empty star"
                    />
                )
            )}
        </div>
    );
};

export default Rate;
