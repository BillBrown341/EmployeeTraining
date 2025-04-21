import type {ReactNode, CSSProperties } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  path:string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Build Driver',
    // path:"../../../docs/Build_Driver/00_Introduction",
    path:"/docs/Build_Driver",
    description: (
      <>
        Build your first driver!
      </>
    ),
  },
  {
    title: 'Build OSH-Node',
    // path:"../../../docs/Build_OSH_Node",
    path:"/docs/Build_OSH_Node",
    description: (
      <>
        Build your first OSH-Node
      </>
    ),
  }
];

function Feature({title, path, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Link to={`${path}/Introduction`} >
          <button className={clsx(
            'button',
            'button--lg',
            'button--outline',
            'button--secondary'
          )}>
            <h2>{title}</h2>
            <p>{description}</p>
          </button>
        </Link>

      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
