import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState({
		searchTerm: "",
		search2: "",
	});

	const navigate = useNavigate();

	const handleChange = e => {
		const { value, name } = e.target;

		setSearchTerm(prevSearchTerm => {
			return {
				...prevSearchTerm,
				[name]: value,
			};
		});
		//	setSearchTerm(prevSearchTerm => ({...prevSearchTerm, searchTerm:""}));
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (searchTerm.searchTerm) {
			navigate(`/search/${searchTerm.searchTerm}`);
			setSearchTerm({ search2: "", searchTerm: "" });
		}
	};

	return (
		<Paper
			component="form"
			sx={{
				borderRadius: 20,
				border: "1px solid #e3e3e3",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 },
			}}
			onSubmit={handleSubmit}
		>
			<input onChange={handleChange} name="searchTerm" value={searchTerm.searchTerm} className="search-bar" placeholder="Search..." />
			<IconButton type="submit" sx={{ p: "10px", color: "red" }} aria-label="search">
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
