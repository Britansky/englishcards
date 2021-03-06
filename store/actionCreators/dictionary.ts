import {DictionaryActions, DictionaryAction} from "../types/types"
import {Dispatch} from "redux"
import {CardI} from "../../interfaces"


export const setDictionaryId = (id: number) => {
    return (dispatch: Dispatch<DictionaryAction>) => {
        dispatch({type: DictionaryActions.SET_PAGE, payload: id})
    }
}

export const setDictionary= (array: CardI[]) => {
    return (dispatch: Dispatch<DictionaryAction>) => {
        dispatch({type: DictionaryActions.SET_DICTIONARY, payload: array})
    }
}

export const setStateDictionary= (array: CardI[]) => {
    return (dispatch: Dispatch<DictionaryAction>) => {
        dispatch({type: DictionaryActions.SET_STATE_DICTIONARY, payload: array})
    }
}


