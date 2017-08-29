//ovo je prva izmena ovde
<script>
   window.addEventListener('message', msgHandler, false);
   function msgHandler(e) {
	  document.getElementsByTagName('h2')[0].innerHTML = e.data;
   }
   
   console.log('Hello wrolde')
</script>
//ova izmena postoji samo u develom B

//dodao sam jos neke izmene