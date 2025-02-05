const express = require("express");
const { join } = require("path");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Serve static assets from the /public folder
app.use(express.static(join(__dirname, "public")));

// Endpoint to serve the configuration file
app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

// Proxy request to Auth0
app.post("/get-token", async (req, res) => {
  try {
    const fetch = (await import("node-fetch")).default;

    const response = await fetch(
      "https://dev-s0t2brpud2p7n6km.us.auth0.com/oauth/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: "V2VX5UgzkjltxgCkqOYOFxONIU83NXTg",
          client_secret:
            "RebnUtwZy8BF71uZnAIsNi-DGsQkZsapN4n_s5O-1ZPrvxywn3Mo494BSbL0lWco",
          audience: "http://localhost:3000",
          grant_type: "client_credentials",
        }),
      }
    );

    const data = await response.json();
    res.json(data); // Send the response back to the client
  } catch (error) {
    console.error("Error fetching token:", error);
    res.status(500).json({ error: "Failed to fetch token" });
  }
});

// Serve the index page for all other requests
app.get("/*", (_, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

// Listen on port 3000
app.listen(3000, () => console.log("Application running on port 3000"));
