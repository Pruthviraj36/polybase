"use client";

import { Heading, Text, Card, Grid, Flex } from "polybase";
import { POLY_EFFECTS } from "./EffectsData";

export function EffectsPage() {
    return (
        <div className="space-y-16">
            <div className="space-y-4">
                <Heading level={1} gradient-text>Effects Gallery</Heading>
                <Text lg faded>Explore the 60+ boolean props that power Polybase UI. Use these on almost any component.</Text>
            </div>

            {Object.entries(POLY_EFFECTS).map(([category, effects]) => (
                <div key={category} className="space-y-6">
                    <Heading level={2}>{category}</Heading>
                    <Grid cols={2} mdCols={3} lgCols={4} gap={6}>
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
                                    <Flex direction="column" align="center" justify="center" className="h-24">
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
