export const products = [
  {
    name: "Gym Membership",
    image: "products/bell-reserve.png",
    description: "Full access to the gym and equipment at any time during working hours. Ideal for those who prefer to train independently at their own pace.",
    value: ["Unlimited access", "Modern equipment", "Flexible schedule"],
    price: 30
  },
  {
    name: "Group Trainings",
    image: "products/push.png",
    description: "Dynamic and motivating group sessions led by certified instructors. Perfect for those who thrive in a community environment.",
    value: ["Certified trainers", "Community support", "Structured sessions"],
    price: 40
  },
  {
    name: "Personal Trainings",
    image: "products/jump.png",
    description: "One-on-one sessions tailored to your individual goals. Receive focused attention and a personalized training plan.",
    value: ["Custom workout plans", "Progress tracking", "Expert guidance"],
    price: 55
  },
  {
    name: "Specialized Programs",
    image: "products/ketle.png",
    description: "Targeted programs for specific goals like weight loss, strength, or rehabilitation. Designed by professionals to deliver results.",
    value: ["Goal-specific routines", "Expert-designed plans", "Supportive coaching"],
    price: 65
  }
];

export function renderPrograms() {
  let content = '';
  products.forEach((product) => {
    const html = `
      <div class="program">
      <h2 class="program-name">${product.name}</h2>
      <img src="${product.image}" alt="" class="program-image">
      <p class="description">${product.description}</p>
      <div class="value-holder">
        <span class="value-flex"><img src="images/done.png" alt="done" class="done"><p class="value">${product.value[0]}</p></span>
        <span class="value-flex"><img src="images/done.png" alt="done" class="done"><p class="value">${product.value[1]}</p></span>
        <span class="value-flex"><img src="images/done.png" alt="done" class="done"><p class="value">${product.value[2]}</p></span>
      </div>
      <p class="price">subscription plan $${product.price}/month</p>
      <button class="program-button">Chose program</button>
    </div>
    `;

    content += html;
  });

  document.querySelector('.js-programs-container').innerHTML = content;
}