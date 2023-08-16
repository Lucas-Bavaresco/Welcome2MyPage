Hello World! Wellcome to my Page (Developed by Lucas Bavaresco / @lucas.ixt8.solutions)

ENGLISH VERSION: (PT-BR abaixo)

Below I'm providing the structure of each file (HTML, CSS, and JS).

HTML (File "index.html"):

1. Basic HTML document setup, including language definition, metadata, and page title.
2. Inclusion of CSS and JavaScript files using "link" and "script" tags.
3. External resource inclusion, such as Bootstrap and FontAwesome, using CDN URLs.
4. Beginning of the page body with a "div" containing an animation-container class for an animated image.
5. Creation of a fixed-top navigation menu using Bootstrap's navbar class. It contains links to page sections.
6. Hero Section with a background image using the bgTopImage class and a title.
7. "About" section with information about you, including an image and personal details.
8. "My Rockets" section with links to various technologies and platforms like VSCode, HTML5, CSS3, JavaScript, Bootstrap, GitHub, etc.
9. "My Radios" section with links to communication platforms like WhatsApp, Discord, LinkedIn, Instagram, Facebook, etc.
10. "My Satellites" section with links to learning resources such as courses and development tools.
11. "HARD-SKILLS" and "SOFT-SKILLS" sections with cards containing information about my main skills.
12. "PORTFOLIO" section highlighting a list of developer projects through individual cards. Each card displays an image, title, project description, and includes a link to open the project in a new browser tab.
13. "CONTACT" section presenting developer contact information along with a Google Map displaying the location. The IXT8 Tech Solutions logo is displayed and linked to the contact website.
14. Footer: The page footer includes a link to the IXT8 Tech Solutions website. It also displays the current year and copyright information.
15. External Script: The code embeds an external script from Bootstrap that provides interactive functionality and responsive design features.
16. JavaScript Functions: This part of the code uses JavaScript to implement interactive features. Two main functions are defined: showAlert displays a custom confirmation box, and click events for "mimo" and "duolingo" links that display confirmation messages and open external links in new browser tabs.
    Note: The HTML file's code structure serves as the fundamental framework for a web page. It establishes the foundation for content presentation and organization, enabling the creation of a cohesive and interactive experience for visitors.

CSS (File "style.css"):

1. Font Imports: The CSS file begins with the import of a Google Fonts font using the @import rule. This allows the "Kdam Thmor Pro" font to be used throughout the rest of the CSS.
2. Media Queries for Small Screens: The @media rule is used to apply specific styles when the screen width is less than 768px. In this case, the background of the page body is adjusted to have a "contain" size for small screens.
3. Universal and General Selectors: The \* universal selector is used to define properties that apply to all elements on the page. This includes setting the font to "Kdam Thmor Pro" and a maximum width of 100%.
4. Section Styles: Each page section, identified by IDs like #home, #about, #skills, #portfolio, and #contact, has top and bottom spacing defined by padding.
5. Hero Section Styles: The .bgTopImage, .bgMiddleImage, and .bgDownImage selectors apply background images to these specific sections and adjust some properties for better text readability.
6. Text Styles: Various classes like .text-center, .heroTitle, .heroDesc, .aboutHeroText, and .cardTitle are used to style different parts of text on the page. This includes adjustments in size, alignment, and colors.
7. Navigation Styles: The .navbar class defines the style of the top navigation bar, with a black background and white links. Mouse interaction changes the background color and link text color.
8. Image and Icon Styles: Several classes like .aboutImage, .skillsIcon, .networkImages, .card-img-top, .footerIcon, and others are used to style images and icons. Borders, sizes, and hover effects are applied.
9. Card Styles: Classes like .card, .cardTitle, .cardTextPortfolio, and .cardBodyPortfolioBg are used to define card styles on the page, including size, background, and internal spacing.
10. Animation Styles: The .floating-image class is used to define a floating image animation in the bottom left corner of the page.
11. Background Effects Styles: Some sections use the .glass class to apply a glassmorphism background effect, including a translucent background with a shadow.
    Note: The CSS file's structure consists of a series of rules that define the visual style of the page, applying different styles to specific elements such as sections, images, text, and cards. This results in an attractive and responsive layout with various visual and interactive effects.

JS (File "script.js"):

