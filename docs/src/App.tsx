"use client";

import * as React from "react";
import {
  TooltipProvider,
  GlowCursor,
  Button,
  Card,
  AreaChart,
  BarChart,
  MultiStepForm,
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
  TooltipContent
} from "polybase";
import * as z from "zod";
import { Sidebar } from "./components/Sidebar";
import { IntroductionPage } from "./content/IntroductionPage";
import { InstallationPage } from "./content/InstallationPage";
import { EffectsPage } from "./content/EffectsPage";
import { ComponentPage } from "./content/ComponentPage";

const SECTIONS = [
  {
    title: "Getting Started",
    items: [
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

const chartData = [
  { name: "Mon", value: 120 },
  { name: "Tue", value: 200 },
  { name: "Wed", value: 150 },
  { name: "Thu", value: 300 },
  { name: "Fri", value: 250 },
];

const formSteps = [
  {
    title: "Identity",
    schema: z.object({ username: z.string().min(3) }),
    content: <Text>Pick a cool username.</Text>
  },
  {
    title: "Security",
    schema: z.object({ password: z.string().min(8) }),
    content: <Text>Secure your account.</Text>
  }
];

export default function App() {
  const [activeTab, setActiveTab] = React.useState("intro");

  const renderContent = () => {
    switch (activeTab) {
      case "intro": return <IntroductionPage />;
      case "installation": return <InstallationPage />;
      case "effects": return <EffectsPage />;

      case "button":
        return (
          <ComponentPage
            title="Button"
            description="A high-performance action component with reactive physical effects."
            playgroundCode={`<Button primary glow shine bounce>
  Interactive Button
</Button>`}
            playgroundPreview={<Button primary glow shine bounce expand>Interactive Button</Button>}
            propsList={[
              { name: "primary", type: "boolean", description: "Applies the primary branding color." },
              { name: "glow", type: "boolean", description: "Adds a pulsing glow effect." },
              { name: "shine", type: "boolean", description: "Adds a moving light sheen effect." },
              { name: "bounce", type: "boolean", description: "Adds a subtle scaling animation on hover." },
            ]}
          />
        );

      case "card":
        return (
          <ComponentPage
            title="Card"
            description="The base surface component for building high-end interfaces."
            playgroundCode={`<Card glass padded floating neon>
  <Text>Premium Surface Content</Text>
</Card>`}
            playgroundPreview={
              <Card glass padded floating neon className="p-8">
                <Text bold>Glassmorphic Card</Text>
                <Text faded sm className="mt-2 block">Supporting glass, floating, and neon effects out of the box.</Text>
              </Card>
            }
            propsList={[
              { name: "glass", type: "boolean", description: "Applies backdrop blur and glass styling." },
              { name: "floating", type: "boolean", description: "Adds a subtle vertical floating animation." },
              { name: "neon", type: "boolean", description: "Adds a vibrant outer glow." },
            ]}
          />
        );

      case "typography":
        return (
          <ComponentPage
            title="Typography"
            description="Standardized text and heading components with integrated Poly-Engine support."
            playgroundCode={`<Heading level={1} gradient-text typewriter>Hello World</Heading>`}
            playgroundPreview={
              <Flex direction="col" gap={4}>
                <Heading level={1} gradient-text typewriter>Welcome to Polybase</Heading>
                <Text lg faded italic reveal>High-performance design system.</Text>
              </Flex>
            }
            propsList={[
              { name: "level", type: "1 | 2 | 3 | 4 | 5 | 6", description: "The semantic level of the heading.", default: "1" },
              { name: "gradient-text", type: "boolean", description: "Applies a linear gradient to the text." },
              { name: "typewriter", type: "boolean", description: "Adds a typewriter typing effect." },
            ]}
          />
        );

      case "modal":
        return (
          <ComponentPage
            title="Modal"
            description="Accessible dialog component built on Radix UI, supporting blur and glass backdrops."
            playgroundCode={`<Modal>
  <ModalTrigger asChild><Button>Open</Button></ModalTrigger>
  <ModalContent glass>
    <ModalHeader>
      <ModalTitle>Modal Title</ModalTitle>
    </ModalHeader>
    <Text>Modal content goes here.</Text>
  </ModalContent>
</Modal>`}
            playgroundPreview={
              <Modal>
                <ModalTrigger asChild>
                  <Button primary glow>Open Premium Modal</Button>
                </ModalTrigger>
                <ModalContent glass className="max-w-md">
                  <ModalHeader>
                    <ModalTitle>System Update</ModalTitle>
                    <ModalDescription>Your Polybase UI components are ready to deploy.</ModalDescription>
                  </ModalHeader>
                  <div className="py-6">
                    <Text faded>All overlays support the same boolean styling engine as base components.</Text>
                  </div>
                  <ModalFooter>
                    <Button primary expand>Accept Upgrade</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            }
            propsList={[
              { name: "glass", type: "boolean", description: "Applies glassmorphism to the modal content." },
            ]}
          />
        );

      case "accordion":
        return (
          <ComponentPage
            title="Accordion"
            description="Collapsible content panels with smooth Framer Motion height animations."
            playgroundCode={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger primary>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to WAI-ARIA standards.</AccordionContent>
  </AccordionItem>
</Accordion>`}
            playgroundPreview={
              <Accordion type="single" collapsible className="w-full max-w-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger primary neon>Is it fast?</AccordionTrigger>
                  <AccordionContent>
                    Yes, it uses hardware-accelerated animations via Framer Motion.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger secondary glow>Is it customizable?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. Every part of the accordion supports the Poly-Engine.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            }
            propsList={[
              { name: "type", type: '"single" | "multiple"', description: "Allow single or multiple items to be open." },
              { name: "collapsible", type: "boolean", description: "Allow all items to be closed." },
            ]}
          />
        );

      case "tooltip":
        return (
          <ComponentPage
            title="Tooltip"
            description="Pop-up info components that appear on hover or focus."
            playgroundCode={`<Tooltip>
  <TooltipTrigger><Button>Hover Me</Button></TooltipTrigger>
  <TooltipContent glass neon>
    Tooltip content
  </TooltipContent>
</Tooltip>`}
            playgroundPreview={
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button primary bounce>Hover For Secret</Button>
                  </TooltipTrigger>
                  <TooltipContent glass neon side="top">
                    <Text sm bold>Polybase Intelligence</Text>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            }
            propsList={[
              { name: "side", type: '"top" | "bottom" | "left" | "right"', description: "Preferred tooltip position.", default: "top" },
              { name: "glass", type: "boolean", description: "Applies glass styling to the tooltip." },
            ]}
          />
        );

      case "charts":
        return (
          <ComponentPage
            title="Poly-Charts"
            description="Data visualization components with full Poly-Engine effect integration."
            playgroundCode={`<AreaChart data={data} glass neon height={300} />`}
            playgroundPreview={
              <div className="w-full max-w-lg space-y-8">
                <AreaChart data={chartData} glass neon height={200} />
                <BarChart data={chartData} primary floating height={200} />
              </div>
            }
            propsList={[
              { name: "data", type: "any[]", description: "The data array for the chart.", default: "[]" },
              { name: "height", type: "number | string", description: "The height of the chart container.", default: "300" },
            ]}
          />
        );

      case "forms":
        return (
          <ComponentPage
            title="Poly-Forms"
            description="Multi-step form system with integrated Zod validation and stepper UI."
            playgroundCode={`<MultiStepForm steps={steps} onComplete={handleSubmit} />`}
            playgroundPreview={
              <div className="w-full max-w-sm">
                <MultiStepForm steps={formSteps} onComplete={(v: any) => alert(JSON.stringify(v))} />
              </div>
            }
            propsList={[
              { name: "steps", type: "Step[]", description: "Configuration array for form steps." },
              { name: "onComplete", type: "function", description: "Callback when all steps are valid." },
            ]}
          />
        );

      case "glowcursor":
        return (
          <ComponentPage
            title="Glow Cursor"
            description="A premium interactive cursor effect that follows the mouse with smooth physics."
            playgroundCode={`<GlowCursor color="rgba(var(--primary), 0.5)" />`}
            playgroundPreview={
              <div className="p-12 border-2 border-dashed border-primary/20 rounded-3xl relative overflow-hidden group">
                <Text lg faded centered>The cursor follows you everywhere in this zone.</Text>
                <Text xs italic centered className="mt-4">Move your mouse to see the smooth glow effect.</Text>
              </div>
            }
            propsList={[
              { name: "color", type: "string", description: "Custom glow color.", default: "rgba(var(--primary), 0.15)" },
            ]}
          />
        );

      default:
        return <IntroductionPage />;
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

        <main className="flex-1 p-8 md:p-16 max-w-6xl mx-auto space-y-24 scroll-smooth">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {renderContent()}
          </div>

          <footer className="border-t border-border pt-8 pb-16 flex justify-between items-center text-muted-foreground text-sm">
            <Text>© 2026 Polybase UI. Built for the future.</Text>
            <Flex gap={4}>
              <button className="hover:text-primary transition-colors">Twitter</button>
              <button className="hover:text-primary transition-colors">Discord</button>
            </Flex>
          </footer>
        </main>
      </div>
    </TooltipProvider>
  );
}
