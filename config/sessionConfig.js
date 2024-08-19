const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = {
    secret: process.env.SESSION_SECRET || 'qwertyuiopasdfg',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    },
};
