<script>
  let scheduleData = [
    {
      date: 'AUG 30 - DAY 1',
      events: [
        { time: '09:00 AM-12:15 PM', name: 'LEGENDARY CODING CONQUEST', venue: 'CHAVARA LAB' },
        { time: '09:00 AM-12:15 PM', name: 'INVICTUS', venue: 'CC LAB' },
        { time: '09:00 AM-04:00 PM', name: 'ESPIRE', venue: 'CC LAB' },
        { time: '01:00 PM-03:30 PM', name: 'VAULTED VENTURE', venue: 'GOLDEN AUREOLE' },
      ]
    },
    {
      date: 'AUG 31 - DAY 2',
      events: [
        { time: '09:00 AM-03:00 PM', name: 'RESPAWN', venue: 'RSCC' },
        { time: '03:00 PM-04:00 PM', name: 'VALEDICTORY FUNCTION', venue: 'RSCC' },
        { time: '04:00 PM-05:00 PM', name: 'DJ', venue: 'RSCC' },
      ]
    }
  ];
</script>

<section class="relative w-full min-h-screen bg-[#030812] p-4 md:p-8 text-white overflow-hidden">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -left-1/4 -top-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur-3xl"></div>
    <div class="absolute -right-1/4 -bottom-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-20 blur-3xl"></div>
    <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-yellow-500 to-red-500 opacity-20 blur-3xl"></div>
  </div>

  <div class="relative z-10 max-w-4xl mx-auto">
    <h1 class="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">SCHEDULE</h1>
    <div class="space-y-8">
      {#each scheduleData as day}
        <div class="bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <h2 class="text-2xl font-bold p-6 bg-gray-900 bg-opacity-50">{day.date}</h2>
          <div class="p-6">
            <table class="w-full">
              <tbody>
                {#each day.events as event}
                  <tr class="border-b border-gray-700 last:border-b-0">
                    <td class="py-4 pr-4 text-sm text-gray-400 whitespace-nowrap">{event.time}</td>
                    <td class="py-4 px-4 font-medium text-lg">{event.name}</td>
                    <td class="py-4 pl-4 text-sm text-right text-gray-300">{event.venue}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>