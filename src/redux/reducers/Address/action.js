import { addressActions } from "../../constants/action-types";

export const set_address= (address)=>({
    types: addressActions.SELECT_ADDRESS,
    payload:address
})

