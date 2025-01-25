# Gestao_Financeira_Pessoal
Gestão Financeira Pessoa

Este projeto é uma aplicação web simples e funcional para gerenciar finanças pessoais. Ele permite registrar transações financeiras, visualizar o saldo atual, analisar gastos por categoria e acompanhar transações recentes. A aplicação foi projetada com um layout moderno e interativo, utilizando tecnologias amplamente usadas no desenvolvimento web.

## Funcionalidades
- **Registrar Transações**: Adicione receitas e despesas com descrição, valor, categoria e data.
- **Visualizar Saldo Atual**: O saldo é atualizado automaticamente com base nas transações registradas.
- **Gastos por Categoria**: Um gráfico dinâmico mostra os gastos agrupados por categoria.
- **Transações Recentes**: Veja uma lista detalhada das transações registradas.
- **Persistência de Dados**: As transações são armazenadas no `localStorage` do navegador, garantindo que os dados permaneçam disponíveis mesmo ao recarregar a página.

## Tecnologias Utilizadas

### 1. **HTML**
A estrutura principal do projeto foi construída com HTML5, utilizando elementos semânticos para melhor organização e acessibilidade.

**Características:**
- Uso de `div` para layout flexível.
- Elementos como `form`, `input` e `select` para entrada de dados do usuário.
- Canvas para exibição de gráficos interativos.

### 2. **CSS**
A estilização foi feita com CSS3, garantindo um design moderno e responsivo.

**Características:**
- Grid layout para organização do conteúdo.
- Fundo com gradiente linear.
- Estilos personalizados para botões, tabelas e formulários.
- Uso de `box-shadow` e `border-radius` para criar um design leve e elegante.

### 3. **JavaScript**
O JavaScript é o núcleo funcional do projeto, responsável pela lógica de registro, atualização e visualização de dados.

**Características:**
- Manipulação do DOM para atualizar o conteúdo dinamicamente.
- Uso do `localStorage` para persistência de dados.
- Integração com a biblioteca **Chart.js** para criar gráficos interativos e responsivos.
- Cálculo automático do saldo e atualização do gráfico com base nas transações registradas.

### 4. **Chart.js**
A biblioteca foi utilizada para gerar gráficos de pizza dinâmicos que exibem os gastos por categoria.

**Características:**
- Fácil integração com JavaScript.
- Visual atraente e moderno.
- Atualização automática com os dados das transações.

## Como Utilizar
1. Clone este repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador web.
3. Utilize o formulário para registrar novas transações.
4. Visualize o saldo, os gastos por categoria e a lista de transações recentes.

## Estrutura de Arquivos
```
/
├── index.html          # Arquivo principal da aplicação
├── styles.css          # Estilização do projeto
├── script.js           # Lógica principal em JavaScript
├── README.md           # Documentação do projeto
```

## Possíveis Melhorias
- Adicionar um backend para persistência de dados mais robusta.
- Implementar autenticação de usuários.
- Exportação de relatórios em diferentes formatos (PDF, Excel).
- Suporte para múltiplas moedas.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com sugestões e melhorias.

## Licença
Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

---
**Desenvolvido com dedicação e foco no aprendizado de tecnologias web.**

