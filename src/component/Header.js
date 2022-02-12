import React from "react";
import { useNavigate } from "react-router-dom";
// import env from "react-dotenv";
function Header() {
	let navigate = useNavigate();
	let handleHome = () => {
		navigate("/");
	};
	return (
		<div>
			<div>
				<h2
					style={{
						backgroundColor: " #8BC6EC",
						backgroundImage:
							"linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
						textAlign: "center",
					}}
				>
					Business Center
				</h2>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					width: "80%",
					paddingBottom: "50px",
				}}
			>
				<div>
					<button
						className="btn btn-primary"
						onClick={() => {
							handleHome();
						}}
					>
						Home
					</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
