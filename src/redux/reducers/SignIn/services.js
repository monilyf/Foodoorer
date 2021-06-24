import { callService } from "../../../services";
import apiUrl from "../../../services/serverEndPoints";

export const loginService = async (action) => {
    console.log("Hello Services")
    // console.log("***************", action.payload)
    let jsonBody =
    {
        email: action.payload.param.email,
        password: action.payload.param.password
    }
    console.log("json------------", jsonBody)

    // debugger
    let result = await callService(apiUrl.login, "POST", jsonBody, action.payload.props,
        action.payload.cbError, action.payload.cbSuccess);
    console.log("result------------", result)
    debugger
    return result;
    debugger
}