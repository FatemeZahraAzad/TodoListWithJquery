URL = "https://61852c2223a2fe0017fff447.mockapi.io/blog";

$(document).ready(function(){
    localItems = JSON.parse(localStorage.getItem('localItems'));
    if (localItems){
        localItems.forEach(function (item) {
            $(".list-group").append("<li class='list-group-item d-flex justify-content-between'>" + item +  "<i class='fas fa-times text-danger mr-auto delete-item'></i>"+"</li>")
        })
    }
    $(".add").click(function(){
        // e.preventDefault()
        var inputval = $("#item").val().trim();

        if (inputval != ''){
            let localItems;
            localItems = [];
            if(localStorage.getItem('localItems') === null){
                localItems = [];
            }else{
                localItems = JSON.parse(localStorage.getItem('localItems'));
            }
            localItems.push(inputval);
            console.log(inputval);

            localStorage.setItem('localItems', JSON.stringify(localItems));

            $(".list-group").append("<li class='list-group-item d-flex justify-content-between'>" + inputval +  "<i class='fas fa-times text-danger mr-auto delete-item'></i>"+"</li>")

        }else{
            alert("please enter something to add")
        }
        
    })

    $(document).on('click','.delete-item',function(){
        let del = $(this).parent().text();
        $(this).parent().remove();
        //remove items from list
        localItems.splice(localItems.indexOf(del),1);
        newList = localItems
        //remove all items from localstorage
        localStorage.removeItem('localItems');
        //replace newlist in localstorage
        localStorage.setItem('localItems', JSON.stringify(newList));

    });
    $(document).on('click','.clear-tasks',function(){
        $('#items').children().remove();
        localStorage.removeItem('localItems');
        // $('#items').children().empty();
        // $('#items').empty();  this also works
    });
        
});