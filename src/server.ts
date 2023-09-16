import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'

import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoutes } from './routes/upload-video'
import { createTranscriptionRoutes } from './routes/create-transcription'
import { generateAICompletionRoutes } from './routes/generate-ai-completion'

const app = fastify()

app.register(fastifyCors, {
  origin: '*', // em produção, substituir o * pela url do front-end
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoutes)
app.register(createTranscriptionRoutes)
app.register(generateAICompletionRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running...')
})