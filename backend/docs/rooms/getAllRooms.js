module.exports = {
    get: {
        tags: ["Rooms CRUD"],
        description: "Get All Rooms", 
        operationId: "getRooms",
        parameters: [],
        responses: {
          200: {
            description: "All Rooms were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Room",
                },
              },
            },
          },
        },
      },
}