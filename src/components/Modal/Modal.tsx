import { useSelectedClientValue } from "../../store/useModalStore";
import { ModalClientData } from "./ui/ModalClientData";
import { ModalRequestLimit } from "./ui/ModalRequestLimit";
import { ModalSelect } from "./ui/ModalSelect";
import { ModalButtons } from "./ui/ModalButtons";
import { useModal } from "../../hooks/useModal";

import styles from './styles.module.scss';


export const Modal = () => {
  const clientData = useSelectedClientValue();

  const {onSave,onClose,setReason,setLimit,limit,error,reason} = useModal(clientData);

  if (!clientData) return null;

  return (
    <div onClick={onClose} className={styles.overlay}>
      <section className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <ModalClientData 
          name={clientData.name} 
          account={clientData.account} 
        />
        <ModalRequestLimit 
          limit={limit} 
          setLimit={setLimit} 
          error={error} 
        />
        <ModalSelect 
          reason={reason} 
          setReason={setReason} 
          limit={limit}
        />
        <ModalButtons 
          onClose={onClose}
          onSave={onSave}
        />
      </section>
    </div>
  );
};