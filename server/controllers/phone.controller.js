
const db = require('../db')

class PhoneController {
    async createPhone(req, res) {
        try {
            const {number, country} = req.body
            const newPhone = await db.query(`INSERT INTO phone (number, country) values ($1, $2) RETURNING *`, [number, country])
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
        const id = req.params.id
        const phone = await db.query(`DELETE FROM phone where id = $1`, [id])
        res.json(phone.rows[0])
    }
}

module.exports = new PhoneController()