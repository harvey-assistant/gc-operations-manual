# LAUNCH PLAYBOOK - Go-Live Execution

**Use this when:** Build complete, ready to open gates  
**Time needed:** 1 week launch + 2 weeks iteration  
**Goal:** Smooth first-week experience, momentum established

---

## ⚡ 5-MINUTE OVERVIEW

**Launch Philosophy:**
Balance momentum vs friction - let them in fast, but capture critical data.

**Launch Week Timeline:**
- **Day 1:** Gates open, members hit onboarding
- **Day 2-3:** First onboarding calls
- **Day 4-5:** First live sessions
- **Day 7:** Team check-in, iterate

**Key principle:** 10-15 min onboarding unlocks full access (not hours of setup).

---

## 🌳 DECISION TREE: LAUNCH APPROACH

```
START: Build phase complete, ready to launch
  ↓
BETA MEMBERS VALIDATED?
├─ YES: 5-10 paying members happy
│  ├─ Full launch to wider audience
│  └─ Use gated onboarding approach
│
└─ NO: Haven't validated yet
   ├─ Stay in beta longer
   ├─ More serve calls
   └─ Don't open gates until validated

GATING STRATEGY:
├─ Onboarding course (10-15 min) → Unlock full access
├─ OR Approval required → Manual review before access
└─ OR Open access → Trust + monitor (not recommended)

RECOMMENDED: Gated onboarding (balance momentum + tracking)
```

---

## ✅ PRE-LAUNCH CHECKLIST (T-7 Days)

**Circle configuration:**
- [ ] All spaces configured and tested
- [ ] Permissions set correctly
- [ ] Event calendar populated (first month minimum)
- [ ] Content seeded (first 2 weeks minimum)

**Onboarding sequence:**
- [ ] Onboarding course created (5-7 lessons)
- [ ] Welcome video recorded
- [ ] Profile setup guided
- [ ] Schedule call lesson included
- [ ] Tested with team member

**Automations:**
- [ ] Calendly → Circle integration (if using)
- [ ] Welcome email sequence
- [ ] Tag automation (completion tracking)
- [ ] Squad/group placement (if applicable)

