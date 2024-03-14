import styles from "./ActivitiesContainer.module.css";
export function ActivitiesContiner({ children }) {
	return <div className={styles.container}>{children}</div>;
}
