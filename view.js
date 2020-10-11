const view = {};
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "loginScreen":
      document.getElementById("app").innerHTML = components.loginScreen;

      const registerForm = document.getElementById("register");

      break;
  }
};
