import express from "express";
import cors from 'cors';
import employeeRouter from "./routes/employeeRoutes";

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', employeeRouter);

app.get('/', (req, res) => {
    res.json('hi there')
});


app.listen(3000);