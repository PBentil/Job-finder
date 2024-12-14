// Sample job list stored in JavaScript (can be expanded)
const jobListData = [
    { title: "Software Developer", company: "ABC Tech", category: "Tech" },
    { title: "Graphic Designer", company: "Creative Studio", category: "Design" },
    { title: "Data Analyst", company: "Data Corp", category: "Tech" },
    { title: "Project Manager", company: "XYZ Ltd", category: "Management" },
    { title: "UX/UI Designer", company: "Design Masters", category: "Design" },
    { title: "Product Owner", company: "Tech Innovations", category: "Management" },
    { title: "Web Developer", company: "WebWorks", category: "Tech" },
    { title: "Marketing Specialist", company: "MarketPro", category: "Marketing" },
    { title: "HR Specialist", company: "People Inc.", category: "Human Resources" },
    { title: "Business Analyst", company: "TechnoSolutions", category: "Tech" },
    { title: "Front-end Developer", company: "CreativeTech", category: "Tech" },
    { title: "Backend Developer", company: "Digital World", category: "Tech" },
    { title: "Project Coordinator", company: "StartUp Innovations", category: "Management" },
    { title: "Network Engineer", company: "NetSys", category: "Tech" },
    { title: "System Administrator", company: "Secure Networks", category: "Tech" },
    { title: "IT Support Specialist", company: "SupportPro", category: "Tech" },
    { title: "SEO Specialist", company: "Search Gurus", category: "Marketing" },
    { title: "Content Writer", company: "WriteRight", category: "Design" },
    { title: "Social Media Manager", company: "SocialWorks", category: "Marketing" },
    { title: "Full Stack Developer", company: "Tech Titans", category: "Tech" },
    { title: "Graphic Designer", company: "Artistic Vision", category: "Design" },
    { title: "Creative Director", company: "Design Innovations", category: "Design" },
    { title: "Mobile Developer", company: "AppFusion", category: "Tech" },
    { title: "Data Scientist", company: "Big Data Solutions", category: "Tech" },
    { title: "Financial Analyst", company: "FinancePros", category: "Finance" },
    { title: "Product Manager", company: "ProductHub", category: "Management" },
    { title: "Recruiter", company: "Talent Hunters", category: "Human Resources" },
    { title: "UI Developer", company: "Interface Pros", category: "Tech" },
    { title: "Web Designer", company: "Creative Agency", category: "Design" },
    { title: "QA Tester", company: "TestMasters", category: "Tech" },
    { title: "Business Development Manager", company: "Growth Partners", category: "Management" },
    { title: "Operations Manager", company: "Efficient Systems", category: "Management" },
    { title: "Customer Service Specialist", company: "CareCenter", category: "Customer Service" },
    { title: "Content Manager", company: "ContentWorks", category: "Marketing" },
    { title: "Digital Marketing Specialist", company: "BrandBoost", category: "Marketing" },
    { title: "Cloud Solutions Architect", company: "CloudSpace", category: "Tech" },
    { title: "Sales Manager", company: "SalesForce", category: "Sales" },
    { title: "Business Consultant", company: "ConsultCo", category: "Management" },
    { title: "E-commerce Manager", company: "E-shop Solutions", category: "Marketing" },
    { title: "App Developer", company: "AppWorld", category: "Tech" },
    { title: "Accountant", company: "Finance Hub", category: "Finance" },
    { title: "Chief Technology Officer", company: "TechGlobal", category: "Management" },
    { title: "Data Engineer", company: "DataVision", category: "Tech" },
    { title: "PR Specialist", company: "PR Connect", category: "Marketing" },
    { title: "Business Intelligence Analyst", company: "IntelliCorp", category: "Tech" },
    { title: "Enterprise Architect", company: "SolutionCo", category: "Tech" },
    { title: "Cybersecurity Analyst", company: "SecureNet", category: "Tech" },
    { title: "Legal Advisor", company: "Law Solutions", category: "Legal" },
    { title: "UX Researcher", company: "User Research Co.", category: "Design" },
    { title: "Product Designer", company: "Innovative Designs", category: "Design" },
    { title: "Sales Executive", company: "SalesForce", category: "Sales" },
    { title: "Software Architect", company: "CodeMasters", category: "Tech" }
];




document.getElementById('cv-upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const cvFile = document.getElementById('cv-file').files[0];

    if (cvFile) {
     
        const reader = new FileReader();

        reader.onloadend = function () {
            // Save the file data in localStorage
            localStorage.setItem('user-cv', reader.result);

            // Show success message
            document.getElementById('upload-status').innerHTML = '<p>CV uploaded successfully!</p>';
        }

        reader.readAsDataURL(cvFile); // Convert the file to base64
    } else {
        document.getElementById('upload-status').innerHTML = '<p>Please select a file to upload.</p>';
    }
});


function displayJobs(jobs) {
    const jobListContainer = document.getElementById('job-list');
    jobListContainer.innerHTML = ''; 

    if (jobs.length === 0) {
        jobListContainer.innerHTML = '<p>No jobs found.</p>';
        return;
    }

    // Loop through each job and create a job card
    jobs.forEach((job, index) => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.setAttribute('data-index', index); 

        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <button class="apply-btn" data-index="${index}">Apply</button>

        `;
        jobCard.querySelector('.apply-btn').addEventListener('click', () => {
            applyForJob(index); // Apply function triggered by the Apply button
           
            saveApplication(selectedJob); // Save the application
            highlightJob(jobIndex); // Highlight the selected job card
        });

        jobListContainer.appendChild(jobCard);
    });
}

function saveApplication(job) {
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.push(job);
    localStorage.setItem('applications', JSON.stringify(applications));
}

function applyForJob(jobIndex) {
    const selectedJob = jobListData[jobIndex];
    alert(`You have applied for the position: ${selectedJob.title} at ${selectedJob.company}`);
   
}



function loadApplications() {
    // Retrieve the stored applications from localStorage 
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    
    
    const applicationList = document.getElementById('application-list');
    
    // Clear any previous content
    applicationList.innerHTML = '';

    // Check if there are any applications
    if (applications.length === 0) {
        // If no applications, display a 'No jobs found' message
        const noJobsMessage = document.createElement('p');
        noJobsMessage.textContent = "No jobs found. Start applying to jobs!";
        applicationList.appendChild(noJobsMessage);
    } else {
        // Loop through each application and create a list item to display it
        applications.forEach(application => {
            const listItem = document.createElement('li');
            listItem.textContent = `${application.title} at ${application.company}`;
            applicationList.appendChild(listItem);
        });
    }
}

// Call the loadApplications function when the page loads
window.onload = loadApplications;


// Function to handle job application
function applyForJob(jobIndex) {
    const selectedJob = jobListData[jobIndex];
    alert(`You have applied for the position: ${selectedJob.title} at ${selectedJob.company} and will get feedback in your mail`);
    highlightJob(jobIndex); // Highlight the selected job card
    
}

// Function to highlight the selected job card
function highlightJob(jobIndex) {
    const jobCards = document.querySelectorAll('.job-card');
    jobCards.forEach(card => card.classList.remove('selected')); // Remove previous highlights
    jobCards[jobIndex].classList.add('selected'); // Add highlight to selected job card
}

// Function to filter jobs based on search input
function filterJobs() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();

    // Filter jobs based on title matching the search query
    const filteredJobs = jobListData.filter(job => job.title.toLowerCase().includes(searchQuery));

    // Display the filtered jobs
    displayJobs(filteredJobs);
}


// Initially display all jobs when the page loads
displayJobs(jobListData);



