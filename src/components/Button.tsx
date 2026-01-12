"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { resolvePoly, type PolyProps, cn, splitPolyProps } from "../lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PolyProps {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ asChild = false, ...props }, ref) => {
        const { polyProps, restProps } = splitPolyProps(props);
        const { className, ...htmlProps } = restProps;
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
                    "px-4 py-2", // Default padding
                    resolvePoly(polyProps),
                    className
                )}
                ref={ref}
                {...htmlProps}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
