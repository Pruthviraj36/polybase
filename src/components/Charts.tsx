"use client";


import {
    ResponsiveContainer,
    AreaChart as ReAreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as ReTooltip,
    BarChart as ReBarChart,
    Bar,
} from "recharts";
import { resolvePoly, type PolyProps, cn, splitPolyProps } from "../lib/utils";

interface ChartProps extends PolyProps {
    data: any[];
    className?: string;
    height?: number | string;
}

export function AreaChart({ data, height = 300, className, ...poly }: ChartProps) {
    const { polyProps, restProps } = splitPolyProps(poly);
    const polyClasses = resolvePoly(polyProps);

    return (
        <div className={cn("w-full transition-all", polyClasses, className)} style={{ height }} {...restProps}>
            <ResponsiveContainer width="100%" height="100%">
                <ReAreaChart data={data}>
                    <defs>
                        <linearGradient id="polyGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" opacity={0.2} />
                    <XAxis
                        dataKey="name"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <ReTooltip
                        contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "var(--radius)",
                            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)"
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="var(--primary)"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#polyGradient)"
                    />
                </ReAreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export function BarChart({ data, height = 300, className, ...poly }: ChartProps) {
    const { polyProps, restProps } = splitPolyProps(poly);
    const polyClasses = resolvePoly(polyProps);

    return (
        <div className={cn("w-full transition-all", polyClasses, className)} style={{ height }} {...restProps}>
            <ResponsiveContainer width="100%" height="100%">
                <ReBarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" opacity={0.2} />
                    <XAxis
                        dataKey="name"
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <ReTooltip
                        cursor={{ fill: "hsl(var(--muted))", opacity: 0.1 }}
                        contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "var(--radius)"
                        }}
                    />
                    <Bar
                        dataKey="value"
                        fill="var(--primary)"
                        radius={[4, 4, 0, 0]}
                    />
                </ReBarChart>
            </ResponsiveContainer>
        </div>
    );
}
