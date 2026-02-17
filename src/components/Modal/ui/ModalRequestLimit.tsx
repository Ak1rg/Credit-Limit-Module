interface IProps {
    limit: number;
    setLimit: (limit:number) => void;
    error:string|null
}

export const ModalRequestLimit = ({limit,setLimit,error}:IProps) => {
    return (
        <div>
            <input
                type="number"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
            />
            {error && <p>{error}</p>}
        </div>
    )
}
