// ===== Data Simulation =====
const mockData = {
    voz: {
        chamadasAtendidas: 847,
        chamadasAbandonadas: 23,
        filaEspera: 8,
        emAtendimento: 15,
        maiorAtendimento: "00:23:45",
        agenteMaiorAtendimento: "Maria Silva",
        csat: 94
    },
    chat: {
        clientesFila: 12,
        maiorTempoEspera: "00:08:32",
        mediaMaxEspera: "00:05:18",
        tempoMedioEspera: "00:02:45",
        emAtendimento: 28,
        maiorAtendimento: "00:45:12",
        agenteMaiorAtendimento: "Carlos Oliveira",
        clienteMaisTempo: "00:52:30",
        csat: 89
    },
    agentes: {
        online: 24,
        disponiveis: 18,
        emPausa: 8
    },
    backlog: {
        total: 47,
        voz: 19,
        chat: 28
    },
    csatGlobal: 92
};

// Fila de atendimento fictícia
const filaAtendimento = [
    { cliente: "João Pereira", canal: "voz", motivo: "Suporte Técnico", tempoEspera: "00:02:15", prioridade: "alta", status: "aguardando" },
    { cliente: "Ana Costa", canal: "chat", motivo: "Dúvida sobre Fatura", tempoEspera: "00:05:32", prioridade: "media", status: "aguardando" },
    { cliente: "Pedro Santos", canal: "chat", motivo: "Cancelamento", tempoEspera: "00:08:32", prioridade: "alta", status: "aguardando" },
    { cliente: "Mariana Lima", canal: "voz", motivo: "Segunda Via", tempoEspera: "00:01:45", prioridade: "baixa", status: "em-atendimento" },
    { cliente: "Roberto Alves", canal: "chat", motivo: "Promoções", tempoEspera: "00:03:20", prioridade: "baixa", status: "aguardando" },
    { cliente: "Carla Mendes", canal: "voz", motivo: "Reclamação", tempoEspera: "00:04:10", prioridade: "alta", status: "em-atendimento" },
    { cliente: "Fernando Dias", canal: "chat", motivo: "Suporte Técnico", tempoEspera: "00:06:45", prioridade: "media", status: "aguardando" },
    { cliente: "Juliana Rocha", canal: "chat", motivo: "Alteração Cadastral", tempoEspera: "00:02:58", prioridade: "baixa", status: "aguardando" }
];

// Lista de agentes com status
const listaAgentes = [
    { nome: "Maria Silva", status: "ocupado", motivoPausa: "-", tempoStatus: "00:23:45", atendimentosHoje: 32, canal: "voz" },
    { nome: "Carlos Oliveira", status: "ocupado", motivoPausa: "-", tempoStatus: "00:45:12", atendimentosHoje: 28, canal: "chat" },
    { nome: "Ana Paula Santos", status: "pausa", motivoPausa: "Almoço", tempoStatus: "00:35:10", atendimentosHoje: 25, canal: "chat" },
    { nome: "Roberto Fernandes", status: "disponivel", motivoPausa: "-", tempoStatus: "00:02:30", atendimentosHoje: 30, canal: "voz" },
    { nome: "Juliana Costa", status: "pausa", motivoPausa: "Banheiro", tempoStatus: "00:05:22", atendimentosHoje: 27, canal: "chat" },
    { nome: "Pedro Henrique", status: "ocupado", motivoPausa: "-", tempoStatus: "00:12:18", atendimentosHoje: 35, canal: "voz" },
    { nome: "Fernanda Lima", status: "disponivel", motivoPausa: "-", tempoStatus: "00:01:45", atendimentosHoje: 22, canal: "chat" },
    { nome: "Lucas Martins", status: "pausa", motivoPausa: "Lanche", tempoStatus: "00:10:05", atendimentosHoje: 29, canal: "voz" },
    { nome: "Camila Rodrigues", status: "ocupado", motivoPausa: "-", tempoStatus: "00:08:33", atendimentosHoje: 31, canal: "chat" },
    { nome: "Thiago Almeida", status: "pausa", motivoPausa: "Feedback", tempoStatus: "00:15:40", atendimentosHoje: 26, canal: "voz" },
    { nome: "Beatriz Souza", status: "disponivel", motivoPausa: "-", tempoStatus: "00:00:55", atendimentosHoje: 33, canal: "chat" },
    { nome: "Rafael Gomes", status: "ocupado", motivoPausa: "-", tempoStatus: "00:18:22", atendimentosHoje: 24, canal: "voz" },
    { nome: "Amanda Pereira", status: "pausa", motivoPausa: "Treinamento", tempoStatus: "00:45:00", atendimentosHoje: 18, canal: "chat" },
    { nome: "Diego Nascimento", status: "disponivel", motivoPausa: "-", tempoStatus: "00:03:12", atendimentosHoje: 28, canal: "voz" },
    { nome: "Patrícia Moura", status: "ocupado", motivoPausa: "-", tempoStatus: "00:05:48", atendimentosHoje: 34, canal: "chat" }
];

