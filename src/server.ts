import app from './app.ts'

// tirar comentarios depois de fazer o data source

// import { AppDataSource } from './config/data-source'

const PORT = process.env.PORT || 3000

// AppDataSource.initialize()
// .then(() => {
//     app.listen(PORT, () => {console.log(`Servidor rodando na porta ${PORT}`)})
// })
// .catch(err => console.error('Erro ao conectar no banco:', err))