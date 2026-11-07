---
layout: post
title: "Decentralizing Authorization: A Hybrid RBAC & ABAC Engine"
date: 2026-11-07 10:00:00 +0700
categories: architecture distributed-systems
---
*Reference Implementation: [hmg-Role on GitHub](https://github.com/hyundaimotorgroup/hmg-role)*[cite: 1, 2]

Enterprise authorization systems often suffer from network latency. To solve this for Hyundai Motor Group, I engineered a hybrid RBAC and ABAC framework designed with a strict "local-first" mindset[cite: 1, 2].

By embedding the evaluation engine within the local client and utilizing AWS S3 for asynchronous policy synchronization, we eliminated network latency in the authorization path entirely[cite: 1, 2].