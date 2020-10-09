import React from "react";
import logo from "./logo.svg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/Input";
import HourlyCardList from "./components/HourlyCardList";
import "./App.css";
function App() {
	return (
		<div className="backgroundhe">
			<Container className="dm-container ">
				<Row className="dm-row">
					<Col md={8} className="dm-col">
						<HourlyCardList></HourlyCardList>
					</Col>
					<Col md={4} className="dm-col">
						<Input> </Input>{" "}
					</Col>{" "}
				</Row>{" "}
			</Container>
		</div>
	);
}

export default App;
