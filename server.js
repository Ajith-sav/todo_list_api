const express = require("express")
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const authRouters = require("./routes/authRouter")
const todoRouters = require("./routes/todoRouter")
const swaggerDocs = require('./config/swagger')
const cors = require('cors')
const session = require("express-session")
// const sessionConfig = require("./config/sessionConfig")

dotenv.config()
connectDB()
const corsOptions = {
    origin: 'http://http://localhost:3000/api-docs',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

const app = express();
// app.use(cors())
app.use(cors(corsOptions));
app.use(express.json())

// app.use(session(sessionConfig))

swaggerDocs(app);

app.use('/api/auth', authRouters)
app.use('/api/todos', todoRouters)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))