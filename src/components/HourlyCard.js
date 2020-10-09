import React from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";
const HourlyCard = ({ item }) => {
	const images = {
		Rain: ["images/rain2.jpeg", "images/rains1.jpeg", "images/rain3.jpeg"],
		Clear: [
			"images/clear_sky.jpg",
			"images/clear.jpeg",
			"images/clear2.jpeg",
			"images/clear3.jpeg",
		],
		Clouds: [
			"images/clouds1.jpeg",
			"images/clouds2.jpeg",
			"images/clouds3.jpeg",
		],
	};
	let c = item.weather[0].main;
	return (
		<div>
			<Card style={{ width: "170px" }} className="dm-card">
				<Card.Img
					style={{ height: "130px" }}
					variant="top"
					src={images[c][Math.floor(Math.random() * images[c].length)]}
				/>
				<Card.Body className="dm-card-body">
					<Card.Text style={{ paddingBottom: "10px" }}>{c}</Card.Text>
				</Card.Body>
				<Card.Footer style={{ height: "25px" }} className="dm-card-footer">
					<small className="text-muted">{moment.unix(item.dt).fromNow()}</small>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default HourlyCard;