// Lista de aderência dos agentes (dados básicos)
const aderenciaAgentes = [
    { nome: "Maria Silva", aderencia: 95, login: "07:58", tempoLogado: "08:15:00", tempoPausa: "00:45:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Carlos Oliveira", aderencia: 92, login: "08:02", tempoLogado: "08:10:00", tempoPausa: "00:52:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Ana Paula Santos", aderencia: 88, login: "08:05", tempoLogado: "08:05:00", tempoPausa: "00:58:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Roberto Fernandes", aderencia: 78, login: "08:18", tempoLogado: "07:52:00", tempoPausa: "01:15:00", pausaPermitida: "01:00:00", status: "atencao" },
    { nome: "Juliana Costa", aderencia: 94, login: "07:55", tempoLogado: "08:18:00", tempoPausa: "00:42:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Pedro Henrique", aderencia: 91, login: "08:00", tempoLogado: "08:12:00", tempoPausa: "00:48:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Fernanda Lima", aderencia: 65, login: "08:35", tempoLogado: "07:25:00", tempoPausa: "01:35:00", pausaPermitida: "01:00:00", status: "critico" },
    { nome: "Lucas Martins", aderencia: 89, login: "08:03", tempoLogado: "08:08:00", tempoPausa: "00:55:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Camila Rodrigues", aderencia: 96, login: "07:52", tempoLogado: "08:22:00", tempoPausa: "00:38:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Thiago Almeida", aderencia: 72, login: "08:25", tempoLogado: "07:45:00", tempoPausa: "01:25:00", pausaPermitida: "01:00:00", status: "atencao" },
    { nome: "Beatriz Souza", aderencia: 97, login: "07:50", tempoLogado: "08:25:00", tempoPausa: "00:35:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Rafael Gomes", aderencia: 85, login: "08:10", tempoLogado: "08:00:00", tempoPausa: "01:05:00", pausaPermitida: "01:00:00", status: "atencao" },
    { nome: "Amanda Pereira", aderencia: 58, login: "08:45", tempoLogado: "07:15:00", tempoPausa: "01:45:00", pausaPermitida: "01:00:00", status: "critico" },
    { nome: "Diego Nascimento", aderencia: 93, login: "07:58", tempoLogado: "08:15:00", tempoPausa: "00:47:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Patrícia Moura", aderencia: 90, login: "08:00", tempoLogado: "08:12:00", tempoPausa: "00:50:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Marcos Vieira", aderencia: 75, login: "08:20", tempoLogado: "07:50:00", tempoPausa: "01:18:00", pausaPermitida: "01:00:00", status: "atencao" },
    { nome: "Larissa Mendes", aderencia: 98, login: "07:48", tempoLogado: "08:28:00", tempoPausa: "00:32:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Bruno Costa", aderencia: 62, login: "08:40", tempoLogado: "07:20:00", tempoPausa: "01:40:00", pausaPermitida: "01:00:00", status: "critico" },
    { nome: "Carla Dias", aderencia: 87, login: "08:05", tempoLogado: "08:05:00", tempoPausa: "00:58:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Eduardo Lima", aderencia: 94, login: "07:55", tempoLogado: "08:18:00", tempoPausa: "00:43:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Gabriela Santos", aderencia: 69, login: "08:30", tempoLogado: "07:35:00", tempoPausa: "01:30:00", pausaPermitida: "01:00:00", status: "critico" },
    { nome: "Henrique Rocha", aderencia: 91, login: "08:00", tempoLogado: "08:12:00", tempoPausa: "00:49:00", pausaPermitida: "01:00:00", status: "conforme" },
    { nome: "Isabela Ferreira", aderencia: 83, login: "08:12", tempoLogado: "07:58:00", tempoPausa: "01:08:00", pausaPermitida: "01:00:00", status: "atencao" },
    { nome: "João Pedro Alves", aderencia: 96, login: "07:52", tempoLogado: "08:22:00", tempoPausa: "00:38:00", pausaPermitida: "01:00:00", status: "conforme" }
];

// Função auxiliar para formatar minutos em HH:MM
function formatarHoraMinuto(minutos) {
    const h = Math.floor(minutos / 60);
    const m = Math.round(minutos % 60);
    return String(h).padStart(2, '0') + ':' + String(m).padStart(2, '0');
}

// Gera dados detalhados de aderência por atividade para um agente
function gerarDadosAderenciaAgente(agente) {
    const baseAderencia = agente.aderencia;
    const fator = baseAderencia / 100;
    
    return [
        { 
            atividade: "Atendimento", 
            horaEscalada: "05:40", 
            horaReal: formatarHoraMinuto(340 * (0.95 + Math.random() * 0.1)), 
            minAderencia: Math.round(327 * fator), 
            minForaAderencia: Math.round(13 + (100 - baseAderencia) * 0.5), 
            percAderencia: (baseAderencia - 2 + Math.random() * 4).toFixed(2), 
            minConformidade: Math.round((Math.random() - 0.5) * 10), 
            percConformidade: (baseAderencia + Math.random() * 5).toFixed(2), 
            percTotal: 89.47, 
            percTotalReal: (85 + Math.random() * 8).toFixed(2)
        },
        { 
            atividade: "Descanso", 
            horaEscalada: "00:20", 
            horaReal: formatarHoraMinuto(19 + Math.round(Math.random() * 4)), 
            minAderencia: Math.round(19 * fator), 
            minForaAderencia: Math.round(1 + Math.random() * 3), 
            percAderencia: (90 + Math.random() * 10).toFixed(2), 
            minConformidade: Math.round((Math.random() - 0.5) * 4), 
            percConformidade: (90 + Math.random() * 10).toFixed(2), 
            percTotal: 5.26, 
            percTotalReal: (4 + Math.random() * 2).toFixed(2)
        },
        { 
            atividade: "Deslogado", 
            horaEscalada: "00:00", 
            horaReal: formatarHoraMinuto(Math.round(Math.random() * 10)), 
            minAderencia: 0, 
            minForaAderencia: Math.round(Math.random() * 8), 
            percAderencia: 0.00, 
            minConformidade: Math.round(Math.random() * 8), 
            percConformidade: 0.00, 
            percTotal: 0.00, 
            percTotalReal: (Math.random() * 2).toFixed(2)
        },
        { 
            atividade: "Pausa 1", 
            horaEscalada: "00:10", 
            horaReal: formatarHoraMinuto(10 + Math.round((Math.random() - 0.5) * 4)), 
            minAderencia: Math.round(10 * fator), 
            minForaAderencia: Math.round((1 - fator) * 5), 
            percAderencia: (baseAderencia - 5 + Math.random() * 15).toFixed(2), 
            minConformidade: Math.round((Math.random() - 0.5) * 4), 
            percConformidade: (baseAderencia + Math.random() * 10).toFixed(2), 
            percTotal: 2.63, 
            percTotalReal: (2 + Math.random() * 1.5).toFixed(2)
        },
        { 
            atividade: "Pausa 2", 
            horaEscalada: "00:10", 
            horaReal: formatarHoraMinuto(9 + Math.round((Math.random() - 0.5) * 4)), 
            minAderencia: Math.round(9 * fator), 
            minForaAderencia: Math.round((1 - fator) * 8), 
            percAderencia: (baseAderencia - 10 + Math.random() * 20).toFixed(2), 
            minConformidade: Math.round((Math.random() - 0.5) * 4), 
            percConformidade: (baseAderencia - 5 + Math.random() * 10).toFixed(2), 
            percTotal: 2.63, 
            percTotalReal: (2 + Math.random() * 1).toFixed(2)
        },
        { 
            atividade: "Total", 
            horaEscalada: "06:20", 
            horaReal: formatarHoraMinuto(380 + Math.round((Math.random() - 0.5) * 20)), 
            minAderencia: Math.round(358 * fator), 
            minForaAderencia: Math.round(27 + (100 - baseAderencia) * 0.8), 
            percAderencia: baseAderencia.toFixed(2), 
            minConformidade: Math.round((Math.random() - 0.5) * 10), 
            percConformidade: null, 
            percTotal: null, 
            percTotalReal: null,
            isTotal: true
        }
    ];
}

