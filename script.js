

$( "document" ).ready(function() {
    var type =null
    $("button").on("click",function(){
        var choice =$(".choice").val();
        $.get("https://pokeapi.co/api/v2/pokemon/"+choice+"/").done(function(response){
            $(".sprite").empty();
            $(".sprite").removeClass(type);
            $("h3").remove();
            type=(response.types[0].type.name)
            if ((response.types.length===2)){
                type2="/"+(response.types[1].type.name)
            }else{
                type2=""
            }
            ID=response.id
            name=response.name
            height=response.height/10+" m"
            weight=response.weight/10+" kg";
            $(".sprite").append("<img src="+response.sprites.front_default+">");
            $(".info").append("<h3> ID: "+ID+" <br> Name: "+name+" <br> Height: "+height+" <br> Weight: "+weight+" <br> Type: "+type +type2+" </h3>");
            $(".sprite").addClass(response.types[0].type.name);
            console.log(response);
        });

        //access to information on hitting the enter key instead of the button.
        //some problems with showing the cycling through pokedex entries when this is used.
        //  $('.input').keypress(function(e) //instead of $("button").on("click", function(){})
});
});
