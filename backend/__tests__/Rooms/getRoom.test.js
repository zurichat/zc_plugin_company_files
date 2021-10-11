// require('express-async-errors');
// const request = require('supertest');
// const app = require('../../../server');

// // cached room
// let savedRoom;

// describe('Rooms Test', () => {
 
//    beforeEach(async () => {
//     // Mock a room object.
//     const room = {
//       room_name: "Test Room",
//       room_url: "https://zuri.chat/companyfiles"
//     };

    
//     const response = 
//     await request(app)
//     .post('/api/v1/rooms/create')
//     .send(room);

//     // Save mocked room document to the database and cache it.
//     savedRoom = response.body.data;
//   });

//   afterEach(async () => {
//     // Delete mock from the database.
//     await request(app)
//     .delete(`/api/v1/rooms/delete/${savedRoom.object_id}`);

//     // Delete cache.
//     savedRoom = null;
//   });

//   it('should get all rooms', async () => {
//     const response = await request(app).get(`/api/v1/rooms/all`);
   
//     expect(response.statusCode).toEqual(200);
//   });

//  it('should get one room', async () => {
//     const id = savedRoom.object_id;
//     const response = await request(app).get(`/api/v1/rooms/${id}`);
    
//     expect(response.statusCode).toEqual(200);
//   });

//   it('should return 404 if room is not found', async () => {
//     const id = "123456789098765";
//     const response = await request(app)
//       .get(`/api/v1/rooms/update/${id}`);

//     expect(response.statusCode).toEqual(404);
//   });
// });