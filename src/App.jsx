import { useState } from "react";
import { ActivityCard } from "./components/ActivityCard/ActivityCard";
import { CenteredContent } from "./components/CenteredContent/CenteredContent";
import { Footer } from "./components/Footer/Footer";
import { UserCard } from "./components/UserCard/UserCard";
import DATA from "./JSON/data.json";
import { ActivitiesContiner } from "./components/ActivitiesContainer/ActivitiesContainer";

export function App() {
	const [timeFrame, setTimeFrame] = useState("weekly");

	return (
		<>
			<CenteredContent>
				<UserCard timeFrame={timeFrame} setter={setTimeFrame} />
				<ActivitiesContiner>
					{DATA.map((activity) => {
						return (
							<ActivityCard
								key={activity.title}
								activity={activity.title}
								currnetTime={activity.timeframes[timeFrame].current}
								previousTime={activity.timeframes[timeFrame].previous}
								timeFrame={timeFrame}
							/>
						);
					})}
				</ActivitiesContiner>
			</CenteredContent>
			<Footer />
		</>
	);
}
