Redesign this existing portfolio website.

IMPORTANT:
This is an existing React + Vite portfolio.
Do not rebuild the application from scratch.

First inspect the current implementation, especially:

- src/index.css
- src/App.jsx
- src/components/Sidebar.jsx
- src/components/Hero.jsx
- src/components/About.jsx
- src/components/AcademicJourney.jsx
- src/components/SelectedWorks.jsx
- src/components/Certificates.jsx
- src/components/TechnicalRepertoire.jsx
- src/components/ContactForm.jsx
- src/utils/translations.js

Understand the existing layout, state management, dark/light theme,
language switching, section navigation, responsive behavior, and content
before making changes.

==================================================
DESIGN GOAL
==================================================

Transform the current "Sky Neon / cyberpunk" visual style into a
refined editorial developer portfolio.

The final website should feel:

- intentionally designed
- understated
- technical
- mature
- clean
- editorial
- modern
- slightly experimental
- personal
- human-designed

It should NOT look like a generic AI-generated developer portfolio.

Think more along the lines of:

- independent frontend engineer portfolio
- editorial design
- Swiss / International Typographic Style influences
- modern digital studio website
- technical documentation aesthetic
- high-end personal website

Do NOT interpret this as "make everything minimal".

The website should still have personality.

==================================================
REMOVE THE CURRENT AI-SLOP / CYBER AESTHETIC
==================================================

The current website contains several effects associated with the
existing Sky Neon theme.

Remove or significantly tone down:

- cyan neon glow
- glowing borders
- glowing text
- excessive shadows
- cursor crosshair
- cursor trail
- click ripple
- animated background grid
- unnecessary parallax
- excessive reveal animations
- floating decorative effects
- cyberpunk visual language

Do not replace them with another generic AI aesthetic.

Specifically avoid:

- purple/blue gradients
- giant blurred gradient blobs
- glassmorphism everywhere
- floating glass cards
- excessive border-radius
- pill-shaped containers everywhere
- glowing CTA buttons
- animated gradient text
- typewriter gimmicks
- particle backgrounds
- fake terminal interfaces
- "tech HUD" interfaces
- excessive Framer Motion-style animations
- cards inside cards
- huge decorative icons

Whenever choosing between adding decoration and improving typography,
spacing, hierarchy, alignment, or composition, choose the latter.

==================================================
COLOR SYSTEM
==================================================

Keep dark mode as the primary experience.

Create a restrained palette.

Example direction:

background:
near-black, but not pure black

surface:
slightly lighter neutral

primary text:
soft off-white

secondary text:
neutral gray

border:
subtle neutral gray

accent:
ONE restrained accent color

The accent can remain cyan/blue as a connection to the old identity,
but remove the neon/glow treatment.

Use the accent sparingly for:

- links
- small metadata
- active navigation
- selected elements
- small visual details

Do not use the accent as a large background.

Light mode should also remain supported.

==================================================
TYPOGRAPHY
==================================================

Typography should become one of the strongest parts of the design.

The existing typography can be replaced if necessary.

Avoid fonts that make the portfolio feel playful or template-like.

Prefer a combination such as:

- modern grotesk / sans-serif for main text
- optional monospace for metadata

Do not use monospace for everything.

Establish a clear hierarchy:

Display
Section title
Project title
Body
Metadata
Label

Use fluid typography with clamp() where appropriate.

Do not make every heading enormous.

Body text should have a comfortable reading width.

Aim for approximately 55–75 characters per line for long text.

==================================================
LAYOUT SYSTEM
==================================================

Create a consistent page grid.

Use strong alignment.

Desktop:
use a structured content grid with generous whitespace.

Do NOT place every section inside a rounded card.

Sections may be separated using:

- whitespace
- typography
- thin horizontal rules
- changes in grid composition

Allow some sections to be visually open.

Use asymmetry selectively.

The layout should feel designed rather than generated from a component
library.

==================================================
SIDEBAR / NAVIGATION
==================================================

The current app uses sidebar-based navigation.

Keep the navigation functionality.

Redesign the sidebar to feel more editorial and less like a dashboard.

Desktop concept:

left rail / narrow sidebar containing:

Aditya Maulana Pamungkas

Machine Learning Engineer
Frontend / Software interests

Navigation

01  Index
02  Journey
03  Work
04  Certifications
05  Skills
06  Contact

Bottom area:
GitHub
LinkedIn
theme toggle
language toggle

Use small typography and subtle active indicators.

Do NOT turn the sidebar into a floating glass panel.

Avoid large rounded containers.

A thin separator between navigation and content is enough.

Mobile:
convert this into a simple compact navigation drawer/menu.

==================================================
HERO
==================================================

Completely rethink the hero composition.

Remove the stereotypical developer hero pattern.

Do NOT create:

"Hi, I'm Aditya 👋"
+
huge gradient text
+
two glowing buttons
+
floating profile card.

Instead use an editorial composition.

Example direction:

large:

ADITYA
MAULANA
PAMUNGKAS

Then smaller information arranged alongside or underneath:

Machine Learning Engineer
Informatics
Jakarta, Indonesia
Available for ...

Short introduction paragraph.

One or two simple text-based links:

View selected work →
Contact →

The name should be the visual anchor.

Use typography and composition rather than effects.

Do not use animated typing for the role.

