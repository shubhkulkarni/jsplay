import { post } from "./services.config"

export const  compilerService = async (code,input,language) => {
    console.log(input)
    return await post("/",{code,input,language});
}

