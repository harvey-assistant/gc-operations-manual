# DEPLOY OPERATIONS CO-PILOT - QUICK START

**Time:** 15-30 minutes  
**Status:** All files ready, just needs Slack setup + config merge

---

## STEP 1: Create Slack Channel (5 min)

1. In your GrowthCommunity Slack workspace:
   - Create channel: `#ops-copilot`
   - Add members: yourself, Filip, Shannon
   - Optional: Set channel topic: "AI operations guide - ask me anything about client work!"

2. Get the channel ID:
   - Right-click the channel → View channel details
   - Scroll down, you'll see "Channel ID: C..."
   - Copy that ID (looks like: `C06S8DFNK9P`)

---

## STEP 2: Update Config (5 min)

**Option A: Manual merge (recommended)**

1. Open: `~/.openclaw/openclaw.json`

2. Find the `"agents"` section

3. Add this to `agents.list` (or create the `list` array if it doesn't exist):

```json
{
  "id": "ops-copilot",
  "name": "GC Operations Co-Pilot",
  "workspace": "/Users/clawdbot/clawd",
  "agentDir": "projects/master-operations-manual/copilot",
  "model": {
    "primary": "anthropic/claude-sonnet-4-5"
  },
  "thinking": "off"
}
```

4. Find the `"channels"` → `"slack"` section

5. Add this to `channels.slack.channels`:

```json
"ops-copilot": {
  "enabled": true,
  "requireMention": false
}
```

6. Find or create the `"bindings"` array at the root level

7. Add this binding:

```json
{
  "agentId": "ops-copilot",
  "match": {
    "channel": "slack",
    "peer": {
      "kind": "channel",
      "id": "C06S8DFNK9P"
    }
  }
}
```

**Replace `C06S8DFNK9P` with your actual channel ID from Step 1!**

8. Save the file

**Option B: Use openclaw CLI**

```bash
# This will merge the config automatically (once we know the channel ID)
# openclaw gateway config.patch --file projects/master-operations-manual/copilot/ops-copilot-config.json
```

---

## STEP 3: Create Agent Files (5 min)

The agent needs to load the system prompt and knowledge base. Two options:

**Option A: Copy files into agent directory**

```bash
cd /Users/clawdbot/clawd/projects/master-operations-manual/copilot

# Create agent directory structure
mkdir -p ~/.openclaw/agents/ops-copilot

# Copy files
cp SYSTEM-PROMPT.md ~/.openclaw/agents/ops-copilot/
cp KNOWLEDGE-BASE.md ~/.openclaw/agents/ops-copilot/
```

**Option B: Use agentDir (simpler, already in config above)**

The config above sets `"agentDir": "projects/master-operations-manual/copilot"` which tells OpenClaw to look for:
- `SYSTEM-PROMPT.md` in that directory
- `KNOWLEDGE-BASE.md` in that directory

Since those files already exist there, **nothing else needed!**

---

## STEP 4: Restart OpenClaw (1 min)

```bash
openclaw gateway restart
```

Or via chat command: `/restart`

---

## STEP 5: Test It! (5 min)

1. Go to Slack → `#ops-copilot` channel

2. Ask a test question:
   ```
   Discovery call with accounting firm tomorrow - prep me
   ```

3. The co-pilot should respond within seconds with:
   - Type assessment (Type 1)
   - Prep checklist
   - Realize as reference client
   - Discovery sequence
   - Scripts

4. Try another:
   ```
   What's the pre-sell methodology?
   ```

5. It should explain: Reach out → Sell → Build

---

## TROUBLESHOOTING

### "Co-pilot doesn't respond"

1. Check Slack channel ID is correct in binding
2. Check agent is loaded: `/agents` command
3. Check OpenClaw logs: `tail -f ~/.openclaw/logs/latest.log`

### "Response is wrong/generic"

1. Verify SYSTEM-PROMPT.md loaded correctly
2. Verify KNOWLEDGE-BASE.md loaded correctly
3. Check file paths in config match reality

### "Can't find files"

1. Check agentDir path is correct: `/Users/clawdbot/clawd/projects/master-operations-manual/copilot`
2. Verify files exist:
   ```bash
   ls -la /Users/clawdbot/clawd/projects/master-operations-manual/copilot/*.md
   ```

---

## WHAT'S NEXT?

Once deployed and tested:

1. **Run test scenarios** (see TEST-SCENARIOS.md)
   - Discovery call prep (Type 1 & 2)
   - Mid-process help
   - Emergency scenarios

2. **Team validation**
   - Filip tests with real scenario
   - Shannon tests with real scenario
   - Collect feedback

3. **Roll out to team**
   - Post introduction message (see USAGE-GUIDE.md)
   - Pin usage guide in channel
   - Encourage usage

4. **Monitor & iterate**
   - Track usage patterns
   - Fix any issues immediately
   - Refine based on feedback

---

## FILES REFERENCE

All files in: `/Users/clawdbot/clawd/projects/master-operations-manual/copilot/`

- `README.md` - Project summary
- `AGENT-DEFINITION.md` - What the co-pilot is
- `SYSTEM-PROMPT.md` - AI instructions
- `KNOWLEDGE-BASE.md` - All 6 playbooks (85KB)
- `USAGE-GUIDE.md` - Team documentation
- `TEST-SCENARIOS.md` - Validation tests
- `DEPLOYMENT-GUIDE.md` - Detailed deployment docs
- `DEPLOY.md` - This file (quick start)
- `ops-copilot-config.json` - Config snippet

---

**Questions? Read DEPLOYMENT-GUIDE.md for the detailed version.**

**Ready to deploy? Start with Step 1!**
