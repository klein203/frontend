import { OP_PLUS, OP_MINUS } from "./action-type"

// action creators
export const plus = (number = 1) => ({
    type: OP_PLUS,
    data: number
})

export const minus = (number = 1) => ({
    type: OP_MINUS,
    data: number
})
