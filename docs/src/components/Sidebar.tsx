"use client";

import * as React from "react";
import { cn } from "polybase";
import { motion } from "framer-motion";
import {
    Box,
    Layout,
    Type,
    Layers,
    MousePointer2,
    Activity,
    Wand2,
    Search,
    Code2,
    Grid
} from "lucide-react";

interface SidebarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    sections: {
        title: string;
        items: { id: string; label: string }[];
    }[];
    mobile?: boolean;
}

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    "Getting Started": Wand2,
    "Foundational": Box,
    "Overlays & Interactive": Layers,
    "Advanced": Activity,
    "Utilities": MousePointer2,
    "Layout": Layout,
    "Typography": Type,
};

export function Sidebar({ activeTab, onTabChange, sections, mobile }: SidebarProps) {
    const [search, setSearch] = React.useState("");

    const filteredSections = sections.map(section => ({
        ...section,
        items: section.items.filter(item =>
            item.label.toLowerCase().includes(search.toLowerCase())
        )
    })).filter(section => section.items.length > 0);

    return (
        <aside className={cn(
            "flex flex-col h-full",
            !mobile && "w-72 border-r border-border/30 h-screen sticky top-0 overflow-y-auto bg-background/30 backdrop-blur-xl z-50"
        )}>
            {!mobile && (
                <div className="p-6 pb-2">
                    <div className="flex items-center gap-3 mb-8 cursor-pointer group" onClick={() => onTabChange("showcase")}>
                        <div className="relative">
                            <div className="absolute -inset-2 bg-primary/50 rounded-full blur-[20px] opacity-0 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center shadow-lg shadow-primary/20 border border-white/20">
                                <Box className="w-5 h-5 text-white" />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-heading font-bold text-xl tracking-tight text-white">
                                Polybase
                            </h1>
                            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-primary">UI Engine</p>
                        </div>
                    </div>

                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/40 text-foreground"
                        />
                    </div>
                </div>
            )}

            <div className="flex-1 px-4 space-y-8 overflow-y-auto custom-scrollbar pb-8">
                {filteredSections.map((section) => {
                    const Icon = ICON_MAP[section.title] || Code2;
                    return (
                        <div key={section.title} className="space-y-3">
                            <div className="flex items-center gap-2 px-3">
                                <Icon className="w-3.5 h-3.5 text-primary/70" />
                                <h4 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60 font-heading">
                                    {section.title}
                                </h4>
                            </div>
                            <nav className="space-y-0.5">
                                {section.items.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => onTabChange(item.id)}
                                        className={cn(
                                            "group relative w-full text-left px-3.5 py-2.5 rounded-xl transition-all duration-200 text-sm flex items-center justify-between outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                                            activeTab === item.id
                                                ? "text-primary-foreground font-medium"
                                                : "text-muted-foreground/80 hover:text-foreground hover:bg-white/5"
                                        )}
                                    >
                                        {activeTab === item.id && (
                                            <motion.div
                                                layoutId="sidebar-active"
                                                className="absolute inset-0 bg-primary shadow-[0_0_20px_-5px_rgba(var(--primary),0.5)] rounded-xl"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        )}
                                        <span className="relative z-10">{item.label}</span>
                                        {activeTab === item.id && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="relative z-10 w-1.5 h-1.5 rounded-full bg-white"
                                            />
                                        )}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    );
                })}
            </div>

            {!mobile && (
                <div className="p-4 border-t border-border/20">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 space-y-2">
                             <div className="flex items-center gap-2 text-primary font-bold text-xs">
                                <Grid className="w-3.5 h-3.5" />
                                <span>Version 2.0</span>
                             </div>
                             <p className="text-[11px] text-muted-foreground leading-relaxed">
                                Experience the next level of interaction design.
                             </p>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    );
}
