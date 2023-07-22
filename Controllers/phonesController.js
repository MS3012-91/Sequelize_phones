const { response } = require('express');
const { Phone } = require('../models');



module.exports.createPhone = async (req,res,next) => {
    const { body } = req;
    try {
        const newPhone = await Phone.create(body);
        res.status(201).send('Created!');
        if (!newPhone) {
            res.status(500).send('New phone was not created');
        }
    } catch (err) {
        res.status(500).send('Server error');
        console.log('err', err)
    }
};

module.exports.getAllPhones = async (req,res,next) =>{
    const { pagination } = req;
    console.log('pagination', pagination)
    try {
        const foundPhones = await Phone.findAll({
            raw: true,
            attributes: {
                exclude:
                    ['passwordHash',
                        'createdAt',
                        'updatedAt']
            },
            order: ['id'],
            limit: pagination.limit,
            offset: pagination.offset
        });
        if (!foundPhones) {
            res.status(404).send('Sorry, phones not found');
            return
    }    
        res.status(200).send(foundPhones);
        return
    } catch (err) {
        response.status(500).send('Server error')
    }
}

module.exports.getPhone = async (req,res,next)=> {
    const { phoneId } = req.params;
    try {
        const foundPhone = await Phone.findByPk(phoneId, {
            raw: true,
            attributes: {
                exclude:
                    ['createdAt',
                    'updatedAt']
            },
        })
            console.log (foundPhone);
        if (!foundPhone) {
            res.status(404).send('I have not this phone');
            return
        }
        res.status(200).send('Ok');
        return
    } catch (err) {
        res.status(500).send('Server error');
        return
    }
};

module.exports.updatePhone = async (req,res,next) =>{
    const { phoneId } = req.params;
    const { body } = req;
    console.log('body', body)
    try {
       // const updatedPhone = await Phone.findByPk(phoneId);
        const updatePhone = await Phone.update(body, {
            where: { id: phoneId }
        });
        if (updatePhone[0]===0) {
            res.status(404).send('Phone not found');
            return
        } res.status(200).send('Phone info updated');
        return
    } catch (err) {
        response.status(500).send('Server error')
    }
};


module.exports.deletePhone = async (req,res,next) =>{
    const { phoneId }  = req.params;
    console.log (phoneId)
    try {
        const deletedPhone = await Phone.destroy({
            where: {id:phoneId}
        });
        console.log ('deletedPhine', deletedPhone)
        if (!deletedPhone) {
            res.status(404).send('Deleted phone not found');
            return
        }
        res.status(200).send('Phone was deleted')
    } catch (err) {
        res.status(500).send('Server error');
        console.log('err', err)
    }
}



