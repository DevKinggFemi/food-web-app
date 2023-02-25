import classes from './AvailableMeals.module.css';
import Card from '../U.I/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals= (props) => {
 const [meals, setMeals] = useState([]); 
 const[IsLoading, setIsLoading] = useState(true);
 const [httpError, setHttpError] = useState(null);
  useEffect(() => {
   const fetchMeals = async () => {
  
    const response = await fetch('https://food-app-89818-default-rtdb.firebaseio.com/meals.json');
 // chweck if there is an error or handling the error
    if (!response.ok){
      throw new Error ( 'Something went wrong!');
    }
    const responseData = await response.json();

 const loadedMeals = [];
 for (const key in responseData) {
  loadedMeals.push({
    id: [key],
     description: responseData[key].description,
    name: responseData[key].name ,
    price : responseData[key].price,
   
  });
 }
 setMeals (loadedMeals);
 setIsLoading(false);
  }; 
  //  try calling fetching meals
   fetchMeals().catch((error) => {
    
     setIsLoading(false);
     setHttpError(error.message);
   });

}, [])
  
  if (IsLoading) {
    return (
      <section className={classes.MealsLoading}> <p>LOADING...</p></section>
    )
    
  }
  if (httpError){
    return  <section className={classes.MealsError}> <p>{httpError}</p></section>
  }
    const MealsList = meals.map(meal => <MealItem 
      key= {meal.id} 
      id = {meal.id}
      name={meal.name}
       price ={meal.price} 
       description = {meal.description} />)

      return ( <section className= {classes.meals}>
    <Card>
      <ul>   {MealsList}</ul>
    </Card>
</section>)

    };
export default AvailableMeals;