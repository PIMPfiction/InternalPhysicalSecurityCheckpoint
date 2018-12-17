function notification(msg, type){
  $.toast({
    heading: msg,
    position: 'top-right',
    loaderBg: '#fec107',
    icon: type,
    hideAfter: 4000
  });
}


function xd() {
  $.ajax({
      url: '/homepage/api/',
      method: 'POST',
      dataType: 'json',
      data: {
        csrfmiddlewaretoken: "{{csrf_token}}",
        param: 0,
      }
  }).done(function (response) {
      if (response.errorstring) {
        notification(msg=response.errorstring, type=response.error_type);
      }

  });
};
xd();
(function loop() {
  setTimeout(function () {
    xd();
    loop()
  }, 10000);}());
