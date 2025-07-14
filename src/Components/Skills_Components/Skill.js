import React, { useEffect, useRef } from "react";

const Skill = (props) => {
    const circleRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        const setProgress = (percent) => {
            const offset = circumference - percent / 100 * circumference;
            circle.style.strokeDashoffset = offset;
        };

        setProgress(+(props.percentage));
    }, []);

    return (
        <div className="Skill">
            <p className="skill-percentage">{props.percentage}%</p>
            <svg
                className="progress-ring"
                width="200"
                height="200">
                <circle
                    ref={circleRef}
                    className="progress-ring-circle"
                    stroke="#a3978e"
                    strokeWidth="10"
                    fill="transparent"
                    r="60"
                    cx="100"
                    cy="100"
                    strokeLinecap="round" />
            </svg>
            <h2 className="skill-name">{props.name}</h2>
        </div>
    )
}

export default Skill;