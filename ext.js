((function extScope() {
  function handleMessage(e) {
    try {
      if (e.data && e.data.height.length > 2 && e.data.request === 'changeHeight') {
        console.log('resizing to : ' + e.data.height);
        var iframe = findIframe(e.data.href);
        if (iframe) {
          iframe.style.height = e.data.height;
       }
        else {
          console.log('Could not find iframe with href', e.data.href);
        }
      } else {
        console.log('Missing e.data or e.data.request or proper e.data.height');
      }
    } catch (e){
      console.log('Caught error: ' , e, e.stack);
    }
  }

  function findIframe(href) {
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; ++i) {
      var iframe = iframes[i];
      if (iframe.src === href) {
        return iframe;
      }
    }
  }

  function hideSyllabusTableIfFlagExists() {
    var flag = document.querySelector('#hide-syllabus-table');
    if (flag) {
      var syllabusEl = document.querySelector('#syllabusContainer');
      if (syllabusEl) {
        syllabusEl.parentElement.removeChild(syllabusEl);
      }
    }
  }

  function setUpEvaluationKit() {
    /*EvaluationKIT START*/
    var evalkit_jshosted = document.createElement('script');
    evalkit_jshosted.setAttribute('type', 'text/javascript');
    evalkit_jshosted.setAttribute('src', 'https://dce-harvard.evaluationkit.com/CanvasScripts/dce-harvard.js?v=0');document.getElementsByTagName('head')[0].appendChild(evalkit_jshosted);
    /*EvaluationKIT END*/
  }

  ((function init() {
    window.addEventListener('message', handleMessage, false);
    hideSyllabusTableIfFlagExists();
    setUpEvaluationKit();
  })());

})());
