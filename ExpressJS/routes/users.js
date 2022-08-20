const express = require('express')

const router = express.Router()
router.use(logger)
router.get('/', (req, res)=>{
    console.log(req.query.name)
    res.send("User List")
})

router.get('/new', (req, res)=>{
    res.render("users/new", {firstName: 'Test'})
})

router.post('/', (req, res)=> {
    const isValid = true
    if(isValid){
        users.push({ firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else{
        console.log("Error")
        res.render("users/new",{ firstName: req.body.firstName})
    }
    // console.log(req.body.firstName)
    
})

router
    .route('/:id')
    .get((req, res)=> {
        console.log(req.user)
        res.send(`Get User with ID ${req.params.id}`)
        // if(req.params.id == 5){
        //     res.send("Yeah")
        // } else {
        //     res.send("Oh No")
        // }
    })
    .put((req, res)=> {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res)=> {
        res.send(`Delete User with ID ${req.params.id}`)
    })

const users = [{name: "Zacch"}, {name: "Olu"}]
router.param("id", (req, res, next, id) =>{
    req.user = users[id]
    next()
})

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

// router.get('/:id', (req, res)=> {
//     req.params.id
//     res.send(`Get User with ID ${req.params.id}`)
//     // if(req.params.id == 5){
//     //     res.send("Yeah")
//     // } else {
//     //     res.send("Oh No")
//     // }
// })


module.exports = router