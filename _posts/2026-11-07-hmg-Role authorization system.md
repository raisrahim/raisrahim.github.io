---
layout: post
title: "Decentralizing Authorization: A Hybrid RBAC & ABAC Engine"
date: 2026-11-07 10:00:00 +0700
categories: architecture distributed-systems
description: >-
  How a hybrid RBAC and ABAC authorization framework uses local policy evaluation
  and asynchronous AWS S3 synchronization to reduce request-path latency.
---
*Reference implementation: [hmg-Role on GitHub](https://github.com/hyundaimotorgroup/hmg-role)*

Enterprise authorization systems can add network latency when each access decision depends on a remote policy service. For Hyundai Motor Group, I engineered a hybrid role-based access control (RBAC) and attribute-based access control (ABAC) framework with a local-first approach.

The framework embeds policy evaluation in the local client and uses AWS S3 for asynchronous policy synchronization. This removes the remote network call from the authorization decision path, helping keep access checks responsive while policy updates are distributed separately.

## Why combine RBAC and ABAC?

RBAC maps permissions to roles, making common access rules straightforward to manage. ABAC evaluates attributes of a user, resource, action, or context, allowing decisions to account for more specific conditions. Combining the two provides a way to use role-based rules for broad access patterns while applying attribute-based conditions where additional context matters.

## Local policy evaluation

Evaluating policies locally can reduce request-path latency and avoid making every access decision depend on a live authorization-service call. It also introduces an important design responsibility: policy updates must be synchronized so that local evaluators use the intended policy version. In this design, AWS S3 is used for asynchronous policy synchronization, keeping policy distribution separate from the decision path.

Local evaluation is not a substitute for careful policy lifecycle and security design. Systems using this approach need to consider how policies are published, updated, and validated, as well as what behavior is appropriate when a client has stale policy data or cannot synchronize.

The [hmg-Role project](https://github.com/hyundaimotorgroup/hmg-role) provides the reference implementation.