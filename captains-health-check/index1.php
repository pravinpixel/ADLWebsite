<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="canonical" href="https://neubergdiagnostics.com/captains-health-check" />
      <meta name="description" content="Five Years of Excellence in Pathology and Advanced Diagnostics">
      <meta name="keywords" content=" ">
      <title>Captains Health Check| Neuberg Diagnostics</title>
      <meta property="og:description" content="" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Neuberg Diagnostics">
      <link rel="shortcut icon" type="image/png" href="https://neubergdiagnostics.com/static/assets/images/favicon.png"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
     
	  
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
	  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
      <link href="https://neubergdiagnostics.com/static/assets/css/sweetalert.css" rel="stylesheet">
      <link href="css/style.css" rel="stylesheet">





        
   </head>
   <body>
        
   <div id="load" style=" background:url(https://neubergdiagnostics.com/static/images/overly.png) repeat; width:100%; display:none; height:100%; position:fixed;top:0; left:0;z-index: 999999 !important; padding-top:1%; ">
      <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
         <tr>
            <td align="center" valign="middle">
               <table width="100%" align="center" style="border:0px solid #f0f0f0;" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                     <td align="center" valign="middle">
                        <div align="center" class="loading" style="border:0px solid #fff;">
                           <div class="loader"> <span class="loadbg"> <img src="https://neubergdiagnostics.com/static/images/loader.gif" width=" 75px" /> </span> </div>
                        </div>
                     </td>
                  </tr>
               </table>
            </td>
         </tr>
      </table>
   </div>
   
   
      <div class="page-container bg-black">
         <header class="text-white">
            <div class="row align-items-center">
               <div class="col-5">
                  <a href="https://neubergdiagnostics.com/" target="_blank">
					<img src="images/logo.png" alt="Logo" class="img-fluid" />
                  </a>
               </div>
               <div class="col-7">
                  <p class="text-right mb-0">Call now to book<a href="tel:+919700369700"><img src="images/phone-icon.png" alt=""/> +91 9700 36 9700</a></p>
               </div>
            </div>
         </header>
         
         <section class="titleblock text-center">
              <div class="container">
          <div class="row">
         <div class="col-12">
         <h1 class="white">Captain's <span>Health Check</span></h1> 
         <p class="white">Full Body Health Checkup at just ₹1599
Flat 70% Off | 65 Parameters <br/>Results in 24 hours.</p>
         </div>
         </div> </div>
         </section>
         
         <div class="banner">
            <img src="images/banner2.jpg" alt="Banner" class="img-fluid" />
         </div>
         <div class="form-bg" id="form-section ">
            <h1 class="text-center" >Full Body Health Checkup</h1>
            <h6>Our experts will call back for booking an appointment.</h6>
            <form  action="#" method="post" id="neu_five_form" name="neu_five_form">
                
                <input type="hidden" name="location" id="location" value="<?php echo ($_GET['location'] != '') ? $_GET['location'] : 'Cochin'; ?>">
                <input type="hidden" name="package" id="package" value="">
                <input type="hidden" name="price" id="price" value="">
                	
                <input type="hidden" name="campaginsource" id="campaginsource" value="<?php echo $_SERVER['QUERY_STRING']; ?>">
                <div class="form-group">
                    <input placeholder="Name"  class="form-control" required name="name" id="name" type="text" />
                </div>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Mobile No. <span>|</span> +91</span>
                    </div>
                    <input type="tel" required name="phone" id="phone" class="form-control" maxlength="10" minlength="10" placeholder="" onkeypress="return /\d/.test(String.fromCharCode(event.keyCode || event.which))" />
                </div>
               <button name="" id="submit2" type="button" onClick="enquirysubmit()">Request a call back</button>                  
            </form>
         </div>
         <div class="row m-0">
            <div class="col">
               <p class="text-style1 text-center white">Book a lab test from the comfort of your home by trained & fully vaccinated phlebotomist. Quick & accurate test results. Download reports online.</p>
            </div>
         </div>
		 <section class="gray-bg bg-black">
			 <div class="row">
				<div class="col-12 text-center">
					<h2 class="mb-0 white">Health check-up package</h2>
					 
				 </div>	 
				
						<div class="col-12 col-sm-12">
							<div class="slide-content">
								<h4>Captain's <br><span> Health Check</span></h4>  
								<div class="price-div">
								<p class="price">Offer Price <strong><i class="fa fa-inr" aria-hidden="true"></i>1599</strong></p>
								<p class="actual-price">Actual Price <strong><i class="fa fa-inr" aria-hidden="true"></i>5500</strong></p>
								</div>
						 	    <ul>
									<li>Lipid profile </li>
                           <li>  Liver Function </li>
                           <li>   Kidney Function </li>
                           <li>   Thyroid profile </li>
                           <li>   Diabetes Profile </li>
                           <li>   CBC, ESR </li>
                           <li>   Vitamin D </li>
                           <li>   Urine Analysis
                              </li>
                                                      </ul>  
								<div class="parameters"><span>65</span>Parameters</div>
								<a href="#form-section" class="booknow" data-id="nue 5" data-price="1099">Book Now</a>
							</div>
						</div>
						 		
						
			 </div>
		 </section>
		 <div class="row m-0">
			<div class="col-12">
				<h2 class="text-center white">Why Neuberg?</h2>
			</div>
			<div class="col-6">
				<div class="icons">
					<img src="images/icon1.png" alt="" />
					<h4 class="white">Certified Labs</h4>
				</div>
			</div>
			<div class="col-6">
				<div class="icons">
					<img src="images/icon2.png" alt="" />
					<h4 class="white">Safe &amp; Hygienic</h4>
				</div>
			</div>
			<div class="col-6">
				<div class="icons">
					<img src="images/icon3.png" alt="" />
					<h4 class="white">Reports in 24hr</h4>
				</div>
			</div>
			<div class="col-6">
				<div class="icons">
					<img src="images/icon4.png" alt="" />
					<h4 class="white">Home Sample Collection</h4>
				</div>
			</div>
		</div>
		
		
		<div class="videoblock">
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/3Vy1WNAwExY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
		
