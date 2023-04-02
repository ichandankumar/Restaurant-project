import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './Meals/MealItem';


const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Briyani',
    description: 'Finest Briyani in india',
    price: 220.00,
  },
  {
    id: 'm2',
    name: 'Paneer Tikka',
    description: 'A Indian specialty!',
    price: 160.00,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'Raw, meaty',
    price: 120.00,
  },
  {
    id: 'm4',
    name: 'Masala Dosa',
    description: 'Healthy...and green...',
    price: 180.00,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;z4
