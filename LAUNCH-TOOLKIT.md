# LAUNCH TOOLKIT - Go-Live Execution & First Week Experience

**Purpose:** Extract GrowthCommunity's launch methodology for successfully taking communities from "ready" to "live" and optimizing the first-week member experience.

**Extracted from:** Realize launch (Aug 14-22, 2025) - Full team involved

---

## 📋 QUICK REFERENCE CHECKLIST

**Pre-Launch (T-7 days):**
- [ ] All content seeded ✅
- [ ] Event calendar populated (3-6 months) ✅
- [ ] Team roles clear ✅
- [ ] Onboarding sequence tested ✅
- [ ] Automations configured ✅
- [ ] Analytics tracking set up ✅

**Launch Week:**
- [ ] Day 1: Members join, hit onboarding course
- [ ] Day 2-3: First onboarding calls happen
- [ ] Day 4-5: First events/sessions run
- [ ] Day 7: Week 1 check-in with team

**Post-Launch (Week 2+):**
- [ ] Monitor completion rates
- [ ] Fix friction points
- [ ] Iterate based on feedback
- [ ] Scale what's working

---

## 🚀 LAUNCH PHILOSOPHY

**Jordan's core principle:**
> "Balance momentum vs friction. We want to keep that momentum when they're fired up on Saturday night, but we also need to ensure they complete onboarding."

**The balance:**
- **Too much friction:** People lose momentum, drop off
- **Too little friction:** People skip steps, miss critical setup
- **Just right:** Quick onboarding (10-15 min) that unlocks full access

---

## 🎯 LAUNCH PHASE INPUTS (From Build)

**What you need before launching:**

1. **Circle fully configured** - All spaces, permissions, automations
2. **Onboarding sequence** - Course or flow for first-time members
3. **Event calendar** - First month fully scheduled
4. **Team trained** - Everyone knows their role
5. **Analytics set up** - Tracking completion, engagement
6. **Support system** - Way to handle questions/issues

---

## 📚 ONBOARDING COURSE APPROACH

### Pattern: Unlock Community After Onboarding

**Traditional approach (BAD):**
- Member joins, sees everything immediately
- Overwhelmed, doesn't know where to start
- Skips important setup steps
- Never fully engaged

**Gated onboarding (GOOD):**
- Member joins, sees ONLY onboarding course
- 10-15 minute completion unlocks full community
- Forces critical steps (profile, welcome, schedule call)
- Ensures proper orientation

**Realize implementation:**

**Before joining:** Pay → Land in welcome space

**After payment:**
1. **See:** Only "Start Here" onboarding course
2. **Complete:** 10-15 minute course (5-7 lessons)
3. **Unlock:** Full community access after completion
4. **Schedule:** Onboarding call via Calendly (one lesson)
5. **Track:** Hidden tags show who completed what

---

## 🔄 ONBOARDING AUTOMATION FLOW

### Pattern: Calendly → Circle Integration

**The challenge:**
Members can click "next, next, next" through onboarding without actually scheduling their call.

**The solution:**
```
Member completes lesson → "Schedule Your Call"
  ↓
Clicks Calendly link → Enters email → Books call
  ↓
Trigger: Calendly event booked
  ↓
Make.com automation:
  - Grab email from Calendly
  - Find member in Circle by email
  - Add hidden tag: "onboarding_scheduled"
  ↓
Result: Can now filter/message members who haven't scheduled
```

**Follow-up automation:**
- **Day 3:** If no "onboarding_scheduled" tag → DM: "Hey, looks like you didn't schedule your onboarding call yet. Here's the link!"
- **Day 7:** Still no tag → Personal outreach from community manager

---

## 📊 TRACKING & ANALYTICS

### Pattern: Hidden Tags + Course Completion

**What to track:**
1. **Course completion** - Did they finish onboarding?
2. **Call scheduled** - Did they book onboarding call?
3. **First event attended** - Did they show up to something?
4. **Profile completed** - Did they fill out their info?
5. **First post** - Did they engage in community?

