const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PostSchema = new mongoose.Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'Users' },
    type: {
        type: String,
        enum: ['status', 'photo'],
        required: true
    },
    info: {
        type: String,
        default: () => {
            if (this.type == 'photo') {
                return null
            }
        }
    },
    caption: {
        type: String,
        default: () => {
            if (this.type == 'status') {
                return null
            }
        }
    },
    imageUrl: {
        type: String,
        default: () => {
            if (this.type == 'status') {
                return null
            }
        }
    },
    likes: [{ type: Schema.Types.ObjectId, ref:'Users' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }],
    shares: [{ type: Schema.Types.ObjectId, ref: 'Users' }],

    shareMap: [{ type: Schema.Types.ObjectId, ref:'Users' }],


},
{timestamps:true})


const Posts = mongoose.model('Posts', PostSchema)

module.exports = {
    Posts
}