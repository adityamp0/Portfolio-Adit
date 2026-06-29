# DESIGN.md — SHIELDID
> **Version:** 2.0.0
> **Project:** ShieldID — Privacy-Preserving Humanitarian Identity System
> **Competition:** FIT Competition 2026 · Track III · Web Development
> **Last Updated:** 2026-06-14
> **Status:** AUTHORITATIVE — Single source of truth for all UI/UX decisions.
> **Audience:** AI Coding Agents (Cursor, Claude Engineer), human developers, UI reviewers.
> **Principle:** This file describes *what* and *why*. Implementation is the agent's responsibility.

---

## 0. PROJECT DESIGN BRIEF

| Field        | Value                                                                 |
|--------------|-----------------------------------------------------------------------|
| Product      | ShieldID                                                              |
| Tagline      | "Prove you qualify. Reveal nothing."                                  |
| User A       | UNHCR/NGO staff — **Issuers** of credentials                         |
| User B       | Refugees / displaced persons — **Holders** of credentials            |
| User C       | Aid distribution workers — **Verifiers** of eligibility proofs       |
| Primary job  | Verify humanitarian aid eligibility without exposing any PII          |
| Tone         | Calm authority. Serious but not intimidating. Trustworthy, not cold.  |
| Aesthetic    | **"Secure Clarity"** — deep slate backgrounds, precision teal accents, clean geometric type, zero decorative noise. |
| Signature    | **The ShieldMark** — an animated shield glyph that pulses on successful proof verification. The single moment of visual celebration in an otherwise restrained interface. |
| Color mode   | **Dark only.** No light mode in MVP. Target users operate in low-light field environments. |

---

## 1. DESIGN TOKENS

### 1.1 Color Palette

All color values are fixed. Never use arbitrary hex values in components — always reference token names.

#### Brand Core

| Token name           | Hex       | Role                                         |
|----------------------|-----------|----------------------------------------------|
| `brand-primary`      | `#0F4C81` | Primary action color — buttons, active links, page headers |
| `brand-secondary`    | `#0D7A6B` | Secondary accent — supporting highlights     |
| `brand-accent`       | `#00C9A7` | Bright teal — hover states, proof-verified glow, focus rings |

#### Surface Scale (Dark-first)

| Token name         | Hex       | Role                                              |
|--------------------|-----------|---------------------------------------------------|
| `surface-base`     | `#0B0F1A` | Primary page background                           |
| `surface-panel`    | `#131929` | Card and panel backgrounds                        |
| `surface-elevated` | `#1C2540` | Modal, dropdown, tooltip backgrounds              |
| `surface-subtle`   | `#242E4C` | Input fields, code blocks, inset areas            |

#### Text

| Token name        | Hex       | Role                                               |
|-------------------|-----------|----------------------------------------------------|
| `content-primary` | `#EDF0F7` | Main readable text on dark backgrounds             |
| `content-secondary`| `#8C95B0`| Labels, captions, metadata                         |
| `content-muted`   | `#4F5A78` | Placeholder text, disabled text                    |

#### Border

| Token name       | Hex       | Role                                                |
|------------------|-----------|-----------------------------------------------------|
| `border-default` | `#2A3555` | Standard card and input borders                     |
| `border-focus`   | `#00C9A7` | Focus ring color — always teal for accessibility    |
| `border-subtle`  | `#1C2540` | Dividers and separators                             |

#### Semantic States

| Token name    | Foreground  | Background  | Role                                          |
|---------------|-------------|-------------|-----------------------------------------------|
| `state-success` | `#00C9A7` | `#003D30`   | Valid credential, verified proof              |
| `state-warning` | `#F5A623` | `#3D2A00`   | Expiring credential, pending action           |
| `state-danger`  | `#E74C3C` | `#3D0D09`   | Invalid proof, expired credential, errors     |
| `state-info`    | `#3498DB` | `#0D2A3D`   | Informational notices, help text              |

