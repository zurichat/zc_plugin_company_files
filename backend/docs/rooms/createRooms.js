module.exports = {
	post: {
		tags: ["Rooms CRUD"],
		description: "create a Room",
		operationId: "createRoom",
		parameters: [],
		requestBody: {
			content: {
				"application/json": {
					schema: {
						$ref: "#/components/schemas/RoomInput",
					},
				},
			},
		},
		responses: {
			200: {
				description: "Room created successfully",
			},
			500: {
				description: "Server error",
			},
		},
	},
};

/* in: "body",
				name: "body",
				description: "creating a room",
				required: false,
				schema: {
					$ref: "#/components/schemas/Room",
                     */