1. DOMContentLoaded Event: The code starts with a DOMContentLoaded event, triggered when the Document Object Model (DOM) is fully loaded. This ensures JavaScript is executed only after the page is fully loaded.
2. duolingoLink Element Manipulation: The code retrieves the element with the ID duolingo using getElementById. It then adds a click event listener to it.
3. Default Behavior Prevention: Inside the click event listener, the preventDefault() function is used to prevent the default behavior of a link. 4. This prevents the link from redirecting the user to another page.
4. showAlert Function: A function named showAlert is defined. It accepts a message and a callback as parameters. This function displays a confirmation dialog (a pop-up with "OK" and "Cancel" buttons) with the provided message. If the user clicks "OK," the callback is called.
5. duolingo Link Redirection: Inside the event listener, the showAlert function is called with an informative message. If the user confirms, a new link is opened in a new tab, redirecting to the developer's profile on Duolingo.
6. Repetition of Structure for mimoLink Element: A similar structure is repeated for the element with the ID mimo. The click event, default behavior prevention, and showAlert function are applied. This allows the user to be redirected to the developer's profile on Mimo.
   Note: The JavaScript file consists of click events that interact with specific elements of the HTML page. When the "duolingo" or "mimo" links are clicked, a confirmation dialog is displayed, and if the user confirms, a new link is opened in a new tab for redirection. This code adds interactivity and functionality to the page.

VERSÃO EM PORTUGUÊS (BR):

Estou disponibilizando abaixo a estrutura de cada arquivo (HTML, CSS e JS).

HTML (Arquivo "index.html"):

1. Configuração básica do documento HTML, incluindo a definição da linguagem, metadados e título da página;
2. Inclusão do arquivo CSS e JavaScript usando as tags "link" e "script';
3. Inclusão de recursos externos, como Bootstrap e FontAwesome, usando URLs de CDN;
4. Início do corpo da página com uma "div" contendo uma classe animation-container para uma imagem animada;
5. Criação de um menu de navegação fixado no topo usando a classe navbar do Bootstrap. Ele contém links para as seções da página;
6. Seção de herói (Hero Section) com uma imagem de fundo usando a classe bgTopImage e um título;
7. Seção "About" com informações sobre você, incluindo uma imagem e detalhes pessoais;
8. Seção "My Rockets" com links para várias tecnologias e plataformas, como VSCode, HTML5, CSS3, JavaScript, Bootstrap, GitHub, entre outros;
9. Seção "My Radios" com links para plataformas de comunicação, como WhatsApp, Discord, LinkedIn, Instagram, Facebook, entre outros;
10. Seção "My Satellites" com links para recursos de aprendizado, como cursos e ferramentas de desenvolvimento;
11. Seção "HARD-SKILLS" e "SOFT-SKILLS" com cards contendo informações sobre as minhas principais habilidades;
12. Seção "PORTFOLIO": Esta seção destaca uma lista de projetos do desenvolvedor por meio de cartões individuais. Cada cartão exibe uma imagem, título e descrição do projeto, e inclui um link para abrir o projeto em uma nova aba do navegador.
13. Seção "CONTACT": Nesta seção, são apresentadas informações de contato do desenvolvedor, juntamente com um mapa do Google que mostra a localização. O logotipo da IXT8 Tech Solutions é exibido e vinculado ao site para contato.
14. Footer (Rodapé): O rodapé da página apresenta um link para o site da IXT8 Tech Solutions. Além disso, exibe o ano atual e informações de direitos autorais.
15. Script Externo: O código incorpora um script externo, do Bootstrap, que oferece funcionalidades interativas e recursos de design responsivo.
16. Funções JavaScript: Essa parte do código utiliza JavaScript para implementar funcionalidades interativas. Duas funções principais são definidas: showAlert exibe uma caixa de confirmação personalizada, e os eventos de clique para os links "mimo" e "duolingo" que exibem mensagens de confirmação e abrem links externos em novas abas.
    OBS: A estrutura de código do arquivo HTML serve como o esqueleto fundamental de uma página da web. Ela estabelece a base para a apresentação e organização do conteúdo, permitindo a criação de uma experiência coesa e interativa para os visitantes.

CSS (Arquivo "style.css"):

