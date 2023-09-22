


		// Eventlistener pour la flèche gauche (clic) avec l alert

		const leftArrow = document.querySelector(".arrow_left");
		const rightArrow = document.querySelector(".arrow_right");


		leftArrow.addEventListener("click", function () {
			console.log("j'ai cliqué sur la flèche gauche");
		});

		// Eventlistener pour la flèche droite (clic) avec l'alert

		rightArrow.addEventListener("click", function () {
			console.log("j'ai cliqué sur la flèche droite");
		});

		//Déclaration des bullet points appel de la class, création de l'ul

		

		let dots = document.querySelector('.dots');

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




		dotUn.addEventListener("click" , function () {
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
		const carousel = document.querySelector('.carousel');
		console.log(carousel);
		const banniere =  document.querySelector('#banner');
		
		// appel de slide1.jpg et de son paragraphe avec span + alert
		//creation div class contener
		const contenerUn = document.createElement("div");
		('imageUn' + 'tagLineUn').className;('contener');
		console.log(contenerUn);
		const imageUn = document.querySelector('.banner-img' , 'src=./assets/images/slideshow/slide1.jpg');
		imageUn.className = ('banner-img');
		console.log(imageUn);
		var tagLineUn = document.querySelector('p' , 'Impressions tous formats <span>en boutique et en ligne</span>');
		console.log(tagLineUn);

		//creation image 2 et son pargraphe
		const contenerDeux = document.createElement("div");
		contenerDeux.className =('contener');
		console.log(contenerDeux);
		const imageDeux = document.createElement("img");
		imageDeux.className = ('banner-img');
		var tagLineDeux = document.createElement("p");
		tagLineDeux.innerHTML = "Tirages haute définition grand format <span>en boutique et en ligne</span> ";
		
		//creation image 3 et son pargraphe
		const contenerTrois = document.createElement("div");
		contenerTrois.className =('contener');
		console.log(contenerTrois);
		const imageTrois = document.createElement("img");
		imageTrois.className = ('banner-img');
		var tagLineTrois = document.createElement("p");
		tagLineTrois.innerHTML = "Grand choix de couleurs <span>de CMJN aux pantones</span>";
		

		//creation image 4 et son pargraphe
		const contenerQuatre = document.createElement("div");
		contenerQuatre.className =('contener');
		console.log(contenerQuatre);
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
		banniere.appendChild(tagLineQuatre);

		
		banniere.appendChild(contenerUn);
		banniere.appendChild(contenerDeux);
		banniere.appendChild(contenerTrois);
		banniere.appendChild(contenerQuatre);

		
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

			/* i correspond aux indices du tableau. On commence en initialisant une variable i = 0 
			Puis on sort toujours de la boucle à i strictement inférieur à la valeur envoyé par slides.lenght 
			  car slides.lenght est = au plus grand indice de notre tableau + 1. */ 

		s = '';
		for(var i=0; i < slides.length; i++) {
			s+= 'slide n°' + (i+1) + ' : ' + slides[i] + '\n';
		} // s va stocker slide 0 ,  i+ 1 donc slide 1 : plus la valeur relative à l indice 0
		 // c'est à dire la valeur de la photo slide1.jpg- voici pour le premier passage dans la boucle

		 console.log(s);


		 /*const nbSlide = items.lenght;
		let count = 0

		function slideSuivante(){
			items[count].classList.remove('active');
		}*/

		


		

			

			
				