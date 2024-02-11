import express from 'express';
import serviceRequestsRouter from "./routes/serviceRequests";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use("/api/serviceRequests", serviceRequestsRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});