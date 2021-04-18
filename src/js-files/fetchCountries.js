const BASE_URL = 'https://restcountries.eu/rest/v2/name';
function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}/${searchQuery}`)
        .then(response => {
            if (!response.ok) {
                alert('False selected')
                return
            }
           return response.json()
        }
    )
}

export default { fetchCountries };