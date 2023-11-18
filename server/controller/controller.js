const Userdb = require('../model/model')

// GET ALL USER
const getAllUser = async (req, res) => {
    try {
        const user = await Userdb.find({})
        res.status(200).send(user)
    } catch(error) {
        res.status(500).send({msg:error})
    }
   
       
}

// CREATE A USER
const createUser = async (req, res) => {
    try {
        // validate the req
        if(!req.body) {
            return res.status(400).send({message: 'content cannot be empty'})
            }

        // new user 
        const user = new Userdb({
             name:req.body.name,
             email:req.body.email,
             gender:req.body.gender,
             status:req.body.status
        })

        // save to DB
        const data = await user.save(user)
        res.status(200).send(data)
    } catch(error) {
        res.status(500).send({msg:error})
    }
    
        
}

// GET A USER
const getSingleUser =  async (req,res) => {
    try {
        const id = req.params.id
        const userdata = await Userdb.findById({_id:id})
        if(!userdata) {
            return res.status(404).send({msg:`no data found for id:${userdata}`})
        }
            res.status(200).send(userdata)   
    } catch(error) {
        res.status(500).send({msg:error})
    }
   
       
}

// UPDATE A USER
const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const userdata = await Userdb.findByIdAndUpdate({_id:id}, req.body , {
            useFindAndModify:false,
            new:true
        })
        if(!userdata) {
            return res.status(404).res({msg:`no user found with id:${userdata}`})
        }
        res.status(200).send(userdata)

    } catch(error) {
        res.status(500).send({msg:error})
    }
}


//DELETE A USER
const deleteUser =  async (req, res) => {
    try {
        const id = req.params.id
        const userdata = await Userdb.findByIdAndDelete({_id:id})
        if(!userdata) {
            return res.status(404).send({msg:`there is no user with id:${userdata}`})
        }
        res.status(200).send(userdata)
    } catch(error) {
        res.status(500).send({msg:error})
    }
}


module.exports = {
    getAllUser,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser

}