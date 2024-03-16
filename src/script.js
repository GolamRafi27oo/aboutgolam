let skills = document.getElementById("skills");
let works = document.getElementById("works");
let artworks = document.getElementById("artworks");
let workdetails = document.getElementById("workdetails");
let contact = document.getElementById("contact");
let footer = document.getElementById("footer");

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

skills.addEventListener("click", function () {
  workdetails.innerHTML = `
  <section class="text-sm sm:mr-20 sm:ml-20">
  <div class="mb-5 p-2">
    <h1 class="uppercase text-lg font-semibold">Problem & Judge</h1>
      <div class="pt-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center font-semibold">
        <div
          class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm ease-in duration-150">
          <img class="rounded-sm h-20 w-20 flex p-2"
          src="src/image/github.png"" alt="" />
          <div class="flex items-center">
            <a href="https://github.com/GolamRafi27oo" target="_blank"
              >Github
              <i class="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>
        <div
          class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm  ease-in duration-150">
          <img
            class="rounded-sm h-20 w-20 flex p-2"
            src="src/image/beecrowd.png"
            alt="" />
            <div
            class="flex items-center">
            <a href="https://www.beecrowd.com.br/judge/en/profile/461644" target="_blank">Beecrowd <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
        <div
          class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm  ease-in duration-150">
          <img
            class="rounded-sm h-20 w-20 flex p-2"
            src="src/image/LeetCode.png"
            alt="" />
            <div
            class="flex items-center">
            <a href="https://leetcode.com/golam27oo/" target="_blank">Leetcode <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
        <div
        class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm ease-in duration-150">
        <img
          class="rounded-sm h-20 w-20 flex p-2"
          src="src/image/codeforce.png"
          alt="" />
        <div class="flex items-center">
          <a
            href="https://codeforces.com/profile/Arifin_27oo"
            target="_blank"
            >Codeforces
            <i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
        <div
          class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm  ease-in duration-150">
          <img
            class="rounded-sm h-20 w-20 flex p-2"
            src="src/image/cssbattle.png"
            alt="" />
            <div
            class="flex items-center">
            <a href="https://cssbattle.dev/player/arifin_27oo" target="_blank">CSSBattle <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
    </div>
  </div>
  <div>
    <h1 class="p-2 uppercase text-lg font-semibold">programming skills</h1>
    <div
      class="p-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div
        class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm  ease-in duration-150">
        <img
          class="rounded-sm h-20 w-20 flex p-2"
          src="src/image/JavaScript-logo.png"
          alt="" />
        <h1 class="flex-auto pt-8 font-semibold">javaScript</h1>
      </div>
      <div
        class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm ease-in duration-150">
        <img
          class="rounded-sm h-20 w-20 flex p-2"
          src="src/image/nodejs-development-services.webp"
          alt="" />
        <h1 class="flex-auto pt-8 font-semibold">NodeJS</h1>
      </div>

      <div
        class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm ease-in duration-150">
        <img
          class="rounded-sm h-20 w-20 flex p-2"
          src="src/image/c.jpg"
          alt="" />
        <h1 class="flex-auto pt-8 font-semibold">C</h1>
      </div>
      <div
        class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm ease-in duration-150">
        <img
          class="rounded-sm h-20 w-20 flex p-2"
          src="src/image/html.png"
          alt="" />
        <h1 class="flex-auto pt-8 font-semibold">HTML</h1>
      </div>
      <div
        class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm ease-in duration-150">
        <img
          class="rounded-sm h-20 w-20 flex p-2"
          src="src/image/css.webp"
          alt="" />
        <h1 class="flex-auto pt-8 font-semibold">CSS</h1>
      </div>
      <div
        class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm ease-in duration-150">
        <img
          class="rounded-sm h-20 w-20 flex p-2"
          src="src/image/tailwinds.png"
          alt="" />
        <h1 class="flex-auto pt-8 font-semibold">Tailwind CSS</h1>
      </div>
      <div
        class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm ease-in duration-150">
        <img
          class="rounded-sm h-20 w-20 flex p-2"
          src="src/image/Bootstrap_logo.jpg"
          alt="" />
        <h1 class="flex-auto pt-8 font-semibold">BootStrap</h1>
      </div>
      <div
        class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm ease-in duration-150">
        <img
          class="rounded-sm h-20 w-20 flex p-2"
          src="src/image/git.png"
          alt="" />
        <h1 class="flex-auto pt-8 font-semibold">Git</h1>
      </div>
      <div
        class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] hover:bg-[#c7c7c7] shadow-md group text-center rounded-sm ease-in duration-150">
        <img
          class="rounded-sm h-20 w-20 flex p-2"
          src="src/image/github.png"
          alt="" />
        <h1 class="flex-auto pt-8 font-semibold">Github</h1>
      </div>
    </div>
      </div>
    </section>
    `;
});

