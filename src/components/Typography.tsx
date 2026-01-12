import * as React from "react";
import { resolvePoly, type PolyProps, cn, splitPolyProps } from "../lib/utils";

export interface TextProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    PolyProps {
    as?: "span" | "p" | "div" | "label";
}

const Text = React.forwardRef<HTMLSpanElement, TextProps>(
    ({ as: Comp = "span", ...props }, ref) => {
        const { polyProps, restProps } = splitPolyProps(props);
        const { className, ...htmlProps } = restProps;

        return (
            <Comp
                ref={ref as any}
                className={cn(resolvePoly(polyProps), className)}
                {...htmlProps}
            />
        );
    }
);
Text.displayName = "Text";

export interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    PolyProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ level = 1, ...props }, ref) => {
        const { polyProps, restProps } = splitPolyProps(props);
        const { className, ...htmlProps } = restProps;
        const Comp = `h${level}` as const;

        return (
            <Comp
                ref={ref}
                className={cn(
                    "font-bold tracking-tight",
                    level === 1 && "text-4xl md:text-5xl",
                    level === 2 && "text-3xl md:text-4xl",
                    level === 3 && "text-2xl md:text-3xl",
                    level === 4 && "text-xl md:text-2xl",
                    resolvePoly(polyProps),
                    className
                )}
                {...htmlProps}
            />
        );
    }
);
Heading.displayName = "Heading";

export { Text, Heading };
