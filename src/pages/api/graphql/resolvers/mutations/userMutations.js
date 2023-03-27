import {User} from "./../../models";
import jwt from 'jsonwebtoken';
const UserMutations = {
    // signUp: (parent, args, context, info) => {
    //     console.log('args.input.username', args.input.username)
    //     User.create(args.input.username,args.input.password)
    //         .then(
    //             (user) => {
    //                 console.log('user', user)
    //                 let token = jwt.sign({userId: user.id},
    //                     process.env.SECRET_KEY);
    //                     res.status(200).json({
    //                         userId: user.id,
    //                         username: user.username,
    //                         userRole: user.role,
    //                         profileImageUrl: user.profileImageUrl,
    //                         token
    //                     });
    //             }
    //         ).catch((err) => {
    //             res.status(400).json(err);
    //         })
    // },
    logIn: (parent, args, context, info) => {
    }
}

module.exports = UserMutations;