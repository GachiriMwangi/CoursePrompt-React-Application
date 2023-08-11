const express = require('express')
const router = express.Router() 
const AppModel = require('../../Models/applicantModel')
const bcrypt = require('bcrypt')

router.get('/Dashboard', (req, res) => {
    res.send('Posted a new user. ')
}) 

router.post('/', async(req, res) => {
const {email, password} = req.body
    const findUser = await AppModel.findOne({email})
    if(!findUser) {
    return res.status(400).json({msg: 'User already exists.'})
    }
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
const created = await AppModel.create({
    email,
    password: hashedPassword
})
if(created){
    await created.save()
    res.status(200).json(created)
    console.log(created)
}
})

module.exports = router