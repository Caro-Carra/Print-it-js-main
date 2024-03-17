

		// Réalisation des évènements pour le carousel

		const slides = [
			{
				"image" : "./assets/images/slideshow/slide1.jpg",
				"tagLine" : "Explorez comment notre expertise<br>en design et développement web<br>peut transformer votre présence en ligne en moteur de croissance!<span>Boustant ansi votre R.O.I. avec des solutions innovantes et personnalisées!<br><strong>Agence<br>Humans Web Strategies</strong></span>"
			},
			{
				"image" : "./assets/images/slideshow/slide2.jpg",
				"tagLine" : "WebDesign <span>pour votre Identité visuelle & Maquettes</span>"
			},
			{
				"image" : "./assets/images/slideshow/slide3.jpg",
				"tagLine" : "Développement de votre site<span>Codage & programmation</span>"
			},
			{
				"image" : "./assets/images/slideshow/slide4.jpg",
				"tagLine" : "Référencement<span>Optimisation pour les moteurs de recherche</span>"
			},
			{
				"image" : "assets/images/slideshow/slide5.jpg",
				"tagLine" : "Stratégie marketing digitale <span>Objectifs sur mesure</span>"
			}
		
			];
			console.log(slides);

			//Conception de la fonction pour créations de la div dot en ciblant la classe .dots
			function generateDots() {
				const dotsContainer = document.querySelector('.dots');
				slides.forEach((slide, index) => {
				  const dot = document.createElement('div');
				  dot.classList.add('dot');
				  if (index === 0) {
					dot.classList.add('dot_selected');
				  }
				  dotsContainer.appendChild(dot);
				});
			}

			  //Chargement de la page 
			window.addEventListener('load', generateDots);
			
			//Conception des variables pour les images et les taglines
			let currentSlide = 0;
			const bannerImage = document.querySelector('.banner-img');
			const bannerText = document.querySelector('#banner p');

			//Création de la fonction pour changement de la slide en suivant l'odre du tableau
			function showSlide(slideIndex) {
				currentSlide = slideIndex;
				bannerImage.src = slides[slideIndex].image;
				bannerText.innerHTML = slides[slideIndex].tagLine;
			}

			//Conception  des variables pour les flèches
			const leftArrow = document.querySelector('.arrow_left');
			const rightArrow = document.querySelector('.arrow_right');
			
			// Conception des évenements (eventListener pour les flèches)
			leftArrow.addEventListener('click', handleLeftArrowClick);
			console.log("j'ai cliqué sur la flêche gauche");
			rightArrow.addEventListener('click', handleRightArrowClick);
			console.log("j'ai cliqué sur la flêche droite");

			// Conception des conditions pour changement des images sur les flèches
				function handleLeftArrowClick() {
				console.log('Left arrow clicked');
				if (currentSlide === 0) {
					showSlide(slides.length - 1);
				} else {
					showSlide(currentSlide - 1);
				}
				document.querySelector('.dot_selected').classList.remove('dot_selected');
				document.querySelectorAll('.dot')[currentSlide].classList.add('dot_selected');
			}
			
			function handleRightArrowClick() {
				console.log('Right arrow clicked');
				if (currentSlide === slides.length - 1) {
					showSlide(0);
				} else {
					showSlide(currentSlide + 1);
				}
				document.querySelector('.dot_selected').classList.remove('dot_selected');
				document.querySelectorAll('.dot')[currentSlide].classList.add('dot_selected');
			}

			// conception 
			function showSlides(n) {
				let i;
				
				let dots = document.getElementsByClassName('dots');

				if(n > photos.lenght) { slideIndex = 1 }

				if(n < 1 ){ slideIndex = photos.lenght }

				// Cacher toutes les slides
				for (let i = 0; i < photos.lenght; i++) {
					photos[i].style.display = "none";
				}

				// Retire "active" de tous les points
				for(let i = 0; i < dots.lenght; i++) {
					dots[i].classList.remove('active');
				}

				// Afficher la slide demandée
				photos[slideIndex - 1].style.display = 'block';
			}


			let video = document.querySelector("#my-video");
			let playPauseBtn = document.querySelector("#play-pause-btn");
			let stopBtn = document.querySelector("#stop-btn");
			let volumeSlider = document.querySelector("#volume-slider");
			let progressBar = document.querySelector("#progress-bar");

			playPauseBtn.addEventListener("click", function(){
				if(video.paused){
					video.play();
					playPauseBtn.innerHTML = "PAUSE";
				}
				else{
					video.pause();
					playPauseBtn.innerHTML ="PLAY";
				}
			});

			stopBtn.addEventListener("click", function(){
				video.pause();
				video.currentTime = 0;
			})

			volumeSlider.addEventListener("input", function(){
				video.volume = volumeSliderValue;
			})

			video.addEventListener("timeupdate", function(){
				let progress = (video.currentTime/video.duration)*100;
				progressBar.value = progress
			})

			progressBar.addEventListener("click", function(e){
				let progressWidth = progressBar.clientWidth;
				let clickedPosition = e.offsetX;
				let clickedTime = (clickedPosition/progressWidth)*video.duration;
				video.currentTime = clickedTime;
			})

			