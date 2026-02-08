# OPERATIONS CO-PILOT - TEST SCENARIOS

**Test these scenarios before deploying to team**

---

## 🎯 TEST PHILOSOPHY

**What we're testing:**
1. Accuracy (correct methodology)
2. Helpfulness (actually solves problem)
3. Speed (fast responses)
4. Completeness (nothing missing)
5. Clarity (easy to understand)

**How to test:**
- Ask the question as a team member would
- Evaluate the response
- Mark: ✅ Pass | ⚠️ Needs work | ❌ Fail

---

## SCENARIO 1: Discovery Call Prep (Type 1)

### Test Input
```
"I have a discovery call tomorrow with an accounting firm owner. They have 
50 clients and want to scale to 100. Help me prep."
```

### Expected Response Elements
- [ ] Type assessment (Should identify as Type 1)
- [ ] Pre-call checklist (Research, examples, questions)
- [ ] Reference client (Should mention Realize - same vertical)
- [ ] Discovery sequence (6 steps with timing)
- [ ] Key questions to ask
- [ ] Expected objections
- [ ] Scripts provided

### Success Criteria
✅ **Pass if:**
- Correctly identifies Type 1
- Mentions Realize as example
- Provides actionable checklist
- Scripts are specific to accounting vertical
- Response is <2 min to generate

⚠️ **Needs work if:**
- Missing any element above
- Too generic (not customized to accounting)
- Scripts feel template-y

❌ **Fail if:**
- Wrong Type identified
- Wrong methodology
- Missing critical steps

---

## SCENARIO 2: Discovery Call Prep (Type 2)

### Test Input
```
"Discovery call with someone starting a premium community for chiropractors. 
They have 10K email subscribers but no paid community yet."
```

### Expected Response Elements
- [ ] Type assessment (Should identify as Type 2)
- [ ] Reference client (Should mention Austin Cohen - same situation)
- [ ] Pre-call checklist
- [ ] Discovery focus (validate transformation, not audit)
- [ ] Key qualification questions
- [ ] Scripts for Type 2 positioning

### Success Criteria
✅ **Pass if:**
- Correctly identifies Type 2
- References Austin Cohen
- Focuses on Design phase (not Audit)
- Asks about transformation/positioning

---

## SCENARIO 3: Transcript Analysis

### Test Input
```
"Just finished a discovery call. Here's what happened:
- They're a software engineering consultant
- 160K YouTube subscribers
- Currently doing cohorts ($50K per cohort)
- Want to pivot to membership for stable revenue
- Concerned about pricing and churn"
```

### Expected Response Elements
- [ ] Type assessment (Type 2 - pivot to new model)
- [ ] Reference client (Should mention Luca - same situation)
- [ ] Key insights extracted
- [ ] Red flags identified (if any)
- [ ] Next steps (what to do now)
- [ ] Suggested follow-up

### Success Criteria
✅ **Pass if:**
- Identifies similarity to Luca/Refactoring
- Recognizes membership pivot
- Addresses pricing/churn concerns
- Provides clear next steps

---

## SCENARIO 4: Mid-Process Help (Pricing)

### Test Input
```
"I'm in a design session RIGHT NOW. Client can't decide on pricing. 
They want $150/month but worried no one will pay. Need answer fast!"
```

### Expected Response Elements
- [ ] Quick framework (not long explanation)
- [ ] Stair-step approach (Alex Hormozi model)
- [ ] Script to use right now
- [ ] Real example (should mention Luca or similar)
- [ ] Follow-up offer ("Still stuck?")

### Success Criteria
✅ **Pass if:**
- Response is FAST (<30 seconds)
- Provides immediate script
- Framework is clear and actionable
- Offers continued help

⚠️ **Needs work if:**
- Takes too long to respond
- Too much explanation (not urgent enough)

---

## SCENARIO 5: Kickoff Prep

### Test Input
```
"Kickoff call with new client on Thursday. Type 2 client, experienced 
founder, wants to launch in 8 weeks. What should I prepare?"
```

### Expected Response Elements
- [ ] Identifies accelerated timeline
- [ ] Custom checklist (adjusted for experience level)
- [ ] Kickoff sequence (customized for Type 2)
- [ ] 8-week roadmap overview
- [ ] What to skip (experienced founder)
- [ ] What's critical (tight timeline)

### Success Criteria
✅ **Pass if:**
- Customized for experienced founder (skip basics)
- Adjusted for 8-week timeline (compressed)
- Provides specific agenda

---

## SCENARIO 6: General Question

### Test Input
```
"What's the pre-sell methodology?"
```

### Expected Response Elements
- [ ] Clear definition
- [ ] Step-by-step process (Reach out → Sell → Build)
- [ ] Why it works (rationale)
- [ ] Real example from client work
- [ ] When to use it

### Success Criteria
✅ **Pass if:**
- Clear explanation
- Includes real example
- Explains why (not just what)

---

## SCENARIO 7: Wrong Type Assessment

### Test Input
```
"Discovery call with someone who has 500 members in their community already. 
They're making $30K/month but churn is high."
```

### Expected Response Elements
- [ ] Type assessment (Should identify as Type 1)
- [ ] Should NOT start with design/positioning
- [ ] Should focus on audit/optimization
- [ ] Reference client (Realize or similar)
- [ ] Churn-specific guidance

