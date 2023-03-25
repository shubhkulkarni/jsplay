import { post } from "./services.config"

export const  compilerService = async (code,input,language) => {
    return await post("/",{code,input,language});
}