// ===== Initialize Dashboard =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard iniciando...');
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    updateDashboardValues();
    renderAgentesTable();
    renderAderenciaTable();
    initCharts();
    
    // Simulate real-time updates
    setInterval(simulateRealTimeUpdates, 5000);
    
    console.log('Dashboard carregado com sucesso!');
});

// ===== Toggle Sidebar =====
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    const toggleBtn = document.querySelector('.sidebar-toggle');
    
    sidebar.classList.toggle('collapsed');
    body.classList.toggle('sidebar-collapsed');
    
    // Rotacionar ícone
    const icon = toggleBtn.querySelector('i');
    if (sidebar.classList.contains('collapsed')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
    
    // Salvar estado no localStorage
    localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
}

// Restaurar estado da sidebar ao carregar
document.addEventListener('DOMContentLoaded', function() {
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed) {
        document.querySelector('.sidebar').classList.add('collapsed');
        document.body.classList.add('sidebar-collapsed');
        const icon = document.querySelector('.sidebar-toggle i');
        if (icon) icon.style.transform = 'rotate(180deg)';
    }
});

// ===== Update Date/Time =====
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('currentDateTime').textContent = now.toLocaleDateString('pt-BR', options);
    document.getElementById('lastUpdate').textContent = now.toLocaleTimeString('pt-BR');
}

// ===== Update Dashboard Values =====
function updateDashboardValues() {
    // Voz
    document.getElementById('chamadasAtendidas').textContent = mockData.voz.chamadasAtendidas;
    document.getElementById('chamadasAbandonadas').textContent = mockData.voz.chamadasAbandonadas;
    document.getElementById('filaVoz').textContent = mockData.voz.filaEspera;
    document.getElementById('emAtendimentoVoz').textContent = mockData.voz.emAtendimento;
    document.getElementById('maiorAtendimentoVoz').textContent = mockData.voz.maiorAtendimento;
    document.getElementById('csatVoz').textContent = mockData.voz.csat + '%';
    
    // Chat
    document.getElementById('clientesFila').textContent = mockData.chat.clientesFila;
    document.getElementById('maiorTempoEspera').textContent = mockData.chat.maiorTempoEspera;
    document.getElementById('mediaMaxEspera').textContent = mockData.chat.mediaMaxEspera;
    document.getElementById('tempoMedioEspera').textContent = mockData.chat.tempoMedioEspera;
    document.getElementById('emAtendimentoChat').textContent = mockData.chat.emAtendimento;
    document.getElementById('maiorAtendimentoChat').textContent = mockData.chat.maiorAtendimento;
    document.getElementById('csatChat').textContent = mockData.chat.csat + '%';
    
    // Agentes
    document.getElementById('agentesOnline').textContent = mockData.agentes.online;
    document.getElementById('agentesDisponiveis').textContent = mockData.agentes.disponiveis;
    document.getElementById('agentesEmPausa').textContent = mockData.agentes.emPausa;
    document.getElementById('totalPausa').textContent = mockData.agentes.emPausa + ' agentes';
    
    // CSAT Global
    document.getElementById('csatGlobal').textContent = mockData.csatGlobal + '%';
    
    // Backlog
    document.getElementById('backlogTotal').textContent = mockData.backlog.total;
}