works.addEventListener("click", function () {
  //console.log("clicked");
  workdetails.innerHTML = `
      <section class="text-sm sm:mr-20 sm:ml-20">
        <div class="mb-5">
          <h1 class="uppercase text-lg font-semibold">Documentation</h1>
          <div class="pt-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center font-semibold">
            <div
              class="flex dark:bg-[#374151] bg-[#d6d6d8] hover:bg-[#c7c7c7] dark:hover:bg-[#222222] shadow-md rounded-sm  h-20 justify-center pt-7 ease-in duration-150">
              <a href="https://github.com/GolamRafi27oo/First-Step-Of-learning-Programming" target="_blank">First-Step-Of-learning-Programming</a>
            </div>
            <div
              class="flex dark:bg-[#374151] bg-[#d6d6d8] hover:bg-[#c7c7c7] dark:hover:bg-[#222222] shadow-md rounded-sm  h-20 justify-center pt-7 ease-in duration-150">
              <a href="https://github.com/GolamRafi27oo/OSI-Model" target="_blank">OSI Model</a>
            </div>
            <!-- 
            dissable/working on it!
            <div
              class="flex dark:bg-[#222222] bg-[#747474] rounded-sm h-20 justify-center pt-7 group opacity-40 ease-in duration-150">
              <a class="cursor-not-allowed dark:text-white">OSI Model (Working on it)</a>
          </div>
            -->

          </div>
        </div>
        <div>
          <h1 class="uppercase text-lg font-semibold">Frontend</h1>
          <div class="pt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div
              class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] shadow-md  group text-center rounded-sm ease-in duration-150">
              <img
                class="rounded-sm h-32 w-32 flex p-2" 
                src="https://golamrafi27oo.github.io/NEFTStore/assets/img/favicon.jpg"
                alt="" />
              <a
                class="flex-auto flex justify-center items-center font-semibold dark:hover:bg-[#111111] hover:bg-[#c7c7c7]"
                href="https://neftshop.be/" target="_blank"
                >
                <div>
                  <h1>NeftShop</h1>
                  <h1>(Client Site) <i class="fa-solid fa-arrow-up-right-from-square"></i></h1>
                </div>
                </a>
            </div>

            <div
            class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] shadow-md  group text-center rounded-sm ease-in duration-150">
            <img
              class="rounded-sm h-32 w-32 flex p-2" 
              src="src/image/grace.png"
              alt="" />
            <a
              class="flex-auto flex justify-center items-center font-semibold dark:hover:bg-[#111111] hover:bg-[#c7c7c7]"
              href="https://graceperrone.com/" target="_blank"
              >
              <div>
                <h1>Grace Perrone</h1>
                <h1>(Client Site) <i class="fa-solid fa-arrow-up-right-from-square"></i></h1>
              </div>
              </a>
             </div>

            <div
              class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] shadow-md group text-center rounded-sm ease-in duration-150">
              <img
                class="rounded-sm h-32 w-32 flex p-2"
                src="https://golamrafi27oo.github.io/NinjaMail/image/ej8ophzz0k4ecztye.jpg"
                alt="" />
              <a
                class="flex-auto pt-14 font-semibold dark:hover:bg-[#111111] hover:bg-[#c7c7c7]"
                href="https://golamrafi27oo.github.io/NinjaMail/" target="_blank"
                >NinjaMail <i class="fa-solid fa-arrow-up-right-from-square"></i></a
              >
            </div>

            <div
              class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] shadow-md group text-center rounded-sm ease-in duration-150">
              <img
                class="rounded-sm h-32 w-32 flex p-2"
                src="
                https://golamrafi27oo.github.io/roasterchild/assets/img/hero-bg.jpg"
                alt="" />
              <a
                class="flex-auto pt-14 font-semibold dark:hover:bg-[#111111] hover:bg-[#c7c7c7]"
                href="https://golamrafi27oo.github.io/roasterchild/" target="_blank"
                >Roasterchild <i class="fa-solid fa-arrow-up-right-from-square"></i></a
              >
            </div>

            <div
              class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] shadow-md group text-center rounded-sm ease-in duration-150">
              <img
                class="rounded-sm h-32 w-32 flex p-2"
                src="https://golamrafi27oo.github.io/TailwindCSS-Development-/image/Group4.png"
                alt="" />
              <a
                class="flex-auto pt-14 font-semibold dark:hover:bg-[#111111] hover:bg-[#c7c7c7]"
                href="https://golamrafi27oo.github.io/TailwindCSS-Development-/" target="_blank"
                >Landing Page <i class="fa-solid fa-arrow-up-right-from-square"></i></a
              >
            </div>

            <div
              class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] shadow-md group text-center rounded-sm ease-in duration-150">
              <img
                class="rounded-sm h-32 w-32 flex p-2"
                src="https://golamrafi27oo.github.io/work-about-page/Image/profile.jpg"
                alt="" />
              <a
                class="flex-auto pt-14 font-semibold p-2 dark:hover:bg-[#111111] hover:bg-[#c7c7c7]"
                href="https://golamrafi27oo.github.io/work-about-page/" target="_blank"
                >About Page <i class="fa-solid fa-arrow-up-right-from-square"></i></a
              >
            </div>

            <div
              class="flex dark:bg-[#374151] bg-[#d6d6d8] dark:hover:bg-[#222222] shadow-md group text-center rounded-sm ease-in duration-150">
              <img
                class="rounded-sm h-32 w-32 flex p-2"
                src="https://golamrafi27oo.github.io/loginPage/img/photo_2022-02-19_21-16-32.jpg"
                alt="" />
              <a
                class="flex-auto pt-14 font-semibold dark:hover:bg-[#111111] hover:bg-[#c7c7c7]"
                href="https://golamrafi27oo.github.io/loginPage/" target="_blank"
                >Login Page <i class="fa-solid fa-arrow-up-right-from-square"></i></a
              >
            </div>
          </div>
        </div>
        <div class="pt-5 text-center hover:text-[#677997]">
          <a href="https://github.com/GolamRafi27oo" target="_blank"
            >Source Codes</a>
            <i
              class="fa-solid fa-arrow-right fa-flip-vertical cursor-pointer"></i>
        </div>
      </section>
      `;
});

