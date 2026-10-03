import jwt from 'jsonwebtoken';



let authenticateUser = (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1]

    console.log(token)
    if (!token) { /// if no token
        res.status(403).json({
            code: 403,
            message: "login required to access this content!"
        })
    }

    /// if 
    let decoded = jwt.verify(token,
        process.env.JWT_SCERET,
        (err, decode) => {
            if (err) {
                res.status(401).json({
                    code: 401,
                    message: "unauthorized user!"
                })
            }

            return decode
        }
    );

     console.log(decoded)

    //  if(!decoded){
    //     res.status(401).json({
    //         code: 401,
    //         message: "unauthorized user!"
    //     })
    //  }




    /// a,b,c

    res.send("auth middleware")


}


export { authenticateUser }