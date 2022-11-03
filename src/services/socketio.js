const { Server } = require("socket.io");
const User = require("../models/User");

class SocketIOServer {
    getIO() {
        return this.io
    }

    start(httpServer) {
        this.io = new Server(httpServer, {
            cors: {
                origin: '*',
                methods: ['GET', 'POST'],
            },
        })
        this.io.on('connection', async (socket) => {
            const query = socket.handshake.query
            try {
                if (query.token) {
                    const user = await User.findWithToken(query.token)
                    if (user) {
                        // user.$query().patch({
                        //     lastActivedAt: new Date(),
                        // })
                        console.log(`SocketIO: User with Id: ${user.id} conected`)
                        // this.user = user
                        // socket.user = user
                        socket.join(user.id.toString())
                    }
                } else {
                    console.log('SocketIO: a guest user conected');
                }
            } catch (error) {
                console.log(error);
            }

            socket.on("disconnect", () => {
                console.log('one user left');
            });
        });
    }

}

module.exports = new SocketIOServer()