<template>
  <main :class="getTheme ? 'dark' : '' ">
    <div class="dark:text-white dark:bg-gray-900 bg-gray-50">

      <navbar/>

      <!-- Landing page section -->
      <div class="flex lg:py-32 lg:px-10 py-14 p-6 lg:flex-row 
                  flex-col justify-center items-center lg:space-x-4 
                  lg:space-y-0 space-x-0 space-y-14">

        <div class="flex flex-col space-y-4 text-center">
          <div class="flex flex-col space-y-2">
            <h1 class="lg:text-5xl text-4xl">Hello, my name is Armani Brown</h1>
            <h2 class="lg:text-3xl text-2xl">I am an Enthusiastic and hard working Full-Stack Web Developer</h2>
          </div>

          <a href="./Armani Brown.pdf" class="flex justify-center px-8 rounded py-2 uppercase font-semibold bg-green-400 dark:bg-indigo-500 hover:dark:bg-indigo-400 hover:bg-green-500 transition duration-75" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
        </div>
        
        <div>
          <div  v-if="!getTheme">
            <img class="" src="/undraw_code_thinking_re_gka2.svg" alt="">
          </div>
          <div v-else>
            <img src="/undraw.svg" alt="">
          </div>
        </div>

      </div>

      <!-- Skills section -->
      <div id="skills" class="lg:py-20 lg:px-10  py-14 p-6">

       <h1 class="text-5xl capitalize text-center mb-8">
          My Skills
       </h1>
        <div class="grid gap-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2">
          <div v-for="skill in Skills" :key="skill.name">
            <div :class="getTheme ? 'bg-indigo-500' : 'bg-gray-700' " class="h-24 space-x-2 flex justify-center text-white font-semibold items-center rounded">
                <img :src="skill.src" class="h-10 w-10" alt="">
               <span>
                  {{skill.name}}
               </span>
            </div>
          </div>
        </div>

      </div>

        <!-- Projects section -->
      <div id="projects" class="lg:py-20 lg:px-10  py-14 p-6">

        <h1 class="text-5xl text-gray-800 mb-8 dark:text-white capitalize text-center">Projects</h1>

        <div class="grid gap-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xs:p-2">
          <div v-for="project in Projects" :key="project.title">
              <div :class="getTheme ? 'bg-indigo-500' : 'bg-gray-700' " class="xl:h-60 lg:h-56 h-64 flex flex-col justify-center items-center rounded space-y-2">
                 <h1 class="xl:text-3xl lg:text-lg text-2xl xs:mb-4 text-center text-white">
                    {{project.title}}
                 </h1>
                 <p class="text-sm text-center font-semibold xl:mt-3 lg:mt-4 text-white">
                   {{project.description}}
                 </p>
                 <p class="text-sm text-center font-semibold xl:mt-3 lg:mt-4 text-white">
                    Technologies used: {{project.tech}}
                 </p>
                 <a :href="project.link" target="_blank" rel="noopener noreferrer" class="mt-4 font-semibold bg-green-500 xl:px-24 lg:px-16 px-10 py-2 rounded text-white">
                   VIEW
                 </a>
              </div>
          </div>
        </div>

      </div>

      <!-- About me section -->
      <div id="aboutMe" class="lg:py-20 lg:px-10  py-14 p-6">

        <div class="flex lg:flex-row flex-col justify-center items-center lg:space-x-8 lg:space-y-0 space-x-0 space-y-8">
          
          <img src="/profile.jpg" class="h-80 w-64 rounded-2xl" alt="">

          <div class="lg:w-1/2 w-full flex flex-col space-y-2">
           <h1 class="text-4xl text-gray-800 dark:text-white capitalize text-center mb-2">About Me</h1>
            <p class="leading-loose tracking-wide">
               Hello, there. Thank you for visiting my website.There are three descriptive words that represents me as 
               an individual: Focused, Disciplined and Driven. As an upcoming Graduand from Northern Caribbean University 
               I aspire to diversify into coding and use my creative skills to improve data retrieval, and workflow efficiencies.  
               In addition, I welcome the challenge of problem solving to utilize my innovative skills for complex 
               proprietary systems.
            </p>
          </div>

        </div>


      </div>

      <!-- Contact section -->
      <div id="contactMe" class="lg:py-20 lg:px-10  py-14 p-6">


        <div class="flex flex-col justify-center mb-6">
          <h1 class="text-center lg:text-5xl text-3xl dark:text-white text-gray-800 mb-6">Contact Me</h1>

          <form class="lg:px-24 px-4">
              <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email address
                </label>
                <input type="email" v-model="contact.email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
                  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                  dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@email.com" required>
              </div>

              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                <input type="text" v-model="contact.name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
              </div>

              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea rows="4" v-model="contact.message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." required></textarea>
              </div>
              
              <button type="submit" @click="sendEmail" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>

      </div>

      <footerContent/>
    </div>
  </main>
</template>

<script>
import navbar from "../components/navbar.vue";
import footerContent from "../components/footer.vue";
import { mapGetters,mapActions } from "vuex";
export default {
  name: "LandingPage",
  components:{navbar,footerContent},
  data:()=>({
    Skills:[
      {name:'Vue.js',  src:"./vue.svg"},
      {name:'Nuxt.js', src:"./nuxt-dot-js.svg"},
      {name:'Spring Boot', src:"./spring.svg"},
      {name:'Express.js', src:"./node.svg"},
      {name:'PostgresSQL', src:"./postgresql.svg"},
      {name:'Docker', src:"./docker.svg"},
      {name:'Figma', src:"./figma.svg"},
      {name:'Git',src:"./git.png"}
    ],
    Projects:[
      { title:"Entech",
        link:"https://entech.netlify.app/",
        tech:"Vue.js, tailwind css",
        description:"This a small startup create by me and other NCU (northern caribbean university) graduates"
      },
      {
        title:"True Alpha's Loan", 
        link:"https://competent-rosalind-4e3a9d.netlify.app/", 
        tech:"Vue.js, Buetify",
        description:"This is project that offers loan services to individuals who SignUp." 
       },
      {
        title:"CryptoMatic",
        link:"https://crypto-matic.netlify.app/", 
        tech:"Vue.js, Tailwind css, Firebase",
        description:"This is my upcoming project where you can track cryptocurrency and received the latest news about crypto." 
      },
    ],
    contact:{
      name:"",
      email:"",
      message:""
    }
  }),
  computed:{...mapGetters(['getTheme']),},
  methods:{
    ...mapActions(['changeTheme']),
    sendEmail(){

    }
  }
}
</script>