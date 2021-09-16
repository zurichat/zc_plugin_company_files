exports.getInfo = {
    get: {
        tags: ["Info"],
        description: "Info Endpoint of Plug-in", 
        operationId: "getInfo",
        parameters: [],
        responses: {
          200: {
            description: "Successfully returned Information about Plug-In",
            content: {
              "application/json": {
                // schema: {
                //   $ref: "#/components/schemas/Folder",
                // },
              },
            },
          },
        },
      },
}


exports.getSidebar = {
    get: {
        tags: ["Info"],
        description: "Sidebar Endpoint of Plug-in", 
        operationId: "getSidebar",
        parameters: [],
        responses: {
          200: {
            description: "Successfully returned Sidebar Data",
            content: {
              "application/json": {
                // schema: {
                //   $ref: "#/components/schemas/Folder",
                // },
              },
            },
          },
        },
      },
}



exports.getPing = {
    get: {
        tags: ["Info"],
        description: "Ping Plug-in", 
        operationId: "getPing",
        parameters: [],
        responses: {
          200: {
            description: "Ping was Successful",
            content: {
              "application/json": {
                // schema: {
                //   $ref: "#/components/schemas/Folder",
                // },
              },
            },
          },
        },
      },
}