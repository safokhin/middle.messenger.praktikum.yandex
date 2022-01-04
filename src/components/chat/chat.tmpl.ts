//language=hbs
export const chatTmpl = `
  <div class="page-container">
      <div class="chat white-container">
          {{{ sidebarData }}}
          {{{ dialogData }}}
      </div>
      {{#if popupAdd}} {{{ popupAdd }}} {{/if}}
      {{#if popupRemove}} {{{ popupRemove }}} {{/if}}
      {{#if popupCreateChat}} {{{ popupCreateChat }}} {{/if}}
  </div>
`;
