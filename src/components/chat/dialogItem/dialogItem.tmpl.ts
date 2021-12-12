import checkedIcon from "../../../../static/icons/checked.svg";
import unCheckedIcon from "../../../../static/icons/un-checked.svg";

//language=hbs
export const dialogItem = `
  <button class="dialog-item">
      <div class="dialog-item__avatar">
          {{{ dialogItemAvatar }}}
      </div>
      <div class="dialog-item__info">
          <div class="dialog-item__info-row">
              <span class="dialog-item__name">{{ author }}</span>
              <time class="dialog-item__time">{{ time }}</time>
          </div>
          <div class="dialog-item__info-row">
              <span class="dialog-item__message">{{ message }}</span>
              <span class="dialog-item__check">
                  {{#if checked}}
                      <img src='${checkedIcon}' alt="">
                    {{else}}
                      <img src='${unCheckedIcon}' alt="">
                  {{/if}}
              </span>
          </div>
      </div>
  </button>
`;
