declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "scrollreveal" {
  interface ScrollRevealOptions {
    origin?: string;
    distance?: string;
    duration?: number;
    delay?: number;
    interval?: number;
    reset?: boolean;
    scale?: number;
    easing?: string;
    mobile?: boolean;
  }

  interface ScrollRevealObject {
    reveal: (selector: string, options?: ScrollRevealOptions) => void;
  }

  export default function ScrollReveal(
    options?: ScrollRevealOptions
  ): ScrollRevealObject;
}
