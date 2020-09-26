// file name appere in file input


$(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});



// search in a table 

$("#myInput").on("keyup", function() {

        var value = $(this).val().toLowerCase();

        $("#myTable .filt").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
 });



 // image Preview


 function showImagePreview(input) {
          if (input.files && input.files[0]) {
              var reader = new FileReader();

              reader.onload = function (e) {
                  $('#prev').attr('src', e.target.result);
              }

              reader.readAsDataURL(input.files[0]);
          }
      }

        $("#imgInp").change(function(){
          showImagePreview(this);
        });