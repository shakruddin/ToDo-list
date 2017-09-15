$(document).ready(function (){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
$( function() {
    $( "#datepicker" ).datepicker();
  } );

$('#submit').click(function(){
    var title = $('#title').val();
    var description = $('#description').val();
    var datepicker = $('#datepicker').val();
    if(title == "" || description == "" || datepicker == ""){
        return false;
        
    }
    var you_task = "<div class='tk'><div class='task_header'><i class='material-icons'>account_circle</i>"+ title +"</div><div class='task_description'>"+ description +"</div><div class='task_datepicker'>"+ datepicker +"</div></div>";
    
    $('#div1').append(you_task);
    
    var title = $('#title').val("").focus();
    var description = $('#description').val("");
    var datepicker = $('#datepicker').val("");
    $(".tk").draggable({ cursor: "crosshair", overflow: "none", drag: function(){
        $("#task_form_one").show("slow");
        $(".task_form").hide("slow");
    }});
        $(".item, #panel_one").droppable({ accept: ".tk", 
                   drop: function(event, ui) {
                     var dropped = ui.draggable;
                    var droppedOn = $(this);
                    $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      


                        }, 
                  over: function(event, elem) {
                          $(this).addClass("over");
                           console.log("over");
                  }
                        ,
                          out: function(event, elem) {
                            $(this).removeClass("over");
                          }
                             });
        $(".item, #panel_one").sortable();
        $(".item").disableSelection();

        $(".item, #panel_one").droppable({ accept: ".tk", drop: function(event, ui) {
                           $("#task_form_one").hide("slow");
                           $(".task_form").show("slow");
                     var dropped = ui.draggable;
                    var droppedOn = $(this);
                    $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      


                        }});
}); 
$('#All_clear').click(function(){
   $('.tk').remove(); 
});






