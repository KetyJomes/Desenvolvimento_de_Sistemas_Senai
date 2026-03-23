import { Express } from 'express';
import express from 'express'
import person from './product.ts'
import auth from './auth.ts'


export default function (app: Express) {
    app
    .use(express.json())
    .use('/api/product', person)
    .use('/api/auth', auth)

}