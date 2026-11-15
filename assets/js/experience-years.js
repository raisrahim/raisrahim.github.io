function updateExperienceYears() {
  const count = document.getElementById("experience-years");

  if (count) {
    const startYear = 2011;
    const years = Math.max(15, new Date().getFullYear() - startYear);
    count.textContent = years;
  }
}

updateExperienceYears();
