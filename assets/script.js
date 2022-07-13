//moment.js display current date and time at top of calendar
const currentDay = moment().format('MMMM Do YYYY, h:mm:ss a'); //gets current day
$("#currentDay").append(currentDay); //displays inside the element

//create the variables to save the time to locat storage
var time1 = $("8").text();
var time2 = $("9").text();
var time3 = $("10").text();
var time4 = $("11").text();
var time5 = $("12").text();
var time6 = $("13").text();
var time7 = $("14").text();
var time8 = $("15").text();
var time9 = $("16").text();
var time10 = $("17").text();

//Current time done with moment.js
var currentTime = moment().hours();

//***FUNCTION: The function to render local storage information on page load
$(document).ready(function () {

    //-------Load from local storage-------
    $('#text8a').html(localStorage.getItem('time1'));
    $('#text9a').html(localStorage.getItem('time2'));
    $('#text10a').html(localStorage.getItem('time3'));
    $('#text11a').html(localStorage.getItem('time4'));
    $('#text12p').html(localStorage.getItem('time5'));
    $('#text1p').html(localStorage.getItem('time6'));
    $('#text2p').html(localStorage.getItem('time7'));
    $('#text3p').html(localStorage.getItem('time8'));
    $('#text4p').html(localStorage.getItem('time9'));
    $('#text5p').html(localStorage.getItem('time10'));

    //****FUNCTION: Save each slot & text to local storage when "Save" button clicked
    $('button').on("click", function () {
        localStorage.setItem('time1', $('#text8a').val());
        localStorage.setItem('time2', $('#text9a').val());
        localStorage.setItem('time3', $('#text10a').val());
        localStorage.setItem('time4', $('#text11a').val());
        localStorage.setItem('time5', $('#text12p').val());
        localStorage.setItem('time6', $('#text1p').val());
        localStorage.setItem('time7', $('#text2p').val());
        localStorage.setItem('time8', $('#text3p').val());
        localStorage.setItem('time9', $('#text4p').val());
        localStorage.setItem('time10', $('#text5p').val());
    });

    function colorBlock() {

        $('.time-block').each(function () {
            var timeBlock = parseInt($(this).attr('id'));

            if (currentTime < timeBlock) {
                $(this).addClass('future').removeClass("past present");
            }
            else if (currentTime > timeBlock) {
                $(this).addClass('past').removeClass("present future");
            }
            else if (currentTime === timeBlock) {
                $(this).addClass('present').removeClass("past future")
            }
        });


    }
    colorBlock()
});





