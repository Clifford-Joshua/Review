// local reviews data
let reviews = [
  {
    id: 1,
    name: "Sara Jones ",
    job: "Ux Designer",
    img: "photo-female 1.jpg",
    text: `  A UI/UX designer's job is to create user-friendly  interfaces that
    enable users to understand how to use complex technical products. If
    you're passionate about the latest technology trends and devices.`,
  },
  {
    id: 2,
    name: "Susan Smith",
    job: "Web Developer",
    img: "photo-female 2.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "Anna Johnson",
    job: "Web Designer",
    img: "photo-male 1.webp",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: "Peter Jones",
    job: "Intern",
    img: "photo-male 2.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 5,
    name: "Bill Anderson",
    job: "The Boss",
    img: "photo-male 3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
let showitems = 0;
const authorname = document.querySelector("#author");
const job = document.querySelector("#job");
const information = document.querySelector("#info");
const image = document.querySelector("#person-img");
const btn = document.querySelectorAll(".button");
// onload
window.addEventListener("DOMContentLoaded", () => {
  items();
});
// function for items
function items() {
  let currentitems = reviews[showitems];
  authorname.textContent = currentitems.name;
  job.textContent = currentitems.job;
  information.textContent = currentitems.text;
  image.src = currentitems.img;
}
// onclick event btn
btn.forEach((Eachbtn) => {
  Eachbtn.addEventListener("click", (e) => {
    let currentbtn = e.currentTarget.classList;
    // next btn
    if (currentbtn.contains("next-btn")) {
      showitems++;
      if (showitems > reviews.length - 1) {
        showitems = 0;
      }
      items();
    }
    // previous btn
    if (currentbtn.contains("prev-btn")) {
      showitems--;
      if (showitems < 0) {
        showitems = reviews.length - 1;
      }
      items();
    }
    if (currentbtn.contains("random-btn")) {
      showitems = Math.floor(Math.random() * reviews.length);
      items();
    }
  });
});
