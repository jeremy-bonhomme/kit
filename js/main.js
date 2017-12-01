function menuToggle() {
  var h = document.getElementById( 'header' );
  var t = document.getElementById( 'toggle' );

  h.classList.contains( 'is-collapsed' ) ? h.className = 'main-nav' : h.className += ' is-collapsed';
  t.classList.contains( 'is-collapsed' ) ? t.className = 'main-app__toggle ui-button--gvl' : t.className += ' is-collapsed';
}

function languageToggle() {
  var l = document.getElementById( 'language' );

  l.classList.contains( 'is-collapsed' ) ? l.className = 'main-app__language' : l.className += ' is-collapsed';
}