**How to track (Realize example):**

**Course analytics:**
- Circle shows completion % for each lesson
- Can see exactly where people drop off
- Filter members by "incomplete" status

**Hidden tags:**
- `onboarding_complete` - Finished course
- `onboarding_scheduled` - Booked call
- `squad_assigned` - Placed in right group
- `pod_assigned` - Placed in mastermind
- `first_event` - Attended something

**Filip's approach:**
> "We can tag members with hidden tags depending on completion of specific lessons. You'll be able to see who's completed each specific lesson or the full course, and plan your next actions."

---

## 🎭 SQUAD/POD PLACEMENTS

### Pattern: Automated Placement Based on Profile

**Realize's challenge:**
- 6 squads initially → Consolidated to 4
- Manual placement was bottleneck
- New members couldn't access until placed

**Solution: Profile-based auto-assignment**

**How it works:**
1. Member joins → Completes profile
2. Answers: Role, firm size, focus area, etc.
3. Make.com automation checks answers
4. Auto-assigns to correct squad
5. Updates space permissions automatically

**Jake's automation:**
> "We have an automation set up in Make that will, anytime somebody updates their profile, it will check to see if that changes their squad assignment. If it does, it will remove all their space access, give them new space access. So I'm not having to place any of those squads anymore."

**Key benefit:** No manual placement needed, scales infinitely.

---

## 👥 POD (MASTERMIND) LAUNCHES

### Pattern: 6-Month Cohorts with Facilitator Coordinator

**Realize's flagship program:**
- **Pods** = Small mastermind groups (6-8 people)
- **Duration:** 6 months per cohort
- **Frequency:** 90-minute sessions
- **Facilitators:** Experienced community members
- **Coordinator:** Stephanie (manages all facilitators)

**Launch timeline:**
- **T-30 days:** Announce pod signups open
- **T-7 days:** Signups close (creates urgency)
- **Launch week:** Placements happen
- **Week 2:** First pod sessions run
- **Ongoing:** Coordinator supports facilitators

**Jake's approach:**
> "Jason got done doing eight roadshow events throughout the US. The ending was like, 'Learning from your peers is better. We have these masterminds, signups are closed on August 1st.' That pushed a bunch of people—the last seven people that joined were like, 'I was at a talk from Jason and he said masterminds were closing, so I wanted to get in.'"

**Urgency driver:** Cohort closes = FOMO = signups spike.

---

## ♻️ RECYCLING SPACES (Not Creating New Ones)

### Pattern: Clear & Reuse Pod Spaces

**Challenge:**
Every 6 months, new pod cohort starts. Do you create 30 new spaces or reuse existing?

**Realize's solution: REUSE**

**Process:**
1. **Cohort ends** (Month 6)
2. **Facilitators clear their pod space** (delete old posts)
3. **Remove previous members** from space
4. **Add new cohort members** to same space
5. **Start fresh** with clean slate

**Why this works:**
- Don't clutter Circle with 60, 90, 120 pod spaces over time
- Keeps navigation clean
- Forces good space hygiene
- Scales indefinitely

**Jake's note:**
> "We're not going to keep adding new pod spaces. Those are the spaces we have now. We're just going to remove members from the last cohort, clear out all the posts, and recycle them for this cohort."

---

## 🔧 POST-LAUNCH OPTIMIZATION (Week 1-4)

### Pattern: Monitor → Fix → Scale

**Week 1 focus (Aug 14-21):**
- Are people completing onboarding?
- Are they scheduling calls?
- Are they getting placed in squads/pods?
- Are automations working?

**Week 2 focus (Aug 22+):**
- First events - how's attendance?
- First posts - are people engaging?
- Support load - can team handle it?
- What's breaking?

**Realize's Week 2 priorities (from Aug 22 Growth Sync):**
1. **Onboarding analytics** - Track who's completing what
2. **Automation fixes** - Calendly → Circle integration
3. **Course vs buttons** - Convert to course for better tracking
4. **Next hire** - Need dedicated pod facilitators (not busy firm owners)

