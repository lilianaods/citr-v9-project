import React from "react";
import { createRoot } from "react-dom/client";

function Pizza(props) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
}

function App() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Classico",
      description: "Pomodoro, mozzarela, prosciutto cotto, funghi",
    }),
    React.createElement(Pizza, {
      name: "Vegetariano",
      description: "Pomodoro, mozzarela, verdure grigliate",
    }),
  ]);
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
