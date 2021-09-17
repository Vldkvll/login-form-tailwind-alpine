import Alpine from "alpinejs";
import persist from "@alpinejs/persist";
import userCred from "./script/userCred";

window.Alpine = Alpine;

Alpine.data("userCred", userCred);

Alpine.plugin(persist);

Alpine.start();

import "./assets/tailwind.css";
import "./assets/scrollbar.css";
