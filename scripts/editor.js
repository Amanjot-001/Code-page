var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.setOption('enableLiveAutocompletion', true);
editor.session.setMode("ace/mode/html");
editor.setValue(`<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <!-- Write Your Code Here! -->
</body>
</html>`);

const codeObj = {
    html: "",
    css: "",
    javascript: ""
};

const editorBtns = document.querySelectorAll('.editor-btns span');

editorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        editorBtns.forEach(tab => tab.classList.remove("selected"));
        btn.classList.add("selected");

        const lang = btn.classList[0];
        const mode = `ace/mode/${lang}`;
        editor.session.setMode(mode);

        if(codeObj[lang]) {
            editor.setValue(codeObj[lang]);
            editor.clearSelection();
        }

        editor.getSession().on("change", function() {
            const code = editor.getValue();
            codeObj[lang] = code;
        });
    })
})