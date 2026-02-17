import { useChangeTableFilter } from "../../../store/useTableStore";
import type { ApplicationStatus } from "../../../types/types";
import styles from '../styles.module.scss';


export const TableSelect = () => {

    const changeFilter = useChangeTableFilter();

    const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeFilter(e.target.value as ApplicationStatus);
    };

    return (
        <select className={styles.select} onChange={selectChange}>
            <option value="Все">Все</option>
            <option value="New">New</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
        </select>
    )
}
