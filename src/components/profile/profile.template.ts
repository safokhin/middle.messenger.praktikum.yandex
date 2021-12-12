//language=hbs
export const profileTmpl = `
  <div class="page-container">
      <div class="profile white-container">
          <div class="profile__header">
              {{{ buttonBack }}}
          </div>
          <div class="profile__content">
              <div class="profile__row">
                  <div class="profile__box">
                      {{{ avatarUser }}}
                      <span class="profile__name">Сафохин Артем Анатольевич</span>
                      <div class="profile__box-line"></div>
                  </div>

                  <div class="profile__box profile__info">
                      {{{ infoPersons }}}
                  </div>
              </div>
                <div class="profile__row-buttons">
                    {{{ buttonsProfile }}}
                </div>
          </div>
      </div>
  </div>
`;
