import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
name: string;
description?: string;
price: number;
stock: number;
category: string;
createdAt: Date
}

const personSchema: Schema = new Schema({
name: { type: String, required: true },
description: { type: String },
price: { type: Number, required: true },
stock: { type: Number, default: 0 },
category: { type: String },
createdAt: { type: Date, default: Date.now},

});

const Product = mongoose.model<IProduct>('Product', personSchema);

export default Product;