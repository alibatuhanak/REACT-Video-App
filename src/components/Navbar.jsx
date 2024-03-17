import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import SearchBar from "./SearchBar";

const Navbar = () => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			p={2}
			sx={{ height: "10vh", zIndex: 5, position: "sticky", background: "#000", top: 0, justifyContent: "space-between" }}
		>
			<Link to="/" style={{ display: "flex", alignItems: "center" }}>
				<img src={logo} alt="logo" height={45} />
			</Link>
			<SearchBar />
		</Stack>
	);
};

export default Navbar;
