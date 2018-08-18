const request = require('supertest');
const {Genre} = require('../../models/genre');

let server; 

describe('/API/Genres', () =>{
    beforeEach(()=>{
       server = require('../../index');
    });

    afterEach(async ()=>{
        server.close();
        await Genre.remove({});
    });

    describe('GET /', ()=>{
        it('should return all genres', async () =>{
            await Genre.collection.insertMany([
                {name: 'gener1'},
                {name: 'gener2'}
            ]);

            const response = await request(server).get('/api/genres');
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(2);
        });
    });
});