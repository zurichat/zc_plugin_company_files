// require('express-async-errors');
// const request = require('supertest');
// const app = require('../../../server');

// // cached room
// let savedRoom;

// describe('Edit Rooms Test', () => {
 
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


//   it('should edit one room', async () => {
//     const id = savedRoom.object_id;
//     const room = {
//       room_name: "Updated Room",
//       room_url: "https://zuri.chat/tools"
//     };
//     const response = await request(app)
//       .put(`/api/v1/rooms/update/${id}`)
//       .send(room);

//     expect(response.statusCode).toEqual(200);
//   });

//   it('should return 404 if room is not found', async () => {
//     const id = "123456789098765";
//     const room = {
//         room_name: "Updated Room",
//         room_url: "https://zuri.chat/tools"
//     };

//     const response = await request(app)
//       .put(`/api/v1/rooms/update/${id}`)
//       .send(room);

//     expect(response.statusCode).toEqual(404);
//   });

//   it('should add user to room', async () => {
//     const roomId = savedRoom.object_id;
//     const userObj = {
//         userId: "614a246d0cd11aeb2c93c927" // OscarE valid zuri id 
//     }

//     const response = await request(app)
//       .put(`/api/v1/rooms/add/${roomId}`)
//       .send(userObj);

//     expect(response.statusCode).toEqual(200);
//   });

//    it('should return 400 if user id is invlaid', async () => {
//     const roomId = savedRoom.object_id;
//     const userObj = {
//         userId: "614a246d0cd11aeb2c93c92g" // invalid zuri id 
//     }

//     const response = await request(app)
//       .put(`/api/v1/rooms/add/${roomId}`)
//       .send(userObj);

//     expect(response.statusCode).toEqual(400);
//   });
// });