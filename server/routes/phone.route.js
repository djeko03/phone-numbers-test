const Router = require('express');
const router = new Router()
const phoneController = require('../controllers/phone.controller')

router.post('/phone', phoneController.createPhone)
router.get('/phones', phoneController.getPhones)
router.get('/phone/:id', phoneController.getPhone)
router.delete('/delete/:id', phoneController.deletePhone)



module.exports = router