import { useEffect, useState } from "react";

export default function PresenceEngine({ children }) {

    const [presence, setPresence] = useState({

        x: 0,
        y: 0,

    });

    useEffect(() => {

        const handleMouseMove = (event) => {

            const x =
                (event.clientX - window.innerWidth / 2) /
                window.innerWidth;

            const y =
                (event.clientY - window.innerHeight / 2) /
                window.innerHeight;

            setPresence({

                x,
                y,

            });

        };

        window.addEventListener("mousemove", handleMouseMove);

        return () =>
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

    }, []);

    return children(presence);

}