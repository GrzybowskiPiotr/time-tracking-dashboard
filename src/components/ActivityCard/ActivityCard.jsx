import styles from "./ActivityCard.module.css";
import CARDMENU from "../../images/icon-ellipsis.svg";
import { ActivityToColor } from "../../constans/ActivityToColor";
import { ActivityToIcon } from "../../constans/ActivityToIcon";
import { TimeFrameMap } from "../../constans/TimeFrameMap";
export function ActivityCard({
	activity,
	currnetTime,
	timeFrame,
	previousTime,
}) {
	const background = {
		backgroundColor: `var(${ActivityToColor[activity]})`,
	};

	return (
		<>
			<div className={styles.card}>
				<div className={styles.top_fill} style={background}></div>
				<img src={ActivityToIcon[activity]} alt="" />
				<div className={styles.activity_details}>
					<div>
						<h2>{activity}</h2>
						<p>{currnetTime}hrs</p>
					</div>
					<div className={styles.timeFrame}>
						<img src={CARDMENU} alt="card menu" />
						<p>
							{TimeFrameMap[timeFrame]} -{previousTime}hrs
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
