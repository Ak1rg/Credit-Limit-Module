interface IProps {
    reason:string;
    setReason:(reason:string) => void;
    limit:number;
}

export const ModalSelect = ({reason,setReason,limit}:IProps) => {

    const isRisk = limit > 1_000_000;

    return (
        <select
            value={reason}
            required={isRisk}
            onChange={(e) => setReason(e.target.value)}
        >
            <option value="Income">Рост дохода</option>
            <option value="Outcome">Снижение дохода</option>
            <option value="Investments">Инвестиции</option>
            {isRisk && <option value="Risk">Особый риск</option>}
        </select>
    )
}
