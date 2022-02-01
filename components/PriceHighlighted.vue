<template>

  <div
    class="
      flex flex-col
      w-5/6
      lg:w-full
      lg:mx-64
      mx-auto
      rounded-lg
      bg-white
      mt-4
      sm:-mt-6
      shadow-lg
      z-10
    "
  >
    <div
      class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
    >
      <form class="flex flex-wrap mx-5 overflow-hidden xl:mx-4">
        <div class="my-5 px-5 w-full overflow-hidden xl:my-4 xl:px-4 xl:w-1/2">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="first-name"
          >
            First Name
          </label>
          <input
          required
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="first-name"
            type="text"
            placeholder="Jane"
          />
          
        </div>

        <div class="my-5 px-5 w-full overflow-hidden xl:my-4 xl:px-4 xl:w-1/2">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="last-name"
          >
            Last Name
          </label>
          <input
          required
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="last-name"
            type="text"
            placeholder="Doe"
          />
           
        </div>

        <div class="my-5 px-5 w-full overflow-hidden xl:my-4 xl:px-4 xl:w-1/2">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="email"
          >
            E-Mail Address
          </label>
          <input
          required
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="email"
            type="text"
            placeholder="email@something.com"
          />
           
        </div>

        <div class="my-5 px-5 w-full overflow-hidden xl:my-4 xl:px-4 xl:w-1/2">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="phone"
          >
            Phone
          </label>
          <input
          required
            class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
            id="phone"
            type="text"
            placeholder="+355 xx xxxx xxx"
          />
          
        </div>
      <div class=" my-5 px-5 w-full overflow-hidden xl:my-4 xl:px-4 xl:w-full">
        <label class="block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2">PROGRAM OF INTEREST*
</label>
      <select id="vehicle_id" name="vehicle_id" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm" @change="changeCategory">
        <option value="">Please Select One</option>
        <option value="1" data-val="1">Machine Learning</option>
        <option value="2" data-val="2">Web Development</option>
        <option value="1" data-val="1">AR/VR</option>
        <option value="2" data-val="2">Low Level Algorithms</option>
        <option value="1" data-val="1">Full Stack Developer</option>
        <option value="2" data-val="2">Dev OPS Engineering</option>
        <option value="1" data-val="1">Linux</option>
      </select>
      </div>
        <div class="my-5 px-5 w-full overflow-hidden xl:my-4 xl:px-4 xl:w-full">
         <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
      
      </div>
      
        
      </form>

      
    </div>
    <div
      class="
        flex-none
        mt-auto
        bg-white
        rounded-b rounded-t-none
        overflow-hidden
        shadow
        p-6
      "
    >
      
      <div class="flex flex-col-reverse md:flex-row items-center justify-between  my-6 md:mx-20">
        <button
          class="
            my-4
            md:mx-2
            hover:bg-red-500
            bg-red-900
            text-white
            font-bold
            w-full   
            py-4
            px-8
            shadow-lg
          "
        >
          Visit Us
        </button>
        <button
        type="submit"
        value="Submit"
          class="
            
            md:mx-2
            hover:bg-red-500
            bg-red-900
            text-white
            font-bold
            w-full
            py-4
            px-8
            shadow-lg
          "
        >
          SEND
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import priceMixin from '@/mixins/price'

export default {
  name: 'PriceHighlighted',
  mixins: [priceMixin],
  
}
</script>
