       // Create reference instance
    // const marked = require('marked');

    // Set options
    // `highlight` example uses https://highlightjs.org
    /* marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, lang) {
        const hljs = require('highlight.js');
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
    }); */

    // Compile
console.log(marked("God Bless"));

// Start Display Updated View Of Markdown Previewer Function
function displayUpdatedViewOfMarkdownPreviewer() {
    // document.getElementById("preview").innerHTML = marked(document.getElementById("editor").value);
    let markdownPreviewerElementID = document.getElementById("preview");
    let markdownPreviewerEditorValue = document.getElementById("editor").value;
    let convertedStringToHTMLMarkup = marked(markdownPreviewerEditorValue);
    markdownPreviewerElementID.innerHTML = convertedStringToHTMLMarkup;
}
// End Display Updated View Of Markdown Previewer Function

// window.onload = setDefaultDocumentOnload();
    
// Mark down previewer interprets carriage returns and renders them as <br> (line break) elements
marked.setOptions({
    breaks: true
})

// Start Set Default Document On Load Function 
function setDefaultDocumentOnLoad() {
let defaultEditorText = `\
# God Bless - Header 1

## Hello World - Sub Header 2

[This is a Link of my Personal Portfolio Website](https://pjkmt.github.io/personal-portfolio-webpage-by-pjkmt/).

<dl>
<dt>Inline Code</dt>
<dd>Example of Inline Code</dd>

<dt>Markdown in HTML</dt>
<dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

\`Hello World :-) Inline Code Block\`

\`\`\`
function displayHelloWorldCodeBlock() {
    console.log("Hello World");
}
\`\`\`

- List Item 1
- List Item 2
- List Item 3
- List Item 4

> I Love Web Development and Programming Blockquote

![This is FreeCodeCamp Logo Image](https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ikqra03zdnggljdu5vv0)

**Bolded Text**
`; 
let editorInputField = document.getElementById("editor");
let markdownPreviewerElementID = document.getElementById("preview");
editorInputField.value = defaultEditorText;
markdownPreviewerElementID.innerHTML = marked(defaultEditorText);
// console.log(markdownPreviewerElementID);
// console.log(markdownPreviewerElementID.getElementsByTagName("<pre>"));
}
// End Set Default Document On Load Function