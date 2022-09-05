const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");

    if(!accessToken) return res.json({ message: "USER NOT LOGGED IN !!!"});
    
    try{
        const token = jwt.verify(accessToken, process.env.TOKEN_SECRET_KEY);
        const id = token.id;
        req.auth = { id }
        next();
    } catch(err) {
        const accessToken = req.header("accessToken");
        const token = verify(accessToken, process.env.TOKEN_SECRET_KEY);
        res.json({ message: token.id });
    }
}

module.exports = validateToken;