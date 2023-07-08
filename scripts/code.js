var editor = ace.edit("editor");
var exEditor = ace.edit("ex-editor");
exEditor.setTheme("ace/theme/twilight");
exEditor.session.setMode("ace/mode/html");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/html");

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
            info: questionsData[0].project[0].question[0].info,
            solution: questionsData[0].project[0].question[0].solution,
            prompt: questionsData[0].project[0].question[0].prompt
        })
    })
        .then(res => res.json())
        .then(data => {
            const feedback = data.feedback;
            const feedbackDiv = document.querySelector('.feedback');
            feedbackDiv.textContent = feedback;
            console.log('done');
        })
}

async function example() {
    try {
        const response = await fetch('/exampleData', {
            method: 'POST'
        });
        questionsData = await response.json();
        const exampleValue = questionsData[0].project[0].question[0].example;
        exEditor.setValue(exampleValue);
    } catch (error) {
        console.error(error);
    }
}
example();

const consoleBtn = document.querySelector('.console');
const consoleArea = document.querySelector('.console-area');

consoleBtn.addEventListener('click', handleConsoleBtn);

function handleConsoleBtn() {
    consoleArea.classList.toggle('hidden');
    consoleArea.classList.toggle('visible');
}

const fullscreenBtn = document.querySelector('.fullscreen-btn');
const userIframe = document.querySelector('.result iframe');

fullscreenBtn.addEventListener('click', handleFullscreenBtn);

function handleFullscreenBtn() {
    userIframe.classList.toggle('fullscreen');
    if (userIframe.classList.contains('fullscreen')) {
        fullscreenBtn.innerHTML = '<i class="fa-solid fa-minimize"></i>';
        fullscreenBtn.classList.remove('smallscreenBtn');
        fullscreenBtn.classList.add('fullscreenBtn');
    }
    else {
        fullscreenBtn.innerHTML = '<i class="fa-solid fa-maximize"></i>';
        fullscreenBtn.classList.remove('fullscreenBtn');
        fullscreenBtn.classList.add('smallscreenBtn');
    }
}

const result = document.querySelector('.console-area .middle .result');
const feedback = document.querySelector('.console-area .middle .feedback');
const resultBtn = document.querySelector('.console-area .header span');
const feedbackBtn = document.querySelector('.console-area .header span:last-child');

feedbackBtn.addEventListener('click', () => {
    if (feedback.classList.contains('hidden')) {
        feedback.classList.remove('hidden');
        result.classList.add('hidden');
    }
})

resultBtn.addEventListener('click', () => {
    if (result.classList.contains('hidden')) {
        result.classList.remove('hidden');
        feedback.classList.add('hidden');
    }
})