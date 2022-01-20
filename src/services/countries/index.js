import * as http from '../http'

export async function getCountries() {
  const response = await http.post('', {
    accion: 'loadPaises',
  })
  return response.data.map(item => dbToCountry(item))
}
