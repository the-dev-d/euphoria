<script>
	const events = [
	  { 
		name: 'UG CODING', 
		coordinator: {
		  name: 'Dhaivath Lal',
		  email: 'mca2316@rajagri.edu',
		  phone: '+91 9074768353'
		}
	  },
	  { 
		name: 'PG CODING', 
		coordinator: {
		  name: 'Gracen K Shaji',
		  email: 'mca2319@rajagiri.edu',
		  phone: '+91 7736705727'
		}
	  },
	  { 
		name: 'TREASURE HUNT', 
		coordinator: {
		  name: 'Majo Augustine',
		  email: 'mca2330@rajagiri.edu',
		  phone: '+91 9544318109'
		}
	  },
	  { 
		name: 'RESPAWN', 
		coordinator: {
		  name: 'Ivin Varghese',
		  email: 'mscs2314@rajagiri.edu',
		  phone: '+91 8078982842'
		}
	  },
	  { 
		name: 'WEB DESIGNING', 
		coordinator: {
		  name: 'Hrishikesh U',
		  email: 'mca2323@rajagiri.edu',
		  phone: '+91 9544360991'
		}
	  }
	];
</script>



<footer id="contact" class="bg-[#08072C] text-white py-8 px-4 font-roboto">
	<div class=" gl:mx-8">
		<div class="flex flex-col lg:flex-row justify-between items-start mb-8 gap-8">
			<div class="w-full lg:w-1/4">
				<h2 class="text-2xl font-fugaz text-[#FD1C68] mb-2">EUPHORIA'24</h2>
				<p class="text-sm mb-4  font-Ubuntu">Celebrating innovation and technology</p>
				<div class="flex space-x-4 mb-4">
					<a href="https://www.facebook.com/profile.php?id=61563435161368" class="text-white hover:text-[#FD1C68] transition-colors duration-300">
						<i class="fab fa-facebook-f"></i>
					</a>
					<a href="#" class="text-white hover:text-[#FD1C68] transition-colors duration-300">
						<i class="fab fa-twitter"></i>
					</a>
					<a href="https://www.instagram.com/euphoria_.24._?igsh=MThqazkxbHYydTd3aA==" class="text-white hover:text-[#FD1C68] transition-colors duration-300">
						<i class="fab fa-instagram"></i>
					</a>
					<a href="http://linkedin.com/company/euphoria-24" class="text-white hover:text-[#FD1C68] transition-colors duration-300">
						<i class="fab fa-linkedin-in"></i>
					</a>
				</div>
				<div class="w-full h-40 lg:h-48">
					<h3 class="text-lg font-semibold mb-4">Event Location</h3>
					<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5585722353653!2d76.31302237507876!3d10.053237090054912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dd2c4bfaed9%3A0x616d1c1cb927fe62!2sRajagiri%20College%20of%20Social%20Sciences%20(Autonomous)!5e0!3m2!1sen!2sin!4v1721826098545!5m2!1sen!2sin"
						width="100%" 
						height="100%" 
						style="border:0;" 
						allowfullscreen="" 
						loading="lazy" 
						referrerpolicy="no-referrer-when-downgrade"
						title="Event Location">
					</iframe>
				</div>
			</div>
			
			<div class="w-full lg:w-3/4">
				<h3 class="text-lg font-semibold mb-4 mt-5 gl:mt-0">Event Coordinators</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{#each events as event}
						<div class="bg-[#110F3D] p-4 rounded-lg">
							<h4 class="text-[#FD1C68] font-fugaz mb-2">{event.name}</h4>
							<p class="text-sm mb-1 font-Ubuntu">{event.coordinator.name}</p>
							<a href="mailto:{event.coordinator.email}" class="text-sm block font-Ubuntu hover:text-[#FD1C68] mb-1">
								<i class="fas fa-envelope mr-2 "></i>{event.coordinator.email}
							</a>
							<a href="tel:{event.coordinator.phone}" class="text-sm block font-Ubuntu hover:text-[#FD1C68]">
								<i class="fas fa-phone mr-2 "></i>{event.coordinator.phone}
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
			<p class="text-sm mb-4 md:mb-0">&copy; 2024 EUPHORIA. All Rights Reserved.</p>
			<div class="flex space-x-4">
				<!-- <a href="#" class="text-sm hover:text-[#FD1C68] transition-colors duration-300">Privacy Policy</a> -->
				<a href="https://rajagiri.edu/" class="text-sm hover:text-[#FD1C68] transition-colors duration-300">Rajagiri College of Social Sciences</a>
			</div>
		</div>
	</div>
</footer>
