"use client";

import { Heading, Text, Card, Flex, Button } from "polybase";

export function InstallationPage() {
    return (
        <div className="space-y-16">
            <div className="space-y-4">
                <Heading level={1} gradient-text>Installation</Heading>
                <Text lg faded>Get up and running with Polybase UI in seconds.</Text>
            </div>

            <section className="space-y-6">
                <Heading level={2}>1. Install Package</Heading>
                <Card glass className="p-4 bg-black/20">
                    <pre className="font-mono text-sm">
                        <code>npm install polybase framer-motion lucide-react</code>
                    </pre>
                </Card>
            </section>

            <section className="space-y-6">
                <Heading level={2}>2. Configure Tailwind</Heading>
                <Text faded>Add the Polybase path to your <code>tailwind.config.js</code> content array to ensure effects are generated properly.</Text>
                <Card glass className="p-4 bg-black/20">
                    <pre className="font-mono text-sm">
                        <code>{`// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/polybase/dist/**/*.js",
  ],
  // ...
}`}</code>
                    </pre>
                </Card>
            </section>

            <section className="space-y-6">
                <Heading level={2}>3. Import Styles</Heading>
                <Text faded>Import the global CSS in your main entry point (e.g., <code>main.tsx</code> or <code>layout.tsx</code>).</Text>
                <Card glass className="p-4 bg-black/20">
                    <pre className="font-mono text-sm">
                        <code>import "polybase/dist/index.css";</code>
                    </pre>
                </Card>
            </section>

            <Card glass padded neon className="bg-primary/5">
                <Flex direction="col" gap={4}>
                    <Heading level={3}>Framework Guides</Heading>
                    <Text faded>Check out our specific guides for the following frameworks:</Text>
                    <Flex gap={4}>
                        <Button sm outline>Next.js Guide</Button>
                        <Button sm outline>Vite Guide</Button>
                        <Button sm outline>Remix Guide</Button>
                    </Flex>
                </Flex>
            </Card>
        </div>
    );
}
