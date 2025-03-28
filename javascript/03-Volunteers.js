document.addEventListener('DOMContentLoaded', () => {
    const botoesSaibaMais = document.querySelectorAll('.btn-saiba-mais');
    const modalDetalhes = document.querySelector('.modal-detalhes-profissionais');
    const botaoFechar = modalDetalhes.querySelector('.modal-fechar');

    const profissionais = [
        {
            nome: 'Dra. Maria Silva',
            especialidade: 'Psicóloga Clínica',
            avatar: 'Assets/Img/Volunteers/Psicóloga_ Dra.Maria Silva.jpg',
            areasEspecializacao: 'Terapia Cognitivo-Comportamental, Transtornos Psicológicos, Gestão de Estresse',
            abordagemTerapeutica: 'Trabalho com técnicas personalizadas focadas na compreensão individual e desenvolvimento de estratégias de enfrentamento.',
            experiencia: 'Mais de 10 anos de experiência em clínica particular, atendendo pacientes com diversos perfis e necessidades psicológicas.'
        },
        {
            nome: 'Dr. João Santos',
            especialidade: 'Psiquiatra',
            avatar: 'Assets/Img/Volunteers/Psiquiatra_Dr.JoãoSantos.jpg',
            areasEspecializacao: 'Saúde Mental Adulto e Adolescente, Transtornos do Humor, Tratamento Farmacológico',
            abordagemTerapeutica: 'Combino tratamento medicamentoso com acompanhamento psicológico integrado, buscando o bem-estar integral do paciente.',
            experiencia: 'Especialista em diagnóstico e tratamento de condições psiquiátricas complexas, com foco em personalização do tratamento.'
        },
        {
            nome: 'Dra. Ana Oliveira',
            especialidade: 'Terapeuta',
            avatar: 'Assets/Img/Volunteers/Terapeuta_Dra.AnaOliveira.jpg',
            areasEspecializacao: 'Terapia Familiar, Relações Interpessoais, Mediação de Conflitos',
            abordagemTerapeutica: 'Foco em dinâmicas familiares, comunicação assertiva e resolução de conflitos internos e externos.',
            experiencia: 'Ampla experiência em terapia familiar e individual, com ênfase em reconstrução de vínculos e estratégias de comunicação.'
        }
    ];

    botoesSaibaMais.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            const profissional = profissionais[index];
            
            modalDetalhes.querySelector('.nome-profissional').textContent = profissional.nome;
            modalDetalhes.querySelector('.especialidade-profissional').textContent = profissional.especialidade;
            modalDetalhes.querySelector('.profissional-avatar').src = profissional.avatar;
            modalDetalhes.querySelector('.areas-especializacao').textContent = profissional.areasEspecializacao;
            modalDetalhes.querySelector('.abordagem-terapeutica').textContent = profissional.abordagemTerapeutica;
            modalDetalhes.querySelector('.experiencia-profissional').textContent = profissional.experiencia;

            modalDetalhes.style.display = 'block';
        });
    });

    botaoFechar.addEventListener('click', () => {
        modalDetalhes.style.display = 'none';
    });

    // Fechar modal ao clicar fora
    modalDetalhes.addEventListener('click', (event) => {
        if (event.target === modalDetalhes) {
            modalDetalhes.style.display = 'none';
        }
    });
});