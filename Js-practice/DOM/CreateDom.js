//Question
/*
<html> 0 space / L1
    <body> 4 space / L2
        <div> 8 space / L3
            Hello, I am a div! 12 space / L4
        </div> 8 space / L3
    </body> 4 space / L2
</html> 0 space / L1
*/

// Solution

const Indent_Size = 4;
const getSpaces = (length) => {
    return new Array(length).fill(" ").join("");
}

class Node {
    constructor(name) {
        this.name = name;
        this.innerHTML = "";
        this.children = [];
    }
    
    appendChild(node) {
        return this.children.push(node);
    }
}

class VDocument extends Node {
    constructor() {
        super("html");
    }
    
    createElement(nodeName) {
        return new Node(nodeName);
    }
    
    render() {
        function renderTree(currentNode, currentLevel) {
            const spaces = getSpaces(currentLevel*Indent_Size);
            let output = "";
            output += `${spaces}<${currentNode.name}>\n`;
            for(let i=0; i<currentNode.children.length; i++) {
                output += renderTree(currentNode.children[i], currentLevel+1);
            }
            output += `${getSpaces(currentLevel*Indent_Size + Indent_Size)}${currentNode.innerHTML}\n`;
            output += `${spaces}</${currentNode.name}>\n`;
            return output;
        }
        console.log(renderTree(this, 0));
    }
}
var vDocument = new VDocument();
const body = vDocument.createElement('body');
const div = vDocument.createElement('div');

div.innerHTML = "Hello, I am a div!";

vDocument.appendChild(body);
body.appendChild(div);

console.log(vDocument);

vDocument.render();