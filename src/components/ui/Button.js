import styles from "@/styles/Button.module.css";

export default function Button({ children, onClick, href = '#' }) {
  if (onClick) {
    return (
      <button onClick={onClick} type="button" className={styles.button}>
        {children}
      </button>
    );
  }
  return <a href={href} className={styles.button}>{children}</a>;
}