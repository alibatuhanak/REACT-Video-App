import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
	if (!videos?.length) return "Loading";

	return (
		<Stack width={"100%"} direction={direction || "row"} justifyContent="flex-start" flexWrap={"wrap"} display={"flex"} gap={2}>
			{videos.map((item, index) => (
				<Box key={index}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChannelCard channelDetail={item} />}
				</Box>
			))}
		</Stack>
	);
};

export default Videos;
