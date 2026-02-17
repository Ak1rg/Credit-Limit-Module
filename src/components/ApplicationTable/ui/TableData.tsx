import { filterApplications } from "../../../hooks/useApplicationFilter";
import { useDebounce } from "../../../hooks/useDebounce";
import { useSelectClient } from "../../../store/useModalStore";
import { useApplicationClients } from "../../../store/useApplicationStore";
import { useTableFilter, useTableSearch } from "../../../store/useTableStore";


export const TableData = () => {

    const filterValue = useTableFilter();
    const searchValue = useTableSearch();
    const applications = useApplicationClients();

    const debouncedSearch = useDebounce(searchValue);
    const selectClient = useSelectClient()

    const filtered = filterApplications(applications, debouncedSearch, filterValue);

    return (
        <tbody>
            {filtered.map((app) => (
                <tr key={app.id} onClick={() => selectClient(app)}>
                    <td>{app.id}</td>
                    <td>{app.name}</td>
                    <td>{app.currentLimit}</td>
                    <td>{app.requestedLimit}</td>
                    <td>{app.status}</td>
                </tr>
            ))}
        </tbody>
    )
}
