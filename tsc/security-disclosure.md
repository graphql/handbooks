---
title: Security disclosures and the Cyber Resilience Act (CRA)
sidebar_position: 910
---

One of the TSC’s responsibilities is helping to respond to security incidents
affecting GraphQL. The EU Cyber Resilience Act (CRA) introduces new requirements
for how serious security incidents must be assessed and reported. These
reporting requirements fully come into effect on 11 December 2027.

For GraphQL, TSC members will have an important role in identifying and
classifying potential incidents in all GraphQL Foundation projects, verifying
the relevant details, and reporting qualifying incidents to the Linux Foundation
as GraphQL’s designated open-source software steward.

## Glossary

**Designated CSIRT** - "Designated Computer Security Incident Response Team" - a
body who accepts the vulnerability reports.

**ENISA** - "The European Union Authority for Cybersecurity" - a second body who
accepts the vulnerability reports.

**Legal person:** - An organization or entity recognised by law as having its
own rights and obligations. This is distinct from a **natural person**, meaning
an individual human being.

**Manufacturer** - a legal person who designs, develops or manufactures a PDE
(or has them designed, developed or manufactured), _and_ makes it available to
the EU market. For example, a commercial company.

**Open source steward** - A legal person who is _not_ a manufacturer that has
the purpose of providing support on a sustained basis, for the development of
specific PDEs. Those PDEs must qualify as free and open source software and can
be intended for commercial activity. For example, a software foundation.

**PDE** - A "Product with Digital Elements" - A software or hardware product
covered by the CRA.

## What is covered by the CRA: PDEs

The law only applies to "products with digital elements" (PDEs).

PDEs are a software or a hardware product and its remote data processing
solutions, including separate software or hardware components. For the purposes
of this guidance, GraphQL Foundation software projects such as GraphQL.js should
be treated as PDEs. At this time (September 2026), it's understood that non
software GraphQL projects such as the GraphQL Specification itself do not count
as PDEs.

Although GraphQL software projects are free and open-source and are not sold by
the GraphQL Foundation, they are intended to be used in software products and
services, including commercial ones. They therefore fall within the CRA's
provisions for free and open-source software supported by an open-source
software steward (In GraphQL's case, the steward is the Linux Foundation).

### PDE classification

Currently (September 2026), GraphQL Foundation PDEs fall within the CRA's
default product category. Important and Critical product categories are defined
separately by the CRA and may change over time. If a GraphQL Foundation project
were in future to fall within one of those categories, the TSC should flag this
to the Linux Foundation. The product's classification does not, however, change
the TSC's process for assessing and escalating potential reportable
vulnerabilities under the open-source steward regime.

| Classification                                                                                                    | Rough meaning                                                                                    | Examples today                                                                        |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| **[Important Class I](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02024R2847-20241120#anx_III)**  | Core functionality is particularly cybersecurity relevant or could have significant wider impact | Browsers, password managers, VPNs, operating systems, network management              |
| **[Important Class II](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02024R2847-20241120#anx_III)** | Higher cybersecurity risk / potentially greater negative impact                                  | Hypervisors and container runtimes, firewalls, intrusion detection/prevention         |
| **[Critical](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02024R2847-20241120#anx_IV)**            | Especially significant cybersecurity products on which critical systems/supply chains may depend | Secure hardware devices, smart-meter security gateways and smartcards/secure elements |
| **Default**                                                                                                       | Everything not falling into the categories above                                                 | Most ordinary applications/libraries                                                  |

## A reportable incident

A reportable incident is one which is classified as "severe".

A severe incident is one which can negatively affect availability, authenticity,
integrity or confidentiality of sensitive or important data or functions, or an
incident which can lead to introduction / execution of malicious code.

## When a vulnerability is found or reported to a GraphQL project

1. Classify incident's severity using the criteria above
1. If the incident is severe under the CRA definition contact the Linux
   Foundation nominated contact with all relevant details

The TSC should also consider the CVE process already established for open source
projects.

## What happens next

The Linux Foundation acts as the GraphQL projects' "open source steward". Under
this role, the Linux Foundation will report the incident to the nominated ENISA
and designated CSIRT. They will have the following timeline to follow:

- Within 24 hours of notification: send an early warning
- Within 72 hours of notification: send a full vulnerability notification
- Within 14 days of the incident's resolution: send a final report

## Resources

[Understanding the EU Cyber Resilience Act training](https://openssf.org/public-policy/eu-cyber-resilience-act/) -
Free training course provided by Linux Foundation and OpenSSF for decision
makers, software developers of open or closed software, and OSS stewards.

[The Cyber Resilience Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R2847) -
The official and current text of the CRA.

[Cyber Resilience Act - Implementation](https://digital-strategy.ec.europa.eu/en/factpages/cyber-resilience-act-implementation) -
An overview page published by the European Commission. Giving up to date
information on the CRA's implementation, guidance for the open source community,
essential information and an overview the progress of the Act so far.

[Resources and news roundup from OpenSSF](https://openssf.org/public-policy/eu-cyber-resilience-act/) -
OpenSSF are the Open Source Security Foundation, placed under the Linux
Foundation. OpenSSF seek to make it easier to sustainable secure the
development, maintenance, release and consumption of open source software.
