// import {User} from "./../../models";
import {User} from "./../../models";
import jwt from 'jsonwebtoken';

const AuthMutations = {
    signUp: (parent, args, context, info) => {
        let createNewUser = {...args.input};
        console.log('createNewUser', createNewUser)
        User.create(createNewUser).then(function (newUser) {
            console.log('newUser', newUser)
        })
        let token = jwt.sign(
            {userID: newUser.id},process.env.SECRET_KEY
        );
        return {
            ...newUser,
            token
        }
    }
}

module.exports = AuthMutations;