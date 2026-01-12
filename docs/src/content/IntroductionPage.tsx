"use client";

import { Heading, Text, Card, Grid, Flex, Button } from "polybase";

export function IntroductionPage() {
    return (
        <div className="space-y-16">
            <div className="space-y-6">
                <Heading level={1} gradient-text zoom-in className="text-6xl md:text-7xl">
                    Polybase UI
                </Heading>
                <Text lg faded reveal className="max-w-2xl text-xl">
                    The high-performance design system that replaces complex CSS with reactive boolean props.
                </Text>
                <Flex gap={4} className="mt-8">
                    <Button primary glow shine bounce expand>Get Started</Button>
                    <Button outline>View GitHub</Button>
                </Flex>
            </div>

            <Grid cols={3} gap={8}>
                <Card glass padded floating>
                    <Heading level={3} className="mb-4">Boolean First</Heading>
                    <Text faded>
                        Forget long lists of class names. Enable complex effects like <code>glass</code>, <code>neon</code>, and <code>aurora</code> with a single prop.
                    </Text>
                </Card>
                <Card glass padded floating>
                    <Heading level={3} className="mb-4">Framework Ready</Heading>
                    <Text faded>
                        Optimized for Vite and Next.js App Router. Zero-config compatibility for modern React environments.
                    </Text>
                </Card>
                <Card glass padded floating>
                    <Heading level={3} className="mb-4">Accessibile</Heading>
                    <Text faded>
                        Built on top of Radix UI primitives, ensuring your beautiful designs are accessible to everyone.
                    </Text>
                </Card>
            </Grid>

            <section className="space-y-8 bg-primary/5 p-12 rounded-3xl border border-primary/20 neon">
                <Heading level={2}>The Poly-Engine Philosophy</Heading>
                <div className="prose prose-invert max-w-none">
                    <Text lg>
                        Polybase is built on a "Resolution Engine" that translates human-readable intent into complex styling and motion logic.
                        When you add a prop like <code>glass</code>, the engine doesn't just add a background; it coordinates backdrop-blur,
                        opacity, borders, and shadows to ensure a professional result across all components.
                    </Text>
                </div>
            </section>
        </div>
    );
}
