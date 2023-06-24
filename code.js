var editor = ace.edit("editor");
var exEditor = ace.edit("ex-editor");
exEditor.setTheme("ace/theme/twilight");
exEditor.session.setMode("ace/mode/html");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/html");

editor.setOption('enableLiveAutocompletion', true);


const run = document.querySelector('.run-btn');

var initialHTML = `<div class="calculator-card">
  <div class="input-div">
  </div>
  <div class="buttons">
  </div>
</div>`;
exEditor.setValue(initialHTML);
exEditor.setReadOnly(true);

run.addEventListener('click', handleRunBtn);

function handleRunBtn() {
    const code = editor.getValue();
    fetch('http://localhost:8080/dog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: code
        })
    })
        .then(() => {
            console.log('correct');
        })
}