window.onload = function () {

    let llibres = [

        {
            'portada': 'imatges/bg-cover-lptp.jpg',
            'titol': 'La Porta Dels Tres Panys',
            'contingut': "Després de rebre un misteriós missatge, en Niko recorre un nou camí per anar a l’institut i descobreix una casa que no havia vist mai abans. La resolució d’un enigma li permet entrar en el que resultarà ser un estrany lloc on neixen universos, hi ha un gat que apareix i desapareix, i és possible teletransportar-se.",
            'link': 'https://www.grup62.cat/llibre-la-porta-dels-tres-panys/265682'
        },

        {
            'portada': 'imatges/bg-cover-ql.jpg',
            'titol': 'Quantic Love',
            'contingut': "Al CERN, el centre d'investigació més avançat del món, entre experiments de viatges en el temps i de teletransportació, entre partícules que superen la velocitat de la llum i altres que revelen l'origen de l'Univers, la jove Laila s'enfronta al misteri més gran que existeix: com triar entre dos amors. D'una banda, l'Alessio, un atractiu periodista, i de l'altra, en Brian, un cerebral científic que amaga un gran secret.",
            'link': 'https://www.grup62.cat/llibre-quantic-love/112502'
        },

        {
            'portada': 'imatges/bg-cover-dcp.jpg',
            'titol': 'Esmorzar Amb Partícules',
            'contingut': "Sinopsis: Sonia Fernández-Vidal, escriptora i doctora en física quàntica, i Francesc Miralles, escriptor i periodista, ens conviden a un esmorzar molt divertit al qual també assistiran Newton, Einstein, Heisenbergi altres físics famosos de la història. Entre magdalenes, torrades, cafè amb llet i sucs de taronja, emprendrem un viatge excitant i revelador als orígens de l'univers. Aprendrem per a què serveix l'accelerador de partícules, què és la partícula de Déu, com és que les coses poden ser a dos llocs alhora i intentarem comprendre els misteris de l'existència.",
            'link': 'https://www.casadellibro.com/libro-esmorzar-amb-particules/9788401388484/2082332'
        },

        {
            'portada': 'imatges/bg-cover-euetm.jpg',
            'titol': "L'Univers a la Mà",
            'contingut': "Sinopsis: Quan l'Eva puja a les golfes on treballa l'avi Leonardo, no el troba per enlloc. L'avi és un inventor molt intel·ligent i sempre explica coses de ciència a la seva néta. Potser aquest cop ha fet un experiment perillós. Potser aquesta mena de nau espacial amb la porta oberta hi té a veure. L'Eva decideix entrar a la càpsula sense saber que començarà l'aventura més important de la seva vida: rescatar l'avi mentre aprèn coses increïbles del lloc on vivim: l'Univers.",
            'link': 'https://www.lagaleraeditorial.com/ca/lunivers-a-la-ma-978-84-246-5341-5'
        },

        {
            'portada': 'imatges/bg-cover-lscf.jpg',
            'titol': 'La Porta Dels Tres Panys, La Senda De Les Quatre Forces',
            'contingut': "Sinopsis: La porta dels tres panys, l'entrada al món quàntic on en Niko va viure aventures tan inoblidables com extraordinàries, ha desaparegut. El noi no ha estat capaç de retrobar els seus amics. Fins que la Quiona, la seva fada quàntica, reapareix per demanar-li ajuda. En Niko descobrirà que les lleis de la física s'han descontrolat, i que dels seus amics i d'ell en depèn el restabliment de l'equilibri. En la nova aventura quàntica s'haurà de sotmetre a les proves de cadascuna de les forces que regeixen el nostre univers.",
            'link': 'https://www.grup62.cat/llibre-la-porta-dels-tres-panys-2-la-senda-de-les-quatre-forces/265683'
        },

        {
            'portada': 'imatges/bg-cover-ecre.jpg',
            'titol': 'La Porta Dels Tres Panys, Els Cinc Regnes Eterns',
            'contingut': "Sinopsis: A en Niko se li acumulen els problemes en els diferents mons. El temps ha embogit a la Terra i va enrere. La Quiona ha quedat atrapada en el Regne de Temps i reclama la seva ajuda. Per retornar l’harmonia als multiversos, en Niko i els seus amics hauran de travessar forats de cuc, teletransportar-se a llocs desconeguts, crear universos de butxaca amb les constants universals modificades i desafiar un munt de lleis de la física. Recórrer els cinc regnes eterns serà l’única manera d’enfrontar-se a l’enemic inesperat que pretén aconseguir el poder dels multiversos. Sortiran victoriosos els nostres amics d’aquesta nova aventura quàntica?",
            'link': 'https://www.grup62.cat/llibre-la-porta-dels-tres-panys-3-els-cinc-regnes-eterns/302507'
        }
    ]

    /*CARREGO ELS ELEMENTS A LA PÀGINA "OBRA"*/


    let popup = document.querySelector(".container");

    let boto1 = document.querySelector(".capsa1");

    let boto2 = document.querySelector(".capsa2");

    let boto3 = document.querySelector(".capsa3");

    let boto4 = document.querySelector(".capsa4");

    let boto5 = document.querySelector(".capsa5");

    let boto6 = document.querySelector(".capsa6");



    boto1.addEventListener('click', function () {

        document.querySelector('.titol-llibre').textContent = llibres[0].titol;

        document.querySelector('.contingut-llibre').textContent = llibres[0].contingut;

        document.querySelector('.boto').textContent = "Comprar ara";

        document.querySelector('.boto').href = llibres[0].link;
        document.querySelector('.boto').target = "_blank";

        popup.style.display = "block"; /*de l'altra funció*/

        let span = document.getElementsByClassName("tancar")[0];

        span.onclick = function () {
            popup.style.display = "none";
        }

    });


    boto2.addEventListener('click', function () {

        document.querySelector('.titol-llibre').textContent = llibres[1].titol;

        document.querySelector('.contingut-llibre').textContent = llibres[1].contingut;

        document.querySelector('.boto').textContent = "Comprar ara";

        document.querySelector('.boto').href = llibres[1].link;
        document.querySelector('.boto').target = "_blank";

        popup.style.display = "block"; /*de l'altra funció*/

        let span = document.getElementsByClassName("tancar")[0];

        span.onclick = function () {
            popup.style.display = "none";
        }

    });


    boto3.addEventListener('click', function () {

        document.querySelector('.titol-llibre').textContent = llibres[2].titol;

        document.querySelector('.contingut-llibre').textContent = llibres[2].contingut;

        document.querySelector('.boto').textContent = "Comprar ara";

        document.querySelector('.boto').href = llibres[2].link;
        document.querySelector('.boto').target = "_blank";

        popup.style.display = "block"; /*de l'altra funció*/

        let span = document.getElementsByClassName("tancar")[0];

        span.onclick = function () {
            popup.style.display = "none";
        }

    });


    boto4.addEventListener('click', function () {

        document.querySelector('.titol-llibre').textContent = llibres[3].titol;

        document.querySelector('.contingut-llibre').textContent = llibres[3].contingut;

        document.querySelector('.boto').textContent = "Comprar ara";

        document.querySelector('.boto').href = llibres[3].link;
        document.querySelector('.boto').target = "_blank";

        popup.style.display = "block"; /*de l'altra funció*/

        let span = document.getElementsByClassName("tancar")[0];

        span.onclick = function () {
            popup.style.display = "none";
        }

    });


    boto5.addEventListener('click', function () {

        document.querySelector('.titol-llibre').textContent = llibres[4].titol;

        document.querySelector('.contingut-llibre').textContent = llibres[4].contingut;

        document.querySelector('.boto').textContent = "Comprar ara";

        document.querySelector('.boto').href = llibres[4].link;
        document.querySelector('.boto').target = "_blank";

        popup.style.display = "block"; /*de l'altra funció*/

        let span = document.getElementsByClassName("tancar")[0];

        span.onclick = function () {
            popup.style.display = "none";
        }

    });


    boto6.addEventListener('click', function () {

        document.querySelector('.titol-llibre').textContent = llibres[5].titol;

        document.querySelector('.contingut-llibre').textContent = llibres[5].contingut;

        document.querySelector('.boto').textContent = "Comprar ara";

        document.querySelector('.boto').href = llibres[5].link;
        document.querySelector('.boto').target = "_blank";

        popup.style.display = "block"; /*de l'altra funció*/

        let span = document.getElementsByClassName("tancar")[0];

        span.onclick = function () {
            popup.style.display = "none";
        }

    });


}