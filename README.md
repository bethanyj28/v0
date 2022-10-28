# My Site V0

## Tech stack

### React
React was probably the single part of my tech stack that I was determined to use. Not because I particularly like React, but it seems to be a constant in the companies I choose to work for and was the frontend framework I probably had the best mental model around.

### Next.js
When I began this journey, I had been switching between Gatsby and Create React App, but then I discoverd Next.js and it was over. I thought it offered a ton of features that just made sense, especially with the path-based routing and ease of making templates for markdown (which will be helpful when I finally implement a blog).

### Styled Components
I am insane and decided that I wanted to handroll my CSS. That's why this is a _veryyyy_ simple site. I had previously gotten pretty far using Tailwind until I realized I had no idea what I was doing. I didn't understand CSS. I'm not sure I understand CSS any better now, but Styled Components offered that nice middle ground of feeling like I was writing CSS with the flexability of JavaScript.

The one caveat to Styled Components was that it did not work well with hot reloading during development. Hopefully it works when I deploy...

## v0
In Go, you can release v0 and v1 of a package and maintain an import path without the version. After v2, you must include the version in the import path. Basically, this is to allow massive iterations with v0, but after you reach v1 it should not introduce breaking changes. This is called the "v2 problem", but I find something poetic about that jump between v0 and v1.

I chose v0 as a commitment to finally ship this thing and not be worried about perfection. I can iterate on it constantly and take what I learn to make a better v1 in the future.
