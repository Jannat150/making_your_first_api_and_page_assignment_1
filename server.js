// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

// app.get("/",(req,res)=>{
//   res.send("hello")
// })
app.get("/assistant/greet",(req,res)=>{
  // console.log(req.query)
  // res.send("1234")
  let name=req.query.name
  if (!name){
    return res.status(400).json({ error: "Name parameter is required" });
  }
  let day= new Date().getDay()
  let welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`;
  let dayMessage = '';
  switch (day) {
    case 1: // Monday
      dayMessage = "Happy Monday! Start your week with energy!";
      break;
    case 5: // Friday
      dayMessage = "It's Friday! The weekend is near!";
      break;
    default:
      dayMessage = "Have a wonderful day!";
      break;
  }
  // return res.json({ welcomeMessage, dayMessage });
  res.status(200).json({
    welcomeMessage,dayMessage
  })

})

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
