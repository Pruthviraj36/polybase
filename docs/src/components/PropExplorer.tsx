"use client";

import { Check, Info } from "lucide-react";
import { cn, Text } from "polybase";

interface PropExplorerProps {
    currentProps: Record<string, boolean>;
    onChange: (props: Record<string, boolean>) => void;
    availableEffects: string[];
}

export function PropExplorer({ currentProps, onChange, availableEffects }: PropExplorerProps) {
    const toggleProp = (prop: string) => {
        onChange({
            ...currentProps,
            [prop]: !currentProps[prop]
        });
    };

    return (
        <div className="w-full lg:w-80 border-l border-border/40 p-6 bg-muted/10 h-full overflow-y-auto">
            <div className="flex items-center gap-2 mb-6">
                <Info className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/80">Prop Explorer</h3>
            </div>

            <div className="grid grid-cols-1 gap-2">
                {availableEffects.map((effect) => {
                    const isActive = currentProps[effect];
                    return (
                        <button
                            key={effect}
                            onClick={() => toggleProp(effect)}
                            className={cn(
                                "group flex items-center justify-between px-3 py-2.5 rounded-lg border transition-all duration-200 text-sm",
                                isActive
                                    ? "bg-primary/10 border-primary/30 text-primary"
                                    : "bg-background/20 border-border/10 text-muted-foreground hover:border-border/40 hover:text-foreground"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <div className={cn(
                                    "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                                    isActive ? "bg-primary border-primary" : "border-muted-foreground/30 bg-transparent"
                                )}>
                                    {isActive && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                </div>
                                <span className="font-mono">{effect}</span>
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className="mt-8 pt-6 border-t border-border/20">
                <Text xs faded className="leading-relaxed italic">
                    Toggle props to instantly see how the Poly-Engine coordinates styles and animations.
                </Text>
            </div>
        </div>
    );
}
