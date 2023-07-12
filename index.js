const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const app = express();
const ejs = require('ejs');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const prettier = require("prettier");

const configuration = new Configuration({
    apiKey: process.env.API_KEY
});

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use("/styles", express.static(__dirname + "/styles"));
app.use("/scripts", express.static(__dirname + "/scripts"));
app.use("/images", express.static(__dirname + "/images"));

const openai = new OpenAIApi(configuration);
mongoose.connect(process.env.MONGO_PROD_URL)
    .then(() => console.log('connected db'));



const ProjectSchema = new mongoose.Schema({
    project: [
        {
            question: [
                {
                    quesNumber: Number,
                    heading: String,
                    info: String,
                    hint: String,
                    example: String,
                    preview: Boolean,
                    solution: String,
                    like: Number,
                    dislike: Number,
                    difficulty: String,
                    previewHtml: String,
                    previewCss: String,
                    previewJs: String,
                    prompt: String,
                    previousHtml: String,
                    previousCss: String,
                    previousJs: String,
                    lang: String,
                    selectedClassForHtml: String

                }
            ]
        }
    ]
});

const project = mongoose.model('project', ProjectSchema);

const data = new project({
    project: [
        {
            question: [
                {
                    quesNumber: 1,
                    heading: "Creating a simple Calculator card.",
                    info: `
                    In this task, your goal is to create a user interface for a simple calculator by utilizing
                    HTML. The calculator will be presented as a card, structured with a main <code>div</code>
                    element having the class name "calculator-card". Within this card, you will need to include
                    two additional <code>div</code> elements to organize the content.
                    
                    <ul>
                        <li> The first inner <code>div</code>, with the class name "display" and insert "0" as
                            default content in this div, this will serve as a container for the calculator's
                            input field. This field will be used to display the numbers and results of
                            calculations to the user.
                        </li>
                        <li> The second inner <code>div</code>, with the class name "buttons", will act as a
                            container for the calculator's buttons. These buttons will enable users to perform
                            basic mathematical operations such as addition, subtraction, multiplication, and
                            division.
                        </li>
                    </ul>
                    `,
                    example: '<div class="class-name">\n\t<div class="nested-class">\n\t</div>\n</div>',
                    solution: '<div class="calculator-card">\n\t<div class="display">\n\t</div>\n\t<div class="buttons">\n\t</div>\n</div>',
                    difficulty: 'Easy',
                    prompt: 'create a div with class as "calculator-card" and two nested divs in it with classes "display" and "buttons" respectively in this order and "0" as default content of display',
                    preview: false
                },
                {
                    quesNumber: 2,
                    heading: 'Adding buttons in Calculator.',
                    info:
                        'As part of the calculator card creation, you are required to initialize and include 20 button elements inside the <div> element with the class name "buttons". These buttons will provide functionality for various operations and numerical inputs in the calculator.\n' +
                        'Each button should have a specific content associated with it. The content of the buttons should be initialized in the following order:\n' +
                        '1. "AC" - Represents the clear all (reset) functionality.\n' +
                        '2. "DEL" - Represents the delete (backspace) functionality.\n' +
                        '3. "%" - Represents the percentage functionality.\n' +
                        '4. "/" - Represents the division operation.\n' +
                        '5. "7" - Represents the number 7.\n' +
                        '6. "8" - Represents the number 8.\n' +
                        '7. "9" - Represents the number 9.\n' +
                        '8. "*" - Represents the multiplication operation.\n' +
                        '9. "4" - Represents the number 4.\n' +
                        '10. "5" - Represents the number 5.\n' +
                        '11. "6" - Represents the number 6.\n' +
                        '12. "-" - Represents the subtraction operation.\n' +
                        '13. "1" - Represents the number 1.\n' +
                        '14. "2" - Represents the number 2.\n' +
                        '15. "3" - Represents the number 3.\n' +
                        '16. "+" - Represents the addition operation.\n' +
                        '17. "^" - Represents the exponentiation (power) operation.\n' +
                        '18. "0" - Represents the number 0.\n' +
                        '19. "." - Represents the decimal point.\n' +
                        '20. "=" - Represents the calculation (equal) operation.\n' +
                        'By including these 20 button elements within the "buttons" <div>, you will provide users with a comprehensive set of options to perform various mathematical operations and numerical inputs on the calculator interface.',
                    example: '<button> AC </button>',
                    solution: '<div class="buttons">\n\t<button>AC</button>\n\t<button>DEL</button>\n\t<button>%</button>\n\t<button>/</button>\n\t<button>7</button>\n\t<button>8</button>\n\t<button>9</button>\n\t<button>*</button>\n\t<button>4</button>\n\t<button>5</button>\n\t<button>6</button>\n\t<button>-</button>\n\t<button>1</button>\n\t<button>2</button>\n\t<button>3</button>\n\t<button>+</button>\n\t<button>^</button>\n\t<button>0</button>\n\t<button>.</button>\n\t<button>=</button>\n</div>',
                    difficulty: 'Easy',
                    preview: false
                },
                {
                    quesNumber: 3,
                    heading: 'Center the Calculator card.',
                    info: 'To create an attractive and user-friendly interface, it is essential to style the <body> tag appropriately. This involves centering the calculator card on the page and selecting a suitable background color.\n' +
                        'The styling of the body tag should ensure that the calculator card is positioned at the center of the page, while also considering the choice of an appropriate background color.',
                    example: 'body {\n\tbackground-color: #000;\n}',
                    solution: 'body {\n' +
                        '\tbackground-color: #000;\n' +
                        '\tdisplay: flex;\n' +
                        '\tjustify-content: center;\n' +
                        '\talign-items: center;\n' +
                        '\tmin-height: 100vh;\n' +
                        '}',
                    difficulty: 'Easy',
                    html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Calculator</title><link rel="stylesheet" href="ex.css"></head><body><div class="calculator-card"><div class="display">0</div><div class="buttons"><button>AC</button><button>DEL</button><button>%</button><button>/</button><button>7</button><button>8</button><button>9</button><button>*</button><button>4</button><button>5</button><button>6</button><button>-</button><button>1</button><button>2</button><button>3</button><button>+</button><button>^</button><button>0</button><button>.</button><button>=</button></div></div><script src="ex.js"></script></body></html>',
                    css: '* { margin: 0; padding: 0; box-sizing: border-box; } body { background-color: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; }',
                    preview: true
                },
                {
                    quesNumber: 4,
                    heading: 'Styling the buttons container',
                    info: 'Apply the following styles to the <div> element with the class name "buttons" to achieve a visually pleasing layout:\n' +
                        'Arrange the button elements in a grid with 5 rows and 4 columns.\n' +
                        'Add appropriate spacing between each button to create gaps.\n' +
                        'Apply additional styling to enhance the overall appearance and make it visually appealing.',
                    hint: 'Use grid',
                    example: '.buttons {\n' +
                        '\tmargin-top: 20px;\n' +
                        '\tcolor: white;\n' +
                        '\tbackground-color: #333;\n' +
                        '\tpadding: 10px;\n' +
                        '\tborder-radius: 5px;\n' +
                        '}',
                    solution: '.buttons {\n' +
                        '\tdisplay: grid;\n' +
                        '\tgrid-template-columns: repeat(4, 1fr);\n' +
                        '\tgap: 15px;\n' +
                        '\tmargin-top: 20px;\n' +
                        '\tcolor: white;\n' +
                        '\tbackground-color: #333;\n' +
                        '\tpadding: 10px;\n' +
                        '\tborder-radius: 5px;\n' +
                        '}',
                    difficulty: 'Medium',
                    html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Calculator</title><link rel="stylesheet" href="ex.css"></head><body><div class="calculator-card"><div class="display">0</div><div class="buttons"><button>AC</button><button>DEL</button><button>%</button><button>/</button><button>7</button><button>8</button><button>9</button><button>*</button><button>4</button><button>5</button><button>6</button><button>-</button><button>1</button><button>2</button><button>3</button><button>+</button><button>^</button><button>0</button><button>.</button><button>=</button></div></div><script src="ex.js"></script></body></html>',
                    css: '* { margin: 0; padding: 0; box-sizing: border-box; } body { background-color: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; } .buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 20px; color: white; background-color: #333; padding: 10px; border-radius: 5px; }',
                    preview: true
                },
                {
                    quesNumber: 5,
                    heading: 'Styling the display and buttons.',
                    info: 'To style the <div> element with the class name "display":\n' +
                        'Font Size: Change the text size using font-size.\n' +
                        'Padding: Add space around the content using padding.\n' +
                        'Text Alignment: Align the text using text-align.\n' +
                        'Color: Change the text color using color.\n' +
                        'To style the <button> elements inside the <div> with the class name "buttons":\n' +
                        'Font Size: Change the text size using font-size.\n' +
                        'Padding: Add space around the content using padding.\n' +
                        'Background Color: Change the background color using background-color.\n' +
                        'Cursor Style: Change the cursor appearance using cursor.',
                    solution: '.display {\n' +
                        '\tfont-size: 1.2rem;\n' +
                        '\tpadding: 5px 15px;\n' +
                        '\ttext-align: end;\n' +
                        '\tcolor: white;\n' +
                        '}\n\n' +
                        '.buttons button {\n' +
                        '\tfont-size: 0.7rem;\n' +
                        '\tpadding: 2.5px;\n' +
                        '\tbackground-color: #555;\n' +
                        '\tborder-radius: 5px;\n' +
                        '\tcursor: pointer;\n' +
                        '}',
                    html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Calculator</title><link rel="stylesheet" href="ex.css"></head><body><div class="calculator-card"><div class="display">0</div><div class="buttons"><button>AC</button><button>DEL</button><button>%</button><button>/</button><button>7</button><button>8</button><button>9</button><button>*</button><button>4</button><button>5</button><button>6</button><button>-</button><button>1</button><button>2</button><button>3</button><button>+</button><button>^</button><button>0</button><button>.</button><button>=</button></div></div><script src="ex.js"></script></body></html>',
                    css: '* { margin: 0; padding: 0; box-sizing: border-box; } body { background-color: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; } .buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 20px; color: white; background-color: #333; padding: 10px; border-radius: 5px; } .display { font-size: 1.2rem; padding: 5px 15px; text-align: end; color: white; } .buttons button { font-size: 0.7rem; padding: 2.5px; background-color: #555; border-radius: 5px; cursor: pointer; }',
                    difficulty: 'Easy',
                    preview: true
                },
                {
                    quesNumber: 6,
                    heading: 'Styling the Calculator-card.',
                    info: 'You have to style the Calculator-card in such a way that it looks appealing, you can adjust the padding, background-color, border-radius, etc to do so',
                    solution: '.calculator-card {\n' +
                        '\tpadding: 0.8rem;\n' +
                        '\tbackground-color: #222;\n' +
                        '\tborder-radius: 10px;\n' +
                        '}',
                    difficulty: 'Easy',
                    html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Calculator</title><link rel="stylesheet" href="ex.css"></head><body><div class="calculator-card"><div class="display">0</div><div class="buttons"><button>AC</button><button>DEL</button><button>%</button><button>/</button><button>7</button><button>8</button><button>9</button><button>*</button><button>4</button><button>5</button><button>6</button><button>-</button><button>1</button><button>2</button><button>3</button><button>+</button><button>^</button><button>0</button><button>.</button><button>=</button></div></div><script src="ex.js"></script></body></html>',
                    css: '*{margin:0;padding:0;box-sizing:border-box;}body{background-color:#000;display:flex;justify-content:center;align-items:center;min-height:100vh;}.buttons{display:grid;grid-template-columns:repeat(4,1fr);gap:15px;margin-top:20px;color:white;background-color:#333;padding:10px;border-radius:5px;}.display{font-size:1.2rem;padding:5px 15px;text-align:end;color:white;}.buttons button{font-size:0.7rem;padding:2.5px;background-color:#555;border-radius:5px;cursor:pointer;}.calculator-card{padding:0.8rem;background-color:#222;border-radius:10px;}',
                    preview: true,
                }
            ]
        }
    ]
})

