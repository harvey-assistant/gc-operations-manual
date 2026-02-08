# OPERATIONS CO-PILOT - DEPLOYMENT GUIDE

**How to deploy the Operations Co-Pilot to Slack**

---

## 🎯 WHAT'S READY

✅ **Agent definition** - AGENT-DEFINITION.md  
✅ **System prompt** - SYSTEM-PROMPT.md  
✅ **Knowledge base** - KNOWLEDGE-BASE.md (85KB - all 6 playbooks)  
✅ **Usage guide** - USAGE-GUIDE.md  
✅ **Test scenarios** - TEST-SCENARIOS.md  

**Status:** Ready to deploy pending Slack integration

---

## 🚧 WHAT NEEDS JORDAN

**To complete deployment, need:**

### 1. Slack Workspace Details
- Workspace name/ID
- Create `#ops-copilot` channel
- Confirm Harvey has Slack access already?

### 2. Agent Deployment Method
Choose one:

**Option A: Use OpenClaw's Slack integration (EASIEST)**
- Leverage existing Slack connection
- Route #ops-copilot channel to dedicated agent
- Team @mentions or posts in channel

**Option B: New Slack bot (MORE SETUP)**
- Create dedicated Slack app
- Deploy as separate bot user
- More isolated, but more config

**Recommendation:** Option A (use existing Slack setup)

### 3. Testing Plan
- Test with Jordan first (scenarios 1-5)
- Then Filip (real scenario)
- Then Shannon (real scenario)
- Then full team rollout

---

## 📋 DEPLOYMENT STEPS (OPTION A)

### Step 1: Create Slack Channel
```
1. In Slack: Create #ops-copilot
2. Add: Filip, Shannon, Jordan
3. Pin usage guide to channel
```

### Step 2: Deploy Agent to OpenClaw
```
1. Create new agent in OpenClaw config
2. Agent name: "ops-copilot"
3. Load system prompt from SYSTEM-PROMPT.md
4. Load knowledge base from KNOWLEDGE-BASE.md
5. Set model: anthropic/claude-sonnet-4-5 (or opus for complex)
6. Enable session memory (remember conversations)
```

### Step 3: Connect to Slack Channel
```
1. Route #ops-copilot to ops-copilot agent
2. Configure: Direct messages to agent
3. Test: Post "What can you help with?" in channel
```

### Step 4: Validate
```
1. Run test scenarios 1-5 (see TEST-SCENARIOS.md)
2. Verify responses are accurate
3. Check speed (<60 seconds)
4. Fix any issues
```

### Step 5: Team Rollout
```
1. Post introduction message (see below)
2. Share usage guide
3. Encourage testing with real scenarios
4. Collect feedback
```

---

## 📢 INTRODUCTION MESSAGE (For Slack)

**Post this in #ops-copilot when ready:**

```
🚀 **Operations Co-Pilot is live!**

This channel gives you instant access to our complete operational methodology - 
every playbook, every framework, every client example - via AI.

**What it does:**
Makes you instantly capable in any client scenario by providing real-time 
guidance, scripts, checklists, and examples.

**How to use it:**
Just ask in plain English:
- "Discovery call with [prospect] tomorrow - prep me"
- "Analyze this transcript: [Fathom link]"
- "Client stuck on pricing - help!"
- "What do I do next with [client]?"

**Try it now:**
Type "What can you help with?" and start a conversation.

**Full guide:** [Pin USAGE-GUIDE.md here]

Let's remove Jordan as a bottleneck. 🎯
```

---

## 🧪 PRE-LAUNCH TESTING

### Phase 1: Jordan Tests (30 min)
**Run scenarios:**
1. Discovery call prep (Type 1)
2. Discovery call prep (Type 2)
3. Mid-process help (pricing)
4. General question
5. Emergency help

**Validate:**
- Accuracy (correct methodology)
- Helpfulness (actually solves problem)
- Speed (fast enough)

**Fix any issues before Phase 2**

---

### Phase 2: Filip Tests (1 hour)
**Give Filip real scenario:**
```
"You have a kickoff with a new Type 2 client tomorrow. They're an experienced 
founder who wants to launch in 8 weeks. Use the co-pilot to prep."
```

**Watch:**
- Does he find it helpful?
- Any confusion?
- What's missing?

**Iterate based on feedback**

---

### Phase 3: Shannon Tests (1 hour)
**Give Shannon real scenario:**
```
"You need to create a weekly sync agenda for a client who's in the Optimize 
phase. Use the co-pilot to generate it."
```

**Watch:**
- Same observations as Filip
- Different usage patterns (operations vs technical)

**Final refinements**

---

### Phase 4: Full Team (Week 1)
- Announce in #ops-copilot
- Encourage real usage
- Collect feedback actively
- Monitor for errors/issues
- Hot fix as needed

---

## ⚙️ TECHNICAL CONFIGURATION

