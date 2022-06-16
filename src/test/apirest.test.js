const request = require('supertest')('http://localhost:8080')
const expect = require('chai').expect

describe('test api rest full', ()=>{
    describe('PRODUCTOS', ()=>{
        it('GET productos deberia retornar un status 200', async ()=>{
            let response = await request.get('/api/productos')
            expect(response.status).to.eql(200)
        })
        it('GET producto existente deberia retornar un status 200', async()=>{
            let response = await request.get('/api/productos/6275949d078ec10ccb2269db')
            expect(response.status).to.eql(200)
        })
        it('GET producto inexistente deberia retornar un status 400', async()=>{
            let response = await request.get('/api/productos/1234949d078ec10ccb2269db')
            expect(response.status).to.eql(400)
        })
        it('POST con producto nuevo deberia retornar un status 200', async()=>{
            const newPto = {
                nombre: "Guitarra acustica",
                descripcion: "Guitarra acustica 6 cuerdas",
                codigo: "12",
                thumbail: "hhttp://daiammusica.com.ar/wp-content/uploads/2020/04/cort-ac200-op-con-funda-guitarra-clasica-D_NQ_NP_960773-MLA27758859654_072018-F-300x300.jpg",
                precio: "9888",
                stock: "10"
              };
            let response = await request.post('/api/productos/').send(newPto)
            expect(response.status).to.eql(200)
        })
        it('PUT modificando un producto inexistente deberia retornar un status 400', async()=>{
            const modPto = {
                nombre: "Guitarra acustica",
                descripcion: "Guitarra acustica 6 cuerdas",
                codigo: "12",
                thumbail: "http://daiammusica.com.ar/wp-content/uploads/2020/04/cort-ac200-op-con-funda-guitarra-clasica-D_NQ_NP_960773-MLA27758859654_072018-F-300x300.jpg",
                precio: "8888",
                stock: "10"
            };
            let response = await request.put('/api/productos/1234949d078ec10ccb2269db').send(modPto)
            expect(response.status).to.eql(400)

        })
/*         it('PUT modificando un producto existente deberia retornar un status 200', async()=>{
            const modPto = {
                nombre: "Guitarra acustica",
                descripcion: "Guitarra acustica 6 cuerdas",
                codigo: "12",
                thumbail: "http://daiammusica.com.ar/wp-content/uploads/2020/04/cort-ac200-op-con-funda-guitarra-clasica-D_NQ_NP_960773-MLA27758859654_072018-F-300x300.jpg",
                precio: "8888",
                stock: "10"
            };
            let response = await request.put('/api/productos/6275949d078ec10ccb2269db').send(modPto)
            expect(response.status).to.eql(200)

        })
        it('DELETE a un producto existente deberia retornar un status 200', async()=>{
            let response = await request.delete('/api/productos/6275949d078ec10ccb2269db')
            expect(response.status).to.eql(400)
        }) */
        it('DELETE a un producto inexistente deberia retornar un status 400', async()=>{
            let response = await request.delete('/api/productos/1234949d078ec10ccb2269db')
            expect(response.status).to.eql(400)
        })

    })
})