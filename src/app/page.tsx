import styles from '../styles/rwd.module.scss';

const { wrapperHome, wrapperHomeTitle } = styles;

export default function Home() {
  return (
    <div className={wrapperHome}>
      <h1 className={wrapperHomeTitle}>Welcome Witaj Hello</h1>
    </div>
  );
}
