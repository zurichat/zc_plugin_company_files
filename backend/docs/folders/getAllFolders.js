module.exports = {
    get: {
        tags: ["Folder CRUD"],
        description: "Get All Folders", 
        operationId: "getFolders",
        parameters: [],
        responses: {
          200: {
            description: "All Floders were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Folder",
                },
              },
            },
          },
        },
      },
}