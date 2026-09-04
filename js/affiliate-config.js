/* Digistore24 affiliate nickname — required to receive commissions */
window.MIDAS_AFFILIATE = '';
window.MIDAS_PRODUCT_ID = '439776';

window.midasCheckoutUrl = function () {
  var nick = (window.MIDAS_AFFILIATE || '').trim();
  try {
    var q = new URLSearchParams(window.location.search);
    nick = (q.get('hop') || q.get('affiliate') || nick || '').trim();
  } catch (e) {}
  var id = window.MIDAS_PRODUCT_ID || '439776';
  if (nick) {
    return 'https://www.digistore24.com/product/' + id + '/' + encodeURIComponent(nick) + '/';
  }
  return 'https://www.digistore24.com/product/' + id;
};

window.midasBindCheckout = function () {
  var url = window.midasCheckoutUrl();
  document.querySelectorAll('form.checkout-form, form[action="buy.php"], form[action="buy2.php"]').forEach(function (form) {
    form.setAttribute('action', url);
    form.setAttribute('method', 'get');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = window.midasCheckoutUrl();
    });
  });
  document.querySelectorAll('a[href="buy.php"], a[href="buy2.php"], a[href="/buy.php"]').forEach(function (a) {
    a.setAttribute('href', url);
  });
};

document.addEventListener('DOMContentLoaded', function () {
  if (typeof window.midasBindCheckout === 'function') window.midasBindCheckout();
});
