export const mockResidencias = [
    {
        id: "residencia-1",
        // imageR: "/Images/Header/HeaderResidencia.jpg",
        imageR: "/Images/Residencies/Residency01/PortadaResi.jpg",

        image: "/Images/Residencies/Residency01/CartelResidencia1.jpg",


        title: {
            es: "Residencia2025",
            en: "2025Residency",
            pt: "Residência2025"
        },
        title2: {
            es: 'Escritura,<br/>Fotografía, <br/> y Cocina',
            en: 'Writing,<br/>Photography, <br/> and Cooking',
            pt: 'Escrita,<br/>Fotografia, <br/> e Culinária'
        },
        subtitle: {
            es: "Trujillo, Extremadura • Enero 2025",
            en: "Trujillo, Extremadura • January 2025",
            pt: "Trujillo, Extremadura • Janeiro 2025"
        },
        location: {
            es: "Trujillo, Extremadura",
            en: "Trujillo, Extremadura",
            pt: "Trujillo, Extremadura"
        },
        description: {
            es: "Primera edición del programa de residencias, que reunió la escritura, la fotografía y la cocina.",
            en: "First edition of the residency program, which brought together writing, photography, and cooking.",
            pt: "Primeira edição do programa de residências, que reuniu a escrita, a fotografia e a culinária."
        },
        textR: {
            es: 'El pasado enero de 2025, Fundación Azar celebró su <b>primera residencia</b> artística en la Finca El Azahar. Durante <b>tres semanas, seis residentes</b> — Florencia del Campo, María Esteve, Maria Gallemí, Mireya Hernández, Manuel Nieto y Gonzalo Quincoces— compartieron un espacio de creación, diálogo y convivencia. El proceso de selección comenzó con una <b>convocatoria abierta a nivel nacional</b>, dirigida a quienes trabajaran desde o a través de la escritura, la fotografía o la cocina.<br/><br/>',
            en: "In January 2025, Fundación Azar held its <b>first artist residency</b> at Finca El Azahar. For <b>three weeks, six residents</b> — Florencia del Campo, María Esteve, Maria Gallemí, Mireya Hernández, Manuel Nieto, and Gonzalo Quincoces — shared a space of creation, dialogue, and coexistence. The selection process began with a <b>nationwide open call</b>, aimed at those working from or through writing, photography, or cooking.<br/><br/>",
            pt: "Em janeiro de 2025, a Fundação Azar realizou a sua <b>primeira residência</b> artística na Finca El Azahar. Durante <b>três semanas, seis residentes</b> — Florencia del Campo, María Esteve, Maria Gallemí, Mireya Hernández, Manuel Nieto e Gonzalo Quincoces — partilharam um espaço de criação, diálogo e convivência. O processo de seleção começou com uma <b>convocatória aberta a nível nacional</b>, dirigida àqueles que trabalhassem a partir ou através da escrita, da fotografia ou da culinária.<br/><br/>"
        },
        jurado: {
            es: 'Cinco de los participantes fueron seleccionados por un <b>jurado</b> compuesto por: Carmen Giménez (conservadora de arte), Ray Loriga (escritor), Marcos Giralt Torrente (escritor), Ignacio Tirado (cocinero) y Luis Asín (fotógrafo). Además, la Fundación invitó directamente a un sexto residente.<br/><br/>',
            en: "Five of the participants were selected by a <b>jury</b> composed of: Carmen Giménez (art curator), Ray Loriga (writer), Marcos Giralt Torrente (writer), Ignacio Tirado (chef), and Luis Asín (photographer). In addition, the Foundation directly invited a sixth resident.<br/><br/>",
            pt: "Cinco dos participantes foram selecionados por um <b>júri</b> composto por: Carmen Giménez (curadora de arte), Ray Loriga (escritor), Marcos Giralt Torrente (escritor), Ignacio Tirado (cozinheiro) e Luis Asín (fotógrafo). Além disso, a Fundação convidou diretamente um sexto residente.<br/><br/>"
        },
        textR2: {
            es: 'Cada residente llegó con un proyecto bajo el brazo o una idea en ciernes, buscando en este paréntesis en el tiempo una pausa fértil. La intención de esta residencia era que su paso por ella supusiera <b>un punto de inflexión en sus proyectos individuales:</b> un lugar donde poner en valor la investigación, la exploración y el proceso creativo. Durante su estancia, participaron en talleres y contaron con el acompañamiento del cineasta Javier Rebollo.',
            en: "Each resident arrived with a project in hand or an idea in the making, seeking in this pause in time a fertile interlude. The intention of this residency was for their stay to mark <b>a turning point in their individual projects:</b> a place to value research, exploration, and the creative process. During their stay, they took part in workshops and benefited from the guidance of filmmaker Javier Rebollo.",
            pt: "Cada residente chegou com um projeto debaixo do braço ou uma ideia em gestação, buscando neste parêntese no tempo uma pausa fértil. A intenção desta residência era que a sua passagem por ela representasse <b>um ponto de inflexão nos seus projetos individuais:</b> um lugar para valorizar a investigação, a exploração e o processo criativo. Durante a estadia, participaram em oficinas e contaram com o acompanhamento do cineasta Javier Rebollo."
        },
        residents: [
            {
                id: 1,
                image: '/Images/Residencies/Residency01/Participants/Florencia.jpg',
                name: 'Florencia del Campo',
                origin: {
                    es: 'Buenos Aires, Argentina',
                    en: 'Buenos Aires, Argentina',
                    pt: 'Buenos Aires, Argentina'
                },
                artPieceName: {
                    es: 'Diarios Colaterales',
                    en: '',
                    pt: ''
                },
                artPieceType: {
                    es: '«Autorrelato»',
                    en: "«Self-narrative»",
                    pt: "«Autorrelato»"
                },
                artPieceDescription: {
                    es: '“<em>Diarios colaterales</em> es un proyecto de no ficción dividido en cinco partes. La primera es un «No me acuerdo». La segunda es un diario de los sueños. La tercera parte se llama «El nombre impropio» y pretende ser una reexión sobre el nombre, los modos en que nos llaman o llamamos. La cuarta parte re exiona sobre el formato lista: de películas, de libros, de nombres... La quinta parte retoma la tradición del autorretratoliterario, al estilo Édouard Levé, pero será un «Autorrelato».”',
                    en: "“<em>Collateral Diaries</em> is a non-fiction project divided into five parts. The first is a «I Don't Remember». The second is a dream diary. The third part is called «The Improper Name» and aims to reflect on the name, the ways we are called or call others. The fourth part reflects on the list format: of films, books, names... The fifth part revisits the tradition of the literary self-portrait, in the style of Édouard Levé, but it will be a «Self-narrative».”",
                    pt: "“<em>Diários colaterais</em> é um projeto de não ficção dividido em cinco partes. A primeira é um «Não me lembro». A segunda é um diário de sonhos. A terceira parte chama-se «O nome impróprio» e pretende refletir sobre o nome, as formas como somos chamados ou chamamos outros. A quarta parte reflete sobre o formato lista: de filmes, livros, nomes... A quinta parte retoma a tradição do autorretrato literário, ao estilo de Édouard Levé, mas será um «Autorrelato».”"
                }
            },
            {
                id: 2,
                image: '/Images/Residencies/Residency01/Participants/MariaEsteve.jpg',
                name: 'María Esteve',
                origin: {
                    es: 'Valencia, España',
                    en: "Valencia, Spain",
                    pt: "Valência, Espanha"
                },
                artPieceName: {
                    es: 'Donde la tierra habla',
                    en: "Where the Earth Speaks",
                    pt: "Onde a Terra Fala"
                },
                artPieceType: {
                    es: 'Land art, «frottage», video, fotografía',
                    en: "Land art, «frottage», video, photography",
                    pt: "Land art, «frottage», vídeo, fotografia"
                },
                artPieceDescription: {
                    es: '“Encinas y alcornoques se alzan, mientras grandes rocas emergen como testigos del tiempo. Un nuevo territorio despierta sensaciones inéditas. Diversas expediciones y paseos permiten sentir el entorno, adoptando el caminar como una práctica artística guiada por la intuición. Ruinas y lugares abandonados surgen como vestigios de un pasado que merece ser recordado. La contemplación exige tiempo. La lluvia, la niebla y el viento, crean escenarios que potencian la acción, sumergiendo todo en un halo de misterio. El paisaje se convierte en un espejo del mundo interior, permitiendo una relación espiritual que trasciende lo físico. Caminar sin rumbo permite entregarse y perderse. Caminar se convierte en un rito, una obra en sí misma.”',
                    en: "“Holm oaks and cork oaks rise, while large rocks emerge as witnesses of time. A new territory awakens unprecedented sensations. Various expeditions and walks allow one to feel the surroundings, adopting walking as an artistic practice guided by intuition. Ruins and abandoned places appear as vestiges of a past worth remembering. Contemplation demands time. Rain, fog, and wind create scenarios that enhance the experience, immersing everything in a halo of mystery. The landscape becomes a mirror of the inner world, allowing a spiritual connection that transcends the physical. Walking without direction allows surrendering and getting lost. Walking becomes a ritual, a work of art in itself.”",
                    pt: "“Azinheiras e sobreiros erguem-se, enquanto grandes rochas emergem como testemunhas do tempo. Um novo território desperta sensações inéditas. Diversas expedições e passeios permitem sentir o ambiente, adotando a caminhada como uma prática artística guiada pela intuição. Ruínas e lugares abandonados surgem como vestígios de um passado que merece ser lembrado. A contemplação exige tempo. A chuva, o nevoeiro e o vento criam cenários que potencializam a ação, mergulhando tudo em um halo de mistério. A paisagem torna-se um espelho do mundo interior, permitindo uma relação espiritual que transcende o físico. Caminhar sem rumo permite entregar-se e perder-se. Caminhar torna-se um rito, uma obra em si mesma.”"
                }
            },
            {
                id: 3,
                image: '/Images/Residencies/Residency01/Participants/Mireya.jpg',
                name: 'Mireya Hernández',
                origin: {
                    es: 'Madrid, España',
                    en: "Madrid, Spain",
                    pt: "Madrid, Espanha"
                },
                artPieceName: {
                    es: "El lenguaje de las moscas",
                    en: "The Language of Flies",
                    pt: "A Linguagem das Moscas"
                },
                artPieceType: {
                    es: 'Prosas',
                    en: "Prose",
                    pt: "Prosas"
                },
                artPieceDescription: {
                    es: "“<em>El lenguaje de las moscas</em> es el título provisional de una colección de textos breves inspirados en noticias, citas, canciones, fotos, vivencias y escenas de la vida cotidiana. Las prosas, cuentos y fragmentos de un diario que componen la obra reflejan las impresiones de alguien que acaba de llegar a otro país y los recuerdos que le asaltan mientras está lejos de casa. Se trata a la vez de un ejercicio de memoria, de un registro del día a día, de un juego «oulipiano» con tintes surrealistas y de una reflexión sobre temas como la muerte, la nostalgia de lo perdido o la obsesión por el paso del tiempo. También está muy presente la temática rural: la vida en el campo no vista como la arcadia que nos hará ser más dichosos sino como un lugar hostil que a veces imposibilita el avance, aunque también hay momentos de escarbar en la propia experiencia y sacar piedras preciosas que el tiempo ha vuelto casi invisibles.”",
                    en: "“<em>The Language of Flies</em> is the provisional title of a collection of short texts inspired by news, quotes, songs, photos, experiences, and scenes from everyday life. The prose, stories, and diary fragments that make up the work reflect the impressions of someone who has just arrived in another country and the memories that come to them while away from home. It is simultaneously an exercise in memory, a record of daily life, an 'Oulipian' game with surrealist touches, and a reflection on themes such as death, nostalgia for what is lost, or obsession with the passage of time. The rural theme is also very present: life in the countryside is not seen as an idyllic arcadia that will make us happier, but as a hostile place that sometimes hinders progress, although there are also moments of digging into one’s own experience and uncovering precious stones that time has made almost invisible.”",
                    pt: "“<em>A Linguagem das Moscas</em> é o título provisório de uma coleção de textos curtos inspirados em notícias, citações, canções, fotos, experiências e cenas do cotidiano. As prosas, contos e fragmentos de diário que compõem a obra refletem as impressões de alguém que acabou de chegar a outro país e as lembranças que surgem enquanto está longe de casa. Trata-se simultaneamente de um exercício de memória, um registro do dia a dia, um jogo 'oulipiano' com toques surrealistas e uma reflexão sobre temas como a morte, a nostalgia do que se perdeu ou a obsessão pela passagem do tempo. O tema rural também está muito presente: a vida no campo não é vista como uma Arcádia que nos tornará mais felizes, mas como um lugar hostil que às vezes impede o avanço, embora também haja momentos de cavar na própria experiência e descobrir pedras preciosas que o tempo tornou quase invisíveis.”"
                }
            },
            {
                id: 4,
                image: '/Images/Residencies/Residency01/Participants/MariaGallemi.jpg',
                name: 'Maria Gallemí',
                origin: {
                    es: 'Barcelona, España',
                    en: "Barcelona, Spain",
                    pt: "Barcelona, Espanha"
                },
                artPieceName: {
                    es: 'Escorça',
                    en: "Bark",
                    pt: "Casca"
                },
                artPieceType: {
                    es: 'Repostería y fotografía',
                    en: "Pastry and photography",
                    pt: "Confeitaria e fotografia"
                },
                artPieceDescription: {
                    es: '“En su origen, este proyecto se tituló <em>Escorça</em> (corteza), aludiendo a uno de los múltiples significados del término: <em>scortae</em>, o «mantel de piel», como esa capa exterior que nos recoge y protege, pero que también nos limita. A medida que el desarrollo de la propuesta avanzaba, esa corteza comenzó a referirse menos a la piel y más a la superficie del globo terráqueo: la litosfera. Algunas de las elaboraciones resultantes surgieron del contacto directo con el entorno, y concretamente, con el sustrato. Sin darme cuenta, el proyecto se transformó en un tratado sobre aquello que ocultamos, y lo que nos oculta, o no, el propio sustrato. Sobre lo que no aprovechamos, incluso de nosotros mismos. Así, terminó configurándose como un plato-escorzo: un plato que solo muestra un “lado”. El que resulta de esta residencia, no tiene intención de repetirse jamás del mismo modo.”',
                    en: "“Originally, this project was titled <em>Escorça</em> (bark), alluding to one of the multiple meanings of the term: <em>scortae</em>, or 'skin mantle,' like that outer layer that gathers and protects us, but also limits us. As the development of the proposal progressed, that bark began to refer less to the skin and more to the Earth's surface: the lithosphere. Some of the resulting creations arose from direct contact with the environment, specifically with the substrate. Unconsciously, the project transformed into a treatise on what we hide, and what the substrate itself hides from us—or doesn’t. On what we don’t take advantage of, even within ourselves. Thus, it ended up being configured as a 'side-dish': a dish that only shows one “side.” The one resulting from this residency is not intended to be repeated in the same way ever again.”",
                    pt: "“Originalmente, este projeto foi intitulado <em>Escorça</em> (casca), aludindo a um dos múltiplos significados do termo: <em>scortae</em>, ou 'manto de pele', como aquela camada externa que nos acolhe e protege, mas que também nos limita. À medida que o desenvolvimento da proposta avançava, essa casca passou a referir-se menos à pele e mais à superfície do globo terrestre: a litosfera. Algumas das criações resultantes surgiram do contato direto com o ambiente, especificamente com o substrato. Sem perceber, o projeto transformou-se em um tratado sobre aquilo que escondemos, e o que o próprio substrato nos oculta — ou não. Sobre aquilo que não aproveitamos, inclusive em nós mesmos. Assim, terminou por se configurar como um prato-lado: um prato que só mostra um “lado”. O que resulta desta residência não tem intenção de se repetir da mesma forma jamais.”"
                }
            },
            {
                id: 5,
                image: '/Images/Residencies/Residency01/Participants/ManuelNieto.jpg',
                name: 'Manuel Nieto',
                origin: {
                    es: 'Montevideo, Uruguay',
                    en: "Montevideo, Uruguay",
                    pt: "Montevidéu, Uruguai"
                },
                artPieceName: {
                    es: '¿Dónde está papá?',
                    en: "Where is Dad?",
                    pt: "Onde está o papai?"
                },
                artPieceType: {
                    es: 'Guión de largometraje',
                    en: "Feature film script",
                    pt: "Roteiro de longa-metragem"
                },
                artPieceDescription: {
                    es: '“<em>¿Dónde está papá?</em> Es el nuevo título del guión de mi cuarto largometraje que vengo trabajando y con el que me vengo peleando hace más de un año. Esta es una historia que transcurre en el entorno urbano y rural de la frontera uruguaya y que habla sobre la disolución familiar y las relaciones filiales entre trabajadores rurales, patrones de la capital y los jóvenes perdidos de un pueblo. Dos madres enfrentando la desintegración familiar y luchando por preservar lo que más quieren. Y la frontera como espacio y símbolo de un límite que deberán cruzar para lograrlo. En el medio están los hombres que van por otro camino, que luchan por otro tipo de supervivencia, se alejan en el delirio de sus vidas. Y en la superficie se pinta el ámbito rural como paisaje problemático, el campo como lugar abierto, lejano y alucinado donde tres diferentes generaciones tropiezan con sus destinos.”',
                    en: "“<em>Where is Dad?</em> is the new title of the script for my fourth feature film, which I have been working on and struggling with for over a year. This story unfolds in the urban and rural environments of the Uruguayan border and addresses family disintegration and filial relationships among rural workers, capital city employers, and lost youth of a town. Two mothers face family breakdown while fighting to preserve what they love most. The border serves as both a space and a symbol of a limit they must cross to achieve it. In the middle are men following a different path, struggling for another type of survival, drifting in the delirium of their lives. On the surface, the rural setting is depicted as a problematic landscape, the countryside as an open, distant, and hallucinatory place where three different generations stumble upon their destinies.”",
                    pt: "“<em>Onde está o Papai?</em> é o novo título do roteiro do meu quarto longa-metragem, que venho trabalhando e com o qual venho lutando há mais de um ano. Esta história se passa nos ambientes urbanos e rurais da fronteira uruguaia e trata da desintegração familiar e das relações filiais entre trabalhadores rurais, patrões da capital e jovens perdidos de uma cidade. Duas mães enfrentam a desintegração familiar enquanto lutam para preservar o que mais amam. E a fronteira funciona como espaço e símbolo de um limite que deverão atravessar para conseguir isso. No meio estão os homens que seguem outro caminho, que lutam por outro tipo de sobrevivência, afastando-se no delírio de suas vidas. E, na superfície, o ambiente rural é pintado como uma paisagem problemática, o campo como um lugar aberto, distante e alucinado, onde três gerações diferentes tropeçam com seus destinos.”"
                },
            },
            {
                id: 6,
                image: '/Images/Residencies/Residency01/Participants/GonzaloQuincoces.jpg',
                name: 'Gonzalo Quincoces',
                origin: {
                    es: 'Bilbao, España',
                    en: "Bilbao, Spain",
                    pt: "Bilbau, Espanha"
                },
                artPieceName: {
                    es: 'La Noche del Coche Rojo',
                    en: "The Night of the Red Car",
                    pt: "A Noite do Carro Vermelho"
                },
                artPieceType: {
                    es: "Guión de largometraje",
                    en: "Feature film script",
                    pt: "Roteiro de longa-metragem"
                },
                artPieceDescription: {
                    es: "“<em>La Noche del Coche Rojo</em> es un drama de personaje con tintes de thriller. Mi primer largometraje que narra la historia de Germán, un joven de veintinueve años que sobrevive en una Bizkaia turbia y grisácea en el año 1984. El protagonista transita entre conciertos, trapicheos, robos y manifestaciones. Junto a su amigo Kepa, falsifica una carta con el objetivo de extorsionar a un empresario vasco, simulando que se trata del impuesto revolucionario de la E.T.A. La película es un descenso a los infiernos, en el que su protagonista busca, de forma constante y desesperada, una salida a un entorno asfixiante del que no logra escapar.”",
                    en: "“<em>The Night of the Red Car</em> is a character-driven drama with thriller elements. My first feature film tells the story of Germán, a twenty-nine-year-old navigating a murky and grayish Bizkaia in 1984. The protagonist moves through concerts, hustles, thefts, and demonstrations. Alongside his friend Kepa, he forges a letter aiming to extort a Basque businessman, pretending it is the revolutionary tax of ETA. The film is a descent into hell, with the protagonist constantly and desperately seeking a way out of a suffocating environment from which he cannot escape.”",
                    pt: "“<em>A Noite do Carro Vermelho</em> é um drama centrado em personagens com nuances de thriller. Meu primeiro longa-metragem conta a história de Germán, um jovem de vinte e nove anos que sobrevive em uma Bizkaia turva e acinzentada em 1984. O protagonista passa por concertos, negociações, roubos e manifestações. Junto ao amigo Kepa, falsifica uma carta com o objetivo de extorquir um empresário basco, simulando que se trata do imposto revolucionário da ETA. O filme é uma descida ao inferno, onde o protagonista busca, de forma constante e desesperada, uma saída de um ambiente sufocante do qual não consegue escapar.”"
                }
            },
        ],
        className: "residencia-card",
        year: 2025,
        textP: {
            es: 'Con el comienzo del programa de residencias de Fundación Azar, surge también el deseo de contarlas desde dentro. Para ello, Fundación Azar lanza la serie <em>Una residencia narrada por</em>, en la que cada año un artista es invitado a convivir con los residentes y convertir su mirada en relato.<br/><br/>El pintor Ivan Floro fue elegido para ser testigo y cronista visual de esta primera edición. Durante tres semanas se confundió con los residentes, adentrándose en sus días y procesos creativos, compartiendo sobremesas y silencios, observando los rincones y el paisaje. Con sus bártulos siempre a cuestas, pintó del natural, y esas obras quedaron recogidas en la primera publicación de Fundación Azar:',
            en: 'With the beginning of Fundación Azar’s residency program comes the desire to tell its story from within. To this end, Fundación Azar launches the series <em>A Residency Narrated by</em>, in which each year an artist is invited to live alongside the residents and turn their gaze into a narrative.<br/><br/>The painter Ivan Floro was chosen to be the witness and visual chronicler of this first edition. For three weeks, he blended in with the residents, immersing himself in their days and creative processes, sharing meals and silences, observing corners and landscapes. With his materials always at hand, he painted from life, and these works were gathered in Fundación Azar’s first publication:',
            pt: 'Com o início do programa de residências da Fundação Azar, surge também o desejo de contá-las por dentro. Para isso, a Fundação Azar lança a série <em>Uma residência narrada por</em>, na qual, todos os anos, um artista é convidado a conviver com os residentes e transformar o seu olhar em relato.<br/><br/>O pintor Ivan Floro foi escolhido para ser testemunha e cronista visual desta primeira edição. Durante três semanas, misturou-se com os residentes, mergulhando nos seus dias e processos criativos, partilhando refeições e silêncios, observando cantos e paisagens. Com seus apetrechos sempre à mão, pintou ao natural, e essas obras ficaram reunidas na primeira publicação da Fundação Azar:'
        },
        publicaciones: ["pub-1"],
        textE: {
            es: 'Con motivo de recoger todo lo ocurrido durante la residencia y dar a conocer el trabajo de Fundación Azar y de sus residentes, el pasado junio se celebró en <b>Madrid</b> la Expo Residencia2025.<br/><br/>Durante <b>dos jornadas</b>, un espacio de 300 m² acogió un programa que incluyó <b>lecturas</b>, <b>presentaciones</b> de investigaciones y obras individuales, la <b>exhibición de la obra colectiva</b> y la <b>preventa del libro</b> <em>Una residencia narrada por Ivan Floro</em>, firmado de manera única por el propio artista en cada ejemplar vendido.<br/><br/>El evento reunió a más de 400 personas y tuvo repercusión en diversos medios de prensa.',
            en: 'To gather everything that took place during the residency and to showcase the work of Fundación Azar and its residents, last June the <b>Expo Residencia2025</b> was held in <b>Madrid</b>.<br/><br/>Over the course of <b>two days</b>, a 300 m² space hosted a program that included <b>readings</b>, <b>presentations</b> of research and individual works, the <b>exhibition of the collective piece</b>, and the <b>pre-sale of the book</b> <em>Una residencia narrada por Ivan Floro</em>, uniquely signed by the artist in each copy sold.<br/><br/>The event brought together more than 400 people and received coverage in various media outlets.',
            pt: 'Com o objetivo de recolher tudo o que aconteceu durante a residência e dar a conhecer o trabalho da Fundación Azar e dos seus residentes, no passado mês de junho realizou-se em <b>Madrid</b> a <b>Expo Residencia2025</b>.<br/><br/>Durante <b>dois dias</b>, um espaço de 300 m² acolheu um programa que incluiu <b>leituras</b>, <b>apresentações</b> de investigações e obras individuais, a <b>exibição da obra coletiva</b> e a <b>pré-venda do livro</b> <em>Una residência narrada por Ivan Floro</em>, assinado de forma única pelo próprio artista em cada exemplar vendido.<br/><br/>O evento reuniu mais de 400 pessoas e teve repercussão em diversos meios de comunicação.'
        },
        exposiciones: ["expo-1"],
        textCAP: {
            es: 'Además de acompañar a los residentes en sus inquietudes, nuestra intención también es provocar encuentros inesperados entre artistas que, de primeras, podrían parecer ajenos entre sí. Pensamos la residencia como un lugar donde las ideas, los procesos y las disciplinas artísticas se «polinizan». De esos días de exploración y sobremesa nació <b>la obra colectiva <em>memoria sense mancha</em><b>: una pieza viva y conceptual, desarrollada entre los seis residentes.',
            en: 'Beyond accompanying the residents in their pursuits, our intention is also to spark unexpected encounters between artists who, at first, might seem distant from one another. We conceive the residency as a place where ideas, processes, and artistic disciplines “cross-pollinate.” From those days of exploration and long conversations emerged <b>the collective work <em>memoria sense mancha</em></b>: a living, conceptual piece developed by the six residents.',
            pt: 'Além de acompanhar os residentes nas suas inquietações, a nossa intenção é também provocar encontros inesperados entre artistas que, à primeira vista, poderiam parecer distantes entre si. Pensamos a residência como um lugar onde ideias, processos e disciplinas artísticas se «polinizam». Desses dias de exploração e convívio nasceu <b>a obra coletiva <em>memoria sense mancha</em></b>: uma peça viva e conceptual, desenvolvida entre os seis residentes.'
        },
        collectiveArtPiece: ["artPiece-1"],

        date: '2025-01-15'
    },

    {
        id: "residencia-2",
        // imageR: "/Images/Header/HeaderResidencia.jpg",
        imageR: "/Images/Residencies/Residency02/portada_interior.webp",

        image: "/Images/Residencies/Residency02/cartel_resi_2.webp",


        title: {
            es: "Residencia2026",
            en: "2026Residency",
            pt: "Residência2026"
        },
        title2: {
            es: 'Danza,<br/>matemática y naturalezas',
            en: 'Dance,<br/>mathematics, <br/>and nature',
            pt: 'Dança,<br/>matemática <br/>e natureza',
        },
        subtitle: {
            es: "Trujillo, Extremadura • Enero 2026",
            en: "Trujillo, Extremadura • January 2026",
            pt: "Trujillo, Extremadura • Janeiro 2026"
        },
        location: {
            es: "Trujillo, Extremadura",
            en: "Trujillo, Extremadura",
            pt: "Trujillo, Extremadura"
        },
        description: {
            es: "Segunda edición del programa de residencias, que reunió la danza, las matemáticas y la naturaleza.",
            en: "Second edition of the residency programme, which brought together dance, mathematics and nature.",
            pt: "Segunda edição do programa de residências, que reuniu a dança, a matemática e a natureza."
        },
        textR: {
            es: "",
            en: "",
            pt: ""
        },
        jurado: {
            es: "",
            en: "",
            pt: ""
        },
        textR2: {
            es: "",
            en: "",
            pt: ""
        },
        residents: [
            {
                id: 1,
                image: '/Images/Residencies/Residency02/anamortera.webp',
                name: 'Ana Mortera',
                origin: {
                    es: '',
                    en: "",
                    pt: ""
                },
                artPieceName: {
                    es: '',
                    en: "",
                    pt: ""
                },
                artPieceType: {
                    es: 'Artista plástica',
                    en: 'Visual artist',
                    pt: 'Artista plástica'
                },
                artPieceDescription: {
                    es: "<em>Pese a que estábamos rodeadas de naturaleza fue un reto descubrir cómo relacionarla con la obra. Hasta el día de la borrasca, cuando el viento tiró el ciprés.<br/><br/>Los días que pasamos en la Residencia de la Fundación Azar de las Artes estuvieron marcados por el clima: las lluvias, el viento, las alertas rojas. No pude evitar ver el ciprés como reflejo de nosotras. Un cuerpo a merced de la naturaleza, parado en el campo en Trujillo y que de repente sucumbía, se doblegaba ante la hostilidad. Y esa caída era nuestra, intentando acordar ideas y sacudiéndonos las unas a las otras.<br/><br/>El intercambio de espacios me resultó poético. Bailar donde el árbol había muerto, el cepellón arrancado del suelo con las raíces al cielo y el ciprés desplomado en el molino, nuestro espacio de trabajo, de encuentro, de ensayos.<br/><br/>El proceso creativo lo sentíamos como un rompecabezas, pero al final fue la misma naturaleza quien nos regaló la obra, sus dos actos. Solo tuvimos que conseguir ver (vernos en) lo que se nos había puesto delante.</em>",
                    en: "<em>Although we were surrounded by nature, it was a challenge to discover how to relate it to the work. Until the day of the storm, when the wind brought down the cypress.<br/><br/>The days we spent at the Fundación Azar de las Artes Residency were marked by the weather: the rain, the wind, the red alerts. I couldn't help seeing the cypress as a reflection of ourselves. A body at the mercy of nature, standing still in the fields of Trujillo, that suddenly gave way and bowed to the hostility. And that fall was ours, as we tried to agree on ideas and shook one another up.<br/><br/>I found the exchange of spaces poetic. Dancing where the tree had died, the root ball torn from the ground with its roots to the sky, and the cypress collapsed in the mill, our space for work, for meeting, for rehearsals.<br/><br/>We experienced the creative process as a puzzle, but in the end it was nature itself that gave us the work, its two acts. All we had to do was manage to see (and see ourselves in) what had been placed before us.</em>",
                    pt: "<em>Apesar de estarmos rodeadas de natureza, foi um desafio descobrir como relacioná-la com a obra. Até ao dia da tempestade, quando o vento derrubou o cipreste.<br/><br/>Os dias que passámos na Residência da Fundação Azar de las Artes foram marcados pelo clima: as chuvas, o vento, os alertas vermelhos. Não consegui deixar de ver o cipreste como um reflexo de nós. Um corpo à mercê da natureza, parado no campo em Trujillo, que de repente sucumbia, se vergava perante a hostilidade. E essa queda era nossa, a tentar chegar a acordo sobre as ideias e a sacudir-nos umas às outras.<br/><br/>A troca de espaços pareceu-me poética. Dançar onde a árvore tinha morrido, o torrão arrancado do solo com as raízes viradas para o céu e o cipreste tombado no moinho, o nosso espaço de trabalho, de encontro, de ensaios.<br/><br/>Sentíamos o processo criativo como um quebra-cabeças, mas no final foi a própria natureza que nos ofereceu a obra, os seus dois atos. Só tivemos de conseguir ver (e ver-nos em) aquilo que nos tinha sido posto à frente.</em>"
                }
            },
            {
                id: 2,
                image: '/Images/Residencies/Residency02/telma.webp',
                name: 'Telma João Santos',
                origin: {
                    es: '',
                    en: "",
                    pt: ""
                },
                artPieceName: {
                    es: '',
                    en: "",
                    pt: ""
                },
                artPieceType: {
                    es: 'Doctora en artes performativas y doctora en matemáticas',
                    en: 'PhD in Performing Arts and PhD in Mathematics',
                    pt: 'Doutorada em artes performativas e doutorada em matemática'
                },
                artPieceDescription: {
                    es: "<em>Parada. Abismada. Domada. Entusiasmada. Selvagem. Desafiada.<br/><br/>Por entre tempestades, encontros, desafios, traduções e (des)enganos linguísticos, percorri quatro semanas de uma contínua adaptação, um contínuo espanto artístico e visceral perante os encontros, as ideias delas, os desenhos dele, a comida e os mantras incríveis de Nathalie, as danças pela noite fora com todos eles, os vinhos magníficos tal qual uma imagem que nunca conseguirei de facto segurar – fantasmata. Sempre num quase que se transforma num espectro de um outro quase, um instante belo que não consigo gravar pois afinal é uma sucessão de instantes belos aos quais não consigo atribuir morada fixa.<br/><br/>Construímos uma obra coletiva, Una visión remota – um outro espanto este de termos conseguido tal proeza –, que tem um lugar de memória muito colocada nas minhas vísceras, na forma de olhar o mundo. Contínuo, constante, um estado de alerta e entrega tão vívidos e tão presentes. Pensei matemática, erotizei-a, performei-a e, no fim, encontrei o meu corpo no meio dos outros corpos. Pelo meio, fotografei-me e senti muito amor. </em>",
                    en: "<em>Still. Awestruck. Tamed. Enthused. Wild. Challenged.<br/><br/>Through storms, encounters, challenges, translations and linguistic (mis)understandings, I went through four weeks of continuous adaptation, a continuous artistic and visceral wonder at the encounters, the women's ideas, his drawings, Nathalie's incredible food and mantras, the dancing deep into the night with all of them, the magnificent wines, just like an image I will never truly be able to hold – fantasmata. Always in an almost that turns into the ghost of another almost, a beautiful instant I cannot record because, after all, it is a succession of beautiful instants to which I cannot assign a fixed address.<br/><br/>We built a collective work, Una visión remota – another wonder, that we managed such a feat – which holds a place of memory set deep in my gut, in the way I look at the world. Continuous, constant, a state of alertness and surrender so vivid and so present. I thought mathematics, eroticised it, performed it and, in the end, found my body among the other bodies. Along the way, I photographed myself and felt a great deal of love.</em>",
                    pt: "<em>Parada. Abismada. Domada. Entusiasmada. Selvagem. Desafiada.<br/><br/>Por entre tempestades, encontros, desafios, traduções e (des)enganos linguísticos, percorri quatro semanas de uma contínua adaptação, um contínuo espanto artístico e visceral perante os encontros, as ideias delas, os desenhos dele, a comida e os mantras incríveis de Nathalie, as danças pela noite fora com todos eles, os vinhos magníficos tal qual uma imagem que nunca conseguirei de facto segurar – fantasmata. Sempre num quase que se transforma num espectro de um outro quase, um instante belo que não consigo gravar pois afinal é uma sucessão de instantes belos aos quais não consigo atribuir morada fija.<br/><br/>Construímos uma obra coletiva, Una visión remota – um outro espanto este de termos conseguido tal proeza –, que tem um lugar de memória muito colocada nas minhas vísceras, na forma de olhar o mundo. Contínuo, constante, um estado de alerta e entrega tão vívidos e tão presentes. Pensei matemática, erotizei-a, performei-a e, no fim, encontrei o meu corpo no meio dos outros corpos. Pelo meio, fotografei-me e senti muito amor.</em>"
                }
            },
            {
                id: 3,
                image: '/Images/Residencies/Residency02/izarne.webp',
                name: 'Izarne Oyarzabal',
                origin: {
                    es: '',
                    en: "",
                    pt: ""
                },
                artPieceName: {
                    es: '',
                    en: "",
                    pt: ""
                },
                artPieceType: {
                    es: 'Arquitecta y bailarina',
                    en: 'Architect and dancer',
                    pt: 'Arquiteta e bailarina'
                },
                artPieceDescription: {
                    es: "<em>El trabajo de este trabajo ha sido para mí una obra en minúscula. Una inclinación a ser mano de obra como ética del trabajo en mi práctica artística. Como si el cuerpo a cuerpo con la materialidad de los elementos y los medios de producción me fueran a traer sentido. Donde colocar algo me colocase a mí también. Pero esto no es un método, es una creencia y mientras creo no sé lo que estoy haciendo. Marina Garcés en su ensayo Nueva ilustración radical dice que el no-saber es un gesto soberano de declararse fuera del sentido y me parece que ahí hay una promesa de algo que me gustaría ver. Creer para ver y no al revés.<br/><br/>Ha sido permaneciendo las cuatro juntas en este no-saber como hemos generado simultáneamente colectivo y Obra, un espacio insospechado de suspensión productiva de relaciones e imaginación. Un momento de fantasmata como instante de quietud que sabe elongarse en el tiempo. Así hemos llegado a crear algo incipiente, algo que se está asomando.</em>",
                    en: "<em>The work of this work has been, for me, a work in lowercase. An inclination to be the labour, as a work ethic in my artistic practice. As if the body-to-body encounter with the materiality of the elements and the means of production would bring me meaning. Where placing something might place me as well. But this is not a method, it is a belief, and while I believe, I don't know what I'm doing. In her essay Nueva ilustración radical, Marina Garcés says that not-knowing is a sovereign gesture of declaring oneself outside of meaning, and I sense a promise there of something I would like to see. Believing in order to see, not the other way round.<br/><br/>It was by remaining, the four of us together, in this not-knowing that we simultaneously generated a collective and a Work, an unsuspected space of productive suspension of relationships and imagination. A moment of fantasmata as an instant of stillness that knows how to stretch out in time. That is how we came to create something incipient, something that is beginning to emerge.</em>",
                    pt: "<em>O trabalho deste trabalho foi para mim uma obra em minúscula. Uma inclinação para ser mão de obra como ética de trabalho na minha prática artística. Como se o corpo a corpo com a materialidade dos elementos e dos meios de produção me fosse trazer sentido. Onde colocar algo me colocasse também a mim. Mas isto não é um método, é uma crença e, enquanto creio, não sei o que estou a fazer. Marina Garcés, no seu ensaio Nueva ilustración radical, diz que o não-saber é um gesto soberano de se declarar fora do sentido e parece-me que aí há uma promessa de algo que gostaria de ver. Crer para ver e não o contrário.<br/><br/>Foi permanecendo as quatro juntas neste não-saber que gerámos simultaneamente coletivo e Obra, um espaço insuspeito de suspensão produtiva de relações e imaginação. Um momento de fantasmata como instante de quietude que sabe alongar-se no tempo. Assim chegámos a criar algo incipiente, algo que está a despontar.</em>"
                }
            },
            {
                id: 4,
                image: '/Images/Residencies/Residency02/natividad.webp',
                name: 'Natividad Martín',
                origin: {
                    es: '',
                    en: "",
                    pt: ""
                },
                artPieceName: {
                    es: "",
                    en: "",
                    pt: ""
                },
                artPieceType: {
                    es: 'Artista y bailarina',
                    en: 'Artist and dancer',
                    pt: 'Artista e bailarina'
                },
                artPieceDescription: {
                    es: "<em>El ciprés cayó, y con él todo lo que hubiésemos querido controlar, incluso cualquier voluntad de intentarlo. <br/><br/>Estuvimos pendientes del fuego, porque hacía frío y viento. Decidimos quedarnos, por alguna razón que no recuerdo, muy cerca de lo que se cayó. Nos poseyó esa caída, pesada, verde, mortuoria y absurda. Absurda fue también nuestra obsesión por atrapar el tal acontecimiento —pienso en nuestras conversaciones y debacles como escenas irracionales, divertidas, desorientadas, urgentes—. Es la realidad, nos unió nada más que este hecho. No supimos encontrar otro motivo. Y salimos al frío, al viento y la lluvia a buscar un sentido y medirlo. Hicimos con lo que había, sin más refinamiento ni currículum.<br/><br/>Varios días sentí la terrible invasión de la mirada ajena, y luego llegaba la noche con su balanceo y monumentalidad. Cayó todo lo que podía caer del cielo. El horizonte se hizo más alto y de agua. Decidí —sólo para mí— unirme a ese movimiento y caer, caer. Poco más me importó de verdad, es decir, en el cuerpo. <br/><br/>Quise arrancarles los ojos. Quise que una ventisca se les metiera por las cuencas hasta el interior y les inflase, les hiciese volar por los aires para, luego, dejarles caer.<br/><br/>Así es el final de la obra: alguien cae por un agujero... Y antes de eso, alas, mirones, viento y puntos ciegos que algo dicen.</em>",
                    en: "<em>The cypress fell, and with it everything we might have wanted to control, even any will to try.<br/><br/>We kept watch over the fire, because it was cold and windy. We decided, for some reason I don't remember, to stay very close to what had fallen. That fall possessed us, heavy, green, mortuary and absurd. Absurd too was our obsession with capturing that event — I think of our conversations and debacles as irrational, funny, disoriented, urgent scenes. That's the truth: nothing but this fact brought us together. We couldn't find any other reason. And we went out into the cold, the wind and the rain to look for a meaning and to measure it. We worked with what there was, with no further refinement or credentials.<br/><br/>For several days I felt the terrible invasion of other people's gaze, and then the night would come with its swaying and its monumentality. Everything that could fall from the sky fell. The horizon grew higher and turned to water. I decided — just for myself — to join that movement and fall, and fall. Little else truly mattered to me, that is, in the body.<br/><br/>I wanted to tear their eyes out. I wanted a blizzard to get in through their sockets, all the way inside, and inflate them, send them flying through the air and then let them fall.<br/><br/>This is how the work ends: someone falls through a hole... And before that, wings, onlookers, wind and blind spots that say something.</em>",
                    pt: "<em>O cipreste caiu e, com ele, tudo o que teríamos querido controlar, até qualquer vontade de o tentar.<br/><br/>Estivemos atentas ao fogo, porque fazia frio e vento. Decidimos ficar, por alguma razão de que não me lembro, muito perto do que tinha caído. Possuiu-nos essa queda, pesada, verde, mortuária e absurda. Absurda foi também a nossa obsessão por captar tal acontecimento — penso nas nossas conversas e desastres como cenas irracionais, divertidas, desorientadas, urgentes. É a realidade: uniu-nos apenas este facto. Não soubemos encontrar outro motivo. E saímos para o frio, o vento e a chuva à procura de um sentido e para o medir. Fizemos com o que havia, sem mais refinamento nem currículo.<br/><br/>Durante vários dias senti a terrível invasão do olhar alheio, e depois chegava a noite com o seu balanço e a sua monumentalidade. Caiu tudo o que podia cair do céu. O horizonte tornou-se mais alto e feito de água. Decidi — só para mim — juntar-me a esse movimento e cair, cair. Pouco mais me importou de verdade, ou seja, no corpo.<br/><br/>Quis arrancar-lhes os olhos. Quis que uma nevasca lhes entrasse pelas órbitas até ao interior e os inchasse, os fizesse voar pelos ares para, depois, os deixar cair.<br/><br/>Assim é o final da obra: alguém cai por um buraco... E antes disso, asas, basbaques, vento e pontos cegos que dizem alguma coisa.</em>"
                }
            },



        ],
        className: "residencia-card",
        year: 2026,
        textP: {
            es: "",
            en: "",
            pt: ""
        },
        publicaciones: ["pub-2"],
        textE: {
            es: "",
            en: "",
            pt: ""
        },
        exposiciones: ["expo-3"],
        textCAP: {
            es: "",
            en: "",
            pt: ""
        },
        collectiveArtPiece: ["artPiece-2"],

        date: '2026-01-15'
    },

]
