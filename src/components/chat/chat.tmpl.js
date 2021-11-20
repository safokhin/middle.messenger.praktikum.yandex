//language=hbs
export default `
  <div class="page-container">
      <div class="chat white-container">
          {{> sidebar sidebarData}}
          {{> dialog dialogData}}
      </div>
      {{#if popupAdd}} {{> popup popupAdd }} {{/if}}
      {{#if popupRemove}} {{> popup popupRemove }} {{/if}}
  </div>
`;
