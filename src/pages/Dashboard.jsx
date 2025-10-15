import styles from "./Dashboard.module.css";
import Card from "../components/Card";
import Modal from "../components/Modal";
import ModuleDayView from "../components/ModuleDayView";
import ModuleWeekView from "../components/ModuleWeekView";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Dashboard() {
  //States
  let [cardObjectList, setObjectList] = useState([]);
  const [openModal, setModalOpen] = useState(false);
  const [modalPage, setModalPage] = useState(true);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedObject, setSelectedObject] = useState(null);

    

  
for (let loop = 39; loop < 42; loop++) {
 useEffect(() => {
  fetch(`http://192.168.137.147:8000/api/weekly-stats?y=2025&w=${loop}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Parsed JSON response:", data);
        setObjectList(prev => [...prev,
      {
        id: crypto.randomUUID(),
        week: `KW ${loop}`,
        insgesamt: {
          rausgegangen: data.totals.house_left.toFixed(0),
          vergessRate: (data.totals.forget_rate*100).toFixed(2),
          avgLuftfeuchtigkeit: data.totals.average_humidity.toFixed(2),
          avgTemperatur: data.totals.average_temperature.toFixed(2),
        },
        days: {
          Montag: {
            rausgegangen: data.week_days.monday.item_stats["forgotten"]+data.week_days.monday.item_stats["taken"],
            wetter: { Temperatur: ((data.week_days.monday.weather["8-16h_temperature"]+ data.week_days.monday.weather["16-24h_temperature"] + data.week_days.monday.weather["0-8h_temperature"])/3).toFixed(2) },
            luftfeuchtigkeit: { Luftfeuchtigkeit: ((data.week_days.monday.weather["8-16h_humidity"] + data.week_days.monday.weather["16-24h_humidity"]+data.week_days.monday.weather["0-8h_humidity"])/3).toFixed(2) },
            jacke: { Tag: data.week_days.monday.weather["8-26h_jacket_needed"], Abend: data.week_days.monday.weather["16-24h_jacket_needed"] , Nacht: data.week_days.monday.weather["0-8h_jacket_needed"] },
            gegenstaende: { vergessen: data.week_days.monday.item_stats["forgotten"], nichtVergessen: data.week_days.monday.item_stats["taken"], vergessQuote: data.week_days.monday.item_stats["forget_rate"] },
          },
          Dienstag: {
            rausgegangen: data.week_days.tuesday.item_stats["forgotten"]+data.week_days.tuesday.item_stats["taken"],
            wetter: { Temperatur: ((data.week_days.tuesday.weather["8-16h_temperature"]+ data.week_days.tuesday.weather["16-24h_temperature"] + data.week_days.tuesday.weather["0-8h_temperature"])/3).toFixed(2) },
            luftfeuchtigkeit: { Luftfeuchtigkeit: ((data.week_days.tuesday.weather["8-16h_humidity"] + data.week_days.tuesday.weather["16-24h_humidity"]+data.week_days.tuesday.weather["0-8h_humidity"])/3).toFixed(2) },
            jacke: { Tag: data.week_days.tuesday.weather["8-26h_jacket_needed"], Abend: data.week_days.tuesday.weather["16-24h_jacket_needed"] , Nacht: data.week_days.tuesday.weather["0-8h_jacket_needed"] },
            gegenstaende: { vergessen: data.week_days.tuesday.item_stats["forgotten"], nichtVergessen: data.week_days.tuesday.item_stats["taken"], vergessQuote: data.week_days.tuesday.item_stats["forget_rate"] },
          },
          Mittwoch: {
            rausgegangen: data.week_days.wednesday.item_stats["forgotten"]+data.week_days.wednesday.item_stats["taken"],
            wetter: { Temperatur: ((data.week_days.wednesday.weather["8-16h_temperature"]+ data.week_days.wednesday.weather["16-24h_temperature"] + data.week_days.wednesday.weather["0-8h_temperature"])/3).toFixed(2) },
            luftfeuchtigkeit: { Luftfeuchtigkeit: ((data.week_days.wednesday.weather["8-16h_humidity"] + data.week_days.wednesday.weather["16-24h_humidity"]+data.week_days.wednesday.weather["0-8h_humidity"])/3).toFixed(2) },
            jacke: { Tag: data.week_days.wednesday.weather["8-26h_jacket_needed"], Abend: data.week_days.wednesday.weather["16-24h_jacket_needed"] , Nacht: data.week_days.wednesday.weather["0-8h_jacket_needed"] },
            gegenstaende: { vergessen: data.week_days.wednesday.item_stats["forgotten"], nichtVergessen: data.week_days.wednesday.item_stats["taken"], vergessQuote: data.week_days.wednesday.item_stats["forget_rate"] },
          },
         Donnerstag: {
            rausgegangen: data.week_days.tuesday.item_stats["forgotten"]+data.week_days.tuesday.item_stats["taken"],
            wetter: { Temperatur: ((data.week_days.tuesday.weather["8-16h_temperature"]+ data.week_days.tuesday.weather["16-24h_temperature"] + data.week_days.tuesday.weather["0-8h_temperature"])/3).toFixed(2) },
            luftfeuchtigkeit: { Luftfeuchtigkeit: ((data.week_days.tuesday.weather["8-16h_humidity"] + data.week_days.tuesday.weather["16-24h_humidity"]+data.week_days.tuesday.weather["0-8h_humidity"])/3).toFixed(2) },
            jacke: { Tag: data.week_days.tuesday.weather["8-26h_jacket_needed"], Abend: data.week_days.tuesday.weather["16-24h_jacket_needed"] , Nacht: data.week_days.tuesday.weather["0-8h_jacket_needed"] },
            gegenstaende: { vergessen: data.week_days.tuesday.item_stats["forgotten"], nichtVergessen: data.week_days.tuesday.item_stats["taken"], vergessQuote: data.week_days.tuesday.item_stats["forget_rate"] },
          },
          Freitag: {
            rausgegangen: data.week_days.friday.item_stats["forgotten"]+data.week_days.friday.item_stats["taken"],
            wetter: { Temperatur: ((data.week_days.friday.weather["8-16h_temperature"]+ data.week_days.friday.weather["16-24h_temperature"] + data.week_days.friday.weather["0-8h_temperature"])/3).toFixed(2) },
            luftfeuchtigkeit: { Luftfeuchtigkeit: ((data.week_days.friday.weather["8-16h_humidity"] + data.week_days.friday.weather["16-24h_humidity"]+data.week_days.friday.weather["0-8h_humidity"])/3).toFixed(2) },
            jacke: { Tag: data.week_days.friday.weather["8-26h_jacket_needed"], Abend: data.week_days.friday.weather["16-24h_jacket_needed"] , Nacht: data.week_days.friday.weather["0-8h_jacket_needed"] },
            gegenstaende: { vergessen: data.week_days.friday.item_stats["forgotten"], nichtVergessen: data.week_days.friday.item_stats["taken"], vergessQuote: data.week_days.friday.item_stats["forget_rate"] },
          },
          Samstag: {
            rausgegangen: data.week_days.saturday.item_stats["forgotten"]+data.week_days.saturday.item_stats["taken"],
            wetter: { Temperatur: ((data.week_days.saturday.weather["8-16h_temperature"]+ data.week_days.saturday.weather["16-24h_temperature"] + data.week_days.saturday.weather["0-8h_temperature"])/3).toFixed(2) },
            luftfeuchtigkeit: { Luftfeuchtigkeit: ((data.week_days.saturday.weather["8-16h_humidity"] + data.week_days.saturday.weather["16-24h_humidity"]+data.week_days.saturday.weather["0-8h_humidity"])/3).toFixed(2) },
            jacke: { Tag: data.week_days.saturday.weather["8-26h_jacket_needed"], Abend: data.week_days.saturday.weather["16-24h_jacket_needed"] , Nacht: data.week_days.saturday.weather["0-8h_jacket_needed"] },
            gegenstaende: { vergessen: data.week_days.saturday.item_stats["forgotten"], nichtVergessen: data.week_days.saturday.item_stats["taken"], vergessQuote: data.week_days.saturday.item_stats["forget_rate"] },
          },
          Sonntag: {
            rausgegangen: data.week_days.sunday.item_stats["forgotten"]+data.week_days.sunday.item_stats["taken"],
            wetter: { Temperatur: ((data.week_days.sunday.weather["8-16h_temperature"]+ data.week_days.sunday.weather["16-24h_temperature"] + data.week_days.sunday.weather["0-8h_temperature"])/3).toFixed(2) },
            luftfeuchtigkeit: { Luftfeuchtigkeit: ((data.week_days.sunday.weather["8-16h_humidity"] + data.week_days.sunday.weather["16-24h_humidity"]+data.week_days.sunday.weather["0-8h_humidity"])/3).toFixed(2) },
            jacke: { Tag: data.week_days.sunday.weather["8-26h_jacket_needed"], Abend: data.week_days.sunday.weather["16-24h_jacket_needed"] , Nacht: data.week_days.sunday.weather["0-8h_jacket_needed"] },
            gegenstaende: { vergessen: data.week_days.sunday.item_stats["forgotten"], nichtVergessen: data.week_days.sunday.item_stats["taken"], vergessQuote: data.week_days.sunday.item_stats["forget_rate"] },
          },
        },
      },
    ]);


      setData(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Fehler beim Laden:", err);
      setLoading(false);
    });
}, []);
    
}


console.log(cardObjectList);
  //Routing
  const cardsPerPage = 8;
  const { page } = useParams();
  const navigate = useNavigate();
  const currentPage = Number(page) || 1;
  const totalPages = Math.ceil(cardObjectList.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardObjectList.slice(indexOfFirstCard, indexOfLastCard);

  //disables dashboard-scrolling when modal is open
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  //Navigates to page 1, if a number out of range was selected
  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPages) {
      navigate("/dashboard/1", { replace: true });
    }
  }, [currentPage, totalPages, navigate]);
  
  return (
    <>
      <div className={styles.cardArea} key={currentPage}>
        {currentCards.map((object) => (
          <div key={object.id} className="card">
<Card
  cardContent={object}
  onClick={() => {
    setSelectedObject(object); // hier das aktuelle setzen
    setModalOpen(true);
  }}
/>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => navigate(`/dashboard/${num}`)}
            className={
              num === currentPage ? styles.activePageButton : styles.pageButton
            }
          >
            {num}
          </button>
        ))}
      </div>
      {openModal && (
        <Modal setModalOpen={setModalOpen}>
          {" "}
          <div className={styles.moduleSection}>
{modalPage ? (
  <ModuleWeekView setModalPage={setModalPage} object={selectedObject} />
) : (
  <ModuleDayView setModalPage={setModalPage} object={selectedObject} />
)}
          </div>
        </Modal>
      )}
    </>
  );
}

export default Dashboard;
