import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GameSchema = new Schema(
    {
        name: { type: String, required: true },
        creator: { type: String, required: true },
        genre: { type: String, required: true },
        price: { type: Number, required: true },
        console: { type: String, required: true },
        description: { type: String, required: true },
        imgUrl: { type: String, required: true, default: 'https://placehold.it/200x200' },
        creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }

    },
    { timestamps: true, toJSON: { virtuals: true } }
)

GameSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Profile',
    justOne: true
})