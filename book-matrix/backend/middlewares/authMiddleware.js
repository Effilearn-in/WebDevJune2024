const jwt = require('jsonwebtoken');

const authMiddleware = (request, response, next) => {

    const token = request.header('x-auth-token');

    if (!token) {
        return response.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, "surajsahani");
        request.user = decoded;
        next();
    } catch (error) {
        response.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
