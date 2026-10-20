
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Nawab Hosting</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #101827;
          color: white;
          text-align: center;
          padding: 60px 20px;
        }
        .card {
          max-width: 520px;
          margin: auto;
          padding: 28px;
          border-radius: 16px;
          background: #1e293b;
        }
        h1 { color: #60a5fa; }
        .status { color: #86efac; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Nawab Hosting</h1>
        <p>Your hosting platform project has started.</p>
        <p class="status">Server status: Running</p>
        <p>Next: Project deployment and hosting management.</p>
      </div>
    </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    name: "Nawab Hosting",
    status: "ok"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Nawab Hosting listening on port ${PORT}`);
});