---

## 🚨 COMMON LAUNCH MISTAKES

**Mistake 1: Overwhelming new members**
- Show everything at once
- No clear "start here"
- Solution: Gated onboarding course

**Mistake 2: Can't track completion**
- No analytics on who did what
- Can't follow up with stragglers
- Solution: Course + hidden tags

**Mistake 3: Too much friction**
- Make them wait for approval
- Lock everything until call happens
- Solution: Quick unlock (10-15 min) + nudges

**Mistake 4: Manual placements**
- Bottleneck on community manager
- New members can't access stuff
- Solution: Profile-based automation

**Mistake 5: Creating infinite spaces**
- New pod spaces every cohort
- Circle becomes cluttered
- Solution: Recycle spaces

---

## 💡 LAUNCH WISDOM

**From Jordan:**
- "Balance momentum vs friction - don't make them wait till Monday if they're fired up Saturday night"
- "We can't force 100% of people to do onboarding, but we can nudge healthily"
- "Course completion should be 10-15 minutes, not an hour"

**From Jake:**
- "99% of people will schedule the onboarding call because it's helpful"
- "Sometimes software reps sneak in - I need to catch them early"
- "I hate when I'm jazzed up about something and have to pause momentum because of friction"
- "The pods are our flagship program - that's what keeps people around"

**From Filip:**
- "Hidden tags let you track completion without showing members"
- "Calendly → Circle integration solves the 'did they actually schedule?' problem"
- "Course analytics show exactly where people drop off"

---

## 🎯 LAUNCH SUCCESS METRICS

**First Week (Days 1-7):**
- **Onboarding completion rate:** Target 80%+
- **Call scheduled rate:** Target 70%+
- **Profile completion rate:** Target 90%+
- **First event attendance:** Track baseline
- **Support ticket volume:** Should be manageable

**First Month (Days 1-30):**
- **Active member %:** Engaged at least once/week
- **Event attendance:** Consistent or growing
- **Churn rate:** <5% in first month
- **Member satisfaction:** Qualitative feedback

**Red flags:**
- <60% onboarding completion
- High support load (team overwhelmed)
- Automations breaking
- Low event attendance
- Early churn spike

---

## 🔄 POST-LAUNCH ITERATION CYCLE

**Week 1:** Launch → Monitor → Collect feedback
**Week 2:** Fix critical issues → Improve onboarding
**Week 3:** Scale what works → Kill what doesn't
**Week 4:** Stabilize → Document → Prepare for growth

**Realize's Aug 22 iteration (1 week post-launch):**
- Convert welcome flow to course (better tracking)
- Add Calendly → Circle automation (catch non-schedulers)
- Hire dedicated facilitators (scale pods)
- Simplify squad placement (fully automated now)

---

## 📋 LAUNCH CHECKLIST (Final)

**T-7 days:**
- [ ] All automations tested
- [ ] Team final walkthrough
- [ ] Support system ready
- [ ] Analytics tracking configured
- [ ] First week events scheduled

**T-1 day:**
- [ ] Final check: Can new member complete onboarding?
- [ ] Team briefing: Launch day plan
- [ ] Monitor setup: How will we watch for issues?

**Launch Day:**
- [ ] Open gates / send invites
- [ ] Monitor onboarding flow real-time
- [ ] Fix any immediate breakage
- [ ] Welcome first members personally

**Day 2-7:**
- [ ] Daily team check-in
- [ ] Monitor analytics
- [ ] Personal outreach to stragglers
- [ ] Iterate on friction points

**Week 2+:**
- [ ] Weekly growth sync (like Realize Aug 22)
- [ ] Document what's working
- [ ] Plan next optimization sprint

---

**Status:** COMPLETE - Launch methodology extracted from Realize  
**Key insight:** Balance momentum (let them in fast) with tracking (know who needs nudges)  
**Last updated:** 2026-02-07 17:00
