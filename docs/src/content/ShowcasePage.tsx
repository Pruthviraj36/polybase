"use client";

import {
    Heading,
    Text,
    Card,
    Flex,
    Button,
    AreaChart,
    BarChart,
} from "polybase";
import {
    Layout,
    BarChart3,
    Maximize2,
    Code2
} from "lucide-react";



const chartData = [
    { name: "A", value: 40 },
    { name: "B", value: 70 },
    { name: "C", value: 50 },
    { name: "D", value: 90 },
];

export function ShowcasePage({ onNavigate }: { onNavigate: (id: string) => void }) {
    return (
        <div className="space-y-32">
            <section className="relative py-20 px-8 rounded-[3rem] overflow-hidden bg-primary/5 border border-primary/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsla(var(--primary),0.15),transparent_50%)]" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

                <Flex direction="col" align="center" justify="center" gap={8} className="text-center relative z-10">
                    <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-md">
                        The Visual Experience
                    </div>
                    <Heading level={1} gradient-text className="text-8xl tracking-tighter leading-tight font-black">
                        Visual Catalog
                    </Heading>
                    <Text lg faded reveal className="text-xl max-w-2xl leading-relaxed mx-auto italic">
                        "High-performance design logic meets aesthetic excellence."
                        Explore how Polybase transforms static components into interactive experiences.
                    </Text>
                    <Flex gap={4} className="mt-4">
                        <Button primary glow shine expand className="h-12 px-8">Quick Start</Button>
                        <Button outline className="h-12 px-8">Full API</Button>
                    </Flex>
                </Flex>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
                {/* Foundational Category */}
                <div className="space-y-10">
                    <Flex align="center" gap={4}>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                            <Layout className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                            <Heading level={2} className="text-3xl font-bold tracking-tight">Foundational</Heading>
                            <Text sm faded uppercase tracking-widest className="text-[10px] font-bold">Base Primitives</Text>
                        </div>
                    </Flex>

                    <div className="grid grid-cols-1 gap-8">
                        <Card glass padded neon className="group cursor-pointer hover:scale-[1.01] transition-all border-white/5" onClick={() => onNavigate("button")}>
                            <Flex justify="between" align="center" className="mb-8">
                                <Flex direction="col">
                                    <Text bold className="text-xl text-primary">Button Engine</Text>
                                    <Text xs faded>Tactile interaction loops</Text>
                                </Flex>
                                <Maximize2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-primary translate-x-2 group-hover:translate-x-0" />
                            </Flex>
                            <Flex gap={4} wrap className="bg-background/40 p-6 rounded-2xl border border-white/5">
                                <Button primary glow>Primary</Button>
                                <Button secondary shine>Secondary</Button>
                                <Button outline bounce>Tactile</Button>
                                <Button glass expand>Glass</Button>
                            </Flex>
                        </Card>

                        <Card glass padded floating className="group cursor-pointer hover:scale-[1.01] transition-all border-white/5" onClick={() => onNavigate("card")}>
                            <Flex justify="between" align="center" className="mb-8">
                                <Flex direction="col">
                                    <Text bold className="text-xl">Surface Logic</Text>
                                    <Text xs faded>Depth and elevation engine</Text>
                                </Flex>
                                <Maximize2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-muted-foreground translate-x-2 group-hover:translate-x-0" />
                            </Flex>
                            <div className="grid grid-cols-2 gap-6 p-6 bg-background/20 rounded-2xl border border-white/5">
                                <Card glass padded className="h-20 flex items-center justify-center text-[10px] font-mono border-white/5">GLASS</Card>
                                <Card neon padded className="h-20 flex items-center justify-center text-[10px] font-mono">NEON</Card>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Data Viz Category */}
                <div className="space-y-10">
                    <Flex align="center" gap={4}>
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                            <BarChart3 className="w-5 h-5 text-secondary" />
                        </div>
                        <div className="space-y-1">
                            <Heading level={2} className="text-3xl font-bold tracking-tight">Data Viz</Heading>
                            <Text sm faded uppercase tracking-widest className="text-[10px] font-bold">Analytics Surfaces</Text>
                        </div>
                    </Flex>

                    <Card glass padded className="group cursor-pointer hover:scale-[1.01] transition-all h-full border-white/5" onClick={() => onNavigate("charts")}>
                        <Flex justify="between" align="center" className="mb-8">
                            <Flex direction="col">
                                <Text bold className="text-xl text-secondary">Poly-Charts</Text>
                                <Text xs faded>Responsive, theme-aware mapping</Text>
                            </Flex>
                            <Maximize2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-secondary translate-x-2 group-hover:translate-x-0" />
                        </Flex>
                        <div className="space-y-8 p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                            <AreaChart data={chartData} glass height={120} />
                            <BarChart data={chartData} primary height={120} />
                        </div>
                    </Card>
                </div>
            </div>

            <section className="relative py-24 bg-primary/5 rounded-[4rem] border border-primary/20 overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 scale-150">
                    <Layout className="w-64 h-64" />
                </div>
                <div className="max-w-4xl mx-auto px-12 text-center space-y-10 relative z-10">
                    <Heading level={2} className="text-5xl font-black tracking-tighter">Ready to evolve?</Heading>
                    <Text lg faded className="text-xl leading-relaxed">
                        Polybase components are designed to be mixed and matched.
                        Combine <code>glass</code> for depth, <code>neon</code> for presence,
                        and <code>bounce</code> for life.
                    </Text>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button primary glow shine expand className="h-16 px-12 text-lg" onClick={() => onNavigate("installation")}>
                            Start Building Now
                        </Button>
                        <Flex align="center" gap={3} className="text-muted-foreground bg-background/40 px-6 py-3 rounded-full border border-white/5 backdrop-blur-md">
                            <Code2 className="w-4 h-4" />
                            <Text sm className="font-mono">npm install polybase</Text>
                        </Flex>
                    </div>
                </div>
            </section>
        </div>
    );
}

