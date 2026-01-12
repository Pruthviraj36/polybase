"use client";

import * as React from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "../lib/utils";

interface GlowCursorProps {
    className?: string;
    size?: number;
    color?: string;
    blur?: string;
    opacity?: number;
}

export function GlowCursor({
    className,
    size = 400,
    color = "var(--primary)",
    blur = "100px",
    opacity = 0.15,
}: GlowCursorProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - size / 2);
            mouseY.set(e.clientY - size / 2);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY, size]);

    return (
        <motion.div
            style={{
                x,
                y,
                width: size,
                height: size,
                backgroundColor: color,
                filter: `blur(${blur})`,
                opacity,
            }}
            className={cn(
                "pointer-events-none fixed top-0 left-0 z-0 rounded-full",
                className
            )}
        />
    );
}
