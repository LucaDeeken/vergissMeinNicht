import styles from "../pages//Dashboard.module.css";
import WeekContent from "./WeekContent";

function ModuleWeekView({ setModalPage, object }) {
  return (
    <>
      <div className={styles.moduleHeaderContainer}>
        <h1 className={styles.moduleHeader}>Wochen-Statistik</h1>
      </div>
      <div className={styles.statsContainer}>
        <WeekContent object = {object} />
        <div className={styles.btnContainer}>
          <button
            className={styles.moduleBtn}
            onClick={() => setModalPage(false)}
          >
            Zur Tagesansicht
          </button>
        </div>
      </div>
    </>
  );
}

export default ModuleWeekView;
