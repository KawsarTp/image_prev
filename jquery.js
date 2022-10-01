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


// copy from input field

var copyButton = document.querySelector('.copy button');
    var copyInput = document.querySelector('.copy input');
    copyButton.addEventListener('click', function(e) {
      e.preventDefault();
      var text = copyInput.select();
      document.execCommand('copy');
    });
    copyInput.addEventListener('click', function() {
      this.select();
    });


// filter input box for number
 $('#donateAmount').on('keyup paste',function(){
      this.value = this.value.replace(/[^0-9]/g, '');
    })


// get radio value in input
$(".donated-amount input[type='radio']").each(function() {
      $(this).on('click', function(){
        var selValue = $(".donated-amount input[type='radio']:checked").val();
        $('#donateAmount').attr('value', selValue);
        console.log(selValue);
      });
 
        
        
//progress bar
         $(".progressbar").each(function(){
	$(this).find(".bar").animate({
		"width": $(this).attr("data-perc")
	},3000);
	$(this).find(".label").animate({
		"left": $(this).attr("data-perc")
	},3000);
});

	
// 	multiple file upload with preview
	let idcounter = 1;

            $('.add').on('click', function(e) {
                e.preventDefault()

                let html = `
                
                <div class="col-md-3 removeGallery mb-3">
                            <button class="btn btn-danger removeBtn"><i class="fa fa-times"></i></button>
                            <div id="image-preview-${idcounter}" class="image-preview w-100">
                                <label for="image-upload" id="image-label-${idcounter}">{{ __('Choose File') }}</label>
                                <input type="file" class="imageUploader" name="gallery[]" id="image-upload-${idcounter}" data-id="${idcounter}" />
                            </div>

                        </div>
                
                `;
                $('#gallery').append(html);

                idcounter++;

            })

            $(document).on('change', '.imageUploader', function() {
                showImagePreview(this, "#image-preview-" + $(this).data('id'));
            })

            function showImagePreview(input, id) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                        $(id).css('background-image', "url(" + e.target.result + ")");
                    }

                    reader.readAsDataURL(input.files[0]);
                }
            }

            $(document).on('click', '.removeBtn', function() {
                $(this).parent('.removeGallery').remove();
            })
