//This file is used to add JQuery event listeners to the homepage component.
//A useEffect hook is used here, with an empty array argument so that it only runs once on component render.
import {useEffect} from 'react';
import $ from 'jquery';

//Show series description.
function showDesc(event) {
    //Gets the Id of the element whose event was triggered, sets it to active.
    var parent = event.currentTarget.id;
    $(`#${parent}`).toggleClass('active');

    //Set the display of the description div to block. The CSS on it will keep it invisible
    $("#"+parent+" .series-desc").css("display", "block");
    $("#"+parent+" .img").toggleClass("active");
    //After the display has been set to block and a delay of 100 ms has passed, the class of the description div will be toggled.
    //This will give a smoother looking transition effect.
    setTimeout(function() {
        $("#"+parent+" .series-desc").toggleClass("visible-desc");
        $("#"+parent+" .img").toggleClass("not-active");

        if ($("#"+parent+" .img").hasClass("not-active-first") === true) {
            $("#"+parent+" .img").removeClass("not-active-first");
        }
    }, 100);
}

//Hides series description.
function hideDesc(event) {
    //Removes active status from all relevant elements.
    var parent = event.currentTarget.id;
    $(`#${parent}`).toggleClass('active');

    $("#"+parent+" .series-desc").css("display", "none");
    $("#"+parent+" .series-desc").toggleClass("visible-desc");
    $("#"+parent+" .img").toggleClass("active");
    $("#"+parent+" .img").toggleClass("not-active");
}

//Shows page greeting.
function showGreeting () {
	if ($(window).width() > 992) {	
		$("#greeting").css("display", "block");
		
		setTimeout(function(){
			$("#greeting").css("opacity", "1.0");
		}, 100);
	}
}

const AddEvents = () => { 
    useEffect(() => {
        $(document).ready(()=> {
            //Event listeners are added to the jumbotron's elements.
            $("#series li").hover(showDesc, hideDesc);
            $("#series li").on({'touchstart':showDesc});
            $("#series li").on({'touchcancel':hideDesc});
            
            /*List items have a class that disables pointer-events.
            This prevents users from hovering them on load and breaking the animation.
            */
            setTimeout(() => {//Re-enables pointer-events after 250 ms.
                $("#series li").removeClass("not-active-first");
            }, 250);
        });
        $(document).ready(showGreeting);
    }, []);
}

export default AddEvents;