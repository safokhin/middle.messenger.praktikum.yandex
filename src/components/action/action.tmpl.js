//language=hbs
export default `
  <div class="action {{ classes }}">
      {{#each actions}}
          {{>button }}
      {{/each}}
  </div>
`;
