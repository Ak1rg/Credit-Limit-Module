import type { ClientApplication } from "../types/types";
import db from '../../public/db.json';


export const fetchApplications = (): Promise<ClientApplication[]> =>
    new Promise((resolve) => {
        setTimeout(() => resolve(db as ClientApplication[]), 1000);
    });