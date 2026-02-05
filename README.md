# CVORTEX - Dashboard de Atendimento

> ⚠️ **ATENÇÃO: Este é um produto em fase ALPHA** - Não é uma versão beta, muito menos uma versão final. Foi desenvolvido rapidamente como protótipo para demonstração.

---

## 📋 Sobre o Projeto

Este dashboard foi criado **a pedido da Coordenadora Geisa** para demonstrar como deve ser o painel de atendimento para a empresa parceira dela. O objetivo é servir como **referência visual e funcional** para o time de desenvolvimento da empresa parceira.

### ⚡ Aviso Importante

Este projeto foi desenvolvido em **regime de urgência**, portanto:

- 🚧 Código pode não seguir todas as melhores práticas
- 🐛 Podem existir bugs não identificados
- 📱 Responsividade limitada (otimizado para TVs e monitores ultrawide)
- 🔄 Dados são fictícios e estáticos (mockados)
- 🎨 Alguns ajustes visuais podem ser necessários

---

## 📁 Estrutura de Arquivos

```
GeisaPlanoDeGraficos/
│
├── index.html          # Página principal (versão padrão)
├── editavel.html       # Versão editável do dashboard
├── styles.css          # Estilos CSS do projeto
├── scripts.js          # Lógica JavaScript e dados mockados
└── README.md           # Este arquivo
```

---

## 📄 Descrição dos Arquivos

### `index.html` - Página Principal

A versão padrão do dashboard contendo:

- **Sidebar lateral** com navegação entre 3 telas
- **Header** com estatísticas de agentes (online, disponíveis, em pausa)
- **3 Telas de conteúdo:**
  - **Tela 1 - Painel Geral:** CSAT global, métricas de voz e chat, gráfico de volumetria
  - **Tela 2 - Painel Gestor:** Gráficos de análise (motivos de contato, status dos agentes, pausas) e tabela de agentes
  - **Tela 3 - Aderência:** Métricas de aderência, gráficos e tabela detalhada por agente

**Recursos:**
- Modal informativo na primeira visita explicando que é um site de exemplo
- Botões para alternar entre versão Padrão e Editável
- Sidebar colapsável

### `editavel.html` - Versão Editável

Cópia do dashboard onde **todos os textos podem ser editados** clicando diretamente neles.

**Recursos exclusivos:**
- `contenteditable="true"` em todos os elementos de texto
- **Salvamento automático** no localStorage do navegador
- **Persistência** das edições ao recarregar a página
- Botão **"Resetar"** para voltar ao original
- Modal de boas-vindas explicando:
  - Dados são salvos localmente (não no servidor)
  - Edições não são compartilhadas via link
  - Recomendação de tirar print para enviar sugestões
- Balão de aviso colapsável

### `styles.css` - Estilos

Arquivo CSS completo com:

```css
/* Variáveis CSS (cores, tamanhos, etc) */
:root {
    --primary: #6366f1;        /* Roxo principal */
    --secondary: #0ea5e9;       /* Azul secundário */
    --success: #22c55e;         /* Verde */
    --warning: #f59e0b;         /* Amarelo/Laranja */
    --danger: #ef4444;          /* Vermelho */
    --bg-dark: #0f172a;         /* Fundo escuro */
    --bg-card: #1e293b;         /* Fundo dos cards */
    /* ... mais variáveis */
}
```

**Seções do CSS:**
1. **Reset & Base** - Reset de estilos padrão
2. **Scrollbar** - Personalização da barra de rolagem
3. **Sidebar** - Menu lateral e navegação
4. **Header** - Cabeçalho com estatísticas
5. **Cards** - Cards de métricas
6. **Charts** - Área dos gráficos
7. **Tables** - Tabelas de dados
8. **Aderência** - Estilos específicos da tela de aderência
9. **Responsividade** - Media queries (limitado)

### `scripts.js` - JavaScript

Lógica do dashboard contendo:

**1. Dados Mockados (Fictícios)**
```javascript
const agentesData = [...];           // Lista de agentes
const aderenciaData = [...];         // Dados de aderência
```

**2. Funções de Navegação**
```javascript
showTela(telaId)      // Alterna entre as 3 telas
toggleSidebar()       // Colapsa/expande sidebar
```