#### Role Identity Colors

Each user role has a distinct color used in badges and role indicators. Never swap role colors.

| Role       | Color     | Usage context                                |
|------------|-----------|----------------------------------------------|
| Issuer     | `#6C63FF` | UNHCR/NGO staff — purple, authoritative      |
| Holder     | `#0D7A6B` | Refugee / displaced person — teal, protected |
| Verifier   | `#F5A623` | Aid distribution worker — amber, operational |

---

### 1.2 Typography

Three typefaces form the typographic system. Each has an exclusive role — never substitute one for another.

| Role     | Family          | Weights used | Purpose                                            |
|----------|-----------------|--------------|----------------------------------------------------|
| Display  | Space Grotesk   | 600, 700     | Hero headlines, page titles, section headers. Geometric and precise — conveys technical authority. |
| Body     | Inter           | 400, 500, 600| All readable prose, labels, UI copy. Neutral, high-legibility at small sizes on dark backgrounds. |
| Mono     | JetBrains Mono  | 400, 600     | Credential IDs, proof tokens, cryptographic hashes. Never use for general text. |

Source: Google Fonts CDN (`Space+Grotesk`, `Inter`, `JetBrains+Mono`).

#### Type Scale

| Scale token    | Family        | Size      | Weight | Line height | Use case                              |
|----------------|---------------|-----------|--------|-------------|---------------------------------------|
| `text-display` | Space Grotesk | 2.25rem   | 700    | 1.15        | Hero headlines, verification result title |
| `text-h1`      | Space Grotesk | 1.75rem   | 700    | 1.2         | Page-level section headers            |
| `text-h2`      | Space Grotesk | 1.25rem   | 600    | 1.3         | Card titles, panel headers            |
| `text-h3`      | Space Grotesk | 1.0rem    | 600    | 1.4         | Sub-section labels, group headings    |
| `text-body`    | Inter         | 0.9375rem | 400    | 1.65        | Default readable content              |
| `text-body-sm` | Inter         | 0.8125rem | 400    | 1.60        | Helper text, descriptions, secondary info |
| `text-label`   | Inter         | 0.75rem   | 500    | 1.4         | Form labels, table column headers, badges — uppercase, tracked |
| `text-caption` | Inter         | 0.6875rem | 400    | 1.4         | Timestamps, metadata, footnotes       |
| `text-mono`    | JetBrains Mono| 0.8125rem | 400    | 1.6         | Credential IDs, proof tokens          |
| `text-mono-lg` | JetBrains Mono| 0.9375rem | 600    | 1.5         | Proof output display, key results     |

---

### 1.3 Spacing System

Base unit: **4px**. All spacing values are multiples of 4. Never use arbitrary values.

| Token      | px   | rem      | Primary use case                              |
|------------|------|----------|-----------------------------------------------|
| `space-1`  | 4px  | 0.25rem  | Icon internal padding, micro gaps             |
| `space-2`  | 8px  | 0.5rem   | Badge padding, tight list gaps                |
| `space-3`  | 12px | 0.75rem  | Button vertical padding, input vertical padding |
| `space-4`  | 16px | 1rem     | Default card padding, form field gap — **use this when in doubt for internals** |
| `space-5`  | 20px | 1.25rem  | Section inner padding                         |
| `space-6`  | 24px | 1.5rem   | Card padding on desktop, gap between cards — **use this when in doubt for inter-component gaps** |
| `space-8`  | 32px | 2rem     | Section-to-section gap, modal padding         |
| `space-10` | 40px | 2.5rem   | Hero vertical padding                         |
| `space-12` | 48px | 3rem     | Page section top padding                      |
| `space-16` | 64px | 4rem     | Major section separation                      |

---

### 1.4 Border Radius

