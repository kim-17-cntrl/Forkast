/*
  lab.js refers to the calendar.html file
  refers users to a calendar format for viewing more sustainable eating options 
*/
// Foods available on each day in June (example data)
const seasonalFoodsJune = {
    1: ['UCSC Farm Tour', 'Pie Ranch', 'U-pick Swanton Berry Farms', 'Rodoni Farmstand'],
    2: ['Redwood Free Market', 'Cowell Coffee Shop', 'Pie Ranch', 'Rodoni Farmstand'],
    3: ['Redwood Free Market', 'Cowell Coffee Shop', 'Womxns Food Pantry', 'Rodoni Farmstand'],
    4: ['Produce Pop-Up', 'Redwood Free Market', 'Cowell Coffee Shop', 'Downtown Farmers Market', 'Pie Ranch', 'Rodoni Farmstand'],
    5: ['Redwood Free Market', 'Cowell Coffee Shop', 'Center for Agroecology Farmstand', 'Pie Ranch', 'Rodoni Farmstand'],
    6: ['Produce Pop-Up', 'Redwood Free Market', 'Cowell Coffee Shop', 'Womxns Food Pantry', 'Pie Ranch', 'Rodoni Farmstand'],
    7: ['Berry U-Pick', 'Westside Farmers Market', 'Pie Ranch', 'U-pick Swanton Berry Farms', 'Rodoni Farmstand'],
    8: ['Pie Ranch', 'U-pick Swanton Berry Farms', 'Rodoni Farmstand'],
    9: ['Redwood Free Market', 'Cowell Coffee Shop', 'Pie Ranch', 'Rodoni Farmstand'],
    10: ['Redwood Free Market', 'Cowell Coffee Shop', 'Rodoni Farmstand'],
    11: ['Produce Pop-Up', 'Redwood Free Market', 'Cowell Coffee Shop', 'Womxns Food Pantry', 'Downtown Farmers Market', 'Pie Ranch', 'Rodoni Farmstand'],
    12: ['Redwood Free Market', 'Cowell Coffee Shop', 'Center for Agroecology Farmstand', 'Pie Ranch', 'Rodoni Farmstand'],
    13: ['Produce Pop-Up', 'Redwood Free Market', 'Cowell Coffee Shop', 'Womxns Food Pantry', 'Pie Ranch', 'Rodoni Farmstand'],
    14: ['Westside Farmers Market', 'Pie Ranch', 'U-pick Swanton Berry Farms', 'Rodoni Farmstand'],
    15: ['Pie Ranch', 'U-pick Swanton Berry Farms', 'Rodoni Farmstand'],
    16: ['Redwood Free Market', 'Pie Ranch', 'Rodoni Farmstand'],
    17: ['Redwood Free Market', 'Rodoni Farmstand'],
    18: ['Redwood Free Market', 'Downtown Farmers Market', 'Pie Ranch', 'Rodoni Farmstand'],
    19: ['Redwood Free Market', 'Center for Agroecology Farmstand', 'Pie Ranch', 'Rodoni Farmstand'],
    20: ['Redwood Free Market', 'Pie Ranch', 'Rodoni Farmstand'],
    21: ['Berry U-Pick', 'Westside Farmers Market', 'Pie Ranch', 'U-pick Swanton Berry Farms', 'Rodoni Farmstand'],
    22: ['Pie Ranch', 'U-pick Swanton Berry Farms', 'Rodoni Farmstand'],
    23: ['Redwood Free Market', 'Pie Ranch', 'Rodoni Farmstand'],
    24: ['Redwood Free Market', 'Rodoni Farmstand'],
    25: ['Redwood Free Market', 'Downtown Farmers Market', 'Pie Ranch', 'Rodoni Farmstand'],
    26: ['Redwood Free Market', 'Center for Agroecology Farmstand', 'Pie Ranch', 'Rodoni Farmstand'],
    27: ['Redwood Free Market','Pie Ranch', 'Rodoni Farmstand'],
    28: ['Berry U-Pick','Westside Farmers Market', 'Pie Ranch', 'U-pick Swanton Berry Farms', 'Rodoni Farmstand'],
    29: ['Redwood Free Market', 'Pie Ranch', 'U-pick Swanton Berry Farms', 'Rodoni Farmstand'],
    30: ['Redwood Free Market', 'Pie Ranch', 'Rodoni Farmstand'],
  };
  
  // Details about each food (could be expanded)
  const foodDetails = {
    'UCSC Farm Tour': 'UCSC Farm Tour: Take a free, guided tour of the 30-acre organic UCSC Farm. Visitors can enjoy touring the organically managed greenhouses, hand-worked garden beds, orchards, row crop fields, and childrens garden, while learning about the history of the site and the basic concepts of organic farming and gardening. Perched on a meadow near the campus entrance, the farm also offers spectacular views of the Monterey Bay. Location: 1008 Ranch View Road, Santa Cruz, California 95064 Hours: 2PM-3:30PM Cost Barrier: None',
    'Produce Pop-Up': 'Produce Pop Up: Provides fresh seasonal produce predominantly grown on the UCSC farm and gardens by UCSC students. As a part of Basic Needs, Produce Pop-Up aims to provide low-cost and free healthy, organic food for all. Location: Quarry Plaza (Wednesdays), Science Hill, in front of the Science & Engineering Library (Fridays), Hours: 11AM-3PM, Cost Barrier: Low, most foods $1-5.',
    'Berry U-Pick': 'Berry U-Pick at UCSC Farm: Enjoy picking fresh strawberries and blueberries! Location: Farm Road, Santa Cruz, California 95064 \n Hours: 9AM-12PM \n Cost barrier: Unknown, but flats and pint containers will be available for a flat rate. Please bring a credit card and smartphone for payment (you will need to scan a QR code). \n Notes: We recommend you wear layers, a hat, sunscreen, and closed-toe shoes you can comfortably move around in. Please park in parking lot 116 on the UC Santa Cruz campus or take public transportation.',
    'Redwood Free Market': 'Redwood Free Market: A free food pantry for all students. Features produce, dry goods, and CalFresh information. They are a choice-based no limits pantry so take what you need with your Student ID! Location: Rachel Carson College Cafe (College Eight Cafe) Hours: Mondays 2-5PM, Tuesdays to Thursdays 9 AM-1 PM and 2-5 PM, Fridays 9 AM-12 PM, Wednesdays 2-5 PM (Graduate Students Only) Cost barrier: None Notes: Create a PantrySoft Account before your first visit! There are sometimes meal kits avalible. Kits include recipes and all ingredients necessary to make a fresh and easy meal!',
    'Cowell Coffee Shop': 'Cowell Coffee Shop: a student-run cafe non-transactional designed to increase student food security. Offerings include premade food, fresh pressed juices, coffee, food recovery items from our campus and community partners, and more! Location: Near the Cowell/Stevenson Dining Hall Hours: Mondays to Fridays from 10AM to 3:30PM Cost Barrier: None Notes: Make sure to enter your student ID at the entrence so they can continue to get funding',
    'Center for Agroecology Farmstand': 'Center for Agroecology Farmstand: Features organic vegetables, fruit, and flowers grown at the UCSC Farm and Chadwick Garden by Center for Agroecology staff and students. Location: Cowell Ranch Hay Barn, Hours: 12:30-6:00 PM, Cost Barrier: Low-Medium, Little less than Farmers market pricing Notes: Accepted forms of payment include credit cards, cash, check, and EBT payments. If paying with a card, please bring a smart device to pay for your produce via our online payment system.',
    'Westside Farmers Market': 'Westside Farmers Market: Farmers market featuring fruits, vegetables, and meats, plus flowers, coffee, and baked goods. Location: 003-022-14, 2728 Mission St. Hours: 1-5PM Cost Barrier: Medium, but EBT doubles your money!',
    'Downtown Farmers Market': 'Downtown Farmers Market: Farmers market with local and organic produce, plus chicken, and flowers. Location: 700-798 Cedar St. Hours: 9AM-1PM Cost Barrier: Medium',
    'Womxns Food Pantry': 'Womxns Food Pantry: Provides Dry and canned goods. Location: Cardiff House Hours: 10AM - 4PM Cost Barrier: None',
    'Rodoni Farmstand': 'Rodoni Farmstand: They feature a variety of organic and fresh fruits and veggies, flowers, snacks and cold drinks, frozen treats; locally made goods like soap, honey - and more; everything you need for your local gift buying or grocery run. Location: 2 Miles South of Davenport, Hwy 1 Hours: 10-6 Cost Barrier: High',
    'U-pick Swanton Berry Farms': 'Swanton Berry Farms: U-Pick Strawberries! No reservation needed! Boxes are provided, but please note: the weight of the box will be included in the total cost of your strawberries. If you bring your own container from home, they can weigh it beforehand and deduct its weight from your total. Location: 25 Swanton Rd, Davenport, CA 95017, Hours: 9AM-5PM, Cost Barrier: Fairly high. Strawberries are $8 per pound Notes: Don’t forget to bring a sweater or a hat—it’s usually chilly or windy out in the fields!',
    'Pie Ranch': 'Pie Ranch: Their farmstand is packed with lots of goodies, including Senatore Cappelli whole grain flour, blue corn flour, dry heirloom beans, and so many preserves. They also sell prints, jewelry, and ceramics from local artists as well as medicinal herbs, grass-fed beef and locally pastured chicken and pork. Location 2080 Green Oaks Way, Pescadero, CA 94060 Hours: Weekdays: 11am–5pm Weekends:10am–5pm, Cost Barrier: Higher end',
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
  