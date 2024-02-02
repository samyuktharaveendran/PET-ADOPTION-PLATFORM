$(() => {
    $(".uploadBtn").on("click", function () {
      
        $("#fileInput").click();
      });
      $("#fileInput").on("change", function () {
      
        var selectedFile = this.files[0];
    

        alert("Selected file: " + selectedFile.name);
      });
    let $select = $(".age");
    for (var i = 1; i < 30; i++) {
      $select.append($("<option></option>").val(i).html(i));
    }
  
    let $layOver = $('.layOver');
    $layOver.hide();
  
    $(".submitBtn").on("click", function () {
      let nameInput = $('.name').val();
      let speciesInput = $(".species").val();
      let ageInput = $(".age").val();
      let locationInput = $(".location").val();
      let commentsInput = $('.comments').val();
  
      let $thisEntry = $(".petContainer");
  
      if (nameInput === "" || speciesInput === "" || ageInput === "" || locationInput === "") {
        alert("Please add information");
      } else {
        let userInput = $('<div class="box"><p>' + new Date() + ' <br><br>Name:  ' + nameInput + '<br>Species: ' + speciesInput + '<br> Age: ' + ageInput + '<br>Location: ' + locationInput + '<br>Comments: ' + commentsInput + '</p><button class="remove">Remove</button></div>');
        $thisEntry.append(userInput);
        alert("Your Pet has been added. Thank you!");
        clear($('.name'));
        clear($('.species'));
        clear($('.age'));
        clear($('.location'));
        clear($('.comments'));
      }
  
      $(".remove").click(function () {
        $(this).parent().remove();
      });
  
      $(".box").click(function () {
        let $addedContent = $(this).children();
        $('.layOverContent').children().remove();
        $($addedContent).clone().prependTo($('.layOverContent'));
        $layOver.show();
      });
    });
  
    function goToGallery() {

      alert("Redirecting to the gallery page...");
    }
  

    function myFunction() {
      let x = document.createElement("INPUT");
      x.setAttribute("type", "file");
      $(".formContainer").append(x);
      $(".uploadBtn").remove();
    }
  

    function clear(x) {
      x.val("");
    }
  });

document.getElementById('fileInput').addEventListener('change', handleFileSelect);


function handleFileSelect(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {

        console.log('File selected:', file.name);


        const reader = new FileReader();
        reader.onload = function (e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            document.querySelector('.layOverContent').appendChild(imgElement);
        };
        reader.readAsDataURL(file);
    }
}
