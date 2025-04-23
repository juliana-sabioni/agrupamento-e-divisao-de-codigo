# 🚀 Como testar a aplicação

Este guia mostra como você pode testar sua aplicação **durante o desenvolvimento** e também **após gerar o build de produção** com o Vite.

---

## 🔧 Pré-requisitos

Antes de começar, instale as dependências do projeto com:

npm install

npm run dev

🏗️ Criando o build de produção - Quando sua aplicação estiver pronta, você pode gerar os arquivos otimizados com:


npm run build - Isso cria uma pasta chamada dist/ com os arquivos finais (HTML, JS, CSS minificados).

🌐 Testando o build de produção
Importante: você não pode simplesmente abrir o index.html da pasta dist clicando duas vezes nele.
Isso porque as importações de módulos JavaScript usam caminhos relativos que precisam ser servidos por um servidor.

🔥 Como testar corretamente: Você pode usar um servidor local simples. O próprio Vite recomenda:

npm run preview - Esse comando serve os arquivos de dist/ e simula como o app vai funcionar em produção.

Acesso: Depois de rodar npm run preview, acesse o endereço exibido no terminal, geralmente:

http://localhost:4173 

📂 Resumo dos comandos úteis

npm run dev -	Roda o app em modo desenvolvimento
npm run build -	Gera os arquivos finais (prod)
npm run preview	- Testa o build gerado em servidor local
