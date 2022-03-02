const getResBtn = document.querySelector('button');
const baseURL = `https://swapi.dev/api/planets/`
const searchURL = `?search=Alderaan`


function buttonClick() {
     //console.log(`Button clicked.`)
     axios.get(baseURL + searchURL) 
        .then((res) => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
}

getResBtn.addEventListener('click',buttonClick)