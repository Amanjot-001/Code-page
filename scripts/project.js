export function addComments(str, Sclass) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = `${str}`;
    console.log(str)
    console.log(tempDiv.innerHTML);
    const selectedClass = tempDiv.querySelector(`.${Sclass}`);
    selectedClass.innerHTML = '\n<!-- Write your code here -->\n';

    console.log(tempDiv.innerHTML);
    return `<body>  ${tempDiv.innerHTML} </body>`;
}

export function addLine (str, Sclass) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = str;

    const selectedClass = tempDiv.querySelector(`.${Sclass}`);
    selectedClass.innerHTML += '\n';



    return `<body>  \n${tempDiv.innerHTML}\n  </body>`;
}