| Token        | Value  | Use case                                              |
|--------------|--------|-------------------------------------------------------|
| `radius-sm`  | 4px    | Badges, chips, small status tags                      |
| `radius-md`  | 8px    | Buttons, inputs, small cards                          |
| `radius-lg`  | 12px   | Standard cards, panels, modals — **default card radius** |
| `radius-xl`  | 16px   | Dashboard widgets, feature cards                      |
| `radius-full`| 9999px | Avatar circles, status indicator dots **only**        |

Design intent: corners are gently rounded — modern and trustworthy, but never pill-shaped or boxy.

---

### 1.5 Elevation & Shadow

Shadows are dark and deep. No soft white glows — this is a dark-mode product.

| Token              | Role                                             |
|--------------------|--------------------------------------------------|
| `shadow-card`      | Default card elevation — subtle depth            |
| `shadow-elevated`  | Modals, dropdowns — clearly above base layer     |
| `shadow-modal`     | Full-screen overlays                             |
| `shadow-glow-success` | Teal outer glow — ShieldMark verified state (`rgba(0,201,167,0.35)`) |
| `shadow-glow-danger`  | Red outer glow — invalid proof state (`rgba(231,76,60,0.35)`) |

---

### 1.6 Animation

Animations are purposeful and minimal. The only complex animation is the ShieldMark.

| Token              | Duration | Easing                                    | Use case                   |
|--------------------|----------|-------------------------------------------|----------------------------|
| `transition-fast`  | 150ms    | ease-in-out                               | Hover state changes        |
| `transition-base`  | 250ms    | ease-in-out                               | General transitions        |
| `transition-slow`  | 400ms    | ease-in-out                               | Modals, page-level changes |
| `ease-spring`      | —        | cubic-bezier(0.175, 0.885, 0.32, 1.275)  | ShieldMark entry animation |

**ShieldMark animation behavior:**
- On verification success: shield icon scales from 85% → 108% → 97% → 100% over 500ms using `ease-spring`.
- After entry: shield pulses with a teal glow (opacity oscillates) — continuous, slow, 2s loop.
- On verification failure: no animation. Danger state appears immediately, static.
- Respect `prefers-reduced-motion`: disable all animations if user has this set.

---

## 2. COMPONENT GUIDELINES

### 2.1 Button System

