//language=hbs
export default `
  <div class="message {{#if isMe }}message--is-me{{/if }} ">
      {{> avatar }}
      <div class="message__content">
          <div class="message__content-bubble">{{ text }}</div>
          <div class="message__content-photos">
              {{#each photos}}
                  <img class="message__content-photo" src="{{ src }}" alt="">
              {{/each}}
          </div>
      </div>
  </div>
`;
