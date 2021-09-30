// router.put('/update/:roomId', editRoom);

module.exports = {
	put: {
		tags: ["Rooms CRUD"],
		description: "Update Room",
		operationId: "editRoom",
		parameters: [
			{
				name: "roomId",
				in: "path",
				schema: {
					$ref: "#/components/schemas/roomId",
				},
				required: true,
				description: "Id of Room to be updated",
			},
		],
		responses: {
			200: {
				description: "Room edited successfully",
			},
			404: {
				description: "Room not found",
			},

			500: {
				description: "Server error",
			},
		},
	},
};
