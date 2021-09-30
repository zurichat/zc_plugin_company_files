module.exports = {
	components: {
		schemas: {
			File: {
				type: "object",
				properties: {
					fileId: {
						type: "string",
						description: "Id of Files",
						example: "xyz",
					},
					fileName: {
						type: "string",
						description: "A name for the File",
						example: "xyz",
					},
					url: {
						type: "string",
						description:
							"A url linking to cloud bucket where the files is stored",
						example: "http://xyz.com",
					},
					ftype: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					size: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					folderId: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					cloudinaryId: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					isStarred: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					isDeleted: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					comments: {
						type: "object",
						description: "Id of the Files",
						example: "xyz",
					},
					md5Hash: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					permissions: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					isShared: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					shareToken: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					dateAdded: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					dateModified: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					lastAccessed: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
				},
			},
			roomId: {
				type: "string",
				description: "An id of a Room",
				example: "xyz",
			},
			Room: {
				type: "object",
				properties: {
					ownerId: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					receiverId: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					organisationId: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					roomId: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					roomName: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					roomType: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					iconUrl: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					pluginId: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					description: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					members: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					createdAt: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					isArchived: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					isPrivate: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
				},
			},
			RoomInput: {
				type: "object",
				properties: {
					// title: {
					// 	type: "string",
					// 	description: "Todo's title",
					// 	example: "Coding in JavaScript",
					// },
					// completed: {
					// 	type: "boolean",
					// 	description: "The status of the todo",
					// 	example: false,

					roomName: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					roomType: {
						type: "string",
						description: "Type of the Files",
						example: "inbox, group, channel, plugin",
					},
					description: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
				},
			},
			Folder: {
				type: "object",
				properties: {
					folderId: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					folderName: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					parentId: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					description: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					permissions: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					isPinned: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					dateAdded: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					dateModified: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
					lastAccessed: {
						type: "string",
						description: "Id of the Files",
						example: "xyz",
					},
				},
			},
			Error: {
				type: "object",
				properties: {
					message: {
						type: "string",
						description: "Error message",
						example: "Not found",
					},
					internal_code: {
						type: "string",
						description: "Error internal code",
						example: "Invalid parameters",
					},
				},
			},
		},
	},
};