**Team:**
- [ ] Roles clear (who does what)
- [ ] Coverage plan (who's available when)
- [ ] Support channel ready (Slack/email)
- [ ] First-week calendar blocked

**Analytics:**
- [ ] Tracking setup (completion rates)
- [ ] Hidden tags configured
- [ ] Dashboard for monitoring
- [ ] Red flag alerts defined

---

## 🚪 PHASE 1: GATED ONBOARDING (Day 1)

### Pattern: Unlock After 10-15 Min Course

**Traditional approach (DON'T DO THIS):**
- Member pays → Sees everything immediately
- Overwhelmed, doesn't know where to start
- Skips important setup
- Never fully engaged

**Gated onboarding (DO THIS):**
- Member pays → Sees ONLY onboarding course
- 10-15 minute completion → Unlocks full community
- Forces critical steps
- Ensures proper orientation

---

### Onboarding Course Structure (5-7 Lessons)

**Lesson 1: Welcome** (2 min)
```
VIDEO: 
"Welcome to [Community Name]! I'm [Name], and I'm excited you're here.

Here's what to expect:
- This community is [promise statement]
- We meet [frequency] for [format]
- Your first step is completing this quick onboarding

Let's get started."

BUTTON: "Next →"
```

---

**Lesson 2: Who This Is For** (1 min)
```
TEXT POST:
"This community is specifically for [target avatar].

If you're [current state] and want to [desired state], you're in the right place.

We focus on [specific outcomes], NOT [what you're not].

Sound like you? Great. Let's continue."

BUTTON: "That's me →"
```

---

**Lesson 3: Complete Your Profile** (2 min)
```
TEXT POST:
"Quick task: Complete your Circle profile.

REQUIRED FIELDS:
- Full name
- Profile photo
- Location
- What you do

WHY: So other members can find and connect with you.

Click 'Edit Profile' above, fill it out, then come back and click Next."

BUTTON: "Profile complete →"
```

---

**Lesson 4: Introduce Yourself** (2 min)
```
TEXT POST:
"Post your intro in the community space.

TEMPLATE:
- Name + Location
- What you do
- What you're working on
- What you hope to get from this community

Click the button below to post your intro."

BUTTON: "Post intro →" (links to community space)
```

---

**Lesson 5: Schedule Your Onboarding Call** (3 min)
```
TEXT POST:
"Important: Schedule your 1-on-1 onboarding call with [Name].

This is a 30-minute call where we'll:
- Get to know you
- Answer your questions
- Set you up for success

Click below to book your call."

BUTTON: "Schedule call →" (links to Calendly)

NOTE: This triggers hidden tag when completed (via automation)
```

---

**Lesson 6: First Event** (2 min)
```
TEXT POST:
"Our first live session is [Date/Time].

WHAT WE'LL COVER:
- [Topic 1]
- [Topic 2]
- [Open Q&A]

Mark your calendar - see you there!"

BUTTON: "Add to calendar →"
```

---

**Lesson 7: You're In!** (1 min)
```
TEXT POST:
"Congrats! You're all set up.

Click below to access the full community.

Welcome aboard!"

BUTTON: "Enter community →" (unlocks full access)
```

---

### Automation: Track Completion

**Hidden tags to apply:**
- `onboarding_complete` - Finished course
- `onboarding_scheduled` - Booked call (via Calendly trigger)
- `intro_posted` - Posted introduction
- `profile_complete` - Filled out profile

**Why hidden tags:**
- Track without showing members
- Filter for follow-up
- Identify stragglers
- Measure completion rates

---

## 📞 PHASE 2: CALENDLY → CIRCLE AUTOMATION

### Problem: Members Skip Scheduling

**Challenge:**
Members click "next, next, next" through onboarding without actually booking their call.

**Solution:**
```
Member clicks Calendly link → Enters email → Books call
  ↓
Trigger: Calendly event booked
  ↓
Make.com automation:
  1. Grab email from Calendly
  2. Find member in Circle by email
  3. Add hidden tag: "onboarding_scheduled"
  ↓
Result: Can filter members who haven't scheduled
```

---

### Follow-Up Automation

**Day 3 after joining:**
```
IF no "onboarding_scheduled" tag:
  ↓
Send DM:
"Hey [Name]! Noticed you haven't scheduled your onboarding call yet. 
Here's the link: [Calendly URL]

Looking forward to connecting!"
```

**Day 7 after joining:**
```
IF still no "onboarding_scheduled" tag:
  ↓
Personal outreach from community manager:
"Hi [Name], wanted to check in - everything going okay? Would love to get 
you on the calendar for your onboarding call. When works for you this week?"
```

---

## 👥 PHASE 3: SQUAD/GROUP PLACEMENT (If Applicable)

### Pattern: Profile-Based Auto-Assignment

**Challenge (Manual placement):**
- Community manager bottleneck
- New members can't access until placed
- Doesn't scale

**Solution (Automated placement):**
```
Member completes profile → Answers placement questions
  ↓
Make.com automation checks answers:
  - Role
  - Firm size
  - Focus area
  - Experience level
  ↓
Auto-assigns to correct squad/group
  ↓
Updates space permissions automatically
```

**Real example (Realize):**
> "We have an automation in Make that will check profile updates, determine 
> squad assignment, remove old space access, give new space access. No manual 
> placement needed anymore."

**Scales infinitely.**

---

### Placement Questions (Profile Custom Fields)

**Example fields:**
- Role: [Founder / Manager / Individual Contributor]
- Company size: [1-10 / 11-50 / 51-200 / 200+]
- Focus area: [Product / Engineering / Marketing / Sales]
- Experience: [0-2 years / 3-5 years / 6-10 years / 10+ years]

**Automation logic:**
```
IF Role = Founder AND Company size = 1-10:
  → Assign to "Early Stage Founders" squad

IF Role = Manager AND Focus area = Engineering:
  → Assign to "Engineering Leaders" squad

[etc.]
```

---

## 📅 PHASE 4: FIRST WEEK EXPERIENCE

### Day 1-2: Welcome & Orientation

**What happens:**
- Members complete onboarding course
- Post introductions
- Schedule onboarding calls
- Explore community

**Team actions:**
- Monitor onboarding completion
- Welcome new intros
- Answer questions in support channel
- Fix any immediate issues

---

### Day 3-4: First Onboarding Calls

**30-minute call structure:**
```
MINUTE 0-10: Get to know them
- "Tell me about your situation"
- "What brought you here?"
- "What are you hoping to get out of this?"

MINUTE 10-20: Orient to community
- Show them around Circle
- Explain event calendar
- Answer questions
- Set expectations

MINUTE 20-30: Set them up for success
- "What's your first goal here?"
- "What would make this worth it for you?"
- "See you at [next event]!"
```

**Track:**
- [ ] Attendance (who's completing calls)
- [ ] Common questions (update onboarding)
- [ ] Red flags (disengaged, wrong fit)

---

### Day 5-7: First Live Sessions

**First session is CRITICAL:**
- Sets tone for community
- Demonstrates value immediately
- Creates early wins
- Builds momentum

**Format (15 min teach + 75 min do):**
```
MINUTE 0-15: Teaching
- Introduce framework/concept
- Show examples
- Answer clarifying questions

MINUTE 15-90: Doing
- Members work on their actual problem
- You circulate and help
- Screen share, live coaching
- Tangible progress by end
```

**Why this works:**
- Immediate value (not "homework for next week")
- Accountability (they actually do it)
- Community (see each other work)
- Momentum (progress every session)

---

## 🔄 PHASE 5: POST-LAUNCH ITERATION (Week 2-4)

### Week 2: Monitor & Fix

**What to track:**
- [ ] Onboarding completion rate (target: 80%+)
- [ ] Call scheduling rate (target: 70%+)
- [ ] First event attendance (track baseline)
- [ ] Support ticket volume

**What to fix:**
- Friction points in onboarding
- Broken automation
- Unclear instructions
- Missing content

---

### Week 3-4: Iterate & Scale

**Based on data:**
- What's working? → Double down
- What's not working? → Fix or kill
- What's missing? → Add quickly
- What's friction? → Smooth out

**Real example (Realize Week 2):**
- Converted welcome flow → course (better tracking)
- Added Calendly → Circle automation
- Simplified squad placement (fully automated)

---

## ⚠️ COMMON LAUNCH MISTAKES

**Mistake 1: Overwhelming new members**
- Show everything at once, no clear path
- Solution: Gated onboarding course

**Mistake 2: Can't track completion**
- No analytics on who did what
- Solution: Hidden tags + course tracking

**Mistake 3: Too much friction**
- Make them wait for approval/placement
- Solution: 10-15 min unlock, automated placement

**Mistake 4: Manual bottlenecks**
- Community manager has to place everyone
- Solution: Profile-based automation

**Mistake 5: No follow-up for stragglers**
- People who don't complete onboarding get forgotten
- Solution: Day 3 + Day 7 nudges

---

## 🔑 KEY FRAMEWORKS

### 1. Balance Momentum vs Friction

**Concept:** Let them in fast, but capture critical data

**Jordan's principle:**
> "Don't make them wait till Monday if they're fired up Saturday night."

**The balance:**
- **Too much friction:** Lose momentum, drop off
- **Too little friction:** Skip steps, miss setup
- **Just right:** 10-15 min unlocks access

---

### 2. Gated Onboarding

**Pattern:**
```
Join → See ONLY onboarding → Complete course → Unlock full access
```

**Why it works:**
- Forces critical steps
- Tracks completion
- Ensures orientation
- Still fast (10-15 min)

---

### 3. Calendly → Circle Integration

**Pattern:**
```
Calendly booking → Make.com trigger → Hidden tag in Circle
```

**Enables:**
- Track who scheduled
- Filter stragglers
- Automate follow-up
- No manual tracking

---

## 📊 LAUNCH SUCCESS METRICS

**First Week (Days 1-7):**
- **Onboarding completion:** 80%+ (good)
- **Call scheduled:** 70%+ (good)
- **Profile complete:** 90%+ (good)
- **First event attendance:** Baseline (measure)
- **Support volume:** Manageable (team not overwhelmed)

**First Month (Days 1-30):**
- **Active %:** Engaged at least once/week
- **Event attendance:** Consistent or growing
- **Churn:** <5% in first month (good)
- **Member satisfaction:** Qualitative feedback positive

**Red flags:**
- <60% onboarding completion
- High support load (team overwhelmed)
- Automations breaking
- Low event attendance
- Early churn spike

---

## 🔄 DECISION TREE: AFTER LAUNCH

```
LAUNCH WEEK COMPLETED
  ↓
METRICS HEALTHY?
├─ YES: 80%+ onboarding, good attendance
│  ├─ Continue to OPTIMIZE phase
│  └─ GO TO: optimize.md playbook
│
└─ NO: <60% onboarding, low engagement
   ├─ Identify friction points
   ├─ Fix critical issues
   ├─ Iterate on onboarding
   └─ Don't scale until metrics improve
```

---

**Last updated:** 2026-02-07  
**Source:** LAUNCH-TOOLKIT.md  
**Next step:** After launch stabilizes → OPTIMIZE playbook
