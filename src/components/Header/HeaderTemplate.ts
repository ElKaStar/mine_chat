export const template : string =
    `<nav class="{{ className }}">
    <ul>
     {{#if isAddMenu}}
        <li>
            {{{ imgLogo }}}
        </li>
        {{/if}}
        <li class="header">
            <header>
                <h1>
                    {{ text }}
                </h1>
            </header>
        </li>
        {{#if isAddMenu}}
        <li class="link">
            <a href="{{ refToPage }}">{{MenuItem}}</a>
        </li>
        <li class="sign">
            <a href="{{ refToSignInSignOut }}">{{SignInSignOut}}</a>
        </li>
        {{/if}}
    </ul>
</nav>`
