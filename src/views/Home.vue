<script>
import imgUrl1 from "/img/F1-1.png";
import imgUrl2 from "/img/C1-1.png";
import imgUrl3 from "/img/E1-1.png";
import imgUrl4 from "/img/E2-1.png";
import gifUrl from "/dashboard.gif";
export default {
  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0,
      gifUrl,
      images: [imgUrl1, imgUrl2, imgUrl3, imgUrl4],
    };
  },
  methods: {
    calculateSectionOffsets() {
      setTimeout(() => {
        let sections = document.getElementsByClassName("resume-section");
        let length = sections.length;
        for (let i = 0; i < length; i++) {
          let sectionOffset = sections[i].offsetTop;
          this.offsets.push(sectionOffset);
        }
      }, 200);
    },
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function (e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }

      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1)
        this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document
        .getElementsByTagName("section")
        [id].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        this.inMove = false;
      }, 600);
    },
  },
  created() {
    this.calculateSectionOffsets();

    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
  },
  destroyed() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
  },
};
</script>

<template>
  <div id="page-top">
    <!-- Navigation-->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-end m-4">
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              :style="this.activeSection == 0 ? 'color:#e8a87c' : ''"
              @click="scrollToSection(0, true)"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              :style="this.activeSection == 1 ? 'color:#e8a87c' : ''"
              @click="scrollToSection(1, true)"
              >Career</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              :style="this.activeSection == 2 ? 'color:#e8a87c' : ''"
              @click="scrollToSection(2, true)"
              >Education</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger"
              :style="this.activeSection == 3 ? 'color:#e8a87c' : ''"
              @click="scrollToSection(3, true)"
              >Achievement</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- Page Content-->
    <div class="container-fluid p-0">
      <!-- About-->
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-0">
            Paris
            <span class="text-primary">Rerkshanandana</span>
          </h1>
          <div class="subheading mb-2">
            Bangkok · (+66)0 61-623-9795 ·
            <a
              href="mailto:paris.rerk1995@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >paris.rerk1995@gmail.com</a
            >
          </div>
          <div class="social-icons mb-5">
            <a
              class="social-icon"
              href="https://www.linkedin.com/in/paris-rerkshanandana/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-linkedin-in"></i
            ></a>
            <a
              class="social-icon"
              href="https://github.com/PRerk"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-github"></i
            ></a>
          </div>
          <p class="lead mb-5">
            A highly analytical team leader with a strong passion for continuous
            learning and self-improvement. Effectively manage, mentor, and
            develop teams into success with great heights.
          </p>
          <div class="mb-5">&nbsp;</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item"><i class="fab fa-html5"></i></li>
            <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
            <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
            <li class="list-inline-item"><i class="fab fa-bootstrap"></i></li>
            <li class="list-inline-item"><i class="fab fa-vuejs"></i></li>
            <li class="list-inline-item"><i class="fab fa-npm"></i></li>
            <li class="list-inline-item"><i class="fab fa-php"></i></li>
            <li class="list-inline-item"><i class="fab fa-python"></i></li>
            <li class="list-inline-item"><i class="fab fa-r-project"></i></li>
            <li class="list-inline-item"><i class="fab fa-markdown"></i></li>
            <li class="list-inline-item"><i class="fab fa-linux"></i></li>
            <li class="list-inline-item"><i class="fab fa-ubuntu"></i></li>
            <li class="list-inline-item">
              <i class="fab fa-digital-ocean"></i>
            </li>
            <li class="list-inline-item"><i class="fab fa-git"></i></li>
            <li class="list-inline-item">
              <i class="fab fa-github-square"></i>
            </li>
          </ul>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Experience-->
      <section class="resume-section" id="experience">
        <div class="resume-section-content">
          <div class="row align-items-center">
            <div class="col-xl-8 d-none d-xxl-block mb-5">
              <img
                width="100%"
                style="height: 80%; width: 80%; position: relative; z-index: -1"
                :src="gifUrl + '?' + String(Date.now()).slice(-2)"
                alt="Dashboard"
              />
            </div>
            <div class="col-xxl-4 col-xl-12 mb-5">
              <h2 class="mb-5">
                <span class="text-primary">Career Summary</span>
              </h2>
              <div
                class="d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div class="flex-grow-1">
                  <h3 class="mb-0">Project Lead - Data Analytics Platform</h3>
                  <div class="subheading mb-3">
                    <a
                      href="https://jetcommerce.co.th/"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Jet Commerce</a
                    >
                  </div>
                  <span class="text-primary">October 2021 - Present</span>
                  <p>
                    Lead a team of developers, data engineers and analyst in
                    developing a data analytics platform.
                  </p>
                </div>
              </div>
              <div
                class="d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div class="flex-grow-1">
                  <h3 class="mb-0">Data Analyst</h3>
                  <div class="subheading mb-3">
                    <a
                      href="https://jetcommerce.co.th/"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Jet Commerce</a
                    >
                  </div>
                  <span class="text-primary">April 2021 - September 2021</span>
                  <p>
                    Build modern dashboards and reports that supports operation
                    team with insights.
                  </p>
                </div>
              </div>
              <div
                class="d-flex flex-column flex-md-row justify-content-between"
              >
                <div class="flex-grow-1">
                  <h3 class="mb-0">Software Developer</h3>
                  <div class="subheading mb-3">Freelance</div>
                  <span class="text-primary">2020</span>
                  <p>
                    Works on multiple projects in robotic, android and web app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Education-->
      <section class="resume-section" id="education">
        <div class="resume-section-content">
          <div class="row align-items-center">
            <div class="col-xxl-8 col-xl-12">
              <h2 class="mb-5">
                <span class="text-primary">Educational Training</span>
              </h2>
              <div
                class="d-flex flex-column flex-md-row justify-content-between mb-5"
              >
                <div class="flex-grow-1">
                  <h3 class="mb-0">DIT University, India</h3>
                  <div class="subheading mb-3">
                    Bachelor of Technology - Computer Science
                  </div>
                  <div><span class="text-primary">2014 - 2018</span></div>
                </div>
              </div>
              <div
                class="d-flex flex-column flex-md-row justify-content-between"
              >
                <div class="flex-grow-1">
                  <h3 class="mb-0">Harvard University, online</h3>
                  <div class="subheading mb-3">
                    Professional Certificate - Data Science
                  </div>
                  <div class="mb-4">
                    <span class="text-primary">2020</span>
                  </div>
                  <div class="subheading mb-2">
                    <a
                      href="https://credentials.edx.org/credentials/4fcff18a002442658e86e9ed8e8d0a6e/"
                      target="_blank"
                      rel="noopener noreferrer"
                      >view credentials&nbsp;
                      <i class="fa-solid fa-arrow-up-right-from-square"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 d-none d-xxl-block mb-5">
              <ul id="Frames">
                <li class="Frame">
                  <img
                    style="max-width: 25vw; image-rendering: crisp-edges"
                    src="@/assets/degree.png"
                    alt="Degree"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr class="m-0" />
      <!-- Awards-->
      <section class="resume-section" id="awards">
        <div class="resume-section-content">
          <h2 class="mb-5 text-primary">Certificates & Achievements</h2>
          <span class="text-primary">
            Data Science MicroMasters Program (2/4)
          </span>
          <div class="col-12 mb-5">
            <ul class="fa-ul mb-4">
              <li>
                <span class="fa-li"
                  ><i class="fa-solid fa-award text-primary"></i
                ></span>
                Python for Data Science - UC San Diego - edX Verified - 2021 -
                <a
                  href="https://courses.edx.org/certificates/f0d013bd82c04fcfa00e3a18e17efce5"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Link</a
                >
              </li>
              <li>
                <span class="fa-li"
                  ><i class="fa-solid fa-award text-primary"></i
                ></span>

                Probability and Statistics in Data Science using Python - UC San
                Diego - edX Verified - 2021 -
                <a
                  href="https://courses.edx.org/certificates/3a3a446f16b044168aa75990cf04e98d"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Link</a
                >
              </li>
            </ul>
            <span class="text-primary"> IT and Web </span>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li"
                  ><i class="fa-solid fa-award text-primary"></i
                ></span>
                Digital Security Training - Coventry University - FutureLearn
                ExpertTrack - 2021
              </li>
            </ul>
            <span class="text-primary"> Data </span>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li"
                  ><i class="fa-solid fa-award text-primary"></i
                ></span>
                Machine Learning - Stanford University - Coursera Verified -
                2021 -
                <a
                  href="https://coursera.org/share/525453c84cd9a88f80dc8b4f2845b010"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Link</a
                >
              </li>
              <li>
                <span class="fa-li"
                  ><i class="fa-solid fa-award text-primary"></i
                ></span>
                Probability and Statistics - University of London - Coursera
                Verified - 2020 -
                <a
                  href="https://coursera.org/share/9acdd4567e769bf48ed917fbb29dc728"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Link</a
                >
              </li>
              <li>
                <span class="fa-li"
                  ><i class="fa-solid fa-award text-primary"></i
                ></span>
                Data Science Math Skills - Duke University - Coursera Verified -
                2020 -
                <a
                  href="https://coursera.org/share/2c7a68c2ae7d304b70f7b33aa443d43f"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Link</a
                >
              </li>
              <li>
                <span class="fa-li"
                  ><i class="fa-solid fa-award text-primary"></i
                ></span>
                Getting Started with AWS Machine Learning - AWS - Coursera
                Verified - 2020 -
                <a
                  href="https://coursera.org/share/b74cd8c63532951225f5b5b0e6b187d4"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Link</a
                >
              </li>
              <li>
                <span class="fa-li"
                  ><i class="fa-solid fa-award text-primary"></i
                ></span>
                Digital Skills Web Analytics - Accenture - FutureLearn
                Certificate of Achievement - 2020
              </li>
            </ul>
            <span class="text-primary"> Project </span>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li"
                  ><i class="fa-solid fa-award text-primary"></i
                ></span>
                Build a Data Science Web App with Streamlit and Python -
                Coursera Project Network - 2020 -
                <a
                  href="https://coursera.org/share/1e52dcaedcba1f79aa6ad7cbe3afe8e6"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Link</a
                >
              </li>
              <li>
                <span class="fa-li"
                  ><i class="fa-solid fa-award text-primary"></i
                ></span>
                COVID19 Data Analysis Using Python - Coursera Project Network -
                2020 -
                <a
                  href="https://coursera.org/share/62ecd1ff2ea2d8b06b9de8721737c6dd"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Link</a
                >
              </li>
            </ul>
            <span class="text-primary"> Soft Skill </span>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li"
                  ><i class="fa-solid fa-award text-primary"></i
                ></span>
                Presenting Your Work with Impact - University of Leeds -
                FutureLearn Certificate of Achievement - 2020
              </li>
            </ul>
          </div>
          <div class="col-12 d-none d-xxl-block">
            <div class="images" v-viewer>
              <img v-for="src in images" :key="src" :src="src" height="200" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@import "../assets/home.css";
</style>
