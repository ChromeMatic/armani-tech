<template>
  <div :class="getTheme ? 'dark' : '' " class="sticky top-0 z-50" >
    <nav  class="bg-white dark:bg-gray-900 text-gray-700 dark:text-white uppercase h-16 font-semibold text-sm"> 

      <div class="px-10 mx-auto py-3">
    
        <div class="flex justify-between items-center">

          <div class="flex space-x-4">

            <a href="/" class="flex items-center py-2 px-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1 text-green-500 dark:text-indigo-500 font-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 
                2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            <span>
              armani
            </span>
            </a>

            <div class="hidden md:flex items-center space-x-2">
              <div v-for="item in navItems" :key="item.name">
                <div v-if="!getTheme">
                  <a class="py-4 px-3 hover:text-green-500 transition duration-75" :href="item.link">{{item.name}}</a>
                </div>
                <div v-else>
                    <a class="py-4 px-3 hover:text-indigo-500 transition duration-75" :href="item.link">{{item.name}}</a>
                </div>
              </div>
            </div>

          </div>

        
          <div class="hidden md:flex space-x-4 justify-center items-center">

            <div v-if="!getTheme" class="space-x-4">
              <a href="#contactMe" class="dark:text-white hover:text-green-500 transition duration-75">
                      contact me
              </a>
            </div>

            <div v-else class="space-x-4">
               <a href="#contactMe" class="hover:text-indigo-500 transition duration-75">
                  contact me
              </a>
            </div>

            <div class="bg-gray-200 dark:bg-gray-700 py-1 px-2 rounded">
                <button @click="changeTheme">

                  <div v-if="!getTheme">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div> 

                  <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>

                </button>
            </div>
            
          </div>


          <div class="md:hidden bg-gray-100 dark:bg-gray-700 py-1 px-2 rounded">
                <button @click="changeTheme">

                  <div v-if="!getTheme">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div> 

                  <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>

                </button>
          </div>


          <button @click="show=!show" class="md:hidden flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
        
        </div>

      </div>

      <transition name="fade">
        <div v-if="show" class="flex flex-col p-4 space-y-4 bg-white dark:bg-gray-900
        justify-items-center items-center transition duration-100">
          <div v-for="item in mobileNav" :key="item.name">
            <a class="block uppercase" :href="item.link">{{item.name}}</a>
          </div>
          <a href="/Armani Brown.pdf" target="_blank" rel="noopener noreferrer"> 
            Resume
          </a>
        </div>
      </transition>

    </nav>
  </div>
</template>

<script>
 import { mapGetters,mapActions } from "vuex";
export default {
  name: "navbar",
  data:()=>({
    show:false,
    navItems:[
      {name:"skills",link:"#skills"},
      {name:"projects",link:"#projects"},
      {name:"about me",link:"#aboutMe"}
    ],
    mobileNav:[
      {name:"skills",link:"#skills"},
      {name:"projects",link:"#projects"},
      {name:"about me",link:"#aboutMe"},
      {name:"Contact Me",link:"#contactMe"}
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
.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition: all 0.4s ease-in;
}
.fade-leave-from{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: all 0.4s ease-out;
}
</style>
