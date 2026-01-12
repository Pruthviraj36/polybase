"use client";

import * as React from "react";
import {
  TooltipProvider,
  GlowCursor,
  Button,
  Card,
  Text,
  Flex,
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
            defaultProps={{ "gradient-text": true, typewriter: true }}
            propsList={COMPONENT_DATA.typography.props}
          />
        );

      case "modal":
        return (
          <ComponentPage
            {...COMPONENT_DATA.modal}
            component={({ glass, neon }: any) => (
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
            component={({ primary, neon, glow }: any) => (
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
            component={({ glass, neon }: any) => (
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

      case "charts":
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
            component={({ gradient }: any) => (
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

      case "forms":
        return (
          <ComponentPage
            {...COMPONENT_DATA.forms}
            component={({ glass, error, success }: any) => (
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

      case "polyform":
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

      case "glowcursor":

        return (
          <ComponentPage
            {...COMPONENT_DATA.glowcursor}
            component={({ size, opacity }: any) => (
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-border/30 rounded-xl relative overflow-hidden">
                <GlowCursor size={size} opacity={opacity} className="absolute" />
                <Text faded>Move mouse here to test local glow effect</Text>
              </div>
            )}
            playgroundCode={`<GlowCursor size={600} opacity={0.2} />`}
            defaultProps={{ size: 400, opacity: 0.15 }}
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
      <div className="flex min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Sidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          sections={SECTIONS}
        />

        <main className="flex-1 min-w-0 flex flex-col">
          {/* Sticky Header */}
          <header className="sticky top-0 z-40 w-full border-b border-border/20 bg-background/60 backdrop-blur-xl">
            <div className="container flex h-16 max-w-[1200px] mx-auto items-center justify-between px-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground/60 tracking-wider">docs / <span className="text-foreground font-semibold">{activeTab}</span></span>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/Pruthviraj36/polybase" target="_blank" className="p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <Button xs primary glow shine className="h-8">Star on GitHub</Button>
              </div>
            </div>
          </header>

          <div className="max-w-[1200px] w-full mx-auto p-8 md:p-16 space-y-24 flex-1">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {renderContent()}
            </div>

            <footer className="border-t border-border/20 pt-12 pb-24 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="text-[10px] font-bold text-primary">P</span>
                </div>
                <Text>© 2026 Polybase UI Lab. All rights reserved.</Text>
              </div>
              <Flex gap={8}>
                <a href="#" className="hover:text-primary transition-colors hover:underline underline-offset-4">Documentation</a>
                <a href="https://github.com/Pruthviraj36/polybase" className="hover:text-primary transition-colors hover:underline underline-offset-4">GitHub</a>
                <a href="#" className="hover:text-primary transition-colors hover:underline underline-offset-4">Discord</a>
              </Flex>
            </footer>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}

import { Github } from "lucide-react";

