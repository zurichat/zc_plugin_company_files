module.exports = {
    get: {
        tags: ["Files CRUD"],
        description: "Get All Files", 
        operationId: "getFiles",
        parameters: [],
        responses: {
          200: {
            description: "All Files were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/File",
                },
              },
            },
          },
        },
      },
}