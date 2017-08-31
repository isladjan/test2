..ovaj fajl postoji samo u Dev2

//slede izmene koje postoje samo u dev2 branches
//sada ide bla bla
<script>
  var myForm = document.myForm;
  var nameInput = document.myForm.name;     //ne koristim ime var name... jer je ta rec rezervisana i dovodi do problema
  var submitBtn = document.getElementById('submitBtn');
  
  myForm.addEventListener('submit', validate, false);
  function validate() {
	 if(nameInput.value === "") {
		alert('polje name mora biti popunjeno');
		nameInput.focus();
		return false;
	 }
	
	 // regular expression to match only alphanumeric characters and spaces
     var re = /^[\w ]+$/;	
	 if(!re.test(nameInput.value)) {
		alert('Error: Input contains invalid characters!'); 
		nameInput.focus();
		return false;
	 }
	 
	 //validacija je uspesna
	 return true;
  }//end of fx
	 
	
</script>