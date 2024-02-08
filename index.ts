import {
  AdTagConfig,
  AdTagType,
  BitmovinAdBreak,
  PlayerConfig,
} from "bitmovin-player";

const configStructureBroken: PlayerConfig = {
  advertising: {
    adBreaks: [
      {
        tag: {
          type: "vmap",
          url: "https://some.com/url",
        },
        // tsc errors:
        // 1. Object literal may only specify known properties, and 'tag' does not exist in type 'AdConfig'. [2353]
      },
    ],
  },
};

export const configCastWorks: PlayerConfig = {
  key: "value",
  advertising: {
    adBreaks: [
      {
        tag: {
          type: "vmap",
          url: "https://some.com/url",
        },
      } as BitmovinAdBreak,
    ],
  },
};

const adTagConfig: AdTagConfig = {
  tag: {
    type: AdTagType.VMAP,
    url: "https://some.com/url",
  },
};

export const configChildSubtypeWorks: PlayerConfig = {
  key: "value",
  advertising: {
    adBreaks: [adTagConfig],
  },
};

const adTagConfig2: BitmovinAdBreak = {
  id: "ad-break-1",
  scheduleTime: 0,
  position: "pre",
  tag: {
    type: AdTagType.VMAP,
    url: "https://some.com/url",
  },
};

export const configChildSubtypeWorks2: PlayerConfig = {
  key: "value",
  advertising: {
    adBreaks: [adTagConfig2],
  },
};
