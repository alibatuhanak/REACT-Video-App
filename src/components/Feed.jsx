import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, SideBar } from "./";

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data => setVideos(data.items));
	}, [selectedCategory]);

	return (
		<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
			<Box sx={{ height: { sx: "auto", md: "90vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
				<SideBar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

				<Typography sx={{ mt: 3, color: "#fff" }} className="copyright" variant="body2">
					Copyright 2024 batuhan
				</Typography>
			</Box>
			<Box px={4} py={0.75} sx={{ overflowY: "scroll", height: "90vh", flex: 2 }} className="videos">
				<Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
					{selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
				</Typography>
				<Videos videos={videos} />
			</Box>
		</Stack>
	);
};

export default Feed;
