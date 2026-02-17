import styles from './styles.module.scss';
import { TableData } from './ui/TableData';
import { TableHeaders } from './ui/TableHeaders';
import { TableSearch } from './ui/TableSearch';
import { TableSelect } from './ui/TableSelect';


export const ApplicationsTable = () => {
  return (
    <section className={styles.section}>
      <TableSearch/>
      <TableSelect/>

      <table>
        <TableHeaders />
        <TableData/>
      </table>
    </section>
  );
};