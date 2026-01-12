import * as React from 'react';
import { ClassValue } from 'clsx';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as CheckboxPrimitives from '@radix-ui/react-checkbox';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

declare function cn(...inputs: ClassValue[]): string;
type PolyEffect = "glass" | "floating" | "neon" | "bordered" | "gradient" | "frosted" | "tilt" | "masked" | "embossed" | "debossed" | "textured" | "acrylic" | "mica" | "metallic" | "spotlight" | "maskPattern" | "bounce" | "glow" | "pulse" | "shine" | "haptic" | "ring" | "liquid" | "ripple" | "reverb" | "expand" | "compress" | "glitch" | "magnetic" | "confetti" | "primary" | "secondary" | "outline" | "italic" | "bold" | "gradientText" | "shadowText" | "textShadow" | "readable" | "mono" | "serif" | "uppercase" | "lowercase" | "tracked" | "tight" | "clamped" | "typewriter" | "sm" | "xs" | "lg" | "xl" | "centered" | "padded" | "spaced" | "isolated" | "sticky" | "snap" | "fluid" | "constrained" | "aspect" | "hero" | "full" | "bleed" | "faded" | "hidden" | "skeleton" | "error" | "success" | "warning" | "info" | "loading" | "busy" | "disabled" | "vibrant" | "slideIn" | "fadeIn" | "zoomIn" | "rotateIn" | "reveal" | "stagger" | "loop" | "floatAnim" | "dotted" | "striped" | "checkered" | "noise" | "mesh" | "aurora";
type PolyProps = {
    [K in PolyEffect]?: boolean;
};
declare function splitPolyProps<T extends PolyProps>(props: T): {
    polyProps: PolyProps;
    restProps: any;
};
declare function resolvePoly(props: PolyProps): string;

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, PolyProps {
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, PolyProps {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface TextProps extends React.HTMLAttributes<HTMLSpanElement>, PolyProps {
    as?: "span" | "p" | "div" | "label";
}
declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLSpanElement>>;
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, PolyProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}
declare const Heading: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;

interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, PolyProps {
    direction?: "row" | "col";
    align?: "start" | "center" | "end" | "baseline" | "stretch";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    gap?: number;
    wrap?: boolean;
}
declare const Flex: React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>>;
interface GridProps extends React.HTMLAttributes<HTMLDivElement>, PolyProps {
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    smCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    mdCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    lgCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    xlCols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    gap?: number;
}
declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, PolyProps {
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>;
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root>, PolyProps {
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLButtonElement>>;
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, PolyProps {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const Modal: React.FC<DialogPrimitive.DialogProps>;
declare const ModalTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const ModalPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const ModalClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const ModalOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface ModalContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, PolyProps {
}
declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
declare const ModalHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ModalFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ModalTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const ModalDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

declare const Accordion: React.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>, PolyProps {
}
declare const AccordionTrigger: React.ForwardRefExoticComponent<AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
interface TooltipContentProps extends Omit<React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>, keyof PolyProps>, PolyProps {
}
declare const TooltipContent: React.ForwardRefExoticComponent<TooltipContentProps & React.RefAttributes<HTMLDivElement>>;

declare function ThemeToggle(): react_jsx_runtime.JSX.Element;

interface GlowCursorProps {
    className?: string;
    size?: number;
    color?: string;
    blur?: string;
    opacity?: number;
}
declare function GlowCursor({ className, size, color, blur, opacity, }: GlowCursorProps): react_jsx_runtime.JSX.Element;

interface ChartProps extends PolyProps {
    data: any[];
    className?: string;
    height?: number | string;
}
declare function AreaChart({ data, height, className, ...poly }: ChartProps): react_jsx_runtime.JSX.Element;
declare function BarChart({ data, height, className, ...poly }: ChartProps): react_jsx_runtime.JSX.Element;

interface PolyFormProps {
    schema: any;
    onSubmit: (data: any) => void;
    children: React.ReactNode;
    className?: string;
    defaultValues?: any;
}
declare function PolyForm({ schema, onSubmit, children, className, defaultValues }: PolyFormProps): react_jsx_runtime.JSX.Element;
interface FormFieldProps {
    name: string;
    label: string;
    children: (props: {
        field: any;
        error?: string;
    }) => React.ReactNode;
    className?: string;
}
declare function FormField({ name, label, children, className }: FormFieldProps): react_jsx_runtime.JSX.Element;
interface MultiStepFormProps {
    steps: {
        title: string;
        content: React.ReactNode;
        schema: any;
    }[];
    onComplete: (data: any) => void;
}
declare function MultiStepForm({ steps, onComplete }: MultiStepFormProps): react_jsx_runtime.JSX.Element;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, AreaChart, BarChart, Button, type ButtonProps, Card, type CardProps, Checkbox, type CheckboxProps, Flex, type FlexProps, FormField, GlowCursor, Grid, type GridProps, Heading, type HeadingProps, Input, type InputProps, Modal, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalOverlay, ModalPortal, ModalTitle, ModalTrigger, MultiStepForm, type PolyEffect, PolyForm, type PolyProps, Switch, type SwitchProps, Text, type TextProps, ThemeToggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, cn, resolvePoly, splitPolyProps };
