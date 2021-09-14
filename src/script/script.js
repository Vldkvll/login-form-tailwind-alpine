document.addEventListener("alpine:init", () => {
  Alpine.data("userCred", () => ({
    user: "",
    email: "",
    password: "",
  }));
});
