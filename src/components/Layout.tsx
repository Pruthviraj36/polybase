import * as React from "react";
import { resolvePoly, type PolyProps, cn, splitPolyProps } from "../lib/utils";

export interface FlexProps
    extends React.HTMLAttributes<HTMLDivElement>,
    PolyProps {
    direction?: "row" | "col";
    align?: "start" | "center" | "end" | "baseline" | "stretch";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    gap?: number;
    wrap?: boolean;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
    (
        {
            direction = "row",
            align = "center",
            justify = "start",
            gap = 4,
            wrap = false,
            ...props
        },
        ref
    ) => {
        const { polyProps, restProps } = splitPolyProps(props);
        const { className, ...htmlProps } = restProps;

        return (
            <div
                ref={ref}
                className={cn(
                    "flex",
                    direction === "col" ? "flex-col" : "flex-row",
                    align === "start" && "items-start",
                    align === "center" && "items-center",
                    align === "end" && "items-end",
                    align === "baseline" && "items-baseline",
                    align === "stretch" && "items-stretch",
                    justify === "start" && "justify-start",
                    justify === "center" && "justify-center",
                    justify === "end" && "justify-end",
                    justify === "between" && "justify-between",
                    justify === "around" && "justify-around",
                    justify === "evenly" && "justify-evenly",
                    gap === 1 && "gap-1",
                    gap === 2 && "gap-2",
                    gap === 3 && "gap-3",
                    gap === 4 && "gap-4",
                    gap === 6 && "gap-6",
                    gap === 8 && "gap-8",
                    wrap && "flex-wrap",
                    resolvePoly(polyProps),
                    className
                )}
                {...htmlProps}
            />
        );
    }
);
Flex.displayName = "Flex";

export interface GridProps
    extends React.HTMLAttributes<HTMLDivElement>,
    PolyProps {
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    smCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    mdCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    lgCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    xlCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    gap?: number;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    ({ cols = 1, smCols, mdCols, lgCols, xlCols, gap = 4, ...props }, ref) => {
        const { polyProps, restProps } = splitPolyProps(props);
        const { className, ...htmlProps } = restProps;

        const getColsClass = (val: number | undefined, prefix?: string) => {
            if (!val) return "";
            const p = prefix ? `${prefix}:` : "";
            if (val === 12) return `${p}grid-cols-12`;
            return `${p}grid-cols-${val}`;
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "grid",
                    getColsClass(cols),
                    getColsClass(smCols, "sm"),
                    getColsClass(mdCols, "md"),
                    getColsClass(lgCols, "lg"),
                    getColsClass(xlCols, "xl"),
                    gap === 4 && "gap-4",
                    gap === 2 && "gap-2",
                    gap === 3 && "gap-3",
                    gap === 6 && "gap-6",
                    gap === 8 && "gap-8",
                    gap === 12 && "gap-12",
                    resolvePoly(polyProps),
                    className
                )}
                {...htmlProps}
            />
        );
    }
);
Grid.displayName = "Grid";

export { Flex, Grid };
