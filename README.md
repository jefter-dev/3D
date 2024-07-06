# 👾 Elementos 3D com Three.js

Este projeto utiliza Three.js, Next.js e React Bootstrap para renderizar e exibir modelos 3D.

## Visão Geral

O projeto demonstra como integrar Three.js em um aplicativo Next.js usando componentes React para renderizar modelos 3D.

## Tecnologias Utilizadas

- **Three.js**: Biblioteca JavaScript para criar e exibir gráficos animados 3D no navegador.
- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **React Bootstrap**: Biblioteca de componentes Bootstrap para React.
- **Imagem**: Componente Next.js para otimização de imagens.
- **Link**: Componente Next.js para navegação entre páginas.

## Estrutura do Projeto

O código principal está no arquivo `src/app/pages.js` e utiliza o componente `Element3D` para renderizar os modelos 3D. 

Pode adaptar para outros formatos, mas o código é funcional com arquivos `.glb`.

Exemplo de uso abaixo: 

## Código

```javascript
<Element3D
    fileElement="/elements3D/ELEMENTO_3D.glb"
    cameraHelperElement={false}
    cameraLockElement={false}
    moveElement={true}
    rotateElement={false}
    colorLight="#58d5d3"
    intensityLight={30}
    backgroundColorElement={0x07161B} />
```

## Getting Started

1. Clone o repositório:

```bash
git clone https://github.com/jefter-dev/3D.git
```

2. Navegue até o diretório do projeto:
```bash
cd seu-repositorio
```

3. Instale as dependências:

```bash
npm install
```
4. Execute o projeto:

```bash
npm run dev
```

5. Abra http://localhost:3000 no navegador para ver o projeto.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

## Contato
Para mais informações, visite meu site ou entre em contato através das redes sociais.

<div>
    <a target="_blank" title="Github" href="https://github.com/jefter-dev">
        <img loading="lazy"
            src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
            target="_blank"></img>
    </a>
    <a target="_blank" title="Linkedin" href="https://www.linkedin.com/in/jefterdev">
        <img loading="lazy"
            src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            target="_blank"></img>
    </a>
    <a target="_blank" title="Instagram" href="https://instagram.com/jefterdev">
        <img loading="lazy"
            src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"
            target="_blank"></img>
    </a>
    <a target="_blank" href="https://api.whatsapp.com/send?phone=5511981816780" title="WhatsApp">
        <img
            src="https://img.shields.io/badge/-WhatsApp-25d366?style=for-the-badge&logo=whatsapp&logoColor=white"
            alt="WhatsApp"></img>
    </a>
    <a target="_blank" href="mailto:contato@jefterdev.com">
        <img loading="lazy"
            src="https://img.shields.io/badge/-EMAIL-58d5d3?style=for-the-badge&logo=maildotru&logoColor=white"></img>
    </a>
    <a target="_blank" title="Site" href="http://jefterdev.com/">
        <img loading="lazy"
            src="https://img.shields.io/badge/-Site-07161b?style=for-the-badge&logo=sitepoint&logoColor=white"></img>
    </a>
</div>