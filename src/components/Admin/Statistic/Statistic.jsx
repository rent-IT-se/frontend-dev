import React from 'react'
import BreadCrumbs from '../../breadCrumbs/BreadCrumbs'
import styles from "./statistic.module.scss"
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
function Statistic() {
    const labels = ["Январь", "Февраль", "март", "Апрель", "Май", "июнь","июль","aвгуст","cентябрь","октябырь","ноябырь"];
    const data = {
        labels: labels,
        datasets: [
          {
            label: "Количество зарегистрированныx пользователей",
            backgroundColor: "#4FB86B",
            borderColor: "#4FB86B",
            data: [0, 0, 0, 0, 0, 0, 0,0,1,0,4,8],
          },
        ],
      };
      const popularCategories= ["Компютеры", "Телефоны и аксессуары", "приставки", "Ноутбуки", "Недвижимисть", "Транспорт"]
      const colors=[];
      for(let i=0;i<=popularCategories.length;i++){
        colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
  }
 
      const popular = {
        labels:popularCategories,
        datasets: [
          {
            label:"fdsgrv",
            data: [35, 25, 22, 20, 18, 15],
            backgroundColor:colors ,
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className={styles.wrapper}>
        <div>
            <BreadCrumbs/>
        </div>

        <div className={styles.statisticWrap}>
            <p className={styles.title}>Зарегистрированные пользователи</p>
            <div className={styles.chartWrap}>
              <Line data={data} />
            </div>
        </div>
        <div className={styles.statisticWrap}>
            <p className={styles.title}>Статистика просмотров </p>
            <div className={styles.chartWrap}>
                <Doughnut data={popular} width={50} height={50} />
            </div>
        </div>

    </div>
  )
}

export default Statistic