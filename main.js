const projects = [
  {
    title: "Interactive Quiz Application",
    description: "An interactive quiz app using HTML, CSS, and JavaScript.",
    link: "https://github.com/Anjalikundu05/Interactive-quiz-applocation"
  },
  {
    title: "Messaging App",
    description: "A real-time messaging app built using localStorage and JS.",
    link: "https://github.com/Anjalikundu05/messaging-app"
  },
  {
    title: "Car Renting Website",
    description: "A website for booking and renting cars, built with frontend technologies.",
    link: "#"
  }
];

function displayProjects() {
  const container = document.getElementById("project-list");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";
    link.textContent = "View on GitHub";
    link.style.display = "inline-block";
    link.style.marginTop = "10px";
    link.style.color = "#4f46e5";
    link.style.textDecoration = "none";
    link.style.fontWeight = "bold";

    link.onmouseover = () => (link.style.textDecoration = "underline");
    link.onmouseout = () => (link.style.textDecoration = "none");

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);
    container.appendChild(card);
  });
}

window.onload = displayProjects;
