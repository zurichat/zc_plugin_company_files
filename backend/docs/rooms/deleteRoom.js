// router.delete('/delete/:roomId', deleteRoom);

module.exports = {
	delete: {
		tags: ["Rooms CRUD"],
		description: "Deleting a Room",
		operationId: "deleteRoom",
		parameters: [
			{
				name: "roomId",
				in: "path",
				schema: {
					$ref: "#/components/schemas/roomId",
				},
				required: true,
				description: "Deleting a Room",
			},
		],
		responses: {
			200: {
				description: "Room deleted successfully",
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
