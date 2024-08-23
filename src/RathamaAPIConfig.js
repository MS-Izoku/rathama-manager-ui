const apiRoots = {
    "local": "https://localhost:3000",
    "development": "",
    "production": ""
}

// change the api target to one of the api-roots
const currentApiEnvironment = "local"

export const apiRoot = apiRoots[currentApiEnvironment]