import { Hono } from "hono"

const app = new Hono()

app.get('/', c => {
	return c.text('hola mundo')
})

export default app