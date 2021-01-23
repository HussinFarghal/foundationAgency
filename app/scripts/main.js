console.log('testing scripts')
let x = 1;
let y = 2;
let sum;
// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

function logName() {
  console.log('function is working')

  return sum = x + y;
}

logName();
// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
