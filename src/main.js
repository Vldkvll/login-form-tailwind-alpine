import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import userCred from "./script/userCred";
import validation from "./script/validate";

window.Alpine = Alpine;

Alpine.data("userCred", userCred);
Alpine.data("validation", validation);

Alpine.plugin(persist);

Alpine.start();

import "./assets/tailwind.css";
import "./assets/scrollbar.css";
import "./assets/general.css";
