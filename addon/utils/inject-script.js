import Ember from 'ember';

export default function injectScript(src, target = 'head') {
  return new Ember.RSVP.Promise(function(resolve) {
    let element;
    let script    = document.createElement('script');
    script.type   = 'text/javascript';
    script.async  = true;
    script.src    = src;
    script.onload = function() {
      resolve();
    };
    if (Ember.isPresent(target) && target !== 'head') {
      element = document.getElementById(target);
    }
    if (Ember.isBlank(element)) {
      element = document.getElementsByTagName('head')[0];
    }
    element.appendChild(script);
  });
}
