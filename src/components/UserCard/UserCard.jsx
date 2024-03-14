import styles from "./UserCard.module.css";
import AVATARICON from "../../images/image-jeremy.png";
export function UserCard({ timeFrame, setter }) {
	return (
		<header>
			<section className={styles.user_info}>
				<img src={AVATARICON} alt="" />
				<div>
					<h2>Report for</h2>
					<h1>Jeremy Robson</h1>
				</div>
			</section>
			<nav>
				<button
					onClick={() => setter("daily")}
					className={timeFrame === "daily" ? `${styles.active}` : ""}>
					Daily
				</button>
				<button
					onClick={() => setter("weekly")}
					className={timeFrame === "weekly" ? `${styles.active}` : ""}>
					Weekly
				</button>
				<button
					onClick={() => setter("monthly")}
					className={timeFrame === "monthly" ? `${styles.active}` : ""}>
					Monthly
				</button>
			</nav>
		</header>
	);
}
