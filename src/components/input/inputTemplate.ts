export const template : string =
    `<label id="{{ name }}" class="label_input">{{ labelText }}</label>
<input class="{{ className }}" 
        placeholder="{{ placeHolder}}"
        type="{{ type }}"
        name="{{ name }}"
        onfocus=focusInputHandler
        onblur=blurInputHandler
        />`