### Agent Config (OpenClaw)
```yaml
agent:
  id: ops-copilot
  name: GrowthCommunity Operations Co-Pilot
  model: anthropic/claude-sonnet-4-5
  thinking: low  # or off for speed
  
system_prompt_file: projects/master-operations-manual/copilot/SYSTEM-PROMPT.md

knowledge_base:
  - projects/master-operations-manual/copilot/KNOWLEDGE-BASE.md
  - projects/master-operations-manual/SYSTEM-MAP-v1.md  # optional

session:
  memory: true  # Remember conversations
  max_history: 20  # Last 20 messages
  
slack:
  channel: ops-copilot
  mode: direct  # Any message in channel goes to agent
```

---

## 🚨 TROUBLESHOOTING

### Issue: Responses too slow
**Solution:** 
- Check model (sonnet should be fast)
- Check knowledge base size (85KB is fine)
- Consider caching system prompt

### Issue: Responses not accurate
**Solution:**
- Review system prompt
- Check if knowledge base loaded correctly
- Test with known scenarios
- Refine prompt based on errors

### Issue: Team not using it
**Solution:**
- Ask why (too slow? not helpful? forgot about it?)
- Show real examples of value
- Make it part of workflow (require for all calls?)
- Get Jordan to use it visibly

### Issue: Responses too generic
**Solution:**
- Update system prompt to emphasize specificity
- Add more examples to knowledge base
- Require more context in questions

---

## 📊 SUCCESS METRICS

### Week 1
- [ ] All team members try it (3+ questions each)
- [ ] 80%+ questions answered successfully
- [ ] <5 errors or wrong guidance
- [ ] Positive feedback from team

### Month 1
- [ ] 20+ questions per week (team-wide)
- [ ] Team stops asking Jordan same questions
- [ ] Response time <60 seconds average
- [ ] 90%+ satisfaction rate

### Quarter 1
- [ ] 50+ questions per week
- [ ] Jordan not needed for routine questions
- [ ] Team confidence visibly higher
- [ ] Client work quality maintained

---

## 🔄 ITERATION PLAN

### After Week 1
1. Review all questions asked
2. Identify patterns (common scenarios)
3. Check for errors/misalignment
4. Update system prompt if needed
5. Add missing scenarios to knowledge base

### After Month 1
1. Usage stats analysis
2. Team feedback session
3. Major refinements to prompt
4. Add new capabilities if needed
5. Update documentation

### Ongoing
- Monthly: Review usage and feedback
- Quarterly: Major updates
- As needed: Hot fixes

---

## 🎯 ROLLBACK PLAN

**If co-pilot doesn't work:**

### Scenario 1: Technical Issues
- Disable Slack integration
- Fix underlying issue
- Re-test before re-enabling

### Scenario 2: Giving Bad Guidance
- Immediately announce: "Don't use co-pilot for [X] until fixed"
- Fix system prompt or knowledge base
- Re-test thoroughly
- Announce fix

### Scenario 3: Team Doesn't Find It Useful
- Don't force it
- Gather feedback on why
- Consider if it's worth iterating
- If not, document learnings and sunset

---

## 📋 LAUNCH CHECKLIST

**Pre-launch:**
- [ ] Slack channel created (#ops-copilot)
- [ ] Team members added
- [ ] Agent configured in OpenClaw
- [ ] System prompt loaded
- [ ] Knowledge base loaded
- [ ] Slack integration connected
- [ ] Test scenarios 1-5 passed
- [ ] Usage guide pinned in channel

**Launch day:**
- [ ] Introduction message posted
- [ ] Jordan demonstrates usage
- [ ] Team encouraged to try
- [ ] Monitor for first hour

**Week 1:**
- [ ] Daily check-ins (any issues?)
- [ ] Response time monitoring
- [ ] Accuracy checks
- [ ] Collect feedback

---

## 🚀 NEXT ACTIONS (FOR JORDAN)

**To deploy, you need to:**

1. **Confirm Slack setup approach**
   - Use existing Slack integration? (Recommended)
   - Or create dedicated bot?

2. **Provide Slack details**
   - Workspace info
   - Create #ops-copilot channel
   - Confirm Harvey's Slack access

3. **Deploy agent config**
   - Add ops-copilot agent to OpenClaw
   - Load system prompt + knowledge base
   - Connect to Slack channel

4. **Test with me first**
   - Run scenarios 1-5
   - Validate responses
   - Fix any issues

5. **Roll out to team**
   - Post introduction
   - Encourage usage
   - Collect feedback

**Time estimate:** 2-3 hours total (mostly testing)

---

## 📝 QUESTIONS FOR JORDAN

**Need answers to:**

1. Do you already have Slack integration set up in OpenClaw?
2. Should we use existing integration or create new bot?
3. When do you want to deploy? (Now or after more prep?)
4. Who should test first? (You, then Filip, then Shannon?)
5. Any concerns or requirements I'm missing?

---

**Status:** Ready for deployment pending above answers  
**Built by:** Harvey  
**Date:** 2026-02-07  
**Location:** `/projects/master-operations-manual/copilot/`
