import {IBlock} from "./Block";


export function render(query: string, block: IBlock) {
    const root = document.querySelector(query);
    console.log("element", typeof block.getContent())
    if (root) {
        if (block.getContent() !== null) {
            root.appendChild(block.getContent())!;
        }
    }
    return root;
}