All buttons share these baseline rules:
- Font: Inter, weight 500, 15px
- Border radius: `radius-md` (8px)
- Minimum height: 44px (mobile touch target compliance)
- Focus ring: 2px solid `border-focus` (#00C9A7), offset 2px — required on all variants
- Disabled state: muted background (`surface-subtle`), muted text (`content-muted`), not-allowed cursor

#### Button Variants

| Variant        | Background     | Text             | Border          | Hover background | Use case                            |
|----------------|----------------|------------------|-----------------|------------------|-------------------------------------|
| `btn-primary`  | `brand-primary` (#0F4C81) | `content-primary` | #1A6AAF (lighter blue) | #1A6AAF | Main CTA: Issue, Generate Proof, Verify |
| `btn-secondary`| transparent    | `content-primary` | `border-default` | `surface-elevated` | Secondary: Export, Back, View Details |
| `btn-success`  | `#003D30`      | `state-success`  | `state-success` / 40% opacity | `#004D3C` | Verify action on Verifier portal **only** |
| `btn-danger`   | `#3D0D09`      | `state-danger`   | `state-danger`  | `#5A1410`        | Revoke credential, destructive actions |
| `btn-ghost`    | transparent    | `content-secondary` | none         | `surface-subtle` / `content-primary` text | Cancel, tertiary navigation |
| `btn-icon`     | `surface-subtle` | `content-secondary` | `border-subtle` | `surface-elevated` / `state-success` text | Copy hash, download QR — square, 36×36px |

---

### 2.2 Form Inputs

Baseline rules for all form inputs:
- Minimum height: 44px
- Border radius: `radius-md` (8px)
- Background: `surface-subtle` (#242E4C)
- Default border: `border-default` (#2A3555)
- Focus border: `border-focus` (#00C9A7) with a soft teal ring (10–20% opacity teal fill)
- Text: `content-primary`, placeholder text: `content-muted`
- Font: Inter, 15px, weight 400
- Label: always above the input, never inside as placeholder — use `text-label` style (Inter, 12px, weight 500, uppercase, tracked)
- Helper text: always rendered below input in `text-body-sm` + `content-muted`, even if empty (to preserve layout)
- Error text: `state-danger` color, with a small alert icon prefix

#### Input Types and Special Behaviors

| Input type           | Special rule                                                             |
|----------------------|--------------------------------------------------------------------------|
| Text, date, select   | Standard rules above apply                                               |
| Proof token textarea | Use `text-mono` (JetBrains Mono, 13px) — tokens are cryptographic strings, mono is required |
| Proof token textarea | 4 rows minimum, no resize, `surface-subtle` background                   |
| Select/dropdown      | Hide default OS arrow, use a custom caret icon in `content-secondary`    |
| Error state          | Border becomes `state-danger`. Helper text becomes error message in `state-danger` with alert icon |

---

### 2.3 Navbar

**Structure:** Single fixed horizontal bar, 56px height, `z-50`, `surface-panel` background at 95% opacity with `backdrop-blur`.  
**Bottom border:** 1px, `border-subtle`.  
**Page content offset:** All pages must have `padding-top: 56px` to clear the fixed navbar.

#### Navbar Anatomy

```
[ ◈ ShieldID ]    [ Dashboard ]  [ Issue ]  [ Verify ]  [ Audit Log ]    [ ROLE BADGE ]  [ Avatar ▼ ]
  logo + name      ← nav links filtered by user role →                   identity area
```

**Logo:** Shield icon (teal, 24×24px) + wordmark "Shield**ID**" where "ID" is `brand-accent` (#00C9A7).

**Nav links behavior:**
- Default: `content-secondary` text, transparent background
- Hover: `content-primary` text, `surface-subtle` background
- Active/current page: `content-primary` text, `surface-elevated` background
- Never use underline — use background highlight only
- Links are role-filtered: Issuers see Issue link; Verifiers see Verify link; all roles see Dashboard and Audit Log

**Role badge:** Small chip displayed next to avatar. Colors from role identity tokens (section 1.1). Style: `radius-sm` (4px), `text-label` size, 20% opacity background of role color, full-opacity text and border.

**Avatar button:** 32×32px circle, `surface-elevated` background, `border-default` border. On hover: border becomes `border-focus`. Shows user initial or avatar image.

**Mobile:** Hamburger icon at right edge. Tap opens full-screen overlay menu on `surface-elevated` background. Nav links stack vertically, larger touch targets.

---

### 2.4 Card System

All cards share these base rules:
- Background: `surface-panel` (#131929)
- Border: 1px solid `border-default` (#2A3555)
- Border radius: `radius-lg` (12px)
- Padding: `space-6` (24px) on desktop, `space-4` (16px) on mobile
- No box shadow by default — border provides the definition on dark backgrounds

#### Card Variants

**Standard card** — Generic container for grouped content. No hover state unless it is interactive.

**Credential card** (Holder wallet) — Interactive, tappable. Rules:
- On hover: border transitions to `border-focus` (#00C9A7)
- Left edge: a 4px vertical status stripe in the credential's state color (success/warning/danger)
- Status badge: top-right corner chip using semantic state colors
- Credential ID displayed in `text-mono`, truncated to 32 characters + "..."
- Actions row at bottom: primary button + icon buttons for QR and export
- Never display holder name, photo, national ID, or any other PII anywhere in the card

**Verification result card** (ShieldMark — the signature element):
- SUCCESS state: background `#003D30`, border `state-success` at 40% opacity. Contains ShieldMark icon (64×64px, teal, with glow), "VERIFIED" in `text-display` using `state-success`, eligibility summary below (aid category + validity). No holder identity shown.
- FAILURE state: background `#3D0D09`, border `state-danger` at 40% opacity. Contains X-shield icon (64×64px, red), "INVALID" in `text-display` using `state-danger`, brief error description.
- This is the most visually prominent element in the entire product. Do not simplify it.

**Dashboard stats card** — Single metric. Contains: label in `text-label` + `content-muted`, value in `text-display` + `content-primary`, trend indicator in `text-body-sm` using state color.

**Alert / notice card** — Inline informational strip. Always uses the semantic background + foreground pair (state-info, state-warning, etc.). Contains an icon (18×18px) + `text-body-sm` message. Uses `role="alert"` or `role="status"` attribute.

---

## 3. TECH STACK & LAYOUT RULES

### 3.1 Technology Stack

| Layer          | Choice                | Notes                                                  |
|----------------|-----------------------|--------------------------------------------------------|
| Framework      | Next.js 14 (App Router) | TypeScript, strict mode — no `any` types             |
| Styling        | Tailwind CSS v3       | Custom config extends tokens from section 1            |
| Icon library   | lucide-react          | Consistent, tree-shakeable — no mixing icon sets       |
| UI primitives  | shadcn/ui (Radix UI)  | For Dialog, Dropdown, Tooltip — do not modify base styles |
| Crypto layer   | SubtleCrypto Web API  | Built-in browser API, zero dependencies               |
| QR generation  | qrcode                | —                                                      |
| QR scanning    | jsQR                  | —                                                      |
| State          | React Context + useReducer | No external state library for MVP                 |
| Forms          | react-hook-form + zod | All form inputs validated client-side before submission |
| HTTP client    | Native fetch          | No axios for MVP                                       |
| Backend        | FastAPI (Python 3.11+)| Type hints required on all functions                   |
| Auth           | JWT (python-jose) + bcrypt (passlib) | —                                       |
| ORM            | SQLAlchemy async + Alembic | —                                                 |
| Validation     | Pydantic v2           | —                                                      |
| Database       | Supabase (PostgreSQL) | Pre-configured before Day H (see competition rules)    |
| Frontend deploy| Vercel                | Pre-configured before Day H                            |
| Backend deploy | Railway or Render     | Pre-configured before Day H                            |

#### Database Schema Summary

Three tables only. No holder PII is stored at any level.

| Table                 | Key columns                                                            |
|-----------------------|------------------------------------------------------------------------|
| `issuers`             | id, name, organization, role, public_key_pem                          |
| `credential_anchors`  | id, hash (not raw credential), issuer_id, issued_at, expires_at, revoked |
| `verification_events` | id, proof_hash (not identity), verifier_id, result, timestamp         |

---

### 3.2 Page Layout Architecture

**Global layout wrapper:** Fixed navbar (56px) + scrollable content area with `min-height: 100vh`, background `surface-base`. Content inside a centered container, `max-width: 1152px`, horizontal padding `space-4` mobile / `space-6` tablet / `space-8` desktop, vertical padding `space-8` mobile / `space-10` desktop.

**ASCII layout wireframe:**

```
┌──────────────────────────────────────────────────────────────────────┐
│  NAVBAR — fixed, 56px tall, full width, z-index 50                   │
├──────────────────────────────────────────────────────────────────────┤
│  PAGE (background: surface-base, padding-top: 56px)                  │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  CONTENT CONTAINER — max-w-1152px, centered, horizontal padding │  │
│  │                                                                  │  │
│  │  [ PAGE CONTENT GOES HERE ]                                      │  │
│  └────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────┘
```

---

### 3.3 Grid System

Mobile-first. All breakpoints use Tailwind defaults — no custom breakpoints.

| Layout context          | Mobile (default) | Tablet `md:` 768px | Desktop `lg:` 1024px   |
|-------------------------|------------------|--------------------|------------------------|
| Dashboard stats row     | 2 columns        | 2 columns          | 4 columns              |
| Credential card grid    | 1 column         | 2 columns          | 3 columns              |
| Main content + sidebar  | 1 column         | 1 column           | 3 cols (main: 2 cols)  |
| Issue form + preview    | 1 column         | 1 column           | 2 columns              |
| Full-width single col   | full width       | full width         | full width             |

Column gap: `space-4` (16px) on mobile, `space-6` (24px) on desktop.

**AI Agent rule:** Always write mobile styles first (no breakpoint prefix), then override with `md:` and `lg:`.

---

### 3.4 Responsive Breakpoints

| Breakpoint | Min width | Behavior                                     |
|------------|-----------|----------------------------------------------|
| (default)  | 0px       | Single column, full-width, stacked layout    |
| `sm:`      | 640px     | Minor tweaks — some elements shown/hidden    |
| `md:`      | 768px     | 2-column grids, expanded navbar              |
| `lg:`      | 1024px    | Full multi-column layout, max-width container active |
| `xl:`      | 1280px    | Container padding widens slightly            |

---

### 3.5 Color Mode

**Dark mode only.** The `dark` class is applied to the `` element unconditionally. No toggle. No light mode in MVP.

Rationale: target users operate in low-light field environments; dark backgrounds reduce eye strain and battery consumption on mobile devices in the field.

---

### 3.6 Page-Specific Layout Rules

#### Dashboard (`/dashboard`)
- Structure: stats row (4 cards) → recent credentials table → quick-issue CTA button.
- Table shows maximum 10 rows. Pagination required — no infinite scroll.
- No sidebar.

#### Credential Issuance Form (`/issue`)
- Structure: single-column centered form, max-width 576px.
- Three logical sections: [Holder Info] → [Aid Category + Validity] → [Review & Sign].
- Progress shown as a simple step counter ("Step 2 of 3") — not a wizard sidebar, not a progress bar.
- On desktop, optionally show a credential preview card to the right of the form.

#### Holder Wallet (`/wallet`)
- Structure: filter tabs (All / Valid / Expiring / Expired) → credential card grid.
- Empty state: centered ghost icon (48px, `content-muted`) + heading "No credentials yet" + description pointing to their UNHCR officer.

#### Proof Generation (`/wallet/[id]/prove`)
- Structure: single full-width panel. No distractions, no sidebar, no unrelated navigation.
- Step 1: Show credential summary (type + validity only — no PII).
- Step 2: Generating state — spinner + copy "Preparing your proof in your browser…" + info notice "No data leaves your device."
- Step 3: Proof ready — large QR code centered, copy-token button below, optional "Show full token" toggle (truncated by default).
- Absolute rule: never display raw credential data at any step.

#### Verifier Portal (`/verify`)
- Structure: centered container, max-width 672px.
- Input: proof token paste area OR QR scan button.
- Verification result: occupies the full panel, replaces the input. Contains the ShieldMark (signature element). Do not minimize or simplify this.
- After result: audit log entry auto-saved silently (proof hash only).

#### Audit Log (`/audit`)
- Structure: filterable, sortable table.
- Columns: Timestamp, Verifier ID, Result (VALID/INVALID badge), Proof Hash (truncated mono).
- No holder identity data in any column — ever.
- CSV export button available in table header.

---

### 3.7 Loading & Empty States

#### Loading
- **Content areas** (tables, card grids): use skeleton shimmer — 2–4 placeholder rows/cards with `animate-pulse` on `surface-subtle` rounded rects. Never use a spinner for content placeholders.
- **Action buttons** (submit, generate proof, verify): replace button label with spinner icon + present-tense verb (e.g., "Verifying…"). Disable the button during loading.
- **Proof generation specifically**: show a dedicated generating state with a larger animated indicator and the "no data leaves your device" reassurance copy. This is security-critical messaging.

#### Empty States
Every list or grid that can be empty must define an explicit empty state. Do not show blank space.

| Screen            | Empty state copy                                                       |
|-------------------|------------------------------------------------------------------------|
| Holder wallet     | "No credentials yet. Ask your UNHCR officer to issue your first credential." |
| Audit log         | "No verification events recorded yet."                                 |
| Issued credentials | "No credentials issued yet. Use the Issue button to get started."     |

Empty state anatomy: centered layout, ghost/outline icon (48px, `content-muted`), `text-h3` heading in `content-secondary`, `text-body-sm` description in `content-muted`.

---

### 3.8 Critical Security UX Rules

These are design constraints, not just security notes. They are non-negotiable.

1. **Never display holder PII in the UI.** Name, national ID, biometrics, ethnicity, country of origin must never appear on screen at any point. Show only: credential type, validity period, eligible aid category.

2. **Proof generation requires a visible "in-browser" notice.** Every proof generation screen must display the copy "Proof computed locally. No data sent to servers." in a `state-info` alert card above the generating animation.

3. **Proof tokens are always truncated in display.** Show first 12 characters + "…" + last 8 characters. A "Show full token" toggle may reveal the complete token — it must be opt-in.

4. **Audit trail logs proof hashes only.** The `verification_events` table stores `proof_hash`, `verifier_id`, `timestamp`, `result`. No credential ID, no holder reference. This constraint must be reflected in both UI and backend.

5. **Session timeout on holder screens.** After 10 minutes of inactivity on any holder page (`/wallet`, `/wallet/[id]/prove`), show a modal warning: "For your security, your session will expire in 60 seconds." with a "Stay logged in" button.

---

## 4. ACCESSIBILITY BASELINE

Minimum standard: WCAG 2.1 AA. The following rules are enforced, not aspirational.

| Requirement         | Rule                                                                        |
|---------------------|-----------------------------------------------------------------------------|
| Color contrast      | All body text ≥ 4.5:1 contrast ratio against background. Large text ≥ 3:1. Design tokens are verified to meet this. |
| Focus ring          | 2px solid `border-focus` (#00C9A7), 2px offset — required on every interactive element without exception. |
| Reduced motion      | All animations (including ShieldMark) must be disabled when `prefers-reduced-motion: reduce` is set. |
| Semantic HTML       | Use ``, ``, ``, `` for landmark regions. Never use `` for structural roles. |
| Form labels         | Every visible input has an explicit `` with `for` attribute. `aria-label` is not a substitute for visible inputs. |
| Alert roles         | All dynamic state feedback uses `role="alert"` (for errors) or `role="status"` (for success). |
| Keyboard navigation | Every interactive element must be reachable and fully operable via keyboard alone. Tab order must follow visual reading order. |
| QR code alt text    | Format: `"Credential QR code for [credential type] — scan to verify"` |

---

## 5. COPYWRITING STANDARDS

**Voice:** Precise, calm, human. Not bureaucratic, not "techy", not emotional.  
**Principle:** Every string must answer "what does this mean for the person right now?"

| Context              | ❌ Do not write                    | ✅ Write instead                              |
|----------------------|------------------------------------|-----------------------------------------------|
| Proof verified       | "ZKP verification successful"      | "Verified — eligible for Food Ration B"       |
| Proof failed         | "Cryptographic assertion failed"   | "Proof is invalid or expired"                 |
| Generating proof     | "Executing HMAC computation"       | "Preparing your proof…"                       |
| No PII stored        | "Data minimization policy applied" | "No personal data stored on our servers"      |
| Credential expired   | "VC validity period elapsed"       | "This credential expired on 31 Dec 2025"      |
| Issue action         | "Instantiate new VC record"        | "Issue new credential"                        |
| Session expiring     | "Authentication token invalidation imminent" | "Your session will expire in 60 seconds." |
| Revoke action        | "Nullify credential assertions"    | "Revoke credential"                           |

---

## 6. PROJECT FILE STRUCTURE

AI Coding Agents must follow this structure exactly. Do not deviate.

```
shieldid/
├── app/                            # Next.js App Router
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── layout.tsx
│   ├── (app)/
│   │   ├── dashboard/page.tsx
│   │   ├── issue/page.tsx
│   │   ├── wallet/
│   │   │   ├── page.tsx
│   │   │   └── [id]/prove/page.tsx
│   │   ├── verify/page.tsx
│   │   ├── audit/page.tsx
│   │   └── layout.tsx              # Renders Navbar
│   ├── globals.css                 # Tailwind directives + CSS token variables
│   └── layout.tsx                  # Root: applies dark class, loads fonts
│
├── components/
│   ├── ui/                         # shadcn/ui primitives — DO NOT MODIFY
│   ├── credential/
│   │   ├── CredentialCard.tsx      # Credential card variant (section 2.4)
│   │   ├── CredentialForm.tsx      # Issue form (section 3.6)
│   │   └── ProofGenerator.tsx      # Proof generation flow (section 3.6)
│   ├── verify/
│   │   ├── ProofInput.tsx          # Token paste + QR scan
│   │   └── VerificationResult.tsx  # ShieldMark — signature element
│   └── shared/
│       ├── Navbar.tsx
│       ├── RoleBadge.tsx
│       ├── StatusBadge.tsx
│       ├── EmptyState.tsx
│       └── LoadingSkeleton.tsx
│
├── lib/
│   ├── crypto.ts                   # ALL SubtleCrypto logic lives here — nowhere else
│   ├── credential.ts               # VC creation and parsing utilities
│   ├── qr.ts                       # QR encode/decode wrappers
│   └── api.ts                      # Typed fetch wrapper for backend
│
├── types/
│   └── index.ts                    # All shared TypeScript interfaces
│
├── tailwind.config.js              # Extends tokens from section 1
├── DESIGN.md                       # ← THIS FILE
└── .env.local.example
```

**Architecture rule:** All cryptographic operations live exclusively in `lib/crypto.ts`. Components must never call SubtleCrypto directly — they call functions exported from `crypto.ts`. This makes the crypto layer auditable in one place.

---

## 7. QUICK REFERENCE

For AI Coding Agents: consult this table first before any implementation decision.

| Decision               | Answer                                                              |
|------------------------|---------------------------------------------------------------------|
| Page background        | `surface-base` (#0B0F1A)                                           |
| Card background        | `surface-panel` (#131929)                                          |
| Input background       | `surface-subtle` (#242E4C)                                         |
| Modal background       | `surface-elevated` (#1C2540)                                       |
| Primary text           | `content-primary` (#EDF0F7)                                        |
| Label / caption text   | `content-secondary` (#8C95B0)                                      |
| Placeholder text       | `content-muted` (#4F5A78)                                          |
| Default border         | `border-default` (#2A3555)                                         |
| Focus border           | `border-focus` (#00C9A7) with teal ring                            |
| Primary action color   | `brand-primary` (#0F4C81)                                          |
| Success / verified     | `state-success` (#00C9A7) on `#003D30` background                  |
| Warning / expiring     | `state-warning` (#F5A623) on `#3D2A00` background                  |
| Error / invalid        | `state-danger` (#E74C3C) on `#3D0D09` background                  |
| Display font           | Space Grotesk                                                       |
| Body font              | Inter                                                               |
| Mono font (hashes)     | JetBrains Mono                                                      |
| Button border radius   | 8px (`radius-md`)                                                   |
| Card border radius     | 12px (`radius-lg`)                                                  |
| Badge border radius    | 4px (`radius-sm`)                                                   |
| Spacing base unit      | 4px — always multiples of 4                                         |
| Internal component gap | `space-4` (16px) — default                                         |
| Inter-component gap    | `space-6` (24px) — default                                         |
| Color mode             | Dark only — `class="dark"` on ``, no toggle                  |
| PII in UI              | **Never.** No name, ID, biometrics, origin. Only type + validity.  |
| Signature element      | ShieldMark on `/verify` result — animated, full panel, never skip  |
| Crypto location        | `lib/crypto.ts` only — never in components                         |

---

*End of DESIGN.md — ShieldID v2.0.0*
