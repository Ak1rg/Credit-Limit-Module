export type ApplicationStatus = "Все" |"New" | "Approved" | "Rejected";

export interface ClientApplication {
    id: string;
    name: string;
    account: string;
    currentLimit: number;
    requestedLimit: number;
    status: ApplicationStatus;
}

export interface SessionLogItem {
    id: string;
    message: string;
    date: number;
}