import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function FoodView() {
  const { id } = useParams();
  const allFoods = useSelector(state => state.food.allFoods);
  const searchedFood = allFoods.find(food => food._id === id);

  if (!searchedFood) {
    return <div>Food not found!</div>;
  }

  return (
    <div className="">
      <p>{searchedFood.name}</p>
      <img src={searchedFood.image} alt="" />
    </div>
  );
}
