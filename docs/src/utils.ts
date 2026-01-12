import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export type PolyEffect =
    | "glass" | "floating" | "neon" | "bordered" | "gradient" | "frosted" | "tilt" | "masked" | "embossed" | "debossed" | "textured" | "acrylic" | "mica" | "metallic" | "spotlight" | "maskPattern"
    | "bounce" | "glow" | "pulse" | "shine" | "haptic" | "ring" | "liquid" | "ripple" | "reverb" | "expand" | "compress" | "glitch" | "magnetic" | "confetti" | "primary" | "secondary" | "outline"
    | "italic" | "bold" | "gradientText" | "shadowText" | "textShadow" | "readable" | "mono" | "serif" | "uppercase" | "lowercase" | "tracked" | "tight" | "clamped" | "typewriter" | "sm" | "xs" | "lg" | "xl"
    | "centered" | "padded" | "spaced" | "isolated" | "sticky" | "snap" | "fluid" | "constrained" | "aspect" | "hero" | "full" | "bleed"
    | "faded" | "hidden" | "skeleton" | "error" | "success" | "warning" | "info" | "loading" | "busy" | "disabled" | "vibrant"
    | "slideIn" | "fadeIn" | "zoomIn" | "rotateIn" | "reveal" | "stagger" | "loop" | "floatAnim"
    | "dotted" | "striped" | "checkered" | "noise" | "mesh" | "aurora";

export type PolyProps = {
    [K in PolyEffect]?: boolean;
};

const effectMap: Record<PolyEffect, string> = {
    // Surfaces
    glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
    floating: "shadow-2xl hover:-translate-y-1 transition-transform duration-300",
    neon: "shadow-[0_0_20px_hsl(var(--primary)/0.5)] border-primary/50",
    bordered: "border-2 border-border",
    gradient: "bg-gradient-to-br from-primary/20 via-background to-secondary/20",
    frosted: "bg-background/40 backdrop-blur-2xl",
    tilt: "hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(5deg)] transition-transform duration-500",
    masked: "[mask-image:linear-gradient(to_bottom,black,transparent)]",
    embossed: "shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_2px_2px_5px_rgba(0,0,0,0.12)]",
    debossed: "shadow-[inset_2px_2px_5px_rgba(0,0,0,0.12),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]",
    textured: "bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]",
    acrylic: "bg-white/40 backdrop-blur-lg border border-white/10",
    mica: "bg-background/80 backdrop-blur-3xl saturate-150",
    metallic: "bg-gradient-to-b from-gray-300 via-gray-100 to-gray-400",
    spotlight: "relative before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.1),transparent_70%)]",
    maskPattern: "bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] [background-size:20px_20px]",

    // Actions
    bounce: "active:scale-95 transition-transform",
    glow: "hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-shadow",
    pulse: "animate-pulse-glow",
    shine: "relative overflow-hidden after:content-[''] after:absolute after:top-0 after:-left-full after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:animate-shine",
    haptic: "active:scale-98 active:brightness-90 transition-all",
    ring: "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    liquid: "hover:rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transition-all duration-500",
    ripple: "relative overflow-hidden cursor-pointer",
    reverb: "hover:scale-105 active:scale-90 transition-all",
    expand: "hover:scale-[1.02] transition-transform",
    compress: "hover:scale-[0.98] transition-transform",
    glitch: "hover:animate-glitch", // Placeholder for actual glitch
    magnetic: "cursor-none", // Hooked in via JS
    confetti: "overflow-visible", // Triggered via event
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",

    // Typography
    italic: "italic",
    bold: "font-bold",
    gradientText: "bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",
    shadowText: "drop-shadow-sm",
    textShadow: "drop-shadow-sm",
    readable: "leading-relaxed tracking-wide antialiased",
    mono: "font-mono",
    serif: "font-serif",
    uppercase: "uppercase",
    lowercase: "lowercase",
    tracked: "tracking-widest",
    tight: "tracking-tighter",
    clamped: "line-clamp-2",
    typewriter: "overflow-hidden border-r-2 animate-typing",
    sm: "text-sm",
    xs: "text-xs",
    lg: "text-lg",
    xl: "text-xl",

    // Layout
    centered: "flex items-center justify-center",
    padded: "p-6",
    spaced: "gap-4",
    isolated: "isolate",
    sticky: "sticky top-0 z-50",
    snap: "snap-center",
    fluid: "w-full h-full",
    constrained: "max-w-7xl mx-auto px-4",
    aspect: "aspect-video",
    hero: "min-h-[60vh] flex flex-col justify-center",
    full: "w-screen h-screen",
    bleed: "-mx-4 sm:-mx-6 lg:-mx-8",

    // State
    faded: "opacity-50",
    hidden: "hidden",
    skeleton: "animate-pulse bg-muted rounded",
    error: "border-destructive text-destructive bg-destructive/10",
    success: "border-green-500 text-green-500 bg-green-500/10",
    warning: "border-orange-500 text-orange-500 bg-orange-500/10",
    info: "border-blue-500 text-blue-500 bg-blue-500/10",
    loading: "cursor-wait opacity-70 pointer-events-none",
    busy: "cursor-progress",
    disabled: "opacity-50 cursor-not-allowed pointer-events-none",
    vibrant: "saturate-200 contrast-125",

    // Animation
    slideIn: "animate-in slide-in-from-bottom-4 duration-500",
    fadeIn: "animate-fade-in",
    zoomIn: "animate-zoom-in",
    rotateIn: "rotate-12 hover:rotate-0 transition-transform",
    reveal: "opacity-0 animate-reveal",
    stagger: "flex flex-col gap-2", // Simplified
    loop: "animate-spin", // Simplified for now
    floatAnim: "animate-bounce",

    // Backgrounds
    dotted: "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
    striped: "bg-[linear-gradient(45deg,#f3f4f6_25%,transparent_25%,transparent_50%,#f3f4f6_50%,#f3f4f6_75%,transparent_75%,transparent)] [background-size:20px_20px]",
    checkered: "bg-[linear-gradient(45deg,#eee_25%,transparent_25%,transparent_75%,#eee_75%,#eee),linear-gradient(45deg,#eee_25%,transparent_25%,transparent_75%,#eee_75%,#eee)] [background-size:20px_20px] [background-position:0_0,10px_10px]",
    noise: "bg-[url('https://grainy-gradients.vercel.app/noise.svg')]",
    mesh: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
    aurora: "bg-gradient-to-tr from-[#ff4545] via-[#00ff99] to-[#006aff] animate-aurora [background-size:300%_300%]",
};

const effectKeys = Object.keys(effectMap) as PolyEffect[];

export function splitPolyProps<T extends PolyProps>(props: T) {
    const polyProps: PolyProps = {};
    const restProps: Record<string, unknown> = {};

    Object.entries(props).forEach(([key, value]) => {
        if (effectKeys.includes(key as PolyEffect)) {
            polyProps[key as PolyEffect] = value as boolean;
        } else {
            restProps[key] = value;
        }
    });

    return { polyProps, restProps };
}

export function resolvePoly(props: PolyProps): string {
    return cn(
        Object.entries(props)
            .filter(([key, value]) => value === true && effectKeys.includes(key as PolyEffect))
            .map(([key]) => effectMap[key as PolyEffect])
    );
}
