var editor = ace.edit("editor");
var exEditor = ace.edit("ex-editor");
exEditor.setTheme("ace/theme/twilight");
exEditor.session.setMode("ace/mode/html");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/html");
let projectData = '';

editor.setOption('enableLiveAutocompletion', true);

const run = document.querySelector('.run-btn');
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

async function example() {
    try {
        const response = await fetch('/exampleData', {
            method: 'POST'
        });
        projectData = await response.json();
        const exampleValue = projectData[0].project[0].question[0].example;
        exEditor.setValue(exampleValue);
    } catch (error) {
        console.error(error);
    }
}
example();