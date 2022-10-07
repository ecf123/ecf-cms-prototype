import React from 'react'
import Card from '../../components/Card/Card'
import './CardContainer.scss'
import image from "../../assets/for-hire-image.svg"

const CardContainer = () => {

  return (

    <div className="card-container">
      <div className="card-container__box">
      <Card img = {image} dateOrTime="18:25" title="Test" cardInfo ="Test info" links ={["one", "two", "three"]} />
      </div>
      <Card img = {image} dateOrTime="18:25" title="Test" cardInfo ="Test info" links ={["one", "two", "three"]} />
      <Card img = {image} dateOrTime="18:25" title="Test" cardInfo ="Test info" links ={["one", "two", "three"]} />
      <Card img = {image} dateOrTime="18:25" title="Test" cardInfo ="Test info" links ={["one", "two", "three"]} />
      <Card img = {image} dateOrTime="18:25" title="Test" cardInfo ="Test info" links ={["one", "two", "three"]} />
    </div>
  )
}

export default CardContainer