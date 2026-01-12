"use client";

import * as React from "react";
import { Card, Flex, Button } from "polybase";
import { Copy, Check, Code2, MonitorSmartphone } from "lucide-react";
import { PropExplorer } from "./PropExplorer";
import { cn } from "polybase";

interface PlaygroundProps {
    title: string;
    description: string;
    component: React.ElementType;
    defaultProps?: Record<string, boolean>;
    availableEffects?: string[];
    baseCode: string;
    children?: React.ReactNode; // Optional additional content
}

export function Playground({
    title,
    description,
    component: Component,
    defaultProps = {},
    availableEffects = ["glass", "neon", "floating", "shine", "bounce", "glow"],
    baseCode
}: PlaygroundProps) {
    const [props, setProps] = React.useState<Record<string, boolean>>(defaultProps || {});
    const [copied, setCopied] = React.useState(false);
    const [view, setView] = React.useState<"preview" | "code">("preview");

    const copyToClipboard = () => {
        const generatedCode = generateCode();
        navigator.clipboard.writeText(generatedCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const generateCode = () => {
        const activeProps = Object.entries(props)
            .filter(([, active]) => active)
            .map(([name]) => name)
            .join(" ");

        return baseCode.replace("...props", activeProps).trim();
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-3">
                <Flex align="center" gap={3}>
                    <div className="w-1 h-8 bg-primary rounded-full" />
                    <h2 className="text-4xl font-bold tracking-tight text-foreground">{title}</h2>
                </Flex>
                <p className="text-lg text-muted-foreground/80 max-w-3xl leading-relaxed">{description}</p>
            </div>

            <Card glass className="overflow-hidden border-border/40 bg-card/30 flex flex-col lg:flex-row h-auto min-h-[500px]">
                <div className="flex-1 flex flex-col min-w-0">
                    <Flex justify="between" align="center" className="p-4 border-b border-border/20 bg-muted/10">
                        <div className="flex bg-muted/30 p-1 rounded-lg">
                            <button
                                onClick={() => setView("preview")}
                                className={cn(
                                    "px-4 py-1.5 rounded-md text-xs font-semibold flex items-center gap-2 transition-all",
                                    view === "preview" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <MonitorSmartphone className="w-3.5 h-3.5" />
                                Preview
                            </button>
                            <button
                                onClick={() => setView("code")}
                                className={cn(
                                    "px-4 py-1.5 rounded-md text-xs font-semibold flex items-center gap-2 transition-all",
                                    view === "code" ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <Code2 className="w-3.5 h-3.5" />
                                Code
                            </button>
                        </div>
                        <Button
                            xs
                            outline
                            bounce
                            onClick={copyToClipboard}
                            className="h-9 gap-2 px-4"
                        >
                            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            {copied ? "Copied" : "Copy"}
                        </Button>
                    </Flex>

                    <div className="flex-1 relative flex items-center justify-center p-12 overflow-hidden bg-[radial-gradient(hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:24px_24px]">
                        {view === "preview" ? (
                            <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                                <Component {...props}>Interactive Demo</Component>
                            </div>
                        ) : (
                            <div className="w-full h-full p-6 font-mono text-sm overflow-auto">
                                <pre className="text-primary-foreground/90 leading-relaxed">
                                    <code>{generateCode()}</code>
                                </pre>
                            </div>
                        )}
                    </div>
                </div>

                <PropExplorer
                    currentProps={props}
                    onChange={setProps}
                    availableEffects={availableEffects}
                />
            </Card>
        </div>
    );
}
