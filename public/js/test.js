const updateUI = async () => {
  const isAuthenticated = await auth0Client.isAuthenticated();

  document.getElementById("btn-logout").disabled = !isAuthenticated;
  document.getElementById("btn-login").disabled = isAuthenticated;

  if (isAuthenticated) {
    document.getElementById("gated-content").classList.remove("hidden");

    // Get the access token (JWT)
    const accessToken = await auth0Client.getTokenSilently();
    document.getElementById("ipt-access-token").innerHTML = accessToken;

    // Get the user profile (includes the ID token)
    const userProfile = await auth0Client.getUser();
    document.getElementById("ipt-user-profile").textContent = JSON.stringify(
      userProfile,
      null,
      2
    );

    // Log the tokens to the console for debugging
    console.log("Access Token (JWT):", accessToken);
    console.log("ID Token (JWT):", userProfile.__raw); // Raw ID token
  } else {
    document.getElementById("gated-content").classList.add("hidden");
  }
};
