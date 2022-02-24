//12Template Literals
const name = "Kob";
const age = 31;
const job = 'Web developer';
const city = 'Bangkok';
let html;

//Without template strings  (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
  '<li>Name: ' + name + '</li>' +
  '<li>Age: ' + age + '</li>' +
  '<li>Job: ' + job + '</li>' +
  '<li>city: ' + city + '</li>' +
  '</ul>';

function hello() {
  return 'hello';
}
//With template strings (es6)

html = `<h3> With Template</h3> <br>
<ul>
<li>name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>
`;

document.body.innerHTML = html;

