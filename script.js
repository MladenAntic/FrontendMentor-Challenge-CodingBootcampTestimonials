const contentWrapper = document.querySelector(".content");
const testimonial = document.querySelector(".testimonial");
const person = document.querySelector(".person");
const position = document.querySelector(".position");
const image = document.querySelector(".image");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

let content = {
  testimonial1:
    " I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. ",
  testimonial2:
    " If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ",
  person1: "Tanya Sinclair",
  person2: "John Tarkpor",
  position1: "UX Engineer",
  position2: "Junior Front-end developer",
  image1: 'url("images/image-tanya.jpg") no-repeat center center/cover',
  image2: 'url("images/image-john.jpg") no-repeat center center/cover',
};

let index = 1;

function content1() {
  testimonial.innerText = content.testimonial1;
  person.innerText = content.person1;
  position.innerText = content.position1;
  image.style.background = content.image1;
}

function content2() {
  testimonial.innerText = content.testimonial2;
  person.innerText = content.person2;
  position.innerText = content.position2;
  image.style.background = content.image2;
}

function changeTestimonial() {
  if (index > 2) {
    index = 1;
  } else if (index < 1) {
    index = 2;
  }

  switch (index) {
    case 1:
      content1();
      break;
    case 2:
      content2();
      break;
  }
}

function animateContent() {
  contentWrapper.className = "content";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      contentWrapper.classList.add("animation");
    });
  });
}

next.addEventListener("click", () => {
  index++;
  changeTestimonial();
  animateContent();
});

previous.addEventListener("click", () => {
  index--;
  changeTestimonial();
  animateContent();
});
