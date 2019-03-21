import Vue from 'vue';
import Loading from './loading';
// import { addClass, removeClass, getStyle } from 'packages/utils/dom';
const Mask = Vue.extend(Loading);

Vue.extend(Loading);

const loadingDirective = {};

loadingDirective.install = Vue => {
  if (Vue.prototype.$isServer) return;

  const toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        insertDom(el, el, binding);
      });
    }
    else {
      el.instance.visible = false;
    }
  };

  const insertDom = (parent, el) => {
    parent.appendChild(el.mask);
    el.instance.visible = true;
  };

  Vue.directive('loading', {
    bind: function(el, binding) {
      console.log('-----------------------');
      console.log('bind');
      const mask = new Mask({
        el: document.createElement('div'),
        data: {}
      });
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};

      binding.value && toggleLoading(el, binding);
    },
  
    update: function(el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },
  
    unbind: function() {
  
    }
  });
};

export default loadingDirective;
