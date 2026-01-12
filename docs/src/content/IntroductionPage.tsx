"use client";

import { Heading, Text, Card, Grid, Flex, Button } from "polybase";
import { Box, Layers, Activity } from "lucide-react";

export function IntroductionPage() {
    return (
        <div className="space-y-32">
            <div className="relative pt-12">
                {/* Decorative background blur */}
                <div className="absolute -top-24 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10" />

                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                        v1.0.0 Release
                    </div>
                    <Heading level={1} gradient-text zoom-in className="text-7xl md:text-8xl tracking-tighter leading-tight">
                        Design at the <br /> Speed of Light.
                    </Heading>
                    <Text lg faded reveal className="max-w-xl text-xl leading-relaxed">
                        Polybase is a professional React UI kit powered by the <strong>Poly-Engine™</strong>.
                        Enable complex glassmorphism, depth, and motion with simple boolean props.
                    </Text>
                    <Flex gap={4} className="pt-4">
                        <Button primary glow shine bounce expand className="px-8 h-14 text-base">Get Started</Button>
                        <Button outline className="px-8 h-14 text-base">Explore Components</Button>
                    </Flex>
                </div>
            </div>

            <div className="space-y-12">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    <Heading level={2} className="text-2xl font-bold">The Core Pillars</Heading>
                </div>
                <Grid cols={3} gap={8}>
                    <Card glass padded floating neon className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Box className="w-6 h-6 text-primary" />
                        </div>
                        <Heading level={3} className="text-xl">Boolean Driven</Heading>
                        <Text faded sm>
                            Forget juggling 20+ Tailwind classes. Use <code>glass</code>, <code>neon</code>, and <code>bounce</code> props directly.
                        </Text>
                    </Card>
                    <Card glass padded floating className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                            <Layers className="w-6 h-6 text-secondary" />
                        </div>
                        <Heading level={3} className="text-xl">Stack-Safe</Heading>
                        <Text faded sm>
                            Effects are coordinated by a central resolution engine to prevent visual "jitter" and color clashing.
                        </Text>
                    </Card>
                    <Card glass padded floating className="space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center border border-border/50">
                            <Activity className="w-6 h-6 text-foreground/70" />
                        </div>
                        <Heading level={3} className="text-xl">Motion Ready</Heading>
                        <Text faded sm>
                            Framer Motion is baked into every component. High-performance animations are just a <code>reveal</code> prop away.
                        </Text>
                    </Card>
                </Grid>
            </div>

            <section className="relative overflow-hidden p-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] neon">
                <div className="bg-background/90 backdrop-blur-3xl p-12 rounded-[1.9rem] flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <Heading level={2} className="text-3xl font-bold italic">"Premium by Default"</Heading>
                        <Text lg faded>
                            We built Polybase because we were tired of "Minimum Viable" UI kits.
                            Our library focuses on the last 10%—the micro-interactions, the lighting,
                            and the tactile feel that makes a product feel world-class.
                        </Text>
                        <Button primary shine>Read the Manifesto</Button>
                    </div>
                    <div className="w-full md:w-72 aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-white/5 flex items-center justify-center relative group">
                        <div className="absolute inset-0 bg-[radial-gradient(var(--primary)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
                        <Card glass neon floating padded className="w-48 h-48 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                            <div className="w-full h-full bg-primary/20 rounded animate-pulse" />
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
