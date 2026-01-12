"use client";

import * as React from "react";
import { Card, Flex, Text, Button } from "polybase";

interface PlaygroundProps {
    title: string;
    description: string;
    children: React.ReactNode;
    code: string;
}

export function Playground({ title, description, children, code }: PlaygroundProps) {
    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                <p className="text-muted-foreground">{description}</p>
            </div>

            <Card glass padded className="overflow-hidden border-border/50">
                <div className="p-8 flex items-center justify-center min-h-[300px]">
                    {children}
                </div>

                <div className="border-t border-border/50 bg-black/5 p-4">
                    <Flex justify="between" align="center" className="mb-4">
                        <Text xs bold uppercase faded>Example Code</Text>
                        <Button
                            xs
                            outline
                            bounce
                            onClick={copyToClipboard}
                            className="h-8"
                        >
                            {copied ? "Copied!" : "Copy Code"}
                        </Button>
                    </Flex>
                    <pre className="text-sm font-mono overflow-x-auto p-4 bg-muted/30 rounded-lg">
                        <code>{code}</code>
                    </pre>
                </div>
            </Card>
        </div>
    );
}
