import { callService } from "../../../services"
import apiUrl from "../../../services/serverEndPoints";

export const SignUpService = async (action) => {
    // console.log("Hello Services SignUp", action, '\n--------', action.payload.name)
    let jsonBody =
    {
        name: action.payload.name,
        email: action.payload.email,
        contact_no: action.payload.phoneNo,
        password: action.payload.password,
        password_confirmation: action.payload.confirmPassword,
        // confirmPassword: action.payload.confirmPassword,

    }
    // console.log("@@@@@@@", jsonBody)
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', action.payload.name)
    debugger
    let result = await callService(apiUrl.register, "POST", jsonBody, action.payload.props,
        action.payload.cbError, action.payload.cbSuccess);
    // let result = await callService(apiUrl.register, "POST", jsonBody)
    // console.log("''''''''''''''", result)
    return result;
}