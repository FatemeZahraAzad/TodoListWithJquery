URL = "https://61852c2223a2fe0017fff447.mockapi.io/blog"

var elements = [];
window.onload = function() {
  if (JSON.parse(localStorage.getItem("elements")) != null)
    elements = JSON.parse(localStorage.getItem("elements"));
  console.log(elements);
  display();
};

$(document).ready(function(){
    $("input[type='submit']").click(function(e){
        e.preventDefault()
        var inputval = $(".form-control").val();
        if (inputval != ''){
            $("#items").append('<li class="list-group-item d-flex justify-content-between">'+inputval+'<i class="fas fa-times text-danger mr-auto delete-item"></i></li>')
        // }else{
        //     alert("please enter something to add")
        // }
        if (localStorage.getItem("elements") == null) {
            localStorage.setItem("elements", JSON.stringify(elements));
          } else {
            localStorage.setItem("elements", JSON.stringify(elements));
          }
          display();
        }
        $(".form-control").val();
    })
    $(document).on('click','.delete-item',function(){
        $(this).parent().remove();
        if (localStorage.getItem("elements") == null) {
            localStorage.setItem("elements", JSON.stringify(elements));
        } else {
            localStorage.setItem("elements", JSON.stringify(elements));
        }
    })

    $(document).on('click','.clear-tasks',function(){
        $('#items').empty();
        if (localStorage.getItem("elements") == null) {
            localStorage.setItem("elements", JSON.stringify(elements));
        } else {
            localStorage.setItem("elements", JSON.stringify(elements));
        }
    })
        
})