import type { JSX } from "react";

export const SelectedPageEnum = {
  Home: "home",
  Benefits: "benefits",
  OurClasses: "ourclasses",
  ContactUs: "contactus",
} as const; // as const makes the value readonly

export type SelectedPage =
  (typeof SelectedPageEnum)[keyof typeof SelectedPageEnum];

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
