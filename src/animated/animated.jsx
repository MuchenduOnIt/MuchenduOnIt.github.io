import styles from './animated.module.css';

export default function animatedBackground() {
  return (
    <>
          <div className={styles.context}>
        <h1>Pure Css Animated Background</h1>
      </div>

          <div className={ styles.area}>
              <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
