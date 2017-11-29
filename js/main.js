function menuToggle() {
  var h = document.getElementById( 'header' );
  var t = document.getElementById( 'toggle' );

  h.classList.contains( 'is-collapsed' ) ? h.className = 'main-nav' : h.className += ' is-collapsed';
  t.classList.contains( 'is-collapsed' ) ? t.className = 'main-app__toggle ui-button--gvl' : t.className += ' is-collapsed';
}
