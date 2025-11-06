import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/locals/overview"
          >
            Explore the handbooks
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Operational guidance for GraphQL Foundation programs."
    >
      <HomepageHeader />
      <main>
        <section className={styles.overviewSection}>
          <div className="container">
            <div className={styles.overviewGrid}>
              <div>
                <Heading as="h2">Welcome</Heading>
                <p>
                  Community-maintained reference and guides for various GraphQL
                  Foundation processes and programs.
                </p>
              </div>
              <div className={styles.guidelinesCard}>
                <Heading as="h3">How to Use These Handbooks</Heading>
                <ul className={styles.guidelinesList}>
                  <li>
                    <strong>Start with your goal.</strong> Each page is
                    structured around the key milestones you are trying to hit
                    and the responsibilities tied to them.
                  </li>
                  <li>
                    <strong>Follow the checklists.</strong> Step-by-step lists
                    help you move quickly while staying aligned with Foundation
                    standards.
                  </li>
                  <li>
                    <strong>Share feedback.</strong> Improvements are welcome.
                    Open a pull request or reach out in the relevant working
                    group to propose updates.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.programsCard}>
              <Heading as="h3">Programs Covered</Heading>
              <div className={styles.programList}>
                <span>Locals Program</span>
                <span>Ambassadors Program</span>
                <span>Social Media Team</span>
                <span>Working Groups</span>
                <span>Technical Steering Committee (TSC)</span>
                <span>Grants Program</span>
              </div>
              <p className={styles.overviewNote}>
                Looking for guidance that is not yet documented? Let the
                Foundation staff know so we can expand these handbooks.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
