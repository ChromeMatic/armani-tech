<template>
  <main class="bg-gray-900 ">

   <navbar/>
     
    <!-- Content -->
     <section class="flex flex-col space-y-2">

     <section class="flex justify-between h-1/2 lg:min-h-screen">

       <div class="w-full img " :style="pic" >
         <div class="flex flex-col justify-center items-center 
                    lg:pt-12 pt-24 space-y-2 bg-gray-900 
                    bg-opacity-75 lg:h-screen h-72">
           <h1 class="lg:text-9xl text-6xl font-light text-white bg-opacity-100">Welcome</h1>
           <p class="font-bold uppercase text-center text-white text-sm lg:text-2xl bg-opacity-100">
             my name is Armani Brown and i am a full-stack developer.
          </p>
         </div>
       </div>
       

     </section>
      
      <!-- Skills section -->
     <section id="skills" class="flex justify-center p-6 pt-8 text-white">
       

      <div class="flex flex-col space-y-4 justify-items-center lg:h-screen">

        <h2 class="text-4xl lg:text-6xl mt-16 font-light text-center lg:my-14 uppercase">
            My Skills
        </h2>
        
        <div class="flex flex-col space-y-12 p-4">

           <div class="flex flex-col lg:flex-row space-x-0 space-y-8 lg:space-y-0 lg:space-x-8">
               <div v-for="card in cardInfos" :key="card.name">

                <div class="relative flex flex-col rounded-xl">
                        
                    <div class="absolute -right-4 rounded-xl -bottom-4 z-10 bg-indigo-900 h-full w-full"></div>
                          
                    <div class="flex flex-col z-20 justify-center items-center 
                    px-4 py-3 bg-gray-800 text-center font-medium uppercase rounded-xl ">
                       
                       <div class="bg-indigo-900 h-1 w-20"></div>
                       <h1>{{card.name}}</h1>

                      <div class="px-3 py-8 ">
                        <p class="text-sm text-center leading-loose tracking-widest">{{card.content}}</p>
                      </div>

                    </div>

                </div>

              </div>
           </div>

           <div class="flex flex-col lg:flex-row space-x-0 space-y-8 lg:space-y-0 lg:space-x-6">
              <div v-for="info in backendInfos" :key="info.name" >

              <div class="relative flex flex-col bg-gray-800 rounded-xl">

                <div class="absolute -right-4 rounded-xl -bottom-4 z-10 bg-indigo-900 h-full w-full"></div>
                
                <div class="flex flex-col z-20 justify-center items-center 
                    px-4 py-3 bg-gray-800 text-center font-medium uppercase rounded-xl ">

                   <div class="px-4 py-3 flex flex-col justify-center items-center text-center 
                   font-medium rounded-t ">
                     <div class="bg-indigo-900 h-1 w-20"></div>
                      <h1>{{info.name}}</h1>
                  </div>

                  <div class="px-3 py-8 rounded-b text-sm text-center  leading-loose tracking-wide">
                      <p>{{info.content}}</p>
                  </div>
                  
                </div>

              </div>

              </div>
           </div>

        </div>
          
      </div>
        
     </section>

      <!-- Project section -->
     <section id="projects" class="flex flex-col lg:h-screen space-y-2 justify-items-center p-6 lg:p-8">

       <div class="flex flex-col justify-center items-center text-4xl 
                  text-white text-center space-y-2 py-12 uppercase font-light">
         <div class="w-24 h-1 rounded bg-indigo-800"></div>
         <h1>Projects</h1>
       </div>

       <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-6">
              <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden shadow-md sm:rounded-lg">
                      <table class="min-w-full">
                          <thead class="bg-gray-600 ">
                              <tr>
                                  <th scope="col" class="text-white py-3 px-2 lg:px-6 text-xl font-medium tracking-wider text-left uppercase">
                                      Project
                                  </th>
                                  <th scope="col" class="text-white py-3 px-2 lg:px-4 text-xl font-medium tracking-wider text-left uppercase">
                                      Technologies
                                  </th>

                                  <th scope="col" class="text-white py-3 px-2 lg:px-4 text-xl font-medium tracking-wider text-left uppercase">
                                      description
                                  </th>
                                 
                                  <th scope="col" class="relative py-3 px-4 lg:px-6">
                                <span class="sr-only">View</span>
                            </th>
                              </tr>
                          </thead>
                          <tbody>
                              <!-- Product 1 -->
                             <tr v-for="table in Tables" :key="table.Name" class="bg-gray-800 border-b border-indigo-900">
                                  <td class="py-4 px-2 lg:px-6 text-sm font-medium whitespace-nowrap text-white">
                                      {{table.Name}}
                                  </td>
                                  <td class="py-4 px-2 lg:px-4 text-sm text-white whitespace-nowrap dark:text-gray-400">
                                      {{table.tech}}
                                  </td>
                                  <td class="py-4 px-2 lg:px-4 text-sm text-white whitespace-nowrap dark:text-gray-400">
                                      {{table.description}}
                                  </td>
                                  <td class="py-4 px-2 lg:px-4 text-sm font-medium text-right whitespace-nowrap">
                                    <a :href="table.link" target="_blank" rel="noopener noreferrer" class=" font-semibold uppercase text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline">
                                      view
                                    </a>
                                </td>
                                 
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
       </div>  

     </section>
      
      <!-- About Me section -->
     <section id="aboutMe" class="flex flex-col lg:h-screen px-6">

       <div class="flex flex-col justify-center space-y-2 py-16 items-center text-white uppercase">
         <div class="w-24 h-1 rounded bg-indigo-800"></div>
         <h1 class="text-4xl font-light">About Me</h1>
       </div>

       <section class="flex flex-col justify-center items-center lg:flex-row lg:px-6">

        <img class="h-64 lg:h-96 w-64 lg:w-96" src="../assets/programmer.png" alt="">

        <div class="w-full flex text-white justify-center items-center rounded border-indigo-900">
          <p class="text-center lg:text-left lg:text-lg text-sm leading-loose tracking-widest">
            Hello, my name is Armani Brown. Thank you for visiting my website. I am a student of Northern Caribbean University.
            My program of study is bachelor of science in computer information systems. I got into coding when I was in High school,
            where I learned c++. I was fascinated by what I could do with c++, I created a small program traffic ticket program 
            that could give persons tickets and store them in a file. From then on, I wonder what else I could do. I like to learned 
            new technologies to build the latest and greatest applications.
          </p>
        </div>

       </section>

     </section>

     <!-- Contact Me section -->
     <section id="contactMe" class="flex flex-col lg:h-screen px-8 py-2">

        <div class="flex flex-col justify-center space-y-2 py-16 items-center text-white uppercase">
         <div class="w-24 h-1 rounded bg-indigo-800"></div>
         <h1 class="text-4xl font-light">Contact Me</h1>
       </div>

        <div class="flex flex-col lg:flex-row">

          <div class="flex flex-col justify-center items-center flex-1">

            <div class="flex justify-center items-center">
              <img class="h-96 w-96" src="../assets/undraw_contract_re_ves9.svg" alt="">
            </div>

          </div>

          <div class="flex-auto">
            <div>
              <span class="uppercase text-sm text-white font-bold">Full Name</span>
              <input class="w-full bg-white text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" v-model="ContactFrom.name" placeholder="Please enter name....">
            </div>
            <div class="lg:mt-6 mt-4">
              <span class="uppercase text-sm text-white font-bold">Email</span>
              <input class="w-full bg-white text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" v-model="ContactFrom.email" placeholder="Please enter email address">
            </div>
            <div class="lg:mt-6 mt-4">
              <span class="uppercase text-sm text-white font-bold">Message</span>
              <textarea
               v-model="ContactFrom.message"
               class="w-full h-32 bg-white text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div class="lg:mt-6 mt-4 mb-4 lg:mb-0">
              <button
                @click="SubmitEmail"
                class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-2 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
           

        </div>
     
     </section>

       <!-- Footer  -->
      <footerContent/>
      <!-- Footer  -->

     </section>
    <!-- End of content -->
  </main>
