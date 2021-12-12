//language=hbs
export const sidebarTmpl = `
    <div class="chat__sidebar">
        <div class="chat__sidebar-row">
            <div class="chat__sidebar-cabinet">
                <div>{{{ profileAvatar }}}</div>
                {{{ profileButton }}}
            </div>
        </div>
        <div class="chat__sidebar-row chat__sidebar-search">
            <input type="text" class="search" placeholder="Поиск">
        </div>
        <div class="chat__sidebar-messages chat__sidebar-row">
            {{{ messages }}}
        </div>
    </div>
`;
