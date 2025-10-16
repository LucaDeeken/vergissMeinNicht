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

  useEffect(() => {
  async function fetchAllWeeks() {
    try {
      const weeks = [39, 40, 41, 42]; // Liste der Wochen

      const responses = await Promise.all(
        weeks.map((week) =>
          fetch(`http://192.168.137.147:8000/api/weekly-stats?y=2025&w=${week}`)
            .then((res) => res.json())
            .then((data) => ({
              week,
              data,
            }))
        )
      );

      const newCardList = responses.map(({ week, data }) => ({
        id: crypto.randomUUID(),
        week: `KW ${week}`,
        insgesamt: {
          rausgegangen: data.totals?.house_left?.toFixed(0) ?? "",
          vergessRate: data.totals?.forget_rate
            ? (data.totals.forget_rate * 100).toFixed(2)
            : "",
          avgLuftfeuchtigkeit:
            data.totals?.average_humidity?.toFixed(2) ?? "",
          avgTemperatur:
            data.totals?.average_temperature?.toFixed(2) ?? "",
        },
        // ...
        // Kopiere hier deinen gesamten days-Block rein
        days: {
          
                Montag: {
                  rausgegangen:
                    (data.week_days?.monday?.item_stats?.forgotten ?? 0) +
                      (data.week_days?.monday?.item_stats?.taken ?? 0) || "",
                  wetter: {
                    Temperatur:
                      (
                        ((data.week_days?.monday?.weather?.[
                          "8-16h_temperature"
                        ] ?? 0) +
                          (data.week_days?.monday?.weather?.[
                            "16-24h_temperature"
                          ] ?? 0) +
                          (data.week_days?.monday?.weather?.[
                            "0-8h_temperature"
                          ] ?? 0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  luftfeuchtigkeit: {
                    Luftfeuchtigkeit:
                      (
                        ((data.week_days?.monday?.weather?.["8-16h_humidity"] ??
                          0) +
                          (data.week_days?.monday?.weather?.[
                            "16-24h_humidity"
                          ] ?? 0) +
                          (data.week_days?.monday?.weather?.["0-8h_humidity"] ??
                            0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  jacke: {
                    Tag:
                      data.week_days?.monday?.weather?.[
                        "8-26h_jacket_needed"
                      ] ?? "",
                    Abend:
                      data.week_days?.monday?.weather?.[
                        "16-24h_jacket_needed"
                      ] ?? "",
                    Nacht:
                      data.week_days?.monday?.weather?.["0-8h_jacket_needed"] ??
                      "",
                  },
                  gegenstaende: {
                    vergessen:
                      data.week_days?.monday?.item_stats?.forgotten ?? "",
                    nichtVergessen:
                      data.week_days?.monday?.item_stats?.taken ?? "",
                    vergessQuote:
                      data.week_days?.monday?.item_stats?.forget_rate ?? "",
                  },
                },
                Dienstag: {
                  rausgegangen:
                    (data.week_days?.tuesday?.item_stats?.forgotten ?? 0) +
                      (data.week_days?.tuesday?.item_stats?.taken ?? 0) || "",
                  wetter: {
                    Temperatur:
                      (
                        ((data.week_days?.tuesday?.weather?.[
                          "8-16h_temperature"
                        ] ?? 0) +
                          (data.week_days?.tuesday?.weather?.[
                            "16-24h_temperature"
                          ] ?? 0) +
                          (data.week_days?.tuesday?.weather?.[
                            "0-8h_temperature"
                          ] ?? 0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  luftfeuchtigkeit: {
                    Luftfeuchtigkeit:
                      (
                        ((data.week_days?.tuesday?.weather?.[
                          "8-16h_humidity"
                        ] ?? 0) +
                          (data.week_days?.tuesday?.weather?.[
                            "16-24h_humidity"
                          ] ?? 0) +
                          (data.week_days?.tuesday?.weather?.[
                            "0-8h_humidity"
                          ] ?? 0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  jacke: {
                    Tag:
                      data.week_days?.tuesday?.weather?.[
                        "8-26h_jacket_needed"
                      ] ?? "",
                    Abend:
                      data.week_days?.tuesday?.weather?.[
                        "16-24h_jacket_needed"
                      ] ?? "",
                    Nacht:
                      data.week_days?.tuesday?.weather?.[
                        "0-8h_jacket_needed"
                      ] ?? "",
                  },
                  gegenstaende: {
                    vergessen:
                      data.week_days?.tuesday?.item_stats?.forgotten ?? "",
                    nichtVergessen:
                      data.week_days?.tuesday?.item_stats?.taken ?? "",
                    vergessQuote:
                      data.week_days?.tuesday?.item_stats?.forget_rate ?? "",
                  },
                },
                Mittwoch: {
                  rausgegangen:
                    (data.week_days?.wednesday?.item_stats?.forgotten ?? 0) +
                      (data.week_days?.wednesday?.item_stats?.taken ?? 0) || "",
                  wetter: {
                    Temperatur:
                      (
                        ((data.week_days?.wednesday?.weather?.[
                          "8-16h_temperature"
                        ] ?? 0) +
                          (data.week_days?.wednesday?.weather?.[
                            "16-24h_temperature"
                          ] ?? 0) +
                          (data.week_days?.wednesday?.weather?.[
                            "0-8h_temperature"
                          ] ?? 0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  luftfeuchtigkeit: {
                    Luftfeuchtigkeit:
                      (
                        ((data.week_days?.wednesday?.weather?.[
                          "8-16h_humidity"
                        ] ?? 0) +
                          (data.week_days?.wednesday?.weather?.[
                            "16-24h_humidity"
                          ] ?? 0) +
                          (data.week_days?.wednesday?.weather?.[
                            "0-8h_humidity"
                          ] ?? 0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  jacke: {
                    Tag:
                      data.week_days?.wednesday?.weather?.[
                        "8-26h_jacket_needed"
                      ] ?? "",
                    Abend:
                      data.week_days?.wednesday?.weather?.[
                        "16-24h_jacket_needed"
                      ] ?? "",
                    Nacht:
                      data.week_days?.wednesday?.weather?.[
                        "0-8h_jacket_needed"
                      ] ?? "",
                  },
                  gegenstaende: {
                    vergessen:
                      data.week_days?.wednesday?.item_stats?.forgotten ?? "",
                    nichtVergessen:
                      data.week_days?.wednesday?.item_stats?.taken ?? "",
                    vergessQuote:
                      data.week_days?.wednesday?.item_stats?.forget_rate ?? "",
                  },
                },
                Donnerstag: {
                  rausgegangen:
                    (data.week_days?.thursday?.item_stats?.forgotten ?? 0) +
                      (data.week_days?.thursday?.item_stats?.taken ?? 0) || "",
                  wetter: {
                    Temperatur:
                      (
                        ((data.week_days?.thursday?.weather?.[
                          "8-16h_temperature"
                        ] ?? 0) +
                          (data.week_days?.thursday?.weather?.[
                            "16-24h_temperature"
                          ] ?? 0) +
                          (data.week_days?.thursday?.weather?.[
                            "0-8h_temperature"
                          ] ?? 0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  luftfeuchtigkeit: {
                    Luftfeuchtigkeit:
                      (
                        ((data.week_days?.thursday?.weather?.[
                          "8-16h_humidity"
                        ] ?? 0) +
                          (data.week_days?.thursday?.weather?.[
                            "16-24h_humidity"
                          ] ?? 0) +
                          (data.week_days?.thursday?.weather?.[
                            "0-8h_humidity"
                          ] ?? 0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  jacke: {
                    Tag:
                      data.week_days?.thursday?.weather?.[
                        "8-26h_jacket_needed"
                      ] ?? "",
                    Abend:
                      data.week_days?.thursday?.weather?.[
                        "16-24h_jacket_needed"
                      ] ?? "",
                    Nacht:
                      data.week_days?.thursday?.weather?.[
                        "0-8h_jacket_needed"
                      ] ?? "",
                  },
                  gegenstaende: {
                    vergessen:
                      data.week_days?.thursday?.item_stats?.forgotten ?? "",
                    nichtVergessen:
                      data.week_days?.thursday?.item_stats?.taken ?? "",
                    vergessQuote:
                      data.week_days?.thursday?.item_stats?.forget_rate ?? "",
                  },
                },
                Freitag: {
                  rausgegangen:
                    (data.week_days?.friday?.item_stats?.forgotten ?? 0) +
                      (data.week_days?.friday?.item_stats?.taken ?? 0) || "",
                  wetter: {
                    Temperatur:
                      (
                        ((data.week_days?.friday?.weather?.[
                          "8-16h_temperature"
                        ] ?? 0) +
                          (data.week_days?.friday?.weather?.[
                            "16-24h_temperature"
                          ] ?? 0) +
                          (data.week_days?.friday?.weather?.[
                            "0-8h_temperature"
                          ] ?? 0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  luftfeuchtigkeit: {
                    Luftfeuchtigkeit:
                      (
                        ((data.week_days?.friday?.weather?.["8-16h_humidity"] ??
                          0) +
                          (data.week_days?.friday?.weather?.[
                            "16-24h_humidity"
                          ] ?? 0) +
                          (data.week_days?.friday?.weather?.["0-8h_humidity"] ??
                            0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  jacke: {
                    Tag:
                      data.week_days?.friday?.weather?.[
                        "8-26h_jacket_needed"
                      ] ?? "",
                    Abend:
                      data.week_days?.friday?.weather?.[
                        "16-24h_jacket_needed"
                      ] ?? "",
                    Nacht:
                      data.week_days?.friday?.weather?.["0-8h_jacket_needed"] ??
                      "",
                  },
                  gegenstaende: {
                    vergessen:
                      data.week_days?.friday?.item_stats?.forgotten ?? "",
                    nichtVergessen:
                      data.week_days?.friday?.item_stats?.taken ?? "",
                    vergessQuote:
                      data.week_days?.friday?.item_stats?.forget_rate ?? "",
                  },
                },
                Samstag: {
                  rausgegangen:
                    (data.week_days?.saturday?.item_stats?.forgotten ?? 0) +
                      (data.week_days?.saturday?.item_stats?.taken ?? 0) || "",
                  wetter: {
                    Temperatur:
                      (
                        ((data.week_days?.saturday?.weather?.[
                          "8-16h_temperature"
                        ] ?? 0) +
                          (data.week_days?.saturday?.weather?.[
                            "16-24h_temperature"
                          ] ?? 0) +
                          (data.week_days?.saturday?.weather?.[
                            "0-8h_temperature"
                          ] ?? 0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  luftfeuchtigkeit: {
                    Luftfeuchtigkeit:
                      (
                        ((data.week_days?.saturday?.weather?.[
                          "8-16h_humidity"
                        ] ?? 0) +
                          (data.week_days?.saturday?.weather?.[
                            "16-24h_humidity"
                          ] ?? 0) +
                          (data.week_days?.saturday?.weather?.[
                            "0-8h_humidity"
                          ] ?? 0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  jacke: {
                    Tag:
                      data.week_days?.saturday?.weather?.[
                        "8-26h_jacket_needed"
                      ] ?? "",
                    Abend:
                      data.week_days?.saturday?.weather?.[
                        "16-24h_jacket_needed"
                      ] ?? "",
                    Nacht:
                      data.week_days?.saturday?.weather?.[
                        "0-8h_jacket_needed"
                      ] ?? "",
                  },
                  gegenstaende: {
                    vergessen:
                      data.week_days?.saturday?.item_stats?.forgotten ?? "",
                    nichtVergessen:
                      data.week_days?.saturday?.item_stats?.taken ?? "",
                    vergessQuote:
                      data.week_days?.saturday?.item_stats?.forget_rate ?? "",
                  },
                },
                Sonntag: {
                  rausgegangen:
                    (data.week_days?.sunday?.item_stats?.forgotten ?? 0) +
                      (data.week_days?.sunday?.item_stats?.taken ?? 0) || "",
                  wetter: {
                    Temperatur:
                      (
                        ((data.week_days?.sunday?.weather?.[
                          "8-16h_temperature"
                        ] ?? 0) +
                          (data.week_days?.sunday?.weather?.[
                            "16-24h_temperature"
                          ] ?? 0) +
                          (data.week_days?.sunday?.weather?.[
                            "0-8h_temperature"
                          ] ?? 0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  luftfeuchtigkeit: {
                    Luftfeuchtigkeit:
                      (
                        ((data.week_days?.sunday?.weather?.["8-16h_humidity"] ??
                          0) +
                          (data.week_days?.sunday?.weather?.[
                            "16-24h_humidity"
                          ] ?? 0) +
                          (data.week_days?.sunday?.weather?.["0-8h_humidity"] ??
                            0)) /
                        3
                      ).toFixed(2) || "",
                  },
                  jacke: {
                    Tag:
                      data.week_days?.sunday?.weather?.[
                        "8-26h_jacket_needed"
                      ] ?? "",
                    Abend:
                      data.week_days?.sunday?.weather?.[
                        "16-24h_jacket_needed"
                      ] ?? "",
                    Nacht:
                      data.week_days?.sunday?.weather?.["0-8h_jacket_needed"] ??
                      "",
                  },
                  gegenstaende: {
                    vergessen:
                      data.week_days?.sunday?.item_stats?.forgotten ?? "",
                    nichtVergessen:
                      data.week_days?.sunday?.item_stats?.taken ?? "",
                    vergessQuote:
                      data.week_days?.sunday?.item_stats?.forget_rate ?? "",
                  },
                },
              
        },
      }));

      setObjectList(newCardList);
      setData(responses.map((r) => r.data)); // optional, je nach Verwendung
      setLoading(false);
    } catch (error) {
      console.error("Fehler beim Laden:", error);
      setLoading(false);
    }
  }

  fetchAllWeeks();
}, []);

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
              <ModuleWeekView
                setModalPage={setModalPage}
                object={selectedObject}
              />
            ) : (
              <ModuleDayView
                setModalPage={setModalPage}
                object={selectedObject}
              />
            )}
          </div>
        </Modal>
      )}
    </>
  );
}

export default Dashboard;
