export const template = `<div class="{{ className }}">
            <div class="title">
                <h3>{{ title }}</h3>
            </div>
            <div class="friends_list">
            <ul>
                {{#each friends}}
                    <li>{{{this}}}</li>
                {{/each}}
            </ul>
            </div>
    </div>`;
//# sourceMappingURL=friendListTemplate.js.map