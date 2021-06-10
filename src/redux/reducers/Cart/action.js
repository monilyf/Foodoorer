import { cartAction } from "../../Constants/action-types";

export const add_itemId_cart  = (val) =>({
    type:cartAction.ADD_CART,
    payload:val
})

export const add_item_details = (val) =>({
    type:cartAction.ADD_DETAILS_CART,
    payload:val,
})