</template>

<script>
import navbar from "../components/navbar.vue";
import footerContent from "../components/footer.vue";
export default {
  name: "LandingPage",
  components:{navbar,footerContent},
  data:()=>({
    cardInfos:[
      {
        name:"Vue.js",
        content:"Vue.js is a progressive JavaScript framework, that I first learned to used. I have become well verse in using this framework to build my projects lorem",
      },
      {
        name:"Nuxt.js",
        content:"Nuxt.js is a framework build for vue.js that offers features that help building a vue application much easier, nuxt.js is similar to next.js for react.",
      },
      {
        name:"Express.js",
        content:"I used Express.js to build backend web application framework base on Node.js",
      },
    ],
    backendInfos:[
      {
        name:"Spring-Boot (Java)",
        content:"I use Spring boot a java create stand-alone, production-grade Spring based Applications."
      },
      {
        name:"Laravel (PHP)",
        content:"Laravel is php framework, that I use to create functional web applications."
      },
      {
        name:"PostgresSQL",
        content:"Postgres is the open-source relational database that I use when building web base application."
      },
      {
       name:"Docker",
       content:"Docker is an amazing technology that allows me to ship my application with the environment needed to run."
      },
    ],
    Tables:[
      {
       Name:"School Management System (SMS) (Frontend)",
       tech:"Vue.js, Nuxt.js, Tailwind CSS",
       description:"The SMS web base application, that will help students and teachers alike in the learning process. This was my final year project.",
       link:"https://github.com/ChromeMatic/smsFend"
       },
       {
        Name:"School Management System (SMS) (Backend)",
        tech:"Spring boot (Java), PostgresSQL",
        description:"This contains the backend code for this project.",
        link:"https://github.com/ChromeMatic/SMS_backend"
       },
      {
        Name:"True Alpha's Pay Day loan",
        tech:"Vue.js",
        description:"This project was done to display my fronted design skills.",
        link:"https://competent-rosalind-4e3a9d.netlify.app/"
      },
      {
        Name:"BOYD-AUTO (Frontend)",
        tech:"Vue.js, Nuxt.js",
        description:"This website allow a user to advertize their automobile for sale, this v contains the user interface.",
        link:"https://github.com/ChromeMatic/Nuxt_Boyd_Auto"
      },
      {
        Name:"BOYD-AUTO (Backend)",
        tech:"Express.js, PostgresSQL",
        description:"This repository contain the code for the backend of this project.",
        link:"/"
      },
      {
        Name:"CPA (Frontend)",
        tech:"Vue.js, tailwind css",
        description:"CPA (crime prevention application) is used to help neighborhood watches to report suspicious activity in their area.",
        link:"https://github.com/ChromeMatic/Cappa_Remake"
      },
      {
        Name:"CAPA (Backend)",
        tech:"Laravel, PostgresSQL",
        description:"This repository contain the code for CPA (crime prevention application) app",
        link:"/"
      }
    ],
    pic:{backgroundImage:"url(/unsplash.jpg)", objectFit:"cover"},
    ContactFrom:{
      name:"",
      email:"",
      message:""
    }
  }),
  computed:{
    Validation(){
       let emailV = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(emailV.test(this.ContactFrom.email)){
         return true;
       }else{ return false;}
    }
  },
  methods:{
    SubmitEmail(){
        if(this.Validation){

        }
    }
  }
}
</script>

<style scoped>
.img{height: 100vh;}
@media only screen and (max-width: 600px) {
  .img{
    height: 35vh;
    object-fit: contain;
  }
}

@media only screen and (max-width: 768px) {
  .img{
    height: 30vh;
    object-fit: contain;
  }
}

</style>