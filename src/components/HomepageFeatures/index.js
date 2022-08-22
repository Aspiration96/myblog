import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Css',
    Svg: require('@site/static/img/csswizardry.svg').default,
    description: (
      <>
        CSS 是级联样式表（Cascading Style Sheets）。它不是一门编程语言，而是一种描述式、声明式的样式表语言，用于给浏览器渲染的内容，如 html、svg 等，来添加样式的。
      </>
    ),
  },
  {
    title: 'Vue',
    Svg: require('@site/static/img/vuedotjs.svg').default,
    description: (
      <>
        Vue 是一款用于构建用户界面的 <code>JavaScript</code> 框架。它基于标准 HTML、CSS 和 <code>JavaScript</code> 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。
      </>
    ),
  },
  {
    title: 'React',
    Svg: require('@site/static/img/react.svg').default,
    description: (
      <>
         React 是一个用于构建用户界面的 <code>JavaScript</code> 库。以声明式、组件化编写UI组件，让你提高开发效率及组件复用率。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
