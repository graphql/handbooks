import type { JSX, ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <Heading as="h2" className="hero__subtitle">
          Community-maintained documentation and guides for GraphQL Foundation
          processes and programs.
        </Heading>
      </div>
    </header>
  );
}

function Handbook(props: {
  title: string;
  url: string;
  linkText?: string;
  children: JSX.Element;
}) {
  const { title, url, linkText, children } = props;
  return (
    <div className={styles.handbookCard}>
      <Heading as="h2">{title}</Heading>
      {children}
      <div className={styles.flexSpace} />
      <p className={styles.handbookLinkContainer}>
        <Link className="button button--secondary button--lg" to={url}>
          {linkText ?? `${title} Handbook`}
        </Link>
      </p>
    </div>
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
              <Handbook title="Working Groups" url="/wg">
                <p>
                  The GraphQL Working Groups are the primary way advancements
                  are made on the GraphQL specification and related Foundation
                  projects. Find out more about attending and running working
                  groups.
                </p>
              </Handbook>
              <Handbook
                title="GraphQL Locals"
                url="/locals"
                linkText="Locals Handbook"
              >
                <p>
                  Local GraphQL communities can get support from the GraphQL
                  Foundation to help promote and run their events under the
                  GraphQL Locals Initiative.
                </p>
              </Handbook>
              <Handbook
                title="GraphQL Ambassadors"
                url="/ambassadors"
                linkText="Ambassadors Handbook"
              >
                <p>
                  GraphQL Ambassadors are trusted go-to community leaders driven
                  by a passion for GraphQL projects and strive to nurture the
                  growing GraphQL community through collaboration, education and
                  outreach.
                </p>
              </Handbook>
              <Handbook
                title="Social Channels & Social Media"
                url="/social-media"
                linkText="Socials Handbook"
              >
                <p>
                  GraphQL has its own Discord server, YouTube channels and
                  Social Media accounts. These are run by volunteer teams of
                  moderators and social media teams, guided by this handbook.
                </p>
              </Handbook>
              <Handbook
                title="GraphQL Grants"
                url="/grants"
                linkText="Grants Handbook"
              >
                <p>
                  Funded by the GraphQL Foundation and administered by the
                  GraphQL Technical Steering Committee (TSC), the goal of the
                  Grants Program is to provide financial support and incentives
                  for key technical and community initiatives within the GraphQL
                  Foundation’s projects.
                </p>
              </Handbook>
              <Handbook
                title="Technical Steering Committee"
                url="/tsc"
                linkText="TSC Handbook"
              >
                <p>
                  The GraphQL TSC are responsible for all technical oversight of
                  the open source projects. In particular, the TSC is
                  responsible for approving official GraphQL specification
                  releases and coordinating between projects.
                </p>
              </Handbook>
              <Handbook
                title="Contributing to GraphQL"
                url="/contributors"
                linkText="Contributors Handbook"
              >
                <p>
                  GraphQL projects are hosted on the GraphQL GitHub
                  organization. There are many ways to contribute to the GraphQL
                  project: through working groups, code contributions and
                  community initiatives. This handbook covers what you need to
                  know to get started contributing to the code side of things.
                </p>
              </Handbook>
            </div>
            <div className={styles.programsCard}>
              <h3>💡 Community-maintained </h3>
              <p>
                This website may have inaccuracies and missing information.
                <br />
                It is community-contributed guidance, not strict policies.
                <br /> For canonical information, please see the GraphQL
                Foundation website at{" "}
                <a href="https://graphql.org">graphql.org</a>.
              </p>
              <p>
                Looking for guidance that is not yet documented?{" "}
                <a href="https://github.com/graphql/handbooks/issues/new?template=BLANK_ISSUE">
                  Raise an issue!
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
