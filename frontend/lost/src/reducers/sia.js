import TYPES from '../types/index'
const INITIAL_STATE = {
    annos: {},
    selectedAnno: undefined,
    keyUp: undefined,
    keyDown: undefined
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TYPES.GET_SIA_ANNOS:
            return {
                ...state,
                annos: action.payload
            }
        case TYPES.SIA_SELECT_ANNO:
            return {
                ...state,
                selectedAnno: action.payload.annoId
            }
        case TYPES.SIA_KEY_DOWN:
            return {
                ...state,
                keyDown: action.payload.key,
                keyUp: undefined
            }
        case TYPES.SIA_KEY_UP:
            return {
                ...state,
                keyUp: action.payload.key,
                keyDown: undefined
            }
        default:
            return state
    }
}