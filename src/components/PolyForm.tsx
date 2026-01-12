"use client";

import * as React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "../lib/utils";
import { Button } from "./Button";
import { Text } from "./Typography";

interface PolyFormProps {
    schema: any;
    onSubmit: (data: any) => void;
    children: React.ReactNode;
    className?: string;
    defaultValues?: any;
}

export function PolyForm({ schema, onSubmit, children, className, defaultValues }: PolyFormProps) {
    const methods = useForm({
        resolver: zodResolver(schema),
        defaultValues,
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={cn("space-y-6", className)}>
                {children}
            </form>
        </FormProvider>
    );
}

interface FormFieldProps {
    name: string;
    label: string;
    children: (props: { field: any; error?: string }) => React.ReactNode;
    className?: string;
}

export function FormField({ name, label, children, className }: FormFieldProps) {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name]?.message as string | undefined;

    return (
        <div className={cn("space-y-2", className)}>
            <Text bold sm className="mb-1">{label}</Text>
            {children({ field: register(name), error })}
            {error && (
                <Text error sm italic reveal>
                    {error}
                </Text>
            )}
        </div>
    );
}

interface MultiStepFormProps {
    steps: {
        title: string;
        content: React.ReactNode;
        schema: any;
    }[];
    onComplete: (data: any) => void;
}

export function MultiStepForm({ steps, onComplete }: MultiStepFormProps) {
    const [currentStep, setCurrentStep] = React.useState(0);
    const [formData, setFormData] = React.useState({});

    const currentStepData = steps[currentStep];

    const handleNext = (stepData: any) => {
        const newData = { ...formData, ...stepData };
        setFormData(newData);

        if (currentStep === steps.length - 1) {
            onComplete(newData);
        } else {
            setCurrentStep(currentStep + 1);
        }
    };

    return (
        <div className="space-y-8">
            {/* Stepper UI */}
            <div className="flex items-center justify-between px-4">
                {steps.map((step, i) => (
                    <React.Fragment key={i}>
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500",
                                    i <= currentStep ? "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]" : "border-muted text-muted"
                                )}
                            >
                                {i + 1}
                            </div>
                            <Text xs bold={i === currentStep} faded={i !== currentStep} uppercase>
                                {step.title}
                            </Text>
                        </div>
                        {i < steps.length - 1 && (
                            <div className={cn("flex-1 h-[2px] mb-6 transition-colors duration-500", i < currentStep ? "bg-primary" : "bg-muted")} />
                        )}
                    </React.Fragment>
                ))}
            </div>

            <PolyForm
                schema={currentStepData.schema}
                onSubmit={handleNext}
                defaultValues={formData}
            >
                <div key={currentStep} className="animate-in fade-in slide-in-from-right-4 duration-500">
                    {currentStepData.content}
                </div>

                <div className="flex justify-between pt-4">
                    <Button
                        type="button"
                        glass
                        disabled={currentStep === 0}
                        onClick={() => setCurrentStep(currentStep - 1)}
                    >
                        Previous
                    </Button>
                    <Button type="submit" primary glow shine bounce>
                        {currentStep === steps.length - 1 ? "Complete" : "Continue"}
                    </Button>
                </div>
            </PolyForm>
        </div>
    );
}
