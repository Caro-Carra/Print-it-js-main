

// Gestion des images



const carousel = document.querySelector('.carousel');
	console.log(carousel);

	/*document.body.innerHTML = '<image src="' + '" />'
	+ '<tagLine>'*/

/*const banner =  document.querySelector('#banner');
console.log(banner);*/



/*let bannerDeux = document.createElement("img");
console.log(bannerDeux );
let bannerTrois = document.createElement("img");
console.log(bannerTrois );
let bannerQuatre = document.createElement("img");
console.log(bannerQuatre );


bannerDeux.src = "./assets/images/slideshow/slide2.jpg";
bannerTrois.src = "./assets/images/slideshow/slide3.jpg";
bannerQuatre.src = "./assets/images/slideshow/slide4.png";

banner.appendChild(bannerDeux);
banner.appendChild(bannerTrois);
banner.appendChild(bannerQuatre);*/




/*document.body.appendChild(bannerDeux);
document.body.appendChild(bannerTrois);
document.body.appendChild(bannerQuatre);

	/*let slideIndex = 1
	showSlides(slideIndex);
	function showSlides(n) {
		let i;*/


		const slides = [
			{
				"image":"./assets/images/slideshow/slide1.jpg",
				"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
			},
			{
				"image":"./assets/images/slideshow/slide2.jpg",
				"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
			},
			{
				"image":"./assets/images/slideshow/slide3.jpg",
				"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
			},
			{
				"image":"./assets/images/slideshow/slide4.png",
				"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
			}
			
			];
			console.log(slides);


			let numero = 0;

			function changeBannerimg(sens) {
				numero = numero + sens;
				if (numero < 0)
				numero = banner-img.lenght - 1;
				if (numero > banner-img.lenght - 1)
				numero = 0;
				document.getElementsByClassName("banner-img").src = slides[numero];
			}

		



	

		


	/*const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
	];
	console.log(slides);*/

		
   	// Event listener pour la flèche gauche

	   const leftArrow = document.querySelector(".arrow_left");
	   const rightArrow = document.querySelector(".arrow_right");


	  leftArrow.addEventListener("click", function () {
		console.log("j'ai cliqué sur la flèche gauche");
	});

	// Event listener pour la flèche droite

	rightArrow.addEventListener("click", function () {
		console.log("j'ai cliqué sur la flèche droite");
	});

	//Déclaration des bullet points

	let dots = document.querySelector('.dots');
	console.log('dots', dots);

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
	


	dotUn.classList.add('dot');
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



	

			