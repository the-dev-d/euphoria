<script>
  import { onMount } from 'svelte';

  let streamers = Array(10).fill().map((_, i) => ({ 
    name: `Streamer ${i + 1}`,
    imageUrl: `/api/placeholder/200/200?text=Streamer${i+1}`
  }));

  onMount(() => {
    // Add any necessary JavaScript for animations or interactivity
  });
</script>

<main class="bg-black text-white min-h-screen font-futuristic">
    <header class="relative text-center h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/forms/fggaming.jpg" 
          alt="Event Banner" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black opacity-60"></div>
        <!-- Add neon light effects here -->
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
      </div>
      <div class="relative z-10 px-4 space-y-8">
        <img src="/images/forms/Logoc.png" alt="Euphoria Logo" class="w-64 mx-auto mb-4"/>
        <h1 class="text-5xl md:text-7xl font-bold mb-8">EUPHORIA RESPAWN</h1>
        <p class="text-2xl mb-8 neon-text-blue">VALORANT LAN GAMING TOURNAMENT</p>
        <div class="space-x-4">
          <a href="#ticket" class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg inline-block">
            BOOK TICKET
          </a>
          <a href="#meetthem" class="bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg inline-block">
            KNOW MORE
          </a>
        </div>
      </div>
    </header>
  
    <div class="container mx-auto px-4 py-16">
      <section id="meetthem" class="mb-16 text-center">
        <h2 class="text-3xl font-semibold mb-3">MEET <span class="text-blue-400">THEM</span>...!!!</h2>
        <p class="text-xl mb-8">EPIC STREAMERS BATTLE</p>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {#each streamers as streamer}
            <div class="border-2 border-pink-600 aspect-square flex flex-col items-center justify-end overflow-hidden rounded-lg relative neon-border">
              <img src={streamer.imageUrl} alt={streamer.name} class="absolute inset-0 w-full h-full object-cover" />
              <span class="bg-black bg-opacity-70 w-full text-center py-2 text-sm relative z-10">{streamer.name}</span>
            </div>
          {/each}
        </div>
      </section>
  
      <section class="mb-16">
        <h2 class="text-3xl font-semibold mb-6">Event Details</h2>
        <!-- Add event details content here -->
      </section>
  
      <section id="ticket" class="bg-gradient-to-r from-purple-900 to-blue-900 p-8 rounded-lg flex flex-col md:flex-row justify-between items-center mb-12 neon-border">
        <div class="text-white mb-6 md:mb-0">
          <h3 class="text-2xl font-bold mb-3">EUPHORIA RESPAWN</h3>
          <p class="text-lg">Rajagiri Sports and Cultural Centre Kalamassery</p>
          <p class="text-lg">Rajagiri College of Social Sciences</p>
          <p class="text-xl font-semibold mt-4">31st AUGUST</p>
          <p class="text-lg">DOOR OPEN: 9AM</p>
          <p class="text-2xl font-bold mt-4">Prize Pool: 100K</p>
        </div>
        <div class="bg-white w-32 h-32 flex items-center justify-center rounded-lg overflow-hidden">
          <img src="/api/placeholder/128/128?text=QR+Code" alt="QR Code" class="w-full h-full object-cover" />
        </div>
      </section>
  
      <div class="text-center mb-8">
        <p class="text-lg mb-2">In Association with</p>
        <img src="/images/logos/akef-logo.png" alt="AKEF Logo" class="h-12 mx-auto"/>
      </div>
  
      <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full block mx-auto transition duration-300 text-xl neon-button">
        Enter Now
      </button>
    </div>
  </main>

<style lang="postcss">
  .font-futuristic {
    font-family: 'Arial', sans-serif; /* Replace with your futuristic font */
  }

  .neon-text {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de;
  }

  .neon-text-blue {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00f, 0 0 35px #00f, 0 0 40px #00f, 0 0 50px #00f, 0 0 75px #00f;
  }

  .neon-text-green {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0f0, 0 0 35px #0f0, 0 0 40px #0f0, 0 0 50px #0f0, 0 0 75px #0f0;
  }

  .neon-text-orange {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffa500, 0 0 35px #ffa500, 0 0 40px #ffa500, 0 0 50px #ffa500, 0 0 75px #ffa500;
  }

  .neon-border {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de;
  }

  .neon-button {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00f, 0 0 35px #00f, 0 0 40px #00f;
    transition: all 0.3s ease;
  }

  .neon-button:hover {
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #f0f, 0 0 35px #f0f, 0 0 40px #f0f;
  }
</style>