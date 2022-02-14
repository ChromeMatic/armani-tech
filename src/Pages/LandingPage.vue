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
            <h2 class="lg:text-3xl text-2xl">I am a full Web Stack Developer</h2>
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

        <h1 class="text-5xl text-gray-800 dark:text-white capitalize text-center">Projects</h1>

        <div class="grid gap-3"></div>

      </div>

      <!-- About me section -->
      <div id="aboutMe" class="lg:py-20 lg:px-10  py-14 p-6">

       

        <div class="flex lg:flex-row flex-col justify-center items-center lg:space-x-4 lg:space-y-0 space-x-0 space-y-8">
          
          <img src="/profile.jpg" class="h-80 w-64 rounded-2xl" alt="">

          <div class="lg:w-1/2 w-full flex flex-col space-y-2">
           <h1 class="text-4xl text-gray-800 dark:text-white capitalize text-center mb-2">About Me</h1>
            <p>
               Hello, comrades. Thank you for visiting my website. I am a student of Northern Caribbean University.
               
            </p>
          </div>

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
    ]
  }),
 computed:{
    ...mapGetters(['getTheme']),
  },
  methods:{
    ...mapActions(['changeTheme'])
  }
}
</script>

<style scoped>
</style>