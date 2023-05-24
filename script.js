
	function non_message_window() {
		document.querySelector(".display_message").style.backgroundImage = "url(searching.png)";
		document.getElementById("codification_of_message").value="";
		document.getElementById("message").value="";
		document.getElementById("button_copy").setAttribute("hidden", "hidden");
		document.getElementById("warning").removeAttribute("hidden");
		document.getElementById("warning_2").removeAttribute("hidden");
		document.getElementById("message").focus();
		
	}

	function message_to_window(text) {
		document.getElementById("codification_of_message").value=text;
		document.getElementById("message").value="";
		document.querySelector(".display_message").style.backgroundImage = "none";
		document.getElementById("button_copy").removeAttribute("hidden");
		document.getElementById("warning").setAttribute("hidden", "hidden");
		document.getElementById("warning_2").setAttribute("hidden", "hidden");	
		document.getElementById("message").focus();
	}
	function validacion_texto(text) {
		if(text==""){
			non_message_window();
			return false;
		}
		else{
			for(index in text){
				if((text.charCodeAt(index)<=96 || text.charCodeAt(index)>=123) &&  text.charCodeAt(index)!=32 && text.charCodeAt(index)!=10){
					non_message_window();
					return false;
				}
			}
			return true;	
		}
	}
		
	function encriptar() {
		var message_to_encode = document.getElementById("message").value;
		// scan if there are incorrect characters in the message
		if(validacion_texto(message_to_encode)==true){
		// encriptation of the text
			message_to_encode = message_to_encode.replaceAll("e","enter");
			message_to_encode = message_to_encode.replaceAll("i","imes");
			message_to_encode = message_to_encode.replaceAll("a","ai");
			message_to_encode = message_to_encode.replaceAll("o","ober");
			message_to_encode = message_to_encode.replaceAll("u","ufat");
			message_to_window(message_to_encode);
		}

	}

	function desencriptar() {
		var message_to_encode = document.getElementById("message").value;
		// scan if there are incorrect characters in the message
		if(validacion_texto(message_to_encode)==true){
		// desencriptation of the text
			message_to_encode = message_to_encode.replaceAll("enter","e");
			message_to_encode = message_to_encode.replaceAll("imes","i");
			message_to_encode = message_to_encode.replaceAll("ai","a");
			message_to_encode = message_to_encode.replaceAll("ober","o");
			message_to_encode = message_to_encode.replaceAll("ufat","u");
			message_to_window(message_to_encode);
		}
	}

	function copiar() {
		var copyText = document.getElementById("codification_of_message");

	 	copyText.select();
	  	copyText.setSelectionRange(0, 99999); // For mobile devices

	  	navigator.clipboard.writeText(copyText.value);
	}
		