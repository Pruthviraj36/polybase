"use client";

import { Heading, Text } from "polybase";
import { Playground } from "../components/Playground";

interface ComponentPageProps {
    title: string;
    description: string;
    component: React.ComponentType<any>;
    playgroundCode: string;
    availableEffects?: string[];
    defaultProps?: Record<string, any>;
    propsList: { name: string; type: string; description: string; default?: string }[];
}


export function ComponentPage({
    title,
    description,
    component,
    playgroundCode,
    availableEffects,
    defaultProps,
    propsList
}: ComponentPageProps) {
    return (
        <div className="space-y-24">
            <div className="space-y-6">
                <Heading level={1} gradient-text className="text-6xl tracking-tight">{title}</Heading>
                <Text lg faded className="text-xl max-w-2xl leading-relaxed">{description}</Text>
            </div>

            <Playground
                title="Live Playground"
                description={`Tinker with the ${title} props to see the Poly-Engine in action. All effects can be combined for unique results.`}
                component={component}
                baseCode={playgroundCode}
                availableEffects={availableEffects}
                defaultProps={defaultProps}
            />

            <div className="space-y-8">
                <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-primary/50 rounded-full" />
                    <Heading level={2} className="text-2xl font-bold">API Reference</Heading>
                </div>

                <div className="overflow-hidden border border-border/40 rounded-2xl bg-card/20 backdrop-blur-sm">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/30 border-b border-border/20">
                            <tr>
                                <th className="px-6 py-5 font-bold uppercase tracking-widest text-[10px] text-muted-foreground/70">Prop</th>
                                <th className="px-6 py-5 font-bold uppercase tracking-widest text-[10px] text-muted-foreground/70">Type</th>
                                <th className="px-6 py-5 font-bold uppercase tracking-widest text-[10px] text-muted-foreground/70">Default</th>
                                <th className="px-6 py-5 font-bold uppercase tracking-widest text-[10px] text-muted-foreground/70">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/10">
                            {propsList.map((prop) => (
                                <tr key={prop.name} className="hover:bg-primary/5 transition-colors group">
                                    <td className="px-6 py-4 font-mono text-primary font-medium group-hover:scale-[1.02] transition-transform origin-left">{prop.name}</td>
                                    <td className="px-6 py-4 text-muted-foreground font-mono text-[13px]">{prop.type}</td>
                                    <td className="px-6 py-4 italic text-muted-foreground/60">{prop.default || "-"}</td>
                                    <td className="px-6 py-4 text-foreground/80 leading-relaxed">{prop.description}</td>
                                </tr>
                            ))}
                            <tr className="bg-primary/5 border-t border-primary/10">
                                <td className="px-6 py-5 font-mono text-primary font-bold">...PolyProps</td>
                                <td className="px-6 py-5 text-muted-foreground font-mono text-[13px]">PolyProps</td>
                                <td className="px-6 py-5 italic text-muted-foreground/60">-</td>
                                <td className="px-6 py-5 text-primary/90 font-medium">Supports all 60+ Poly-Engine boolean effects.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
