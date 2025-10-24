import React, { useId, useState } from "react";

const Collapse = ({ title, content, items, className = "", children }) => {
    const [open, setOpen] = useState(false);
    const contentId = useId();

    const body = Array.isArray(items) ? (
        <ul className="collapse__list">
            {items.map((it, idx) => <li key={idx}>{it}</li>)}
        </ul>
    ) : typeof content === "string" ? (
        <p className="collapse__text">{content}</p>
    ) : (
        children
    );

    return (
        <div className={`collapse ${open ? "is-open" : ""} ${className}`}>
            <div className="collapse__header">
                <span className="collapse__title">{title}</span>
                <svg className="collapse__icon" aria-expanded={open}
                    aria-controls={contentId}
                    onClick={() => setOpen(o => !o)} width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 16l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
                </svg>
            </div>
            <div id={contentId} className="collapse__content" >
                <div className="collapse__inner">
                    {body}
                </div>
            </div>
        </div>
    );
};

export default Collapse;