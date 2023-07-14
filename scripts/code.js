import { addCommentsInHtml, addCommentsInCss, addCommentsInJs } from './project.js'

var editor = ace.edit("editor");
var exEditor = ace.edit("ex-editor");
exEditor.setTheme("ace/theme/twilight");
exEditor.session.setMode("ace/mode/css");
exEditor.clearSelection();
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/html");


editor.setOption('enableLiveAutocompletion', true);

const questionHeading = document.querySelector('.ques-heading');
const questionInfo  = document.querySelector('.ques-info');
const iframe = document.querySelector('.result iframe');

let questionsData = {};
let playerData = {};
const run = document.querySelector('.run-btn');
const submit = document.querySelector('.submit-btn');

exEditor.setReadOnly(true);

let lang = '';

document.addEventListener('DOMContentLoaded', async () => {
    await example();
    await player();

    lang = questionsData[0].project[0].question[0].lang;
    let playerSubmissionLen = (playerData.projects[0].question[0].submissions).length;
    let code = '';

    var commentFunctions = {
        html: addCommentsInHtml,
        css: addCommentsInCss,
        js: addCommentsInJs
    };      

    if(lang == 'html')
        code = commentFunctions[lang](playerData.projects[0].question[0].editor[lang], questionsData[0].project[0].question[0].selectedClassForHtml, playerSubmissionLen);
    else 
        code = commentFunctions[lang](playerData.projects[0].question[0].editor[lang], playerSubmissionLen);
    prettierReq(code);

    await fetch('/clearIframe', {
        method: 'POST',
    })

    iframe.contentWindow.location.reload();
})

run.addEventListener('click', handleRunBtn);

async function handleRunBtn() {
    let code = editor.getValue();
    if(code) {
        prettierReq(code);
    
        let htmlCode = '', cssCode = '', jsCode = '';
        // const language = questionsData[0].project[0].question[0].lang;
        if(lang == 'html') {
            htmlCode = editor.getValue();
            console.log(playerData.projects[0].question[0].editor['css'])
            cssCode = playerData.projects[0].question[0].editor['css'];
            jsCode = playerData.projects[0].question[0].editor['js'];
        }
        else if(lang == 'css') {
            htmlCode = playerData.projects[0].question[0].editor['html'];
            cssCode = editor.getValue();
            jsCode = playerData.projects[0].question[0].editor['js'];
        }
        else {
            htmlCode = playerData.projects[0].question[0].editor['html'];
            cssCode = playerData.projects[0].question[0].editor['css'];
            jsCode = editor.getValue();
        }
    
        await fetch('/handleRunBtn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quesNo: questionsData[0].project[0].question[0].quesNumber,
                lang: lang,
                html: htmlCode,
                css: cssCode,
                js: jsCode,
            })
        })
        
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
                .catch(error => {
                    const feedbackDiv = document.querySelector('.feedback');
                    feedbackDiv.textContent = 'Oops! server error';
                })
             
    consoleArea.classList.remove('hidden');
    consoleArea.classList.add('visible');

    }
    iframe.contentWindow.location.reload();
}

async function prettierReq(code) {
    await fetch('/p', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: code,
            lang: lang
        })
    })
    .then(response => response.json())
    .then(data => {
    editor.setValue(data);
    });
}


async function example() {
    try {
        const response = await fetch('/exampleData', {
            method: 'POST'
        });
        questionsData = await response.json();
        const exampleValue = questionsData[0].project[0].question[0].example;
        exEditor.setValue(exampleValue);
        // console.log(questionsData[0].project[0].question[10].lang)
    } catch (error) {
        console.error(error);
    }
}

async function player() {
    await fetch('/playerData', {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => playerData = data)
}

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

function handlePrevBtn() {
    questionHeading = questionsData[0].project[0].question[questionNumber].heading;
    questionInfo = questionsData[0].project[0].question[questionNumber].info;
}

submit.addEventListener('click', handleSubmitBtn);

async function handleSubmitBtn() {
    let code = editor.getValue();

    await fetch('/submit', {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            code: code,
            lang: lang,
            quesNo: questionsData[0].project[0].question[0].quesNumber,
        })
    })
}

const langBtns = document.querySelectorAll('.editor-btns span');

let cache = '';
let cacheFlag = false;

langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // console.log('click')
        // console.log(language)
        if(btn.className === lang) {
            // console.log(cache)
            editor.setValue(cache);
            cacheFlag = false;
        }
        else {
            if(cacheFlag == false)
                cache = editor.getValue();
            const value = playerData.projects[0].question[0].editor[btn.className];
            editor.setValue(value);
            cacheFlag = true;
        }
    })
})

