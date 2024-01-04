function dis_none1() {
  document.getElementById('nav-dr-cn1').style.display = 'none'
}
function dis_block1() {
  document.getElementById('nav-dr-cn1').style.display = 'block'
}
function dis_none2() {
  document.getElementById('nav-dr-cn2').style.display = 'none'
}
function dis_block2() {
  document.getElementById('nav-dr-cn2').style.display = 'block'
}

document.addEventListener('DOMContentLoaded', function () {
  var scrollIcon = document.getElementById('scrollIcon')

  window.addEventListener('scroll', function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollIcon.style.opacity = '1'
    } else {
      scrollIcon.style.opacity = '0'
    }
  })
})
