export const SET_ARRAY = "SET_ARRAY";
export const SET_ARRAY_SUCCESS = "SET_ARRAY_SUCCESS";
export const SET_ARRAY_FAIL = "SET_ARRAY_FAIL";

export const SET_SORT_METHOD = "SET_SORT_METHOD";
export const SET_SORT_METHOD_SUCCESS = "SET_SORT_METHOD_SUCCESS";
export const SET_SORT_METHOD_FAIL = "SET_SORT_METHOD_FAIL";

export interface arrayState {
    array: (string | number)[];
}

export interface sortMethodState {
    method: string;
}

interface SetArrayAction {
    type: typeof SET_ARRAY;
    payload: arrayState;
}

interface SetArrayActionSuccess {
    type: typeof SET_ARRAY_SUCCESS;
    payload: arrayState;
}

interface SetArrayActionFail {
    type: typeof SET_ARRAY_FAIL;
    payload: null;
}

interface SetSortMethod {
    type: typeof SET_SORT_METHOD;
    payload: sortMethodState;
}

interface SetSortMethodSuccess {
    type: typeof SET_SORT_METHOD;
    payload: sortMethodState;
}

interface SetSortMethodFail {
    type: typeof SET_SORT_METHOD;
    payload: null;
}

export type ArrayActionTypes =
    | SetArrayAction
    | SetArrayActionSuccess
    | SetArrayActionFail;
export type SortMethodActionTypes =
    | SetSortMethod
    | SetSortMethodSuccess
    | SetSortMethodFail;
