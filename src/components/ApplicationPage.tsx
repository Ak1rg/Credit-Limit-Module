import { useEffect } from "react";
import { useApplicationsStore } from "../store/useApplicationStore";
import { fetchApplications } from "../api/api";
import { ApplicationsTable } from "./ApplicationTable/ApplicationTable";
import { SessionLog } from "./Logs/SessionLog";
import { Modal } from "./Modal/Modal";
import { useSelectedClientValue } from "../store/useModalStore";

export const ApplicationsPage = () => {
    const { setApplications, setLoading, setError, loading, error } = useApplicationsStore();
    const selectedClient = useSelectedClientValue();

    useEffect(() => {
        setLoading(true);

        fetchApplications()
        .then(setApplications)
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, [setApplications, setLoading]);

    if (loading) return <p className="center">Загрузка...</p>;

    if (error) return <p className="center">Ошибка загрузки данных: {error}</p>;

    return (
        <>
            <ApplicationsTable />
            <SessionLog/>

            {selectedClient && <Modal/>}
        </>
    );
};