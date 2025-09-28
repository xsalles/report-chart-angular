# Report Chart Angular

Este projeto é um exemplo de aplicação Angular para geração de relatórios e visualização de dados em gráficos e tabelas, utilizando PrimeNG e pdfMake. Ele foi desenvolvido como estudo e referência para futuras integrações com APIs ou bancos de dados.

---

## Conceitos e Tecnologias Utilizadas

### 1. **Angular**
- Framework principal para construção da aplicação SPA (Single Page Application).
- Utilização de componentes, módulos, injeção de dependência e roteamento.

### 2. **PrimeNG**
- Biblioteca de componentes UI para Angular.
- Utilização dos componentes:
  - **p-table**: para exibição de dados tabulares.
  - **p-chart**: para gráficos (bar chart).
  - **p-button**: para botões estilizados.
- Customização de temas e estilos via SCSS e propriedades do PrimeNG.

### 3. **pdfMake**
- Biblioteca para geração de PDFs diretamente no frontend.
- Utilizada para exportar relatórios da tabela de votos em PDF, incluindo cabeçalho, QR code, tabela de dados e totalização.

### 4. **Componentização**
- Separação da aplicação em componentes reutilizáveis:
  - `component-chart`: exibe o gráfico de votos por data.
  - `component-table`: exibe a tabela de dados e botão para gerar PDF.
  - `component-button`: botão customizado, recebe eventos via `@Input` e `@Output`.

### 5. **Comunicação entre Componentes**
- Uso de `@Input()` para receber dados do componente pai.
- Uso de `@Output()` e `EventEmitter` para emitir eventos do filho para o pai (exemplo: clique no botão para gerar PDF).

### 6. **Estilização**
- Uso de SCSS para customização dos componentes.
- Utilização de `::ng-deep` para sobrescrever estilos encapsulados do PrimeNG.
- Uso de classes customizadas (`styleClass`) para facilitar a aplicação de estilos específicos.
- Aplicação de bordas arredondadas e remoção de bordas indesejadas na tabela.


### 7. **Mock de Dados**
- Os dados exibidos (votos, funcionários, datas) são mockados diretamente nos arquivos TypeScript, sem conexão com API ou banco de dados.
- Estrutura de dados clara para facilitar futura integração com backend.

### 8. **Geração de PDF**
- Função `generatePDF` recebe os dados da tabela e gera um PDF formatado, pronto para download ou visualização.
- Inclusão de QR code, cabeçalho, tabela de dados e total de votos.

---

## Como funciona

- O componente de gráfico (`component-chart`) exibe a quantidade de votos por dia.
- O componente de tabela (`component-table`) mostra os dados dos votos e permite gerar um PDF do relatório.
- O botão de gerar PDF dispara a função que monta e abre o PDF com os dados atuais da tabela.

---

## Como customizar ou integrar

- Para integrar com uma API, basta substituir os arrays mockados por chamadas HTTP e atualizar os dados dos componentes.

---

## Estrutura de Pastas

```
src/
  app/
    components/
      chart/
      table/
      button/
    lib/
      pdf.ts
    services/
      votes-data.service.ts
  assets/
    img.ts
```

---

## Observações

- O projeto está pronto para ser expandido e integrado com backend.
- Todos os conceitos utilizados são padrão de projetos Angular modernos.
- O código está comentado e organizado para facilitar o entendimento por toda a equipe.

---

**Qualquer dúvida, consulte este README ou os comentários no código!**