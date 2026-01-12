"use client";

import * as React from "react";
import { cn } from "polybase";
import { motion, AnimatePresence } from "framer-motion";
import {
    Box,
    Layout,
    Type,
    Layers,
    MousePointer2,
    Activity,
    Wand2,
    Search,
    ChevronRight,
    Code2
} from "lucide-react";

interface SidebarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    sections: {
        title: string;
        items: { id: string; label: string }[];
    }[];
}

const ICON_MAP: Record<string, any> = {
    "Getting Started": Wand2,
    "Foundational": Box,
    "Overlays & Interactive": Layers,
    "Advanced": Activity,
    "Utilities": MousePointer2,
    "Layout": Layout,
    "Typography": Type,
};

export function Sidebar({ activeTab, onTabChange, sections }: SidebarProps) {
    const [search, setSearch] = React.useState("");

    const filteredSections = sections.map(section => ({
        ...section,
        items: section.items.filter(item =>
            item.label.toLowerCase().includes(search.toLowerCase())
        )
    })).filter(section => section.items.length > 0);

    return (
        <aside className="w-72 border-r border-border/40 h-screen sticky top-0 overflow-y-auto p-6 space-y-8 bg-background/80 backdrop-blur-xl z-50">
            <div className="flex items-center gap-3 mb-10 px-2 cursor-pointer" onClick={() => onTabChange("showcase")}>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-9 h-9 rounded-lg bg-background flex items-center justify-center border border-border/50">
                        <Box className="w-5 h-5 text-primary" />
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Polybase
                    </h1>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground/60">Design System</p>
                </div>
            </div>

            <div className="relative mb-6 px-2">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                <input
                    type="text"
                    placeholder="Search components..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-muted/30 border border-border/20 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/40"
                />
            </div>

            <div className="space-y-8">
                {filteredSections.map((section) => {
                    const Icon = ICON_MAP[section.title] || Code2;
                    return (
                        <div key={section.title} className="space-y-3">
                            <div className="flex items-center gap-2 px-3">
                                <Icon className="w-3.5 h-3.5 text-muted-foreground/50" />
                                <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/70">
                                    {section.title}
                                </h4>
                            </div>
                            <nav className="space-y-1">
                                {section.items.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => onTabChange(item.id)}
                                        className={cn(
                                            "group relative w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm flex items-center justify-between",
                                            activeTab === item.id
                                                ? "text-primary font-medium"
                                                : "text-muted-foreground/80 hover:bg-muted/50 hover:text-foreground"
                                        )}
                                    >
                                        <AnimatePresence>
                                            {activeTab === item.id && (
                                                <motion.div
                                                    layoutId="sidebar-active"
                                                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            )}
                                        </AnimatePresence>
                                        <span className="relative z-10">{item.label}</span>
                                        <ChevronRight className={cn(
                                            "w-3.5 h-3.5 transition-transform duration-200 opacity-0 group-hover:opacity-50",
                                            activeTab === item.id && "opacity-100 rotate-90"
                                        )} />
                                    </button>
                                ))}
                            </nav>
                        </div>
                    );
                })}
            </div>


            <div className="pt-8 mt-auto border-t border-border/20 px-2 pb-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 space-y-3">
                    <div className="flex items-center gap-2">
                        <Wand2 className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold">Pro Tip</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                        Use the <code className="text-primary font-mono px-1">glass</code> prop on any card to create premium translucent surfaces.
                    </p>
                </div>
            </div>
        </aside>
    );
}
