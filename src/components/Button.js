import React from "react";

export function Button({ children, onClick = null }) {
    return (
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
}