artworks.addEventListener("click", function () {
  //artwork.classList.add("bg-green-500");
  //frontend.classList.remove("bg-green-500");
  //console.log("clicked");
  let bigImage = document.getElementById("bigImage");

  workdetails.innerHTML = `
    <section class="text-sm sm:mr-20 sm:ml-20">
    <div class="mb-5 p-2">
    <h1 class="uppercase text-xs font-semibold">
      your support is important
    </h1>
    <h1
      class="uppercase text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-10% to-emerald-300 to-90%">
      Because you are important!
    </h1>
    <div
      class="pt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center font-semibold text-black">
      <div
        class="flex bg-gradient-to-r from-pink-500 hover:to-yellow-500 shadow-md text-center rounded-sm ease-in duration-150">
        <i
          class="fa-brands fa-square-instagram shadow-md rounded-sm h-100 w-100 flex p-2"></i>
        <div class="flex items-center">
          <a
            href="https://www.Instagram.com/galleryofgolam"
            target="_blank"
            >Instagram
          </a>
        </div>
      </div>
      <div
        class="flex bg-gradient-to-r from-red-600 hover:to-red-300 shadow-md text-center rounded-sm ease-in duration-150">
        <i
          class="fa-brands fa-square-pinterest shadow-md rounded-sm h-100 w-100 flex p-2"></i>
        <div class="flex items-center">
          <a
            href="https://www.pinterest.com/galleryofgolam/"
            target="_blank"
            >Pinterest
            </a>
          </div>
        </div>
        <div
          class="flex bg-gradient-to-r from-blue-700 hover:to-blue-300 shadow-md text-center rounded-sm ease-in duration-150">
          <i
            class="fa-brands fa-square-facebook shadow-md rounded-sm h-100 w-100 flex p-2"></i>
          <div class="flex items-center">
            <a
              href="https://www.facebook.com/galleryofgolam"
              target="_blank"
              >Facebook
            </a>
          </div>
        </div>
        </div>
      </div>
      <div>
          <h1 class="p-2 uppercase text-lg font-semibold">Art Gallery</h1>

          <div class="p-2 grid grid-cols-3 gap-4">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_8229.JPEG" alt="">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_8408.JPEG" alt="">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_9288.JPEG" alt="">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_8580.JPEG" alt="">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_9269.JPEG" alt="">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_9302.JPG" alt="">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_9557.JPEG" alt="">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_9556.JPEG" alt="">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_8549.JPEG" alt="">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_7778.JPG" alt="">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_7780.JPG" alt="">
              <img class="shadow-md" onClick="window.open(this.src)" class="rounded-md hover:brightness-50" src="./src/image/artwork/IMG_7781.JPG" alt="">
          </div>
      </div>
      <div class="pt-5 text-center hover:text-[#677997]"> 
          <a href="https://www.instagram.com/galleryofgolam/" target ="_blank">See More <i class="fa-solid fa-arrow-right fa-flip-vertical cursor-pointer"></i></a>
      </div>
    </section>
      `;
});

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
