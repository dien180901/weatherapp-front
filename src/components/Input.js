import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
const Input = () => {
	const [city, setCity] = useState("");
	const dispatch = useDispatch();
	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch({ type: "WEATHER_REQUEST", payload: null });
		try {
			let url = `http://localhost:5000/?q=${city}`;
			console.log(event.target.value);
			let response = await fetch(url);
			let data = await response.json();
			// console.log(data);
			if (data.status === "fail") {
				throw "Unable to get weather information.";
			}
			dispatch({ type: "WEATHER_REQUEST_SUCCESS", payload: data.data.daily });
			// console.log(data);
		} catch (error) {
			alert("Unable to get weather information.");
			dispatch({ type: "WEATHER_REQUEST_FAIL", payload: error });
		}
	};

	return (
		<Container className="dm-container">
			<Row className="dm-row">
				<Col md={10} className="dm-input-container dm-col ">
					<div className="gradient-box">
						<Form
							className="input-form"
							onSubmit={(event) => {
								handleSubmit(event);
							}}
						>
							<Form.Group controlId="formBasicEmail">
								<Form.Label> City </Form.Label>{" "}
								<Form.Control
									type="text"
									placeholder="Enter city"
									value={city}
									onChange={(e) => setCity(e.target.value)}
								/>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>{" "}
					</div>
				</Col>{" "}
			</Row>{" "}
		</Container>
	);
};

export default Input;
