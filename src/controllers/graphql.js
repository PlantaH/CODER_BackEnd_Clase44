const  graphqlHTTP =  require("express-graphql");
const  buildSchema = require("graphql");
const  {getPtosService, createPtoService, updatePtoService, deletePtoService} = require("../services/productosService.js");

const schema = buildSchema(`
    type Producto {
        id: ID!,
        timestamp: String,
        nombre: String,
        descripcion: String,
        codigo: String,
        thumbail: String,
        precio: Float,
        stock: Int
    }
    input ProductoInput {
        nombre: String,
        descripcion: String,
        codigo: String,
        thumbail: String,
        precio: Float,
        stock: Int
    }
    type Query {
        getAllProducts: [Producto],
    }
    type Mutation {
        createPtoService(productData: ProductoInput): Producto,
        updatePtoService(id: ID!, productData: ProductoInput): Producto,
        deletePtoService(id: ID!): [Producto]
    }
`)

class ControladorGraphQl {
    constructor() {
        return graphqlHTTP({
            schema: schema,
            rootValue: {
                getPtosService,
                createPtoService,
                updatePtoService,
                deletePtoService
            },
            graphiql: true
        })
    }
}

export default ControladorGraphQl