<div class="downloadapp text-center white">
 Download APP   <img src="images/playstore.png">
</div>



<div class="row m-0 brand">
			 
			<div class="col-4">
				<div class="logos">
					<img src="images/anand.jpg" alt="" />
					 
				</div>
			</div>
			<div class="col-4">
				<div class="logos">
					<img src="images/enrilich.jpg" alt="" />
					</div>
			</div>
			<div class="col-4">
				<div class="logos">
					<img src="images/supratech.jpg" alt="" />
					</div>
			</div>
			 
		</div>



      <section>
         <div class="testmonials-block">

         <h2 class="text-center white"> #CustomerSpeaks </h2>

            <div id="slick1">
						<div class="slide-item">
							<div class="slide-con" >
								 	<p class="white"> "Our heartfelt appreciation to the house visit lab technician for his heartfelt service. He has visited twice to collect the blood sample for my dad to check his Sugar, Cholesterol &amp; Thyroid level. He is very polite, soft spoken &amp; makes the person very comfortable. He is always on time prior to the appointment. He follows proper dress code as prescribed for a lab technician. He wears gloves during the process. Overall his service is outstanding. We really appreciate his true service.Hope Neuberg Ehrlich continues it's excellent service in the coming future."</p>
                            <span class="white"> Mrs. Rajeswari Ranganathan </span>
                     </p> </div>
						</div>
						<div class="slide-item">
							<div class="slide-con" >
								 	<p class="white">
                            "I am for the First Time using Home service from your Lab.The Service rendered by the technician was very nice.He was very courteous and punctual"</p>
                            <span class="white">  Mr. Ramakrishnan Sridher </span>
                           </div>
						</div> 
                  <div class="slide-item">
							<div class="slide-con" >
								 	<p class="white">
                            "Today I had a pleasant experience of availing home visit service from your lab.Blood test was done for my 74 year old mother. The technician who visited to take the sample was cordial with my mother, test was done with minimal pain as I was updated about the person visiting at appropriate time. Overall it was a great experience from a reputed lab, thanking you"</p>
                            <span class="white">  Dr. SGD. Gangadaran, (M.D., D.M) </span>
                           </div>
						</div>
                  <div class="slide-item">
							<div class="slide-con" >
								 	<p class="white">
                            "Very warm experience. Proactive staff. Very good experience"</p>
                            <span class="white">  Mr. Tridib Swain </span>
                           </div>
						</div>


						 </div>
                   </div>
                   </section>

      
<div class="assessment text-center">
<h2 class="white">Get Your Risk Score Now! </h2>
<p class="white"> Diabetes risk assessment tool </p>
  
<a href="https://zfrmz.com/96ECCDxS3UPX9Besl0hH" target="_blank" >Click Here</a>

