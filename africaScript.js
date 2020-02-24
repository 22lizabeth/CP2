document.getElementById("submit-xhosa").addEventListener('click', function(e) {
    e.preventDefault();
    // get form values
    let text = document.getElementById("text-xhosa").value;
    
    // setup URL
    let url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200224T002617Z.a59ebfe71a924773.ff72a4d4bc22610a9317b386c3934cfc4da0fcdc&text=" + text + "&lang=en-xh";
    // call API
    fetch(url)
      .then(function(response) {
        // make sure the request was successful
        if (response.status != 200) {
          return {
            text: "Error calling the API service: " + response.statusText
          }
        }
        return response.json();
      }).then(function(json) {
        // update DOM with response
        updateResult(json.text,"text-xhosa");
      });
  });

  function updateResult(translatedText, Id) {
    document.getElementById(Id).value = translatedText;
  }
