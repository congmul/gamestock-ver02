import jwt from 'jsonwebtoken';

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

// function for our authenticated routes
export const authMiddleware = (req, res, next) => {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
        token = req.headers.authorization.split(' ').pop().trim(); // ["Bearer", "<tokenvalue>"]
    }

    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }

    // verify token and get user data out of it
    try {
        // console.log(token)
      const decoded = jwt.verify(token, secret, { maxAge: expiration });
      (req).user = (decoded).data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // send to next endpoint
    next();
}

export const signToken = ({ username, email, _id }) => {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}
