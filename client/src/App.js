import './App.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPhone, deletePhone, fetchPhones} from "./asyncActions/phones";
import {Phone} from "./components/phone";

export const App = () => {
    const [region, setRegion] = useState('Россия')
    const [phoneCode, setPhoneCode] = useState('+7')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [validationError, setValidationError] = useState('')

    const dispatch = useDispatch()
    const phones = useSelector(state => state.phones)


    useEffect(() => {
        dispatch(fetchPhones())
    }, [])

    const handleChooseCountries = (e) => {
        setRegion(e.target.value)
        if(e.target.value === 'Россия') {
            setPhoneCode('+7')
        }
        else if (e.target.value === 'Азербайджан') {
            setPhoneCode('+994')
        }
        else if (e.target.value === 'Бразилия') {
            setPhoneCode('+55')
        }
    }

    const handleAddPhone = () => {
        if(phoneNumber.length >= 3) {
            dispatch(addPhone(phoneCode, phoneNumber, region))
            setPhoneNumber('')
            setValidationError('')
        }
        else {
            setValidationError('Длина номера телефона должна быть от 3 до 10 цифр, без учета кода страны')
        }
    }

    const handleDeletePhone = (id) => {
        dispatch(deletePhone(id))
    }


  return (
    <div className='app'>
        <select className='app__select' onChange={handleChooseCountries}  name="countries"  defaultValue={region}>
            <option disabled>Страна</option>
            <option value='Россия'>Россия</option>
            <option value='Азербайджан'>Азербайджан</option>
            <option value='Бразилия'>Бразилия</option>
        </select>
        <br/>

        <div className='app__input'>
            <p className='app__phone-code'>{phoneCode}</p>
            <input type="tel"  className='app__phone' maxLength={10} required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder='9526661997'/>
            <button onClick={handleAddPhone} className='app__add-btn'>Добавить</button>
        </div>
        <div className='app__error'>{validationError}</div>
        <div>
            {
                phones.length > 0 ?
                    phones.map(phone =>
                        <Phone key={phone.id} phone={phone} onClick={() => handleDeletePhone(phone.id)}/>
                    )
                    : <div>Телефонные номера отсутствуют</div>
            }
        </div>
    </div>
  );
}

