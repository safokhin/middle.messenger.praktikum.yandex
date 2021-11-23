//language=hbs
export default `
  <div class="page-container">
      <div class="profile white-container">
          <div class="profile__header">
              {{> button buttonBack }}
          </div>
          <div class="profile__content">
              <div class="profile__row">
                  <div class="profile__box">
                      {{>avatar avatarUser }}
                      <span class="profile__name">Сафохин Артем Анатольевич</span>
                      <div class="profile__box-line"></div>
                  </div>

                  <div class="profile__box profile__info">
                      {{#each infoPersons}}
                          <div class="popup__row">{{> textField}}</div>
                      {{/each}}
                  </div>
              </div>
                <div class="profile__row-buttons">
                    {{#each buttonsProfile}}
                        {{> button}}
                    {{/each}}
                </div>
          </div>
      </div>
  </div>
`;
