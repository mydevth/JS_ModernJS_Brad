//59 XHR Object Methods & Working With Text

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // Open
  xhr.open('GET', 'data.txt', true);

  console.log('READYSTATE', xhr.readyState);  //   readyState 1

  //Optional - used for spinners/loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);      //   readyState 3
  }

  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);    //   readyState 4
    if (this.status === 200) {

      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;

      //test
      document.getElementById('content').value = (`HTTP Status: [${this.status}] Content : [${this.responseText}] `);
      //test
      console.log(this.responseText);
    } else {
      document.getElementById('content').value = (`Status: [${this.status}]`);
    }
  }

  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //     document.getElementById('content').value = (`HTTP Status: [${this.status}] ReadyState : [${this.readyState}]  Content : [${this.responseText}] `);
  //   }
  // }


  xhr.onerror = function () {
    console.log('Request error.....');
  }

  xhr.send();

  //readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready




  // HTTP Statuses
  // 200: OK
  // 403: Forbidden
  // 404: Not Found
}