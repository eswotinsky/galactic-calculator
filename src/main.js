import {galacticAge} from './galacticAge';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {

  $('#age-form').submit(function(event) {
    event.preventDefault();
    let userBirthday = $('#enter-birthday').val();
    console.log(userBirthday);

    let user = new galacticAge(userBirthday);
    console.log(user.birthday);
    console.log(user.ageInSeconds(userBirthday));
  })

});
