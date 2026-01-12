import * as React from "react";
import { resolvePoly, type PolyProps, cn, splitPolyProps } from "../lib/utils";

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    PolyProps { }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    (props, ref) => {
        const { polyProps, restProps } = splitPolyProps(props);
        const { className, ...htmlProps } = restProps;

        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl border bg-card text-card-foreground shadow",
                    resolvePoly(polyProps),
                    className
                )}
                {...htmlProps}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
