export const template : string =
    `<div class="{{ className }}">
    {{{ header }}}
    <main class="{{ classMain }}"">
    <div class="content color_body">
      <div class="image">
      <div class="{{ Friends }}"></div>
      </div>  
        {{{ loginForm }}}
         {{{ imageCriper }}}
    </div>
    </main>
</div>`