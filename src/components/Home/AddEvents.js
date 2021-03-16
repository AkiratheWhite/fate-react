//This file is used to add JQuery event listeners to the homepage component.
//A useEffect hook is used here, with an empty array argument so that it only runs once on component render.
import {useEffect} from 'react';
import $ from 'jquery';

//Show series description.
function showDesc(event) {
    //Gets the Id of the element whose event was triggered.
    var parent = event.currentTarget.id;
    //Set the series to active.
    $(`#${parent}`).toggleClass("active");
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
    
    //Gets the Id of the element whose event was triggered.
    var parent = event.currentTarget.id;

    //Removes active status from all relevant elements.

    $(`#${parent}`).toggleClass("active");
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
            setTimeout(()=> { //Using a setTimeout to prevent users from breaking the animation.
                $("#series li").hover(showDesc, hideDesc);
                $("#series li").on({'touchstart':showDesc});
                $("#series li").on({'touchcancel':hideDesc});
            }, 500);
        });
        $(document).ready(showGreeting);
    }, []);
}

export default AddEvents;