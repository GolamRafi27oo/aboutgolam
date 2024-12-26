let skills = document.getElementById("skills");
let works = document.getElementById("works");
let artworks = document.getElementById("artworks");
let workdetails = document.getElementById("workdetails");
let contact = document.getElementById("contact");
let footer = document.getElementById("footer");

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".cusAnime");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
});

const links = document.querySelectorAll(".btn");
if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      links.forEach((link) => {
        link.classList.remove("border-t-2");
        link.classList.remove("shadow-md");
        link.classList.remove("dark:text-gray-50");
      });
      e.preventDefault();
      link.classList.add("border-t-2");
      link.classList.add("shadow-md");
      link.classList.add("dark:text-gray-50");
    });
  });
}

contact.addEventListener("click", function () {
  contact.classList.add("hidden");
  footer.classList.add("hidden");
  sayhello.innerHTML = `
  <section class="sm:mr-20 sm:ml-20">
    <div class="bg-[#d6d6d8] dark:bg-gray-700 shadow-md rounded-md p-5">
      <ul class="md:flex justify-evenly gap-4 text-center items-center">
        <li class="text-2xl font-bold dark:text-white">Start a project</li>
        <li class="mt-5 mb-8 md:w-52 lg:w-96 relative">Would you like to collaborate on a project? Let's schedule a meeting to discuss our ideas. I'll bring the snacks.</li>
        <li class="mt-5 mb-5"><a class=" font-semibold cursor-pointer hover:bg-[#24c177] hover:text-gray-100 border-solid border-2 border-[#24c177] p-[5px] px-4 py-2 rounded-full text-[#24c177] ease-in duration-300 shadow-md" href="https://www.fiverr.com/golamrafi" target="_blank">Fiverr</a></li>
      </ul>
    </div>
    <div class="text-[#d6d6d8] dark:text-[#374151] flex gap-4 justify-center mt-10 text-4xl">
      <a href="https://github.com/GolamRafi27oo" target="_blank"><i class="fa-brands fa-square-github ease-in duration-150 dark:hover:text-white hover:text-black shadow-md"></i></a>
      <a href="https://www.linkedin.com/in/golam-rafi-b073b6195/" target="_blank"><i class="fa-brands fa-linkedin ease-in duration-150 hover:text-[#0b66c3] shadow-md"></i></a>
      <a href="mailto:golamrafi27oo@gmail.com" target="_blank"><i class="fa-solid fa-square-envelope ease-in duration-150 hover:text-[#f63427] shadow-md"></i></a>
    </div>
  </section>
  `;
});


// Function to show a section and hide the others
function showSection(sectionId) {
  const sections = ['section1', 'section2', 'section3'];

  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (id === sectionId) {
      section.classList.remove('hidden'); // Show the selected section
    } else {
      section.classList.add('hidden'); // Hide the other sections
    }
  });
}

// Add event listeners for the clickable elements
skills.addEventListener('click', () => showSection('section1'));
works.addEventListener('click', () => showSection('section2'));
artworks.addEventListener('click', () => showSection('section3'));


/*
documentation.addEventListener("click", function () {
  //console.log("clicked");
  workdetails.innerHTML = `
    <section class="text-sm sm:mr-20 sm:ml-20">
        <div>
            <h1 class="text-lg font-semibold">Hello there,</h1>
            <p>
                First of all, please accept my apologies for any mistakes in this documentation. I'm an avid front-end enthusiast and a passionate learner. Recently, I've been delving into the world of programming from the ground up, and as part of my journey, I decided to create a documentation resource.
                The main aim of this documentation is to provide valuable assistance to those who have some programming knowledge but might be unsure of how to progress and enhance their skills further. Since I'm also on a learning journey myself, there might be a few errors here and there. But don't worry, together, we can make this resource better.
                Your feedback is highly appreciated, so if you notice any mistakes or have anything to add, please feel free to let me know. This documentation is meant to be a friendly and collaborative space where we can all grow and learn from each other.
                Huge thanks to <a class="text-green-500" href="https://www.linkedin.com/in/napstergfr/" target="_blank">Golam Fazle Rabbi</a> for providing this invaluable resource. Without him, I wouldn't have been able to create it. 
                <br>Thank you for joining me on this exciting learning adventure!
            </p>
            <span class="flex text-base font-semibold pt-5 pb-5 text-green-500">
                <a href="">Documentation - First-Step-Of-learning-Programming <i class="fa-solid fa-link text-sm"></i></a>
            <span>
        </div>
    </section>
    `;
});

*/
