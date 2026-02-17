import styles from '../styles.module.scss';

interface IProps {
    onSave: () => void;
    onClose: () => void;
}

export const ModalButtons = ({onSave,onClose}:IProps) => {
    return (
        <div>
            <button className={styles.btn} onClick={onSave}>Сохранить</button>
            <button className={styles.btn} onClick={onClose}>Закрыть</button>
        </div>
    )
}
