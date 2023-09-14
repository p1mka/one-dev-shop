import { Routes, Route } from "react-router-dom";
import styles from "./app.module.css";

function Shop() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<div>Главная</div>} />
        <Route path="*" element={<div>Ошибка</div>} />
      </Routes>
    </div>
  );
}

export default Shop;
