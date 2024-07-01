const requirementList = document.querySelector(".requirement-list");

const requirments = [
  {
    text: "Have an IDE of your choice. Preferably IDE with an intergrated CLI and ability to do git commands with a GUI",
    contentLink: "Recommended IDE VSCode",
    href: "https://code.visualstudio.com/",
  },
  {
    text: "Have a Github account created",
    contentLink: "Github",
    href: "https://github.com/",
  },
  {
    text: "Ensure you have access to your Command Line Interface (CLI). Windows: CMD. MacOS: Terminal",
  },
];

requirments.forEach((requirement, index) => {
  const requirementText = `${index + 1}. ${requirement.text}. `;
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.textContent = requirementText;
  if (requirement.href !== "") {
    const link = document.createElement("a");
    link.href = requirement.href;
    link.textContent = requirement.contentLink;
    listItem.appendChild(link);
  }
  requirementList.appendChild(listItem);
});

const profileButton = document.querySelector(".profile-button");
const profilePopup = document.querySelector(".profile-popup");

profileButton.addEventListener("click", () => {
  profilePopup.toggleAttribute("data-show");
});

const socialsbuttons = document.querySelectorAll(".socials-button");

const socialLink = [
  { id: "twitter", href: "https://twitter.com/Ctrlyourselfpls" },
  { id: "github", href: "https://github.com/PROPHECY0102" },
];

socialsbuttons.forEach((socialButton) => {
  socialLink.forEach((social) => {
    if (socialButton.id == social.id) {
      socialButton.addEventListener("click", () => {
        window.open(social.href, "_blank");
      });
    }
  });
});

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".lesson-container");

function clearTabs() {
  tabContents.forEach((tab) => {
    tab.removeAttribute("data-show");
  });
}

function clearSelectedButtons() {
  tabButtons.forEach((tabButton) => {
    tabButton.removeAttribute("data-selected");
  });
}

function setSelectedTab(tabID) {
  tabContents.forEach((tab) => {
    if (tab.getAttribute("data-lesson") === tabID) {
      tab.setAttribute("data-show", "");
    }
  });
}

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", () => {
    clearTabs();
    clearSelectedButtons();
    setSelectedTab(tabButton.id);
    tabButton.setAttribute("data-selected", "");
  });
});

document.body.addEventListener("click", (event) => {
  if (
    !event.target.closest(".profile-popup") &&
    !event.target.closest(".profile-button")
  ) {
    const profilePopup = document.querySelector(".profile-popup");
    profilePopup.removeAttribute("data-show");
  }
});

const scrollButton = document.querySelector("#scroll");

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    block: "start",
  });
});
