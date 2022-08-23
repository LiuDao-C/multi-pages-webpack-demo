import { splitStr } from './split';
function formDate(str = '') {
  return str.replaceAll('-', splitStr);
}

export default formDate;
