export function render(query: any, block: any) {
    const root = document.querySelector(query);
    console.log('render', block)
    // Можно завязаться на реализации вашего класса Block
    root.appendChild(block.getContent());
    return root;
}