

export const fetchAllPlanetData = async (total) => {
    var listAux = []
    for (let i = 1; i < total; i++) {
        console.log("Entra " + i)
        await fetch(`https://www.swapi.tech/api/planets/${i}`)
            .then((response) => response.json())
            .then((data => {
                console.log(data.result.uid)
                if (data.message === "ok") {
                    listAux.push(data.result.properties)
                    console.log(listAux)
                }
            }))
    }
    return listAux
}


export const fetchAllStarshipsData = async (total) => {
    var listAux = []
    let counter = 2

   do {
        console.log("Entra " + counter)
        await fetch(`https://www.swapi.tech/api/starships/${counter}`)
            .then((response) => response.json())
            .then((data => {
               
                if (data.message === "ok") {
                    listAux.push(data.result.properties)
                    console.log(listAux)
                    total--
                }
            }))
            counter ++
    }
    while (total>0)
    return listAux
}


export const fetchAllVehiclesData = async (total) => {
    var listAux = []
    for (let i = 1; i < total; i++) {
        console.log("Entra " + i)
        await fetch(`https://www.swapi.tech/api/vehicles/${i}`)
            .then((response) => response.json())
            .then((data => {
                console.log(data.result.uid)
                if (data.message === "ok") {
                    listAux.push(data.result.properties)
                    console.log(listAux)
                }
            }))
    }
    return listAux
}


export const fetchAllPeopleData = async (total) => {
    var listAux = []
    for (let i = 1; i < total; i++) {
        console.log("Entra " + i)
        await fetch(`https://www.swapi.tech/api/people/${i}`)
            .then((response) => response.json())
            .then((data => {
                console.log(data.result.uid)
                if (data.message === "ok") {
                    listAux.push(data.result.properties)
                    console.log(listAux)
                }
            }))
    }
    return listAux
}