**3. Inicialização dos Gráficos (Chart.js)**
```javascript
initVolumetriaChart()      // Gráfico de volumetria por hora
initMotivosChart()         // Gráfico de motivos de contato
initAgentesStatusChart()   // Gráfico de status dos agentes
initPausaChart()           // Gráfico de pausas
initAderenciaCharts()      // Gráficos de aderência
```

**4. Funções de Tabela**
```javascript
populateAgentesTable()     // Preenche tabela de agentes
populateAderenciaTable()   // Preenche tabela de aderência
filterAgentes()            // Filtra agentes por status
```

**5. Funções Auxiliares**
```javascript
updateDateTime()           // Atualiza data/hora no header
refreshData()              // Simula atualização de dados
```

---

## 🎨 Cores e Tema

O dashboard usa um tema **dark mode** com a seguinte paleta:

| Cor | Hex | Uso |
|-----|-----|-----|
| Roxo (Primary) | `#6366f1` | Elementos principais, sidebar ativa |
| Azul (Secondary) | `#0ea5e9` | Destaques, gradientes |
| Verde (Success) | `#22c55e` | Positivo, disponível, conforme |
| Amarelo (Warning) | `#f59e0b` | Atenção, pausas |
| Vermelho (Danger) | `#ef4444` | Negativo, crítico |
| Fundo escuro | `#0f172a` | Background principal |
| Fundo cards | `#1e293b` | Cards e sidebar |

---

## 📊 Bibliotecas Utilizadas

| Biblioteca | Versão | Uso |
|------------|--------|-----|
| [Chart.js](https://www.chartjs.org/) | CDN | Gráficos (linha, rosca, barra) |
| [Font Awesome](https://fontawesome.com/) | 6.4.0 | Ícones |
| [Google Fonts - Inter](https://fonts.google.com/specimen/Inter) | - | Tipografia |

---

## 🖥️ Resolução Recomendada

Este dashboard foi projetado para:

- ✅ **TVs** (1920x1080 ou superior)
- ✅ **Monitores Ultrawide** (2560x1080, 3440x1440)
- ✅ **Monitores grandes** (27" ou maior em 1440p/4K)
- ⚠️ **Monitores convencionais** (pode haver distorções)
- ❌ **Mobile/Tablet** (não otimizado)

---

## 🔧 Como Usar

### Versão Padrão (`index.html`)
1. Abra o arquivo `index.html` no navegador
2. Navegue entre as telas usando o menu lateral
3. Use o botão de atualizar para simular refresh dos dados

### Versão Editável (`editavel.html`)
1. Abra o arquivo `editavel.html` no navegador
2. Clique em qualquer texto para editar
3. As alterações são salvas automaticamente no navegador
4. Use o botão "Resetar" para voltar ao original
5. **Tire um print** para compartilhar suas sugestões

---

## ⚙️ Funcionalidades

### Implementadas ✅
- [x] 3 telas de dashboard (Painel Geral, Gestor, Aderência)
- [x] Sidebar colapsável
- [x] Gráficos interativos (Chart.js)
- [x] Tabelas com filtros
- [x] Versão editável com salvamento local
- [x] Modais informativos
- [x] Tema dark mode
- [x] Animações e transições

### Não Implementadas / Limitações ❌
- [ ] Conexão com API real
- [ ] Autenticação de usuários
- [ ] Responsividade completa
- [ ] Exportação real de relatórios
- [ ] Filtros de data funcionais (visual apenas)
- [ ] Atualização em tempo real

---

## 🚀 Próximos Passos (Sugestões)

Para transformar este protótipo em produto:

1. **Backend:** Criar API para fornecer dados reais
2. **Autenticação:** Implementar login e controle de acesso
3. **Responsividade:** Adaptar para diferentes tamanhos de tela
4. **Testes:** Adicionar testes automatizados
5. **Otimização:** Minificar CSS/JS para produção
6. **PWA:** Transformar em Progressive Web App

---

## 👩‍💼 Créditos

- **Solicitante:** Coordenadora Geisa
- **Propósito:** Demonstração para empresa parceira
- **Status:** 🔴 ALPHA (protótipo inicial)

---

## 📝 Licença

Este é um projeto interno de demonstração. Todos os direitos reservados.

---

## 📞 Contato

Para dúvidas ou sugestões sobre este protótipo, entre em contato com a Coordenadora Geisa ou o time de desenvolvimento.

---

> **Lembrete:** Este projeto foi feito em caráter de urgência como protótipo visual. Não deve ser usado em produção sem as devidas adequações e testes.
