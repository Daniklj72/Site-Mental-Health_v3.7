// Função para inicializar a funcionalidade do FAQ
document.addEventListener('DOMContentLoaded', function()
{
    // Referências aos elementos
    const searchInput = document.getElementById('faqSearchInput');
    const expandAllBtn = document.getElementById('expandAllBtn');
    const collapseAllBtn = document.getElementById('collapseAllBtn');
    const categoryBtns = document.querySelectorAll('.faq-category-btn');
    const accordionItems = document.querySelectorAll('.block_inside-item');
    
    // Funcionalidade de pesquisa
    if (searchInput)
    {
        searchInput.addEventListener('input', function()
        {
            const searchTerm = this.value.toLowerCase();
            
            accordionItems.forEach(item =>
            {
                const question = item.querySelector('.block_inside-button').textContent.toLowerCase();
                const answer = item.querySelector('.block_inside-body, .accordion-body').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm))
                {
                    item.style.display = '';
                }
                else
                {
                    item.style.display = 'none';
                }
            });
        });
    }
    
    // Funcionalidade de filtro por categoria
    if (categoryBtns.length > 0)
    {
        categoryBtns.forEach(btn =>
        {
            btn.addEventListener('click', function()
            {
                // Remove a classe active de todos os botões
                categoryBtns.forEach(b => b.classList.remove('active'));
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
                
                const category = this.dataset.category;
                
                // Filtra os itens
                accordionItems.forEach(item =>
                {
                    if (category === 'all' || item.dataset.category === category)
                    {
                        item.style.display = '';
                    } 
                    else
                    {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Funcionalidade de expandir todos
    if (expandAllBtn)
    {
        expandAllBtn.addEventListener('click', function()
        {
            const collapseElements = document.querySelectorAll('.block_inside-collapse');
            const buttons = document.querySelectorAll('.block_inside-button');
            
            collapseElements.forEach(el =>
            {
                el.classList.add('show');
            });
            
            buttons.forEach(btn =>
            {
                btn.classList.remove('collapsed');
                btn.setAttribute('aria-expanded', 'true');
            });
        });
    }
    
    // Funcionalidade de recolher todos
    if (collapseAllBtn)
    {
        collapseAllBtn.addEventListener('click', function()
        {
            const collapseElements = document.querySelectorAll('.block_inside-collapse');
            const buttons = document.querySelectorAll('.block_inside-button');
            
            collapseElements.forEach(el =>
            {
                // Remova a condição para que todos os itens sejam fechados
                el.classList.remove('show');
            });
            
            buttons.forEach(btn =>
            {
                // Remova a condição para que todos os botões sejam marcados como collapsed
                btn.classList.add('collapsed');
                btn.setAttribute('aria-expanded', 'false');
            });
        });
    }
});