export const template : string =
    `<div class="{{ className }}">
    <form>
        <h2>
        {{ formTitle }}
        </h2>
        {{{ inputLogin }}}
        {{{ inputPassword }}}
        {{{ button }}}
        <small class="{{ classNameFP}}">{{ forgotPassword }}</small>
    </form>
</div>`