// data.save();
app.get('/save', async (req, res) => {
    // await project.deleteMany({});
    const data = await project.find({});
    res.send(data);
})

app.use(bodyParser.json());
app.use(cors());


let code = '';
let info = '';
let solution = '';
let checkedCode = '';
app.post('/dog', async (req, res) => {
    code = req.body.code;
    info = req.body.info;
    solution = req.body.solution;
    prompt = req.body.prompt;
    // console.log(code);
    // console.log(prompt)
    const feedback = await check();
    res.json({ feedback });
    // res.sendStatus(200);
})

app.post('/p', async (req, res) => {
    let code = req.body.code;
    const formattedCode = await prettier.format(code, {
        parser: 'html',
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 80, // Set the desired line width for indentation
        htmlWhitespaceSensitivity: 'ignore', // Ignore HTML indentation rules
        embeddedLanguageFormatting: 'off', // Disable formatting for embedded languages
    });
    console.log(formattedCode);
    res.json(formattedCode);
});

app.get('/ex', (req, res) => {
    const filePath = path.join(__dirname, 'ex.html');
    res.sendFile(filePath);
});

app.get('/calculator', (req, res) => {
    const filePath = path.join(__dirname, 'calculator.html');
    res.sendFile(filePath);
});

app.post('/exampleData', async (req, res) => {
    const data = await project.find({});
    res.json(data)
})

async function check() {
    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{
            role: 'user',
            content: `You have been assigned the task of reviewing submitted code based on a problem statement. Your role is to evaluate whether the provided code meets the requirements specified in the problem statement, including the correct order of elements. Please assess the submitted code in HTML, CSS, and JavaScript, considering functionality, correctness, adherence to coding standards, class and ID names, element order, and best practices.
            Given the problem statement and the submitted code, determine whether the code satisfies the requirements and effectively solves the given problem.
            Please provide feedback on the code, highlighting any issues, missing elements, or areas for improvement. Avoid revealing the solution or mentioning that you are an AI language model.
            Keep the feedback short and direct.
            If the user code is irrelevant or not valid, please provide the following output: "Oops! Not a valid code."
            Problem Statement:
            ${info}
            User Code:
            ${code}`
        }]
    })

    checkedCode = completion.data.choices[0].message.content;
    console.log(checkedCode);
    return checkedCode;
}

app.get('/path', async (req, res) => {
    const data = await project.find({});
    // console.log(data);
    res.render('code', { data });
})

app.get('/code', (req, res) => {
    res.send(code);
    res.send('hl');
})

app.listen(8080, () => {
    console.log('running');
});