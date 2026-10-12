import type { LucideIcon } from "lucide-react";

export interface ExpertiseItem {
  icon: LucideIcon;
  title: string;
  text: string;
  accent: "navy" | "ocean" | "teal" | "gold" | "coral";
  image: string;
}

export interface ProductItem {
  name: string;
  image: string;
  /** One entry per paragraph. */
  text: string[];
}

export interface CapabilityBlock {
  title: string;
  points: string[];
}

export interface EPCIBlock extends CapabilityBlock {
  image: string;
}

export type ProjectRow = [location: string, description: string, year: string];

export interface ProjectGroup {
  key: string;
  label: string;
  note?: string;
  rows: ProjectRow[];
}

export interface Office {
  tag: string;
  name: string;
  lines: string[];
  phones?: string[];
  email?: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export type SubmitStatus = "idle" | "sending" | "success" | "error";
