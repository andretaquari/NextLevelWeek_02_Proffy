
import express from 'express';
import cors from 'cors'
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333);





// Coments

// www.minhaapi.com.br - 80 é porta padrão
// localhost: 3333/users

// rotas
// http://localhost:3333/users
// http://localhost:3333/contacts  '/contacts' = recurso
// app.get = método
//GET: buscar ou litar
//POST: Criar alguma nova informação no backend
//PUT: Atualizar uma informação existente
//DELETE: Deleter uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar request.param
// Query Params: Paginacao "/users?page=2&sort=name Filtros, Ordenacao" request.query

// app.get('/', (request, response) => {

//   console.log(request.body);

//   const users = [
//     { name: 'Diego', age: 25},
//     { name: 'André', age: 29},
//   ]
//   return response.json(users) ;
// });