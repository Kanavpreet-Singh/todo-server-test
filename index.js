const express = require("express");

const app = express();
const PORT = 80;

app.get("/todos", (req, res) => {
  const todos = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Complete Node.js practice", completed: false },
    { id: 3, task: "Read about AWS EC2 basics", completed: false },
    { id: 4, task: "Push code to GitHub", completed: false },
    { id: 5, task: "Revise DSA problems", completed: false },
    { id: 6, task: "Set up Express server", completed: false },
    { id: 7, task: "Learn about REST APIs", completed: false },
    { id: 8, task: "Test API using curl/Postman", completed: false },
    { id: 9, task: "Configure EC2 security group", completed: false },
    { id: 10, task: "Deploy Node app on EC2", completed: false }
  ];

  res.json(todos);
});

app.get("/", (req, res) => {
  res.send("Todo API is running");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

