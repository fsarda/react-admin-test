const router = require("express").Router();

const RESOURCE_PATH = 'provider'
const provider = {}
let lastId = 1

const getAllProviders = (request, response) => {
    response.set('X-Total-Count', Object.values(provider).length)
    response.send(Object.values(provider));
}

const getProvider = (request, response) => {
    if(provider[request.params.id]){
        response.set('X-Total-Count', 1)
        response.send(provider[request.params.id]);
    }else{
        response.set('X-Total-Count', 0)
        response.status(404).end()
    }
}

const createProvider = (request, response) => {
    const id = lastId++
    const new_provider = {...request.body, id}
    provider[id] = new_provider
    response.set('X-Total-Count', 1)
    response.send(new_provider);
}

const modifyProvider = (request, response) => {

    if(provider[request.params.id]){
        provider[request.params.id] = {...provider[request.params.id], ...request.body} 
        response.set('X-Total-Count', 1)
        response.send(provider[request.params.id]);
    }else{
        response.set('X-Total-Count', 0)
        response.status(404).end()
    }
     
}

const deletProvider = (request, response) => {
    if(provider[request.params.id]){
        delete provider[request.params.id]
        response.set('X-Total-Count', 0)
        response.status(200).end();
    }else{
        response.set('X-Total-Count', 0)
        response.status(404).end()
    }
    
}

router.get("/", getAllProviders)
router.get("/:id", getProvider)
router.post("/", createProvider)
router.put("/:id", modifyProvider)
router.delete("/:id", deletProvider)

module.exports = {
    router,
    RESOURCE_PATH
}