import React from "react";

export const scrollToBottom = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
};

