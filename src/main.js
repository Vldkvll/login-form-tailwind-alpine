import Alpine from "alpinejs";
import persist from "@alpinejs/persist";

window.Alpine = Alpine;

Alpine.plugin(persist);

Alpine.start();

import "./assets/tailwind.css";
import "./assets/scrollbar.css";
