"use client";

import * as React from "react";
import { cn } from "polybase";

interface SidebarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    sections: {
        title: string;
        items: { id: string; label: string }[];
    }[];
}

export function Sidebar({ activeTab, onTabChange, sections }: SidebarProps) {
    return (
        <aside className="w-64 border-r border-border h-screen sticky top-0 overflow-y-auto p-6 space-y-8 bg-background/50 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-lg bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                <span className="font-bold text-xl tracking-tight">Polybase UI</span>
            </div>

            {sections.map((section) => (
                <div key={section.title} className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {section.title}
                    </h4>
                    <nav className="space-y-1">
                        {section.items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onTabChange(item.id)}
                                className={cn(
                                    "w-full text-left px-3 py-2 rounded-md transition-all duration-200 text-sm",
                                    activeTab === item.id
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>
            ))}
        </aside>
    );
}
