

		// Réalisation des évènements pour le carousel

		const slides = [
			{
				"image" : "./assets/images/slideshow/slide1.jpg",
				"tagLine" : "Impressions tous formats <span>en boutique et en ligne</span>"
			},
			{
				"image" : "./assets/images/slideshow/slide2.jpg",
				"tagLine" : "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
			},
			{
				"image" : "./assets/images/slideshow/slide3.jpg",
				"tagLine" : "Grand choix de couleurs <span>de CMJN aux pantones</span>"
			},
			{
				"image" : "./assets/images/slideshow/slide4.png",
				"tagLine" : "Autocollants <span>avec découpe laser sur mesure</span>"
			}
		
		];
			console.log(slides);

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
			window.addEventListener('load', generateDots);
			
			let currentSlide = 0;
			const bannerImage = document.querySelector('.banner-img');
			const bannerText = document.querySelector('#banner p');
			
			function showSlide(slideIndex) {
				currentSlide = slideIndex;
				bannerImage.src = slides[slideIndex].image;
				bannerText.innerHTML = slides[slideIndex].tagLine;
			}
			
			const leftArrow = document.querySelector('.arrow_left');
			const rightArrow = document.querySelector('.arrow_right');
			
			leftArrow.addEventListener('click', handleLeftArrowClick);
			rightArrow.addEventListener('click', handleRightArrowClick);
			
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

			/*const arrowLeft = document.querySelector('.arrow_left');
			const arrowRight = document.querySelector('.arrow_right');
			const dotContainer = document.querySelector('.dots');
			const bannerImg = document.querySelector('.banner-img');
			const tagLineBanner = document.querySelector('.tagline');

			// ------------CREATION Bullet points---------//

			

				let dots = [];

				for (let i = 0; i < slides.length; i++) {
					let dot = document.createElement("p");
					dotContainer.appendChild(dot);
					dot.classList.add('dot');
					dots.push(dot);
				};
			
			
			//creation de la fonction slide pour images et texte
			
			let currentSlideIndex = selectSlide ( 0, 0);
			function selectSlide (newSlideIndex, oldsSlideIndex) {
				if (newSlideIndex < 0 ) {newSlideIndex = dots.lenght -1};
				if (newSlideIndex > dots.lenght -1)  {newSlideIndex = 0};

				tagLineBanner.innerHTML = slides[newSlideIndex].tagLine;
				bannerImg.src = `./assets/images/slideshow/${slides[newSlideIndex].image}`;

				dots[oldsSlideIndex].classList.remove('dot_selected');
				dots[newSlideIndex].classList.add('do_selected');

				return newSlideIndex;
			};
			
				
			// ----EVENEMENT CLICK FLECHE GAUCHE-----
			
			arrowLeft.addEventListener('click', (event) => {
				
				if (event.button === 0){
				currentSlideIndex = selectSlide (currentSlideIndex +1 , currentSlideIndex);
				};
			});
				
			// ----EVENEMENT CLICK FLECHE DROITE------
			
			arrowRight.addEventListener('click', (event) => {
			
				if (event.button === 0) {
					currentSlideIndex = selectSlide (currentSlideIndex -1 , currentSlideIndex);
				};
			});
			
			//creation des bullets points
			
			/*function createDots() {
			
				const dot = document.createElement('div');
				dot.classList.add('dot');
				dotsContainer.appendChild(dot);
				dot.classList.add('dot_selected')
			
				const dotDeux = document.createElement('div');
				dotDeux.classList.add('dot');
				dotsContainer.appendChild(dotDeux);
			
				const dotTrois = document.createElement('div');
				dotTrois.classList.add('dot');
				dotsContainer.appendChild(dotTrois);
			
				const dotQuatre = document.createElement('div');
				dotQuatre.classList.add('dot');
				dotsContainer.appendChild(dotQuatre);
			
			}
			createDots();*/


			/*let i = 0

			
			/*showSlides = (slideIndex);


			function plusSlides(n) {
				showSlides(slideIndex += n);
			};

			function currentSlide(n) {
				showSlides(slideIndex = n);
			}

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


				// Ajouter "active" sur le point cliqué
			}



			/* i correspond aux indices du tableau. On commence en initialisant une variable i = 0 
			Puis on sort toujours de la boucle à i strictement inférieur à la valeur envoyé par slides.lenght 
			  car slides.lenght est = au plus grand indice de notre tableau + 1. */ 

		
		

		// Eventlistener pour la flèche gauche (clic) avec l alert

		/*const leftArrow = document.querySelector(".arrow_left");
		const rightArrow = document.querySelector(".arrow_right");
		let positionDot = 0;

		function changeSlides (){
			dotList.forEach((dotfull, index) => {
				if (index === positionDot) {
					dotfull.classList.add('dot_selected');
				}
				else {
					dotfull.classList.remove('dot_selected');
		}})
		const slide = slides[positionDot];
		};


		leftArrow.addEventListener("click", function  () {
			positionDot--;
			
			if( positionDot < 0 ) 
			positionDot = 3 ;
			changeSlides ()
			console.log(positionDot);
		
		});

		

		// Eventlistener pour la flèche droite (clic) avec l'alert

		rightArrow.addEventListener("click", function () {
		
			
		
			console.log("j'ai cliqué sur la flèche droite");
			
		});


		
		

		/*function slideSuivant(click, ){
		for(var i=0; i < slides.length; i++) {
			s+= 'slide n°' + (i+1) + ' : ' + slides[i] + '\n';
		} // s va stocker slide 0 ,  i+ 1 donc slide 1 : plus la valeur relative à l indice 0
		 // c'est à dire la valeur de la photo slide1.jpg- voici pour le premier passage dans la boucle

		 console.log(s);
	}

		 /*const nbSlide = items.lenght;
		let count = 0

		function slideSuivante(){
			items[count].classList.remove('active');
		}*/

		

		//Déclaration des bullet points appel de la class, création de l'ul

		

		/*let dots = document.querySelector('.dots');

		let dotsAll = [];

		let dotList = document.createElement('ul');
			dots.appendChild(dotList);

		let dotUn = document.createElement('li');
		let dotDeux = document.createElement('li');
		let dotTrois = document.createElement('li');
		let dotQuatre = document.createElement('li');

		dotList.appendChild(dotUn);
		dotList.appendChild(dotDeux);
		dotList.appendChild(dotTrois);
		dotList.appendChild(dotQuatre);



		dotUn.classList.add('dot', 'dot_selected');
		dotDeux.classList.add('dot');
		dotTrois.classList.add('dot');
		dotQuatre.classList.add('dot');

		
		dotUn.addEventListener("click" , function  () {
			console.log("j'ai cliqué sur le premier point");
		});

		dotDeux.addEventListener("click" , function () {
			console.log("j'ai cliqué sur le deuxième point");
		});

		dotTrois.addEventListener("click" , function () {
			console.log("j'ai cliqué sur le troisième point");
		});

		dotQuatre.addEventListener("click" , function () {
			console.log("j'ai cliqué sur le quatrième point");
		});


		// Gestion du changement de couleur de bullet point
		
		/*const dotElements = document.querySelector('.dot');

		function highLightDot(selectedDoIndex) {
			dotElements.dotElements
			forEach((dot, index) => {
				if (index === selectedDoIndex) {
					dot.classList.add('dot_selected');
				} else {
					dot.classList.remove('dot_selected');
				}
			});
		}

		dotUn.addEventListener("click", function(){
			console.log("j'ai cliqué sur le premier point");
			highLightDot(0);
		});

		dotDeux.addEventListener("click", function(){
			console.log("j'ai cliqué sur le deuxième point");
			highLightDot(1);
		});

		dotTrois.addEventListener("click", function(){
			console.log("j'ai cliqué sur le troisième point");
			highLightDot(2);
		});

		dotQuatre.addEventListener("click", function(){
			console.log("j'ai cliqué sur le quatrième point");
			highLightDot(3);
		})*/


		//Appel du conteneur Carrousel et du conteneur avec ID banner
		/*const carousel = document.querySelector('.carousel');
		console.log(carousel);
		const banniere =  document.querySelector('#banner');
		
		// appel de slide1.jpg et de son paragraphe avec span + alert
		
		const imageUn = document.querySelector('.banner-img' , 'src=./assets/images/slideshow/slide1.jpg');
		imageUn.className = ('banner-img');
		//console.log(imageUn);
		var tagLineUn = document.querySelector('p' , 'Impressions tous formats <span>en boutique et en ligne</span>');
		//console.log(tagLineUn);

		//creation image 2 et son pargraphe
		
		const imageDeux = document.createElement("img");
		imageDeux.className = ('banner-img');
		var tagLineDeux = document.createElement("p");
		tagLineDeux.innerHTML = "Tirages haute définition grand format <span>en boutique et en ligne</span> ";
		
		//creation image 3 et son pargraphe
		
		const imageTrois = document.createElement("img");
		imageTrois.className = ('banner-img');
		var tagLineTrois = document.createElement("p");
		tagLineTrois.innerHTML = "Grand choix de couleurs <span>de CMJN aux pantones</span>";
		

		//creation image 4 et son pargraphe
		
		const  imageQuatre = document.createElement("img");
		imageQuatre.className = ('banner-img');
		var tagLineQuatre = document.createElement("p");
		tagLineQuatre.innerHTML = "Autocollants <span>avec découpe laser sur mesure</span>";
		
		//Insertion des images abec le bon chemin de l'image
		imageDeux.src = "./assets/images/slideshow/slide2.jpg";
		imageTrois.src = "./assets/images/slideshow/slide3.jpg";
		imageQuatre.src = "./assets/images/slideshow/slide4.png";


		//Insertion du bon ordre des images
		banniere.appendChild(imageDeux);
		banniere.appendChild(imageTrois);
		banniere.appendChild(imageQuatre);

		//Insertion de la tagline correspondant à  la bonne image
		banniere.insertBefore(tagLineDeux, imageTrois);
		banniere.insertBefore(tagLineTrois, imageQuatre);
		banniere.appendChild(tagLineQuatre);*/
		