import {galacticAge} from './galacticAge';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {

  $('#age-form').submit(function(event) {
    event.preventDefault();
    let userBirthday = $('#enter-birthday').val();

    let user = new galacticAge(userBirthday);
    $('#results').show();
    $('#mercury-age').text(user.convertAge("Mercury"));
    $('#venus-age').text(user.convertAge("Venus"));
    $('#earth-age').text(user.convertAge("Earth"));
    $('#mars-age').text(user.convertAge("Mars"));
    $('#jupiter-age').text(user.convertAge("Jupiter"));
    $('#saturn-age').text(user.convertAge("Saturn"));
    $('#uranus-age').text(user.convertAge("Uranus"));
    $('#neptune-age').text(user.convertAge("Neptune"));
  })

});
