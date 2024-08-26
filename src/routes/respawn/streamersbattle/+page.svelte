<script>
  import { onMount } from 'svelte';
  
  let streamers = [];
  
  onMount(() => {
    // JavaScript for animations or interactivity removed
  });
</script>

<main class="bg-[#0D1638] text-white min-h-screen font-futuristic">
  <header class="relative text-center h-screen flex flex-col justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img 
            src="/images/forms/fggaming.jpg" 
            alt="Event Banner" 
            class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-60"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-green-500/30 to-blue-500/30"></div>
    </div>

    <!-- Logo, Title, and Tournament Info -->
    <div class="relative z-10 px-4 space-y-6 max-w-5xl mx-auto">
        <div class="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
            <img src="/images/forms/Logoc.png" alt="Euphoria Logo" class="w-16 sm:w-20 md:w-24"/>
            <img src="/images/logos/Euphoria_Typeface-min.png" alt="Euphoria" class="w-48 max-w-xs md:max-w-md lg:max-w-lg"/>
        </div>
        <img src="/images/logos/RESP.png" alt="Respawn" class="w-full max-w-2xl mx-auto"/>
        <p class="text-xl sm:text-2xl md:text-3xl text-yellow-400 font-bold tracking-wider px-4 py-2 rounded-full border-2 border-yellow-400 inline-block neon-text">
          VALORANT LAN GAMING TOURNAMENT
        </p>
        
        
    </div>

    <!-- Streamers Battle Roster -->
    <div class="relative z-10 px-4 space-y-6 max-w-6xl mx-auto mt-4">
      <h2 class="text-3xl font-semibold mb-3">MEET & GREET <span class="text-blue-400">THEM</span>...!!!</h2>
      <div class="flex flex-wrap justify-center gap-6">
        <div class="text-center w-1/4 sm:w-1/5 border-4 border-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src="/images/streamersimg/Tuborg.png" alt="Chuck" class="w-full h-48 object-cover"/>
            <p class="text-white mt-2 font-bold text-sm">BLIND TUBORG</p>
        </div>
        <div class="text-center w-1/4 sm:w-1/5 border-4 border-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src="/images/streamersimg/viper.png" alt="TTigers" class="w-full h-48 object-cover"/>
            <p class="text-white mt-2 font-bold text-sm">VIPER ESSPORTS</p>
        </div>
        <div class="text-center w-1/4 sm:w-1/5 border-4 border-white rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src="/images/streamersimg/rayan.png" alt="Starting" class="w-full h-48 object-cover"/>
            <p class="text-white mt-2 font-bold text-sm">SHIBINSHAN</p>
        </div>
      </div>
    </div>
  </header>

  <div class="container mx-auto px-4 py-16">
      <div class="relative z-10 px-4 space-y-8">
       

        <section id="experience-centers" class="mb-16 text-center">
          <h2 class="text-3xl font-semibold mb-3">EXPERIENCE <span class="text-blue-400">CENTERS</span></h2>
          <p class="text-xl mb-8">DISCOVER OUR AMAZING EXPERIENCES</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="border-2 border-pink-600 aspect-square flex flex-col items-center justify-end overflow-hidden rounded-lg relative transition-transform transform hover:scale-105 hover:shadow-lg">
              <img src="/images/experience/vr.jpg" alt="VR Experience" class="absolute inset-0 w-full h-full object-cover" />
              <a href="#" target="_blank" rel="noopener noreferrer" class="bg-black bg-opacity-70 w-full text-center py-2 text-sm relative z-10 hover:bg-opacity-90 transition-colors">
                VR EXPERIENCE
              </a>
            </div>
            <div class="border-2 border-pink-600 aspect-square flex flex-col items-center justify-end overflow-hidden rounded-lg relative transition-transform transform hover:scale-105 hover:shadow-lg">
              <img src="/images/experience/ps5.jpg" alt="PS5" class="absolute inset-0 w-full h-full object-cover" />
              <a href="#" target="_blank" rel="noopener noreferrer" class="bg-black bg-opacity-70 w-full text-center py-2 text-sm relative z-10 hover:bg-opacity-90 transition-colors">
                PS5
              </a>
            </div>
            <div class="border-2 border-pink-600 aspect-square flex flex-col items-center justify-end overflow-hidden rounded-lg relative transition-transform transform hover:scale-105 hover:shadow-lg">
              <img src="/images/experience/ds.jpg" alt="Driving Simulator" class="absolute inset-0 w-full h-full object-cover" />
              <a href="#" target="_blank" rel="noopener noreferrer" class="bg-black bg-opacity-70 w-full text-center py-2 text-sm relative z-10 hover:bg-opacity-90 transition-colors">
                DRIVING SIMULATOR
              </a>
            </div>
          </div>
        </section>

        <section id="ticket" class="relative p-6 rounded-lg flex flex-col items-center mb-12 max-w-3xl mx-auto overflow-hidden">
          <!-- Background Image with Overlay -->
          <div class="absolute inset-0 z-0">
              <img src="/images/agents/img.webp" alt="Background Image" class="w-full h-full object-cover"/>
              <div class="absolute inset-0 bg-black opacity-40"></div>
          </div>
          
          <!-- Content with Text Stroke -->
          <div class="relative z-10 text-white text-center">
              <h3 class="text-3xl font-bold mb-2">EUPHORIA RESPAWN</h3>
              <p class="text-lg">Rajagiri Sports and Cultural Centre</p>
              <p class="text-lg">Rajagiri College of Social Sciences</p>
              <p class="text-2xl font-bold mt-4">31.08.2024</p>
              <p class="text-lg">DOOR OPENS AT 9 AM</p>
              <p class="text-xl font-bold mt-4">Ticket Price</p>
              <p class="text-4xl font-bold">129 INR</p>
              <ul class="mt-4 text-lg font-semibold text-yellow-400 list-disc list-inside">
                <li>Bring a valid institution or organization ID for entry.</li>
                <li>Rajagiri students receive special benefits.</li>
              </ul>
          </div>
        </section>

        <div class="text-center mb-8">
          <p class="text-lg mb-2">In Association with</p>
          <img src="/images/logos/akef-logo.png" alt="AKEF Logo" class="h-12 mx-auto"/>
        </div>

        <div class="text-center space-y-4">
          <a href="/respawn/streamersbattle/register">
            <button class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-10 rounded-full transition duration-300 text-xl hover:shadow-lg">
              Book Now
            </button>
          </a>
        </div>
      </div>
  </div>
</main>

<style lang="postcss">
  .font-futuristic {
    font-family: 'Arial', sans-serif; /* Replace with your futuristic font */
  }

  .neon-border {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de;
  }

  .neon-text {
  position: relative;
  color: #fefefe; /* Light text color for better visibility */
  text-shadow: 
  

    0 0 20px #ffcc00,  /* Main neon color */

    0 0 50px #ffcc00;  /* Very intense neon color */
}

</style>
