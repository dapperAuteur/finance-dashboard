import { ObjectId } from "mongodb";
import clientPromise from "../../../../../lib/mongodb";
import shuffle from 'shuffle-array';

const dbCollection = "activities";
const dbName = "palabras-express-api";

export const ActivityQueries = {
    findActivities: async (_, args, context) => {
        console.log('args :>> ', args);
        let {cursor, favorite, filter, limit, description, activity_type, time, avg_speed, max_speed, avg_GCT_balance, title} = {...args};
        let val = {};
        let activities, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                activities = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                title: {$regex: `${filter}`, $options: "i"}
                            },{
                                favorite: {$regex: `{filter}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(title){
                activities = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                title: {$regex: `${title}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(favorite){
                activities = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                favorite: {$regex: `${favorite}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(description){
                activities = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                description: {$regex: `${description}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(activity_type){
                activities = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                activity_type: {$regex: `${activity_type}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(time){
                activities = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                time: {$regex: `${time}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(avg_speed){
                activities = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                avg_speed: {$regex: `${avg_speed}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(max_speed){
                activities = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                max_speed: {$regex: `${max_speed}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(avg_GCT_balance){
                activities = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                avg_GCT_balance: {$regex: `${avg_GCT_balance}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else {
                activities = await db
                    .collection(dbCollection)
                    .find({})
                    .limit(limit)
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (activities.length < limit) {
                cursor = "end";
            } else {
                cursor = activities.pop();
                cursor = cursor._id;
            }
            if (!Array.isArray(activities)) {
                let activitiesArray = [];
                activitiesArray.push(activities);
                activities = activitiesArray;
            }
            val = {
                activities, count, cursor
            }
            return val;
        } catch(e) {
            console.error(e);
        }
    },
    findActivityByID: async (_, args, context) => {
        let { _id } = { ...args };
        try {
            const client = await clientPromise;
            const activity_ObjectID = new ObjectId(_id);
            const db = client.db(dbName);
            let activity = await db
            .collection(dbCollection)
            .find({_id: activity_ObjectID})
            .next();
            return activity;
        } catch (error) {
            console.log('error :>> ', error);
        }
    },
    findRandomActivities: async (_, args, context) => {
        let {cursor, definition, filter, limit, meaning, activity} = {...args};
        let val = {};
        let activities, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                activities = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                title: {$regex: `${filter}`, $options: "i"}
                            },{
                                favorite: {$regex: `{filter}`, $options: "i"}
                            },{
                                max_speed: {$regex: `${filter}`, $options: "i"}
                            }
                        ]
                    })
                    .toArray();
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            } else {
                activities = await db
                    .collection(dbCollection)
                    .find({})
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (activities.length < limit) {
                cursor = "end";
            } else {
                cursor = activities.pop();
                cursor = cursor._id;
            }
            activities = shuffle.pick(activities, {
                picks: limit,
                copy: true
            });
            if (!Array.isArray(activities)) {
                let activitiesArray = [];
                activitiesArray.push(activities);
                activities = activitiesArray;
            }
            val = {
                activities, count, cursor
            };
            return val;
        } catch(e) {
            console.error(e);
        }
    }
};

