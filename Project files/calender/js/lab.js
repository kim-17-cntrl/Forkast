// Foods available on each day in June (example data)
const seasonalFoodsJune = {
    1: ['Cherries', 'Strawberries'],
    3: ['Lettuce', 'Radishes'],
    5: ['Tomatoes'],
    7: ['Zucchini', 'Cucumbers'],
    10: ['Peaches'],
    12: ['Corn'],
    15: ['Blueberries'],
    20: ['Melons'],
    25: ['Eggplant'],
    30: ['Bell Peppers']
  };
  
  // Details about each food (could be expanded)
  const foodDetails = {
    'Cherries': 'Cherries are rich in antioxidants and are perfect for fresh eating or baking.',
    'Strawberries': 'Strawberries are high in vitamin C and great in salads or desserts.',
    'Lettuce': 'Lettuce is a leafy green that grows well in cooler weather.',
    'Radishes': 'Radishes add a peppery crunch to salads and are fast-growing root veggies.',
    'Tomatoes': 'Tomatoes are juicy fruits commonly used in sauces and salads.',
    'Zucchini': 'Zucchini is a summer squash that can be grilled, baked, or spiralized.',
    'Cucumbers': 'Cucumbers are refreshing and hydrating, perfect for summer dishes.',
    'Peaches': 'Peaches are sweet stone fruits best enjoyed fresh or in pies.',
    'Corn': 'Corn is a staple summer crop, often grilled or boiled on the cob.',
    'Blueberries': 'Blueberries are nutrient-rich berries excellent for snacking and baking.',
    'Melons': 'Melons are hydrating fruits that come in many varieties like cantaloupe and honeydew.',
    'Eggplant': 'Eggplant is a versatile vegetable used in many cuisines worldwide.',
    'Bell Peppers': 'Bell Peppers come in many colors and add crunch and sweetness to meals.'
  };
  
  const calendar = document.getElementById('calendar');
  const foodInfo = document.getElementById('food-info');
  
  // Create days for June
  for (let day = 1; day <= 30; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
  
    // Add day number
    const dayNumber = document.createElement('div');
    dayNumber.classList.add('day-number');
    dayNumber.textContent = day;
    dayDiv.appendChild(dayNumber);
  
    // Add foods for this day if any
    const foodList = document.createElement('div');
    foodList.classList.add('food-list');
  
    if (seasonalFoodsJune[day]) {
      seasonalFoodsJune[day].forEach(food => {
        const foodBtn = document.createElement('button');
        foodBtn.classList.add('food-item');
        foodBtn.textContent = food;
        foodBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          foodInfo.textContent = `${food}: ${foodDetails[food] || 'No info available.'}`;
        });
        foodList.appendChild(foodBtn);
      });
    } else {
      const noFood = document.createElement('div');
      noFood.style.fontSize = '0.75rem';
      noFood.style.color = '#4A7C4A';
      noFood.textContent = 'No seasonal foods';
      foodList.appendChild(noFood);
    }
  
    dayDiv.appendChild(foodList);
    calendar.appendChild(dayDiv);
  }
  