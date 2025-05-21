const btnEl = document.querySelector(".menu-close-btn");
const headerEl = document.querySelector(".nav-section");
const heroEl = document.querySelector(".hero-section");

btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  heroEl.classList.toggle("nav-open");
});

// STICKY NAV BARRE

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);
obs.observe(sectionHeroEl);

// Lazy images
const img = document.querySelector(".img-cio");
const imgtarget = document.querySelectorAll("img[data-src]");

const obsCallbacks = function (e, observr) {
  const [entry] = e;
  console.log(e);
  if (!entry.isIntersecting) return;
  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy");
    });

    observr.unobserve(entry.target);
  }
};

const observer = new IntersectionObserver(obsCallbacks, {
  root: null,
  threshold: 0,
});

observer.observe(img);

// Revealing section
const allSections = document.querySelectorAll(".sec");

console.log(allSections);
const revealingSec = function (target) {
  target.classList.remove("hidden");
  target.classList.remove("sec1");
  target.classList.remove("sec2");
};
const cb = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  if (entry.isIntersecting) {
    revealingSec(entry.target);
  }
};
const cioSec = document.querySelector(".cio");
const rect = cioSec.getBoundingClientRect();

const obse = new IntersectionObserver(cb, {
  root: null,
  threshold: 0.1,
});
allSections.forEach((sec) => {
  sec.classList.add("hidden");
  obse.observe(sec);
});

if (window.innerHeight > rect.y) {
  revealingSec(cioSec);
}

//const rect = img.getBoundingClientRect();
console.log(rect);
console.log(window.innerHeight);

// Revealing main section
const mainSec = document.querySelector(".main-sec");

const main = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  if (entry.isIntersecting) {
    entry.target.classList.remove("main-sec");
  }
  observer.unobserve(mainSec);
};

const mainObs = new IntersectionObserver(main, {
  root: null,
  threshold: 0,
});
mainObs.observe(mainSec);

// Revealing nav
const head = document.querySelector(".moved-header");

const movedHeader = function (entries, oberver) {
  const [entry] = entries;
  setTimeout(function () {
    if (!entry.isIntersecting) return;
    if (entry.isIntersecting) {
      entry.target.classList.remove("moved-header");
    }
  }, 750);
};

const headerObs = new IntersectionObserver(movedHeader, {
  root: null,
  threshold: 0,
});
headerObs.observe(head);

// Sponsors circle
const logo = document.querySelectorAll(".logo");
console.log(logo);

let counter = 0;
logo.forEach((el) => el.classList.add("invisible-logo"));
logo[counter].classList.add("invisible-logo");

setInterval(function () {
  setInterval(function () {
    logo[counter].classList.remove("invisible-logo");
  }, 1000);
  counter++;
  logo[counter - 1].classList.add("invisible-logo");
  if (counter >= logo.length) {
    counter = 0;
  }
}, 2500);

// Slides
const sketch = document.querySelector(".sketch-app");
const adobe = document.querySelector(".adobe-app");
const figma = document.querySelector(".figma-app");
const chr = document.querySelector(".chrome-app");
const allApps = document.querySelectorAll(".app");

const pic = document.querySelector(".pic");
chr.classList.add("active-app");

function activeBtns(btn, logo) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    allApps.forEach((el) => el.classList.remove("active-app"));
    e.target.closest(".app").classList.add("active-app");
    pic.src = `img/${logo}.jpg`;
  });
}

activeBtns(sketch, "sketch");
activeBtns(adobe, "adobe");
activeBtns(figma, "figma");
activeBtns(chr, "chrome");

// Making sign up work
const box = document.querySelector(".sign-in-box");
const signUpBtn = document.querySelector(".sign-up-btn");
const signInBtn = document.querySelector(".sign-in-btn");
const overlay = document.querySelector(".sign-up");
const content = document.querySelector(".sign-in");
const hello = document.querySelector(".hello");
const signUpText = document.querySelector(".sign-up-text");
const signInText = document.querySelector(".sign-in-text");
const Text = document.querySelector(".acc-text");
const inputs = document.querySelector(".inputs");
const added = document.querySelector(".added");
const inp = document.querySelector(".inp");
const forgot = document.querySelector(".forgot");
const html = document.querySelector("html");

signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.toggle("move-overlay-to-left");
  content.classList.toggle("move-content");
  const html = ` <input type="text" class="inp" placeholder="👤  Name">
  `;

  if (overlay.classList.contains("move-overlay-to-left")) {
    hello.textContent = "Welcome Back";
    signUpText.textContent =
      "To keep connected with us please login with your personal info";
    signUpBtn.textContent = "Sign in";
    forgot.textContent = "Your welcome";
    signInText.textContent = "Sign up";
    Text.textContent = "or use your email for registration";

    signInBtn.textContent = "Sign Up";
    if (!inp.classList.contains("added")) {
      inputs.insertAdjacentHTML("afterbegin", html);
      inp.classList.add("added");
    }
  } else if (!overlay.classList.contains("move-overlay-to-left")) {
    inp.classList.remove("added");
    signUpText.textContent =
      "Enter your personal details and start journey with us";
    hello.textContent = "Hello, Friend";
    signUpBtn.textContent = "Sign up";
    forgot.textContent = "Forgot your password?";
    signInText.textContent = "Sign in";
    Text.textContent = "or use your account";

    signInBtn.textContent = "Sign In";
    if (!inp.classList.contains("added")) {
      inputs.removeChild(inputs.firstElementChild);
    }
  }
});
const haha = document.querySelector(".haha");
const closeCircleBtn = document.querySelector(".circle-close-btn");

const openSignUpModal = function () {
  box.classList.remove("pop-up");
  haha.classList.add("background");
  html.classList.add("stop-scrolling");
};

const popUp = document.querySelectorAll(".btnn");
popUp.forEach((btn) => btn.addEventListener("click", openSignUpModal));

const closeSignUpModal = function () {
  box.classList.add("pop-up");
  haha.classList.remove("background");
  html.classList.remove("stop-scrolling");
};

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("haha")) {
    closeSignUpModal();
  }
});
closeCircleBtn.addEventListener("click", closeSignUpModal);

// Scroll to
const checkItOut = document.querySelector(".check-it-out");
const accessibility = document.querySelector(".accessibility");
const features = document.querySelector(".features");
const customers = document.querySelector(".customers");
const pricing = document.querySelector(".pricing");
const support = document.querySelector(".support");

// sections
const accSec = document.querySelector(".access-section");
const feaSec = document.querySelector(".features-sec");
const cusSec = document.querySelector(".customers-sec");

const gotosec = function (btn, section) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  });
};

gotosec(checkItOut, cioSec);
gotosec(accessibility, accSec);
gotosec(features, feaSec);
gotosec(customers, cusSec);
