import express, { Request, Response } from "express";
import fs from 'fs';
import { ServiceRequest } from "common/src/types";
import path from 'path';

const router = express.Router();
const dataPath = path.join(__dirname, '..', 'data', 'serviceRequests.json');

const readData = (): ServiceRequest[] => {
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Failed to read data:", err);
        throw new Error("Failed to read data");
    }
};

const writeData = (data: ServiceRequest[]) => {
    try {
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error("Failed to write data:", err);
        throw new Error("Failed to write data");
    }
};

router.post("/", (req: Request, res: Response) => {
    try {
        const newRequest: ServiceRequest = req.body;
        const requests = readData();
        requests.push(newRequest);
        writeData(requests);
        res.status(200).json({ message: "Service request added successfully" });
    } catch (error) {
        console.error("Error handling POST request:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/", async (req: Request, res: Response) => {
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        const serviceRequests = JSON.parse(data);
        res.status(200).json(serviceRequests);
    } catch (error) {
        console.error("Error fetching service requests:", error);
        res.status(500).send("Internal server error");
    }
});

export default router;