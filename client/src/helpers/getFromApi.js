

export const fetchAllPlanetData = async (total) => {
    var listAux = []
  var alreadyIn
  for (let i = 1; i<total ; i++) {
    console.log("Entra " + i)
        await fetch(`https://www.swapi.tech/api/planets/${i}`)
        .then((response) => response.json())
        .then((data => {
            console.log(data.result.uid)
           // alreadyIn = listAux.find(element => element.uid === data.result.uid)
            console.log(alreadyIn)
            if (data.message==="ok") {
                listAux.push(data.result.properties)
                console.log(listAux)
            }
        }))
        alreadyIn = null;
        //if (listAux.length>5){return listAux}
    }  
   
    return listAux
          //return res.results
  }

/*

export const fetchData = () => {
    return fetch(urlPlanets)
          .then((response) => response.json())
          .then((data) => {setPlanets(data.results);
          console.log(data.results)});
  }

*/