import React, { ReactHTML, ReactSVG, ReactNode, ComponentType } from "react";

export type HTMLTags = keyof ReactHTML;
export type SVGTags = keyof ReactSVG;

type HTMLTransform = {
  [tag in HTMLTags | SVGTags]: HTMLTags | SVGTags | ComponentType<Omit<React.ComponentProps<tag>, 'ref'>>;
};

type DefaultTransform = {
  _: <P>(element: string | HTMLTags | SVGTags, props?: P, children?: ReactNode) => ReactNode
}

type InjectedAttributes = {
  [tag in HTMLTags]: {
    [key: string]: any
  }
}

export type HtmrOptions = {
  transform: Partial<HTMLTransform & DefaultTransform>,
  preserveAttributes: Array<String | RegExp>,
  injectAttributes: Partial<InjectedAttributes>,
  /** An array of tags whos children should be set as raw html */
  dangerouslySetChildren: HTMLTags[]
};
