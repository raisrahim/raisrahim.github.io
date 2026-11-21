---
layout: page
title: "Projects | Muhammad Rais Rahim"
display_title: Projects
permalink: /projects.html
description: >-
  Selected open-source software and enterprise architecture systems by Muhammad Rais Rahim across enterprise platforms, banking, fintech, insurance, and airport management.
---

A selection of open-source tools and closed-source enterprise systems I have architected and delivered over {{ site.experience_years }} years across distributed environments.

---

## Open-Source

- **[hmg-Role](https://github.com/hyundaimotorgroup/hmg-role)** — A hybrid RBAC and ABAC authorization framework engineered for local-first policy evaluation and zero-latency authorization paths using asynchronous AWS S3 synchronization.
- **[hmg-IPMap](https://github.com/hyundaimotorgroup/hmg-ipmap)** — A Valkey-backed IP geolocation data pipeline utilizing the Outbox pattern for sub-millisecond lookups while decoupling read traffic from relational databases.

---

## Enterprise Systems (Closed-Source)

### Multi-Region Enterprise Common Platform
*Hyundai AutoEver Indonesia · 2024 – Present · Multi-Region Cloud / Distributed Systems*
- Designed multi-region system architectures across APAC, EU, and NA to ensure high availability and fault-tolerant performance across global zones.
- Spearheaded end-to-end AI adoption across the SDLC, integrating AI-assisted workflows for requirements, technical specifications, test generation, and automated code reviews.

### Dynamic Financing & Risk Acceptance Engine
*ALAMI Sharia / Hijra Group · 2021 – 2024 · Spring Boot / SpEL / Modular Monolith*
- Developed a dynamic Risk Acceptance Criteria (RAC) evaluation engine using Spring Expression Language (SpEL) for real-time financing pre-screening without hardcoding business rules.
- Led enterprise integrations with regulatory and credit institutions, including Pefindo (Credit Bureau), OJK, and fintech data centers.

### AI-Powered Talent Matching Marketplace
*Connexing.io · 2022 – 2024 · Spring Cloud / Apache Kafka / EDA*
- Engineered backend microservices for an AI-powered talent marketplace to facilitate automated role-matching for enterprise clients.
- Implemented Event-Driven Architecture (EDA) using Spring Cloud and Apache Kafka for high-throughput streaming and resilient cross-timezone data distribution.

### High-Concurrency Mobile & Corporate Banking Ecosystem
*PT Bank Muamalat Indonesia · 2018 – 2021 · Microservices / National Payment Rails*
- Orchestrated the architectural transition to high-concurrency microservices for the flagship mobile banking platform ([Muamalat DIN](https://www.bankmuamalat.co.id/)).
- Directed development for [Retail Internet Banking](https://ib.muamalatbank.com/ib-app) and [Corporate Cash Management Systems (CMS)](https://cms.bankmuamalat.co.id/cms-app), prioritizing institutional remittance workflows and security hardening.
- Delivered national payment rail and statutory integrations, including SKN/RTGS national clearing modules, Ministry of Finance Sukuk investments, PLN, and Dukcapil.
- Built the web-based Branch Delivery System to streamline branch teller workflows and enhance transaction security.

---

## Earlier Systems (2011 – 2017)

- **E-Policy & Bancassurance API Platform** (*PT Tokio Marine Life Insurance Indonesia · 2016 – 2017*) — Led modernization from monoliths to Linux-hosted microservices with a unified API Gateway, multi-threaded JavaEE (Wildfly Swarm) E-Policy batching (SendGrid/NeverBounce), broker integrations ([Futuready](http://futuready.com)), a JavaFX Sales Illustration tool, and T-SQL tax/compensation pipelines.
- **Real-Time Airport Operations & RMS Suite** (*PT Xybase Indonesia · 2014 – 2016*) — Modernized the airport management suite (Spring Boot, Apache Camel, MarkLogic) with WebSocket dashboards and JSON streaming; built SOAP/JMS flight sync for Boston Logan International Airport (USA) and a Gantt-based Resource Management System for Kazan International Airport (Russia).
- **Internet Banking** (*PT PrismaLink International · 2011 – 2014*) — Maintained high-availability banking engines (Spring, Hibernate, JBPM) for Bank Nusantara Parahyangan and managed Oracle-to-PostgreSQL migrations.