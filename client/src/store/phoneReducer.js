const defaultState = {
    phones: []
}

const GET_PHONES = 'GET_PHONES'
const ADD_PHONE = 'ADD_PHONE'
const DELETE_PHONE = 'DELETE_PHONE'

export const phoneReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PHONES:
            return {...state, phones: action.payload}
        case ADD_PHONE:
            return {...state, phones: [...state.phones , action.payload]}
        case DELETE_PHONE:
            return {...state, phones: state.phones.filter(phone => phone.id !== action.payload)}
        default:
            return state
    }
}

export const getPhonesAction = (payload) => ({type: GET_PHONES, payload})
export const addPhoneAction = (payload) => ({type: ADD_PHONE, payload})
export const deletePhoneAction = (payload) => ({type: DELETE_PHONE, payload})