1. Importação de Fontes: O arquivo CSS começa com a importação de uma fonte da Google Fonts usando a regra @import. Isso permite que a fonte "Kdam Thmor Pro" seja utilizada no restante do CSS.
2. Media Queries para Telas Pequenas: A regra @media é usada para aplicar estilos específicos quando a largura da tela é menor que 768px. Nesse caso, o fundo do corpo da página é ajustado para ter um tamanho de "contain" para telas pequenas.
3. Seletores Universais e Gerais: O seletor universal \* é utilizado para definir propriedades que se aplicam a todos os elementos da página. Isso inclui a definição da fonte para "Kdam Thmor Pro" e a largura máxima de 100%.
4. Estilos de Seções: Cada seção da página, identificada pelos IDs como #home, #about, #skills, #portfolio, e #contact, tem um espaçamento superior e inferior definido por padding.
5. Estilos de Seções Hero: Os seletores .bgTopImage, .bgMiddleImage e .bgDownImage aplicam imagens de fundo a essas seções específicas e ajustam algumas propriedades para melhor legibilidade do texto.
6. Estilos de Texto: Várias classes, como .text-center, .heroTitle, .heroDesc, .aboutHeroText e .cardTitle, são usadas para estilizar diferentes partes do texto na página. Isso inclui ajustes de tamanho, alinhamento e cores.
7. Estilos de Navegação: A classe .navbar define o estilo da barra de navegação no topo da página, com fundo preto e links brancos. A interação do mouse muda a cor de fundo e a cor do texto dos links.
8. Estilos de Imagens e Ícones: Diversas classes, como .aboutImage, .skillsIcon, .networkImages, .card-img-top, .footerIcon, entre outras, são usadas para estilizar imagens e ícones. Bordas, tamanhos e efeitos de hover são aplicados.
9. Estilos de Cards: Classes como .card, .cardTitle, .cardTextPortfolio e .cardBodyPortfolioBg são utilizadas para definir estilos de cards na página, incluindo tamanho, fundo e espaçamento interno.
10. Estilos de Animação: A classe .floating-image é usada para definir uma animação de imagem flutuante no canto inferior esquerdo da página.
11. Estilos de Efeitos de Fundo: Algumas seções usam a classe .glass para aplicar um efeito de fundo de vidro (glassmorphism), que inclui um fundo translúcido com sombra.
    OBS: A estrutura do arquivo CSS consiste em uma série de regras que definem o estilo visual da página, aplicando diferentes estilos a elementos específicos, como seções, imagens, textos e cards. Isso resulta em um layout atraente e responsivo com vários efeitos visuais e interativos.

JS (Arquivo "scrpit.js"):

1. Evento DOMContentLoaded: O código começa com um evento DOMContentLoaded, que é acionado quando o DOM (Documento Object Model) é totalmente carregado. Isso garante que o JavaScript seja executado apenas após o carregamento completo da página.
2. Manipulação do Elemento duolingoLink: O código obtém o elemento com o ID duolingo usando getElementById. Em seguida, adiciona um ouvinte de evento de clique a ele.
3. Prevenção do Comportamento Padrão: Dentro do ouvinte de evento de clique, a função preventDefault() é usada para evitar o comportamento padrão de um link. Isso impede que o link redirecione o usuário para outra página.
4. Função showAlert: Uma função chamada showAlert é definida. Ela aceita uma mensagem e um callback como parâmetros. Essa função exibe uma caixa de diálogo de confirmação (um pop-up com botões "OK" e "Cancelar") com a mensagem fornecida. Se o usuário clicar em "OK", o callback é chamado.
5. Redirecionamento do Link Duolingo: Dentro do ouvinte de evento, a função showAlert é chamada com uma mensagem informativa. Se o usuário confirmar, um novo link é aberto em uma nova aba, redirecionando para o perfil do desenvolvedor no Duolingo.
6. Repetição da Estrutura para o Elemento mimoLink: A estrutura semelhante é repetida para o elemento com o ID mimo. O evento de clique, a prevenção do comportamento padrão e a função showAlert são aplicados. Isso permite que o usuário seja redirecionado para o perfil do desenvolvedor no Mimo.
   OBS: O arquivo JavaScript consiste em eventos de clique que interagem com elementos específicos da página HTML. Quando os links "duolingo" ou "mimo" são clicados, uma caixa de diálogo de confirmação é exibida e, se o usuário confirmar, um novo link é aberto em uma nova aba para redirecionamento. Esse código adiciona interatividade e funcionalidade à página.
