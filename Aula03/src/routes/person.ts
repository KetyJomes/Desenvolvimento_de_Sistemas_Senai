import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();
const people: object[] = [];

router
    .post('/registrar',(req: Request,res: Response) =>{
        const{name, lastname} = req.body
        console.log(name,lastname)
    })
//....

export default router;