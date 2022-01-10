<template>
  <main class="flex flex-col h-44 bg-gray-800  text-white space-y-2">

   <section class="flex justify-center items-center py-2">
     <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-0.5 text-violet-600 font-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 
            2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
         <span>
          <h1 class="uppercase text-sm font-semibold">armani~dev</h1>
         </span>
   </section>

    <section class="flex flex-col justify-center items-center space-y-4 py-2">

     <h1>Social Media Links</h1>

     <div class="flex space-x-3">

       <a href="https://twitter.com/ArmaniB42195047" target="_blank" rel="noopener noreferrer">
           <img src="../assets/twitter.png"  alt="">
       </a>

       <a href="https://www.instagram.com/armanibrwn/" target="_blank" rel="noopener noreferrer">
         <img src="../assets/instagram.png"  alt="">
       </a>

       <a href="https://github.com/ChromeMatic" target="_blank" rel="noopener noreferrer">
          <img src="../assets/github.png"  alt="">
       </a>

       <a href="https://www.linkedin.com/in/armani-brown-14725616b/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/linkedin.png"  alt="">
       </a>

     </div>

    </section>

    <section class="flex justify-center items-center h-10">
          <h1 class="font-light uppercase">
           &copy; 2022 all rights belong to Armani Brown
          </h1>
    </section>
    
  </main>
</template>

<script>
  export default{name:"footer"}
</script>