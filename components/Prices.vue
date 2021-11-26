<template>
  <section class=" bg-pink-200 py-8">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
       Ready to define your future?

      </h1>
      <p class="w-full my-10 text-lg font-bold leading-tight text-center text-gray-800">
        Start your journey today!
      </p>
      
      <div class="  flex justify-center">
        <img src="~/assets/img/logofull.png" alt="">
      </div>
      <p class="w-full md:ml-16 lg:ml-64 my-10 text-lg font-bold leading-tight text-left text-gray-800">
        Request Information
      </p>
       <p class="w-full md:ml-16 lg:ml-64 my-10 text-lg font-bold leading-tight text-left text-gray-800">
        An admissions representative will contact you soon.
      </p>
      <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
        
        <price-highlighted
          name="Basic"
          price="x.99"
          :limited="false"
          
        />
        
        
      </div>
      <div class=" w-full md:px-20 lg:px-64 my-10 text-lg font-bold leading-tight text-left text-gray-800">
          <p>
            By submitting this form, 
            you agree that Holberton School may contact you via email,
             telephone or text message and know that contact may occur 
             using automated technology. Standard text and/or usage
              rates may apply. Privacy Policy.


          </p>
        </div>
    </div>
    
  </section>
</template>

<script>

import PriceHighlighted from '@/components/PriceHighlighted'
import Logo from '@/components/Logo'
export default {
  
  name: 'Prices',
  data() {
    return {
      listFree: ['Thing', 'Thing', 'Thing'],
      listBasic: ['Thing', 'Thing', 'Thing', 'Thing'],
      listPro: ['Thing', 'Thing', 'Thing', 'Thing', 'Thing']
    }
  },
  components: {
    logo: Logo,
    
    'price-highlighted': PriceHighlighted
  }
}
</script>
