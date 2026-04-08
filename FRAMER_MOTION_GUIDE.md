# Framer Motion Mastery Guide for Evolve Gym

## 🎬 Why Framer Motion Changes Everything

**Static websites are dead.** Users expect:
- Smooth page transitions
- Elements that respond to scrolling
- Micro-interactions on hover/click
- Animations that guide attention

**Framer Motion makes all of this stupidly easy** once you understand the patterns.

---

## 🎯 What You'll Learn

By the end of this guide, you'll know how to:
1. Make elements fade/slide in on page load
2. Trigger animations when scrolling into view
3. Create smooth page transitions
4. Add hover/tap animations to buttons and cards
5. Build complex gesture-based interactions
6. Create that "WOW" factor that separates amateur from pro sites

---

## 📚 Design Inspiration: Websites with INSANE Motion

### Must-Study Sites (Open in Chrome, scroll slowly):

1. **Apple.com** (https://www.apple.com/iphone)
   - Watch how images fade in as you scroll
   - Notice the parallax effects (background moves slower than foreground)
   - Study the product reveal animations
   - **What to steal:** Scroll-triggered reveals, smooth transitions

2. **Awwwards Winners:**
   - https://www.awwwards.com/websites/motion-design/
   - Browse winners - click "Visit Site" and scroll through
   - **What to steal:** Creative scroll animations, micro-interactions

3. **Linear** (https://linear.app/)
   - Tech startup with BEAUTIFUL animations
   - Notice how sections fade/slide in
   - Hover over buttons - smooth scale effects
   - **What to steal:** Minimal but impactful animations

4. **Stripe** (https://stripe.com/)
   - Scroll the homepage slowly
   - Watch how graphics animate in sync with scroll
   - Notice the gradient animations
   - **What to steal:** Scroll-linked animations, stagger effects

5. **Vercel** (https://vercel.com/)
   - Made by the Next.js team - uses Framer Motion heavily
   - Notice card hover effects
   - Watch the hero section animations
   - **What to steal:** Speed and subtlety of animations

6. **Lenis Smooth Scroll Examples:**
   - https://lenis.studiofreight.com/
   - Buttery smooth scrolling + animations
   - **What to steal:** The feeling of smoothness

### Gym-Specific Inspiration:

7. **Barry's Bootcamp** (https://www.barrys.com/)
   - High-energy animations match brand
   - Fast, punchy transitions
   - **What to steal:** Energy level in motion

8. **Peloton** (https://www.onepeloton.com/)
   - Product showcase with 3D-feeling parallax
   - Video backgrounds with overlay animations
   - **What to steal:** How they make workouts look exciting

### Codepen Collections to Study:

Search Codepen for:
- "Framer Motion examples"
- "Scroll animation react"
- "React page transition"

**Specific pens to find:**
- Scroll-triggered counters (for gym stats)
- Card hover effects
- Parallax scroll
- Stagger animations (for class cards appearing one by one)

---

## 🚀 Framer Motion Learning Path (No Code Yet - Concepts First)

### Level 1: Understanding the Basics (30 min learning)

#### Core Concept 1: Everything is a `<motion.div>`

**Normal React:**
```
<div>Hello</div>
```

**With Framer Motion:**
```
<motion.div>Hello</motion.div>
```

That `motion.` prefix gives you superpowers.

**Available elements:**
- `motion.div`
- `motion.section`
- `motion.button`
- `motion.img`
- `motion.h1`
- Basically: `motion.[any HTML element]`

#### Core Concept 2: Three Ways to Animate

**1. Initial + Animate (On Mount)**
```
When component loads → Element animates in
```

**2. Whilewhover/WhileTap (On Interaction)**
```
User hovers → Element responds
User clicks → Element responds
```

**3. Variants (Reusable Animation Sets)**
```
Define animations once → Reuse everywhere
```

#### Core Concept 3: Animation Properties

**Position animations:**
- `x`, `y` - Move horizontally/vertically
- `scale` - Grow/shrink
- `rotate` - Spin

**Opacity:**
- `opacity` - Fade in/out

**Advanced:**
- `backgroundColor` - Color transitions
- `borderRadius` - Shape morphing
- Custom properties

### Level 2: The 5 Essential Patterns (Read This First)

#### Pattern 1: Fade In on Load
**When to use:** Hero section, page content
**Effect:** Element appears from invisible to visible
**Properties:** `opacity` (0 → 1)

#### Pattern 2: Slide In from Direction
**When to use:** Section headings, cards entering viewport
**Effect:** Element slides from off-screen
**Properties:** `x` or `y` + `opacity`

#### Pattern 3: Scale on Hover
**When to use:** Buttons, cards, images
**Effect:** Element grows slightly when hovered
**Properties:** `scale` (1 → 1.05)

#### Pattern 4: Stagger Children
**When to use:** Grid of cards, list items
**Effect:** Items appear one after another (not all at once)
**Properties:** `staggerChildren` in parent

#### Pattern 5: Scroll-Triggered
**When to use:** Sections appearing as you scroll down
**Effect:** Animations trigger when element enters viewport
**Properties:** `whileInView`

---

## 🎨 Evolve Gym Animation Strategy

### Your Animation Philosophy

For a gym website, animations should feel:
- **Powerful** - Not delicate/subtle, but energetic
- **Fast** - Quick transitions (0.3-0.5s, not 1s+)
- **Directional** - Things move with purpose (up = lifting, etc.)
- **Motivational** - Animations should pump you up

**NOT:**
- Slow, floaty animations (that's for luxury spas)
- Overly complex (keeps you from reading)
- Distracting (shouldn't make you dizzy)

### Animation Map: What to Animate Where

#### Navbar
- **On Load:** Slide down from top (`y: -100 → 0`)
- **On Scroll:** Change background opacity (transparent → solid)
- **Links:** Underline expands on hover
- **Mobile Menu:** Slide in from right with backdrop fade

#### Hero Section
- **Heading:** Fade + slide up (`y: 50, opacity: 0 → y: 0, opacity: 1`)
- **Subheading:** Fade + slide up (delayed by 0.1s)
- **CTA Buttons:** Fade + slide up (delayed by 0.2s)
- **Background Image:** Subtle zoom on load (`scale: 1.1 → 1`)
- **On Hover (CTA):** Scale up + glow effect

#### Features Section
- **Section Heading:** Fade in when scrolls into view
- **Feature Cards:** Stagger in one by one (left to right)
- **Icons:** Bounce in slightly
- **On Hover:** Card lifts up (translateY: -10px) + shadow grows

#### Classes Section
- **Section Heading:** Slide in from left
- **Class Cards:** Stagger in (each card delayed by 0.1s)
- **On Hover:** Image zooms (`scale: 1 → 1.1`), card elevates
- **Filter Buttons:** Active button slides/scales

#### Pricing Section
- **Cards:** Slide up from bottom, stagger
- **Middle Card (Popular):** Comes in last but bigger scale (1.05)
- **On Hover:** Entire card tilts slightly (3D effect)
- **Price Numbers:** Count up animation (0 → 99)

#### Trainers Section
- **Trainer Cards:** Fade in on scroll, stagger
- **On Hover:** Flip card to show bio (back side)
- **Photos:** Grayscale → Color on hover

#### Testimonials
- **Carousel:** Smooth slide transitions
- **Quote Marks:** Bounce in before text
- **Stars:** Fill from left to right

#### Footer
- **On Scroll Into View:** Slide up from bottom
- **Social Icons:** Pop in one by one
- **On Hover (Icons):** Bounce + color change

---

## 🎓 Learning Roadmap (Step-by-Step)

### Week 1: Basics (4-6 hours)

#### Day 1: Setup & First Animation (1 hour)

**What to do:**
1. Install Framer Motion: `npm install framer-motion`
2. Import in a component: `import { motion } from 'framer-motion'`
3. Convert ONE `<div>` to `<motion.div>`
4. Add your first animation (fade in)

**Goal:** See ONE element animate

**Challenge:**
- Make your hero heading fade in from invisible
- Properties to use: `initial`, `animate`, `transition`

**Questions to figure out:**
- How do you set initial opacity?
- How do you animate to full opacity?
- How do you control animation speed?

#### Day 2: Hover & Tap Animations (1 hour)

**What to do:**
1. Take a button component
2. Make it scale on hover
3. Make it scale down on tap (press)

**Goal:** Understand interactive animations

**Challenge:**
- Button scales to 1.05 on hover
- Button scales to 0.95 on tap
- Add a smooth spring transition

**Questions to figure out:**
- What property is `whileHover`?
- What property is `whileTap`?
- What's the difference between `tween` and `spring` transitions?

#### Day 3: Directional Animations (1 hour)

**What to do:**
1. Make an element slide in from the left
2. Make another slide in from the right
3. Make one slide in from the bottom

**Goal:** Control direction of movement

**Challenge:**
- Slide in 3 different elements from 3 different directions
- All should be invisible initially (opacity: 0)
- All should become visible and settle in place

**Questions to figure out:**
- What's the difference between `x`, `y`, and `rotate`?
- How do you combine `x` and `opacity` animations?
- What does `x: -100` vs `x: 100` do?

#### Day 4: Timing & Delays (1 hour)

**What to do:**
1. Make 3 elements appear one after another
2. Each should start after the previous finishes
3. Use `delay` property

**Goal:** Orchestrate timing

**Challenge:**
- First element: no delay
- Second element: 0.2s delay
- Third element: 0.4s delay
- All fade + slide up

**Questions to figure out:**
- Where does `delay` go in the code?
- How do you calculate delays for multiple elements?

#### Day 5: Variants Pattern (2 hours)

**This is the game-changer**

**What to do:**
1. Learn what variants are (animation presets)
2. Create a variant object
3. Apply it to multiple elements
4. Use `initial` and `animate` with variant names

**Goal:** Write reusable animations

**Challenge:**
- Create a `fadeInUp` variant
- Create a `slideInLeft` variant
- Apply both to different components
- DRY (Don't Repeat Yourself) your animations

**Questions to figure out:**
- What's the structure of a variants object?
- How do you reference variants by name?
- Why are variants better than inline animations?

### Week 2: Advanced (6-8 hours)

#### Day 6: Scroll-Triggered Animations (2 hours)

**This is where your site becomes magical**

**What to do:**
1. Learn `whileInView` property
2. Make sections animate when scrolling into view
3. Make sections animate only once (not every scroll)

**Goal:** Trigger animations on scroll

**Challenge:**
- Make Features section fade in when it enters viewport
- Make Classes section slide up when visible
- Make sure animations only happen once (not on every scroll up/down)

**Questions to figure out:**
- What is `whileInView`?
- How do you detect when element is in viewport?
- What's the `viewport` option object?
- What does `once: true` do?

#### Day 7: Stagger Children (2 hours)

**Make grids/lists come alive**

**What to do:**
1. Take a grid of cards (your class cards)
2. Make them appear one by one (stagger)
3. Control stagger timing

**Goal:** Orchestrate multiple child animations

**Challenge:**
- Grid of 6 class cards
- Each card fades + slides up
- Each starts 0.1s after the previous
- Use `staggerChildren` (NOT manual delays)

**Questions to figure out:**
- Where does `staggerChildren` go? (Parent or children?)
- What's the difference between `staggerChildren` and `delayChildren`?
- How do you animate children with variants?

#### Day 8: Page Transitions (2 hours)

**Smooth page changes**

**What to do:**
1. Install React Router (if not already)
2. Learn `AnimatePresence` component
3. Add exit animations to pages
4. Create smooth page transitions

**Goal:** Animate between routes

**Challenge:**
- Fade out old page
- Fade in new page
- No "flash" of both pages visible
- Smooth transition between them

**Questions to figure out:**
- What does `AnimatePresence` do?
- What's the `exit` property?
- Why do you need `mode="wait"`?
- How do you handle route keys?

#### Day 9-10: Advanced Effects (2-4 hours)

**Pick ONE to master:**

**Option A: Parallax Scroll**
- Background moves slower than foreground
- Creates depth illusion
- Use `useScroll` hook + `useTransform`

**Option B: SVG Animations**
- Animate logos drawing in
- Paths reveal on scroll
- Use `pathLength` property

**Option C: Gesture Animations**
- Drag & drop
- Swipe to delete
- Pan/zoom interactions
- Use `drag` property

**Option D: 3D Transforms**
- Card flip effects
- Rotating elements
- Perspective transforms
- Use `rotateX`, `rotateY`, `perspective`

---

## 🛠️ Practical Patterns for Evolve Gym

### Pattern Library (Concepts to Implement)

#### 1. Hero Entrance
**Effect:** Heading + subheading + buttons cascade in
**Timing:** Fast and energetic (0.3s each, 0.1s delays)
**Direction:** Bottom to top (like lifting)

**What to figure out:**
- How to stagger without manual delays?
- How to make it feel "powerful" not "floaty"?

#### 2. Scroll Reveal Sections
**Effect:** Each section fades + slides as you scroll
**Timing:** Happens once per section
**Direction:** Bottom to top

**What to figure out:**
- How to trigger only when 30% visible?
- How to ensure it runs only once?
- How to make it smooth?

#### 3. Class Card Grid
**Effect:** Cards appear in sequence, left to right
**Timing:** 0.1s between each card
**Hover:** Card lifts + shadow grows + image zooms

**What to figure out:**
- Parent/child variant structure?
- How to zoom image but not card?
- How to combine multiple hover effects?

#### 4. Pricing Card Highlight
**Effect:** Middle card (most popular) bounces in last
**Timing:** Other cards fade in, then popular one pops
**Hover:** Entire card tilts on mouse movement

**What to figure out:**
- How to give one child different animation?
- How to track mouse position for tilt?
- `useMotionValue` hook?

#### 5. Stats Counter
**Effect:** Numbers count up from 0 to final value
**Timing:** Triggers when scrolls into view
**Speed:** Fast count (0.5-1s total)

**What to figure out:**
- How to animate numbers (not just opacity/position)?
- `useSpring` hook for smooth counting?
- How to format numbers during animation?

#### 6. Trainer Card Flip
**Effect:** Hover to flip card and see bio on back
**Timing:** Smooth 0.6s flip
**3D:** Realistic card flip (not just fade)

**What to figure out:**
- `rotateY` property (0deg → 180deg)?
- `backfaceVisibility` in CSS?
- How to show different content on back?

#### 7. Mobile Menu Slide
**Effect:** Menu slides in from right, backdrop fades in
**Timing:** Smooth 0.3s
**Gesture:** Swipe to close

**What to figure out:**
- How to animate in/out based on state?
- How to animate backdrop separately?
- `drag` property for swipe?

#### 8. Image Hover Zoom
**Effect:** Image scales up inside container (no overflow)
**Timing:** Smooth spring transition
**Reset:** Scales back down on hover out

**What to figure out:**
- `overflow: hidden` on container?
- Scale image, not container?
- `whileHover` on parent or child?

---

## 🎬 Animation Principles to Follow

### Timing (Duration)

**Too slow = boring**
**Too fast = jarring**

**Gym website timing guide:**
- **Micro-interactions** (button hover): 0.2s
- **Element entrances** (fade in): 0.3-0.4s
- **Section reveals** (scroll): 0.5-0.6s
- **Page transitions**: 0.4-0.5s
- **Complex animations** (flip): 0.6-0.8s

**Never go above 1 second** for gym site (high energy brand)

### Easing (Animation Curves)

**Spring vs. Tween:**
- `spring` = Bouncy, natural (use for interactions)
- `tween` = Linear, mechanical (use for simple fades)

**For Evolve Gym:**
- Buttons: `spring` (type: "spring", stiffness: 300)
- Fades: `tween` (ease: "easeOut")
- Slides: `spring` (type: "spring", stiffness: 100, damping: 15)
- Flips: `tween` (ease: "easeInOut")

### Distance (How Far Things Move)

**Subtle = professional**
**Excessive = amateur**

**Movement guide:**
- Slide in: 30-50px max
- Hover lift: 5-10px
- Scale up: 1.03-1.1 (never 1.5!)
- Rotate: 5-15 degrees max

### Direction Theory

**Match your brand:**
- **Upward** = Lifting, progress, strength
- **Downward** = Grounding, power
- **Left→Right** = Natural reading flow, forward motion
- **Right→Left** = Less common, use sparingly

**For Evolve Gym:**
- Hero elements: Bottom → Top (lifting)
- Sections: Bottom → Top (building up)
- Cards: Appear in place (no slide) or slight up
- Buttons: Scale + slight lift (power)

---

## 🚨 Common Framer Motion Mistakes to Avoid

### Mistake 1: Animating Everything
**Wrong:** Every single element animates
**Right:** Animate strategically - guide user's eye

**Rule of thumb:** 
- Headlines animate
- Key CTAs animate
- Supporting text often doesn't need animation

### Mistake 2: Animations Too Slow
**Wrong:** 1-2 second fades
**Right:** 0.3-0.5 second transitions

**Test:** If you get impatient waiting, it's too slow

### Mistake 3: Forgetting Mobile
**Wrong:** Complex animations lag on phones
**Right:** Simpler animations on mobile, or disable some

**How to detect:**
```
Check window width or use CSS media queries
Disable heavy animations on mobile
```

### Mistake 4: Animating on Every Render
**Wrong:** Component re-renders, animation runs again
**Right:** Animate only on mount or specific trigger

**Solution:** Use `initial` + `animate`, not just `animate`

### Mistake 5: No Exit Animations
**Wrong:** Elements pop in nicely but disappear instantly
**Right:** Smooth exit animations using `exit` property

### Mistake 6: Ignoring Performance
**Wrong:** Animating 100 elements simultaneously
**Right:** Stagger animations, limit concurrent animations

**Performance tips:**
- Animate `transform` and `opacity` (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change: transform` in CSS

### Mistake 7: Inconsistent Timing
**Wrong:** Some elements 0.2s, some 1s, no pattern
**Right:** Establish timing system (0.2s, 0.4s, 0.6s)

---

## 📖 Learning Resources (In Order)

### 1. Official Framer Motion Docs
**URL:** https://www.framer.com/motion/
**Read these sections in order:**
1. Introduction
2. Animation (initial, animate, transition)
3. Gestures (whileHover, whileTap)
4. Variants
5. Scroll animations (whileInView)
6. AnimatePresence

**Time:** 2-3 hours of reading

### 2. YouTube Tutorials (Watch in Order)

**Beginner:**
- "Framer Motion Tutorial - Complete Beginner's Guide" by The Net Ninja
- "React Animations with Framer Motion" by Web Dev Simplified

**Intermediate:**
- "Advanced Framer Motion" by Fireship
- "Framer Motion Scroll Animations" by developedbyed

**Advanced:**
- "Framer Motion Page Transitions" by Sam Selikoff
- "Framer Motion Gestures" by Sam Selikoff

**Time:** 4-6 hours of watching + practicing

### 3. Interactive Examples to Study

**CodeSandbox searches:**
- "Framer Motion examples"
- "React scroll animation"
- "Framer Motion stagger"

**Find and deconstruct:**
- Card hover effects
- Scroll reveals
- Page transitions
- Stagger grids

**Time:** 3-4 hours of experimenting

### 4. Build These Micro-Projects First

**Before touching Evolve Gym, build:**

**Project 1: Button Playground (30 min)**
- 5 different buttons
- Each with different hover effect
- Scale, rotate, color change, shadow

**Project 2: Card Grid (1 hour)**
- 6 cards in grid
- Stagger entrance
- Hover effects
- Click to expand

**Project 3: Scroll Reveal (1 hour)**
- 5 sections
- Each animates when scrolled into view
- Different directions for each

**Project 4: Page Transition (1 hour)**
- 3 simple pages
- Smooth fade transition
- No flash between pages

**Total time:** ~4 hours

**After these, you're ready for Evolve Gym!**

---

## 🎯 Evolve Gym Implementation Plan

### Week 1: Static Site (No Framer)
Build entire site WITHOUT animations first
- All components work
- All pages route correctly
- All styling complete
- **Then** add motion

**Why?** Easier to add motion to working site than debug broken animations

### Week 2: Add Basic Animations
- Navbar slide in
- Hero section cascade
- Button hover effects
- Footer fade in

**Goal:** Site feels alive but not overwhelming

### Week 3: Scroll Animations
- Each section animates on scroll
- Class cards stagger
- Pricing cards entrance
- Trainer cards reveal

**Goal:** Dynamic scrolling experience

### Week 4: Polish & Advanced
- Page transitions
- Complex hover effects (card flips?)
- Gesture interactions (drag carousel?)
- Performance optimization

**Goal:** Professional, memorable experience

---

## ✅ Animation Checklist for Evolve Gym

### Must-Have Animations:
- [ ] Hero elements cascade in on load
- [ ] Navbar slides/fades in
- [ ] Sections reveal on scroll (at least 3 sections)
- [ ] Class cards stagger in
- [ ] Buttons scale on hover
- [ ] Footer fades in
- [ ] Page transitions (if multi-page)

### Nice-to-Have:
- [ ] Parallax background effect
- [ ] Stats counter animation
- [ ] Card flip on hover (trainer bios)
- [ ] Image zoom on hover
- [ ] Mobile menu slide animation
- [ ] Pricing card highlight pop
- [ ] Testimonial carousel smooth transitions

### Advanced (If Time):
- [ ] Scroll progress indicator
- [ ] Mouse-follow effects
- [ ] 3D card tilts
- [ ] SVG path animations (logo reveal)
- [ ] Drag-to-scroll gallery
- [ ] Custom cursor with motion trail

---

## 🎓 How to Practice Framer Motion

### Daily Practice Routine:

**Day 1-7: One concept per day**
- Day 1: Fade animations
- Day 2: Slide animations
- Day 3: Scale animations
- Day 4: Rotate animations
- Day 5: Combine animations
- Day 6: Variants
- Day 7: Scroll triggers

**Each day:**
1. Read docs on that concept (30 min)
2. Watch a tutorial (30 min)
3. Build a tiny demo (1 hour)
4. Try it in Evolve Gym (1 hour)

**Total:** 3 hours/day × 7 days = 21 hours to proficiency

### Debugging Animations

**When animation doesn't work:**

1. **Check the basics:**
   - Did you import `motion`?
   - Did you use `motion.div` not `div`?
   - Are properties spelled correctly?

2. **Console.log your values:**
   - Log initial values
   - Log animate values
   - Make sure they're different!

3. **Simplify:**
   - Remove all properties except one
   - Does THAT work?
   - Add back one at a time

4. **Check DevTools:**
   - Inspect element
   - Look at inline styles
   - Are values changing?

5. **Read error messages:**
   - Framer Motion errors are usually clear
   - Google the exact error message

---

## 🏆 Success Criteria

**You've mastered Framer Motion when:**
1. You can add animations WITHOUT googling basic syntax
2. You can debug animation issues yourself
3. You understand when to use `spring` vs `tween`
4. You can build scroll-triggered sections
5. You can create stagger effects
6. Your animations feel intentional, not random
7. You're proud to show the animations in your portfolio

---

## 💡 Pro Tips

### Tip 1: Start Subtle
Add animations at 50% of what you think looks good
Then increase if needed
(Most beginners over-animate)

### Tip 2: Study, Don't Copy
Don't copy animation values from tutorials
Understand WHY those values
Then create your own

### Tip 3: Test on Real Devices
Animations that are smooth on your laptop might lag on phones
Always test mobile performance

### Tip 4: Get Feedback
Show your site to 3 people
Ask: "Does anything feel slow or annoying?"
If yes, reduce that animation

### Tip 5: Less is More
One great animation > ten mediocre ones
Focus on making hero section perfect
Before animating everything else

### Tip 6: Document Your Variants
Create a `animations.ts` file
Store all your variants there
Reuse them across components

### Tip 7: Performance Matters
Use Chrome DevTools Performance tab
Record while scrolling
Look for dropped frames
Optimize heavy animations

---

## 🚀 Your Action Plan

### This Week:
- [ ] Install Framer Motion in Evolve Gym project
- [ ] Read official docs (Introduction + Animation sections)
- [ ] Watch 2 beginner tutorials
- [ ] Build button playground practice project
- [ ] Add first animation to Evolve Gym (hero fade in)

### Next Week:
- [ ] Learn variants pattern
- [ ] Learn scroll animations (whileInView)
- [ ] Build card grid practice project
- [ ] Add scroll reveals to 3 sections in Evolve Gym

### Week After:
- [ ] Learn stagger animations
- [ ] Learn page transitions
- [ ] Add all major animations to Evolve Gym
- [ ] Test performance on mobile
- [ ] Get feedback and refine

---

## 📝 Final Motivation

**Here's the truth:**
- Framer Motion looks complex but it's actually intuitive
- You'll get 80% of value from 20% of features (fade, slide, scale, scroll)
- Your first animations will feel awkward - that's normal
- By day 3, you'll be comfortable
- By day 7, you'll be confident
- By day 14, you'll wonder how you built sites without it

**The difference between your Evolve Gym site with vs. without Framer Motion:**
- Without: "Nice gym website"
- With: "WOW, this is PROFESSIONAL"

**That's the difference between getting the interview or not.**

---

**Ready to make Evolve Gym move?** 💪

Start with the basics (fade in hero), master that, then level up. You've got this!
