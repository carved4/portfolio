const GITHUB_USERNAME = "carved4";
async function fetchGitHubProjects() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const repos = await response.json();

    const projects = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    displayProjects(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    document.getElementById("projectsGrid").innerHTML =
      '<div class="loading">Failed to load projects. Please check back later.</div>';
  }
}

function displayProjects(projects) {
  const projectsGrid = document.getElementById("projectsGrid");

  if (projects.length === 0) {
    projectsGrid.innerHTML = '<div class="loading">No projects found.</div>';
    return;
  }

  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card">
            <div class="project-card-header">
                <div class="project-card-title">${escapeHtml(project.name)}</div>
                <div class="project-card-description">
                    ${project.description ? escapeHtml(project.description) : "No description available"}
                </div>
                <div class="project-card-meta">
                    <span>✰${project.stargazers_count}</span>
                    <span>Ψ${project.forks_count}</span>
                    ${project.language ? `<span>▪ ${escapeHtml(project.language)}</span>` : ""}
                </div>
            </div>
            <div class="project-card-details">
                ${
                  project.topics && project.topics.length > 0
                    ? `
                    <div class="project-topics">
                        <strong>Topics:</strong>
                        ${project.topics.map((topic) => `<span class="topic-tag">${escapeHtml(topic)}</span>`).join("")}
                    </div>
                `
                    : ""
                }
                <div class="project-stats">
                    <div>Created: ${new Date(project.created_at).toLocaleDateString()}</div>
                    <div>Updated: ${new Date(project.updated_at).toLocaleDateString()}</div>
                    ${project.license ? `<div>License: ${escapeHtml(project.license.name)}</div>` : ""}
                </div>
                <div class="project-links">
                    <a href="${project.html_url}" target="_blank" class="project-link">View on GitHub</a>
                    ${project.homepage ? `<a href="${project.homepage}" target="_blank" class="project-link">Live Demo</a>` : ""}
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Load projects on page load
document.addEventListener("DOMContentLoaded", () => {
  fetchGitHubProjects();
});
