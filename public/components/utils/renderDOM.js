export function render(query, block) {
    const root = document.querySelector(query);
    console.log("element", typeof block.getContent());
    if (root) {
        if (block.getContent() !== null) {
            root.appendChild(block.getContent());
        }
    }
    return root;
}
//# sourceMappingURL=renderDOM.js.map