let IC_insideWrapper = document.getElementById('IC-insideWrapper');
  			let close = document.getElementsByClassName('close')[0];
  			let visible = true;
  			let oc = 5;
  			let open = document.getElementById('navBarSection');

  			close.addEventListener('click',function(){
  				IC_insideWrapper.style.display = 'none';
  				open.style.display = 'block';
  			})

  			open.addEventListener('click',function(){
  				if(true){
  					IC_insideWrapper.style.display = 'block';
  					open.style.display = 'none';
  					visible = false;
  				}else{
  					IC_insideWrapper.style.display = 'none';
  					open.style.display = 'block';
  					visible = true;
  				}
  			})


  			function oneSecondLater(){
  				if(oc < 10){
  					IC_insideWrapper.style.opacity = "0." + oc;
  					oc += 4;
  				}else{
  					IC_insideWrapper.style.opacity = "1.0";
  				}	
  			}

  			setInterval(oneSecondLater,1500);