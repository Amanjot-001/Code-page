var editor = ace.edit("editor");
var exEditor = ace.edit("ex-editor");
exEditor.setTheme("ace/theme/twilight");
exEditor.session.setMode("ace/mode/css");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/css");


editor.setOption('enableLiveAutocompletion', true);

let questionsData = {};
const run = document.querySelector('.run-btn');

exEditor.setReadOnly(true);

run.addEventListener('click', handleRunBtn);

function handleRunBtn() {
    const code = editor.getValue();
    fetch('/dog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: code,
            info: questionsData[0].project[0].question[2].info,
            solution: questionsData[0].project[0].question[2].solution,
            prompt: questionsData[0].project[0].question[2].prompt
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
        questionsData = await response.json();
        const exampleValue = questionsData[0].project[0].question[2].example;
        exEditor.setValue(exampleValue);
    } catch (error) {
        console.error(error);
    }
}
example();