import { maskAccount } from "../../../hooks/useMaskAccount"

interface IProps {
    name:string;
    account:string;
}

export const ModalClientData = ({name,account}:IProps) => {

    return (
        <div>
            <h2>{name}</h2>
            <p>Счет: {maskAccount(account)}</p>
        </div>
    )
}
