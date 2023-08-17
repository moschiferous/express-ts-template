import express, { Express } from 'express'

const app: Express = express()
const port = Number(process.env.PORT) || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`[server] listening on port ${port} ⚡`);
});