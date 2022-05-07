import axios from "axios";
import {addPhoneAction, deletePhoneAction, getPhonesAction} from "../store/phoneReducer";

export const fetchPhones = () => {
    return function (dispatch) {
        axios.get('http://localhost:5000/api/phones')
            .then(res => dispatch(getPhonesAction(res.data)))
    }
}

export const addPhone = (phoneCode, phoneNumber, region) => {
    return function (dispatch) {
        axios.post('http://localhost:5000/api/phone', {code: phoneCode, number: phoneNumber, country: region})
            .then(res => dispatch(addPhoneAction(res.data)))
    }
}

export const deletePhone = (id) => {
    return function (dispatch) {
        axios.delete(`http://localhost:5000/api/delete/${id}`)
            .then(res => dispatch(deletePhoneAction(parseInt(res.data))))
    }
}