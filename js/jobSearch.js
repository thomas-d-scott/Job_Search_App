// Job Search

const displayMessage = (message, colour) => {
  const messageBox = document.querySelector(".job-search-message");
  messageBox.innerHTML += `<p>${message}</p>`;
  messageBox.style.background = `${colour}`;
  setTimeout(() => {
    messageBox.style.background = null;
    messageBox.innerHTML = null;
  }, 5000);
};

const displayJobSearchResults = (data) => {
  const resultsLocation = document.getElementById("search-results-output");

  resultsLocation.innerHTML = null;

  data.forEach((job) => {
    resultsLocation.innerHTML += `
        <div class="job-search-details">
            <h3>${job.title}</h3>
            <h4>Job Description</h4>
            <p>${job.description}</p>
            <h4>Job Qualifications</h4>
            <p>${job.qualifications}</p>
            <h4>Job Tasks</h4>
            <p>${job.qualifications}</p>
        </div>      
      `;
  });
};

const fetchJobData = (query) => {
  fetch(`http://api.lmiforall.org.uk/api/v1/soc/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("searchQuery").innerText = `for '${query}'`;
      displayJobSearchResults(data);
    })
    .catch((err) => {
      console.log(err);
      return;
    });
};

const searchJob = (e) => {
  e.preventDefault();

  let query = document.getElementById("search").value;

  if (!query) {
    displayMessage(
      "Please enter a search string or select from drop-down menu",
      "red"
    );
    return;
  }

  fetchJobData(query);
};

const selectJobArea = (e) => {
  e.preventDefault();

  let query = document.getElementById("selectJob").value;

  if (!query) {
    return;
  }

  fetchJobData(query);
};

document
  .getElementById("job-search-form")
  .addEventListener("submit", searchJob);

document.getElementById("selectJob").addEventListener("change", selectJobArea);
