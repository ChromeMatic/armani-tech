<template>
  <nav class="sticky top-0 z-50 bg-gray-800 text-white"> 

    <div class="px-8 mx-auto">
   
     <div class="flex justify-between items-center">

      <div class="flex space-x-4">

        <a href="/" class="flex items-center py-2 px-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1 text-violet-600 font-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 
            2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
         <span>
          armani
         </span>
        </a>

        <div class="hidden md:flex items-center space-x-2 ">
          <div v-for="item in navItems" :key="item.name">
            <a class="py-4 px-3" :href="item.link">{{item.name}}</a>
          </div>
        </div>

      </div>

    
     <div class="hidden md:flex space-x-4">
        <a href="#contactMe" class="text-white ">
                contact me
        </a>
        <a href="/Resume_Armani.pdf" target="_blank" rel="noopener noreferrer">
          resume
        </a>
     </div>


      <button @click="show=!show" class="md:hidden flex items-center">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </button>
     
     </div>

    </div>

    <transition name="fade">
      <div v-if="show" class="flex flex-col p-4 space-y-4 
       justify-items-center items-center transition duration-100">
        <div v-for="item in mobileNav" :key="item.name">
          <a class="block uppercase" :href="item.link">{{item.name}}</a>
        </div>
      </div>
    </transition>

  </nav>
</template>

<script>
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
      {name:"contact me",link:"#contactMe"}
    ]
  })
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
  transition: all 0.9s ease-in;
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
