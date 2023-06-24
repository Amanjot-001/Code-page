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
                    info: 'In this task, your goal is to create a user interface for a simple calculator by utilizing HTML. The calculator will be presented as a card, structured with a main <div> element having the class name "calculator-card". Within this card, you will need to include two additional <div> elements to organize the content.'+
                    '/n' + '/n' +
                    'The first inner <div>, with the class name "input-div" and insert "0" as default content in this div, this will serve as a container for the calculators input field. This field will be used to display the numbers and results of calculations to the user. ' +
                    '/n' + '/n' +
                    'The second inner <div>, with the class name "buttons", will act as a container for the calculators buttons. These buttons will enable users to perform basic mathematical operations such as addition, subtraction, multiplication, and division.',
                    example: '<div class="class-name">'+'/n'+'/t'+'<div class="nested-class">'+'/n'+'/t'+'</div'+'/n'+'</div>',
                    solution: '<div class="calculator-card">' + '/n' + '/t' + '<div class="input-div">' + '/n' + '/t' + '</div>' + '/n' + '/t' + '<div class="buttons">' + '/n' + '/t' + '</div>' + '/n' + '</div>',
                    difficulty: 'Easy',
                    preview: false
                },
                {
                    heading: 'Adding buttons in Calculator.',
                    info:
                    'As part of the calculator card creation, you are required to initialize and include 20 button elements inside the <div> element with the class name "buttons". These buttons will provide functionality for various operations and numerical inputs in the calculator.' +'\n' +
                    'Each button should have a specific content associated with it. The content of the buttons should be initialized in the following order:' +'\n' +
                    '1. "AC" - Represents the clear all (reset) functionality.' + '\n' +
                    '2. "DEL" - Represents the delete (backspace) functionality.' + '\n' +
                    '3. "%" - Represents the percentage functionality.' + '\n' +
                    '4. "/" - Represents the division operation.' + '\n' +
                    '5. "7" - Represents the number 7.' + '\n' +
                    '6. "8" - Represents the number 8.' + '\n' +
                    '7. "9" - Represents the number 9.' + '\n' +
                    '8. "*" - Represents the multiplication operation.' +'\n' +
                    '9. "4" - Represents the number 4.' + '\n' +
                    '10. "5" - Represents the number 5.' + '\n' +
                    '11. "6" - Represents the number 6.' + '\n' +
                    '12. "-" - Represents the subtraction operation.' + '\n' +
                    '13. "1" - Represents the number 1.' + '\n' +
                    '14. "2" - Represents the number 2.' + '\n' +
                    '15. "3" - Represents the number 3.'+ '\n' +
                    '16. "+" - Represents the addition operation.' + '\n' +
                    '17. "^" - Represents the exponentiation (power) operation.' + '\n' +
                    '18. "0" - Represents the number 0.'+ '\n' +
                    '19. "." - Represents the decimal point.'+ '\n' +
                    '20. "=" - Represents the calculation (equal) operation.' + '\n' +
                    'By including these 20 button elements within the "buttons" <div>, you will provide users with a comprehensive set of options to perform various mathematical operations and numerical inputs on the calculator interface.',
                    example: '<button> AC </button>',
                    solution: '<div class="buttons">' + '\n' + '\t' + '<button>AC</button>' + '\n' + '\t' + '<button>DEL</button>' + '\n' + '\t' + '<button>%</button>' + '\n' + '\t' + '<button>/</button>' + '\n' + '\t' + '<button>7</button>' + '\n' + '\t' + '<button>8</button>' + '\n' + '\t' + '<button>9</button>' + '\n' + '\t' + '<button>*</button>' + '\n' + '\t' + '<button>4</button>' + '\n' + '\t' + '<button>5</button>' + '\n' + '\t' + '<button>6</button>' + '\n' + '\t' + '<button>-</button>' + '\n' + '\t' + '<button>1</button>' + '\n' + '\t' + '<button>2</button>' + '\n' + '\t' + '<button>3</button>' + '\n' + '\t' + '<button>+</button>' + '\n' + '\t' + '<button>^</button>' + '\n' + '\t' + '<button>0</button>' + '\n' + '\t' + '<button>.</button>' + '\n' + '\t' + '<button>=</button>' + '\n' + '</div>',
                    difficulty: 'Easy',
                    preview: false
                }
            ]
        }
    ]
})