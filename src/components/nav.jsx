import styles from './nav.module.css';

export default function Navbar() {
  return (
    <>
      <div className="navBar">
              <ul className={ styles.items}>
          <li>Home</li>
          <li>Resume</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </div>
    </>
  );
}
