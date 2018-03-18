import {galacticAge} from './galacticAge';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {

  $('#age-form').submit(function(event) {
    event.preventDefault();
    let userBirthday = $('#enter-birthday').val();
    let userLifeExpectancy = $('#enter-life-expectancy').val();
    console.log(userBirthday);
    if((userBirthday == "") || userLifeExpectancy == ""){
      alert("Please enter your birthday and life expectancy.");
    }
    else {
      let user = new galacticAge(userBirthday, userLifeExpectancy);
      $('#results').show();
      $('#mercury-age').text(user.convertAge("Mercury"));
      $('#venus-age').text(user.convertAge("Venus"));
      $('#earth-age').text(user.convertAge("Earth"));
      $('#mars-age').text(user.convertAge("Mars"));
      $('#jupiter-age').text(user.convertAge("Jupiter"));
      $('#saturn-age').text(user.convertAge("Saturn"));
      $('#uranus-age').text(user.convertAge("Uranus"));
      $('#neptune-age').text(user.convertAge("Neptune"));

      if (user.isStillAlive()) {
        $('#mercury-life-expectancy').text(`${user.findLifeExpectancy('Mercury')} years. That means you have about ${user.findRemainingLife('Mercury')} more Mercury-years to go!`);
        $('#venus-life-expectancy').text(`${user.findLifeExpectancy('Venus')} years. That means you have about ${user.findRemainingLife('Venus')} more Venus-years to go!`);
        $('#earth-life-expectancy').text(`${user.findLifeExpectancy('Earth')} years. That means you have about ${user.findRemainingLife('Earth')} more Earth-years to go!`);
        $('#mars-life-expectancy').text(`${user.findLifeExpectancy('Mars')} years. That means you have about ${user.findRemainingLife('Mars')} more Mars-years to go!`);
        $('#jupiter-life-expectancy').text(`${user.findLifeExpectancy('Jupiter')} years. That means you have about ${user.findRemainingLife('Jupiter')} more Jupiter-years to go!`);
        $('#saturn-life-expectancy').text(`${user.findLifeExpectancy('Saturn')} years. That means you have about ${user.findRemainingLife('Saturn')} more Saturn-years to go!`);
        $('#uranus-life-expectancy').text(`${user.findLifeExpectancy('Uranus')} years. That means you have about ${user.findRemainingLife('Uranus')} more Uranus-years to go!`);
        $('#neptune-life-expectancy').text(`${user.findLifeExpectancy('Neptune')} years. That means you have about ${user.findRemainingLife('Neptune')} more Neptune-years to go!`);
      }
      else {
        $('#mercury-life-expectancy').text(`${user.findLifeExpectancy('Mercury')} years. Wait... are you feeling ok?`);
        $('#venus-life-expectancy').text(`${user.findLifeExpectancy('Venus')} years. Wait... are you feeling ok?`);
        $('#earth-life-expectancy').text(`${user.findLifeExpectancy('Earth')} years. Wait... are you feeling ok?`);
        $('#mars-life-expectancy').text(`${user.findLifeExpectancy('Mars')} years. Wait... are you feeling ok?`);
        $('#jupiter-life-expectancy').text(`${user.findLifeExpectancy('Jupiter')} years. Wait... are you feeling ok?`);
        $('#saturn-life-expectancy').text(`${user.findLifeExpectancy('Saturn')} years. Wait... are you feeling ok?`);
        $('#uranus-life-expectancy').text(`${user.findLifeExpectancy('Uranus')} years. Wait... are you feeling ok?`);
        $('#neptune-life-expectancy').text(`${user.findLifeExpectancy('Neptune')} years. Wait... are you feeling ok?`);
      }
    }
  })

});
