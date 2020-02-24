document.getElementById("submit-uzbek").addEventListener('click', function(e) {
    e.preventDefault();
    // get form values
    let text = document.getElementById("text-uzbek").value;
    
    // setup URL
    let url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200224T002617Z.a59ebfe71a924773.ff72a4d4bc22610a9317b386c3934cfc4da0fcdc&text=" + text + "&lang=en-uz";
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
        updateResult(json.text,"text-uzbek");
      });
  });

  document.getElementById("submit-tajik").addEventListener('click', function(e) {
    e.preventDefault();
    // get form values
    let text = document.getElementById("text-tajik").value;
    
    // setup URL
    let url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200224T002617Z.a59ebfe71a924773.ff72a4d4bc22610a9317b386c3934cfc4da0fcdc&text=" + text + "&lang=en-tg";
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
        updateResult(json.text, "text-tajik");
      });
  });


  document.getElementById("submit-javanese").addEventListener('click', function(e) {
    e.preventDefault();
    // get form values
    let text = document.getElementById("text-javanese").value;
    
    // setup URL
    let url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200224T002617Z.a59ebfe71a924773.ff72a4d4bc22610a9317b386c3934cfc4da0fcdc&text=" + text + "&lang=en-jv";
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
        updateResult(json.text,"text-javanese");
      });
  });

  document.getElementById("submit-sinhala").addEventListener('click', function(e) {
    e.preventDefault();
    // get form values
    let text = document.getElementById("text-sinhala").value;
    
    // setup URL
    let url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200224T002617Z.a59ebfe71a924773.ff72a4d4bc22610a9317b386c3934cfc4da0fcdc&text=" + text + "&lang=en-si";
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
        updateResult(json.text,"text-sinhala");
      });
  });

  document.getElementById("submit-kyrgyz").addEventListener('click', function(e) {
    e.preventDefault();
    // get form values
    let text = document.getElementById("text-kyrgyz").value;
    
    // setup URL
    let url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200224T002617Z.a59ebfe71a924773.ff72a4d4bc22610a9317b386c3934cfc4da0fcdc&text=" + text + "&lang=en-ky";
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
        updateResult(json.text,"text-kyrgyz");
      });
  });

  function updateResult(translatedText, Id) {
    document.getElementById(Id).value = translatedText;
  }