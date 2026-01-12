"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { resolvePoly, type PolyProps, cn, splitPolyProps } from "../lib/utils";

export interface SwitchProps
    extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    PolyProps { }

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    SwitchProps
>(({ className, ...props }, ref) => {
    const { polyProps, restProps } = splitPolyProps(props);

    return (
        <SwitchPrimitives.Root
            className={cn(
                "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
                resolvePoly(polyProps),
                className
            )}
            {...restProps}
            ref={ref}
        >
            <SwitchPrimitives.Thumb
                className={cn(
                    "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                )}
            />
        </SwitchPrimitives.Root>
    );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export interface CheckboxProps
    extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root>,
    PolyProps { }

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitives.Root>,
    CheckboxProps
>(({ className, ...props }, ref) => {
    const { polyProps, restProps } = splitPolyProps(props);

    return (
        <CheckboxPrimitives.Root
            ref={ref}
            className={cn(
                "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
                resolvePoly(polyProps),
                className
            )}
            {...restProps}
        >
            <CheckboxPrimitives.Indicator
                className={cn("flex items-center justify-center text-current")}
            >
                <Check className="h-4 w-4" />
            </CheckboxPrimitives.Indicator>
        </CheckboxPrimitives.Root>
    );
});
Checkbox.displayName = CheckboxPrimitives.Root.displayName;

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    PolyProps { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        const { polyProps, restProps } = splitPolyProps(props);

        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    resolvePoly(polyProps),
                    className
                )}
                ref={ref}
                {...restProps}
            />
        );
    }
);
Input.displayName = "Input";

export { Switch, Checkbox, Input };
