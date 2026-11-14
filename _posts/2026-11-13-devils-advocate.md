---
layout: post
title: "Stress-Testing Architecture: Why We Use a Devil’s Advocate in Design Reviews"
description: "How giving engineers explicit permission to challenge design decisions helps prevent groupthink and catches production bugs early."
tags: ["software-engineering", "system-design", "leadership", "code-review"]
---

In many engineering teams, discussions often end with polite silence. A developer shares an architecture diagram during grooming, asks if anyone has feedback, and gets a room full of nods or quick "LGTM" comments.

Coming from Indonesia, I see this happen often. Culturally, people usually hesitate to challenge someone else's proposal because they don't want to seem rude, create conflict, or make their colleagues feel uncomfortable. But in software engineering, avoiding friction during the design phase usually means waking up to severe production issues at 2 AM on a weekend.

To solve this, I introduced a simple practice to our team: **The Devil’s Advocate Technique**.

## What Does It Mean?

Playing the "Devil’s Advocate" means intentionally taking a skeptical or opposing point of view during a discussion—even if you personally agree with the proposed approach.

The purpose is never to block progress or argue for the sake of arguing. The goal is to **stress-test the system before anyone writes code**. 

When someone is explicitly assigned or asked to challenge a design, disagreement stops being a personal attack. It simply becomes part of the engineering process.

## How It Looks in Practice: A Short Case Study

Here is an example when designing a high-traffic "Instant Checkout" feature.

> **The Initial Proposal:**  
> The developer proposes writing orders directly to the primary database to keep the flow fast, simple, and quick to ship.

Instead of just agreeing, team members jump in to test the idea from different angles:

### 1. The Scalability Challenge
> **Skeptic:**  
> *"Let me play devil’s advocate here. What happens if marketing runs a flash sale and 10,000 users click checkout in the exact same second? Can our primary database handle that write load without locking tables and causing downtime?"*
> 
> **Author:**  
> *"That's a fair point. Direct writes would exhaust our database connection pool quickly. We should put a message queue (like Redis or Kafka) in the middle to buffer incoming orders."*

### 2. The Failure & Resilience Challenge
> **Skeptic:**  
> *"Following up on that: what if Redis runs out of memory or restarts while thousands of messages are in queue? Does the customer transaction simply disappear?"*
> 
> **Author:**  
> *"Good catch. We cannot afford lost orders. I will add a dead-letter queue and write an emergency fallback log directly to persistent storage."*

### 3. The Over-Engineering Challenge (KISS)
> **Skeptic:**  
> *"One quick check on your proposed class structure: you added a multi-layered Factory Pattern for the payment logic. Are we expecting 10 new payment methods soon, or is this over-engineering for just two providers?"*
> 
> **Author:**  
> *"To be honest, I just wanted to implement that pattern. But since we only support two providers right now, a simple switch statement will be much easier for the team to read and maintain."*

In less than 15 minutes, the team identified a major bottleneck, protected the system against data loss, and simplified the code structure—all before opening a single Pull Request.

## Where We Use This in Our SDLC

We apply this technique at two key points in our workflow:

1. **System Architecture & RFC Reviews:**  
   We challenge core assumptions about scale, network latency, database locks, and third-party API dependencies.
2. **Code Reviews (Pull Requests):**  
   We look beyond simple syntax and styling. We ask practical questions: *"What happens if this external API times out?"* or *"Is this abstraction really needed right now?"*

## 4 Rules to Keep Discussions Healthy

To make sure this technique builds psychological safety rather than negative vibes, we follow four simple ground rules:

1. **Focus on the system, never the person:** Every question must target system reliability, trade-offs, and edge cases—not the developer's skill.
2. **Rotate the role:** Don't let the same person always be the designated skeptic. Rotating the role helps everyone practice looking for blind spots.
3. **Bring alternatives, not just complaints:** Avoid saying *"this won't work."* Instead, frame it as a trade-off: *"If we optimize for simplicity here, how much flexibility do we lose later?"*
4. **Time-box the debate:** Keep the discussion within 15 to 20 minutes so you don't get stuck in analysis paralysis. Highlight the risks, agree on the trade-offs, and move forward.

## Final Thoughts

Growing as an engineer isn't just about knowing how to write code; it is about knowing how to ask the right questions before a system breaks. 

By making the "Devil’s Advocate" a normal ritual in our workflow, our team reduced avoidable incidents and created a culture where constructive feedback is welcomed, not feared.