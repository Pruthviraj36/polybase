# Polybase UI Kit

A professional, batteries-included UI component library for React. Built on top of Tailwind CSS, Radix UI, and Framer Motion.

## Features

- **Poly-Engine**: Over 60+ professional effects via single-word boolean props.
- **Accessible**: Built on Radix UI primitives.
- **Animated**: Motion built-in via Framer Motion.
- **Tailwind Native**: Fully customizable via standard Tailwind classes.

## Framework Integration

### Vite

1. **Configure Tailwind**: Ensure your `tailwind.config.js` includes the Polybase source and theme extensions.

```javascript
import polybaseConfig from "polybase/tailwind.config";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/polybase/dist/**/*.js",
  ],
  theme: {
    extend: {
      ...polybaseConfig.theme.extend,
    },
  },
  plugins: [],
};
```

### Next.js (App Router)

Polybase UI is fully compatible with the Next.js App Router. Interactive components are pre-marked with `"use client"`.

1. **Configure Tailwind**: Similar to Vite, ensure the `node_modules` path is included in your `content` array in `tailwind.config.js`.

2. **Global Styles**: Import the Polybase CSS in your `layout.tsx`:

```tsx
import "polybase/dist/index.css";
import "./globals.css";
```

## Installation

```bash
npm install polybase
```

## Usage

Import the styles in your main entry file (e.g., `App.tsx` or `main.tsx`):

```tsx
import "polybase/dist/index.css";
```

### Basic Components

```tsx
import { Card, Button, Heading, Text } from "polybase";

function App() {
  return (
    <Card glass floating padded neon className="max-w-md mx-auto mt-20">
      <Heading level={1} gradient-text uppercase>
        Polybase UI
      </Heading>
      <Text faded readable italic>
        The professional way to build UIs with zero effort.
      </Text>
      <Button bounce glow shine primary className="mt-4">
        Get Started
      </Button>
    </Card>
  );
}
```

## The Poly-Engine Props

You can use any of these props on `Card`, `Button`, `Text`, `Heading`, and more:

### Surfaces
`glass`, `floating`, `neon`, `bordered`, `gradient`, `frosted`, `tilt`, `masked`, `embossed`, `debossed`, `textured`, `acrylic`, `mica`, `metallic`

### Actions
`bounce`, `glow`, `pulse`, `shine`, `haptic`, `ring`, `liquid`, `ripple`, `reverb`, `expand`, `compress`, `glitch`, `magnetic`, `confetti`

### Typography
`italic`, `bold`, `gradient-text`, `shadow-text`, `readable`, `mono`, `serif`, `uppercase`, `lowercase`, `tracked`, `tight`, `clamped`, `typewriter`

### Layout
`centered`, `padded`, `spaced`, `isolated`, `sticky`, `snap`, `fluid`, `constrained`, `aspect`, `hero`, `full`, `bleed`

### State & Animation
`faded`, `hidden`, `skeleton`, `error`, `success`, `warning`, `info`, `loading`, `busy`, `disabled`, `vibrant`
`slide-in`, `fade-in`, `zoom-in`, `rotate-in`, `reveal`, `stagger`, `loop`, `float-anim`

### Backgrounds
`dotted`, `striped`, `checkered`, `noise`, `mesh`, `aurora`
