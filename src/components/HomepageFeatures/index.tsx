import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Goal-Oriented Guides',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Every handbook is written around outcomes—launching chapters, leading
        working groups, securing grants—so you always know the next action to
        take.
      </>
    ),
  },
  {
    title: 'Program-Specific Resources',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Access checklists, templates, and communication kits curated for Locals,
        Ambassadors, Working Groups, the TSC, and more.
      </>
    ),
  },
  {
    title: 'Connected Community',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Admonitions highlight optional content and link to adjacent programs so
        teams can collaborate without duplicating effort.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
