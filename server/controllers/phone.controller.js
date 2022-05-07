const db = require('../db')
const { validationResult } = require('express-validator')

class PhoneController {
    async createPhone(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Ошибка при отправке', errors})
            }
            const {code, number, country} = req.body
            const newPhone = await db.query(`INSERT INTO phone (code, number, country) values ($1, $2, $3) RETURNING *`, [code , number, country])
            res.json(newPhone.rows[0])
        } catch (e) {
            console.log(e)
        }
    }
    async getPhones(req, res) {
        try {
            const phones = await db.query('SELECT * FROM phone')
            res.json(phones.rows)
        } catch (e) {
            console.log(e)
        }
    }
    async getPhone(req, res) {
        try {
            const id = req.params.id
            const phone = await db.query(`SELECT * FROM phone where id = $1`, [id])
            res.json(phone.rows[0])
        } catch (e) {
            console.log(e)
        }
    }
    async deletePhone(req, res) {
        try {
            const id = req.params.id
            await db.query(`DELETE FROM phone where id = $1`, [id])
            res.json(id)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new PhoneController()