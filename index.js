"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    advertising: {
        adBreaks: [
            {
                // tag: {
                //   type: "vmap",
                //   url: "https://some.com/url",
                // },
                // tsc errors:
                // 1. Object literal may only specify known properties, and 'tag' does not exist in type 'AdConfig'. [2353]
                tag: {
                    type: "vmap",
                    url: "https://some.com/url",
                },
            },
            // Fixed with this cast, but bypasses the type check
            // } as BitmovinAdBreak,
        ],
    },
};