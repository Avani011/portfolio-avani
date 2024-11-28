import { ILocomotiveScrollOptions } from 'locomotive-scroll';
export interface cardProps{
    size: "small" | "large";
    source: string;
    name: string;
    link: string;
};

export interface CustomLocomotiveScrollOptions extends ILocomotiveScrollOptions {
    el: HTMLElement; // Required property
    smooth?: boolean;
    smartphone?: {
      smooth?: boolean;
    };
    tablet?: {
      smooth?: boolean;
    };
  }
  