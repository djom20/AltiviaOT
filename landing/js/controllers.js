var controllers = angular.module('controllers', []);

controllers.controller('IndexCtrl', ['$scope',
    function($scope) {
        console.log('Init controller');
        /*jQuery.getJSON('helpers/config.json', function(idioms){
            $scope.lang = idioms;
            console.log('idioms', idioms);
        });*/

        $scope.config = {
            "en": {
                "menu_1": "About Us",
                "menu_2": "Our Team",
                "menu_3": "Services",
                "menu_4": "Projects",
                "menu_5": "Contact",
                "mision_title": "Mission",
                "mision_text": "Providing a quality service, excellence and professionalism in addition to technical support and the most competitive to become the leader of the Latin American community in the field of web technology innovations rates.",
                "vision_title": "Vision",
                "vision_text": "Being number one in the world of web, maintaining high quality and service in our products, aimed at finding appropriate technologies to ensure their growth as a company in order to ensure that you achieve your goal.",
                "vision_text2": "Experience, Professionalism and knowledge are our bases to form a company that has everything you need to take advantage of all the benefits that the Internet has to offer you will be asked, Why choose our services ?, a.. you then. can understand some of the reasons why we are what we are looking for.",
                "aboutUs_title": "Who are we?",
                "aboutUs_text": "We are a group of professionals 100% Colombian, committed to the vision of offering web services globally, with the highest standards of quality and the best market prices started with the initiative, with a group of linked to the web world and a desire to give the community the opportunity not only to begin but also to expand their own internet business students. Our mission is focused on providing the best services in the web world, and we are in duty to do a better job every day.",
                "whyChooseUs_title": "Why Choose Us?",
                "whyChooseUs_text": "Because we handle a line of standards and services that position us well in the market, driven simple and professional to suit along with a variety of platforms that help us solve its drawbacks designs are a company, but also we are part of your company, we are your support, we are part of you., and want the best for your company, grow with you and be your partner at all times is our first goal, wanting you. and your company are strengthened in the web world.",
                "ourTeam_title": "Our Team",
                "ourTeam_text": "Excellent professionals with high performance and quality in their work.",
                "ourTeam_text2": "Every day improving to better serve.",
                "ourServices_title": "Our Services",
                "ourServices_text": "All our services are quality and these are some of them.",
                "services1_title": "Consultants",
                "services1_text": "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.",
                "services2_title": "Welcome Pages, Landing Pages y Markup",
                "services2_text": "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.",
                "services3_title": "Websites",
                "services3_text": "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.",
                "services4_title": "Web Aplications",
                "services4_text": "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.",
                "services5_title": "Mobile Aplications",
                "services5_text": "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.",
                "oruProjetcs_title": "Our Projects",
                "oruProjetcs_text": "We realize many types of projects and these are some of them.",
                "oruProjetcs_text2": "Many of these sites are non-complete copies of the original site.",
                "contact_title": "Contact",
                "contact_text": "For any questions please contact or only use the data provided on this website.",
                "contact_text2": "Write us",
                "contact_text3": "Follow us on our social networks",
                "contact_text4": "All rights reserved by AltiviaOT."
            },
            "es": {
                "menu_1": "Nostros",
                "menu_2": "Nuestro Equipo",
                "menu_3": "Servicios",
                "menu_4": "Proyectos",
                "menu_5": "Contacto",
                "mision_title": "Mision",
                "mision_text": "Ofrecer un servicio con calidad, excelencia y profesionalismo además de un soporte técnico y las tarifas más competitivas para convertirnos en el líder de la comunidad latinoamericana en el ámbito de innovaciones en tecnología web.",
                "vision_title": "Vision",
                "vision_text": "Ser el número uno en el mundo del web, manteniendo una alta calidad y servicio en nuestros productos, orientados a la búsqueda de tecnologías apropiadas que garantice su crecimiento como empresa para así lograr que Ud. logre su meta.",
                "vision_text2": "Experiencia, Profesionalismo y Conocimientos son nuestras bases para formar una compañía que tiene todo lo que usted necesita para que aproveche todas las ventajas que Internet le puede ofrecer. Ud. se preguntará, ¿Por qué preferir nuestros servicios?, a continuación Ud. podrá conocer un poco las razones por la cual nosotros somos lo que busca.",
                "aboutUs_title": "¿Quienes somos?",
                "aboutUs_text": "Somos un grupo de profesionales 100% Colombianos, comprometidos con la visión de poder ofrecer servicios web a nivel global, con los más altos estándares de calidad y a los mejores precios del mercado. Empezamos con la iniciativa, siendo un grupo de estudiantes vinculados al mundo web, y con el deseo de brindarle a la comunidad la oportunidad no solo de iniciar sino también de poder ampliar su propio negocio en internet. Nuestra misión está orientada a brindarles los mejores servicios en el mundo web, y nos sentimos en el deber de realizar una mejor labor cada día.",
                "whyChooseUs_title": "¿Por qué preferirnos?",
                "whyChooseUs_text": "Porque manejamos una línea de estándares y servicios que nos posicionan muy bien en el mercado, manejado diseños sencillos y profesionales a su medida además de una variedad de plataformas que nos ayudan a solucionar sus inconvenientes. Somos una empresa, pero también somos parte de su empresa, somos su soporte, somos parte de Ud., y queremos lo mejor para su empresa, crecer junto a usted y ser su aliado en todo momento es nuestra primera meta, querer que Ud. y su empresa se fortalezcan en el mundo web.",
                "ourTeam_title": "Nuestro Equipo",
                "ourTeam_text": "Excelentes profesionales con un alto rendimiento y calidad en su trabajo.",
                "ourTeam_text2": "Cada dia mejorando para brindarles un mejor servicio.",
                "ourServices_title": "Nuestros Servicios",
                "ourServices_text": "Todos los nuestros servicios ofrecidos son de calidad y estos son algunos de ellos.",
                "services1_title": "Consultrias",
                "services1_text": "Podemos ofrecerle asesorias para resolver sus dudas con problemas o inquietudes con respecto a tecnologias, implementaciones, sitio web, hostings y dominios entre otros, todo a su entera disposicion. Solo llamenos y coordialmente atenderemos todas sus dudas e inquietudes.",
                "services2_title": "Dominios y Servidores",
                "services2_text": "Le ofrecemos una diversidad de paquetes y/o a su medida de servidores para que respalden sus necesidades. Le ofrecemos diversidad de dominios como .com, .net, .org, .us, .com.co y .es, ademas de comodas formas de pago. Nosotros mismos nos encargamos de recordarle cuando vence su hosting y/o dominio y estamos al tanto que si asi lo desea pueda renovarlo a tiempo y sin ningun incoveniente.",
                "services3_title": "Welcome Pages, Landing Pages y Markup",
                "services3_text": "Maquetamos sitios web, usted nos trae su diseño y nosotros lo transformamos en una obra de arte hecha web. Tambien realizamos micro sitios donde pueda darse a conocer, tener presencia en internet o simplemente colocar sus datos de contacto para que sus clientes los puedan contactar.",
                "services4_title": "Sitios Web",
                "services4_text": "Trabajamos diferentes tipos de plataformas y segun sus necesidades. Nuestra especialidad es el desarrollo de sitios web a su medida, nosotros nos encargaremos de realizar su sitio web en donde sus clientes encuentren todo lo necesario de ustedes o los productos que se deseen publicar.",
                "services5_title": "Aplicaiones Web",
                "services5_text": "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.",
                "services6_title": "Aplicaciones Mobiles",
                "services6_text": "INSPINIA Admin Theme is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. It has a huge collection of reusable UI components and integrated with latest jQuery plugins.",
                "oruProjetcs_title": "Nuestros Proyectos",
                "oruProjetcs_text": "Realizamos muchos tipos de proyectos y estos son algunos de ellos.",
                "oruProjetcs_text2": "Muchos de estos sitios son copias no-completas del sitio original.",
                "contact_title": "Contactanos",
                "contact_text": "Para cualquier duda ó contacto por favor haga uso unicamente de los datos que se proporcionan en este sitio web.",
                "contact_text2": "Escribenos",
                "contact_text3": "Siguenos en nuestras redes sociales",
                "contact_text4": "Todos los derechos reservados por AltiviaOT."
            }
        };

        if(localStorage.lang == null){
            $scope.lang         = $scope.config.es;
            localStorage.lang   = 'es';
        }else{
            $scope.lang = $scope.config[localStorage.lang];
        }            

        $scope.changeLang = function(lang){
            if(lang === 'es' || lang === 'en'){
                $scope.lang         = $scope.config[lang];
                localStorage.lang   = lang;
            }
        };
    }]
);

