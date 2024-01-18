
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
				},
				{
					breakpoint: 550,
					settings: {
						slidesToShow:1
					}
				}
			]
	});

	$('.menu__toggle').click(function(){
		$(this).toggleClass("active");
		$(".navbtn__menu").toggleClass("active");
	});	
	
	
	$("[data-scroll]").on('click', function(event) {
		event.preventDefault();
		
		let $this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;
			
			$("nav a").removeClass("active");
			$this.addClass("active");
			
			$("html, body").animate({
				scrollTop: blockOffset
			}, 700);
	})
	
	
	let header = $("#header"),
		introH = $("#header").innerHeight();
		scrollOffset = $(window).scrollTop();
		
		checkScroll(scrollOffset);
		$(window).on("scroll", function() {
			scrollOffset = $(this).scrollTop();
			checkScroll(scrollOffset);
		})
		
		function checkScroll(scrollOffset) {
			if (scrollOffset >= introH) {
				header.addClass("fixed");
			}else {
				header.removeClass("fixed");
			}
		}
		
		
		const modal = document.querySelector("#my-modal");
		const modalBtn = document.querySelector("#modal-btn");
		const closeBtn = document.querySelector(".close");
		
		modalBtn.addEventListener("click", openModal);
		closeBtn.addEventListener("click", closeModal);
		window.addEventListener("click", clickModal);
		
		function openModal() {
			modal.style.display = "block";
		}
		
		function closeModal() {
			modal.style.display = "none";
		}
		
		function clickModal(e) {
			if (e.target == modal) {
				modal.style.display = "none";
			}
		}
		
		
		$("[data-collapse]").on("click", function(event) {
			event.preventDefault();
			
			let $this = $(this),
				blockId = $this.data("data-collapse");
				
				$this.toggleClass("active");
		})
		
		
		function scrollApper() {
			let aboutImg = document.querySelector(".about__img");
			let aboutPosition = aboutImg.getBoundingClientRect().top;
			let screePosition = window.innerHeight / 1;
			
			if (aboutPosition < screePosition) {
				aboutImg.classList.add('about-apper');
			}
		}
		
		window.addEventListener('scroll', scrollApper);
