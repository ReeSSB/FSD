import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import axios from "axios";
function Create() {
	let [businessName, setBusinessName] = useState("");
	let [email, setEmail] = useState("");
	let [mobile, setMobile] = useState("");
	let [address, setAddress] = useState("");
	let [city, setCity] = useState("");
	let [state, setState] = useState("");
	let [pincode, setPincode] = useState("");

	let navigate = useNavigate();

	let handleSubmit = async () => {
		let res = await axios.post(env.API_URL, {
			businessName,
			email,
			mobile,
			address,
			city,
			state,
			pincode,
		});
		if (res.data.statusCode === 200) {
			navigate("/");
		}
	};

	return (
		<div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: "50px",
				}}
			>
				<form
					style={{
						backgroundColor: "blue",
						border: "1px, solid blue",
						borderRadius: "50px;",
						width: "570px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<div
						className="form-group"
						style={{
							// width: "80%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-start",
							paddingBottom: "10px",
						}}
					>
						<label for="businessName">Business Name</label>
						<input
							type="text"
							className="form-control"
							id="businessName"
							placeholder="Enter Business Name"
							onChange={(e) => {
								setBusinessName(e.target.value);
							}}
						/>
						<label for="businessEmail">Email</label>
						<input
							type="email"
							className="form-control"
							id="businessEmail"
							placeholder="Enter Business Name"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<label for="businessMobile">Mobile</label>
						<input
							type="text"
							className="form-control"
							id="businessMobile"
							placeholder="Enter Contact number"
							onChange={(e) => {
								setMobile(e.target.value);
							}}
						/>
						<label for="businessAddress">Address</label>
						<input
							type="text"
							className="form-control"
							id="businessAddress"
							placeholder="Enter Business Address"
							onChange={(e) => {
								setAddress(e.target.value);
							}}
						/>
						<label for="businessCity">City</label>
						<input
							type="text"
							className="form-control"
							id="businessCity"
							placeholder="Enter City"
							onChange={(e) => {
								setCity(e.target.value);
							}}
						/>
						<label for="businessState">State</label>
						<input
							type="text"
							className="form-control"
							id="businessState"
							placeholder="Enter State"
							onChange={(e) => {
								setState(e.target.value);
							}}
						/>
						<label for="businessPincode">Pincode</label>
						<input
							type="number"
							className="form-control"
							id="businessPincode"
							placeholder="Enter Pincode"
							onChange={(e) => {
								setPincode(e.target.value);
							}}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary"
						onClick={() => handleSubmit()}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Create;