If the current typewriter animation exists, remove it.

==================================================
ABOUT
==================================================

Avoid a generic "About Me" card.

Use a two-column editorial layout.

Example:

ABOUT

Left:
short introduction

Right:
selected information

Location
Education
Focus
Languages
Interests

Use small metadata labels.

Avoid icons unless they communicate something important.

==================================================
ACADEMIC JOURNEY
==================================================

Keep all existing education/training data.

Replace visually heavy timeline cards with a cleaner timeline or list.

Example:

2022 — 2026
Universitas Gunadarma
Informatics

2025
Asah led by Dicoding
Machine Learning Program

Use typography, date alignment, and thin separators.

Avoid glowing dots and oversized timeline decorations.

==================================================
SELECTED WORK
==================================================

This should become the strongest section after the hero.

The existing portfolio contains these projects:

- Brazilian E-Commerce Analysis
- Dog & Cat Classification
- RFM Segmentation Dashboard
- Duolingo Sentiment Analysis

Do not display them as four identical generic cards.

Create a more editorial project presentation.

Possible layout:

01
Brazilian E-Commerce Analysis

large image

Data Analysis / 2026

description

Python
Pandas
RFM
Data Visualization

View repository ↗

--------------------------------------------------

02
Dog & Cat Classification

...

Alternate image/text placement when appropriate.

Use large project imagery.

Project images should have minimal or zero border radius.

Hover interaction may include:

- slight image scale
- subtle opacity change
- underline movement

No glowing card hover.

==================================================
CERTIFICATES
==================================================

There are many certificates, so prioritize information density.

Keep filtering functionality.

Redesign filters as simple text tabs.

For example:

ALL
MACHINE LEARNING / DATA
WEB
PROGRAMMING

Avoid pill buttons.

Present certificates as a structured list/grid.

Possible fields:

certificate
provider
year
category
↗

Use thin separators.

Featured certificates can be differentiated using typography rather
than glowing borders.

==================================================
TECHNICAL REPERTOIRE
==================================================

Avoid skill progress bars.

Avoid colorful technology badges.

Avoid dozens of cards.

Use a typography-based skills directory.

Example:

01 — MACHINE LEARNING

Python
TensorFlow
Keras
Scikit-learn

02 — DEVELOPMENT

React
JavaScript
HTML / CSS

03 — INFRASTRUCTURE

Git
Docker
Linux

Logo icons may be used sparingly but should not dominate the section.

==================================================
CONTACT
==================================================

Make the final section simple and confident.

Example:

HAVE A PROJECT,
OPPORTUNITY,
OR IDEA?

Let's talk.

email@example.com ↗

GitHub
LinkedIn

Keep the existing contact form functionality if desired,
but visually simplify the form.

Inputs should use:

transparent background
bottom border or subtle rectangular border

Avoid oversized rounded input fields.

==================================================
MICRO-INTERACTIONS
==================================================

Interactions should be subtle.

Allowed:

- underline movement
- 1–3px translation
- slight image zoom
- subtle opacity transitions
- subtle navigation state transitions

Typical duration:

150ms–300ms

Do not animate everything when it enters the viewport.

Animation should provide feedback, not decoration.

==================================================
RESPONSIVE DESIGN
==================================================

Treat mobile as an intentional layout.

Do not simply shrink desktop.

Check:

320px
375px
430px
768px
1024px
1440px+

Ensure:

- no horizontal overflow
- readable project layouts
- sensible typography
- comfortable margins
- usable navigation
- images scale properly
- touch targets are usable

==================================================
FUNCTIONALITY THAT MUST REMAIN
==================================================

Preserve:

- React + Vite architecture
- existing project content
- education content
- certificate content
- skills content
- language switching
- dark/light theme
- section navigation
- certificate filtering
- contact functionality
- responsive navigation

Do not modify project data unless necessary for presentation.

Do not introduce a backend.

Do not replace existing architecture with Next.js or another framework.

==================================================
CODE QUALITY
==================================================

Prefer CSS over installing additional UI libraries.

Do not introduce Tailwind unless the project already uses it.

Do not introduce a component framework.

Do not introduce animation libraries unless absolutely necessary.

Reuse existing React components.

Refactor CSS if necessary to create a consistent design system.

Create reusable CSS variables for:

spacing
colors
typography
border
content width

Avoid inline styles where practical.

Do not refactor unrelated application logic.

==================================================
CLEANUP
==================================================

While redesigning, remove styling/code that becomes obsolete.

Examples:

- cursor trail code
- click ripple code
- neon glow styles
- unused background effects
- unnecessary parallax listeners

Do not remove unused files unrelated to this redesign unless you are
certain they are safe to remove.

CyberGrid.jsx is currently unused.
Do not add it just because it exists.

==================================================
FINAL QUALITY CHECK
==================================================

After implementing:

1. Run npm run lint
2. Fix issues caused by the redesign
3. Run npm run build
4. Fix build errors
5. Check mobile responsive behavior
6. Check dark and light themes
7. Check Indonesian and English modes
8. Check every navigation section
9. Check certificate filters
10. Check all project links
11. Check contact form behavior

Finally report:

- files modified
- major design decisions
- effects removed
- components changed
- any functionality intentionally preserved
- lint result
- build result

Do not stop at suggestions.
Implement the redesign directly.