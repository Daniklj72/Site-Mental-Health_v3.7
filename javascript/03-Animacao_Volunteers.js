document.addEventListener('DOMContentLoaded', function()
{
    let animacaoEmProgresso = false; // Variável para controlar o estado da animação
    
    function carregarProfissionais()// Função para carregar os profissionais
    {
        const gradeProfissionais = document.getElementById('grade-profissionais');
        const templates = document.querySelectorAll('.template-profissional');
        
        gradeProfissionais.innerHTML = '';// Limpa o conteúdo atual da grade antes de adicionar novos cartões
        
        templates.forEach((template, index) =>
        {
            // Cria um novo cartão baseado no template
            const novoCartao = document.createElement('div');
            novoCartao.className = 'cartao-profissional';
            novoCartao.innerHTML = template.innerHTML;
            
            // Carrega a imagem
            const imagem = novoCartao.querySelector('[data-src]');

            if (imagem)
            {
                imagem.src = imagem.getAttribute('data-src');
                imagem.removeAttribute('data-src');
                imagem.className = 'imagem-profissional';
            }
            gradeProfissionais.appendChild(novoCartao);// Adiciona o cartão à grade
        });
    }
    
    function animarCartoes()// Função para animar os cartões
    {
        // Se já estiver animando, não faz nada
        if (animacaoEmProgresso)
        {
            return;
        }
        
        // Define que uma animação está em andamento
        animacaoEmProgresso = true;
        
        const cartoes = document.querySelectorAll('.cartao-profissional');
        
        // Remove a classe de animação de todos os cartões
        cartoes.forEach(cartao =>
        {
            cartao.classList.remove('animar');

            // Força reflow para garantir que a remoção da classe seja processada
            void cartao.offsetWidth;
        });
        
        // Adiciona a classe de animação com atraso escalonado
        cartoes.forEach((cartao, index) =>
        {
            setTimeout(() =>
                {
                cartao.classList.add('animar');
                
                // Quando o último cartão for animado, libera o controle
                if (index === cartoes.length - 1)
                {
                    setTimeout(() =>
                    {
                        animacaoEmProgresso = false;
                    }, 300); // Reduzido para 300ms após a última animação
                }
            }, index * 120); // Reduzido para 120ms entre cada cartão
        });
    }
    
    carregarProfissionais();// Inicializa a carga dos profissionais
    
    // Flag para controle se a animação já foi acionada por clique
    let animacaoAcionadaPorClique = false;
    
    // Função para preparar a animação quando o usuário clicar no link de navegação
    function prepararAnimacaoPorClique(targetId)
    {
        if (targetId === '#voluntarios')
            {
            animacaoAcionadaPorClique = true;
            
            // Reseta a flag após 1 segundo para permitir animações futuras
            setTimeout(() =>
            {
                animacaoAcionadaPorClique = false;
            }, 1000);
            
            // Pré-remove as classes de animação para garantir que a nova animação funcione
            const cartoes = document.querySelectorAll('.cartao-profissional');
            cartoes.forEach(cartao =>
            {
                cartao.classList.remove('animar');
            });
            
            // Executa a animação imediatamente, com um pequeno atraso apenas para garantir 
            // que o scroll já começou (mas não espera que ele termine)
            setTimeout(() =>
            {
                animarCartoes();
            }   , 100);
        }
    }
    
    // Configura o Intersection Observer para detectar quando a seção está visível
    const secaoProfissionais = document.getElementById('voluntarios');
    
    const observerOptions =
    {
        root: null, // viewport é usado como área de referência
        rootMargin: '0px', // sem margem adicional
        threshold: 0.2 // Reduzido para 20% da seção visível
    };
    
    const observer = new IntersectionObserver((entries) =>
        {
        entries.forEach(entry =>
        {
            if (entry.isIntersecting)
             {
                // Se a animação não foi acionada por clique recente, executa
                if (!animacaoAcionadaPorClique)
                {
                    animarCartoes();
                }
            }
        });
    }, observerOptions);
    
    // Observa a seção de profissionais/voluntários
    if (secaoProfissionais)
    {
        observer.observe(secaoProfissionais);
    }
    
    // Funcionalidade de navegação suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor =>
    {
        anchor.addEventListener('click', function (e)
        {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement)
            {
                // Prepara a animação antes de iniciar o scroll
                prepararAnimacaoPorClique(targetId);
                
                window.scrollTo(
                {
                    top: targetElement.offsetTop - 80, // Ajuste para a altura do cabeçalho fixo
                    behavior: 'smooth'
                });
                
                // Atualiza a classe ativa no menu
                document.querySelectorAll('.nav-link').forEach(link =>
                {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Efeito de rolagem para o cabeçalho
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () =>
    {
        if (window.scrollY > 50)
        {
            navbar.classList.add('rolada');
        }
        else
        {
            navbar.classList.remove('rolada');
        }
    });
    
    // Funcionalidade de menu móvel
    const navbarToggler = document.getElementById('navbarToggler');
    const navbarNav = document.getElementById('navbarNav');
    
    if (navbarToggler)
    {
        navbarToggler.addEventListener('click', () =>
        {
            navbarNav.classList.toggle('show');
        });
    }
});