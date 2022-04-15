import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ConsoleSchema = new Schema(
    {
        name: { type: String, required: true },
        maker: { type: String, required: true },
        price: { type: Number, required: true },
        imgUrl: { type: String, required: true },
        creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

ConsoleSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Profile',
    justOne: true
})