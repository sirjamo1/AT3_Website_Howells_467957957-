const createHeader = () => {
    const toggleNavDisplay = (e) => {
        e.stopPropagation();
        navList.classList.toggle("show-mobile-nav");
    };
    const header = document.getElementsByTagName("header")[0];
    console.log(header);
    const logoContainer = document.createElement("article");
    logoContainer.setAttribute("class", "logo-container");
    const heartHomeLink = document.createElement("a");
    heartHomeLink.setAttribute("href", "/index.html");
    const heartLogo = document.createElement("span");
    heartLogo.setAttribute("class", "heart-logo");
    heartHomeLink.appendChild(heartLogo);
    logoContainer.appendChild(heartHomeLink);
    const logoTitle = document.createElement("h4");
    logoTitle.appendChild(document.createTextNode("ML Strength"));
    logoContainer.appendChild(logoTitle);
    const logoSubTitle = document.createElement("h5");
    logoSubTitle.appendChild(document.createTextNode("Pump your heart!"));
    logoContainer.appendChild(logoSubTitle);
    header.appendChild(logoContainer);
    const navContainer = document.createElement("nav");
    const menuButton = document.createElement("button");
    menuButton.setAttribute("id", "menu-button");
    menuButton.setAttribute("title", "Open navigation links");
    menuButton.addEventListener("click", (e) => toggleNavDisplay(e));
    for (let i = 0; i < 3; i += 1) {
        const hamburgerSpan = document.createElement("span");
        hamburgerSpan.addEventListener("click", toggleNavDisplay);
        menuButton.appendChild(hamburgerSpan);
    }
    navContainer.appendChild(menuButton);
    const navList = document.createElement("ul");
    navList.setAttribute("class", "nav-list");
    const listItemHome = document.createElement("li");
    const listLinkHome = document.createElement("a");
    listLinkHome.setAttribute("href", "/index.html");
    listLinkHome.appendChild(document.createTextNode("Home"));
    listItemHome.appendChild(listLinkHome);
    navList.appendChild(listItemHome);
    const listItemAbout = document.createElement("li");
    const listLinkAbout = document.createElement("a");
    listLinkAbout.setAttribute("href", "../html/about.html");
    listLinkAbout.appendChild(document.createTextNode("About"));
    listItemAbout.appendChild(listLinkAbout);
    navList.appendChild(listItemAbout);
    const listItemClasses = document.createElement("li");
    const listLinkClasses = document.createElement("a");
    listLinkClasses.setAttribute("href", "../html/classes.html");
    listLinkClasses.appendChild(document.createTextNode("Classes"));
    listItemClasses.appendChild(listLinkClasses);
    navList.appendChild(listItemClasses);
    const listItemForm = document.createElement("li");
    const listLinkForm = document.createElement("a");
    listLinkForm.setAttribute("href", "../html/form.html");
    listLinkForm.appendChild(document.createTextNode("Contact us"));
    listItemForm.appendChild(listLinkForm);
    navList.appendChild(listItemForm);
    const listItemPrivacy = document.createElement("li");
    const listLinkPrivacy = document.createElement("a");
    listLinkPrivacy.setAttribute("href", "../html/privacy.html");
    listLinkPrivacy.appendChild(document.createTextNode("Privacy"));
    listItemPrivacy.appendChild(listLinkPrivacy);
    navList.appendChild(listItemPrivacy);
    navContainer.appendChild(navList);
    header.appendChild(navContainer);
};
createHeader();

const createFooter = () => {
    const footerContainer = document.getElementsByTagName("footer")[0];
    const companyText = document.createElement("p");
    companyText.innerHTML = `ML Strength &copy ${new Date().getFullYear()}`;
    footerContainer.appendChild(companyText);
    const rightSection = document.createElement("section");
    const developerText = document.createElement("p");
    developerText.appendChild(
        document.createTextNode("James Howells #467957957")
    );
    footerContainer.appendChild(developerText);
};
createFooter();
const showClassTable = (classesButtons, i) => {
    for (let j = 0; j < classesButtons.length; j += 1) {
        classesButtons[j].classList.remove("classes-button-selected");
        const tableToAddClass = document.getElementsByClassName(
            `${classesButtons[j].id}-container`
        );
        tableToAddClass[0].classList.add("table-hidden");
    }
    classesButtons[i].classList.add("classes-button-selected");
    const tableContainer = document.getElementsByClassName(
        `${classesButtons[i].id}-container`
    );
    tableContainer[0].classList.toggle("table-hidden");
};

const addEventToButtons = () => {
    const classesButtons = document.getElementsByClassName("classes-button");
    for (let i = 0; i < classesButtons.length; i += 1) {
        classesButtons[i].addEventListener("click", () =>
            showClassTable(classesButtons, i)
        );
    }
};
addEventToButtons();

//Remove show-mobile-nav class (if it was open when resizing screen)
window.addEventListener("resize", () => {
    const navList = document.getElementsByClassName("nav-list");
    if (
        document.body.clientWidth >= 500 &&
        navList[0].classList.contains("show-mobile-nav")
    ) {
        navList[0].classList.remove("show-mobile-nav");
    }
});
