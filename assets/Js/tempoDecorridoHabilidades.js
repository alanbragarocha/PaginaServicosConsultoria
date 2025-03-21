// Função para atualizar dinamicamente o tempo decorrido das habilidades ou experiências
function updateMonths() {
    // Obter a data atual
    const today = new Date();
    
    // Selecionar todos os elementos com a classe '.tempo-habilidades'
    const elements = document.querySelectorAll('.tempo-habilidades');
    
    // Iterar sobre cada elemento
    elements.forEach(element => {
        // Verificar se o elemento tem o atributo necessário
        if (!element.hasAttribute('data-start-date')) {
            console.warn('Elemento com classe tempo-habilidades não possui atributo data-start-date');
            return;
        }
        
        // Obter a data de início da habilidade ou experiência do atributo 'data-start-date'
        const startDateStr = element.getAttribute('data-start-date');
        const startDate = new Date(startDateStr);
        
        // Verificar se a data é válida
        if (isNaN(startDate.getTime())) {
            console.warn(`Data de início inválida: ${startDateStr}`);
            return;
        }
        
        // Calcular diferença em meses de forma mais precisa
        const years = today.getFullYear() - startDate.getFullYear();
        let months = today.getMonth() - startDate.getMonth();
        
        if (today.getDate() < startDate.getDate()) {
            months--;
        }
        
        const totalMonths = (years * 12) + months;
        
        // Verificar se a diferença é de pelo menos 1 ano
        if (totalMonths >= 12) {
            // Se for, calcular e exibir o tempo em anos
            const years = Math.floor(totalMonths / 12);
            element.textContent = `${years} Ano${years !== 1 ? 's' : ''}`;
        } else {
            // Caso contrário, exibir o tempo em meses
            element.textContent = `${totalMonths} Mês${totalMonths !== 1 ? 'es' : ''}`;
        }
    });
}

// Esperar que o DOM esteja completamente carregado antes de executar
document.addEventListener('DOMContentLoaded', function() {
    // Chamar a função inicialmente para exibir o tempo decorrido
    updateMonths();
    
    // Atualizar a cada hora (não há necessidade de atualizar a cada segundo)
    // 3600000 = 1 hora em milissegundos
    setInterval(updateMonths, 3600000);
});