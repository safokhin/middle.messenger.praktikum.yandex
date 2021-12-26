// small - 38x38
// big - 120x120
//language=hbs
export const avatarTmpl = `
  <button 
      class="avatar {{ classes }} {{#if isEmptyPhoto}} avatar--empty {{/if}}"
  >
      {{#if isEmptyPhoto}}
        <span class="avatar__text">{{ nameSymbol }}</span>
      {{else}}
        <img src="{{ srcImage }}" alt="">
      {{/if}}
  </button>
`;
