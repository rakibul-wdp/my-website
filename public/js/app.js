let auth0Client = null;

const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0Client = await auth0.createAuth0Client({
    domain: config.domain,
    clientId: config.clientId,
  });
};

const fetchToken = async () => {
  const response = await fetch("http://localhost:3000/get-token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch token");
  }

  const data = await response.json();
  return data.access_token; // Return the JWT token
};

const injectWhiteLabelApp = (jwtToken) => {
  const themeUrl =
    "https://ui.s.unit.sh/resources/6132/themes/59efae50-eb61-4a0f-8200-d9f027f08307.json"; // Replace with your theme URL
  const languageUrl =
    "https://ui.s.unit.sh/resources/6132/languages/1b07fec1-b7a3-49ce-b2c6-6b99dbe21c77.json"; // Replace with your language URL

  // Create the white-label app element
  const unitApp = document.createElement("unit-elements-white-label-app");
  unitApp.setAttribute("jwt-token", jwtToken);
  unitApp.setAttribute("theme", themeUrl);
  unitApp.setAttribute("language", languageUrl);

  // Append the white-label app element to the placeholder div
  const placeholder = document.createElement("div");
  placeholder.id = "unit-app-placeholder";
  document.body.appendChild(placeholder);
  placeholder.appendChild(unitApp);

  // Clean up local storage on logout
  const logoutButton = document.getElementById("btn-logout");
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("unitCustomerToken");
    localStorage.removeItem("unitVerifiedCustomerToken");
  });
};

const updateUI = async () => {
  const isAuthenticated = await auth0Client.isAuthenticated();

  document.getElementById("btn-logout").disabled = !isAuthenticated;
  document.getElementById("btn-login").disabled = isAuthenticated;

  if (isAuthenticated) {
    document.getElementById("gated-content").classList.remove("hidden");

    const accessToken = await auth0Client.getTokenSilently();
    document.getElementById("ipt-access-token").innerHTML = accessToken;

    // Fetch the JWT token and inject the White-Label App
    const jwtToken = await fetchToken();
    injectWhiteLabelApp(jwtToken);

    document.getElementById("ipt-user-profile").textContent = JSON.stringify(
      await auth0Client.getUser(),
      null,
      2
    );
  } else {
    document.getElementById("gated-content").classList.add("hidden");
  }
};

const login = async () => {
  await auth0Client.loginWithRedirect({
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  });
};

const logout = () => {
  auth0Client.logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  });
};

window.onload = async () => {
  await configureClient();
  updateUI();

  const isAuthenticated = await auth0Client.isAuthenticated();

  if (isAuthenticated) {
    return;
  }

  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    await auth0Client.handleRedirectCallback();
    updateUI();
    window.history.replaceState({}, document.title, "/");
  }
};
