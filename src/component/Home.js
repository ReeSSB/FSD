import React, { useState, useEffect } from "react";
import env from "react-dotenv";
import axios from "axios";
import { card } from "./HomeStyle.css";
import { useNavigate } from "react-router-dom";
function Home() {
	let [business, setBusiness] = useState([]);
	let navigate = useNavigate();

	let getData = async () => {
		let res = await axios.get(env.API_URL);
		console.log(res.data); //return response with data and its prototype
		setBusiness(res.data.data); //return response with data and data is set
		console.log(res); //return response(all)
		console.log(setBusiness); //can see data of data
	};

	useEffect(() => {
		getData();
	}, []);

	let handleDelete = async (id) => {
		let confirmation = window.confirm("Do you wish to delete ?");
		if (confirmation) {
			let res = await axios.delete(`${env.API_URL}${id}`);
			if (res.data.statusCode === 200) {
				alert(res.data.message);
				getData(); //it will call data again
				// window.location.reload();//this will refresh page, its awesome
				// window.preventDefault();
			} else {
				return;
			}
		}
	};

	let handleEdit = (id) => {
		// let res = await axios.get(env.API_URL);

		navigate(`/edit/${id}`);
	};

	let handleAdd = () => {
		navigate("/create");
	};

	return (
		<div>
			<div className={card}>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Business Name</th>
							<th scope="col">Email</th>
							<th scope="col">Contact</th>
							<th scope="col">Address</th>
							<th scope="col">City</th>
							<th scope="col">State</th>
							<th scope="col">Pincode</th>
							<th scope="col" colspan="2">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{business.map((e, i) => (
							<tr key={e._id}>
								<td>{i + 1}</td>
								<td>{e.businessName}</td>
								<td>{e.email}</td>
								<td>{e.mobile}</td>
								<td>{e.address}</td>
								<td>{e.city}</td>
								<td>{e.state}</td>
								<td>{e.pincode}</td>
								<td>
									<button
										className="btn btn-primary"
										onClick={() =>
											handleEdit(`${e._id}`)
										}
									>
										Edit
									</button>
								</td>
								<td>
									<button
										className="btn btn-danger"
										onClick={() =>
											handleDelete(e._id)
										}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
						<td>
							<button
								className="btn btn-primary"
								onClick={() => handleAdd()}
							>
								Add Business
							</button>
						</td>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Home;
