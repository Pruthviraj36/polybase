"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./Button";

export function ThemeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">(() => {
        if (typeof window !== "undefined") {
            return document.documentElement.classList.contains("dark") ? "dark" : "light";
        }
        return "light";
    });

    React.useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    return (
        <Button
            bounce
            glass
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-10 h-10 p-0"
        >
            {theme === "light" ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
