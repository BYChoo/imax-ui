/**
 * @author choo
 * Date: 19/01/04
 */
import './themes/index.scss';
import IButton from './components/button';
import Icon from './components/icon';
import IRow from './components/row';
import ICol from './components/col';

const components = [
  IButton,
  Icon,
  IRow,
  ICol
];

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  components.map(component => Vue.component(component.name, component));
};

export default {
  install, 
  IButton,
  Icon,
  IRow,
  ICol
};