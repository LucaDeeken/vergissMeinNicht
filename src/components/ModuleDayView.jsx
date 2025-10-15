import CardContent from "./CardContent";
import styles from "../pages//Dashboard.module.css";

function ModuleDayView({ setModalPage, object }) {
  return (
    <>
      <div className={styles.moduleHeaderContainer}>
        <h1 className={styles.moduleHeader}>Tages-Statistik</h1>
      </div>
      <div className={styles.statsContainer}>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Montag"} object = {object.days.Montag} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Dienstag"} object = {object.days.Dienstag} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Mittwoch"}object = {object.days.Mittwoch} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Donnerstag"}object = {object.days.Donnerstag} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Freitag"}object = {object.days.Freitag} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Samstag"}object = {object.days.Samstag} />
        </section>
        <section className={styles.wochenTag}>
          <CardContent weekday={"Sonntag"}object = {object.days.Sonntag} />
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
