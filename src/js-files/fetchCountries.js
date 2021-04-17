const BASE_URL = 'https://restcountries.eu/rest/v2/name';
function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}/${searchQuery}`)
        .then(response => {
            // if (!ok) {
            //     return alert('Error')
            // }
           return response.json()
        }
        )
}

export default { fetchCountries };