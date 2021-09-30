// router.get('/:roomId',getOneRoom);
module.exports = {
    get: {
      tags: ["Rooms CRUD"],
      description: "Get a room",
      operationId: "getOneRoom",
      parameters: [
        {
          name: "roomId",
          in: "path", 
          schema: {
            $ref: "#/components/schemas/roomId",
          },
          required: true,
          description: "A single room id", 
        },
      ],
      responses: {
        200: {
          description: "Room is obtained",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Room",
              },
            },
          },
        },
        404: {
          description: "Room is not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
  };