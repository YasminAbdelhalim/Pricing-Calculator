# 💰 Pricing Calculator

A responsive and interactive pricing calculator built with HTML, CSS, and JavaScript.

The calculator allows users to enter a unit price, quantity, and tax rate, then instantly calculates the subtotal, applicable volume discount, tax, and final total price.

## ✨ Features

- Calculate subtotal based on unit price and quantity
- Automatic volume discounts:
  - 5% discount for 5+ items
  - 10% discount for 10+ items
- Calculate tax after applying the discount
- Dynamically update results without refreshing the page
- Responsive design for desktop, tablet, and mobile
- Clean and simple user interface

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- CSS Grid & Flexbox
- Responsive Design

## 📐 Calculation Logic

1. **Subtotal**  
   `Unit Price × Quantity`

2. **Discount**
   - Quantity ≥ 10 → 10%
   - Quantity ≥ 5 → 5%
   - Quantity < 5 → No discount

3. **Discounted Subtotal**  
   `Subtotal − Discount`

4. **Tax**  
   `Discounted Subtotal × Tax Rate`

5. **Total Price**  
   `Discounted Subtotal + Tax`

## 🚀 Live Demo

[View Live Demo](https://pricing-calculator-five-pied.vercel.app/)

## 📂 Project Structure

```text
pricing-calculator/
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
├── index.html
└── README.md
```

## 👩‍💻 Author

**Yasmin Abdelhalim**

GitHub: [@YasminAbdelhalim](https://github.com/YasminAbdelhalim)
