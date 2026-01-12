export const COMPONENT_DATA = {
    layout: {
        title: "Layout",
        description: "Build robust, responsive layouts with Flex and Grid components.",
        props: [
            { name: "centered", type: "boolean", description: "Centers items in both axes." },
            { name: "padded", type: "boolean", description: "Adds standard padding (p-6)." },
            { name: "spaced", type: "boolean", description: "Adds gap between children (gap-4)." },
            { name: "fluid", type: "boolean", description: "Sets width and height to 100%." },
            { name: "constrained", type: "boolean", description: "Adds max-width and center alignment." },
            { name: "hero", type: "boolean", description: "Minimum height for hero sections (60vh)." },
        ]
    },
    typography: {
        title: "Typography",
        description: "Professional text and heading components with gradient, motion, and semantic support.",
        props: [
            { name: "level", description: "Heading level (1-6). Default is 1.", type: "1 | 2 | 3 | 4 | 5 | 6" },
            { name: "gradient-text", type: "boolean", description: "Applies a primary-to-secondary gradient." },
            { name: "typewriter", type: "boolean", description: "Adds a typing animation effect." },
            { name: "bold", type: "boolean", description: "Applies font-bold." },
            { name: "italic", type: "boolean", description: "Applies italic style." },
            { name: "uppercase", type: "boolean", description: "Transforms text to uppercase." },
            { name: "faded", type: "boolean", description: "Reduces opacity for secondary information." },
            { name: "reveal", type: "boolean", description: "Animated reveal effect on mount." },
        ]
    },
    button: {
        title: "Button",
        description: "High-performance buttons with physical interaction states and visual triggers.",
        props: [
            { name: "primary", type: "boolean", description: "Applies primary theme color." },
            { name: "secondary", type: "boolean", description: "Applies secondary theme color." },
            { name: "outline", type: "boolean", description: "Applies outlined border style." },
            { name: "glow", type: "boolean", description: "Adds an outer glow on hover." },
            { name: "shine", type: "boolean", description: "Adds a moving light sheen effect." },
            { name: "bounce", type: "boolean", description: "Tactile scaling effect on click/hover." },
            { name: "expand", type: "boolean", description: "Slightly increases scale on hover." },
            { name: "glass", type: "boolean", description: "Applies frosted glass aesthetic." },
        ]
    },
    card: {
        title: "Card",
        description: "Premium surface containers for content isolation and elevation.",
        props: [
            { name: "glass", type: "boolean", description: "Blurry, semi-transparent backdrop." },
            { name: "floating", type: "boolean", description: "Adds elevation and lift on hover." },
            { name: "neon", type: "boolean", description: "Adds an intense colored shadow." },
            { name: "bordered", type: "boolean", description: "Adds a standard border." },
            { name: "gradient", type: "boolean", description: "Applies a subtle background gradient." },
            { name: "tilt", type: "boolean", description: "Adds a 3D perspective tilt effect on hover." },
        ]
    },
    modal: {
        title: "Modal",
        description: "Accessible, animated dialogs built on Radix-UI primitives.",
        props: [
            { name: "glass", type: "boolean", description: "Applies glassmorphism to the dialog content." },
            { name: "neon", type: "boolean", description: "Adds a primary glow to the modal surface." },
        ]
    },
    accordion: {
        title: "Accordion",
        description: "Smooth collapsible sections for space-efficient content display.",
        props: [
            { name: "primary", type: "boolean", description: "Themed trigger state." },
            { name: "neon", type: "boolean", description: "Adds a glow to the expanded state." },
            { name: "glow", type: "boolean", description: "Hover glow effect on triggers." },
        ]
    },
    tooltip: {
        title: "Tooltip",
        description: "Polished informational overlays that support all Poly-Engine effects.",
        props: [
            { name: "glass", type: "boolean", description: "Glassmorphic tooltip background." },
            { name: "neon", type: "boolean", description: "Primary colored glow effect." },
        ]
    },
    charts: {
        title: "Charts",
        description: "Beautifully styled data visualizations using Recharts and Polybase themes.",
        props: [
            { name: "data", type: "any[]", description: "Array of data objects to visualize." },
            { name: "height", type: "number | string", description: "Fixed height of the chart container.", default: "300" },
            { name: "gradient", type: "boolean", description: "Enables area/fill gradients." },
        ]
    },
    forms: {
        title: "Form Inputs",
        description: "Pre-styled input components (Input, Switch, Checkbox) with validation states.",
        props: [
            { name: "error", type: "boolean", description: "Applies destructive theme and error focus." },
            { name: "success", type: "boolean", description: "Applies positive theme colors." },
            { name: "disabled", type: "boolean", description: "Native disabled state with visual indicator." },
            { name: "glass", type: "boolean", description: "Frosted style for inputs." },
        ]
    },
    polyform: {
        title: "PolyForm",
        description: "High-level form system with Zod validation and multi-step support.",
        props: [
            { name: "schema", type: "ZodSchema", description: "Zod validation schema." },
            { name: "onSubmit", type: "Function", description: "Callback for successful form submission." },
        ]
    },
    glowcursor: {
        title: "Glow Cursor",
        description: "An immersive background effect that tracks the user's cursor.",
        props: [
            { name: "size", type: "number", description: "Size of the glow in pixels.", default: "400" },
            { name: "color", type: "string", description: "CSS color for the glow.", default: "var(--primary)" },
            { name: "opacity", type: "number", description: "Alpha transparency (0-1).", default: "0.15" },
            { name: "blur", type: "string", description: "CSS blur value.", default: "100px" },
        ]
    }
};


