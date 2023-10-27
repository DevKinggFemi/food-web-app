import classes from './AvailableMeals.module.css';
import Card from '../U.I/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore"; 

const AvailableMeals= (props) => {
 
 const [meals, setMeals] = useState([]); 
 const[IsLoading, setIsLoading] = useState(true);
 const [httpError, setHttpError] = useState(null);
  useEffect(() => {
   const fetchMeals = async () => {
    setIsLoading(true);
    const loadedMeals = [];
    try{
    const querySnapshot = await getDocs(collection(db, "meal"));
     querySnapshot.forEach((doc) => {
      loadedMeals.push({
        id: doc.id,
         description: doc.data().description,
        name: doc.data().name ,
        price : doc.data().price,
      });
      
  // doc.data() is never undefined for query doc snapshots
  console.log(  doc.data().description);
  console.log(loadedMeals)
});
setMeals (loadedMeals);
 setIsLoading(false);

  } catch(err){
    console.log(err) }
    }  //  try calling fetching meals
   fetchMeals();
    
}, [])
  console.log(meals)
  if (IsLoading) {
    return (
      <section className={classes.MealsLoading}> <p>LOADING...</p></section>
    )
    
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