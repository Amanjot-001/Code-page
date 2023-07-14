
export function addCommentsInHtml(str, Sclass) {
    if(Sclass) {
        str = removeCommentsinHtml(str);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = `${str}`;
        // console.log(Sclass)
        // console.log(tempDiv.innerHTML);
        const selectedClass = tempDiv.querySelector(`.${Sclass}`);
        selectedClass.innerHTML = '\n<!-- Write your code here -->\n';
    
        // console.log(tempDiv.innerHTML);
        return `<body>  ${tempDiv.innerHTML} </body>`;
    }
    else
        return str;
}

export function addCommentsInCss(str) {
    str = removeCommentsInCss(str);
    str = ` ${str} \n\n/* Write your code here */ \n`;
    return str;
}

export function addCommentsInJs(str) {
    str = removeCommentsInJs(str);
    str = ` ${str} \n\n/* Write your code here */ \n`;
    return str;
}

function removeCommentsinHtml(str) {
    const regex = /<!--\s*Write your code here\s*-->/g;
    return str.replace(regex, '');
}

function removeCommentsInCss(str) {
    const regex = /\/\*[\s\S]*?\*\//g;
    return str.replace(regex, '');
}

function removeCommentsInJs(str) {
    const regex = /\/\/.*?$|\/\*[\s\S]*?\*\//gm;
    return str.replace(regex, '');
}