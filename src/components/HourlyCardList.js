import React from "react";
import { useSelector } from "react-redux";
import HourlyCard from "./HourlyCard";
const HourlyCardList = () => {
	const list = useSelector((state) => state.hourly);
	const error = useSelector((state) => state.error);
	return (
		<div class="dm-card-list">
			{list && list.map((item) => <HourlyCard item={item}></HourlyCard>)}
		</div>
	);
};

export default HourlyCardList;
