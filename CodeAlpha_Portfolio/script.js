const projects = [
    {
      title: "Smart Soil Advisor",
      description: "AI-based crop recommendation system for farmers using Laravel and ML.",
      image: "assets/project1.png"
    },
    {
      title: "Student Dashboard",
      description: "Responsive student performance dashboard for coaches with charts and filters.",
      image: "assets/project2.png"
    }
  ];
  
  window.onload = () => {
    const container = document.getElementById("project-container");
    projects.forEach(p => {
      const div = document.createElement("div");
      div.className = "project-card";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      `;
      container.appendChild(div);
    });
  };
  