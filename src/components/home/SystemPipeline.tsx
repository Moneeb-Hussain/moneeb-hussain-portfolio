"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Cpu, Eye, ShieldCheck, Zap } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

const stages = [
  {
    label: "Sense",
    icon: Eye,
    description:
      "Cameras, sensors, and structured inputs capture the raw state of a physical or digital environment.",
  },
  {
    label: "Reason",
    icon: Cpu,
    description:
      "Models and pipelines interpret that state - detection, classification, retrieval, or multi-agent analysis.",
  },
  {
    label: "Decide",
    icon: ShieldCheck,
    description:
      "Confidence-scored recommendations are produced, with a human approval step wherever the stakes call for it.",
  },
  {
    label: "Act",
    icon: Zap,
    description:
      "Approved decisions drive a physical actuator, a billing system, or a downstream workflow.",
  },
] as const;

export function SystemPipeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-border bg-bg" aria-labelledby="system-pipeline-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          id="system-pipeline-heading"
          eyebrow="How the systems are built"
          title="Sense, reason, decide, act"
          description="Every project on this site is a version of the same loop: perceive the world, reason over it, decide what to do, then act - with a human in the loop wherever the decision matters."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={stage.label} className="relative">
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex h-full flex-col gap-3 rounded-lg border border-border bg-surface p-5"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-md bg-dark-section text-surface">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="font-mono text-sm font-semibold tracking-wide text-text uppercase">
                    {stage.label}
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {stage.description}
                  </p>
                </motion.div>
                {index < stages.length - 1 ? (
                  <ArrowRight
                    className="absolute top-1/2 -right-3 z-10 hidden size-5 -translate-y-1/2 text-text-secondary sm:block lg:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
