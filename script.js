//Selectors
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let section = document.getElementsByTagName("section");
let hexagon = document.getElementsByClassName("hexagon");

//Events

//Navbar
mixpanel.track_links("#nav-about", "nav-about-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links("#nav-experience", "nav-experience-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links("#nav-work", "nav-work-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links("#nav-writings", "nav-writings-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links("#nav-contact", "nav-contact-clicked", {
  referrer: document.referrer,
});

//Home
mixpanel.track_links("#github-logo", "logo-github-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links("#linkedin-logo", "logo-linkedin-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links("#twitter-logo", "logo-twitter-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links("#hashnode-logo", "logo-hashnode-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links("#home-contact", "home-contact-clicked", {
  referrer: document.referrer,
});

//About
mixpanel.track_links("#about-jupiter-link", "about-jupiter-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links(
  "#about-cv-download-clicked",
  "about-cv-download-clicked",
  {
    referrer: document.referrer,
  }
);

//Experience
mixpanel.track_links("#experience-jupiter-link", "exprience-jupiter-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links(
  "#experience-geekyants-link",
  "experience-geekyants-clicked",
  {
    referrer: document.referrer,
  }
);
mixpanel.track_links(
  "#experience-litmusblox-link",
  "experience-litmusblox-clicked",
  {
    referrer: document.referrer,
  }
);

//Work
mixpanel.track_links("#work-cryptobase-link", "work-cryptobase-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links("#work-newyorker-link", "work-newyorker-clicked", {
  referrer: document.referrer,
});
mixpanel.track_links("#work-shopify-link", "work-shopify-clicked", {
  referrer: document.referrer,
});

//Writings
mixpanel.track_links(
  "#writings-nftcollection-link",
  "writings-nftCollection-clicked",
  {
    referrer: document.referrer,
  }
);
mixpanel.track_links(
  "#writings-blockchainapp-link",
  "writings-blockchainApp-clicked",
  {
    referrer: document.referrer,
  }
);
mixpanel.track_links(
  "#writings-chromeextension-link",
  "writings-chromeExtension-clicked",
  {
    referrer: document.referrer,
  }
);

// Scroll Header Logic
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

//Dark Mode Logic
let darkmode = document.querySelector("#darkmode");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
    for (let item of section) {
      item.classList.add("active");
    }
    for (let item of hexagon) {
      item.classList.add("active");
    }
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
    for (let item of section) {
      item.classList.remove("active");
    }
    for (let item of hexagon) {
      item.classList.remove("active");
    }
  }
};
