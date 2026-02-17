import { useChangeTableSearch, useTableSearch } from "../../../store/useTableStore";
import styles from '../styles.module.scss';

export const TableSearch = () => {
    const setSearch = useChangeTableSearch();
    const searchValue = useTableSearch();
    
    return (
        <input
            className={styles.search}
            placeholder="Поиск ФИО"
            value={searchValue}
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}
