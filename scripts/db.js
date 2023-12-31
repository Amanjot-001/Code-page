const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_PROD_URL)

const Project = new mongoose.Schema({
    project: [
        {
            question: [
                {
                    heading: String,
                    info: String,
                    example: String,
                    hint: String,
                    solution: String,
                    like: Number,
                    dislike: Number,
                    difficulty: String,
                    html: String,
                    css: String,
                    js: String,
                    prompt: String,
                    preview: Boolean
                }
            ]
        }
    ]
});

const project = mongoose.model('project', Project);

const data = new project({
    project: [
        {
            question: [
                {
                    heading: "Creating a simple Calculator card.",
                    info: 'In this task, your goal is to create a user interface for a simple calculator by utilizing HTML. The calculator will be presented as a card, structured with a main <div> element having the class name "calculator-card". Within this card, you will need to include two additional <div> elements to organize the content.' +
                        '/n' + '/n' +
                        'The first inner <div>, with the class name "input-div" and insert "0" as default content in this div, this will serve as a container for the calculators input field. This field will be used to display the numbers and results of calculations to the user. ' +
                        '/n' + '/n' +
                        'The second inner <div>, with the class name "buttons", will act as a container for the calculators buttons. These buttons will enable users to perform basic mathematical operations such as addition, subtraction, multiplication, and division.',
                    example: '<div class="class-name">' + '/n' + '/t' + '<div class="nested-class">' + '/n' + '/t' + '</div' + '/n' + '</div>',
                    solution: '<div class="calculator-card">' + '/n' + '/t' + '<div class="input-div">' + '/n' + '/t' + '</div>' + '/n' + '/t' + '<div class="buttons">' + '/n' + '/t' + '</div>' + '/n' + '</div>',
                    difficulty: 'Easy',
                    preview: false
                },
                {
                    heading: 'Adding buttons in Calculator.',
                    info:
                        'As part of the calculator card creation, you are required to initialize and include 20 button elements inside the <div> element with the class name "buttons". These buttons will provide functionality for various operations and numerical inputs in the calculator.' + '\n' +
                        'Each button should have a specific content associated with it. The content of the buttons should be initialized in the following order:' + '\n' +
                        '1. "AC" - Represents the clear all (reset) functionality.' + '\n' +
                        '2. "DEL" - Represents the delete (backspace) functionality.' + '\n' +
                        '3. "%" - Represents the percentage functionality.' + '\n' +
                        '4. "/" - Represents the division operation.' + '\n' +
                        '5. "7" - Represents the number 7.' + '\n' +
                        '6. "8" - Represents the number 8.' + '\n' +
                        '7. "9" - Represents the number 9.' + '\n' +
                        '8. "*" - Represents the multiplication operation.' + '\n' +
                        '9. "4" - Represents the number 4.' + '\n' +
                        '10. "5" - Represents the number 5.' + '\n' +
                        '11. "6" - Represents the number 6.' + '\n' +
                        '12. "-" - Represents the subtraction operation.' + '\n' +
                        '13. "1" - Represents the number 1.' + '\n' +
                        '14. "2" - Represents the number 2.' + '\n' +
                        '15. "3" - Represents the number 3.' + '\n' +
                        '16. "+" - Represents the addition operation.' + '\n' +
                        '17. "^" - Represents the exponentiation (power) operation.' + '\n' +
                        '18. "0" - Represents the number 0.' + '\n' +
                        '19. "." - Represents the decimal point.' + '\n' +
                        '20. "=" - Represents the calculation (equal) operation.' + '\n' +
                        'By including these 20 button elements within the "buttons" <div>, you will provide users with a comprehensive set of options to perform various mathematical operations and numerical inputs on the calculator interface.',
                    example: '<button> AC </button>',
                    solution: '<div class="buttons">' + '\n' + '\t' + '<button>AC</button>' + '\n' + '\t' + '<button>DEL</button>' + '\n' + '\t' + '<button>%</button>' + '\n' + '\t' + '<button>/</button>' + '\n' + '\t' + '<button>7</button>' + '\n' + '\t' + '<button>8</button>' + '\n' + '\t' + '<button>9</button>' + '\n' + '\t' + '<button>*</button>' + '\n' + '\t' + '<button>4</button>' + '\n' + '\t' + '<button>5</button>' + '\n' + '\t' + '<button>6</button>' + '\n' + '\t' + '<button>-</button>' + '\n' + '\t' + '<button>1</button>' + '\n' + '\t' + '<button>2</button>' + '\n' + '\t' + '<button>3</button>' + '\n' + '\t' + '<button>+</button>' + '\n' + '\t' + '<button>^</button>' + '\n' + '\t' + '<button>0</button>' + '\n' + '\t' + '<button>.</button>' + '\n' + '\t' + '<button>=</button>' + '\n' + '</div>',
                    difficulty: 'Easy',
                    preview: false
                },
                {
                    heading: 'Center the Calculator card.',
                    info: 'To create an attractive and user-friendly interface, it is essential to style the <body> tag appropriately. This involves centering the calculator card on the page and selecting a suitable background color.' + '/n' +
                        'The styling of the body tag should ensure that the calculator card is positioned at the center of the page, while also considering the choice of an appropriate background color.',
                    example: 'body {' + '/n' + '/t' + 'background-color: #000' + '/n' + '}',
                    solution: 'body {\n' +
                        '\tbackground-color: #000;\n' +
                        '\tdisplay: flex;\n' +
                        '\tjustify-content: center;\n' +
                        '\talign-items: center;\n' +
                        '\tmin-height: 100vh;\n' +
                        '}',
                    difficulty: 'Easy',
                    html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Calculator</title><link rel="stylesheet" href="ex.css"></head><body><div class="calculator-card"><div class="input-div">0</div><div class="buttons"><button>AC</button><button>DEL</button><button>%</button><button>/</button><button>7</button><button>8</button><button>9</button><button>*</button><button>4</button><button>5</button><button>6</button><button>-</button><button>1</button><button>2</button><button>3</button><button>+</button><button>^</button><button>0</button><button>.</button><button>=</button></div></div><script src="ex.js"></script></body></html>',
                    css: '* { margin: 0; padding: 0; box-sizing: border-box; } body { background-color: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; }',
                    preview: true
                },
                {
                    heading: 'Styling the buttons container',
                    info: 'Apply the following styles to the <div> element with the class name "buttons" to achieve a visually pleasing layout:' + '/n' +
                        'Arrange the button elements in a grid with 5 rows and 4 columns.' + '/n' +
                        'Add appropriate spacing between each button to create gaps.' + '/n' +
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
                    html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Calculator</title><link rel="stylesheet" href="ex.css"></head><body><div class="calculator-card"><div class="input-div">0</div><div class="buttons"><button>AC</button><button>DEL</button><button>%</button><button>/</button><button>7</button><button>8</button><button>9</button><button>*</button><button>4</button><button>5</button><button>6</button><button>-</button><button>1</button><button>2</button><button>3</button><button>+</button><button>^</button><button>0</button><button>.</button><button>=</button></div></div><script src="ex.js"></script></body></html>',
                    css: '* { margin: 0; padding: 0; box-sizing: border-box; } body { background-color: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; } .buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 20px; color: white; background-color: #333; padding: 10px; border-radius: 5px; }',
                    preview: true
                },
                {
                    heading: 'Styling the input-div and buttons.',
                    info: 'To style the <div> element with the class name "input-div":' + '/n' +

                        'Font Size: Change the text size using font-size.' + '/n' +
                        'Padding: Add space around the content using padding.' + '/n' +
                        'Text Alignment: Align the text using text-align.' + '/n' +
                        'Color: Change the text color using color.' + '/n' +
                        'To style the <button> elements inside the <div> with the class name "buttons":' + '/n' +

                        'Font Size: Change the text size using font-size.' + '/n' +
                        'Padding: Add space around the content using padding.' + '/n' +
                        'Background Color: Change the background color using background-color.' + '/n' +
                        'Cursor Style: Change the cursor appearance using cursor.',
                    solution: '.input-div {\n' +
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
                    html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Calculator</title><link rel="stylesheet" href="ex.css"></head><body><div class="calculator-card"><div class="input-div">0</div><div class="buttons"><button>AC</button><button>DEL</button><button>%</button><button>/</button><button>7</button><button>8</button><button>9</button><button>*</button><button>4</button><button>5</button><button>6</button><button>-</button><button>1</button><button>2</button><button>3</button><button>+</button><button>^</button><button>0</button><button>.</button><button>=</button></div></div><script src="ex.js"></script></body></html>',
                    css: '* { margin: 0; padding: 0; box-sizing: border-box; } body { background-color: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; } .buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 20px; color: white; background-color: #333; padding: 10px; border-radius: 5px; } .input-div { font-size: 1.2rem; padding: 5px 15px; text-align: end; color: white; } .buttons button { font-size: 0.7rem; padding: 2.5px; background-color: #555; border-radius: 5px; cursor: pointer; }',
                    difficulty: 'Easy',
                    preview: true
                },
                {
                    heading: 'Styling the Calculator-card.',
                    info: 'You have to style the Calculator-card in such a way that it looks appealing, you can adjust the padding, background-color, border-radius, etc to do so',
                    solution: '.calculator-card {\n' +
                        '\tpadding: 0.8rem;\n' +
                        '\tbackground-color: #222;\n' +
                        '\tborder-radius: 10px;\n' +
                        '}',
                    difficulty: 'Easy',
                    html: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Calculator</title><link rel="stylesheet" href="ex.css"></head><body><div class="calculator-card"><div class="input-div">0</div><div class="buttons"><button>AC</button><button>DEL</button><button>%</button><button>/</button><button>7</button><button>8</button><button>9</button><button>*</button><button>4</button><button>5</button><button>6</button><button>-</button><button>1</button><button>2</button><button>3</button><button>+</button><button>^</button><button>0</button><button>.</button><button>=</button></div></div><script src="ex.js"></script></body></html>',
                    css: '*{margin:0;padding:0;box-sizing:border-box;}body{background-color:#000;display:flex;justify-content:center;align-items:center;min-height:100vh;}.buttons{display:grid;grid-template-columns:repeat(4,1fr);gap:15px;margin-top:20px;color:white;background-color:#333;padding:10px;border-radius:5px;}.input-div{font-size:1.2rem;padding:5px 15px;text-align:end;color:white;}.buttons button{font-size:0.7rem;padding:2.5px;background-color:#555;border-radius:5px;cursor:pointer;}.calculator-card{padding:0.8rem;background-color:#222;border-radius:10px;}',
                    preview: true,
                }
            ]
        }
    ]
})

module.exports = {data};
