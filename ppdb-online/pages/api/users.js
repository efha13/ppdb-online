// pages/api/users.js

import nextConnect from 'next-connect'
const middleware = (req, res, next) => {
    // Add your middleware logic here
    next()
}
const handler = nextConnect()
handler.use(middleware)
handler.get((req, res) => {
    res.status(200).json({ message: 'Hello from the API!' })
})
export default handler
