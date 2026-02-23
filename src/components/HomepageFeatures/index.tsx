import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tiny RAG System',
    emoji: '🧠',
    description: (
      <>
        A lightweight and efficient Retrieval-Augmented Generation (RAG) system built for modern AI applications.
      </>
    ),
  },
  {
    title: 'Easy to Integrate',
    emoji: '⚡',
    description: (
      <>
        Designed from the ground up to be easily installed and integrated into your existing developer workflows.
      </>
    ),
  },
  {
    title: 'Fully Open Source',
    emoji: '🔓',
    description: (
      <>
        Built by developers, for developers. Extend and customize AI-Kit to fit your exact project needs.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{ fontSize: '5rem' }}>
        {emoji}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}