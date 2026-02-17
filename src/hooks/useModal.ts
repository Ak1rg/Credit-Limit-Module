import { useState } from "react";
import { useUpdateApplication } from "../store/useApplicationStore";
import { useAddLog, useSelectClient } from "../store/useModalStore";
import { validateLimit } from "./useLimitValidation";
import type { ClientApplication } from "../types/types";

export const useModal = (clientData: ClientApplication | null) => {
    if (!clientData) {
        throw new Error("useModal must be used with a selected client");
    }
    
    const [limit, setLimit] = useState(clientData.requestedLimit);
    const [reason, setReason] = useState(""); 
    
    const updateApplication = useUpdateApplication();
    const addLog = useAddLog();
    const setSelectedClient = useSelectClient();

    const error = validateLimit(limit);
    const isRisk = limit > 1000000;

    const onClose = () => {
        setReason("");
        setSelectedClient(null);
    }

    const onSave = () => {
        if (error || !clientData) return;

        updateApplication({ ...clientData, requestedLimit: limit });
        if (limit !== clientData.requestedLimit) {
            addLog(`Для клиента ${clientData.name} лимит изменен с ${clientData.requestedLimit} на ${limit}`);
        }
        onClose();
    };

    return {
        limit,
        setLimit,
        reason,
        setReason,
        error,
        isRisk,
        onSave,
        onClose
    };
};