### Success Criteria
✅ **Pass if:**
- Correctly identifies Type 1 (existing revenue)
- Focuses on optimization, not building
- Addresses churn directly

❌ **Fail if:**
- Treats as Type 2
- Suggests starting over

---

## SCENARIO 8: Ambiguous Situation

### Test Input
```
"Client is confused about whether to do membership or cohort. What's the difference?"
```

### Expected Response Elements
- [ ] Clear definition of each
- [ ] Decision framework (when to use which)
- [ ] Pros/cons of each
- [ ] Default recommendation (membership for most)
- [ ] Follow-up questions to clarify their situation

### Success Criteria
✅ **Pass if:**
- Clear explanation
- Provides decision framework
- Asks clarifying questions to help decide

---

## SCENARIO 9: Emergency Help

### Test Input
```
"Design session happening NOW. Client says $75/month is too cheap, 
wants to charge $200. What do I say?"
```

### Expected Response Elements
- [ ] FAST response (<30 seconds)
- [ ] Immediate script to use
- [ ] Framework (stair-step approach)
- [ ] Caution about starting too high
- [ ] Offer to continue helping

### Success Criteria
✅ **Pass if:**
- Responds immediately
- Provides script ready to use now
- Doesn't require follow-up to be useful

---

## SCENARIO 10: Custom Checklist Request

### Test Input
```
"Create a custom checklist for a design session with:
- Type 2 client
- Experienced founder (been in business 10 years)
- Tight timeline (wants to launch in 6 weeks)
- Already has positioning clarity"
```

### Expected Response Elements
- [ ] Custom checklist (not generic)
- [ ] Adjusted for experience (skip basics)
- [ ] Compressed timeline (6 weeks)
- [ ] Focus on execution (positioning already clear)
- [ ] Specific timings

### Success Criteria
✅ **Pass if:**
- Checklist is customized (not template)
- Clearly adapted to all 4 constraints
- Actionable and specific

---

## SCENARIO 11: First-Time User

### Test Input
```
"What can you help me with?"
```

### Expected Response Elements
- [ ] Friendly introduction
- [ ] List of capabilities
- [ ] Example scenarios
- [ ] Call to action (try asking about a scenario)

### Success Criteria
✅ **Pass if:**
- Welcoming and clear
- Capabilities well-explained
- Encourages engagement

---

## SCENARIO 12: Escalation Needed

### Test Input
```
"Client wants to negotiate revenue share down from 30% to 15%. What should I say?"
```

### Expected Response Elements
- [ ] Recognizes this needs Jordan's input
- [ ] Provides context on standard model
- [ ] Offers to loop in Jordan
- [ ] Doesn't make commitment

### Success Criteria
✅ **Pass if:**
- Correctly escalates to Jordan
- Provides helpful context while escalating
- Doesn't overstep boundaries

❌ **Fail if:**
- Tries to answer without escalating
- Makes commitment on behalf of team

---

## 🎯 VALIDATION CHECKLIST

**Before deploying, ensure:**

### Accuracy
- [ ] All 12 scenarios tested
- [ ] 10+ scenarios pass (83%+)
- [ ] No major methodology errors

### Helpfulness  
- [ ] Responses are actionable
- [ ] Scripts are specific, not generic
- [ ] Examples are relevant

### Speed
- [ ] Standard responses <60 seconds
- [ ] Emergency responses <30 seconds

### Completeness
- [ ] No critical elements missing
- [ ] Follow-up offers provided
- [ ] Escalation works correctly

### Clarity
- [ ] Easy to understand
- [ ] Not too technical
- [ ] Clear next steps

---

## 🧪 HOW TO RUN TESTS

**Option 1: Manual Testing**
1. Ask each question in #ops-copilot
2. Evaluate response against criteria
3. Mark pass/fail
4. Document issues

**Option 2: With Team**
1. Pick 3-5 scenarios
2. Have Filip/Shannon test
3. Get their feedback
4. Refine based on real usage

**Option 3: Real Scenarios**
1. Wait for actual team question
2. Evaluate co-pilot response
3. Compare to what Jordan would say
4. Adjust if needed

---

## 📊 SCORING

**Per scenario:**
- ✅ Pass = 1 point
- ⚠️ Needs work = 0.5 points  
- ❌ Fail = 0 points

**Total score:**
- 11-12: Excellent, deploy immediately
- 9-10: Good, minor fixes then deploy
- 7-8: Needs work, fix issues before deploy
- <7: Not ready, significant improvements needed

---

## 🔄 ITERATION PLAN

**After initial testing:**
1. Fix any failures (❌)
2. Improve "needs work" (⚠️)
3. Re-test those scenarios
4. Deploy to team

**After team testing (Week 1):**
1. Collect real questions asked
2. Evaluate responses
3. Identify patterns (what's missing, what's unclear)
4. Update system prompt or knowledge base
5. Re-deploy

**Ongoing:**
- Monthly: Review usage stats
- Quarterly: Major refinements
- As needed: Hot fixes for errors

---

**Version:** 1.0  
**Last updated:** 2026-02-07  
**Ready to test:** Yes  
**Recommended:** Test scenarios 1-5 first (most common use cases)
