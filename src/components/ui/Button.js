import styles from "@/styles/Button.module.css";

export default function Button({ children, onClick, href = '#', type, ...delegated }) {
  if (onClick || type) {
    return (
      <button onClick={onClick} type={type || "button"} className={styles.button} {...delegated}>
        {children}
      </button>
    );
  }
  return <a href={href} className={styles.button} {...delegated}>{children}</a>;
}