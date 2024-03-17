import React, { useState } from "react";
import { categories } from "../utils/constants";
import { Stack } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SideBar = ({ setSelectedCategory, selectedCategory }) => {
	return (
		<Stack direction="row" sx={{ overflowY: "auto", height: { sx: "auto", md: "90%" }, flexDirection: { md: "column" } }}>
			{categories.map((category, index) => (
				<button
					onClick={() => setSelectedCategory(category.name)}
					className="category-btn"
					style={{ color: "white", background: selectedCategory === category.name && "#fc1503" }}
					key={index}
				>
					<span style={{ color: selectedCategory === category.name ? "#fff" : "red", marginRight: "15px" }}>{category.icon}</span>
					<span style={{ opacity: selectedCategory === category.icon ? "1" : "0.8" }}>{category.name}</span>
				</button>
			))}
		</Stack>
	);
};

export default SideBar;
