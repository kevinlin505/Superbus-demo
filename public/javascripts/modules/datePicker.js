import Pikaday from 'pikaday';
import moment from 'moment';

function datePicker (inputs) {
  inputs.forEach(function(input) {
    new Pikaday({
      field: input,
      minDate: moment().toDate()
    });
  });
}

export default datePicker;