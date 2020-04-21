import {
    ArrayActionTypes,
    SET_ARRAY,
    SET_ARRAY_SUCCESS,
    SET_ARRAY_FAIL,
    arrayState,
} from "../actions/types";

const initState: arrayState = {
    array: [],
};

export default (state = initState, action: ArrayActionTypes) => {
    switch (action.type) {
        case SET_ARRAY:
        case SET_ARRAY_SUCCESS:
        case SET_ARRAY_FAIL:
        default:
            return state;
    }
};
