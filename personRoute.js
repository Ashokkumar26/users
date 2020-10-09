const express = require('express')
const person = require('./personSchema')
const router = express.Router()

//POST Method
router.post('/', async (req, res) => {
    try {
        const postPerson = await new person({
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            address: req.body.address,
            longitude: req.body.longitude,
            latitude: req.body.latitude

        })
        const savePerson = await postPerson.save()
        res.status(200).json(savePerson)
    }
    catch (error) {
        res.status(404).json({ 'error': error })
    }
})
//GET Method
router.get('/', async (req, res) => {
    try {
        const getPerson = await person.find()
        res.json(getPerson)
    }
    catch (error) {
        res.json({ 'error': error })
    }
})
//GET by Id
router.get('/:id', async (req, res) => {
    try {
        const getIdPerson = await person.findById(req.params.id)
        res.json(getIdPerson)
    }
    catch (error) {
        res.json({ 'error': error })
    }
})
//Update by Id
router.put('/:id', async (req, res) => {
    try {
        const updatePerson = await person.updateOne({ _id: req.params.id }, { $set: { name: req.body.name, mobile: req.body.mobile, email: req.body.email, address: req.body.address, longitude: req.body.longitude, latitude: req.body.latitude } })
        res.status(200).json(updatePerson)
    }
    catch (error) {
        res.json({ 'error': error })
    }

})
//Delete by Id
router.delete('/:id', async (req, res) => {
    try {
        const delPerson = await person.remove({ _id: req.params.id })
        res.status(200).json(delPerson)
    }
    catch (error) {
        res.json({ error: error })
    }
})
module.exports = router