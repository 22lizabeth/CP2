document.getElementById("submit-luxembourgish").addEventListener('click', function(e) {
    e.preventDefault();
    // get form values
    let text = document.getElementById("text-luxembourgish").value;
    
    // setup URL
    let url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200224T002617Z.a59ebfe71a924773.ff72a4d4bc22610a9317b386c3934cfc4da0fcdc&text=" + text + "&lang=en-lb";
    console.log(url)
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
        console.log(json.text)
        updateResult(json.text,"text-luxembourgish");
      });
  });

  document.getElementById("submit-estonian").addEventListener('click', function(e) {
    e.preventDefault();
    // get form values
    let text = document.getElementById("text-estonian").value;
    
    // setup URL
    let url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200224T002617Z.a59ebfe71a924773.ff72a4d4bc22610a9317b386c3934cfc4da0fcdc&text=" + text + "&lang=en-et";
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
        updateResult(json.text,"text-estonian");
      });
  });

  function updateResult(translatedText, Id) {
    document.getElementById(Id).value = translatedText;
  }
