import CardContent from "./CardContent";
import styles from "../pages//Dashboard.module.css";

function ModuleDayView({ setModalPage }) {
  return (
    <>
      <div className={styles.moduleHeaderContainer}>
        <h1 className={styles.moduleHeader}>Tages-Statistik</h1>
      </div>
      <div className={styles.statsContainer}>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Montag"} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Dienstag"} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Mittwoch"} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Donnerstag"} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Freitag"} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Samstag"} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Sonntag"} />
        </section>
        <div className={styles.btnContainer}>
          <button
            className={styles.moduleBtn}
            onClick={() => setModalPage(true)}
          >
            Zur Wochenansicht
          </button>
        </div>
      </div>
    </>
  );
}

export default ModuleDayView;
