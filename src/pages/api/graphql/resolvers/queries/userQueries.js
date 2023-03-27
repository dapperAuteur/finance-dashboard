import jwt from 'jsonwebtoken';
import {User} from "./../../models";

const UserQueries = {
    findUsers: async(source, args, context, info) => {
        console.log('context', context)
        // if(!context.user || !context.user.includes('admin')) return null;
        let users = [
            {
                username: 'Bob'
            },
            {
                username: 'Jake'
            }
        ]
        let count = 2
        let cursor = "cursor"
        console.log('users', users)
        return {count, cursor,users}
    },
    findUser: async(parent, args, context, info) => {

    },
    getUser: async(token) => {
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
            if (decoded) {
                console.log('decoded', decoded)
                next();
            } else {
                console.log("something when wrong");
                console.log('err', err)
            }
        })
    }
}

module.exports = UserQueries