import axios from 'axios'

const token = '61c5f9dd2a10497373373801b47bc1c2'

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export default client
