import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);

	const { id } = useParams();
	console.log(channelDetail);

	useEffect(() => {
		const fetchChannelDetail = async () => {
			const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
			setChannelDetail(channelData?.items[0]);

			const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`);
			setVideos(videosData?.items);
		};
		fetchChannelDetail();
	}, [id]);

	return (
		<Box minHeight={"95vh"}>
			<Box>
				<div style={{ background: "linear-gradient(0deg, rgba(186,195,34,1) 0%, rgba(253,45,45,1) 100%)", zIndex: "10", height: "300px" }} />
				<ChannelCard channelDetail={channelDetail} marginTop="-123px" />
			</Box>
			<Box display="flex" flex="2">
				<Box sx={{ mr: { sm: "100px" } }} />
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
