# 💱 Currency Converter

A sleek and minimal **Currency Converter Web App** built with **HTML, CSS, and JavaScript**, featuring a dark glassmorphism UI and real-time exchange rates from the **Open Exchange Rate API**.

---

## 🚀 Features

- 🌐 Real-time currency conversion using **[open.er-api.com](https://open.er-api.com/v6/latest)**
- 💵 Convert between **any two world currencies**
- 🏳️ Dynamic country flags for selected currencies
- 🎨 Clean, modern **glassmorphism UI**
- ⚡ Instant updates when changing amount, currency, or conversion direction
- 📱 Fully responsive and lightweight — runs in any modern browser

---

## 🧩 Tech Stack

- **HTML5** – Structure  
- **CSS3** – Styling and Glassmorphism effects  
- **Vanilla JavaScript (ES6)** – Logic and API handling  
- **Flags API** – Country flags (`https://flagsapi.com/{country-code}/flat/64.png`)

---

## ⚙️ How It Works

1. The app fetches exchange rate data from  
   **`https://open.er-api.com/v6/latest/{FROM_CURRENCY}`**

2. When the user changes:
   - The **From** currency  
   - The **To** currency  
   - Or the **Amount**  

   The app automatically recalculates and displays the updated result.

3. Each selected currency updates its **flag** dynamically using the **country code** from `country.js`.
