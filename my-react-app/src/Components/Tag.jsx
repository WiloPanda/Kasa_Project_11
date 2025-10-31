import React from 'react'

const Tag = ({ allTags }) => {

    return (
        <div>
            {
                <div className="tags">
                    {allTags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            }
        </div>
    );
};

export default Tag;