</div>




		<footer>
			<div class="row">
				<div class="col-12 col-sm-12">
					<img src="images/footer-logo.png" alt="" />
					<p>The best-in-class laboratories from across India, UAE & South Africa have united under the banner of Neuberg Diagnostics to bring the latest technology and techniques within the reach of developing countries. Utilizing their combined strengths, the Neuberg alliance brings capabilities to perform over 5000 varieties of Pathological investigations and will promote Prevention & Early Diagnosis, Focused Wellness Programs and Structured Disease Management programs for rare diseases using the most advanced technologies assisted by Data science and AI tools.</p>
				</div>
				<div class="col-12 col-sm-6">
					<p>Contact Us<a href="tel:+919700369700"><img src="images/footer-phone-icon.png" alt=""/> +91 9700 36 9700</a></p>
				</div>

             

				<div class="col-12 col-sm-6">
					<p>&copy; <script>var CurrentYear = new Date().getFullYear()document.write(CurrentYear); </script> Neuberg Diagnostics Pvt. Ltd. <br/>All rights reserved.</p>
				</div>
			</div>
		</footer>
      </div>
	  <a href="#form-section" class="mobile-button">Request a call back</a>
      <span id="top-link-block"><a href="#" class="well well-sm"><i class="fa fa-angle-up" aria-hidden="true"></i></a></span>
	  
	  <div class="whatsapp-chat">
	 <a href="https://api.whatsapp.com/send?phone=919150099482&text=Book%20Lab%20Tests%20" target="_blank" class="font-semiBold"> <span><i class="fa fa-whatsapp"></i> Chat with us </span>
	 </a></div>
	  
	  
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      
      <script src="https://neubergdiagnostics.com/static/assets/js/sweetalert.min.js"></script> 
      <script src="https://use.fontawesome.com/eafcbbeac7.js"></script>
	  
	  <script type="text/javascript" src="https://neubergdiagnostics.com/static/assets/js/jquery.validate.js"></script> 
<script type="text/javascript" src="https://neubergdiagnostics.com/static/assets/js/additional-methods.js"></script> 


	  
      <script>
      
      $('#slick1').slick({
				
				dots: true,
				arrows: false,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				 responsive: [
				{
				  breakpoint: 640,
				  settings: {
					 
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
				  },
				},
			  ],
		});
      </script>




      <script>
 function loading() {
   	
   	
   	document.getElementById("load").style.display = 'block';
   }
   function unloading() {
   	document.getElementById("load").style.display = 'none';
   	
   }
   
    function book_now( package, price) {
        $('#package').val(package);
        $('#price').val(price);
        console.log( package );
    }
    
    $('.booknow').click(function(){
        
        let pack = $(this).attr( 'data-id' );
        let price = $(this).attr( 'data-price' );
        
        $('#package').val( pack );
        $('#price').val( price );
    })
   
      function enquirysubmit(){
          
         if ($('#neu_five_form').valid()) {
            var package = $('#package').val();
            var price = $('#price').val();
            var name = $('#name').val();
            var phone = $('#phone').val();
            var campaginsource = $('#campaginsource').val();
            
            $.ajax({
                method: 'POST',
                dataType: 'json',
                url: "https://www.neubergdiagnostics.com/ajax/neu_five",
                data: {package:package,price:price,name:name,phone:phone,campaginsource:campaginsource},
                beforesend: loading(),
                cache: false,
                success: function(response) {
                    if (response.rslt == '1') {
                      window.location.href = "https://neubergdiagnostics.com/neu_five/thanks.php";
                    } else if (response.rslt == "-100") {
                      swal("Failure!", "Token Missing.", "warning");
                    } else if (response.rslt == '9') {
                      $('#redirect').html(response.data_details);
                      $("#redirect").submit();
                    }
                }
             });
         } return false;
     }
      
         $(document).ready(function() {
           $(window).scroll(function() {
             if ($(document).scrollTop() > 50) {
               $("#top-link-block").addClass("show");
             } else {
               $("#top-link-block").removeClass("show");
             }
           });
         });
		 
		 $(document).ready(function() {
           $(window).scroll(function() {
             if ($(document).scrollTop() > 600) {
               $(".mobile-button").addClass("show");
             } else {
               $(".mobile-button").removeClass("show");
             }
           });
         });
		 
        
		
		
	 
      </script>
	  <script>
		/*form validation start */
		function valid_chk3()
			{


			if(document.form.name.value=="")
			{
			alert("Please enter your Name")
			document.form.name.focus()
			return false;
			}			
			

			if(document.form.phone.value=="")
			{
			alert("Please enter your Phone no.")
			document.form.phone.focus()
			return false;
			}		
			
			
			var v = grecaptcha.getResponse();
			//alert(v);
			if(v.length == '' || v.length == 0 )
			{
				alert("You can't leave Captcha Code empty");
				return false;				
			}	  

			// pretty sure the problem is here
			console.log('captcha response: ' + grecaptcha.getResponse());
			return true;
			}

			function CheckNumericKeyInfo($char, $mozChar) {
				if($mozChar != null) { // Look for a Mozilla-compatible browser
					if(($mozChar >= 48 && $mozChar <= 57) || $mozChar == 0 || $mozChar == 45 || $char ==
					8 || $mozChar == 13) $RetVal = true;
					else {
					$RetVal = false;
					//alert('Please enter a numeric value.');
					}
				}
				else { // Must be an IE-compatible Browser
					if(($char >= 48 && $char <= 57) || ($char == 13)|| ($char == 45)) $RetVal = true;
					else {
					$RetVal = false;
					//alert('Please enter a numeric value.');
						}
				}
				return $RetVal;
			}
		/* form validation end */
		</script>
		
		
		<script src="//rum-static.pingdom.net/pa-62692fc7405b1d0011000c18.js" async></script>
		
   </body>
</html>