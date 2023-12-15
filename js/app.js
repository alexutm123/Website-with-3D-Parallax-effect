document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})
function createSnowflake() {
	const snowflake = document.createElement('div');
	snowflake.classList.add('snowflake');
  
	const randomSize = Math.random() * 4;
	const randomPosition = Math.random() * window.innerWidth;
  
	snowflake.style.width = `${randomSize}px`;
	snowflake.style.height = `${randomSize}px`;
	snowflake.style.left = `${randomPosition}px`;
  
	const snowContainer = document.querySelector('.snow-container');
	snowContainer.appendChild(snowflake);
  
	let topPosition = -randomSize;
	const fallSpeed = 1 + Math.random() * 2;
  
	function snowfall() {
	  topPosition += fallSpeed;
	  snowflake.style.top = `${topPosition}px`;
  
	  const windowHeight = window.innerHeight;
	  if (topPosition < windowHeight - randomSize) {
		requestAnimationFrame(snowfall);
	  } else {
		snowflake.style.top = `${windowHeight - randomSize}px`;
  
		const increaseInterval = setInterval(() => {
		  const flakeWidth = parseFloat(snowflake.style.width);
		  const flakeHeight = parseFloat(snowflake.style.height);
		  snowflake.style.width = `${flakeWidth + 0.1}px`;
		  snowflake.style.height = `${flakeHeight + 0.1}px`;
  
	
		  topPosition -= 0.1;
		  snowflake.style.top = `${topPosition}px`;
  
		  if (topPosition < -flakeHeight) {
			clearInterval(increaseInterval);
			snowflake.remove(); 
		  }
		}, 1000);
	  }
	}
  
	snowfall();
  }
  
  setInterval(createSnowflake, 100);