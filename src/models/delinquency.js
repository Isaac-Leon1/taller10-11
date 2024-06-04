//crear objetos
const incidentModel = {
    //crear metodos asincronos
    //create del crude
    async createIncidentModel(dataIncident){//modelo creado
        //peticion a la base de datos
        const response = await fetch('http://localhost:3000/incidents', {
            method: 'POST',//verbo
            headers: {//cabeceras tipo de contenido que responde el servidor
                'Content-Type': 'application/json'
            },
            //stringify convierte un objeto a un string
            body: JSON.stringify(dataIncident)//cuerpo

        })
        const request = await response.json()//transforma la respuesta a json
        return request
    },
    async getAllIncidentModel(){
        const response = await fetch('http://localhost:3000/incidents', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const request = await response.json()
        return request
    },
    //buscar un registro especifico mediante el id
    async getIncidentByIDModel(id){
        const response = await fetch(`http://localhost:3000/incidents/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const request = await response.json()
        return request
    },
    //actualizar se necesita saber el id y que va a actualizar
    async updateIncidentModel(id, dataIncident){//modelo creado
        //peticion a la base de datos
        const response = await fetch(`http://localhost:3000/incidents/${id}`, {
            method: 'PUT',//verbo
            headers: {//cabeceras tipo de contenido que responde el servidor
                'Content-Type': 'application/json'
            },
            //stringify convierte un objeto a un string
            body: JSON.stringify(dataIncident)//cuerpo

        })
        const request = await response.json()//transforma la respuesta a json
        return request
    },
    async deleteIncidentModel(id){//modelo creado
        //peticion a la base de datos
        await fetch(`http://localhost:3000/incidents/${id}`, {
            method: 'DELETE'
        })
        return {
            message: 'Registro eliminado'
        }
    },
}