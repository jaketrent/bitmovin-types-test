Demonstrates a tsc error for an appropriate BitmovinAdBreak shape inside the PlayerConfig.

To test, run:

```
tsc
```

And get:

```
index.ts:13:9 - error TS2353: Object literal may only specify known properties, and 'tag' does not exist in type 'AdConfig'.

13         tag: {
           ~~~
```
