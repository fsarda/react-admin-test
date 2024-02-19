const router = require("express").Router();

const RESOURCE_PATH = 'client'
const clients = {}
let lastId = 1

const getAllUsers = (request, response) => {
    response.set('X-Total-Count', Object.values(clients).length)
    response.send(Object.values(clients));
}

const getUser = (request, response) => {
    if(clients[request.params.id]){
        response.set('X-Total-Count', 1)
        response.send(clients[request.params.id]);
    }else{
        response.set('X-Total-Count', 0)
        response.status(404).end()
    }
}

const createUser = (request, response) => {
    const id = lastId++
    const new_client = {...request.body, id}
    clients[id] = new_client
    response.set('X-Total-Count', 1)
    response.send(new_client);
}

const modifyUser = (request, response) => {

    if(clients[request.params.id]){
        clients[request.params.id] = {...clients[request.params.id], ...request.body} 
        response.set('X-Total-Count', 1)
        response.send(clients[request.params.id]);
    }else{
        response.set('X-Total-Count', 0)
        response.status(404).end()
    }
     
}

const deletUser = (request, response) => {
    if(clients[request.params.id]){
        delete clients[request.params.id]
        response.set('X-Total-Count', 1)
        response.status(200).end();
    }else{
        response.set('X-Total-Count', 0)
        response.status(404).end()
    }
    
}

router.get("/", getAllUsers)
router.get("/:id", getUser)
router.post("/", createUser)
router.put("/:id", modifyUser)
router.delete("/:id", deletUser)

module.exports = {
    router,
    RESOURCE_PATH
}