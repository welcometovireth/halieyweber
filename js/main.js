document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = encodeURIComponent(form.name.value);
      var email = encodeURIComponent(form.email.value);
      var reason = encodeURIComponent(form.reason.value);
      var message = encodeURIComponent(form.message.value);
      var subject = encodeURIComponent('Website inquiry from ' + form.name.value);
      var body = 'Name: ' + name + '%0D%0AEmail: ' + email + '%0D%0AReason: ' + reason + '%0D%0A%0D%0A' + message;
      window.location.href = 'mailto:hello@halieymweber.com?subject=' + subject + '&body=' + body;
    });
  }
});
