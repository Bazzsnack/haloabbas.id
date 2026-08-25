---
name: Clear Flow
colors:
  surface: '#f5fafd'
  surface-dim: '#d6dbde'
  surface-bright: '#f5fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4f7'
  surface-container: '#eaeff2'
  surface-container-high: '#e4e9ec'
  surface-container-highest: '#dee3e6'
  on-surface: '#171c1f'
  on-surface-variant: '#3c494c'
  inverse-surface: '#2c3134'
  inverse-on-surface: '#ecf1f4'
  outline: '#6c797d'
  outline-variant: '#bbc9cd'
  surface-tint: '#006878'
  primary: '#006878'
  on-primary: '#ffffff'
  primary-container: '#22c5e0'
  on-primary-container: '#004d59'
  inverse-primary: '#44d8f3'
  secondary: '#0053cf'
  on-secondary: '#ffffff'
  secondary-container: '#2b6cf0'
  on-secondary-container: '#fefcff'
  tertiary: '#4d6077'
  on-tertiary: '#ffffff'
  tertiary-container: '#a2b6d0'
  on-tertiary-container: '#34485d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a5eeff'
  primary-fixed-dim: '#44d8f3'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#dae2ff'
  secondary-fixed-dim: '#b2c5ff'
  on-secondary-fixed: '#001848'
  on-secondary-fixed-variant: '#003fa3'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#b4c8e3'
  on-tertiary-fixed: '#071d30'
  on-tertiary-fixed-variant: '#35485e'
  background: '#f5fafd'
  on-background: '#171c1f'
  surface-variant: '#dee3e6'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system is built for a generalist software builder, prioritizing a "Fresh Cyan Glassmorphism" aesthetic. The brand personality is professional yet lightweight, evoking a sense of technical mastery without the heaviness of traditional enterprise software.

The style is a refined mix of **Minimalism** and **Glassmorphism**. It utilizes high-transparency layers, significant whitespace, and vibrant background blurs to create depth. The interface feels like a clear sheet of ice—cool, modern, and trustworthy—emphasizing clarity of thought and execution. A subtle noise grain overlay is applied globally to prevent the gradients from banding and to provide a tactile, organic feel to the digital surfaces.

## Colors
The palette is rooted in an "Icy Blue" spectrum. The base background is nearly white but carries a cool blue temperature to maintain the fresh atmosphere. 

- **Primary & Secondary:** A gradient transition from Electric Cyan to Royal Blue is used for high-impact actions and hero elements.
- **Surface Treatment:** Glass surfaces utilize a semi-transparent white base with a 20px backdrop blur. This allows the background gradient "blobs" (Cyan to Royal Blue) to peak through, creating a dynamic, living UI.
- **Contrast:** Deep Ocean Navy is used for primary typography to ensure WCAG accessibility against light glass backgrounds, while Slate Blue-Grey provides a softer hierarchy for metadata and captions.

## Typography
The typography system balances technical precision with modern geometric aesthetics. 

- **Display & Headlines:** Use **Space Grotesk**. The slightly unconventional apertures of the glyphs suggest innovation and a "builder" mindset. Keep tracking tight on larger sizes to maintain a punchy, editorial look.
- **Body:** Use **Inter** for its neutral, systematic readability. It provides a stable anchor for the more expressive headlines.
- **Technical/Accents:** Use **JetBrains Mono** for tech stacks, pills, and code snippets. This monospaced font reinforces the "Software Builder" identity and should be used sparingly for functional labels.

## Layout & Spacing
The layout follows a **fluid grid** model with generous vertical breathing room (section-gap) to maintain the "lightweight" feel.

- **Grid:** Use a 12-column grid for desktop with 24px gutters. Elements should generally align to the grid, but glass cards can utilize slightly larger internal padding (32px or 40px) to enhance the sense of "volume."
- **Responsive:** On mobile, reduce side margins to 20px and stack all multi-column layouts into a single column. Vertical spacing between sections should scale down to 80px on mobile to maintain momentum.
- **Safe Areas:** Maintain a "safe area" around the floating navbar pill to ensure it doesn't collide with page content during scroll transitions.

## Elevation & Depth
Elevation in this design system is not achieved through traditional black shadows, but through **Tonal Glassmorphism** and **Color Tints**.

- **Z-Axis Hierarchy:**
    1. **Level 0 (Base):** Near-white icy blue background with soft gradient blobs and noise.
    2. **Level 1 (Cards):** Frosted glass with 20px blur and a 1px solid white border at 50% opacity. Use a very soft, diffused shadow tinted with Electric Cyan (#22C5E0 at 10% opacity) instead of neutral grey.
    3. **Level 2 (Floating Nav/Modals):** Higher backdrop blur (30px) and a slightly more prominent white border to indicate immediate proximity to the user.
- **Dividers:** Use the thin, semi-transparent blue-tinted divider (rgba(190,220,240,0.6)) only when necessary; prefer using whitespace to define boundaries.

## Shapes
The shape language is overtly **Rounded**, bordering on organic to soften the technical nature of the content.

- **Component Radius:** Standard cards and containers use a **24px (1.5rem)** radius to create a friendly, modern container.
- **Interactive Elements:** Buttons, tags, and the navigation bar should use a **Pill-shape (Full round)** to distinguish them as actionable items versus static content containers.
- **Inputs:** Use a 12px radius to sit comfortably between the softness of the cards and the roundness of the buttons.

## Components
- **Buttons:** 
    - *Primary:* Pill-shaped with a linear gradient from Cyan to Royal Blue. Text is white. On hover, increase the shadow spread of the cyan-tinted glow.
    - *Secondary:* Pill-shaped glass surface with a 1px white border. High legibility navy text.
- **Cards:** Large 24px radius, frosted glass finish. Ensure the backdrop-blur is consistent. Internal padding should be 32px to give content "room to breathe."
- **Navbar:** A floating pill-shaped bar. It should remain fixed at the top with a high backdrop-blur, appearing to "melt" the content as it scrolls underneath.
- **Chips/Tech Pills:** Small JetBrains Mono text inside a subtle sky-blue tint (#E8F4FB) or a very light glass container. No border.
- **Inputs:** Glass-style backgrounds with a 1px white border. On focus, the border transitions to solid Electric Cyan (#22C5E0) with a 2px outer glow.
- **Background Blobs:** Non-interactive, large blurred circles that slowly move or pulse behind the content to create a sense of life and fluidity.