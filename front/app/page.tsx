import React, { useEffect, useState } from "react";
import { Button } from "antd";
import './Home.css'; // Импортируем стили для главной страницы

export default function Home() {
  return (
    <div className="home-container">
      
      
      <div className="content">
        <h1 className="headline">Добро пожаловать в наш книжную мастерскую!</h1>
        <p className="subheadline">Здесь вы можете творить новогодние чудеса с книгами!</p>

        <a href="/books">
  <Button className="shop-now-button" type="primary" size="large">
    Перейти в магазин
  </Button>
</a>
      </div>

      <div className="background-overlay"></div> {}
    </div>
  );
}
