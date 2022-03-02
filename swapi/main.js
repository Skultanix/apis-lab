

const getResBtn = document.querySelector('button');
const getBody = document.querySelector('body')
const baseURL = `https://swapi.dev/api/planets/`
const searchURL = `?search=Alderaan`


function buttonClick() {
     //console.log(`Button clicked.`)
     axios.get(baseURL + searchURL) 
        .then((res) => {
            const alderaanRes = res.data.results[0].residents;
            //console.log(alderaanRes)
            for(i = 0; i < alderaanRes.length; i++) {
                let resident = alderaanRes[i]
                axios.get(resident)
                    .then(res =>  {
                        const resName = res.data.name;
                        let h2 = document.createElement(`h2`)
                        let node = document.createTextNode(resName)
                        h2.appendChild(node)
                        getBody.appendChild(h2)

                    })
            }

        })
        .catch(error => {
            console.log(error)
        })
}

getResBtn.addEventListener('click',buttonClick)