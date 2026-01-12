"use client";

import * as React from "react";
import { Heading, Text, Card, Grid, Flex } from "polybase";
import { POLY_EFFECTS } from "./EffectsData";

export function EffectsPage() {
    const [search, setSearch] = React.useState("");

    const filteredEffects = Object.entries(POLY_EFFECTS).reduce((acc, [category, effects]) => {
        const filtered = effects.filter(e => e.toLowerCase().includes(search.toLowerCase()));
        if (filtered.length > 0) acc[category] = filtered;
        return acc;
    }, {} as Record<string, string[]>);

    return (
        <div className="space-y-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-4">
                    <Heading level={1} gradient-text>Effects Gallery</Heading>
                    <Text lg faded>Explore the 60+ boolean props that power Polybase UI.</Text>
                </div>
                <div className="relative w-full md:w-72">
                    <input
                        type="text"
                        placeholder="Search effects..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-muted/30 border border-border/20 rounded-xl py-2.5 pl-4 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                    />
                </div>
            </div>

            {Object.entries(filteredEffects).map(([category, effects]) => (

                <div key={category} className="space-y-6">
                    <Heading level={2}>{category}</Heading>
                    <Grid cols={3} gap={6}>
                        {effects.map((effect) => {
                            const polyProps = { [effect]: true };
                            return (
                                <Card
                                    key={effect}
                                    glass
                                    padded
                                    {...polyProps}
                                    className="group relative overflow-hidden transition-all duration-500 hover:scale-105"
                                >
                                    <Flex direction="col" align="center" justify="center" className="h-24">
                                        <Text bold sm uppercase tracking-widest>{effect}</Text>
                                        <Text xs italic faded className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            Prop: {effect}
                                        </Text>
                                    </Flex>
                                </Card>
                            );
                        })}
                    </Grid>
                </div>
            ))}
        </div>
    );
}
