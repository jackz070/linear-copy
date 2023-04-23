## What is this?

A clone of Linear website created along with the tutorial from frontendfyi on YouTube (https://www.youtube.com/watch?v=ls_b-1a0ZUc) with my own improvements

## What did I learn from building this?

- A lot about reusability of components. The hero component uses separate components for heading and subheading, declared in one file. They pass children throught a lot. I've avoided this before and used a lot of props and get little control and a lot of headache.
- More reusability! The idea of component variants isn't new to me, but I rarely went further than button with a couple of color / size options decided with a prop. Tool I've learned about in this tutorial is class-variance-authority.
- Bulding TailwindCSS theme from ground up as items are needed. No need to have all the unused classes around, just what is required. Added value is the fact that anyone else working on this project in the future will be less likely to unintentionally use other values that would make the degisn less consistent
- Arbitrary variant selectors with Tailwind. It's compelling to just copy some classes to multiple list items, but why would you do this remembering that those selectors exist?
- Accessibility with sr-only labels
- Compound components
