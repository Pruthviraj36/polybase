"use client";

import * as React from "react";
import {
  TooltipProvider,
  GlowCursor,
  Button,
  Card,
  Text,
  Heading,
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  AreaChart,
  BarChart,
  Input,
  Switch,
  Checkbox,
  PolyForm,
  FormField
} from "polybase";
import { COMPONENT_DATA } from "./content/ComponentData";
import { z } from "zod";

import { Sidebar } from "./components/Sidebar";
import { IntroductionPage } from "./content/IntroductionPage";
import { InstallationPage } from "./content/InstallationPage";
import { EffectsPage } from "./content/EffectsPage";
import { ComponentPage } from "./content/ComponentPage";
import { ShowcasePage } from "./content/ShowcasePage";
import { Github, Star, Menu } from "lucide-react";

const SECTIONS = [
  {
    title: "Getting Started",
    items: [
      { id: "showcase", label: "Showcase" },
      { id: "intro", label: "Introduction" },
      { id: "installation", label: "Installation" },
      { id: "effects", label: "Effects Gallery" },
    ],
  },
  {
    title: "Foundational",
    items: [
      { id: "button", label: "Button" },
      { id: "card", label: "Card" },
      { id: "typography", label: "Typography" },
    ],
  },
  {
    title: "Overlays & Interactive",
    items: [
      { id: "modal", label: "Modal" },
      { id: "accordion", label: "Accordion" },
      { id: "tooltip", label: "Tooltip" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { id: "charts", label: "Charts" },
      { id: "forms", label: "Forms" },
    ],
  },
  {
    title: "Utilities",
    items: [
      { id: "glowcursor", label: "Glow Cursor" },
    ],
  },
];

export default function App() {
  const [activeTab, setActiveTab] = React.useState("showcase");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "showcase": return <ShowcasePage onNavigate={setActiveTab} />;
      case "intro": return <IntroductionPage />;
      case "installation": return <InstallationPage />;
      case "effects": return <EffectsPage />;

      case "button":
        return (
          <ComponentPage
            {...COMPONENT_DATA.button}
            component={Button}
            playgroundCode={`<Button ...props>Interactive Button</Button>`}
            defaultProps={{ primary: true, shine: true, bounce: true }}
            propsList={COMPONENT_DATA.button.props}
          />
        );

      case "card":
        return (
          <ComponentPage
            {...COMPONENT_DATA.card}
            component={Card}
            playgroundCode={`<Card ...props className="p-12 w-64 h-64 flex items-center justify-center">\n  <Text bold>Surface</Text>\n</Card>`}
            defaultProps={{ glass: true, floating: true, padded: true }}
            propsList={COMPONENT_DATA.card.props}
          />
        );

      case "typography":
        return (
          <ComponentPage
            {...COMPONENT_DATA.typography}
            component={Heading}
            playgroundCode={`<Heading level={1} ...props>\n  Hello Polybase\n</Heading>`}
            defaultProps={{ gradientText: true, typewriter: true }}
            propsList={COMPONENT_DATA.typography.props}
          />
        );

      case "modal":
        return (
          <ComponentPage
            {...COMPONENT_DATA.modal}
            component={({ glass, neon }: { glass: boolean; neon: boolean }) => (
              <Modal>
                <ModalTrigger asChild>
                  <Button primary glow shine expand>Trigger Modal</Button>
                </ModalTrigger>
                <ModalContent glass={glass} neon={neon} className="max-w-md">
                  <ModalHeader>
                    <ModalTitle>Secure Checkpoint</ModalTitle>
                    <ModalDescription>This modal automatically inherits glassmorphism from its parent state.</ModalDescription>
                  </ModalHeader>
                  <div className="py-8">
                    <Text faded>Polished overlays built on Radix-UI primitives.</Text>
                  </div>
                  <ModalFooter>
                    <Button primary expand>Confirm</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}
            playgroundCode={`<Modal>\n  <ModalTrigger asChild>\n    <Button primary glow shine expand>Trigger Modal</Button>\n  </ModalTrigger>\n  <ModalContent ...props className="max-w-md">\n    <ModalHeader>\n      <ModalTitle>Secure Checkpoint</ModalTitle>\n      <ModalDescription>Enhanced overlays.</ModalDescription>\n    </ModalHeader>\n    <div className="py-8">Content</div>\n    <ModalFooter>\n      <Button primary expand>Confirm</Button>\n    </ModalFooter>\n  </ModalContent>\n</Modal>`}
            defaultProps={{ glass: true }}
            propsList={COMPONENT_DATA.modal.props}
          />
        );

      case "accordion":
        return (
          <ComponentPage
            {...COMPONENT_DATA.accordion}
            component={({ primary, neon, glow }: { primary: boolean; neon: boolean; glow: boolean }) => (
              <Accordion type="single" collapsible className="w-full max-w-xl">
                <AccordionItem value="item-1">
                  <AccordionTrigger primary={primary} neon={neon} glow={glow}>The Poly-Engine</AccordionTrigger>
                  <AccordionContent>
                    <Text sm faded>Our engine handles orchestration of CSS variables to ensure effects never clash.</Text>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger primary={primary} neon={neon} glow={glow}>Cross-Framework</AccordionTrigger>
                  <AccordionContent>
                    <Text sm faded>Works seamlessly across Next.js, Vite, and Remix.</Text>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
            playgroundCode={`<Accordion type="single" collapsible className="w-full max-w-xl">\n  <AccordionItem value="item-1">\n    <AccordionTrigger ...props>Trigger</AccordionTrigger>\n    <AccordionContent>Content</AccordionContent>\n  </AccordionItem>\n</Accordion>`}
            defaultProps={{ primary: true, neon: true }}
            propsList={COMPONENT_DATA.accordion.props}
          />
        );

      case "tooltip":
        return (
          <ComponentPage
            {...COMPONENT_DATA.tooltip}
            component={({ glass, neon }: { glass: boolean; neon: boolean }) => (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button primary shine>Hover for poly-info</Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={10} glass={glass} neon={neon}>
                  <Text xs bold>Poly-Engine v1.0</Text>
                  <Text xs faded>Interactive state management.</Text>
                </TooltipContent>
              </Tooltip>
            )}
            playgroundCode={`<Tooltip>\n  <TooltipTrigger asChild>\n    <Button primary shine>Hover Me</Button>\n  </TooltipTrigger>\n  <TooltipContent ...props>\n    <Text xs bold>Tooltip</Text>\n  </TooltipContent>\n</Tooltip>`}
            defaultProps={{ glass: true, neon: true }}
            propsList={COMPONENT_DATA.tooltip.props}
          />
        );

      case "charts": {
        const chartData = [
          { name: "Jan", value: 400 },
          { name: "Feb", value: 300 },
          { name: "Mar", value: 600 },
          { name: "Apr", value: 800 },
          { name: "May", value: 500 },
          { name: "Jun", value: 900 },
        ];
        return (
          <ComponentPage
            {...COMPONENT_DATA.charts}
            component={({ gradient }: { gradient: boolean }) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <Card glass padded className="space-y-4">
                  <Text bold>Area Analytics</Text>
                  <AreaChart data={chartData} gradient={gradient} />
                </Card>
                <Card glass padded className="space-y-4">
                  <Text bold>Bar Comparison</Text>
                  <BarChart data={chartData} />
                </Card>
              </div>
            )}
            playgroundCode={`<AreaChart data={data} gradient={true} />\n<BarChart data={data} />`}
            defaultProps={{ gradient: true }}
            propsList={COMPONENT_DATA.charts.props}
          />
        );
      }

      case "forms":
        return (
          <ComponentPage
            {...COMPONENT_DATA.forms}
            component={({ glass, error, success }: { glass: boolean; error: boolean; success: boolean }) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-2xl">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Text sm faded>Standard Input</Text>
                    <Input glass={glass} error={error} success={success} placeholder="Type something..." />
                  </div>
                  <div className="flex items-center gap-4">
                    <Switch glass={glass} error={error} success={success} />
                    <Text sm faded>Visual Switch</Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Checkbox glass={glass} error={error} success={success} />
                    <Text sm faded>Checkbox UI</Text>
                  </div>
                </div>
              </div>
            )}
            playgroundCode={`<Input glass={true} placeholder="Search..." />\n<Switch glass={true} />\n<Checkbox glass={true} />`}
            defaultProps={{ glass: true }}
            propsList={COMPONENT_DATA.forms.props}
          />
        );

      case "polyform": {
        const loginSchema = z.object({
          email: z.string().email(),
          password: z.string().min(8)
        });
        return (
          <ComponentPage
            {...COMPONENT_DATA.polyform}
            component={() => (
              <Card glass padded className="max-w-md w-full mx-auto">
                <PolyForm schema={loginSchema} onSubmit={console.log}>
                  <FormField name="email" label="Email Address">
                    {({ field }) => <Input {...field} glass placeholder="you@example.com" />}
                  </FormField>
                  <FormField name="password" label="Password">
                    {({ field }) => <Input {...field} glass type="password" placeholder="••••••••" />}
                  </FormField>
                  <Button type="submit" primary glow expand className="w-full">Sign In</Button>
                </PolyForm>
              </Card>
            )}
            playgroundCode={`<PolyForm schema={schema} onSubmit={handleSubmit}>\n  <FormField name="email" label="Email">\n    {({ field }) => <Input {...field} glass />}\n  </FormField>\n  <Button type="submit" primary expand>Submit</Button>\n</PolyForm>`}
            defaultProps={{}}
            propsList={COMPONENT_DATA.polyform.props}
          />
        );
      }

      case "glowcursor":

        return (
          <ComponentPage
            {...COMPONENT_DATA.glowcursor}
            component={({ size, opacity }: { size: number; opacity: number }) => (
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-border/30 rounded-xl relative overflow-hidden">
                <GlowCursor size={size} opacity={opacity} className="absolute" />
                <Text faded>Move mouse here to test local glow effect</Text>
              </div>
            )}
            playgroundCode={`<GlowCursor size={600} opacity={0.2} />`}
            defaultProps={{ size: 400, opacity: 0.15 } as any}
            propsList={COMPONENT_DATA.glowcursor.props}
          />
        );


      default:
        return <ShowcasePage onNavigate={setActiveTab} />;
    }
  };

  return (
    <TooltipProvider>
      <GlowCursor />
      <div className="flex min-h-screen bg-background text-foreground font-sans">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            sections={SECTIONS}
          />
        </div>

        <main className="flex-1 min-w-0 flex flex-col relative">
           {/* Mobile Header */}
           <div className="lg:hidden h-16 border-b border-border/20 flex items-center justify-between px-6 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                 <span className="font-bold text-primary">P</span>
               </div>
               <span className="font-bold">Polybase</span>
             </div>
             <Button glass className="w-9 h-9 p-0 flex items-center justify-center text-muted-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="w-5 h-5" />
             </Button>
           </div>
           
           {mobileMenuOpen && (
             <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-20 px-6 overflow-y-auto">
               <Sidebar
                 activeTab={activeTab}
                 onTabChange={(t) => { setActiveTab(t); setMobileMenuOpen(false); }}
                 sections={SECTIONS}
                 mobile
               />
             </div>
           )}

          {/* Consistent Top Bar for Desktop */}
          <header className="hidden lg:flex sticky top-0 z-40 w-full border-b border-white/5 bg-background/40 backdrop-blur-xl h-16 items-center justify-between px-8 transition-all duration-300">
             <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">docs</span>
                <span className="text-muted-foreground">/</span>
                <span className="font-medium text-foreground tracking-wide capitalize">{activeTab}</span>
             </div>
             <div className="flex items-center gap-3">
                <a href="https://github.com/Pruthviraj36/polybase" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                   <Github className="w-5 h-5" />
                </a>
                <Button sm primary glow shine className="h-9 gap-2">
                   <Star className="w-3.5 h-3.5 fill-current" />
                   Star on GitHub
                </Button>
             </div>
          </header>

          <div className="w-full max-w-[1400px] mx-auto p-6 md:p-12 lg:p-16 space-y-24 flex-1">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
              {renderContent()}
            </div>

            <footer className="border-t border-border/20 pt-16 pb-24">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                 <div className="col-span-1 md:col-span-2 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs border border-primary/30">P</div>
                      <span className="font-bold tracking-tight text-lg">Polybase</span>
                    </div>
                    <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                      A high-performance design system focused on micro-interactions and premium glassmorphism effects.
                    </p>
                 </div>
                 <div className="space-y-4">
                    <h4 className="font-bold text-sm">Resources</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                       <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                       <li><a href="#" className="hover:text-primary transition-colors">Components</a></li>
                       <li><a href="#" className="hover:text-primary transition-colors">Examples</a></li>
                    </ul>
                 </div>
                 <div className="space-y-4">
                    <h4 className="font-bold text-sm">Community</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                       <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
                       <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                       <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                    </ul>
                 </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
                 <p>© 2026 Polybase UI Lab. Apache 2.0 License.</p>
                 <p>Built with React & Tailwind CSS.</p>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}
