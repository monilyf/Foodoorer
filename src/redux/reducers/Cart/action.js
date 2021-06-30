import { cartAction } from "../../Constants/action-types";

export const add_itemId_cart = (val) => ({
    type: cartAction.ADD_CART,
    payload: val
})

export const add_item_details = (val) => ({
    type: cartAction.ADD_DETAILS_CART,
    payload: val,
})

export const update_existing_item_uantity = (index, product, quantity) => ({
    type: cartAction.UPDATE_EXISTING_ITEM_QUANTITY,
    index,
    product,
    quantity,
})

