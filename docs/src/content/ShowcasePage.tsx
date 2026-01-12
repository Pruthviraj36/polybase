"use client";

import {
  Heading,
  Text,
  Card,
  Flex,
  Button,
  AreaChart,
  Grid
} from "polybase";
import {
  ArrowRight,
  Box,
  BarChart3,
  Wand2,
  Sparkles,
  Zap,
  Layers,
  Cpu,
  Globe,
  Palette
} from "lucide-react";

const chartData = [
  { name: "A", value: 40 },
  { name: "B", value: 70 },
  { name: "C", value: 50 },
  { name: "D", value: 90 },
];

export function ShowcasePage({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <div className="space-y-32 pb-40">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden rounded-[3rem] border border-white/10 bg-black/20 isolate shadow-2xl">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[180px] animate-pulse-glow" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[140px] animate-float" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-[160px] animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
        </div>

        <div className="space-y-10 max-w-5xl px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-primary text-xs font-bold uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(var(--primary),0.3)] animate-in fade-in slide-in-from-top-4 duration-1000 font-heading">
            <Sparkles className="w-3.5 h-3.5" />
            V 2.0.0 Alpha
          </div>

          <div className="space-y-4">
            <Heading level={1} className="text-8xl md:text-9xl font-black tracking-tighter leading-[0.85] select-none font-heading">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                The Visual
              </span>
              <span className="block text-gradient-primary animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Engine.
              </span>
            </Heading>
          </div>

          <Text lg faded reveal className="text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-light text-muted-foreground/80 delay-300 font-sans">
            Polybase is an interaction library designed to make your
            apps feel <span className="text-foreground font-medium">alive</span>, <span className="text-foreground font-medium">tactile</span>, and <span className="text-foreground font-medium">premium</span>.
          </Text>

          <Flex gap={6} justify="center" className="pt-10 animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <Button primary glow shine bounce expand className="h-16 px-10 text-lg rounded-2xl font-bold font-heading shadow-[0_0_40px_rgba(var(--primary),0.4)] hover:shadow-[0_0_60px_rgba(var(--primary),0.6)] border-primary/50">
              Start Building
              <Zap className="ml-2 w-5 h-5 fill-current" />
            </Button>
            <Button glass outline className="h-16 px-10 text-lg rounded-2xl group border-white/10 hover:bg-white/5 hover:border-white/20 font-bold font-heading hover:text-white">
              Explore Components
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Flex>
          
          <div className="pt-8 flex items-center justify-center gap-8 text-muted-foreground/40">
             <div className="flex items-center gap-2"><Cpu className="w-4 h-4" /><span className="text-xs uppercase tracking-widest font-semibold">Performant</span></div>
             <div className="flex items-center gap-2"><Globe className="w-4 h-4" /><span className="text-xs uppercase tracking-widest font-semibold">Universal</span></div>
             <div className="flex items-center gap-2"><Palette className="w-4 h-4" /><span className="text-xs uppercase tracking-widest font-semibold">Themable</span></div>
          </div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="space-y-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-border/40 pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/10 flex items-center justify-center border border-white/5 shadow-inner">
                <Box className="w-7 h-7 text-primary" />
              </div>
              <Heading level={2} className="text-6xl font-black tracking-tighter font-heading">Foundations</Heading>
            </div>
            <Text faded className="text-2xl max-w-2xl font-light">
              Mix surfaces and actions to create unique component states.
            </Text>
          </div>
          <Button secondary outline className="rounded-full px-8 h-12 font-semibold" onClick={() => onNavigate("button")}>View All Primitives</Button>
        </div>

        <Grid cols={1} mdCols={2} lgCols={4} gap={8}>
          <Card glass className="col-span-1 md:col-span-2 space-y-8 glass-card p-10">
            <div className="flex items-center justify-between">
              <Text bold uppercase className="text-xs text-primary tracking-[0.2em] font-heading">Button Variations</Text>
              <Layers className="w-5 h-5 text-white/20" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Button primary glow className="w-full h-14 text-base rounded-xl font-bold">Glow Primary</Button>
              <Button secondary shine className="w-full h-14 text-base rounded-xl font-bold">Shine Secondary</Button>
              <Button outline bounce className="w-full h-14 text-base rounded-xl border-white/20 hover:border-white/40 font-bold hover:text-white">Tactile Outline</Button>
              <Button glass expand className="w-full h-14 text-base rounded-xl bg-white/5 font-bold hover:bg-white/10">Glass Expansion</Button>
            </div>
          </Card>

          <Card glass className="col-span-1 md:col-span-2 space-y-8 relative overflow-hidden glass-card p-10 group bg-black/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/40 transition-colors" />
            <Text bold uppercase className="text-xs text-secondary relative z-10 tracking-[0.2em] font-heading">Surface Logic</Text>
            <div className="grid grid-cols-2 gap-8 relative z-10">
              <Card glass neon padded className="h-32 flex flex-col items-center justify-center text-center gap-3 border-white/10 hover:border-primary/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Wand2 className="w-5 h-5 text-primary" />
                </div>
                <Text xs bold className="tracking-widest font-heading">NEON GLASS</Text>
              </Card>
              <Card floating padded className="h-32 flex flex-col items-center justify-center text-center gap-3 border-white/5 bg-background/60 shadow-2xl">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Box className="w-5 h-5 text-white" />
                </div>
                <Text xs bold className="tracking-widest font-heading">FLOATING</Text>
              </Card>
            </div>
          </Card>

          <Card glass className="col-span-1 md:col-span-4 space-y-10 glass-card p-12 bg-gradient-to-r from-white/[0.03] to-transparent">
            <Text bold uppercase className="text-xs text-white/40 tracking-[0.2em] font-heading">Typography & Motion</Text>
            <Grid cols={1} mdCols={3} gap={16}>
              <div className="space-y-4 group cursor-default">
                <div className="h-20 flex items-center">
                  <Heading level={3} gradientText className="text-5xl font-black font-heading group-hover:scale-105 transition-transform origin-left tracking-tighter">Gradient</Heading>
                </div>
                <Text xs faded className="font-mono text-white/30 border-t border-white/10 pt-4 block">Prop: gradient-text</Text>
              </div>
              <div className="space-y-4 group cursor-default">
                <div className="h-20 flex items-center">
                  <Heading level={3} typewriter className="text-5xl font-black font-heading text-white tracking-tighter">Typewriter</Heading>
                </div>
                <Text xs faded className="font-mono text-white/30 border-t border-white/10 pt-4 block">Prop: typewriter</Text>
              </div>
              <div className="space-y-4 group cursor-default">
                <div className="h-20 flex items-center">
                  <Heading level={3} reveal className="text-5xl font-black font-heading text-white tracking-tighter">Reveal</Heading>
                </div>
                <Text xs faded className="font-mono text-white/30 border-t border-white/10 pt-4 block">Prop: reveal</Text>
              </div>
            </Grid>
          </Card>
        </Grid>
      </section >

      {/* Analytics Section */}
      < section className="space-y-16" >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/20 pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <BarChart3 className="w-10 h-10 text-secondary" />
              <Heading level={2} className="text-5xl font-black tracking-tight font-heading">Active Analytics</Heading>
            </div>
            <Text faded className="text-2xl max-w-2xl font-light">
              Polybase charts are theme-aware, responsive, and animated.
            </Text>
          </div>
        </div>

        <Grid cols={1} lgCols={3} gap={8}>
          <Card glass neon className="lg:col-span-2 min-h-[450px] glass-card p-10">
            <Flex justify="between" align="center" className="mb-12">
              <div className="space-y-1">
                <Heading level={3} className="text-2xl font-heading font-bold">Network Throughput</Heading>
                <Text sm faded className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Real-time data stream
                </Text>
              </div>
              <Button sm outline shine className="rounded-full border-white/10 hover:bg-white/5">Live Update</Button>
            </Flex>
            <AreaChart data={chartData} glass gradient height={300} />
          </Card>

          <Card glass floating className="space-y-8 glass-card p-10 bg-white/[0.02]">
            <Heading level={3} className="text-2xl font-heading font-bold">Resource Allocation</Heading>
            <div className="space-y-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="space-y-3">
                  <Flex justify="between" className="text-xs uppercase tracking-wider font-semibold">
                    <Text className="text-white/70">Node 0{i}</Text>
                    <Text className="text-primary">{30 + i * 15}%</Text>
                  </Flex>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-purple-500 relative"
                      style={{ width: `${30 + i * 15}%` }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-white/50 shadow-[0_0_10px_white]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button primary glow className="w-full mt-4 h-12 rounded-xl font-bold">Optimize Cluster</Button>
          </Card>
        </Grid>
      </section >

      {/* CTA Section */}
      < section className="space-y-16 py-24 px-12 rounded-[4rem] border border-white/10 relative overflow-hidden isolate" >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />

        <div className="text-center max-w-4xl mx-auto space-y-8 relative z-10">
          <Heading level={2} className="text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 font-heading">
            Prop Mixology
          </Heading>
          <Text lg faded className="text-2xl font-light">
            Layer surface props with action props for <span className="text-primary font-medium">unbelievable</span> visual feedback.
          </Text>
        </div>

        <div className="mt-24 flex justify-center relative z-10">
          <Card glass neon className="max-w-2xl w-full flex flex-col md:flex-row items-center gap-12 border-white/10 p-12 bg-black/40 backdrop-blur-2xl">
            <div className="space-y-6 flex-1 text-center md:text-left">
              <Text bold className="text-xl text-white font-heading uppercase tracking-widest">Try this combo:</Text>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {['glass', 'neon', 'shine', 'bounce'].map(p => (
                  <span key={p} className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-primary font-bold uppercase tracking-wider shadow-sm">{p}</span>
                ))}
              </div>
            </div>
            <Button glass neon shine bounce primary expand className="px-12 h-20 text-xl font-black font-heading rounded-2xl shadow-[0_0_50px_rgba(var(--primary),0.3)] hover:scale-105 transition-transform">
              ULTIMATE BUTTON
            </Button>
          </Card>
        </div>
      </section >
    </div >
  );
}
