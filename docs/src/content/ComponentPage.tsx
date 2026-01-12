"use client";

import { Heading, Text } from "polybase";
import { Playground } from "../components/Playground";

interface ComponentPageProps {
    title: string;
    description: string;
    playgroundCode: string;
    playgroundPreview: React.ReactNode;
    propsList: { name: string; type: string; description: string; default?: string }[];
}

export function ComponentPage({
    title,
    description,
    playgroundCode,
    playgroundPreview,
    propsList
}: ComponentPageProps) {
    return (
        <div className="space-y-16">
            <div className="space-y-4">
                <Heading level={1} gradient-text>{title}</Heading>
                <Text lg faded>{description}</Text>
            </div>

            <Playground
                title="Usage"
                description={`Standard implementation of the ${title} component.`}
                code={playgroundCode}
            >
                {playgroundPreview}
            </Playground>

            <div className="space-y-6">
                <Heading level={2}>API Reference</Heading>
                <div className="overflow-hidden border border-border rounded-xl">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Prop</th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Type</th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Default</th>
                                <th className="px-6 py-4 font-semibold uppercase tracking-wider text-xs">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border bg-card">
                            {propsList.map((prop) => (
                                <tr key={prop.name} className="hover:bg-muted/30 transition-colors">
                                    <td className="px-6 py-4 font-mono text-primary">{prop.name}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{prop.type}</td>
                                    <td className="px-6 py-4 italic text-muted-foreground">{prop.default || "-"}</td>
                                    <td className="px-6 py-4 text-foreground/80">{prop.description}</td>
                                </tr>
                            ))}
                            <tr className="bg-primary/5">
                                <td className="px-6 py-4 font-mono text-primary font-bold">...PolyProps</td>
                                <td className="px-6 py-4 text-muted-foreground">PolyProps</td>
                                <td className="px-6 py-4 italic text-muted-foreground">-</td>
                                <td className="px-6 py-4 text-primary/80 font-medium">Supports all 60+ Poly-Engine boolean effects.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
