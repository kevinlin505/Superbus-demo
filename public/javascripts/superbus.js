import '../sass/style.scss';
import 'pikaday/scss/pikaday.scss';

import { $, $$ } from './modules/bling';
import autoComplete from './modules/autoComplete';
import datePicker from './modules/datePicker';

autoComplete( $('#pickup') );
autoComplete( $('#dropoff') );

datePicker( $$('.superbus-calender') );