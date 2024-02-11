export type employeeFeedback = {
    name: string;
    feedback: string;
}

export interface ServiceRequest {
    employeeName: string;
    priority: string;
    location: string;
    recipientName: string;
    cardMessage: string;
    flowerType: string;
    deliveryDateTime: string;
    status: string;
}