// ===== Render Queue Table =====
function renderFilaTable(filter) {
    if (!filter) filter = 'all';
    const tbody = document.getElementById('filaTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const filteredFila = filter === 'all' 
        ? filaAtendimento 
        : filaAtendimento.filter(item => item.canal === filter);
    
    filteredFila.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${item.cliente}</strong></td>
            <td>
                <span class="channel-badge ${item.canal}">
                    <i class="fas fa-${item.canal === 'voz' ? 'phone-alt' : 'comment'}"></i>
                    ${item.canal.charAt(0).toUpperCase() + item.canal.slice(1)}
                </span>
            </td>
            <td>${item.motivo}</td>
            <td style="font-family: 'Courier New', monospace; color: #818cf8;">${item.tempoEspera}</td>
            <td><span class="priority-badge ${item.prioridade}">${item.prioridade.charAt(0).toUpperCase() + item.prioridade.slice(1)}</span></td>
            <td>
                <span class="status-badge ${item.status}">
                    <i class="fas fa-circle"></i>
                    ${item.status === 'aguardando' ? 'Aguardando' : 'Em Atendimento'}
                </span>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// ===== Render Agentes Table =====
function renderAgentesTable(filter) {
    if (!filter) filter = 'all';
    const tbody = document.getElementById('agentesTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const filteredAgentes = filter === 'all' 
        ? listaAgentes 
        : listaAgentes.filter(item => item.status === filter);
    
    filteredAgentes.forEach(item => {
        const row = document.createElement('tr');
        const statusText = item.status === 'disponivel' ? 'Disponível' : item.status === 'ocupado' ? 'Ocupado' : 'Em Pausa';
        const statusClass = item.status === 'disponivel' ? 'disponivel' : item.status === 'ocupado' ? 'ocupado' : 'pausa';
        
        row.innerHTML = `
            <td><strong>${item.nome}</strong></td>
            <td>
                <span class="status-badge ${statusClass}">
                    <i class="fas fa-circle"></i>
                    ${statusText}
                </span>
            </td>
            <td>${item.motivoPausa}</td>
            <td style="font-family: 'Courier New', monospace; color: #818cf8;">${item.tempoStatus}</td>
            <td style="text-align: center; font-weight: 600;">${item.atendimentosHoje}</td>
            <td>
                <span class="channel-badge ${item.canal}">
                    <i class="fas fa-${item.canal === 'voz' ? 'phone-alt' : 'comment'}"></i>
                    ${item.canal.charAt(0).toUpperCase() + item.canal.slice(1)}
                </span>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// ===== Render Aderência Table =====
function renderAderenciaTable(statusFilter, agenteFilter, periodoFilter) {
    if (!statusFilter) statusFilter = document.getElementById('aderenciaFilter')?.value || 'all';
    if (!agenteFilter) agenteFilter = document.getElementById('aderenciaAgenteFilter')?.value || 'all';
    if (!periodoFilter) periodoFilter = document.getElementById('aderenciaPeriodoTabela')?.value || 'dia';
    
    const tbody = document.getElementById('aderenciaTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    let filteredAderencia = aderenciaAgentes;
    
    // Filtrar por status
    if (statusFilter !== 'all') {
        filteredAderencia = filteredAderencia.filter(item => item.status === statusFilter);
    }
    
    // Filtrar por agente
    if (agenteFilter !== 'all') {
        filteredAderencia = filteredAderencia.filter(item => item.nome === agenteFilter);
    }
    
    // Obter data atual para exibição
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString('pt-BR');
    
    filteredAderencia.forEach(agente => {
        // Gerar dados de aderência detalhados para o agente
        const dadosAtividades = gerarDadosAderenciaAgente(agente);
        
        // Linha de cabeçalho do agente (com data)
        const headerRow = document.createElement('tr');
        headerRow.className = 'agente-header-row';
        headerRow.innerHTML = `
            <td colspan="10" style="background: rgba(99, 102, 241, 0.15); font-weight: 600; color: var(--primary); padding: 12px;">
                <i class="fas fa-user" style="margin-right: 8px;"></i>
                ${agente.nome.toUpperCase()} - ${dataFormatada}
            </td>
        `;
        tbody.appendChild(headerRow);
        
        // Linhas de cada atividade
        dadosAtividades.forEach(ativ => {
            const row = document.createElement('tr');
            row.className = ativ.isTotal ? 'atividade-total-row' : 'atividade-row';
            
            const percClass = parseFloat(ativ.percAderencia) >= 85 ? 'high' : parseFloat(ativ.percAderencia) >= 70 ? 'medium' : 'low';
            const conformidadePrefix = ativ.minConformidade > 0 ? '+' : '';
            
            row.innerHTML = `
                <td style="${ativ.isTotal ? 'font-weight: 700; background: rgba(99, 102, 241, 0.08);' : 'padding-left: 24px;'}">${ativ.atividade}</td>
                <td style="font-family: 'Courier New', monospace; text-align: center; ${ativ.isTotal ? 'font-weight: 700; background: rgba(99, 102, 241, 0.08);' : ''}">${ativ.horaEscalada}</td>
                <td style="font-family: 'Courier New', monospace; text-align: center; color: #818cf8; ${ativ.isTotal ? 'font-weight: 700; background: rgba(99, 102, 241, 0.08);' : ''}">${ativ.horaReal}</td>
                <td style="text-align: center; color: #4ade80; ${ativ.isTotal ? 'font-weight: 700; background: rgba(99, 102, 241, 0.08);' : ''}">${ativ.minAderencia}</td>
                <td style="text-align: center; color: #f87171; ${ativ.isTotal ? 'font-weight: 700; background: rgba(99, 102, 241, 0.08);' : ''}">${ativ.minForaAderencia}</td>
                <td style="text-align: center; ${ativ.isTotal ? 'font-weight: 700; background: rgba(99, 102, 241, 0.08);' : ''}"><span class="aderencia-percent ${percClass}">${ativ.percAderencia}%</span></td>
                <td style="text-align: center; font-family: 'Courier New', monospace; ${ativ.isTotal ? 'font-weight: 700; background: rgba(99, 102, 241, 0.08);' : ''} ${ativ.minConformidade < 0 ? 'color: #f87171;' : 'color: #4ade80;'}">${conformidadePrefix}${ativ.minConformidade}</td>
                <td style="text-align: center; ${ativ.isTotal ? 'font-weight: 700; background: rgba(99, 102, 241, 0.08);' : ''}">${ativ.percConformidade !== null ? ativ.percConformidade + '%' : '-'}</td>
                <td style="text-align: center; ${ativ.isTotal ? 'font-weight: 700; background: rgba(99, 102, 241, 0.08);' : ''}">${ativ.percTotal !== null ? ativ.percTotal + '%' : '-'}</td>
                <td style="text-align: center; ${ativ.isTotal ? 'font-weight: 700; background: rgba(99, 102, 241, 0.08);' : ''}">${ativ.percTotalReal !== null ? ativ.percTotalReal + '%' : '-'}</td>
            `;
            tbody.appendChild(row);
        });
        
        // Espaçamento entre agentes
        const spacerRow = document.createElement('tr');
        spacerRow.innerHTML = '<td colspan="10" style="height: 8px; background: transparent; border: none;"></td>';
        tbody.appendChild(spacerRow);
    });
}

// Popula o select de agentes
function populateAgenteSelect() {
    const select = document.getElementById('aderenciaAgenteFilter');
    if (!select) return;
    
    // Limpar opções exceto a primeira
    select.innerHTML = '<option value="all">Todos os Agentes</option>';
    
    // Adicionar cada agente
    aderenciaAgentes.forEach(agente => {
        const option = document.createElement('option');
        option.value = agente.nome;
        option.textContent = agente.nome;
        select.appendChild(option);
    });
}

// Filter event
document.addEventListener('DOMContentLoaded', function() {
    // Popular select de agentes
    populateAgenteSelect();
    
    const filterEl = document.getElementById('filaFilter');
    if (filterEl) {
        filterEl.addEventListener('change', function() {
            renderFilaTable(this.value);
        });
    }
    
    const agentesFilterEl = document.getElementById('agentesFilter');
    if (agentesFilterEl) {
        agentesFilterEl.addEventListener('change', function() {
            renderAgentesTable(this.value);
        });
    }
    
    // Filtros da tabela de aderência
    const aderenciaFilterEl = document.getElementById('aderenciaFilter');
    const aderenciaAgenteFilter = document.getElementById('aderenciaAgenteFilter');
    const aderenciaPeriodoTabela = document.getElementById('aderenciaPeriodoTabela');
    
    if (aderenciaFilterEl) {
        aderenciaFilterEl.addEventListener('change', function() {
            renderAderenciaTable();
        });
    }
    
    if (aderenciaAgenteFilter) {
        aderenciaAgenteFilter.addEventListener('change', function() {
            renderAderenciaTable();
        });
    }
    
    if (aderenciaPeriodoTabela) {
        aderenciaPeriodoTabela.addEventListener('change', function() {
            renderAderenciaTable();
        });
    }
    
    // Filtro de período personalizado
    const aderenciaPeriodo = document.getElementById('aderenciaPeriodo');
    if (aderenciaPeriodo) {
        aderenciaPeriodo.addEventListener('change', function() {
            const periodoCustom = document.getElementById('periodoCustom');
            if (this.value === 'personalizado') {
                periodoCustom.style.display = 'flex';
            } else {
                periodoCustom.style.display = 'none';
            }
        });
    }
});

// ===== Exportar Tabela de Aderência =====
function exportarTabelaAderencia() {
    const dataInicio = document.getElementById('tabelaDataInicio')?.value || new Date().toISOString().split('T')[0];
    const dataFim = document.getElementById('tabelaDataFim')?.value || new Date().toISOString().split('T')[0];
    const statusFilter = document.getElementById('aderenciaFilter')?.value || 'all';
    const agenteFilter = document.getElementById('aderenciaAgenteFilter')?.value || 'all';
    const periodoFilter = document.getElementById('aderenciaPeriodoTabela')?.value || 'dia';
    
    // Aplicar filtros
    let dadosExportar = aderenciaAgentes;
    
    if (statusFilter !== 'all') {
        dadosExportar = dadosExportar.filter(item => item.status === statusFilter);
    }
    
    if (agenteFilter !== 'all') {
        dadosExportar = dadosExportar.filter(item => item.nome === agenteFilter);
    }
    
    // Criar CSV com novo formato
    let csv = 'Agente;Data;Atividade;Hora Escalada;Hora Real;Min. em Aderência;Min. fora Aderência;% em Aderência;+/- Min. Conformidade;% em Conformidade;% do Total;% do Total Real\n';
    
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString('pt-BR');
    
    dadosExportar.forEach(agente => {
        const dadosAtividades = gerarDadosAderenciaAgente(agente);
        
        dadosAtividades.forEach(ativ => {
            const conformidadePrefix = ativ.minConformidade > 0 ? '+' : '';
            csv += `${agente.nome};${dataFormatada};${ativ.atividade};${ativ.horaEscalada};${ativ.horaReal};${ativ.minAderencia};${ativ.minForaAderencia};${ativ.percAderencia}%;${conformidadePrefix}${ativ.minConformidade};${ativ.percConformidade !== null ? ativ.percConformidade + '%' : '-'};${ativ.percTotal !== null ? ativ.percTotal + '%' : '-'};${ativ.percTotalReal !== null ? ativ.percTotalReal + '%' : '-'}\n`;
        });
    });
    
    // Adicionar informações do filtro no início
    let header = 'RELATÓRIO DE ADERÊNCIA - DETALHAMENTO POR AGENTE E ATIVIDADE\n';
    header += `Período: ${formatarData(dataInicio)} até ${formatarData(dataFim)}\n`;
    header += `Turno: ${periodoFilter === 'dia' ? 'Dia Inteiro' : periodoFilter === 'manha' ? 'Manhã' : periodoFilter === 'tarde' ? 'Tarde' : 'Noite'}\n`;
    header += `Filtro Status: ${statusFilter === 'all' ? 'Todos' : statusFilter}\n`;
    header += `Filtro Agente: ${agenteFilter === 'all' ? 'Todos' : agenteFilter}\n`;
    header += `Data de Geração: ${new Date().toLocaleString('pt-BR')}\n\n`;
    
    const conteudoFinal = header + csv;
    
    // Criar e baixar arquivo
    const blob = new Blob(['\ufeff' + conteudoFinal], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Aderencia_Agentes_${dataInicio}_a_${dataFim}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Feedback visual
    const btn = document.querySelector('.aderencia-table-section .export-btn');
    if (btn) {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Exportado!';
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
        }, 2000);
    }
}
// ===== Aplicar Filtro de Aderência =====
function aplicarFiltroAderencia() {
    const dataInicio = document.getElementById('aderenciaDataInicio').value;
    const dataFim = document.getElementById('aderenciaDataFim').value;
    const periodo = document.getElementById('aderenciaPeriodo').value;
    let horaInicio, horaFim;
    
    switch(periodo) {
        case 'manha':
            horaInicio = '06:00';
            horaFim = '12:00';
            break;
        case 'tarde':
            horaInicio = '12:00';
            horaFim = '18:00';
            break;
        case 'noite':
            horaInicio = '18:00';
            horaFim = '00:00';
            break;
        case 'personalizado':
            horaInicio = document.getElementById('horaInicio').value;
            horaFim = document.getElementById('horaFim').value;
            break;
        default:
            horaInicio = '00:00';
            horaFim = '23:59';
    }
    
    console.log('Filtro aplicado:', { dataInicio, dataFim, periodo, horaInicio, horaFim });
    
    // Calcular quantidade de dias
    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);
    const diasDiff = Math.ceil((fim - inicio) / (1000 * 60 * 60 * 24)) + 1;
    
    // Simular atualização dos dados baseado no filtro
    const fatorPeriodo = periodo === 'dia' ? 1 : periodo === 'personalizado' ? 0.7 : 0.35;
    const fatorDias = Math.min(diasDiff / 7, 1);
    
    document.getElementById('aderenciaGeral').textContent = Math.round(85 + Math.random() * 10) + '%';
    document.getElementById('loginHorario').textContent = Math.round(24 * fatorPeriodo * (0.8 + Math.random() * 0.2));
    document.getElementById('atrasosHoje').textContent = Math.round(5 * diasDiff * fatorPeriodo * Math.random());
    document.getElementById('pausasLimite').textContent = Math.round(20 * fatorPeriodo * (0.7 + Math.random() * 0.3));
    document.getElementById('pausasExcedidas').textContent = Math.round(8 * diasDiff * fatorPeriodo * Math.random());
    
    // Feedback visual
    const btn = document.querySelector('.filtro-btn:not(.export-btn)');
    btn.innerHTML = '<i class="fas fa-check"></i> Aplicado!';
    btn.style.background = 'linear-gradient(135deg, var(--success), #16a34a)';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-filter"></i> Aplicar';
        btn.style.background = 'linear-gradient(135deg, var(--primary), var(--primary-dark))';
    }, 1500);
    
    // Re-renderizar tabela
    renderAderenciaTable('all');
}

// ===== Exportar Aderência =====
function exportarAderencia() {
    const dataInicio = document.getElementById('aderenciaDataInicio').value;
    const dataFim = document.getElementById('aderenciaDataFim').value;
    const periodo = document.getElementById('aderenciaPeriodo').value;
    
    // Criar conteúdo do relatório
    let conteudo = 'RELATÓRIO DE ADERÊNCIA DOS AGENTES\n';
    conteudo += '='.repeat(50) + '\n\n';
    conteudo += `Período: ${formatarData(dataInicio)} até ${formatarData(dataFim)}\n`;
    conteudo += `Turno: ${periodo === 'dia' ? 'Dia Inteiro' : periodo === 'manha' ? 'Manhã (06:00-12:00)' : periodo === 'tarde' ? 'Tarde (12:00-18:00)' : periodo === 'noite' ? 'Noite (18:00-00:00)' : 'Personalizado'}\n`;
    conteudo += `Data de Geração: ${new Date().toLocaleString('pt-BR')}\n\n`;
    
    conteudo += '-'.repeat(50) + '\n';
    conteudo += 'RESUMO GERAL\n';
    conteudo += '-'.repeat(50) + '\n';
    conteudo += `Aderência Geral: ${document.getElementById('aderenciaGeral').textContent}\n`;
    conteudo += `Login no Horário: ${document.getElementById('loginHorario').textContent} agentes\n`;
    conteudo += `Atrasos: ${document.getElementById('atrasosHoje').textContent}\n`;
    conteudo += `Pausas no Limite: ${document.getElementById('pausasLimite').textContent} agentes\n`;
    conteudo += `Pausas Excedidas: ${document.getElementById('pausasExcedidas').textContent} agentes\n\n`;
    
    conteudo += '-'.repeat(50) + '\n';
    conteudo += 'DETALHAMENTO POR AGENTE\n';
    conteudo += '-'.repeat(50) + '\n';
    conteudo += 'Agente\t\t\t\tAderência\tLogin\t\tTempo Logado\tTempo Pausa\tStatus\n';
    conteudo += '-'.repeat(100) + '\n';
    
    aderenciaAgentes.forEach(agente => {
        const statusText = agente.status === 'conforme' ? 'Conforme' : agente.status === 'atencao' ? 'Atenção' : 'Crítico';
        conteudo += `${agente.nome.padEnd(24)}\t${agente.aderencia}%\t\t${agente.login}\t\t${agente.tempoLogado}\t${agente.tempoPausa}\t${statusText}\n`;
    });
    
    conteudo += '\n' + '='.repeat(50) + '\n';
    conteudo += 'CVORTEX - Sistema de Gestão de Atendimento\n';
    
    // Criar e baixar arquivo
    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Relatorio_Aderencia_${dataInicio}_a_${dataFim}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Feedback visual
    const btn = document.querySelector('.export-btn');
    btn.innerHTML = '<i class="fas fa-check"></i> Exportado!';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-file-export"></i> Exportar';
    }, 2000);
}

function formatarData(dataStr) {
    const data = new Date(dataStr + 'T00:00:00');
    return data.toLocaleDateString('pt-BR');
}

// ===== Initialize Charts =====
let charts = {};

function initCharts() {
    // Chart.js global config
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.borderColor = '#334155';
    Chart.defaults.font.family = "'Inter', sans-serif";
    
    console.log('Criando gráficos...');
    
    createMotivosChart();
    createVolumetriaChart();
    createAgentesStatusChart();
    createPausaChart();
    createAderenciaCharts();
    
    console.log('Gráficos criados!');
}

// Motivos de Contato Chart
function createMotivosChart() {
    const canvas = document.getElementById('motivosChart');
    if (!canvas) {
        console.error('Canvas motivosChart não encontrado!');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    charts.motivos = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Suporte Técnico (312)',
                'Dúvida sobre Fatura (245)',
                'Cancelamento (156)',
                'Segunda Via (98)',
                'Alteração de Plano (87)',
                'Promoções (72)',
                'Reclamação (45)',
                'Mudança de Endereço (38)',
                'Outros (27)'
            ],
            datasets: [{
                data: [312, 245, 156, 98, 87, 72, 45, 38, 27],
                backgroundColor: [
                    '#6366f1',
                    '#0ea5e9',
                    '#ef4444',
                    '#22c55e',
                    '#f59e0b',
                    '#a855f7',
                    '#ec4899',
                    '#14b8a6',
                    '#64748b'
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 12,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: {
                            size: 11
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.raw / total) * 100).toFixed(1);
                            return context.raw + ' atendimentos (' + percentage + '%)';
                        }
                    }
                }
            },
            cutout: '55%'
        }
    });
    canvas.parentElement.style.height = '100%';
}

// Volumetria por Horário Chart
function createVolumetriaChart() {
    const canvas = document.getElementById('volumetriaChart');
    if (!canvas) {
        console.error('Canvas volumetriaChart não encontrado!');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    charts.volumetria = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
            datasets: [
                {
                    label: 'Voz',
                    data: [8, 22, 48, 85, 112, 98, 72, 78, 105, 118, 102, 89, 76, 58, 42, 25, 12],
                    backgroundColor: 'rgba(99, 102, 241, 0.8)',
                    borderRadius: 4
                },
                {
                    label: 'Chat',
                    data: [12, 28, 52, 78, 95, 108, 85, 92, 125, 142, 128, 105, 88, 68, 52, 35, 18],
                    backgroundColor: 'rgba(14, 165, 233, 0.8)',
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return 'Horário: ' + context[0].label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Atendimentos',
                        color: '#94a3b8'
                    },
                    grid: {
                        color: 'rgba(51, 65, 85, 0.5)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Horário',
                        color: '#94a3b8'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
    canvas.parentElement.style.height = '100%';
}

// Status dos Agentes Chart
function createAgentesStatusChart() {
    const canvas = document.getElementById('agentesStatusChart');
    if (!canvas) {
        console.error('Canvas agentesStatusChart não encontrado!');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Dados dos agentes
    var agentesData = {
        disponiveis: 18,
        emAtendimento: 42,
        emPausa: 8,
        offline: 12
    };
    var totalAgentes = agentesData.disponiveis + agentesData.emAtendimento + agentesData.emPausa + agentesData.offline;
    
    charts.agentesStatus = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Disponíveis (' + agentesData.disponiveis + ')',
                'Em Atendimento (' + agentesData.emAtendimento + ')',
                'Em Pausa (' + agentesData.emPausa + ')',
                'Offline (' + agentesData.offline + ')'
            ],
            datasets: [{
                data: [agentesData.disponiveis, agentesData.emAtendimento, agentesData.emPausa, agentesData.offline],
                backgroundColor: [
                    '#22c55e',
                    '#0ea5e9',
                    '#f59e0b',
                    '#64748b'
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var percentage = ((context.raw / totalAgentes) * 100).toFixed(1);
                            return context.raw + ' agentes (' + percentage + '%)';
                        }
                    }
                }
            },
            cutout: '65%'
        }
    });
    canvas.parentElement.style.height = '100%';
}

// Agentes em Pausa Chart
function createPausaChart() {
    const canvas = document.getElementById('pausaChart');
    if (!canvas) {
        console.error('Canvas pausaChart não encontrado!');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Dados de pausa detalhados
    var pausaLabels = ['Almoço', 'Lanche', 'Banheiro', 'Feedback', 'Treinamento', 'Reunião', 'Descanso'];
    var pausaValues = [3, 2, 1, 1, 1, 0, 0];
    var pausaAgentes = [
        ['Ana Paula', 'Roberto Silva', 'Marcos Lima'],
        ['Julia Santos', 'Pedro Costa'],
        ['Carla Mendes'],
        ['Fernando Dias'],
        ['Mariana Rocha'],
        [],
        []
    ];
    
    charts.pausa = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: pausaLabels,
            datasets: [{
                label: 'Agentes',
                data: pausaValues,
                backgroundColor: [
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(14, 165, 233, 0.8)',
                    'rgba(168, 85, 247, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(236, 72, 153, 0.8)',
                    'rgba(100, 116, 139, 0.8)'
                ],
                borderRadius: 6
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            var agentes = pausaAgentes[context.dataIndex];
                            if (agentes.length > 0) {
                                return 'Agentes: ' + agentes.join(', ');
                            }
                            return '';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        stepSize: 1
                    },
                    title: {
                        display: true,
                        text: 'Quantidade',
                        color: '#94a3b8'
                    },
                    grid: {
                        color: 'rgba(51, 65, 85, 0.5)'
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
    canvas.parentElement.style.height = '100%';
}

// ===== Gráficos de Aderência =====
function createAderenciaCharts() {
    createAderenciaDistChart();
    createAderenciaHoraChart();
    createAderenciaPeriodoChart();
}

// Gráfico de Distribuição de Aderência
function createAderenciaDistChart() {
    const canvas = document.getElementById('aderenciaDistChart');
    if (!canvas) {
        console.log('Canvas aderenciaDistChart não encontrado (tela 3 não visível)');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Contar agentes por status
    const conforme = aderenciaAgentes.filter(a => a.status === 'conforme').length;
    const atencao = aderenciaAgentes.filter(a => a.status === 'atencao').length;
    const critico = aderenciaAgentes.filter(a => a.status === 'critico').length;
    
    charts.aderenciaDist = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Conforme (≥85%)', 'Atenção (70-84%)', 'Crítico (<70%)'],
            datasets: [{
                data: [conforme, atencao, critico],
                backgroundColor: [
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(239, 68, 68, 0.8)'
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 12,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: {
                            size: 11
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percent = Math.round((context.raw / total) * 100);
                            return context.label + ': ' + context.raw + ' (' + percent + '%)';
                        }
                    }
                }
            }
        }
    });
}

// Gráfico de Aderência por Hora
function createAderenciaHoraChart() {
    const canvas = document.getElementById('aderenciaHoraChart');
    if (!canvas) {
        console.log('Canvas aderenciaHoraChart não encontrado (tela 3 não visível)');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    charts.aderenciaHora = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'],
            datasets: [{
                label: 'Aderência %',
                data: [92, 89, 91, 85, 78, 82, 88, 90, 87, 85],
                backgroundColor: function(context) {
                    const value = context.raw;
                    if (value >= 85) return 'rgba(34, 197, 94, 0.8)';
                    if (value >= 70) return 'rgba(245, 158, 11, 0.8)';
                    return 'rgba(239, 68, 68, 0.8)';
                },
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 60,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(51, 65, 85, 0.5)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createAderenciaPeriodoChart() {
    const canvas = document.getElementById('aderenciaPeriodoChart');
    if (!canvas) {
        console.log('Canvas aderenciaPeriodoChart não encontrado (tela 3 não visível)');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    charts.aderenciaPeriodo = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Manhã', 'Tarde', 'Noite'],
            datasets: [{
                label: 'Aderência %',
                data: [91, 86, 82],
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#6366f1',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4
            }, {
                label: 'Meta',
                data: [85, 85, 85],
                borderColor: 'rgba(239, 68, 68, 0.6)',
                borderDash: [5, 5],
                fill: false,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#94a3b8',
                        font: { size: 11 }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 70,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(51, 65, 85, 0.5)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ===== Simulate Real-Time Updates =====
function simulateRealTimeUpdates() {
    // Randomly update some values
    mockData.voz.chamadasAtendidas += Math.floor(Math.random() * 5);
    mockData.voz.filaEspera = Math.max(0, mockData.voz.filaEspera + Math.floor(Math.random() * 5) - 2);
    mockData.voz.emAtendimento = Math.max(1, mockData.voz.emAtendimento + Math.floor(Math.random() * 3) - 1);
    
    mockData.chat.clientesFila = Math.max(0, mockData.chat.clientesFila + Math.floor(Math.random() * 4) - 2);
    mockData.chat.emAtendimento = Math.max(1, mockData.chat.emAtendimento + Math.floor(Math.random() * 3) - 1);
    
    // Update backlog
    mockData.backlog.voz = mockData.voz.filaEspera + Math.floor(Math.random() * 10) + 5;
    mockData.backlog.chat = mockData.chat.clientesFila + Math.floor(Math.random() * 15) + 10;
    mockData.backlog.total = mockData.backlog.voz + mockData.backlog.chat;
    
    // Update times
    mockData.voz.maiorAtendimento = incrementTime(mockData.voz.maiorAtendimento, Math.random() > 0.5);
    mockData.chat.maiorAtendimento = incrementTime(mockData.chat.maiorAtendimento, Math.random() > 0.5);
    mockData.chat.clienteMaisTempo = incrementTime(mockData.chat.clienteMaisTempo, Math.random() > 0.3);
    mockData.chat.maiorTempoEspera = incrementTime(mockData.chat.maiorTempoEspera, Math.random() > 0.4);
    
    // Update dashboard
    updateDashboardValues();
}

function incrementTime(timeStr, increment) {
    if (increment === undefined) increment = true;
    var parts = timeStr.split(':');
    var hours = parseInt(parts[0]);
    var minutes = parseInt(parts[1]);
    var seconds = parseInt(parts[2]);
    
    if (increment) {
        seconds += Math.floor(Math.random() * 30) + 5;
        if (seconds >= 60) {
            seconds -= 60;
            minutes++;
        }
        if (minutes >= 60) {
            minutes -= 60;
            hours++;
        }
    } else {
        // Reset to a smaller value sometimes
        if (Math.random() > 0.7) {
            return '00:0' + Math.floor(Math.random() * 9) + ':' + String(Math.floor(Math.random() * 60)).padStart(2, '0');
        }
    }
    
    return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
}

// ===== Refresh Data Button =====
function refreshData() {
    // Add spinning animation to refresh button
    var btn = document.querySelector('.refresh-btn i');
    btn.style.animation = 'spin 0.5s linear';
    
    setTimeout(function() {
        btn.style.animation = '';
        
        // Reset some data
        mockData.voz.chamadasAtendidas += Math.floor(Math.random() * 20);
        mockData.chat.clientesFila = Math.floor(Math.random() * 15) + 5;
        mockData.agentes.disponiveis = Math.floor(Math.random() * 10) + 10;
        
        updateDashboardValues();
        
        // Update all charts
        for (var key in charts) {
            if (charts.hasOwnProperty(key)) {
                charts[key].update();
            }
        }
    }, 500);
}

// ===== Navigation Active State =====
document.addEventListener('DOMContentLoaded', function() {
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(function(i) { i.classList.remove('active'); });
            this.classList.add('active');
        });
    });
});

// ===== Show/Hide Telas =====
function showTela(telaId) {
    // Esconder todas as telas
    var telas = document.querySelectorAll('.tela');
    telas.forEach(function(tela) {
        tela.style.display = 'none';
    });
    
    // Mostrar a tela selecionada
    var telaAtiva = document.getElementById(telaId);
    if (telaAtiva) {
        telaAtiva.style.display = 'block';
    }
    
    // Atualizar navegação
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        item.classList.remove('active');
        if (item.getAttribute('data-tela') === telaId) {
            item.classList.add('active');
        }
    });
    
    // Recriar gráficos da tela 2 quando acessada
    if (telaId === 'tela2') {
        setTimeout(function() {
            if (charts.agentesStatus) {
                charts.agentesStatus.resize();
            }
            if (charts.pausa) {
                charts.pausa.resize();
            }
        }, 100);
    }
    
    // Criar/atualizar gráficos da tela 3 quando acessada
    if (telaId === 'tela3') {
        setTimeout(function() {
            if (!charts.aderenciaDist) {
                createAderenciaDistChart();
            } else {
                charts.aderenciaDist.resize();
            }
            if (!charts.aderenciaHora) {
                createAderenciaHoraChart();
            } else {
                charts.aderenciaHora.resize();
            }
            if (!charts.aderenciaPeriodo) {
                createAderenciaPeriodoChart();
            } else {
                charts.aderenciaPeriodo.resize();
            }
        }, 100);
    }
}
