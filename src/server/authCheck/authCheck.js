import jwt from 'jsonwebtoken';

export const verifySessionToken = (req, res, next) =>{

    const token = req.cookies.session_token;

    if(!token) return res.status(401).send("not authorized!")

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) =>{
        if (err) return res.status(404).send("not valid!")
        req.user = decodedToken;
        verifyUser(req,res, next);
    })
}

const verifyUser = (req, res ,next) => {
    if (req.user.id === req.params.id) next();
    res.status(406).send('you are not authorized')
}
