import type {IBlock} from "./Block.js";


export function render(query: string, block: IBlock) {
    const root = document.querySelector(query);
    if (root) {
        if (block.getContent() !== null) {
            root.appendChild(block.getContent()!);
        }
    }
    return root;
}