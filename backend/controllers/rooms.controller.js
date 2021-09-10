const DatabaseConnection = require('../utils/database.helper');

const RealTime = require('../utils/realtime.helper');
const Rooms = new DatabaseConnection('Rooms');
const appResponse = require('../utils/appResponse');
const uuid = require('uuid').v4;

exports.createRoom = async (req, res) => {

    const { body } = req;

    const response = await Rooms.create(body);

    res.send({ message: "Room created successfully!", response });

}

exports.editRoomInfo = async (req, res) => {
    const { body } = req;

    if (("users" in body)) delete body.users;

    await Rooms.update(req.params.id, body);

    const allRooms = await Rooms.fetchAll();

    const updatedRoom = allRooms.data.filter(room => {

        return room._id === req.params.id;

    })

    res.send({ message: "Room details updated!", updatedRoom })
}

exports.getAllRooms = async (req, res) => {

    let response = await Rooms.fetchAll();

    const data = response.data.filter(room => room._id !== "613a1e3f59842c7444fb0222")

    response = await RealTime.publish("all_rooms", data)

    res.status(200).send({ ...response });

}

exports.deleteRoom = async (req, res) => {

    // filter out the target room
    const response = await Rooms.delete(req.params.id)
    res.send({ message: "Room has been removed successfully!", response})

}

exports.addToRoom = async (req, res) => {

    // the info of the user to be added to a room
    const { body } = req;

    // assign a unique id to each user in the room.
    body.user_room_id = uuid()

    // fetch all the rooms available and get the target room with the provided room_id.
    let allRooms = await Rooms.fetchAll();

    // parse the room data and push the user data inside it.
    // allRooms = JSON.parse(allRooms);
    let room = allRooms.data.filter(room => room._id === req.params.id)
    let userCheck = false;


    room[0].users.forEach(user => {
        if (user.username === body.username) {
            console.log(body.username)
            userCheck = true;
        } 
    })

    if (userCheck) {
        return res.send({ message: `Oops! '${body.username}' is in the room already!`})
    }

    else {
        room[0].users.push({ ...body })
        delete room[0]._id;

        console.log(room[0])

        // send the data to the api endpoint for update.
        await Rooms.update(req.params.id, room[0]);

        allRooms = await Rooms.fetchAll();
        const updatedRoom = allRooms.data.filter(room => {

            return room._id === req.params.id;

        })

        return res.status(200).send(appResponse(null, updatedRoom, true));
    }

}

exports.removeFromRoom = async (req, res) => {
    
    // the info of the user to be added to a room
    const { body } = req;

    // fetch all the rooms available and get the target room with the provided room_id.
    let allRooms = await Rooms.fetchAll();
    const room = allRooms.data.filter(room => room._id === req.params.id)

    // parse the room data and remove the target user data from it.
    room[0].users = room[0].users.filter(user => user.user_room_id !== body.user_room_id )

    // clean up the room data
    delete room[0]._id;

    // send the data to the api endpoint for update.
    const response = await Rooms.update(req.params.id, room[0]);

    allRooms = await Rooms.fetchAll();
    const updatedRoom = allRooms.data.filter(room => {

        return room._id === req.params.id;

    })

    res.status(200).send({ message: "User has been successfully removed from the room."});

}