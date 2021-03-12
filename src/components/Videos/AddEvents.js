import $ from 'jquery';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {nullLink} from '../../redux/videos';

const AddEvents = (args) => {
    const dispatch = useDispatch();
    /*We have to pass the 'series' parameter into this function. Every time a new series is selected,
    we have to re-add the event listeners, or else they won't work properly.
    Additionally, since the series is initially an empty string, we cannot use an
    empty array, as that would mean the event handlers attempt to be added on the first render
    when there are no elements rendered on the component.*/
        useEffect(() => {
            $(".btn.close-btn").click(() => {
                $(".player").addClass("hidden").removeClass("visible");
                //Dispatch the nullLink action after 500ms, so that the animation has time to run.
                setTimeout(()=>{dispatch(nullLink());}, 500);
            });
            $(".episodes .col").click(() => {
                $(".player").addClass("visible").removeClass("hidden");
            });
            console.log("Added listeners.")
        }, [args, dispatch]);
}

export default AddEvents;