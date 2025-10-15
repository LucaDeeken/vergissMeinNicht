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
  }, [modalPage]);

  //Navigates to page 1, if a number out of range was selected
  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPages) {
      navigate("/dashboard/1", { replace: true });
    }
  }, [currentPage, totalPages, navigate]);

  //JSON, which arrives from SQL
  useEffect(() => {
    setObjectList([
      {
        id: "1",
        week: "KW 49",
        insgesamt: {
          rausgegangen: 10,
          vergessRate: 20,
          jackenRate: 50,
          avgTemperatur: 12,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 2, max: 14, avg: 8 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 1,
            wetter: { min: 4, max: 11, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: {
              vergessen: 1,
              nichtVergessen: 0,
              vergessQuote: 100,
            },
          },
          Donnerstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 1,
            wetter: { min: 5, max: 15, avg: 10 },
            jacke: { gebraucht: 0, nichtGebraucht: 1, vonNoeten: 0 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 1,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: {
              vergessen: 1,
              nichtVergessen: 0,
              vergessQuote: 100,
            },
          },
          Sonntag: {
            rausgegangen: 1,
            wetter: { min: 3, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
        },
      },
      {
        id: "2",
        week: "KW 50",
        insgesamt: {
          rausgegangen: 12,
          vergessRate: 25,
          jackenRate: 60,
          avgTemperatur: 13,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: {
              vergessen: 1,
              nichtVergessen: 0,
              vergessQuote: 100,
            },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 5, max: 15, avg: 10 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 1,
            wetter: { min: 3, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
        },
      },
      {
        id: "3",
        week: "KW 51",
        insgesamt: {
          rausgegangen: 14,
          vergessRate: 15,
          jackenRate: 70,
          avgTemperatur: 14,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 11, avg: 7 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 12, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 2, max: 14, avg: 8 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Donnerstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 5, max: 15, avg: 10 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 12, avg: 7 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
      {
        id: "4",
        week: "KW 52",
        insgesamt: {
          rausgegangen: 11,
          vergessRate: 18,
          jackenRate: 55,
          avgTemperatur: 11,
        },
        days: {
          Montag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 10, avg: 6 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 11, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 1, max: 12, avg: 6 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 11, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 1,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 0, nichtGebraucht: 1, vonNoeten: 0 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 12, avg: 7 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
      {
        id: "5",
        week: "KW 53",
        insgesamt: {
          rausgegangen: 13,
          vergessRate: 22,
          jackenRate: 60,
          avgTemperatur: 13,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 15, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
      {
        id: "5",
        week: "KW 53",
        insgesamt: {
          rausgegangen: 13,
          vergessRate: 22,
          jackenRate: 60,
          avgTemperatur: 13,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 15, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
      {
        id: "5",
        week: "KW 53",
        insgesamt: {
          rausgegangen: 13,
          vergessRate: 22,
          jackenRate: 60,
          avgTemperatur: 13,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 15, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
      {
        id: "5",
        week: "KW 53",
        insgesamt: {
          rausgegangen: 13,
          vergessRate: 22,
          jackenRate: 60,
          avgTemperatur: 13,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 15, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
      {
        id: "5",
        week: "KW 53",
        insgesamt: {
          rausgegangen: 13,
          vergessRate: 22,
          jackenRate: 60,
          avgTemperatur: 13,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 15, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
      {
        id: "5",
        week: "KW 53",
        insgesamt: {
          rausgegangen: 13,
          vergessRate: 22,
          jackenRate: 60,
          avgTemperatur: 13,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 15, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
      {
        id: "5",
        week: "KW 53",
        insgesamt: {
          rausgegangen: 13,
          vergessRate: 22,
          jackenRate: 60,
          avgTemperatur: 13,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 15, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
      {
        id: "5",
        week: "KW 53",
        insgesamt: {
          rausgegangen: 13,
          vergessRate: 22,
          jackenRate: 60,
          avgTemperatur: 13,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 15, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
      {
        id: "5",
        week: "KW 53",
        insgesamt: {
          rausgegangen: 13,
          vergessRate: 22,
          jackenRate: 60,
          avgTemperatur: 13,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 15, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
      {
        id: "5",
        week: "KW 53",
        insgesamt: {
          rausgegangen: 13,
          vergessRate: 22,
          jackenRate: 60,
          avgTemperatur: 13,
        },
        days: {
          Montag: {
            rausgegangen: 2,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Dienstag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Mittwoch: {
            rausgegangen: 2,
            wetter: { min: 4, max: 14, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Donnerstag: {
            rausgegangen: 1,
            wetter: { min: 2, max: 12, avg: 7 },
            jacke: { gebraucht: 1, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 0, nichtVergessen: 1, vergessQuote: 0 },
          },
          Freitag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
          Samstag: {
            rausgegangen: 2,
            wetter: { min: 4, max: 15, avg: 9 },
            jacke: { gebraucht: 2, nichtGebraucht: 0, vonNoeten: 100 },
            gegenstaende: { vergessen: 1, nichtVergessen: 1, vergessQuote: 50 },
          },
          Sonntag: {
            rausgegangen: 2,
            wetter: { min: 3, max: 13, avg: 8 },
            jacke: { gebraucht: 1, nichtGebraucht: 1, vonNoeten: 50 },
            gegenstaende: { vergessen: 0, nichtVergessen: 2, vergessQuote: 0 },
          },
        },
      },
    ]);
  }, []);

  return (
    <>
      <div className={styles.cardArea} key={currentPage}>
        {currentCards.map((object) => (
          <div key={object.id} className="card">
            <Card
              cardContent={object}
              onClick={() => {
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
              <ModuleWeekView setModalPage={setModalPage} />
            ) : (
              <ModuleDayView setModalPage={setModalPage} />
            )}
          </div>
        </Modal>
      )}
    </>
  );
}

export default Dashboard;
