const menuItems = [
    { name: 'Головна', link: 'index.html' },
    { 
      name: 'Каталог товарів', 
      link: 'catalog.html',
      subMenu: [
        { name: 'Шафи', link: 'catalog.html#wardrobes' },
        { name: 'Ліжка', link: 'catalog.html#beds' },
        { name: 'Дивани та крісла', link: 'catalog.html#sofas' },
        { name: 'Столи', link: 'catalog.html#tables' },
        { name: 'Комоди і тумби', link: 'catalog.html#dressers' },
        { name: 'Кухні', link: 'catalog.html#kitchens' },
        { name: 'Офісні меблі', link: 'catalog.html#office-furniture' }
      ]
    },
    { name: 'Про нас', link: 'about.html' },
    { name: 'Кошик', link: 'basket.html' },
    { name: 'Контакти', link: 'contacts.html' }
  ];
  
  function generateMenu(menuData, container) {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    menuData.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        //Встановлює текст і посилання для елемента a
        a.textContent = item.name;
        a.href = item.link;
        li.appendChild(a);

        // Якщо є підменю
        if (item.subMenu && item.subMenu.length > 0) {
            const subUl = document.createElement('ul');

            item.subMenu.forEach(subItem => {
                const subLi = document.createElement('li');
                const subA = document.createElement('a');

                //Встановлює текст і посилання для елемента subA
                subA.textContent = subItem.name;
                subA.href = subItem.link;

                subLi.appendChild(subA);
                subUl.appendChild(subLi);
            });

            li.appendChild(subUl);
        }

        ul.appendChild(li);
    });

    nav.appendChild(ul);
    container.appendChild(nav);
}

// Інфціалізація меню
document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.querySelector('.navigation');
    generateMenu(menuItems, menuContainer);
});
