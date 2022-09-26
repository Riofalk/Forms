import jwt from 'jsonwebtoken';
import dotenv from "dotenv";


dotenv.config()

export const verifySessionToken = (req, res, next) =>{

    const token = req.cookies.session_token;

    if(!token) return res.status(401).send("not authorized!")

    jwt.verify(token, process.env.KEY_GEN, (err, decodedToken) =>{
        if (err) return res.status(404).send("not valid!")
        req.user = decodedToken;
        req.params.id !==  undefined ? verifyUser(req,res, next) : next();
    })
}

const verifyUser = (req, res ,next) => {
    if (req.user.id === req.params.id) return next();
    return res.status(406).send('you are not authorized')
}
