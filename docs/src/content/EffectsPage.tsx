"use client";

import * as React from "react";
import { Heading, Text, Card, Grid, Button } from "polybase";
import { resolvePoly, cn } from "../utils";
import { POLY_EFFECTS } from "./EffectsData";

const EffectPreview = ({ effect, category }: { effect: string, category: string }) => {
    const polyProps = { [effect]: true };

    if (category === "Typography") {
        return (
            <div className="h-full flex items-center justify-center p-4">
                <Text {...polyProps} lg className="text-center">The quick brown fox</Text>
            </div>
        );
    }

    if (category === "Actions") {
        return (
            <div className="h-full flex flex-col items-center justify-center p-4 gap-4">
                <Button {...polyProps} sm>Interactive</Button>
                <Text xs faded className="opacity-0 group-hover:opacity-100 transition-opacity">Hover/Click Me</Text>
            </div>
        );
    }

    if (category === "Surfaces") {
        return (
            <div className="h-full flex items-center justify-center p-4">
                <Card {...polyProps} className="w-full h-16 flex items-center justify-center bg-muted/20 border-white/5">
                    <Text xs bold>{effect.toUpperCase()}</Text>
                </Card>
            </div>
        );
    }

    if (category === "Backgrounds") {
        return (
            <div className={cn("w-full h-full rounded-xl overflow-hidden", resolvePoly(polyProps))}>
                <div className="w-full h-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <Text xs bold className="bg-background/80 px-2 py-1 rounded">{effect}</Text>
                </div>
            </div>
        );
    }

    return (
        <Card {...polyProps} glass className="w-full h-full flex items-center justify-center p-4 border-white/5">
            <Text xs bold>{effect}</Text>
        </Card>
    );
};

export function EffectsPage() {
    const [search, setSearch] = React.useState("");

    const filteredEffects = Object.entries(POLY_EFFECTS).reduce((acc, [category, effects]) => {
        const filtered = effects.filter(e => e.toLowerCase().includes(search.toLowerCase()));
        if (filtered.length > 0) acc[category] = filtered;
        return acc;
    }, {} as Record<string, string[]>);

    return (
        <div className="space-y-24 pb-40">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/20 pb-12">
                <div className="space-y-4">
                    <Heading level={1} gradientText className="text-6xl font-black tracking-tighter">Effects Gallery</Heading>
                    <Text lg faded className="text-xl">Discover the 60+ primitives that drive the Poly-Engine™.</Text>
                </div>
                <div className="relative w-full md:w-80">
                    <input
                        type="text"
                        placeholder="Filter primitives (e.g. 'glass', 'shine')..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-muted/20 border border-white/10 rounded-2xl py-3 pl-5 pr-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all backdrop-blur-xl"
                    />
                </div>
            </div>

            {Object.entries(filteredEffects).map(([category, effects]) => (
                <div key={category} className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-6 bg-primary rounded-full shadow-[0_0_10px_hsla(var(--primary),0.5)]" />
                        <Heading level={2} className="text-2xl font-bold tracking-tight">{category}</Heading>
                        <span className="text-xs font-mono text-muted-foreground/60 ml-2">{effects.length} props</span>
                    </div>

                    <Grid cols={2} mdCols={3} lgCols={4} gap={6}>
                        {effects.map((effect) => (
                            <Card
                                key={effect}
                                glass
                                className="group relative h-40 overflow-hidden transition-all duration-500 hover:scale-[1.02] border-white/5 hover:border-primary/20 bg-white/5"
                            >
                                <EffectPreview effect={effect} category={category} />
                                <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-background/40 backdrop-blur-md border border-white/5">
                                    <Text bold className="text-[9px] uppercase tracking-widest text-primary/80">{effect}</Text>
                                </div>
                            </Card>
                        ))}
                    </Grid>
                </div>
            ))}
        </div>
    );
}
