//language=hbs
export const dialogTmpl = `
    <div class="chat__column">
        {{#if isEmpty}}
            <span class="chat__content--empty">Выберите чат для отправки сообщения</span>
        {{else}}
        <div class="chat__header">
            <span class="chat__header-name">{{ title }}</span>
            <span class="chat__header-more">
                {{{ buttonMore }}}
                {{{ actionMore }}}
            </span>
        </div>
        <div class="chat__messages">
            {{{ messages }}}
        </div>
        <form class="chat__input" method="post" onsubmit="return false">
            <span class="chat__input-clip">
                {{{ buttonClip }}}
                {{{ actionClip }}}
            </span>
            {{{ inputMessage }}}
            {{{ buttonSend }}}
        </form>
        {{/if}}
    </div>
`;
