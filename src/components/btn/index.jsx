import React from "react";

const Button = ({ className, eventHandler, name }) => {
    return (
        <button className={className} onClick={eventHandler}>
            {name}
        </button>
    );
};

export default Button;
