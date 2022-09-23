import jwt  from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


export const tokenId = (req, res) => {
    const token = req.cookies.session_token;

    if(!token) return res.status(401).send("Not authorized!")

    jwt.verify(token, process.env.KEY_GEN, (error, decodedToken) => {
        if (error) return res.status(404).send("Token is not valid")
        return res.status(201).send(decodedToken.id) 
    })
} 