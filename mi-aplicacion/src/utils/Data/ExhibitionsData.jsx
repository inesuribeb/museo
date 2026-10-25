export const mockExhibitionsData = [
    {
        id: "expo-1",
        // image: "/Images/Exhibitions/Exhibition01/HeaderArchivo.png",
        imageRef: "/Images/Residencies/Residency01/Expo1.jpg",
        image: "/Images/Exhibitions/Exhibition01/Cover-expo1.jpg",
        imageDetail: "/Images/Exhibitions/Exhibition01/expo2025-4.jpg",
        imageDetail2: "/Images/Exhibitions/Exhibition01/expo2025-1.jpg",
        bgImage: "/Images/Exhibitions/Exhibition01/bgExpo2025.jpg",
        imagesAuthor: "Nerea Moreno",
        title: {
            es: "Expo Residencia2025",
            en: "Residency2025 Expo",
            pt: "Expo Residência2025"
        },
        subtitle: {
            es: "Exposición • Marzo 2025",
            en: "Exhibition • March 2025",
            pt: "Exposição • Março 2025"
        },
        venue: {
            es: "Galería Contemporánea, Madrid",
            en: "Contemporary Gallery, Madrid",
            pt: "Galeria Contemporânea, Madrid"
        },
        curator: {
            es: "Ana García",
            en: "Ana García",
            pt: "Ana García"
        },
        description: {
            es: "Muestra de la obra resultante de la Residencia2025 en Madrid.",
            en: "Exhibition of the work resulting from Residencia2025, in Madrid.",
            pt: "Mostra da obra resultante da Residencia2025, em Madrid."
        },

        className: "exhibition-card",
        year: 2025,
        startDate: "2025-03-15",
        endDate: "2025-05-15",
        residencias: ["residencia-1"],
        publicaciones: ["pub-1"],
        collectiveArtPiece: ["artPiece-1"],

        introTitle: {
            es: '',
            en: '',
            pt: '',
        },

        intro: {
            es: 'Con motivo de recoger todo lo ocurrido durante la residencia y dar a conocer el trabajo de Fundación Azar y de sus residentes, en junio de 2025 se celebró en Madrid la Expo Residencia2025, que reunió a más de 400 visitantes. <br/><br/>Durante dos jornadas, una antigua cristalería de 300 m² en el centro de Madrid acogió un programa que incluyó lecturas, presentaciones de investigaciones y obras individuales, la muestra de la obra colectiva y la preventa del libro <em>Una residencia narrada por Ivan Floro.</em> ',
            en: 'In order to showcase everything that took place during the residency and to present the work of Fundación Azar and its residents, the Expo Residencia2025 was held in Madrid in June 2025, bringing together more than 400 visitors. <br/><br/>Over the course of two days, a former 300 m² glass factory in the center of Madrid hosted a program that included readings, research presentations, individual works, the exhibition of the collective piece, and the pre-sale of the book <em>A residency narrated by Ivan Floro.</em>',
            pt: 'Com o objetivo de reunir tudo o que aconteceu durante a residência e divulgar o trabalho da Fundação Azar e dos seus residentes, em junho de 2025 realizou-se em Madrid a Expo Residencia2025, que reuniu mais de 400 visitantes. <br/><br/>Ao longo de dois dias, uma antiga cristaleira de 300 m² no centro de Madrid acolheu um programa que incluiu leituras, apresentações de pesquisas e obras individuais, a exposição da obra coletiva e a pré-venda do livro <em>Uma residência narrada por Ivan Floro.</em>',
        },

        intro2: {
            es: "Durante la Expo Residencia2025 organizamos una sesión de lecturas muy especial. Los escritores residentes Florencia del Campo («autorrelato»), Mireya Hernández (prosa) y Gonzalo Quincoces (guion cinematográfico), tomaron la palabra para compartir fragmentos de los textos que desarrollaron durante su estancia en la residencia.",
            en: "During Expo Residencia2025 we organized a very special reading session. The resident writers Florencia del Campo (autobiographical writing), Mireya Hernández (prose), and Gonzalo Quincoces (screenplay) took the floor to share excerpts from the texts they developed during their stay at the residency.",
            pt: "Durante a Expo Residência2025 organizámos uma sessão de leituras muito especial. Os escritores residentes Florencia del Campo («autorrelato»), Mireya Hernández (prosa) e Gonzalo Quincoces (roteiro cinematográfico) tomaram a palavra para compartilhar trechos dos textos que desenvolveram durante a sua estadia na residência.",
        },

        presentations: [
            {
                id: 1,
                artist: 'Florencia del Campo',
                title: {
                    es: 'Lectura por Florencia del Campo',
                    en: 'Reading by Florencia del Campo',
                    pt: 'Leitura de Florencia del Campo'
                },
                text: {
                    es: 'Florencia del Campo compartió un fragmento cargado de fuerza y crudeza de <em>El nombre impropio</em>, una de las cinco partes que conforman su proyecto de no ficción <em>Diarios colaterales</em>. ',
                    en: 'Florencia del Campo shared a fragment full of strength and rawness from <em>El nombre impropio</em>, one of the five parts that make up her non-fiction project <em>Diarios colaterales</em>.',
                    pt: 'Florencia del Campo compartilhou um fragmento carregado de força e crueza de <em>El nombre improprio</em>, uma das cinco partes que compõem seu projeto de não ficção <em>Diarios colaterales</em>.',
                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-Florencia-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-Florencia-2.jpg",
                ]
            },
            {
                id: 2,
                artist: 'Mireya Hernández',
                title: {
                    es: 'Lectura por Mireya Hernández',
                    en: 'Reading by Mireya Hernández',
                    pt: 'Leitura de Mireya Hernández'
                },
                text: {
                    // es: 'Durante la Residencia 2025, Mireya Hernández continuó trabajando en el proyecto <em>El lenguaje de las moscas</em>, en el que ya venía desarrollando trabajo previo a su estadía. <br/><br/>Lo pulió, lo desbrozó y encontró la puerta que le quedaba por abrir para concluirlo. Aún es un proyecto en proceso, pero en Finca El Azahar estuvo más cerca de convertirse en el <em>collage</em> que se intuía desde el principio: una obra heterogénea que parte de la observación, defiende lo imperfecto y lo incompleto, fomenta combinaciones inesperadas y hace del desvío su piedra angular.<br/><br/>Mireya nos deleitó con dos prosas que recogían inspiración y memorias de dentro y fuera de la residencia.',
                    // en: 'During the 2025 Residency, Mireya Hernández continued working on the project <em>The Language of Flies</em>, which she had already begun developing prior to her stay. <br/><br/>She refined it, cleared it, and found the door that remained to be opened in order to conclude it. It is still a work in progress, but at Finca El Azahar it came closer to becoming the <em>collage</em> that had been intuited from the beginning: a heterogeneous piece that stems from observation, embraces the imperfect and the incomplete, encourages unexpected combinations, and makes deviation its cornerstone.<br/><br/>Mireya delighted us with two prose texts that captured inspiration and memories from both inside and outside the residency.',
                    // pt: 'Durante a Residência 2025, Mireya Hernández continuou a trabalhar no projeto <em>A Linguagem das Moscas</em>, no qual já vinha desenvolvendo trabalho antes da sua estadia. <br/><br/>Poliu-o, desbastou-o e encontrou a porta que ainda faltava abrir para concluí-lo. Continua a ser um projeto em processo, mas na Finca El Azahar esteve mais perto de se transformar no <em>collage</em> que se intuía desde o início: uma obra heterogênea que parte da observação, defende o imperfeito e o incompleto, promove combinações inesperadas e faz do desvio a sua pedra angular.<br/><br/>Mireya encantou-nos com duas prosas que recolhiam inspirações e memórias de dentro e de fora da residência.',

                    es: 'Mireya Hernández escogió para su lectura dos prosas de su proyecto en curso <em>El lenguaje de las moscas</em>. Estos textos recogían inspiración y memorias tanto de dentro como de fuera de la residencia, asociando y entrelazando los pequeños detalles que conforman su forma de ver el mundo.',
                    en: 'Mireya Hernández chose for her reading two prose pieces from her ongoing project <em>El lenguaje de las moscas</em>. These texts drew on inspiration and memories both from within and outside the residency, associating and intertwining the small details that shape her way of seeing the world.',
                    pt: 'Mireya Hernández escolheu para a sua leitura duas prosas de seu projeto em andamento <em>El lenguaje de las moscas</em>. Esses textos recolhiam inspiração e memórias tanto de dentro quanto de fora da residência, associando e entrelaçando os pequenos detalhes que formam sua maneira de ver o mundo.',
                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-Mireya-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-Mireya-2.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-Mireya-3.jpg",
                ]
            },
            {
                id: 3,
                artist: 'Gonzalo Quincoces',
                title: {
                    es: 'Lectura por Gonzalo Quincoces',
                    en: 'Reading by Gonzalo Quincoces',
                    pt: 'Leitura de Gonzalo Quincoces'
                },
                text: {
                    // es: 'Gonzalo Quincoces presentó el inicio del guión de <em>La noche del coche rojo</em>, su próximo largometraje aún en desarrollo.<br/><br/>Este proyecto tiene como escenario una turbia y grisácea Bizkaia, marcada por los conflictos sociales y el terrorismo de los años 80, un contexto que ya exploró en su anterior cortometraje <em>La caída del vencejo</em>. La residencia le permitió profundizar en la dirección de este guión y afianzar la propuesta de dirección del proyecto.',
                    // en: 'Gonzalo Quincoces presented the beginning of the script for <em>The Night of the Red Car</em>, his upcoming feature film still in development.<br/><br/>This project is set in a murky, grayish Bizkaia, marked by the social conflicts and terrorism of the 1980s, a context he had already explored in his previous short film <em>The Fall of the Swift</em>. The residency allowed him to delve deeper into the direction of this script and to strengthen the directorial approach of the project.',
                    // pt: 'Gonzalo Quincoces apresentou o início do guião de <em>A Noite do Carro Vermelho</em>, a sua próxima longa-metragem ainda em desenvolvimento.<br/><br/>Este projeto tem como cenário uma Bizkaia turva e acinzentada, marcada pelos conflitos sociais e pelo terrorismo dos anos 80, um contexto que já havia explorado na sua curta-metragem anterior <em>A Queda do Andorinhão</em>. A residência permitiu-lhe aprofundar a direção deste guião e consolidar a proposta de realização do projeto.',

                    es: 'Gonzalo Quincoces leyó con brío las primeras secuencias de su guión <em>La noche del coche rojo</em>, su primer largometraje en desarrollo, transportando a los oyentes a una turbia y grisácea Vizcaya de los años 80.',
                    en: 'Gonzalo Quincoces read with vigor the opening sequences of his script <em>La noche del coche rojo</em>, his first feature film in development, transporting the audience to a murky and grayish Biscay of the 1980s.',
                    pt: 'Gonzalo Quincoces leu com ímpeto as primeiras sequências de seu roteiro <em>La noche del coche rojo</em>, seu primeiro longa-metragem em desenvolvimento, transportando os ouvintes para uma turva e acinzentada Biscaia dos anos 80.',
                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-Quincoces-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-Quincoces-2.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-Quincoces-3.jpg",
                ]
            },
            {
                id: 4,
                artist: 'Maria Gallemí',
                title: {
                    es: 'Presentación con María Gallemí',
                    en: 'Presentation with María Gallemí',
                    pt: 'Apresentação com María Gallemí'
                },
                text: {
                    // es: 'Nuestra residente Maria Gallemí presentó el proceso de su proyecto «Escorça». Su investigación gira en torno a la repostería como herramienta de búsqueda y exploración.<br/><br/>Gallemí tomó fotografías del entorno de Finca El Azahar —como líquenes, reflejos de luz o las crestas de los gallos— que le sirvieron como punto de partida visual para lo que luego desarrollaría en la cocina: una repostería innovadora donde no priman ingredientes como la harina o el azúcar, sino la experiencia de la novedad en el paladar y el ritual del postre compartido.<br/><br/>Para la Expo, creó un rincón que reunía las fotografías de sus referencias y los postres desarrollados, ademas de una pequeña instalación comestible que difuminaba los límites entre la naturaleza y lo culinario.',
                    // en: 'Our resident Maria Gallemí presented the process behind her project «Escorça». Her research revolves around pastry as a tool for inquiry and exploration.<br/><br/>Gallemí took photographs of the surroundings of Finca El Azahar —such as lichens, light reflections, or rooster crests— which served as a visual starting point for what she would later develop in the kitchen: an innovative pastry where ingredients like flour or sugar are not the main focus, but rather the experience of novelty on the palate and the ritual of sharing dessert.<br/><br/>For the Expo, she created a corner that brought together the photographs of her references and the pastries she developed, along with a small edible installation that blurred the boundaries between nature and the culinary.',
                    // pt: 'Nossa residente Maria Gallemí apresentou o processo do seu projeto «Escorça». Sua pesquisa gira em torno da confeitaria como ferramenta de busca e exploração.<br/><br/>Gallemí tirou fotografias do entorno da Finca El Azahar —como líquenes, reflexos de luz ou as cristas dos galos— que lhe serviram de ponto de partida visual para o que depois desenvolveria na cozinha: uma confeitaria inovadora em que ingredientes como a farinha ou o açúcar não são o principal, mas sim a experiência da novidade no paladar e o ritual da sobremesa compartilhada.<br/><br/>Para a Expo, criou um espaço que reunia as fotografias de suas referências e as sobremesas desenvolvidas, além de uma pequena instalação comestível que desfocava os limites entre a natureza e o culinário.'

                    es: 'Maria Gallemí sorprendió con un espacio en el que la repostería se convirtió en herramienta conceptual de búsqueda y exploración. Su instalación incluía fotografías de sus referencias y los postres desarrollados durante la residencia, además de una deliciosa instalación comestible que difuminaba los límites entre la naturaleza y lo culinario.',
                    en: 'Maria Gallemí surprised with a space where pastry became a conceptual tool for research and exploration. Her installation included photographs of her references and the desserts developed during the residency, as well as a delicious edible installation that blurred the boundaries between nature and the culinary.',
                    pt: 'Maria Gallemí surpreendeu com um espaço em que a confeitaria se tornou uma ferramenta conceitual de busca e exploração. Sua instalação incluía fotografias de suas referências e as sobremesas desenvolvidas durante a residência, além de uma deliciosa instalação comestível que desfocava os limites entre a natureza e o culinário.',
                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-7.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-2.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-3.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-4.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-5.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaGallemi-6.jpg",
                ]
            },
            {
                id: 5,
                artist: 'María Esteve',
                title: {
                    es: 'Presentación con María Esteve',
                    en: 'Presentation with María Esteve',
                    pt: 'Apresentação com María Esteve'
                },
                text: {
                    // es: 'María Esteve presentó <em>Donde la tierra habla</em>, un conjunto de obras sobre papel y tela, acompañado de un vídeo que documentaba su proceso.<br/><br/>Para María, un nuevo territorio despierta estímulos y sensaciones inéditas. La primera mirada, la sorpresa y la exploración de lo desconocido resultan esenciales en esta experiencia. Diversas expediciones y paseos le permitieron conocer y sentir el entorno, adoptando el caminar como una práctica artística guiada por la intuición y la confianza.<br/><br/>A través de la técnica del <em>frottage</em>, María registró las texturas del paisaje que rodea Finca El Azahar y las minas a cielo abierto en Las Villuercas. Su trabajo parte del contacto directo con la tierra, donde el papel y las telas se transforman en cartografías y memoria de esa naturaleza.',
                    // en: 'María Esteve presented <em>Where the Earth Speaks</em>, a series of works on paper and fabric, accompanied by a video documenting her process.<br/><br/>For María, a new territory awakens stimuli and unprecedented sensations. The first gaze, surprise, and the exploration of the unknown are essential to this experience. Various expeditions and walks allowed her to get to know and feel the environment, adopting walking as an artistic practice guided by intuition and trust.<br/><br/>Through the technique of <em>frottage</em>, María captured the textures of the landscape surrounding Finca El Azahar and the open-pit mines in Las Villuercas. Her work stems from direct contact with the earth, where paper and fabrics are transformed into cartographies and memory of that nature.',
                    // pt: 'María Esteve apresentou <em>Onde a Terra Fala</em>, um conjunto de obras sobre papel e tecido, acompanhado de um vídeo que documentava o seu processo.<br/><br/>Para María, um novo território desperta estímulos e sensações inéditas. O primeiro olhar, a surpresa e a exploração do desconhecido são essenciais nesta experiência. Diversas expedições e passeios permitiram-lhe conhecer e sentir o ambiente, adotando a caminhada como prática artística guiada pela intuição e pela confiança.<br/><br/>Através da técnica do <em>frottage</em>, María registou as texturas da paisagem que rodeia a Finca El Azahar e as minas a céu aberto em Las Villuercas. O seu trabalho parte do contacto direto com a terra, onde o papel e os tecidos se transformam em cartografias e memória dessa natureza.',

                    es: 'María Esteve transformó una sala en un nuevo territorio titulado <em>Donde la tierra habla</em>, a partir de un registro de texturas del paisaje y un video que mostraba sus procesos en los parajes que rodean Finca El Azahar y en las minas a cielo abierto de Las Villuercas. A través de la técnica del <em>frottage</em> y el contacto directo con la tierra, el papel y las telas se convirtieron en cartografías y memoria de esa naturaleza.',
                    en: 'María Esteve transformed a room into a new territory entitled <em>Donde la tierra habla</em>, based on a record of landscape textures and a video showing her processes in the surroundings of Finca El Azahar and in the open-pit mines of Las Villuercas. Through the technique of <em>frottage</em> and direct contact with the earth, paper and fabrics became cartographies and memory of that nature.',
                    pt: 'María Esteve transformou uma sala em um novo território intitulado <em>Donde la tierra habla</em>, a partir de um registro de texturas da paisagem e de um vídeo que mostrava seus processos nos arredores da Finca El Azahar e nas minas a céu aberto de Las Villuercas. Através da técnica do <em>frottage</em> e do contato direto com a terra, o papel e os tecidos se transformaram em cartografias e memória dessa natureza.',

                },
                images: [
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-1.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-2.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-7.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-3.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-4.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-5.jpg",
                    "/Images/Exhibitions/Exhibition01/Expo-MariaEsteve-6.jpg",
                ]
            },
        ],

        preSaleTitle: {
            es: 'Preventa <em>Una residencia narrada por: Iván Floro</em>',
            en: 'Pre-sale <em>A Residency Narrated by: Iván Floro</em>',
            pt: 'Pré-venda <em>Uma Residência Narrada por: Iván Floro</em>',
        },

        preSaleImage: "/Images/Exhibitions/Exhibition01/Gallery/Gallery-1.jpg",

        preSaleImage2: "/Images/Publications/Publication01/Pub-Cuadros.jpg",

        preSaleText: {
            es: 'También se llevó a cabo la preventa de <em>Una residencia narrada por Ivan Floro</em>, la primera publicación de Fundación Azar, que reúne los óleos y dibujos realizados por el artista como cronista visual de la residencia. Durante la exposición, Ivan dedicó cada ejemplar vendido con dibujos únicos, convirtiendo cada libro en una pieza irrepetible.',
            en: 'The pre-sale of <em>A Residency Narrated by Ivan Floro</em> also took place, marking the first publication of Fundación Azar. The book brings together the oil paintings and drawings created by the artist as the visual chronicler of the residency. During the exhibition, Ivan personalized each copy sold with unique drawings, turning every book into a one-of-a-kind piece.',
            pt: 'Também ocorreu a pré-venda de <em>Uma Residência Narrada por Ivan Floro</em>, a primeira publicação da Fundação Azar, que reúne as pinturas a óleo e os desenhos realizados pelo artista como cronista visual da residência. Durante a exposição, Ivan dedicou cada exemplar vendido com desenhos únicos, transformando cada livro numa peça irrepetível.',
        },
        publicaciones: ["pub-1"],
        gallery: [
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-3.jpg",

            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-2.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-9.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-10.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-4.jpg",
            "/Images/Exhibitions/Exhibition01/expo2025-2.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-6.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-7.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-8.jpg",
            // "/Images/Exhibitions/Exhibition01/Gallery/Gallery-9.jpg",
            // "/Images/Exhibitions/Exhibition01/Gallery/Gallery-10.jpg",
            "/Images/Exhibitions/Exhibition01/Gallery/Gallery-5.jpg",
        ],
        // byeByeText: {
        //     es: '<br/>El éxito de Expo Residencia2025 no habría sido posible sin vuestra presencia y apoyo.<br/>¡Gracias y nos vemos en la próxima edición!',
        //     en: '<br/>The success of Expo Residencia2025 would not have been possible without your presence and support.<br/>Thank you, and see you at the next edition!',
        //     pt: '<br/>O sucesso da Expo Residencia2025 não teria sido possível sem a vossa presença e apoio.<br/>Obrigado e até à próxima edição!',
        // },
        byeByeText: {
            es: "",
            en: "",
            pt: ""
        },
        date: '2025-06-18'
    },









    {
        id: "expo-2",
        imageRef: "",
        image: "/Images/Exhibitions/Exhibition02/libro1bien.webp",
        imageDetail: "/Images/Exhibitions/Exhibition02/2.webp",
        imageDetail2: "/Images/Exhibitions/Exhibition02/3.webp",
        bgImage: "/Images/Exhibitions/Exhibition02/bg-expo2.webp",
        imagesAuthor: "",
        title: {
            es: "Presentación de <em>Una residencia narrada por Ivan Floro</em>",
            "en": "Presentation of <em>A Residency Narrated by Ivan Floro</em>",
            "pt": "Apresentação de <em>Uma residência narrada por Ivan Floro</em>"
        },
        subtitle: {
            es: "",
            en: "",
            pt: ""
        },
        venue: {
            es: "",
            en: "",
            pt: ""
        },
        curator: {
            es: "",
            en: "",
            pt: ""
        },
        description: {
            es: "Presentación en Barcelona del libro resultado de la Residencia2025.",
            en: "Presentation in Barcelona of the book resulting from Residencia2025.",
            pt: "Apresentação em Barcelona do livro resultante da Residencia2025."
        },

        className: "exhibition-card",
        year: 2026,
        startDate: "2026-06-17",
        endDate: "2026-06-17",
        residencias: [""],
        publicaciones: [""],
        collectiveArtPiece: [""],

        introTitle: {
            es: '',
            en: '',
            pt: '',
        },

        intro: {
            es: '<em>Una residencia narrada por Ivan Floro</em> es un libro que recoge las obras pintadas del natural durante la residencia artística celebrada en Extremadura en enero de 2025. Para dar a conocer la publicación y acercarla a la ciudad natal del joven pintor catalán, el pasado 17 de junio hicimos una presentación en el Trent Studio donde la gente pudo conocer al artista, su obra y adentrarse en la primera edición del programa de residencias de Fundación Azar llevándose consigo un ejemplar firmado.',
            en: "<em>Una residencia narrada por Ivan Floro</em> is a book that brings together the works painted from life during the artist residency held in Extremadura in January 2025. To launch the publication and bring it to the young Catalan painter's hometown, on 17 June we held a presentation at Trent Studio, where people were able to meet the artist and his work, discover the first edition of Fundación Azar's residency programme and take home a signed copy.",
            pt: '<em>Una residencia narrada por Ivan Floro</em> é um livro que reúne as obras pintadas ao natural durante a residência artística realizada na Extremadura em janeiro de 2025. Para dar a conhecer a publicação e aproximá-la da cidade natal do jovem pintor catalão, no passado dia 17 de junho fizemos uma apresentação no Trent Studio, onde o público pôde conhecer o artista e a sua obra, mergulhar na primeira edição do programa de residências da Fundação Azar e levar consigo um exemplar assinado.',
        },

        intro2: {
            es: '',
            en: '',
            pt: '',
        },

        preSaleTitle: {
            es: '<em>Una residencia narrada por</em> Ivan Floro',
            en: '<em>Una residencia narrada por</em> Ivan Floro',
            pt: '<em>Una residencia narrada por</em> Ivan Floro',
        },

        preSaleImage: "/Images/Exhibitions/Exhibition02/1.webp",

        preSaleImage2: "/Images/Exhibitions/Exhibition02/4.webp",

        preSaleText: {
            es: 'Ivan Floro fue invitado a ser el narrador de la Residencia2025, acompañando a las residentes en sus días y procesos creativos. Compartió sobremesas y paseos, observó los rincones y paisajes que las rodeaban y se integró en el ritmo cotidiano de la residencia. Con sus bártulos siempre a cuestas, se propuso pintar todo del natural: «sin recurrir a la fotografía como punto de partida y, así, devolverle al óleo su antiguo cometido: capturar el momento».<br/><br/><em>Una residencia narrada por Iván Floro</em> es el testimonio pictórico de esa vivencia, pero también un reflejo de la naturalidad, la curiosidad y el ritmo intuitivo que caracterizan la obra de Iván Floro.',
            en: "Ivan Floro was invited to be the narrator of Residencia2025, accompanying the residents through their days and creative processes. He shared long meals and walks, observed the corners and landscapes around them and became part of the daily rhythm of the residency. With his materials always at hand, he set out to paint everything from life: “without resorting to photography as a starting point and, in this way, giving oil painting back its old purpose: to capture the moment.”<br/><br/><em>Una residencia narrada por Iván Floro</em> is the pictorial record of that experience, but also a reflection of the naturalness, curiosity and intuitive rhythm that characterise Iván Floro's work.",
            pt: 'Ivan Floro foi convidado a ser o narrador da Residencia2025, acompanhando os residentes nos seus dias e processos criativos. Partilhou longas conversas à mesa e passeios, observou os recantos e paisagens que os rodeavam e integrou-se no ritmo quotidiano da residência. Com os seus apetrechos sempre às costas, propôs-se pintar tudo ao natural: «sem recorrer à fotografia como ponto de partida e, assim, devolver ao óleo a sua antiga missão: captar o momento».<br/><br/><em>Una residencia narrada por Iván Floro</em> é o testemunho pictórico dessa vivência, mas também um reflexo da naturalidad, da curiosidade e do ritmo intuitivo que caracterizam a obra de Iván Floro.',
        },
        publicaciones: ["pub-1"],
        gallery: [
            "/Images/Exhibitions/Exhibition02/mas1.webp",
            "/Images/Exhibitions/Exhibition02/mas2.webp",
            "/Images/Exhibitions/Exhibition02/mas3.webp",
            "/Images/Exhibitions/Exhibition02/mas4.webp",
            "/Images/Exhibitions/Exhibition02/mas5.webp",
        ],
        date: '2026-06-17'
        // byeByeText: {
        //     es: '',
        //     en: '',
        //     pt: '',
        //  }
    },










    {
        id: "expo-3",
        imageRef: "/Images/Exhibitions/Exhibition03/expo_resi2026.webp",
        // image: "/Images/Exhibitions/Exhibition03/cartel_expo2.webp",
        image: "/Images/Exhibitions/Exhibition03/danij1.webp",

        imageDetail: "/Images/Exhibitions/Exhibition03/danij1.webp",
        // imageDetail2: "/Images/Exhibitions/Exhibition03/danij2.webp",
        imageDetail2: "",

        bgImage: "/Images/Exhibitions/Exhibition03/expo_resi2026.webp",
        imagesAuthor: "",
        title: {
            es: "Presentación en Madrid de <em>Una visión remota</em>",
            "en": "Madrid presentation of <em>Una visión remota</em>",
            "pt": "Apresentação em Madrid de <em>Una visión remota</em>"
        },
        subtitle: {
            es: "",
            en: "",
            pt: ""
        },
        venue: {
            es: "",
            en: "",
            pt: ""
        },
        curator: {
            es: "",
            en: "",
            pt: ""
        },
        description: {
            es: "Presentación de <em>Una visión remota</em>, obra resultado de la Residencia2026, en Madrid.",
            en: "Presentation of <em>Una visión remota</em>, the work resulting from Residencia2026, in Madrid.",
            pt: "Apresentação de <em>Una visión remota</em>, obra resultante da Residencia2026, em Madrid."
        },

        className: "exhibition-card",
        year: 2026,
        startDate: "2026-06-17",
        endDate: "2026-06-17",
        residencias: ["residencia-1"],
        publicaciones: ["pub-2"],
        collectiveArtPiece: [""],

        introTitle: {
            es: '',
            en: '',
            pt: '',
        },

        intro: {
            es: '¿A qué huele la casualidad?<br/><em>Una visión remota</em> con Fundación Azar en la Finca Azahar.<br/>Por Inés Alonso Jarabo<br/><br/><b>Llegamos a los jardines de la politécnica, nos habían citado aquí a las 20:45, todo cambia de noche.</b> Un camino de farolillos nos guiaba al Acto I, una instalación transitable franqueada por grandes telones. En su interior, un render proyectado en una pantalla giraba sobre sí mismo mientras el sonido de una fuerte borrasca se mezclaba con breves susurros de calma. Era un cepellón, <b>la representación vectorial de un  cepellón</b>, una especie de masa que normalmente no vemos, formada bajo tierra por las  raíces de los árboles. Esta forma solo era discernible al transitar la instalación, llena de  troncos y ramas, y al fondo el cepellón, la ilusión del cepellón, su representación. <b>Pienso  en Deleuze y Guattari, en su rizoma y en lo arborescente de nuestra civilización.</b> Nos  invitan a pasar al Acto II así que atravesamos los jardines casi en penumbra, guiados por  esos farolillos y miembros del equipo hasta llegar a una especie de rotonda. El centro de  la rotonda está elevado, rodeado de cipreses en una perfecta vertical al cielo creando  una especie de tholos. <b>Nos colocamos alrededor para ver no sabemos muy bien qué.</b> En el centro de la rotonda está el cepellón, el de verdad, un cepellón enorme. En escena,  una mujer con mono de trabajo va moviendo ramas de un lado a otro, aparece un ángel,  un ángel con alas de ciprés que le golpean desde los lados, un Dioniso con corona de  ciprés y otro personaje que ponía la luz en la escena, enfocando con su foco como una  mirada ajena. <b>La música, las luces estroboscópicas, todo es como una gran tormenta.  </b><br/><br/>Averiguamos después que de hecho sí, era una tormenta. Nos había citado aquí la <b>Fundación Azar de las Artes, fundada por la productora de cine independiente Nathalie Trafford y el director de artes escénicas Denis Curty, con Paula G. Gener como  directora.</b> Con el objetivo de crear una obra conjunta, la Fundación Azar acoge una vez  al año a artistas de diferentes disciplinas en la Finca El Azahar, en un bonito y poco casual  juego de palabras. Esta vez fue el turno de <b>Telma João Santos</b>, doctora en Matemáticas  y en Artes Performáticas, <b>Natividad Martín</b>, posgraduada en Bellas Artes y bailarina, <b>Ana  Mortera Herrero</b>, artista multidisciplinar e <b>Izarne Oyarzabal</b>, arquitecta y bailarina. Esta  variada mezcla responde al enfoque particular de esta residencia: <b>la polinización  cruzada</b>. Desde 2024, Fundación Azar busca combinar distintas disciplinas y conceptos  artísticos para cada residencia creando una amalgama que junto con la selección de  artistas derive en la creación de una obra colectiva fruto de ese encuentro, resultado de  la unión de sus diferentes campos y visiones. <b>Fantasmata</b>, la residencia de este año, estaba enfocada a creadores relacionados con la danza, las matemáticas y la naturaleza  para el desarrollo de obras artísticas. <b>El objetivo es que los residentes creen una obra  colectiva fruto de la intersección entre sus diferentes campos y visiones, algo que este  año se vio marcado por la borrasca Kristin.</b> Aquello que vimos en los jardines de la  politécnica en fue el resultado de esta residencia en varios actos, un conjunto de  dispositivos para generar un resultado material del tiempo compartido. “Nos sentimos  como cuatro seres en un manicomio, es decir, un universo muy interesante, pero le  faltaba una especie de refugio sin locura o un pasaje a un lugar distinto a este”, escribe  Telma en su diario de trabajo, lo cual podemos leer gracias a la publicación que  acompaña al proyecto. Para cada edición, <b>Fundación Azar invita a un artista que  acompaña a las residentes para luego narrar la experiencia, esta vez el encargado ha  sido Brais Rodríguez</b>, en una publicación acompañada por textos de las artistas y otros  colaboradores del proyecto como Pedro G. Romero. Gracias a esta publicación, que nos  fue entregada tras la función, comenzamos a entender la pieza. Los textos de las artistas  y colaboradores del proyecto nos dan las pistas pero es el relato ilustrado de Brais  Rodríguez lo primero que ves. <b>24 páginas con 60 viñetas cada una recogen todo un día</b> en el que no solo ilustra la tormenta, también algo más complejo, como la danza, los  pensamientos y su ausencia.  <br/><br/>Quizás fue obra del azar, que esta residencia se definiera por la danza de los  árboles, la matemática del clima y la naturaleza de esta borrasca que lo condicionó todo  esta vez en la Fundación Azar. <b>Lo que seguro no es cuestión de suerte es que estos  proyectos existan,</b> son fruto del esfuerzo y dedicación de personas que entienden lo  fundamental que es no depender del azar, contar con el apoyo de estructuras como esta  que permitan experimentar más allá, conocer el trabajo de otros y compartir el propio,  una polinización cruzada. Como señala el texto firmado por Nathalie Trafford, Denis  Curty y Paula G. Gener en la publicación mencionada: “nosotros, como ese insecto,  vamos explorando, quizás incluso extraviándonos, pero persiguiendo una meta tan  sencilla en apariencia como compleja en la práctica: interrogar la esencia de la obra de  arte”. <b>Lo importante no es la respuesta, es mantener las cuestiones artísticas abiertas. </b>',
            en: "What does chance smell like?<br/><em>Una visión remota</em> with Fundación Azar at Finca Azahar.<br/>By Inés Alonso Jarabo<br/><br/><b>We arrived at the gardens of the Polytechnic; we had been asked to meet here at 8:45 pm. Everything changes at night.</b> A path of lanterns guided us to Act I, a walk-through installation flanked by large stage curtains. Inside, a render projected onto a screen rotated on itself while the sound of a heavy storm mingled with brief whispers of calm. It was a root ball, <b>the vector representation of a root ball</b>, a kind of mass we don't usually see, formed underground by the roots of trees. This shape could only be made out by walking through the installation, full of trunks and branches, and at the back the root ball, the illusion of the root ball, its representation. <b>I think of Deleuze and Guattari, of their rhizome and the arborescence of our civilisation.</b> We are invited to move on to Act II, so we cross the gardens in near darkness, guided by the lanterns and members of the team, until we reach a kind of roundabout. The centre of the roundabout is raised, surrounded by cypresses rising in a perfect vertical towards the sky, creating a kind of tholos. <b>We gather around it to watch we're not quite sure what.</b> In the centre of the roundabout is the root ball, the real one, an enormous root ball. On stage, a woman in work overalls moves branches from one side to the other; an angel appears, an angel with cypress wings that strike it from the sides, a Dionysus with a cypress crown, and another figure who lit the scene, aiming a spotlight like an outsider's gaze. <b>The music, the strobe lights, everything is like a great storm.</b><br/><br/>We found out afterwards that, in fact, it was a storm. We had been brought here by the <b>Fundación Azar de las Artes, founded by independent film producer Nathalie Trafford and performing arts director Denis Curty, with Paula G. Gener as director.</b> With the aim of creating a joint work, Fundación Azar hosts artists from different disciplines once a year at Finca El Azahar, in a lovely and hardly accidental play on words. This time it was the turn of <b>Telma João Santos</b>, PhD in Mathematics and in Performing Arts; <b>Natividad Martín</b>, postgraduate in Fine Arts and dancer; <b>Ana Mortera Herrero</b>, multidisciplinary artist; and <b>Izarne Oyarzabal</b>, architect and dancer. This varied mix reflects the particular approach of this residency: <b>cross-pollination</b>. Since 2024, Fundación Azar has sought to combine different disciplines and artistic concepts for each residency, creating an amalgam that, together with the selection of artists, leads to a collective work born of that encounter, the result of bringing together their different fields and visions. <b>Fantasmata</b>, this year's residency, was aimed at creators connected with dance, mathematics and nature, for the development of artistic works. <b>The goal is for the residents to create a collective work born of the intersection of their different fields and visions, something that this year was marked by Storm Kristin.</b> What we saw in the gardens of the Polytechnic was the outcome of this residency in several acts, a set of devices to generate a material result of the time spent together. “We feel like four beings in a madhouse, that is, a very interesting universe, but it lacked a kind of refuge without madness, or a passage to a place different from this one,” writes Telma in her work diary, which we can read thanks to the publication that accompanies the project. For each edition, <b>Fundación Azar invites an artist to accompany the residents and later narrate the experience; this time the task fell to Brais Rodríguez</b>, in a publication accompanied by texts from the artists and other project collaborators such as Pedro G. Romero. Thanks to this publication, which was handed to us after the performance, we began to understand the piece. The texts by the artists and collaborators give us the clues, but it is Brais Rodríguez's illustrated account that you see first. <b>24 pages with 60 panels each capture an entire day</b>, in which he illustrates not only the storm but also something more complex, such as dance, thoughts and their absence.<br/><br/>Perhaps it was down to chance that this residency was defined by the dance of the trees, the mathematics of the weather and the nature of the storm that shaped everything this time at Fundación Azar. <b>What is certainly not a matter of luck is that these projects exist.</b> They are the result of the effort and dedication of people who understand how essential it is not to depend on chance, to have the support of structures like this one that make it possible to experiment further, to discover the work of others and share one's own: a cross-pollination. As the text signed by Nathalie Trafford, Denis Curty and Paula G. Gener in the aforementioned publication puts it: “we, like that insect, keep exploring, perhaps even losing our way, but pursuing a goal as simple in appearance as it is complex in practice: to question the essence of the work of art.” <b>What matters is not the answer, but keeping artistic questions open.</b>",
            pt: 'A que cheira o acaso?<br/><em>Una visión remota</em> com a Fundação Azar na Finca Azahar.<br/>Por Inés Alonso Jarabo<br/><br/><b>Chegámos aos jardins da Politécnica, tinham-nos marcado encontro aqui às 20h45, tudo muda à noite.</b> Um caminho de lanternas guiava-nos até ao Ato I, uma instalação percorrível ladeada por grandes panos de cena. No seu interior, um render projetado num ecrã girava sobre si mesmo enquanto o som de uma forte tempestade se misturava com breves sussurros de calma. Era um torrão, <b>a representação vetorial de um torrão</b>, uma espécie de massa que normalmente não vemos, formada debaixo da terra pelas raízes das árvores. Esta forma só se tornava discernível ao percorrer a instalação, cheia de troncos e ramos, e ao fundo o torrão, a ilusão do torrão, a sua representação. <b>Penso em Deleuze e Guattari, no seu rizoma e no caráter arborescente da nossa civilização.</b> Convidam-nos a passar ao Ato II, por isso atravessamos os jardins quase na penumbra, guiados por essas lanternas e por membros da equipa, até chegarmos a uma espécie de rotunda. O centro da rotunda é elevado, rodeado de ciprestes numa vertical perfeita em direção ao céu, criando uma espécie de tholos. <b>Colocamo-nos à volta para ver não sabemos bem o quê.</b> No centro da rotunda está o torrão, o verdadeiro, um torrão enorme. Em cena, uma mulher de fato-macaco vai mudando ramos de um lado para o outro, aparece um anjo, um anjo com asas de cipreste que lhe batem dos lados, um Dioniso com coroa de cipreste e outra personagem que iluminava a cena, apontando o seu foco como um olhar alheio. <b>A música, as luzes estroboscópicas, tudo é como uma grande tempestade.</b><br/><br/>Descobrimos depois que, de facto, era uma tempestade. Quem nos tinha trazido aqui era a <b>Fundação Azar de las Artes, fundada pela produtora de cinema independente Nathalie Trafford e pelo diretor de artes cénicas Denis Curty, com Paula G. Gener como diretora.</b> Com o objetivo de criar uma obra conjunta, a Fundação Azar acolhe uma vez por ano artistas de diferentes disciplinas na Finca El Azahar, num belo e pouco casual jogo de palavras. Desta vez, chegou a vez de <b>Telma João Santos</b>, doutorada em Matemática e em Artes Performativas, <b>Natividad Martín</b>, pós-graduada em Belas-Artes e bailarina, <b>Ana Mortera Herrero</b>, artista multidisciplinar, e <b>Izarne Oyarzabal</b>, arquiteta e bailarina. Esta mistura variada responde ao enfoque particular desta residência: <b>a polinização cruzada</b>. Desde 2024, a Fundação Azar procura combinar diferentes disciplinas e conceitos artísticos em cada residência, criando uma amálgama que, juntamente com a seleção de artistas, resulte numa obra coletiva fruto desse encontro, resultado da união dos seus diferentes campos e visões. <b>Fantasmata</b>, a residência deste ano, era dirigida a criadores ligados à dança, à matemática e à natureza, para o desenvolvimento de obras artísticas. <b>O objetivo é que os residentes criem uma obra coletiva fruto da interseção entre os seus diferentes campos e visões, algo que este ano ficou marcado pela tempestade Kristin.</b> Aquilo que vimos nos jardins da Politécnica foi o resultado desta residência em vários atos, um conjunto de dispositivos para gerar um resultado material do tempo partilhado. “Sentimo-nos como quatro seres num manicómio, ou seja, um universo muito interessante, mas faltava-lhe uma espécie de refúgio sem loucura ou uma passagem para um lugar diferente deste”, escreve Telma no seu diário de trabalho, que podemos ler graças à publicação que acompanha o projeto. Em cada edição, <b>a Fundação Azar convida um artista que acompanha as residentes para depois narrar a experiência; desta vez, o encarregado foi Brais Rodríguez</b>, numa publicação acompanhada por textos das artistas e de outros colaboradores do projeto, como Pedro G. Romero. Graças a esta publicação, que nos foi entregue depois da apresentação, começámos a entender a peça. Os textos das artistas e dos colaboradores do projeto dão-nos as pistas, mas é o relato ilustrado de Brais Rodríguez a primeira coisa que se vê. <b>24 páginas com 60 vinhetas cada uma registam um dia inteiro</b>, em que não ilustra apenas a tempestade, mas também algo mais complexo, como a dança, os pensamentos e a sua ausência.<br/><br/>Talvez tenha sido obra do acaso que esta residência se definisse pela dança das árvores, pela matemática do clima e pela natureza desta tempestade que tudo condicionou desta vez na Fundação Azar. <b>O que certamente não é uma questão de sorte é que estes projetos existam.</b> São fruto do esforço e da dedicação de pessoas que entendem como é fundamental não depender do acaso, contar com o apoio de estruturas como esta, que permitam experimentar mais além, conhecer o trabalho dos outros e partilhar o próprio, uma polinização cruzada. Como refere o texto assinado por Nathalie Trafford, Denis Curty e Paula G. Gener na publicação mencionada: “nós, como esse inseto, vamos explorando, talvez até a perder-nos, mas a perseguir uma meta tão simples na aparência como complexa na prática: interrogar a essência da obra de arte”. <b>O importante não é a resposta, é manter as questões artísticas em aberto.</b>',



        },

        intro2: {
            es: '',
            en: '',
            pt: '',
        },


        // preSaleTitle: {
        //     es: 'Una residencia narrada por Brais Rodríguez',
        //     en: 'Una residencia narrada por Brais Rodríguez',
        //     pt: 'Una residencia narrada por Brais Rodríguez',
        // },
        preSaleTitle: {
            es: '',
            en: '',
            pt: '',
        },

        // preSaleImage: "/Images/Exhibitions/Exhibition03/publi2.webp",
        preSaleImage: "",
        preSaleImage2: "",

        preSaleText: {
            //     es: "Para cada edición, <b>Fundación Azar invita a un artista que  acompaña a las residentes para luego narrar la experiencia, esta vez el encargado ha  sido Brais Rodríguez</b>, en una publicación acompañada por textos de las artistas y otros  colaboradores del proyecto como Pedro G. Romero. Gracias a esta publicación, que nos  fue entregada tras la función, comenzamos a entender la pieza. Los textos de las artistas  y colaboradores del proyecto nos dan las pistas pero es el relato ilustrado de Brais  Rodríguez lo primero que ves. <b>24 páginas con 60 viñetas cada una recogen todo un día</b> en el que no solo ilustra la tormenta, también algo más complejo, como la danza, los  pensamientos y su ausencia.  <br/><br/>Quizás fue obra del azar, que esta residencia se definiera por la danza de los  árboles, la matemática del clima y la naturaleza de esta borrasca que lo condicionó todo  esta vez en la Fundación Azar. <b>Lo que seguro no es cuestión de suerte es que estos  proyectos existan,</b> son fruto del esfuerzo y dedicación de personas que entienden lo  fundamental que es no depender del azar, contar con el apoyo de estructuras como esta  que permitan experimentar más allá, conocer el trabajo de otros y compartir el propio,  una polinización cruzada. Como señala el texto firmado por Nathalie Trafford, Denis  Curty y Paula G. Gener en la publicación mencionada: “nosotros, como ese insecto,  vamos explorando, quizás incluso extraviándonos, pero persiguiendo una meta tan  sencilla en apariencia como compleja en la práctica: interrogar la esencia de la obra de  arte”. <b>Lo importante no es la respuesta, es mantener las cuestiones artísticas abiertas. </b>",
            //     en: "For each edition, <b>Fundación Azar invites an artist to accompany the residents and later narrate the experience; this time the task fell to Brais Rodríguez</b>, in a publication accompanied by texts from the artists and other project collaborators such as Pedro G. Romero. Thanks to this publication, which was handed to us after the performance, we began to understand the piece. The texts by the artists and collaborators give us the clues, but it is Brais Rodríguez's illustrated account that you see first. <b>24 pages with 60 panels each capture an entire day</b>, in which he illustrates not only the storm but also something more complex, such as dance, thoughts and their absence.<br/><br/>Perhaps it was down to chance that this residency was defined by the dance of the trees, the mathematics of the weather and the nature of the storm that shaped everything this time at Fundación Azar. <b>What is certainly not a matter of luck is that these projects exist.</b> They are the result of the effort and dedication of people who understand how essential it is not to depend on chance, to have the support of structures like this one that make it possible to experiment further, to discover the work of others and share one's own: a cross-pollination. As the text signed by Nathalie Trafford, Denis Curty and Paula G. Gener in the aforementioned publication puts it: “we, like that insect, keep exploring, perhaps even losing our way, but pursuing a goal as simple in appearance as it is complex in practice: to question the essence of the work of art.” <b>What matters is not the answer, but keeping artistic questions open.</b>",
            //     pt: 'Em cada edição, <b>a Fundação Azar convida um artista que acompanha as residentes para depois narrar a experiência; desta vez, o encarregado foi Brais Rodríguez</b>, numa publicação acompanhada por textos das artistas e de outros colaboradores do projeto, como Pedro G. Romero. Graças a esta publicação, que nos foi entregue depois da apresentação, começámos a entender a peça. Os textos das artistas e dos colaboradores do projeto dão-nos as pistas, mas é o relato ilustrado de Brais Rodríguez a primeira coisa que se vê. <b>24 páginas com 60 vinhetas cada uma registam um dia inteiro</b>, em que não ilustra apenas a tempestade, mas também algo mais complexo, como a dança, os pensamentos e a sua ausência.<br/><br/>Talvez tenha sido obra do acaso que esta residência se definisse pela dança das árvores, pela matemática do clima e pela natureza desta tempestade que tudo condicionou desta vez na Fundação Azar. <b>O que certamente não é uma questão de sorte é que estes projetos existam.</b> São fruto do esforço e da dedicação de pessoas que entendem como é fundamental não depender do acaso, contar com o apoio de estruturas como esta, que permitam experimentar mais além, conhecer o trabalho dos outros e partilhar o próprio, uma polinização cruzada. Como refere o texto assinado por Nathalie Trafford, Denis Curty e Paula G. Gener na publicação mencionada: “nós, como esse inseto, vamos explorando, talvez até a perder-nos, mas a perseguir uma meta tão simples na aparência como complexa na prática: interrogar a essência da obra de arte”. <b>O importante não é a resposta, é manter as questões artísticas em aberto.</b>',
            es: '',
            en: '',
            pt: '',

        },
        publicaciones: ["pub-2"],
        gallery: [
            "/Images/Exhibitions/Exhibition03/expo_resi2026.webp",
            "/Images/Exhibitions/Exhibition03/danij1.webp",
            "/Images/Exhibitions/Exhibition03/danij2.webp",
            "/Images/Exhibitions/Exhibition03/danij3.webp",
            "/Images/Exhibitions/Exhibition03/danij4.webp",
            "/Images/Exhibitions/Exhibition03/danij5.webp",
            "/Images/Exhibitions/Exhibition03/danij6.webp",
            "/Images/Exhibitions/Exhibition03/danij7.webp",
        ],
        date: '2026-09-17'
        // byeByeText: {
        //     es: '',
        //     en: '',
        //     pt: '',
        //  }
    },

]