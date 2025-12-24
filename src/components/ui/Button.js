import styles from "@/styles/Button.module.css";

export default function Button({ children, onClick, href = '#', ...delegated }) {
  if (onClick) {
    return (
      <button onClick={onClick} type="button" className={styles.button} {...delegated}>
        {children}
      </button>
    );
  }
  return <a href={href} className={styles.button} {...delegated}>{children}</a>;
}