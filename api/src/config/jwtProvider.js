import 'dotenv';
import jwt from 'jsonwebtoken';
const SECERET_KEY=process.env.SECERET_KEY

const generateToken=(userId)=>{

    const token=jwt.sign({userId},SECERET_KEY,{ expiresIn: '48h' })
    return token;
}

const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECERET_KEY)
    return decodedToken.userId
}


export {generateToken,getUserIdFromToken};