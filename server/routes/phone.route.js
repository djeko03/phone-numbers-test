const Router = require('express');
const router = new Router()
const phoneController = require('../controllers/phone.controller')
const {check} = require('express-validator')

router.post('/phone', [
    check('number', 'Длина номера телефона должна быть от 3 до 10 цифр, без учета кода страны').isLength({min:3, max:10})
    ]
    , phoneController.createPhone)
router.get('/phones', phoneController.getPhones)
router.get('/phone/:id', phoneController.getPhone)
router.delete('/delete/:id', phoneController.deletePhone)



module.exports = router