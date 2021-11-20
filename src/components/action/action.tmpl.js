//language=hbs
export default `
  <div class="action {{ classes }}">
      {{#each actions}}
        <button class="action__button">
            {{#if icon}} <img class="action__button-icon" src="{{ icon }}" alt="" />{{/if}}
            {{#if text}} <span class="action__button-text">{{ text }}</span> {{/if}}
        </button>
      {{/each}}
  </div>
`;
