import { users, delay } from '../../../config'

export default function handler(req, res) {
  //deixando a requisição mais lenta
  setTimeout(() => {
    if (req.method === 'GET') {
      res.status(200).json(users)
    } else if (req.method === 'POST') {
      res.status(200).json(req.body)
    }
  }, delay)
}