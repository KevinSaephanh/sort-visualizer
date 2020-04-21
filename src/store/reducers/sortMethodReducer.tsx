import {
    SortMethodActionTypes,
    SET_SORT_METHOD,
    SET_SORT_METHOD_SUCCESS,
    SET_SORT_METHOD_FAIL,
    sortMethodState,
} from "../actions/types";

const initState: sortMethodState = {
    method: "",
};

export default (state = initState, action: SortMethodActionTypes) => {
    switch (action.type) {
        case SET_SORT_METHOD:

        default:
            return state;
    }
};
