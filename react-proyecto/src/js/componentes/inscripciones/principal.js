import React, { Component,PropTypes } from 'react';
import { confirmAlert } from 'react-confirm-alert'; 
import Confirm from 'react-confirm-bootstrap'
import DatosAlumnos from './datosAlumnos';
import BotonesInicio from './botonesInicio';
import DatosInscripciones from './datosInscripciones';
import DatosTutor from './datosTutor.js';
import Navigation from '../navigation';
import '../../../css/Inscripciones.css';
import ConfirmDialog from'../confirmation/confirmationDialog';
import { Page, Text, View, Document, StyleSheet } from 'react-pdf';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
//import Dialog from '../confirmation/confirmationDialog'
import BuscarAlumno from './buscarAlumno';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;


class Principal extends Component {

		
	constructor()
	{
		super();
		
		var fechaInscripcion=this.getDate();
		this.state={

			datosAlumnos:{
				img:"",
				nombre:"",
				ap:"",
				am:"",
				fechanac:"",
				edad:"",
				sexo:"H",
				estado:"Durango",
				municipio:"",
				calle:"",
				colonia:"",
				numerocasa:"",
				tel:"",
				cel:"",
				correo:"",
				curp:""},
			datosTutor:{
				nombre:"",
				ap:"",
				am:"",
				telefono:"",
				correo:""
			},
			datosInscripciones:{
				nocontrol:"",
				nivelescolar:"",
				gradoescolar:"",
				grupo:"",
				periodo:"",
				solicitudbeca:false,
				carrera:"",
				fechainscripcion:{fechaInscripcion}
			},
			activoBuscar:false,	//se envia
			activoNuevo:true,	// no se envia
			disabled:false,		//no se envia
			disabledCarrera:true,	//no se envia
			activoPeriodo:false,	//no se envia
			estadosmunicipios:[{estado:"Aguascalientes",municipio:["Aguascalientes","Asientos","Calvillo","Cosío","Jesús María","Pabellón de Arteaga","Rincón de Romos","San José de Gracia","Tepezalá","El Llano","Palo Alto","San Francisco de los Romo"
			]},{estado:"Baja California",municipio:["Ensenada","Mexicali","Tecate","Tijuana","Playas de Rosarito"
			]},{estado:"Baja California Sur",municipio:["Comondú","Ciudad Constitución","Mulegé","Santa Rosalía","La Paz","Los Cabos","San José del Cabo","Loreto"
			]},{estado:"Campeche",municipio:["Calkiní","Campeche","San Francisco de Campeche","Carmen","Ciudad del Carmen","Champotón","Hecelchakán","Hopelchén","Palizada","Tenabo","Escárcega","Calakmul","Xpujil","Candelaria"
			]},{estado:"Coahuila de Zaragoza",municipio:["Abasolo","Acuña","Ciudad Acuña","Allende","Arteaga","Candela","Castaños","Cuatro Ciénegas","Cuatro Ciénegas de Carranza","Escobedo","Francisco I. Madero","Francisco I. Madero (Chávez)","Frontera","General Cepeda","Guerrero","Hidalgo","Jiménez","Juárez","Lamadrid","Matamoros","Monclova","Morelos","Múzquiz","Ciudad Melchor Múzquiz","Nadadores","Nava","Ocampo","Parras","Parras de la Fuente","Piedras Negras","Progreso","Ramos Arizpe","Sabinas","Sacramento","Saltillo","San Buenaventura","San Juan de Sabinas","Nueva Rosita","San Pedro","Sierra Mojada","Torreón","Viesca","Villa Unión","Zaragoza"
			]},{estado:"Colima",municipio:["Armería","Ciudad de Armería","Colima","Comala","Coquimatlán","Cuauhtémoc","Ixtlahuacán","Manzanillo","Minatitlán","Tecomán","Villa de Álvarez","Ciudad de Villa de Álvarez"
			]},{estado:"Chiapas",municipio:["Acacoyagua","Acala","Acapetahua","Altamirano","Amatán","Amatenango de la Frontera","Amatenango del Valle","Angel Albino Corzo","Jaltenango de la Paz (Angel Albino Corzo)","Arriaga","Bejucal de Ocampo","Bella Vista","Berriozábal","Bochil","El Bosque","Cacahoatán","Catazajá","Cintalapa","Cintalapa de Figueroa","Coapilla","Comitán de Domínguez","La Concordia","Copainalá","Chalchihuitán","Chamula","Chanal","Chapultenango","Chenalhó","Chiapa de Corzo","Chiapilla","Chicoasén","Chicomuselo","Chilón","Escuintla","Francisco León","Rivera el Viejo Carmen","Frontera Comalapa","Frontera Hidalgo","La Grandeza","Huehuetán","Huixtán","Huitiupán","Huixtla","La Independencia","Ixhuatán","Ixtacomitán","Ixtapa","Ixtapangajoya","Jiquipilas","Jitotol","Juárez","Larráinzar","La Libertad","Mapastepec","Las Margaritas","Mazapa de Madero","Mazatán","Metapa","Metapa de Domínguez","Mitontic","Motozintla","Motozintla de Mendoza","Nicolás Ruíz","Ocosingo","Ocotepec","Ocozocoautla de Espinosa","Ostuacán","Osumacinta","Oxchuc","Palenque","Pantelhó","Pantepec","Pichucalco","Pijijiapan","El Porvenir","El Porvenir de Velasco Suárez","Villa Comaltitlán","Pueblo Nuevo Solistahuacán","Rayón","Reforma","Las Rosas","Sabanilla","Salto de Agua","San Cristóbal de las Casas","San Fernando","Siltepec","Simojovel","Simojovel de Allende","Sitalá","Socoltenango","Solosuchiapa","Soyaló","Suchiapa","Suchiate","Ciudad Hidalgo","Sunuapa","Tapachula","Tapachula de Córdova y Ordóñez","Tapalapa","Tapilula","Tecpatán","Tenejapa","Teopisca","Tila","Tonalá","Totolapa","La Trinitaria","Tumbalá","Tuxtla Gutiérrez","Tuxtla Chico","Tuzantán","Tzimol","Unión Juárez","Venustiano Carranza","Villa Corzo","Villaflores","Yajalón","San Lucas","Zinacantán","San Juan Cancuc","Aldama","Benemérito de las Américas","Maravilla Tenejapa","Marqués de Comillas","Zamora Pico de Oro","Montecristo de Guerrero","San Andrés Duraznal","Santiago el Pinar"
			]},{estado:"Chihuahua",municipio:["Ahumada","Miguel Ahumada","Aldama","Juan Aldama","Allende","Valle de Ignacio Allende","Aquiles Serdán","Santa Eulalia","Ascensión","Bachíniva","Balleza","Mariano Balleza","Batopilas","Bocoyna","Buenaventura","San Buenaventura","Camargo","Santa Rosalía de Camargo","Carichí","Casas Grandes","Coronado","José Esteban Coronado","Coyame del Sotol","Santiago de Coyame","La Cruz","Cuauhtémoc","Cusihuiriachi","Chihuahua","Chínipas","Chínipas de Almada","Delicias","Dr. Belisario Domínguez","San Lorenzo","Galeana","Hermenegildo Galeana","Santa Isabel","Gómez Farías","Valentín Gómez Farías","Gran Morelos","San Nicolás de Carretas","Guachochi","Guadalupe","Guadalupe y Calvo","Guazapares","Témoris","Guerrero","Vicente Guerrero","Hidalgo del Parral","Huejotitán","Ignacio Zaragoza","Janos","Jiménez","José Mariano Jiménez","Juárez","Julimes","López","Octaviano López","Madera","Maguarichi","Manuel Benavides","Matachí","Matamoros","Mariano Matamoros","Meoqui","Pedro Meoqui","Morelos","Moris","Namiquipa","Nonoava","Nuevo Casas Grandes","Ocampo","Melchor Ocampo","Ojinaga","Manuel Ojinaga","Praxedis G. Guerrero","Riva Palacio","San Andrés","Rosales","Santa Cruz de Rosales","Rosario","Valle del Rosario","San Francisco de Borja","San Francisco de Conchos","San Francisco del Oro","Santa Bárbara","Satevó","San Francisco Javier de Satevó","Saucillo","Temósachic","El Tule","Urique","Uruachi","Valle de Zaragoza"
			]},{estado:"Ciudad de México",municipio:["Azcapotzalco","","Coyoacán","Cuajimalpa de Morelos","Gustavo A. Madero","Iztacalco","Iztapalapa","La Magdalena Contreras","Milpa Alta","Álvaro Obregón","Tláhuac","Tlalpan","Xochimilco","Benito Juárez","Cuauhtémoc","Miguel Hidalgo","Venustiano Carranza"
			]},{estado:"Durango",municipio:["Canatlán","Canelas","Coneto de Comonfort","Cuencamé","Cuencamé de Ceniceros","Durango","Victoria de Durango","General Simón Bolívar","Gómez Palacio","Guadalupe Victoria","Guanaceví","Hidalgo","Villa Hidalgo","Indé","Lerdo","Mapimí","Mezquital","San Francisco del Mezquital","Nazas","Nombre de Dios","Ocampo","Villa Ocampo","El Oro","Santa María del Oro","Otáez","Pánuco de Coronado","Francisco I. Madero","Peñón Blanco","Poanas","Villa Unión","Pueblo Nuevo","El Salto","Rodeo","San Bernardo","San Dimas","Tayoltita","San Juan de Guadalupe","San Juan del Río","San Juan del Río del Centauro del Norte","San Luis del Cordero","San Pedro del Gallo","Santa Clara","Santiago Papasquiaro","Súchil","Tamazula","Tamazula de Victoria","Tepehuanes","Santa Catarina de Tepehuanes","Tlahualilo","Tlahualilo de Zaragoza","Topia","Vicente Guerrero","Nuevo Ideal"
			]},{estado:"Guanajuato",municipio:["Abasolo","Acámbaro","San Miguel de Allende","Apaseo el Alto","Apaseo el Grande","Atarjea","Celaya","Manuel Doblado","Ciudad Manuel Doblado","Comonfort","Coroneo","Cortazar","Cuerámaro","Doctor Mora","Dolores Hidalgo Cuna de la Independencia Nacional","Guanajuato","Huanímaro","Irapuato","Jaral del Progreso","Jerécuaro","León","León de los Aldama","Moroleón","Ocampo","Pénjamo","Pueblo Nuevo","Purísima del Rincón","Purísima de Bustos","Romita","Salamanca","Salvatierra","San Diego de la Unión","San Felipe","San Francisco del Rincón","San José Iturbide","San Luis de la Paz","Santa Catarina","Santa Cruz de Juventino Rosas","Juventino Rosas","Santiago Maravatío","Silao de la Victoria","Tarandacuao","Tarimoro","Tierra Blanca","Uriangato","Valle de Santiago","Victoria","Villagrán","Xichú","Yuriria"
			]},{estado:"Guerrero",municipio:["Acapulco de Juárez","Ahuacuotzingo","Ajuchitlán del Progreso","Alcozauca de Guerrero","Alpoyeca","Apaxtla","Ciudad Apaxtla de Castrejón","Arcelia","Atenango del Río","Atlamajalcingo del Monte","Atlixtac","Atoyac de Álvarez","Ayutla de los Libres","Azoyú","Benito Juárez","San Jerónimo de Juárez","Buenavista de Cuéllar","Coahuayutla de José María Izazaga","Coahuayutla de Guerrero","Cocula","Copala","Copalillo","Copanatoyac","Coyuca de Benítez","Coyuca de Catalán","Cuajinicuilapa","Cualác","Cuautepec","Cuetzala del Progreso","Cutzamala de Pinzón","Chilapa de Álvarez","Chilpancingo de los Bravo","Florencio Villarreal","Cruz Grande","General Canuto A. Neri","Acapetlahuaya","General Heliodoro Castillo","Tlacotepec","Huamuxtitlán","Huitzuco de los Figueroa","Ciudad de Huitzuco","Iguala de la Independencia","Igualapa","Ixcateopan de Cuauhtémoc","Zihuatanejo de Azueta","Zihuatanejo","Juan R. Escudero","Tierra Colorada","Leonardo Bravo","Chichihualco","Malinaltepec","Mártir de Cuilapan","Apango","Metlatónoc","Mochitlán","Olinalá","Ometepec","Pedro Ascencio Alquisiras","Ixcapuzalco","Petatlán","Pilcaya","Pungarabato","Ciudad Altamirano","Quechultenango","San Luis Acatlán","San Marcos","San Miguel Totolapan","Taxco de Alarcón","Tecoanapa","Técpan de Galeana","Teloloapan","Tepecoacuilco de Trujano","Tetipac","Tixtla de Guerrero","Tlacoachistlahuaca","Tlacoapa","Tlalchapa","Tlalixtaquilla de Maldonado","Tlalixtaquilla","Tlapa de Comonfort","Tlapehuala","La Unión de Isidoro Montes de Oca","La Unión","Xalpatláhuac","Xochihuehuetlán","Xochistlahuaca","Zapotitlán Tablas","Zirándaro","Zirándaro de los Chávez","Zitlala","Eduardo Neri","Zumpango del Río","Acatepec","Marquelia","Cochoapa el Grande","José Joaquín de Herrera","Hueycantenango","Juchitán","Iliatenco"
			]},{estado:"Hidalgo",municipio:["Acatlán","Acaxochitlán","Actopan","Agua Blanca de Iturbide","Ajacuba","Alfajayucan","Almoloya","Apan","El Arenal","Atitalaquia","Atlapexco","Atotonilco el Grande","Atotonilco de Tula","Calnali","Cardonal","Cuautepec de Hinojosa","Cuautepec","Chapantongo","Chapulhuacán","Chilcuautla","Eloxochitlán","Emiliano Zapata","Epazoyucan","Francisco I. Madero","Tepatepec","Huasca de Ocampo","Huautla","Huazalingo","Huehuetla","Huejutla de Reyes","Huichapan","Ixmiquilpan","Jacala de Ledezma","Jacala","Jaltocán","Juárez Hidalgo","Lolotla","Metepec","San Agustín Metzquititlán","Mezquititlán","Metztitlán","Mineral del Chico","Mineral del Monte","La Misión","Mixquiahuala de Juárez","Molango de Escamilla","Nicolás Flores","Nopala de Villagrán","Omitlán de Juárez","San Felipe Orizatlán","Pacula","Pachuca de Soto","Pisaflores","Progreso de Obregón","Mineral de la Reforma","Pachuquilla","San Agustín Tlaxiaca","San Bartolo Tutotepec","San Salvador","Santiago de Anaya","Santiago Tulantepec de Lugo Guerrero","Santiago Tulantepec","Singuilucan","Tasquillo","Tecozautla","Tenango de Doria","Tepeapulco","Tepehuacán de Guerrero","Tepeji del Río de Ocampo","Tepetitlán","Tetepango","Villa de Tezontepec","Tezontepec","Tezontepec de Aldama","Tianguistengo","Tizayuca","Tlahuelilpan","Tlahuiltepa","Tlanalapa","Tlanchinol","Tlaxcoapan","Tolcayuca","Tula de Allende","Tulancingo de Bravo","Tulancingo","Xochiatipan","Xochicoatlán","Yahualica","Zacualtipán de Ángeles","Zacualtipán","Zapotlán de Juárez","Zempoala","Zimapán"
			]},{estado:"Jalisco",municipio:["Acatic","Acatlán de Juárez","Ahualulco de Mercado","Amacueca","Amatitán","Ameca","San Juanito de Escobedo","Arandas","El Arenal","Atemajac de Brizuela","Atengo","Atenguillo","Atotonilco el Alto","Atoyac","Autlán de Navarro","Ayotlán","Ayutla","La Barca","Bolaños","Cabo Corrientes","El Tuito","Casimiro Castillo","La Resolana","Cihuatlán","Zapotlán el Grande","Ciudad Guzmán","Cocula","Colotlán","Concepción de Buenos Aires","Cuautitlán de García Barragán","Cuautla","Cuquío","Chapala","Chimaltitán","Chiquilistlán","Degollado","Ejutla","Encarnación de Díaz","Etzatlán","El Grullo","Guachinango","Guadalajara","Hostotipaquillo","Huejúcar","Huejuquilla el Alto","La Huerta","Ixtlahuacán de los Membrillos","Ixtlahuacán del Río","Jalostotitlán","Jamay","Jesús María","Jilotlán de los Dolores","Jocotepec","Juanacatlán","Juchitlán","Lagos de Moreno","El Limón","Magdalena","Santa María del Oro","La Manzanilla de la Paz","Mascota","Mazamitla","Mexticacán","Mezquitic","Mixtlán","Ocotlán","Ojuelos de Jalisco","Pihuamo","Poncitlán","Puerto Vallarta","Villa Purificación","Quitupan","El Salto","San Cristóbal de la Barranca","San Diego de Alejandría","San Juan de los Lagos","San Julián","San Marcos","San Martín de Bolaños","San Martín Hidalgo","San Miguel el Alto","Gómez Farías","San Sebastián del Sur","San Sebastián del Oeste","Santa María de los Ángeles","Sayula","Tala","Talpa de Allende","Tamazula de Gordiano","Tapalpa","Tecalitlán","Tecolotlán","Techaluta de Montenegro","Tenamaxtlán","Teocaltiche","Teocuitatlán de Corona","Tepatitlán de Morelos","Tequila","Teuchitlán","Tizapán el Alto","Tlajomulco de Zúñiga","San Pedro Tlaquepaque","Tlaquepaque","Tolimán","Tomatlán","Tonalá","Tonaya","Tonila","Totatiche","Tototlán","Tuxcacuesco","Tuxcueca","Tuxpan","Unión de San Antonio","Unión de Tula","Valle de Guadalupe","Valle de Juárez","San Gabriel","Villa Corona","Villa Guerrero","Villa Hidalgo","Cañadas de Obregón","Yahualica de González Gallo","Zacoalco de Torres","Zapopan","Zapotiltic","Zapotitlán de Vadillo","Zapotlán del Rey","Zapotlanejo","San Ignacio Cerro Gordo"
			]},{estado:"México",municipio:["Acambay de Ruíz Castañeda","Villa de Acambay de Ruíz Castañeda","Acolman","Acolman de Nezahualcóyotl","Aculco","Aculco de Espinoza","Almoloya de Alquisiras","Almoloya de Juárez","Villa de Almoloya de Juárez","Almoloya del Río","Amanalco","Amanalco de Becerra","Amatepec","Amecameca","Amecameca de Juárez","Apaxco","Apaxco de Ocampo","Atenco","San Salvador Atenco","Atizapán","Santa Cruz Atizapán","Atizapán de Zaragoza","Ciudad López Mateos","Atlacomulco","Atlacomulco de Fabela","Atlautla","Atlautla de Victoria","Axapusco","Ayapango","Ayapango de Gabriel Ramos M.","Calimaya","Calimaya de Díaz González","Capulhuac","Capulhuac de Mirafuentes","Coacalco de Berriozábal","San Francisco Coacalco","Coatepec Harinas","Cocotitlán","Coyotepec","Cuautitlán","Chalco","Chalco de Díaz Covarrubias","Chapa de Mota","Chapultepec","Chiautla","Chicoloapan","Chicoloapan de Juárez","Chiconcuac","Chiconcuac de Juárez","Chimalhuacán","Donato Guerra","Villa Donato Guerra","Ecatepec de Morelos","Ecatzingo","Ecatzingo de Hidalgo","Huehuetoca","Hueypoxtla","Huixquilucan","Huixquilucan de Degollado","Isidro Fabela","Tlazala de Fabela","Ixtapaluca","Ixtapan de la Sal","Ixtapan del Oro","Ixtlahuaca","Ixtlahuaca de Rayón","Xalatlaco","Jaltenco","Jilotepec","Jilotepec de Molina Enríquez","Jilotzingo","Santa Ana Jilotzingo","Jiquipilco","Jocotitlán","Ciudad de Jocotitlán","Joquicingo","Joquicingo de León Guzmán","Juchitepec","Juchitepec de Mariano Rivapalacio","Lerma","Lerma de Villada","Malinalco","Melchor Ocampo","Metepec","Mexicaltzingo","San Mateo Mexicaltzingo","Morelos","San Bartolo Morelos","Naucalpan de Juárez","Nezahualcóyotl","Ciudad Nezahualcóyotl","Nextlalpan","Santa Ana Nextlalpan","Nicolás Romero","Ciudad Nicolás Romero","Nopaltepec","Ocoyoacac","Ocuilan","Ocuilan de Arteaga","El Oro","El Oro de Hidalgo","Otumba","Otumba de Gómez Farías","Otzoloapan","Otzolotepec","Villa Cuauhtémoc","Ozumba","Ozumba de Alzate","Papalotla","La Paz","Los Reyes Acaquilpan","Polotitlán","Polotitlán de la Ilustración","Rayón","Santa María Rayón","San Antonio la Isla","San Felipe del Progreso","San Martín de las Pirámides","San Mateo Atenco","San Simón de Guerrero","Santo Tomás","Santo Tomás de los Plátanos","Soyaniquilpan de Juárez","San Francisco Soyaniquilpan","Sultepec","Sultepec de Pedro Ascencio de Alquisiras","Tecámac","Tecámac de Felipe Villanueva","Tejupilco","Tejupilco de Hidalgo","Temamatla","Temascalapa","Temascalcingo","Temascalcingo de José María Velasco","Temascaltepec","Temascaltepec de González","Temoaya","Tenancingo","Tenancingo de Degollado","Tenango del Aire","Tenango del Valle","Tenango de Arista","Teoloyucan","Teotihuacán","Teotihuacán de Arista","Tepetlaoxtoc","Tepetlaoxtoc de Hidalgo","Tepetlixpa","Tepotzotlán","Tequixquiac","Texcaltitlán","Texcalyacac","San Mateo Texcalyacac","Texcoco","Texcoco de Mora","Tezoyuca","Tianguistenco","Santiago Tianguistenco de Galeana","Timilpan","San Andrés Timilpan","Tlalmanalco","Tlalmanalco de Velázquez","Tlalnepantla de Baz","Tlalnepantla","Tlatlaya","Toluca","Toluca de Lerdo","Tonatico","Tultepec","Tultitlán","Tultitlán de Mariano Escobedo","Valle de Bravo","Villa de Allende","San José Villa de Allende","Villa del Carbón","Villa Guerrero","Villa Victoria","Xonacatlán","Zacazonapan","Zacualpan","Zinacantepec","San Miguel Zinacantepec","Zumpahuacán","Zumpango","Zumpango de Ocampo","Cuautitlán Izcalli","Valle de Chalco Solidaridad","Xico","Luvianos","Villa Luvianos","San José del Rincón","San José del Rincón Centro","Tonanitla","Santa María Tonanitla"
			]},{estado:"Michoacán de Ocampo",municipio:["Acuitzio","Acuitzio del Canje","Aguililla","Álvaro Obregón","Angamacutiro","Angamacutiro de la Unión","Angangueo","Mineral de Angangueo","Apatzingán","Apatzingán de la Constitución","Aporo","Aquila","Ario","Ario de Rosales","Arteaga","Briseñas","Briseñas de Matamoros","Buenavista","Buenavista Tomatlán","Carácuaro","Carácuaro de Morelos","Coahuayana","Coahuayana de Hidalgo","Coalcomán de Vázquez Pallares","Coeneo","Coeneo de la Libertad","Contepec","Copándaro","Copándaro de Galeana","Cotija","Cotija de la Paz","Cuitzeo","Cuitzeo del Porvenir","Charapan","Charo","Chavinda","Cherán","Chilchota","Chinicuila","Villa Victoria","Chucándiro","Churintzio","Churumuco","Churumuco de Morelos","Ecuandureo","Epitacio Huerta","Erongarícuaro","Gabriel Zamora","Lombardía","Hidalgo","Ciudad Hidalgo","La Huacana","Huandacareo","Huaniqueo","Huaniqueo de Morales","Huetamo","Huetamo de Núñez","Huiramba","Indaparapeo","Irimbo","Ixtlán","Ixtlán de los Hervores","Jacona","Jacona de Plancarte","Jiménez","Villa Jiménez","Jiquilpan","Jiquilpan de Juárez","Juárez","Benito Juárez","Jungapeo","Jungapeo de Juárez","Lagunillas","Madero","Villa Madero","Maravatío","Maravatío de Ocampo","Marcos Castellanos","San José de Gracia","Lázaro Cárdenas","Ciudad Lázaro Cárdenas","Morelia","Morelos","Villa Morelos","Múgica","Nueva Italia de Ruiz","Nahuatzen","Nocupétaro","Nocupétaro de Morelos","Nuevo Parangaricutiro","Nuevo San Juan Parangaricutiro","Nuevo Urecho","Numarán","Ocampo","Pajacuarán","Panindícuaro","Parácuaro","Paracho","Paracho de Verduzco","Pátzcuaro","Penjamillo","Penjamillo de Degollado","Peribán","Peribán de Ramos","La Piedad","La Piedad de Cabadas","Purépero","Purépero de Echáiz","Puruándiro","Queréndaro","Quiroga","Cojumatlán de Régules","Los Reyes","Los Reyes de Salgado","Sahuayo","Sahuayo de Morelos","San Lucas","Santa Ana Maya","Salvador Escalante","Santa Clara del Cobre","Senguio","Susupuato","Susupuato de Guerrero","Tacámbaro","Tacámbaro de Codallos","Tancítaro","Tangamandapio","Santiago Tangamandapio","Tangancícuaro","Tangancícuaro de Arista","Tanhuato","Tanhuato de Guerrero","Taretan","Tarímbaro","Tepalcatepec","Tingambato","Tingüindín","Tiquicheo de Nicolás Romero","Tiquicheo","Tlalpujahua","Tlalpujahua de Rayón","Tlazazalca","Tocumbo","Tumbiscatío","Tumbiscatío de Ruiz","Turicato","Tuxpan","Tuzantla","Tzintzuntzan","Tzitzio","Uruapan","Venustiano Carranza","San Pedro Cahro","Villamar","Vista Hermosa","Vista Hermosa de Negrete","Yurécuaro","Zacapu","Zamora","Zamora de Hidalgo","Zináparo","Zinapécuaro","Zinapécuaro de Figueroa","Ziracuaretiro","Zitácuaro","Heróica Zitácuaro","José Sixto Verduzco","Pastor Ortiz"
			]},{estado:"Morelos",municipio:["Amacuzac","Atlatlahucan","Axochiapan","Ayala","Ciudad Ayala","Coatlán del Río","Cuautla","Cuernavaca","Emiliano Zapata","Huitzilac","Jantetelco","Jiutepec","Jojutla","Jonacatepec de Leandro Valle","Mazatepec","Miacatlán","Ocuituco","Puente de Ixtla","Temixco","Tepalcingo","Tepoztlán","Tetecala","Tetela del Volcán","Tlalnepantla","Tlaltizapán de Zapata","Tlaltizapán","Tlaquiltenango","Tlayacapan","Totolapan","Xochitepec","Yautepec","Yautepec de Zaragoza","Yecapixtla","Zacatepec","Zacatepec de Hidalgo","Zacualpan de Amilpas","Temoac"
			]},{estado:"Nayarit",municipio:["Acaponeta","Ahuacatlán","Amatlán de Cañas","Compostela","Huajicori","Ixtlán del Río","Jala","Xalisco","Del Nayar","Jesús María","Rosamorada","Ruíz","San Blas","San Pedro Lagunillas","Santa María del Oro","Santiago Ixcuintla","Tecuala","Tepic","Tuxpan","La Yesca","Bahía de Banderas","Valle de Banderas"
			]},{estado:"Nuevo León",municipio:["Abasolo","Agualeguas","Los Aldamas","Allende","Ciudad de Allende","Anáhuac","Apodaca","Ciudad Apodaca","Aramberri","Bustamante","Cadereyta Jiménez","El Carmen","Carmen","Cerralvo","Ciudad Cerralvo","Ciénega de Flores","China","Doctor Arroyo","Doctor Coss","Doctor González","Galeana","García","San Pedro Garza García","General Bravo","General Escobedo","Ciudad General Escobedo","General Terán","Ciudad General Terán","General Treviño","General Zaragoza","General Zuazua","Guadalupe","Los Herreras","Higueras","Hualahuises","Iturbide","Juárez","Ciudad Benito Juárez","Lampazos de Naranjo","Linares","Marín","Melchor Ocampo","Mier y Noriega","Mina","Montemorelos","Monterrey","Parás","Pesquería","Los Ramones","Rayones","Sabinas Hidalgo","Ciudad Sabinas Hidalgo","Salinas Victoria","San Nicolás de los Garza","Hidalgo","Santa Catarina","Ciudad Santa Catarina","Santiago","Vallecillo","Villaldama","Ciudad de Villaldama"
			]},{estado:"Oaxaca",municipio:["Abejones","Acatlán de Pérez Figueroa","Asunción Cacalotepec","Asunción Cuyotepeji","Asunción Ixtaltepec","Asunción Nochixtlán","Asunción Ocotlán","Asunción Tlacolulita","Ayotzintepec","El Barrio de la Soledad","Calihualá","Candelaria Loxicha","Ciénega de Zimatlán","Ciudad Ixtepec","Coatecas Altas","Coicoyán de las Flores","La Compañía","Concepción Buenavista","Concepción Pápalo","Constancia del Rosario","Cosolapa","Cosoltepec","Cuilápam de Guerrero","Cuyamecalco Villa de Zaragoza","Chahuites","Chalcatongo de Hidalgo","Chiquihuitlán de Benito Juárez","Heroica Ciudad de Ejutla de Crespo","Eloxochitlán de Flores Magón","El Espinal","Tamazulápam del Espíritu Santo","Fresnillo de Trujano","Guadalupe Etla","Guadalupe de Ramírez","Guelatao de Juárez","Guevea de Humboldt","Mesones Hidalgo","Villa Hidalgo","Heroica Ciudad de Huajuapan de León","Huautepec","Huautla de Jiménez","Ixtlán de Juárez","Heroica Ciudad de Juchitán de Zaragoza","Loma Bonita","Magdalena Apasco","Magdalena Jaltepec","Santa Magdalena Jicotlán","Magdalena Mixtepec","Magdalena Ocotlán","Magdalena Peñasco","Magdalena Teitipac","Magdalena Tequisistlán","Magdalena Tlacotepec","Magdalena Zahuatlán","Mariscala de Juárez","Mártires de Tacubaya","Matías Romero Avendaño","Mazatlán Villa de Flores","Miahuatlán de Porfirio Díaz","Mixistlán de la Reforma","Monjas","Natividad","Nazareno Etla","Nejapa de Madero","Ixpantepec Nieves","Santiago Niltepec","Oaxaca de Juárez","Ocotlán de Morelos","La Pe","Pinotepa de Don Luis","Pluma Hidalgo","San José del Progreso","Putla Villa de Guerrero","Santa Catarina Quioquitani","Reforma de Pineda","La Reforma","Reyes Etla","Rojas de Cuauhtémoc","Salina Cruz","San Agustín Amatengo","San Agustín Atenango","San Agustín Chayuco","San Agustín de las Juntas","San Agustín Etla","San Agustín Loxicha","San Agustín Tlacotepec","San Agustín Yatareni","San Andrés Cabecera Nueva","San Andrés Dinicuiti","San Andrés Huaxpaltepec","San Andrés Huayápam","San Andrés Ixtlahuaca","San Andrés Lagunas","San Andrés Nuxiño","San Andrés Paxtlán","San Andrés Sinaxtla","San Andrés Solaga","San Andrés Teotilálpam","San Andrés Tepetlapa","San Andrés Yaá","San Andrés Zabache","San Andrés Zautla","San Antonino Castillo Velasco","San Antonino el Alto","San Antonino Monte Verde","San Antonio Acutla","San Antonio de la Cal","San Antonio Huitepec","San Antonio Nanahuatípam","San Antonio Sinicahua","San Antonio Tepetlapa","San Baltazar Chichicápam","San Baltazar Loxicha","San Baltazar Yatzachi el Bajo","San Bartolo Coyotepec","San Bartolomé Ayautla","San Bartolomé Loxicha","San Bartolomé Quialana","San Bartolomé Yucuañe","San Bartolomé Zoogocho","San Bartolo Soyaltepec","San Bartolo Yautepec","San Bernardo Mixtepec","San Blas Atempa","San Carlos Yautepec","San Cristóbal Amatlán","San Cristóbal Amoltepec","San Cristóbal Lachirioag","San Cristóbal Suchixtlahuaca","San Dionisio del Mar","San Dionisio Ocotepec","San Dionisio Ocotlán","San Esteban Atatlahuca","San Felipe Jalapa de Díaz","San Felipe Tejalápam","San Felipe Usila","San Francisco Cahuacuá","San Francisco Cajonos","San Francisco Chapulapa","San Francisco Chindúa","San Francisco del Mar","San Francisco Huehuetlán","San Francisco Ixhuatán","San Francisco Jaltepetongo","San Francisco Lachigoló","San Francisco Logueche","San Francisco Nuxaño","San Francisco Ozolotepec","San Francisco Sola","San Francisco Telixtlahuaca","San Francisco Teopan","San Francisco Tlapancingo","San Gabriel Mixtepec","San Ildefonso Amatlán","San Ildefonso Sola","San Ildefonso Villa Alta","San Jacinto Amilpas","San Jacinto Tlacotepec","San Jerónimo Coatlán","San Jerónimo Silacayoapilla","San Jerónimo Sosola","San Jerónimo Taviche","San Jerónimo Tecóatl","San Jorge Nuchita","San José Ayuquila","San José Chiltepec","San José del Peñasco","San José Estancia Grande","San José Independencia","San José Lachiguiri","San José Tenango","San Juan Achiutla","San Juan Atepec","Ánimas Trujano","San Juan Bautista Atatlahuca","San Juan Bautista Coixtlahuaca","San Juan Bautista Cuicatlán","San Juan Bautista Guelache","San Juan Bautista Jayacatlán","San Juan Bautista Lo de Soto","San Juan Bautista Suchitepec","San Juan Bautista Tlacoatzintepec","San Juan Bautista Tlachichilco","San Juan Bautista Tuxtepec","San Juan Cacahuatepec","San Juan Cieneguilla","San Juan Coatzóspam","San Juan Colorado","San Juan Comaltepec","San Juan Cotzocón","San Juan Chicomezúchil","San Juan Chilateca","San Juan del Estado","San Juan del Río","San Juan Diuxi","San Juan Evangelista Analco","San Juan Guelavía","San Juan Guichicovi","San Juan Ihualtepec","San Juan Juquila Mixes","San Juan Juquila Vijanos","San Juan Lachao","San Juan Lachigalla","San Juan Lajarcia","San Juan Lalana","San Juan de los Cués","San Juan Mazatlán","San Juan Mixtepec","San Juan Mixtepec Distrito 08","San Juan Mixtepec Distrito 26","San Juan Ñumí","San Juan Ozolotepec","San Juan Petlapa","San Juan Quiahije","San Juan Quiotepec","San Juan Sayultepec","San Juan Tabaá","San Juan Tamazola","San Juan Teita","San Juan Teitipac","San Juan Tepeuxila","San Juan Teposcolula","San Juan Yaeé","San Juan Yatzona","San Juan Yucuita","San Lorenzo","San Lorenzo Albarradas","San Lorenzo Cacaotepec","San Lorenzo Cuaunecuiltitla","San Lorenzo Texmelúcan","San Lorenzo Victoria","San Lucas Camotlán","San Lucas Ojitlán","San Lucas Quiaviní","San Lucas Zoquiápam","San Luis Amatlán","San Marcial Ozolotepec","San Marcos Arteaga","San Martín de los Cansecos","San Martín Huamelúlpam","San Martín Itunyoso","San Martín Lachilá","San Martín Peras","San Martín Tilcajete","San Martín Toxpalan","San Martín Zacatepec","San Mateo Cajonos","Capulálpam de Méndez","San Mateo del Mar","San Mateo Yoloxochitlán","San Mateo Etlatongo","San Mateo Nejápam","San Mateo Peñasco","San Mateo Piñas","San Mateo Río Hondo","San Mateo Sindihui","San Mateo Tlapiltepec","San Melchor Betaza","San Miguel Achiutla","San Miguel Ahuehuetitlán","San Miguel Aloápam","San Miguel Amatitlán","San Miguel Amatlán","San Miguel Coatlán","San Miguel Chicahua","San Miguel Chimalapa","San Miguel del Puerto","San Miguel del Río","San Miguel Ejutla","San Miguel el Grande","San Miguel Huautla","San Miguel Mixtepec","San Miguel Panixtlahuaca","San Miguel Peras","San Miguel Piedras","San Miguel Quetzaltepec","San Miguel Santa Flor","Villa Sola de Vega","San Miguel Soyaltepec","Temascal","San Miguel Suchixtepec","Villa Talea de Castro","San Miguel Tecomatlán","San Miguel Tenango","San Miguel Tequixtepec","San Miguel Tilquiápam","San Miguel Tlacamama","San Miguel Tlacotepec","San Miguel Tulancingo","San Miguel Yotao","San Nicolás","San Nicolás Hidalgo","San Pablo Coatlán","San Pablo Cuatro Venados","San Pablo Etla","San Pablo Huitzo","San Pablo Huixtepec","San Pablo Macuiltianguis","San Pablo Tijaltepec","San Pablo Villa de Mitla","San Pablo Yaganiza","San Pedro Amuzgos","San Pedro Apóstol","San Pedro Atoyac","San Pedro Cajonos","San Pedro Coxcaltepec Cántaros","San Pedro Comitancillo","San Pedro el Alto","San Pedro Huamelula","San Pedro Huilotepec","San Pedro Ixcatlán","San Pedro Ixtlahuaca","San Pedro Jaltepetongo","San Pedro Jicayán","San Pedro Jocotipac","San Pedro Juchatengo","San Pedro Mártir","San Pedro Mártir Quiechapa","San Pedro Mártir Yucuxaco","San Pedro Mixtepec","San Pedro Mixtepec Distrito 22","San Pedro Mixtepec Distrito 26","San Pedro Molinos","San Pedro Nopala","San Pedro Ocopetatillo","San Pedro Ocotepec","San Pedro Pochutla","San Pedro Quiatoni","San Pedro Sochiápam","San Pedro Tapanatepec","San Pedro Taviche","San Pedro Teozacoalco","San Pedro Teutila","San Pedro Tidaá","San Pedro Topiltepec","San Pedro Totolápam","Villa de Tututepec","Villa de Tututepec de Melchor Ocampo","San Pedro Yaneri","San Pedro Yólox","San Pedro y San Pablo Ayutla","Villa de Etla","San Pedro y San Pablo Teposcolula","San Pedro y San Pablo Tequixtepec","San Pedro Yucunama","San Raymundo Jalpan","San Sebastián Abasolo","San Sebastián Coatlán","San Sebastián Ixcapa","San Sebastián Nicananduta","San Sebastián Río Hondo","San Sebastián Tecomaxtlahuaca","San Sebastián Teitipac","San Sebastián Tutla","San Simón Almolongas","San Simón Zahuatlán","Santa Ana","Santa Ana Ateixtlahuaca","Santa Ana Cuauhtémoc","Santa Ana del Valle","Santa Ana Tavela","Santa Ana Tlapacoyan","Santa Ana Yareni","Santa Ana Zegache","Santa Catalina Quierí","Santa Catarina Cuixtla","Santa Catarina Ixtepeji","Santa Catarina Juquila","Santa Catarina Lachatao","Santa Catarina Loxicha","Santa Catarina Mechoacán","Santa Catarina Minas","Santa Catarina Quiané","Santa Catarina Tayata","Santa Catarina Ticuá","Santa Catarina Yosonotú","Santa Catarina Zapoquila","Santa Cruz Acatepec","Santa Cruz Amilpas","Santa Cruz de Bravo","Santa Cruz Itundujia","Santa Cruz Mixtepec","Santa Cruz Nundaco","Santa Cruz Papalutla","Santa Cruz Tacache de Mina","Santa Cruz Tacahua","Santa Cruz Tayata","Santa Cruz Xitla","Santa Cruz Xoxocotlán","Santa Cruz Zenzontepec","Santa Gertrudis","Santa Inés del Monte","Santa Inés Yatzeche","Santa Lucía del Camino","Santa Lucía Miahuatlán","Santa Lucía Monteverde","Santa Lucía Ocotlán","Santa María Alotepec","Santa María Apazco","Santa María la Asunción","Heroica Ciudad de Tlaxiaco","Ayoquezco de Aldama","Santa María Atzompa","Santa María Camotlán","Santa María Colotepec","Santa María Cortijo","Santa María Coyotepec","Santa María Chachoápam","Villa de Chilapa de Díaz","Santa María Chilchotla","Santa María Chimalapa","Santa María del Rosario","Santa María del Tule","Santa María Ecatepec","Santa María Guelacé","Santa María Guienagati","Santa María Huatulco","Santa María Huazolotitlán","Santa María Ipalapa","Santa María Ixcatlán","Santa María Jacatepec","Santa María Jalapa del Marqués","Santa María Jaltianguis","Santa María Lachixío","Santa María Mixtequilla","Santa María Nativitas","Santa María Nduayaco","Santa María Ozolotepec","Santa María Pápalo","Santa María Peñoles","Santa María Petapa","Santa María Quiegolani","Santa María Sola","Santa María Tataltepec","Santa María Tecomavaca","Santa María Temaxcalapa","Santa María Temaxcaltepec","Santa María Teopoxco","Santa María Tepantlali","Santa María Texcatitlán","Santa María Tlahuitoltepec","Santa María Tlalixtac","Santa María Tonameca","Santa María Totolapilla","Santa María Xadani","Santa María Yalina","Santa María Yavesía","Santa María Yolotepec","Santa María Yosoyúa","Santa María Yucuhiti","Santa María Zacatepec","Santa María Zaniza","Santa María Zoquitlán","Santiago Amoltepec","Santiago Apoala","Santiago Apóstol","Santiago Astata","Santiago Atitlán","Santiago Ayuquililla","Santiago Cacaloxtepec","Santiago Camotlán","Santiago Comaltepec","Santiago Chazumba","Santiago Choápam","Santiago del Río","Santiago Huajolotitlán","Santiago Huauclilla","Santiago Ihuitlán Plumas","Santiago Ixcuintepec","Santiago Ixtayutla","Santiago Jamiltepec","Santiago Jocotepec","Monte Negro","Santiago Juxtlahuaca","Santiago Lachiguiri","Santiago Lalopa","Santiago Laollaga","Santiago Laxopa","Santiago Llano Grande","Santiago Matatlán","Santiago Miltepec","Santiago Minas","Santiago Nacaltepec","Santiago Nejapilla","Santiago Nundiche","Santiago Nuyoó","Santiago Pinotepa Nacional","Santiago Suchilquitongo","Santiago Tamazola","Santiago Tapextla","Villa Tejúpam de la Unión","Santiago Tenango","Santiago Tepetlapa","Santiago Tetepec","Santiago Texcalcingo","Santiago Textitlán","Santiago Tilantongo","Santiago Tillo","Santiago Tlazoyaltepec","Santiago Xanica","Santiago Xiacuí","Santiago Yaitepec","Santiago Yaveo","Santiago Yolomécatl","Santiago Yosondúa","Santiago Yucuyachi","Santiago Zacatepec","Santiago Zoochila","Nuevo Zoquiápam","Santo Domingo Ingenio","Santo Domingo Albarradas","Santo Domingo Armenta","Santo Domingo Chihuitán","Santo Domingo de Morelos","Santo Domingo Ixcatlán","Santo Domingo Nuxaá","Santo Domingo Ozolotepec","Santo Domingo Petapa","Santo Domingo Roayaga","Santo Domingo Tehuantepec","Santo Domingo Teojomulco","Santo Domingo Tepuxtepec","Santo Domingo Tlatayápam","Santo Domingo Tomaltepec","Santo Domingo Tonalá","Santo Domingo Tonaltepec","Santo Domingo Xagacía","Santo Domingo Yanhuitlán","Santo Domingo Yodohino","Santo Domingo Zanatepec","Santos Reyes Nopala","Santos Reyes Pápalo","Santos Reyes Tepejillo","Santos Reyes Yucuná","Santo Tomás Jalieza","Santo Tomás Mazaltepec","Santo Tomás Ocotepec","Santo Tomás Tamazulapan","San Vicente Coatlán","San Vicente Lachixío","San Vicente Nuñú","Silacayoápam","Sitio de Xitlapehua","Soledad Etla","Villa de Tamazulápam del Progreso","Tanetze de Zaragoza","Taniche","Tataltepec de Valdés","Teococuilco de Marcos Pérez","Teotitlán de Flores Magón","Teotitlán del Valle","Teotongo","Tepelmeme Villa de Morelos","Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca","San Jerónimo Tlacochahuaya","Tlacolula de Matamoros","Tlacotepec Plumas","Tlalixtac de Cabrera","Totontepec Villa de Morelos","Trinidad Zaachila","La Trinidad Vista Hermosa","Unión Hidalgo","Valerio Trujano","San Juan Bautista Valle Nacional","Villa Díaz Ordaz","Yaxe","Magdalena Yodocono de Porfirio Díaz","Yogana","Yutanduchi de Guerrero","Villa de Zaachila","San Mateo Yucutindoo","Zapotitlán Lagunas","Zapotitlán Palmas","Santa Inés de Zaragoza","Zimatlán de Álvarez"
			]},{estado:"Puebla",municipio:["Acajete","Acateno","San José Acateno","Acatlán","Acatlán de Osorio","Acatzingo","Acatzingo de Hidalgo","Acteopan","Ahuacatlán","Ahuatlán","Ahuazotepec","Ahuehuetitla","Ajalpan","Ciudad de Ajalpan","Albino Zertuche","Acaxtlahuacán de Albino Zertuche","Aljojuca","Altepexi","Amixtlán","Amozoc","Amozoc de Mota","Aquixtla","Atempan","Atexcal","San Martín Atexcal","Atlixco","Atoyatempan","Atzala","Atzitzihuacán","Santiago Atzitzihuacán","Atzitzintla","Axutla","Ayotoxco de Guerrero","Calpan","San Andrés Calpan","Caltepec","Camocuautla","Caxhuacan","Coatepec","Coatzingo","Cohetzala","Santa María Cohetzala","Cohuecan","Coronango","Santa María Coronango","Coxcatlán","Coyomeapan","Santa María Coyomeapan","Coyotepec","San Vicente Coyotepec","Cuapiaxtla de Madero","Cuautempan","San Esteban Cuautempan","Cuautinchán","Cuautlancingo","San Juan Cuautlancingo","Cuayuca de Andrade","San Pedro Cuayuca","Cuetzalan del Progreso","Ciudad de Cuetzalan","Cuyoaco","Chalchicomula de Sesma","Ciudad Serdán","Chapulco","Chiautla","Ciudad de Chiautla de Tapia","Chiautzingo","San Lorenzo Chiautzingo","Chiconcuautla","Chichiquila","Chietla","Chigmecatitlán","Chignahuapan","Ciudad de Chignahuapan","Chignautla","Chila","Chila de la Sal","Honey","Chilchotla","Rafael J. García","Chinantla","Domingo Arenas","Eloxochitlán","Epatlán","San Juan Epatlán","Esperanza","Francisco Z. Mena","Metlaltoyuca","General Felipe Ángeles","San Pablo de las Tunas","Guadalupe","Guadalupe Victoria","Hermenegildo Galeana","Bienvenido","Huaquechula","Huatlatlauca","Huauchinango","Huehuetla","Huehuetlán el Chico","Huejotzingo","Hueyapan","Hueytamalco","Hueytlalpan","Huitzilan de Serdán","Huitzilan","Huitziltepec","Santa Clara Huitziltepec","Atlequizayan","Ixcamilpa de Guerrero","Ixcamilpa","Ixcaquixtla","San Juan Ixcaquixtla","Ixtacamaxtitlán","Ixtepec","Izúcar de Matamoros","Jalpan","Jolalpan","Jonotla","Jopala","Juan C. Bonilla","Cuanalá","Juan Galindo","Nuevo Necaxa","Juan N. Méndez","Atenayuca","Lafragua","Saltillo","Libres","Ciudad de Libres","La Magdalena Tlatlauquitepec","Mazapiltepec de Juárez","Mixtla","San Francisco Mixtla","Molcaxac","Cañada Morelos","Morelos Cañada","Naupan","Nauzontla","Nealtican","San Buenaventura Nealtican","Nicolás Bravo","Nopalucan","Nopalucan de la Granja","Ocotepec","Ocoyucan","Santa Clara Ocoyucan","Olintla","Oriental","Pahuatlán","Ciudad de Pahuatlán de Valle","Palmar de Bravo","Pantepec","Petlalcingo","Piaxtla","Puebla","Heroica Puebla de Zaragoza","Quecholac","Quimixtlán","Rafael Lara Grajales","Ciudad de Rafael Lara Grajales","Los Reyes de Juárez","San Andrés Cholula","San Antonio Cañada","San Diego la Mesa Tochimiltzingo","Tochimiltzingo","San Felipe Teotlalcingo","San Felipe Tepatlán","San Gabriel Chilac","San Gregorio Atzompa","San Jerónimo Tecuanipan","San Jerónimo Xayacatlán","San José Chiapa","San José Miahuatlán","San Juan Atenco","San Juan Atzompa","San Martín Texmelucan","San Martín Texmelucan de Labastida","San Martín Totoltepec","San Matías Tlalancaleca","San Miguel Ixitlán","San Miguel Xoxtla","San Nicolás Buenos Aires","San Nicolás de los Ranchos","San Pablo Anicano","San Pedro Cholula","Cholula de Rivadavia","San Pedro Yeloixtlahuaca","San Salvador el Seco","San Salvador el Verde","San Salvador Huixcolotla","San Sebastián Tlacotepec","Tlacotepec de Porfirio Díaz","Santa Catarina Tlaltempan","Santa Inés Ahuatempan","Santa Isabel Cholula","Santiago Miahuatlán","Huehuetlán el Grande","Santo Domingo Huehuetlán","Santo Tomás Hueyotlipan","Soltepec","Tecali de Herrera","Tecamachalco","Tecomatlán","Tehuacán","Tehuitzingo","Tenampulco","Teopantlán","Teotlalco","Tepanco de López","Tepango de Rodríguez","Tepatlaxco de Hidalgo","Tepeaca","Tepemaxalco","San Felipe Tepemaxalco","Tepeojuma","Tepetzintla","Tepexco","Tepexi de Rodríguez","Tepeyahualco","Tepeyahualco de Cuauhtémoc","Tetela de Ocampo","Ciudad de Tetela de Ocampo","Teteles de Avila Castillo","Teziutlán","Tianguismanalco","Tilapa","Tlacotepec de Benito Juárez","Tlacuilotepec","Tlachichuca","Tlahuapan","Santa Rita Tlahuapan","Tlaltenango","Tlanepantla","Tlaola","Tlapacoya","Tlapanalá","Tlatlauquitepec","Ciudad de Tlatlauquitepec","Tlaxco","Tochimilco","Tochtepec","Totoltepec de Guerrero","Tulcingo","Tulcingo de Valle","Tuzamapan de Galeana","Tzicatlacoyan","Venustiano Carranza","Vicente Guerrero","Santa María del Monte","Xayacatlán de Bravo","Xicotepec","Xicotepec de Juárez","Xicotlán","Xiutetelco","San Juan Xiutetelco","Xochiapulco","Cinco de Mayo","Xochiltepec","Xochitlán de Vicente Suárez","Xochitlán Todos Santos","Xochitlán","Yaonáhuac","Yehualtepec","Zacapala","Zacapoaxtla","Zacatlán","Zapotitlán","Zapotitlán Salinas","Zapotitlán de Méndez","Zaragoza","Zautla","Santiago Zautla","Zihuateutla","Zinacatepec","San Sebastián Zinacatepec","Zongozotla","Zoquiapan","Zoquitlán"
			]},{estado:"Querétaro",municipio:["Amealco de Bonfil","Pinal de Amoles","Arroyo Seco","Cadereyta de Montes","Colón","Corregidora","El Pueblito","Ezequiel Montes","Huimilpan","Jalpan de Serra","Landa de Matamoros","El Marqués","La Cañada","Pedro Escobedo","Peñamiller","Querétaro","Santiago de Querétaro","San Joaquín","San Juan del Río","Tequisquiapan","Tolimán"
			]},{estado:"Quintana Roo",municipio:["Cozumel","Felipe Carrillo Puerto","Isla Mujeres","Othón P. Blanco","Chetumal","Benito Juárez","Cancún","José María Morelos","Lázaro Cárdenas","Kantunilkín","Solidaridad","Playa del Carmen","Tulum","Bacalar","Puerto Morelos"
			]},{estado:"San Luis Potosí",municipio:["Ahualulco","Ahualulco del Sonido 13","Alaquines","Aquismón","Armadillo de los Infante","Cárdenas","Catorce","Real de Catorce","Cedral","Cerritos","Cerro de San Pedro","Ciudad del Maíz","Ciudad Fernández","Tancanhuitz","Ciudad Valles","Coxcatlán","Charcas","Ebano","Guadalcázar","Huehuetlán","Lagunillas","Matehuala","Mexquitic de Carmona","Moctezuma","Rayón","Rioverde","Salinas","Salinas de Hidalgo","San Antonio","San Ciro de Acosta","San Luis Potosí","San Martín Chalchicuautla","San Nicolás Tolentino","Santa Catarina","Santa María del Río","Santo Domingo","San Vicente Tancuayalab","Soledad de Graciano Sánchez","Tamasopo","Tamazunchale","Tampacán","Tampamolón Corona","Tamuín","Tanlajás","Tanquián de Escobedo","Tierra Nueva","Vanegas","Venado","Villa de Arriaga","Villa de Guadalupe","Villa de la Paz","Villa de Ramos","Villa de Reyes","Villa Hidalgo","Villa Juárez","Axtla de Terrazas","Xilitla","Zaragoza","Villa de Zaragoza","Villa de Arista","Matlapa","El Naranjo"
			]},{estado:"Sinaloa",municipio:["Ahome","Los Mochis","Angostura","Badiraguato","Concordia","Cosalá","Culiacán","Culiacán Rosales","Choix","Elota","La Cruz","Escuinapa","Escuinapa de Hidalgo","El Fuerte","Guasave","Mazatlán","Mocorito","Rosario","El Rosario","Salvador Alvarado","Guamúchil","San Ignacio","Sinaloa","Sinaloa de Leyva","Navolato"
			]},{estado:"Sonora",municipio:["Aconchi","Agua Prieta","Alamos","Altar","Arivechi","Arizpe","Atil","Bacadéhuachi","Bacanora","Bacerac","Bacoachi","Bácum","Banámichi","Baviácora","Bavispe","Benjamín Hill","Caborca","Heroica Caborca","Cajeme","Ciudad Obregón","Cananea","Heroica Ciudad de Cananea","Carbó","La Colorada","Cucurpe","Cumpas","Divisaderos","Empalme","Etchojoa","Fronteras","Granados","Guaymas","Heroica Guaymas","Hermosillo","Huachinera","Huásabas","Huatabampo","Huépac","Imuris","Magdalena","Magdalena de Kino","Mazatán","Moctezuma","Naco","Nácori Chico","Nacozari de García","Navojoa","Nogales","Heroica Nogales","Onavas","Opodepe","Oquitoa","Pitiquito","Puerto Peñasco","Quiriego","Rayón","Rosario","Sahuaripa","San Felipe de Jesús","San Javier","San Luis Río Colorado","San Miguel de Horcasitas","San Pedro de la Cueva","Santa Ana","Santa Cruz","Sáric","Soyopa","Suaqui Grande","Tepache","Trincheras","Tubutama","Ures","Heroica Ciudad de Ures","Villa Hidalgo","Villa Pesqueira","Villa Pesqueira (Mátape)","Yécora","General Plutarco Elías Calles","Sonoyta","Benito Juárez","Villa Juárez","San Ignacio Río Muerto"
			]},{estado:"Tabasco",municipio:["Balancán","Cárdenas","Centla","Frontera","Centro","Villahermosa","Comalcalco","Cunduacán","Emiliano Zapata","Huimanguillo","Jalapa","Jalpa de Méndez","Jonuta","Macuspana","Nacajuca","Paraíso","Tacotalpa","Teapa","Tenosique","Tenosique de Pino Suárez"
			]},{estado:"Tamaulipas",municipio:["Abasolo","Aldama","Altamira","Antiguo Morelos","Burgos","Bustamante","Camargo","Ciudad Camargo","Casas","Ciudad Madero","Cruillas","Gómez Farías","González","Güémez","Guerrero","Nueva Ciudad Guerrero","Gustavo Díaz Ordaz","Ciudad Gustavo Díaz Ordaz","Hidalgo","Jaumave","Jiménez","Santander Jiménez","Llera","Llera de Canales","Mainero","Villa Mainero","El Mante","Ciudad Mante","Matamoros","Heroica Matamoros","Méndez","Mier","Miguel Alemán","Ciudad Miguel Alemán","Miquihuana","Nuevo Laredo","Nuevo Morelos","Ocampo","Padilla","Nueva Villa de Padilla","Palmillas","Reynosa","Río Bravo","Ciudad Río Bravo","San Carlos","San Fernando","San Nicolás","Soto la Marina","Tampico","Tula","Ciudad Tula","Valle Hermoso","Victoria","Ciudad Victoria","Villagrán","Xicoténcatl"
			]},{estado:"Tlaxcala",municipio:["Amaxac de Guerrero","Apetatitlán de Antonio Carvajal","Apetatitlán","Atlangatepec","Atltzayanca","Atlzayanca","Apizaco","Ciudad de Apizaco","Calpulalpan","Heroica Ciudad de Calpulalpan","El Carmen Tequexquitla","Villa de El Carmen Tequexquitla","Cuapiaxtla","Cuaxomulco","Chiautempan","Santa Ana Chiautempan","Muñoz de Domingo Arenas","Muñoz","Españita","Huamantla","Hueyotlipan","Ixtacuixtla de Mariano Matamoros","Villa Mariano Matamoros","Ixtenco","Mazatecochco de José María Morelos","Mazatecochco","Contla de Juan Cuamatzi","Contla","Tepetitla de Lardizábal","Tepetitla","Sanctórum de Lázaro Cárdenas","Sanctórum","Nanacamilpa de Mariano Arista","Ciudad de Nanacamilpa","Acuamanala de Miguel Hidalgo","Acuamanala","Natívitas","Panotla","San Pablo del Monte","Villa Vicente Guerrero","Santa Cruz Tlaxcala","Tenancingo","Teolocholco","Tepeyanco","Terrenate","Tetla de la Solidaridad","Tetla","Tetlatlahuca","Tlaxcala","Tlaxcala de Xicohténcatl","Tlaxco","Tocatlán","Totolac","San Juan Totolac","Ziltlaltépec de Trinidad Sánchez Santos","Zitlaltépec","Tzompantepec","Xaloztoc","Xaltocan","Papalotla de Xicohténcatl","Papalotla","Xicohtzinco","Yauhquemehcan","San Dionisio Yauhquemehcan","Zacatelco","Benito Juárez","Emiliano Zapata","Lázaro Cárdenas","La Magdalena Tlaltelulco","San Damián Texóloc","San Francisco Tetlanohcan","San Jerónimo Zacualpan","San José Teacalco","San Juan Huactzinco","San Lorenzo Axocomanitla","San Lucas Tecopilco","Santa Ana Nopalucan","Santa Apolonia Teacalco","Santa Catarina Ayometla","Santa Cruz Quilehtla","Santa Isabel Xiloxoxtla"
			]},{estado:"Veracruz de Ignacio de la Llave",municipio:["Acajete","Acatlán","Acayucan","Actopan","Acula","Acultzingo","Camarón de Tejeda","Alpatláhuac","Alto Lucero de Gutiérrez Barrios","Alto Lucero","Altotonga","Alvarado","Amatitlán","Naranjos Amatlán","Naranjos","Amatlán de los Reyes","Angel R. Cabada","Ángel R. Cabada","La Antigua","José Cardel","Apazapan","Aquila","Astacinga","Atlahuilco","Atoyac","Atzacan","Atzalan","Tlaltetela","Ayahualulco","Banderilla","Benito Juárez","Boca del Río","Calcahualco","Camerino Z. Mendoza","Ciudad Mendoza","Carrillo Puerto","Tamarindo","Catemaco","Cazones de Herrera","Cerro Azul","Citlaltépetl","Citlaltépec","Coacoatzintla","Coahuitlán","Progreso de Zaragoza","Coatepec","Coatzacoalcos","Coatzintla","Coetzala","Colipa","Comapa","Córdoba","Cosamaloapan de Carpio","Cosamaloapan","Cosautlán de Carvajal","Coscomatepec","Coscomatepec de Bravo","Cosoleacaque","Cotaxtla","Coxquihui","Coyutla","Cuichapa","Cuitláhuac","Chacaltianguis","Chalma","Chiconamel","Chiconquiaco","Chicontepec","Chicontepec de Tejeda","Chinameca","Chinampa de Gorostiza","Las Choapas","Chocamán","Chontla","Chumatlán","Emiliano Zapata","Dos Ríos","Espinal","Filomeno Mata","Fortín","Fortín de las Flores","Gutiérrez Zamora","Hidalgotitlán","Huatusco","Huatusco de Chicuellar","Huayacocotla","Hueyapan de Ocampo","Huiloapan de Cuauhtémoc","Ignacio de la Llave","Ilamatlán","Isla","Ixcatepec","Ixhuacán de los Reyes","Ixhuatlán del Café","Ixhuatlancillo","Ixhuatlán del Sureste","Ixhuatlán de Madero","Ixmatlahuacan","Ixtaczoquitlán","Jalacingo","Xalapa","Xalapa-Enríquez","Jalcomulco","Jáltipan","Jáltipan de Morelos","Jamapa","Jesús Carranza","Xico","Jilotepec","Juan Rodríguez Clara","Juchique de Ferrer","Landero y Coss","Lerdo de Tejada","Magdalena","Maltrata","Manlio Fabio Altamirano","Mariano Escobedo","Martínez de la Torre","Mecatlán","Mecayapan","Medellín de Bravo","Medellín","Miahuatlán","Las Minas","Minatitlán","Misantla","Mixtla de Altamirano","Moloacán","Naolinco","Naolinco de Victoria","Naranjal","Nautla","Nogales","Oluta","Omealca","Orizaba","Otatitlán","Oteapan","Ozuluama de Mascareñas","Pajapan","Pánuco","Papantla","Papantla de Olarte","Paso del Macho","Paso de Ovejas","La Perla","Perote","Platón Sánchez","Playa Vicente","Poza Rica de Hidalgo","Las Vigas de Ramírez","Pueblo Viejo","Cd. Cuauhtémoc","Puente Nacional","Rafael Delgado","Rafael Lucio","Los Reyes","Río Blanco","Saltabarranca","San Andrés Tenejapan","San Andrés Tuxtla","San Juan Evangelista","Santiago Tuxtla","Sayula de Alemán","Soconusco","Sochiapa","Soledad Atzompa","Soledad de Doblado","Soteapan","Tamalín","Tamiahua","Tampico Alto","Tancoco","Tantima","Tantoyuca","Tatatila","Castillo de Teayo","Tecolutla","Tehuipango","Álamo Temapache","Álamo","Tempoal","Tempoal de Sánchez","Tenampa","Tenochtitlán","Teocelo","Tepatlaxco","Tepetlán","Tepetzintla","Tequila","José Azueta","Villa Azueta","Texcatepec","Texhuacán","Texistepec","Tezonapa","Tierra Blanca","Tihuatlán","Tlacojalpan","Tlacolulan","Tlacotalpan","Tlacotepec de Mejía","Tlachichilco","Tlalixcoyan","Tlalnelhuayocan","Tlapacoyan","Tlaquilpa","Tlilapan","Tomatlán","Tonayán","Totutla","Tuxpan","Túxpam de Rodríguez Cano","Tuxtilla","Ursulo Galván","Vega de Alatorre","Veracruz","Villa Aldama","Xoxocotla","Yanga","Yecuatla","Zacualpan","Zaragoza","Zentla","Colonia Manuel González","Zongolica","Zontecomatlán de López y Fuentes","Zozocolco de Hidalgo","Agua Dulce","El Higo","Nanchital de Lázaro Cárdenas del Río","Tres Valles","Carlos A. Carrillo","Tatahuicapan de Juárez","Tatahuicapan","Uxpanapa","Poblado 10","San Rafael","Santiago Sochiapan","Xochiapa"
			]},{estado:"Yucatán",municipio:["Abalá","Acanceh","Akil","Baca","Bokobá","Buctzotz","Cacalchén","Calotmul","Cansahcab","Cantamayec","Celestún","Cenotillo","Conkal","Cuncunul","Cuzamá","Chacsinkín","Chankom","Chapab","Chemax","Chicxulub Pueblo","Chichimilá","Chikindzonot","Chocholá","Chumayel","Dzán","Dzemul","Dzidzantún","Dzilam de Bravo","Dzilam González","Dzitás","Dzoncauich","Espita","Halachó","Hocabá","Hoctún","Homún","Huhí","Hunucmá","Ixil","Izamal","Kanasín","Kantunil","Kaua","Kinchil","Kopomá","Mama","Maní","Maxcanú","Mayapán","Mérida","Mocochá","Motul","Motul de Carrillo Puerto","Muna","Muxupip","Opichén","Oxkutzcab","Panabá","Peto","Progreso","Quintana Roo","Río Lagartos","Sacalum","Samahil","Sanahcat","San Felipe","Santa Elena","Seyé","Sinanché","Sotuta","Sucilá","Sudzal","Suma","Tahdziú","Tahmek","Teabo","Tecoh","Tekal de Venegas","Tekantó","Tekax","Tekax de Álvaro Obregón","Tekit","Tekom","Telchac Pueblo","Telchac","Telchac Puerto","Temax","Temozón","Tepakán","Tetiz","Teya","Ticul","Timucuy","Tinum","Tixcacalcupul","Tixkokob","Tixmehuac","Tixpéhual","Tizimín","Tunkás","Tzucacab","Uayma","Ucú","Umán","Valladolid","Xocchel","Yaxcabá","Yaxkukul","Yobaín"
			]},{estado:"Zacatecas",municipio:["Apozol","Apulco","Atolinga","Benito Juárez","Florencia","Calera","Víctor Rosales","Cañitas de Felipe Pescador","Concepción del Oro","Cuauhtémoc","San Pedro Piedra Gorda","Chalchihuites","Fresnillo","Trinidad García de la Cadena","La Estanzuela","Genaro Codina","General Enrique Estrada","General Francisco R. Murguía","Nieves","El Plateado de Joaquín Amaro","General Pánfilo Natera","Guadalupe","Huanusco","Jalpa","Jerez","Jerez de García Salinas","Jiménez del Teul","Juan Aldama","Juchipila","Loreto","Luis Moya","Mazapil","Melchor Ocampo","Mezquital del Oro","Miguel Auza","Momax","Monte Escobedo","Morelos","Moyahua de Estrada","Nochistlán de Mejía","Noria de Ángeles","Ojocaliente","Pánuco","Pinos","Río Grande","Sain Alto","El Salvador","Sombrerete","Susticacán","Tabasco","Tepechitlán","Tepetongo","Teúl de González Ortega","Tlaltenango de Sánchez Román","Valparaíso","Vetagrande","Villa de Cos","Villa García","Villa González Ortega","Villa Hidalgo","Villanueva","Zacatecas","Trancoso","Santa María de la Paz"]
			}],


			nivelesescolares:[{ nivel:"Primaria",		//Estructura de los niveles
								grados:[{grado:"primero",
										grupos:[],
										materias:[]},
										{grado:"Segundo",
										grupos:[],
										materias:[]},
										{grado:"Tercero",
										grupos:[],
										materias:[]}],
								costoinscripcion:1200,
								costomensualidades:{colegiatura:1200,
													mantenimiento:2000,
													documentos:[{documento:"",precio:""}]},
								carreras:[],
								periodos:[{
									periodo:"Agosto-Junio",
									fechainicio:"2018-08-16",
									fechafinal:"2019-06-16"
								}]

								},
								{nivel:"Secundaria",
								grados:[{grado:"Primero",
										grupos:[],
										materias:[]}],
								costoinscripcion:1200,
								costomensualidades:{colegiatura:1000,
													mantenimiento:1000,
													documentos:[{documento:"",precio:""}]},
								carreras:[],
								periodos:[{
									periodo:"Enero-Junio",
									fechainicio:"2018-08-16",
									fechafinal:"2019-06-16"
								}]

								},
								{ nivel:"Preparatoria",
								grados:[{grado:"Primer semestre",
										grupos:[],
										materias:[]}],
								costoinscripcion:1200,
								costomensualidades:{colegiatura:1000,
													mantenimiento:2000,
													documentos:[{documento:"",precio:""}]},
								carreras:[],
								periodos:[{
									periodo:"Enero-Junio",
									fechainicio:"2018-01-16",
									fechafinal:"2018-06-16"
								}]

								},
								{ nivel:"Licenciatura",
								grados:[{grado:"Primer semestre",
										grupos:[],
										materias:[]}],
								costoinscripcion:1200,
								costomensualidades:{colegiatura:1000,
													mantenimiento:2000,
													documentos:[{documento:"",precio:""}]},
								carreras:["Ingenieria en sistemas","Ingenieria mecatronica"],
								periodos:[{
									periodo:"Enero-Junio",
									fechainicio:"2018-01-16",
									fechafinal:"2018-06-16"
								}]

								},
								{ nivel:"Maestria",
								grados:[{grado:"Primer cuatrimestre",
										grupos:[],
										materias:[]}],
								costoinscripcion:1200,
								costomensualidades:{colegiatura:1000,
													mantenimiento:2000,
													documentos:[{documento:"",precio:""}]},
								carreras:["Ingenieria en sistemas","Ingenieria mecatronica"],
								periodos:[{
									periodo:"Enero-Junio",
									fechainicio:"2018-01-16",
									fechafinal:"2018-06-16"
								}]

								}
								

								],
			pagos:{
					pagoinscripcion:{
						concepto:"inscripcion",
						total:"",
						pagado:false,
						metodopago:"",
						fecha:""
					},
					pagomensualidades:[]
			}


			/*pagos:{
					pagoinscripcion:{
						concepto:"inscripcion",
						total:"",
						pagado:false,
						metodopago:"",
						fecha:""
					},
					pagomensualidades:[{
						concepto:"mensualidad1",
						colegiatura:"",
						mantenimiento:"",
						documentos:[{
							concepto:"",
							cantidad:,
							pago:,
							fecha:

						}],
						pagosparciales:[{
								numero:,
								cantidad:,
								metodo:,
								fecha:,
								intereses:,
								descuento:,
								pagado:false

							}]


				}]
			} */





		}
		this._searchStudent=this._searchStudent.bind(this);
		this.showAlertNumControl=this.showAlertNumControl.bind(this);

	//	this.onSubmitHandler=this.onSubmitHandler.bind(this);
	}


	_searchStudent(nocontrol){		//función bindeada al componente de buscar para traer los datos del alumno y cargarlos
		 // //(nocontrol);
		 //alert("Buscar");
		
		var fechaInscripcion=this.getDate();
          const datos = {
            "accion": "select",
            "nocontrol":nocontrol+""
          }

          jquery.ajax({

            "url": "http://localhost:8080/insertar.php",
            "data": datos,
            "method": "GET",
            "crossDomain": true,
    		"dataType":'json',
            success: function(resp){		//Recibe los datos de la base referente a los datos de los alumnos,tutor e inscripciones
            	////("sfsadf");
            this.cleanInputs();
             this.setState({datosAlumnos:{img:resp.DATOSALUMNOS.IMG,
             								nombre:resp.DATOSALUMNOS.NOMBRE,
             								ap:resp.DATOSALUMNOS.AP,
             								am:resp.DATOSALUMNOS.AM,
             								fechanac:resp.DATOSALUMNOS.FECHANAC,
             								edad:resp.DATOSALUMNOS.EDAD,
             								sexo:resp.DATOSALUMNOS.SEXO,
             								estado:resp.DATOSALUMNOS.ESTADO,
             								municipio:resp.DATOSALUMNOS.MUNICIPIO,
             								calle:resp.DATOSALUMNOS.CALLE,
             								colonia:resp.DATOSALUMNOS.COLONIA,
             								numeroCasa:resp.DATOSALUMNOS.NUMEROCASA,
             								tel:resp.DATOSALUMNOS.TEL,
             								cel:resp.DATOSALUMNOS.CEL,
             								correo:resp.DATOSALUMNOS.CORREO,
             								curp:resp.DATOSALUMNOS.CURP
             								}});
             this.setState({datosTutor:{
             		nombre:resp.DATOSTUTOR.NOMBRE,
					ap:resp.DATOSTUTOR.AP,
					am:resp.DATOSTUTOR.AM,
					telefono:resp.DATOSTUTOR.TEL,
					correo:resp.DATOSTUTOR.CORREO
             }});
             this.setState({datosInscripciones:{
	             	nocontrol:resp.DATOSINSCRIPCIONES.NOCONTROL,
					nivelescolar:resp.DATOSINSCRIPCIONES.NIVELESCOLAR,
					gradoescolar:resp.DATOSINSCRIPCIONES.GRADOESCOLAR,
					carrera:resp.DATOSINSCRIPCIONES.CARRERA,
					grupo:"",
					periodo:"",
					solicitudbeca:false,
					fechainscripcion:fechaInscripcion
             }});
            
             this.setState({activoBuscar:true,
             				activoNuevo:false,
             				disabled:true,
             				disabledCarrera:true,
							activoPeriodo:false,});
            

          	}.bind(this),
          	error: function(resp)
          	{
          		
          	}
      });

     }
     getNumeroControl()	//Método para generar numero de control de acuerdo a los que haya en la base de datos
     {

     	const datos={
     		"accion":"select",

     	}
     	jquery.ajax({
     		"url": "http://localhost:8080/insertar.php",
            "data": datos,
            "method": "GET",
            "crossDomain": true,
    		"dataType":'json',
    		success:function(resp){

    		},
    		error:function(resp){

    		}

     	});
     }
    showAlertNumControl(información){
   
   	let datos={
      title: 'Confirmar registrar nuevo alumno '+información.NOCONTROL+" se descargara un PDF con información", 
      message: 'Esta seguro que desea registrar un nuevo alumno'+
      'se eliminara toda la información capturada',
      buttons: [
        {
          label: 'Hecho',
          onClick: ()=>{} 
        }
      ]
    };
    confirmAlert(datos);
    }
    createPDF(informacion){

    	const styles = StyleSheet.create({
		  page: {
		    flexDirection: 'row',
		    backgroundColor: '#E4E4E4'
		  },
		  section: {
		    margin: 10,
		    padding: 10,
		    flexGrow: 1
		  }
		});
    	    
		<Document>
		    <Page size="A4" style={styles.page}>
		      <View style={styles.section}>
		        <Text>Section #1</Text>
		      </View>
		      <View style={styles.section}>
		        <Text>Section #2</Text>
		      </View>
		    </Page>
		</Document>
    }
    onSubmitHandler(event)	//Al enviar los datos, siempre sera insert
	{
		
		event.preventDefault();
		
		/**/
		

		//console.log(copy.datosInscripciones.fechaInscripcion);
		//this.setState({});
		let datos;
		if(!this.state.activoBuscar)
		{
			 datos={
	     		"accion":"insert alumno",
	     		"nuevo":true,
	     		"nocontrol":this.state.datosInscripciones.nocontrol,
	     		"datosAlumnos":this.state.datosAlumnos,
	     		"datosTutor":this.state.datosTutor,
	     		"datosInscripciones":this.state.datosInscripciones,
	     		"pagos":this.state.pagos,
	     		"activoPeriodo":this.state.activoPeriodo
	     		//Faltan los datos de los pagos
	     	}
				
		}else{
			datos={
				"nocontrol":this.state.datosInscripciones.nocontrol,
	     		"accion":"insert alumno",
	     		"nuevo":false,
	     		"datosInscripciones":this.state.datosInscripciones,
	     		"pagos":this.state.pagos,
	     		"activoPeriodo":this.state.activoPeriodo
	     		//Faltan los datos de los pagos
	     	}	
		}
     	jquery.ajax({
     		"url":"http://localhost:8080/insertarAlumno.php",
            "data": datos,
            "method": "POST",
            "crossDomain": true,
    		"dataType":'json',
    		success : function(resp)
    		{
    			//Repuesta para recibir el número de control
    			//1: insercion realizada, numcontrol:""
    			alert("asdfasd");
    			this.showAlertNumControl(resp);
    		}.bind(this),
    		error : function(resp)
    		{
    			alert(resp);
    		}

     	});	
	}
	getNumControl()
	{

	}
     onChangeHandler(event,objeto)	
	{
		event.preventDefault();
		
		//Código para  modificar un solo atributp del state y no sobreescribirlo
		let copy = Object.assign({}, this.state);    
		if(objeto=="datosAlumnos")										//Para eventos que sucedan para los datos de los alumnos
		{
			//console.log(event.target.name);
			console.log(event.target.value);
			copy.datosAlumnos[event.target.name] = event.target.value;   //Para cambiar el valor de algo especifoco
			if(event.target.name=="fechanac")							//Para cambiar la edad cuando cambie la fecha de nacimiento
			{
			copy.datosAlumnos.edad=this.calculateEdad(new Date(event.target.value));
			}
		}
		else if (objeto=="datosTutor")											//Para eventos que sucedan para los datos del tutor
		{
			copy.datosTutor[event.target.name] = event.target.value;   
		}
		
		this.setState({copy});


		if(event.target.name=="estado")		//Para que cada vez que se selecciona un estado el municipio se ponga en ""
		{

			let copy = Object.assign({}, this.state);    
			copy.datosAlumnos["municipio"] = "";   
			this.setState({copy});
			//alert("Nombre: "+this.state.datosAlumnos.nombre+"\n"+"ap: "+this.state.datosAlumnos.estado+"\n"+"municipio: "+this.state.datosAlumnos.municipio);

		}
		if(objeto=="datosInscripciones")	//Para el evento que suceda para los datos de las inscripciones
		{
			console.log(event.target.name);
			console.log(event.target.value);
			let copy = Object.assign({}, this.state);    
			copy.datosInscripciones[event.target.name] = event.target.value;
			if(event.target.name=="nivelescolar")
			{
				console.log("VALOR DEL CHANGE: "+event.target.value);
				
				copy.datosInscripciones.gradoescolar="";
				copy.datosInscripciones.periodo="";
				
				if(this.hasCarrera(event.target.value))
				{
					this.setState({disabledCarrera:true});
				}else{

					this.setState({disabledCarrera:false});
					
				}
				this.setState({copy});
			}else if(event.target.name=="periodo"){
				
				//Se generan los pagos una vez que se selecciona el periodo
				this.setState({copy});
				this.setPagos(this.state.datosInscripciones.nivelescolar);
			}
			else if(event.target.name=="solicitudbeca")
     		{
     			console.log(event.target.checked);
     			copy.datosInscripciones[event.target.name]=event.target.checked ;
     			this.setState({copy});
     		}

			this.setState({copy});
		}

		//this.setState({[objeto]:{[event.target.name]: event.target.value }});

		

	}


	calculateFechaLimite(duracion)
	{
		var d = new Date();
		var weekday = new Array(7);
		weekday[0] =  "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";

		var n = weekday[d.getDay()];
	}

     onClickHandler(event,objeto)
     {
     	//this.showConfirmAlert();
     	console.log(event.target.name);
     	console.log(event.target.value);
  		event.preventDefault();
  		let copy = Object.assign({}, this.state);

     	if(event.target.name=="registrarNuevo")
     	{
			//let valor=this.showConfirmAlert();
			//console.log(valor);
			

     		this.cleanInputs();     		
			
     	}
		


		if(objeto=="datosInscripciones")
     	{

     		copy.datosInscripciones[event.target.name]=event.target.value ;
     		if(event.target.name=="solicitudbeca")
     		{
     			console.log(event.target.checked);
     			copy.datosInscripciones[event.target.name]=event.target.checked ;
     		}
     	}


     	this.setState({copy});
     	console.log("Esta checado: "+this.state.datosInscripciones.solicitudbeca);



     }
     getDate()
     {
     	var date=new Date();
		var fechaInscripcion=date.getDate()+"/"+
												(date.getMonth()+1)+"/"+
												date.getFullYear();
		return fechaInscripcion;
     }
    cleanInputs()	//Limpiar todos los inputs tanto en el caso de limpiar como en el de registrar nuevo alumno
    {
    	let fecha=this.getDate();
    	this.setState({

			datosAlumnos:{
				img:"",
				nombre:"",
				ap:"",
				am:"",
				fechanac:"",
				edad:"",
				sexo:"H",
				estado:"Durango",
				municipio:"",
				calle:"",
				colonia:"",
				numerocasa:"",
				tel:"",
				cel:"",
				correo:"",
				curp:""},
			datosTutor:{
				nombre:"",
				ap:"",
				am:"",
				telefono:"",
				correo:""
			},
			datosInscripciones:{
				nocontrol:"",
				nivelescolar:"",
				gradoescolar:"",
				carrera:"",
				grupo:"",
				periodo:"",
				solicitudbeca:"",
				fechainscripcion:fecha
			},
			pagos:{
					pagoinscripcion:{
						concepto:"inscripcion",
						total:"",
						pagado:false,
						metodopago:"",
						fecha:""
					},
					pagomensualidades:[]
			},
			activoBuscar:false,	
			activoNuevo:true,
			disabled:false,
			disabledCarrera:false,
			activoPeriodo:false,



		});
    }
    calculateDuracionPeriodo(fechaInicio,fechaFinal)	//Calcula la duración de un periodo escolar dadas dos fechas
    {
    	let fechaI=new Date(fechaInicio);
    	let fechaF=new Date(fechaFinal);
    	let final=new Date(fechaI.getFullYear+"-"+"12"+"-"+"01");
    	let inicio=new Date(fechaF.getFullYear+"-"+"01"+"-"+"01");
    	let duracionPeriodo=0
    	console.log("Fecha incio: "+fechaI.getMonth());
    	console.log("Fecha final: "+fechaF.getMonth());
    	console.log("Inicio de año: "+inicio.getMonth());
    	console.log("final de año: "+final.getMonth());
    	console.log(fechaI);
    	if(fechaI.getFullYear()!=fechaF.getFullYear())
    	{
    		let dura1=(final.getMonth()-fechaI.getMonth())+1;

    		let dura2=(fechaF.getMonth()-inicio.getMonth())+1;
    		duracionPeriodo=dura1+dura2;
    	}else{
    		 duracionPeriodo = fechaF.getMonth()-fechaI.getMonth()+1;
    	}

    	
    	return duracionPeriodo;
    }
    hasCarrera(nivelParam)		//Permite saber si un nivel escolar retorna un true o false si tien o no carreras respectivamente para desactivar el select de carreras
    {
    	let disabled = false;
    	this.state.nivelesescolares.map((nivel,i) =>{
    		if(nivelParam==nivel.nivel)
    		{

    			if(nivel.carreras.length==0)
    			{

    				disabled= true;
    			}else{

    				disabled= false;
    			}
    		}
    	});
    	return disabled;
    }
    setEstados()
    {
			return (this.state.estadosmunicipios.map((estado,i)=>{

					//console.log(this.state.datosAlumnos);
		    		return <option 
		    		value={estado.estado} 
		    		key={i} 
		    		//onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
		    		>{estado.estado}</option>
					
					
		    	}));
    }

    setPagos(nivelParam)	//Función para calcular todos los pagos del nivel correspondiente
    {
    	console.log("nivelPARAM: "+nivelParam );
    	//console.vm.$log([keyPath-optional])
    	let cuotaInscripcion;
    	let cuotaColegiatura;
    	let cuotaMantenimieto;
    	let duracion=0;
    	let fechaInicio="";
    	let fechaFinal="";
    	let copy = Object.assign({},this.state);
    	this.state.nivelesescolares.map((nivelMap,i) =>{
    		if(nivelParam==nivelMap.nivel)
    		{
    			cuotaInscripcion=nivelMap.costoinscripcion;
    			cuotaColegiatura=nivelMap.costomensualidades.colegiatura;
    			cuotaMantenimieto=nivelMap.costomensualidades.mantenimiento;
    			nivelMap.periodos.map((periodoMap,i) => {
    			console.log("PERIODO ACTUAL: "+periodoMap.periodo);
    			if(periodoMap.periodo==copy.datosInscripciones.periodo)
    			{

    				duracion=this.calculateDuracionPeriodo(periodoMap.fechainicio,periodoMap.fechafinal);	
    				fechaInicio=periodoMap.fechainicio;
    				fechaFinal=periodoMap.fechafinal;
    				console.log("DURACION: "+duracion);
    			}	
    			});
    		}
    	});
    	copy.pagos.pagomensualidades=[];
    	copy.pagos.pagoinscripcion.total=cuotaInscripcion;
    	console.log(duracion);
    	for (var i = 0; i < duracion; i++) {
    		copy.pagos.pagomensualidades.push(
    			{
						concepto:"mensualidad "+(i+1),
						colegiatura:cuotaColegiatura,
						mantenimiento:cuotaMantenimieto,
						intereses:0,
						descuento:0,
						pagosparciales:[],
						fechalimite:"",
						pagado:false
				}
    		);
    	}

    	this.setState({copy});
    	console.log(this.state.pagos);


    }
    calculateEdad(today)
    {
    	
    var diff_ms = Date.now() - today.getTime();
    var age_dt = new Date(diff_ms); 
 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
		
    }
    setGradosEscolares(nivelParam)
    {
    	 
    		
    	
    			return this.state.nivelesescolares.map((nivel,i)=>{
					//console.log(this.state.datosAlumnos);
					if(nivel.nivel==nivelParam)
					{
					const options=[];
					for (let a =0; a < nivel.grados.length ; a++) {
						let grado=nivel.grados[a].grado;
						
						options[a]=
						(<option 
			    		value={grado} 
			    		key={a} 
			    		>
			    			{grado}
			    		</option>)					
					}
					return options;

					}					
					
		    	});
    			
    }    
   setPeriodosEscolares(nivelParam)
    {
    	 
    		
    	
    			return this.state.nivelesescolares.map((nivel,i)=>{
					//console.log(this.state.datosAlumnos);
					if(nivel.nivel==nivelParam)
					{
					const options=[];
					for (let a =0; a < nivel.periodos.length ; a++) {
						let periodo=nivel.periodos[a].periodo;
						
						options[a]=
						(<option 
			    		value={periodo} 
			    		key={a} 
			    		>
			    			{periodo}
			    		</option>)					
					}
					return options;

					}					
					
		    	});
    			
    }
    setCarreras(nivelParam)	//Retorna el los option tag por cada carrera del nivel enviado.
    {
    	return(
    		this.state.nivelesescolares.map((nivelescolar,i)=>{

					if(nivelescolar.nivel==nivelParam)
					{
					const options=[];
					
					for (let a =0; a < nivelescolar.carreras.length ; a++) {
						let carrera=nivelescolar.carreras[a];						
						options[a]=
						(<option 
			    		value={carrera} 
			    		key={a} 
			    		>
			    			{carrera}
			    		</option>)					
					}
					return options;

					}					
					
		    	}

    		));
    }
    setNivel()	//Retorna el mismo numero de option tag para cada nivel registrado en la base
    {
    	
    	return(
    		this.state.nivelesescolares.map((nivelescolar,i)=>{

					//console.log(this.state.datosAlumnos);
					//alert("Hola que hace");

		    		return( <option 
		    		value={nivelescolar.nivel} 
		    		key={i} 
		    		>{nivelescolar.nivel}</option>
		    		);
					
					
		    	}

    		));
    }
    setMunicipios(edo)
    {
    	
    			return this.state.estadosmunicipios.map((estado,i)=>{
					
					if(estado.estado==edo)
					{
					const options=[];
					for (let a =0; a < estado.municipio.length ; a++) {
						
						options[a]=
						(<option 
			    		value={estado.municipio[a]} 
			    		key={a} 
			    		>
			    			{estado.municipio[a]}
			    		</option>)					
					}
					return options;

					}					
					
		    	});
    }
    search()
    {
    	const estados=this.setEstados();
    	const municipios=this.setMunicipios(this.state.datosAlumnos.estado);
    	const nivelesescolares=this.setNivel();
    	const gradosescolares=this.setGradosEscolares(this.state.datosInscripciones.nivelescolar);
    	const carreras = this.setCarreras(this.state.datosInscripciones.nivelescolar);
    	const periodos =this.setPeriodosEscolares(this.state.datosInscripciones.nivelescolar);
    	//const gradoescolar=this.set
    	return (

    	<div>
    	<form method="post" onSubmit={this.onSubmitHandler.bind(this)}>
    				
    		{/*Datos del alumno*/}		
			<div className="container">
				<div className="col-lg-12 well">
				<h2>Datos del alumno</h2>
				<div className="row justify-content-md-center">
					<div className="col-md-4"></div>
					<div className="col-md-4 ">
						<img 
						src="./default.png" 
						className="img-picker"
						/>
						<input 
						type="file" 
						name="img"
						onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
						value={this.state.datosAlumnos.img} 
						
						/>
					</div>
					<div className="col-md-4"></div>

				</div>
				<div className="row">
						
						<div className="col-md-4">
							<label >Nombre
								<input 
								type="text" 
								name="nombre"
								className="datosAlumnos form-control" 
								onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
								value={this.state.datosAlumnos.nombre}
								disabled={this.state.disabled} 
								required/>
							</label>
						</div>
						<div className="col-md-4">
							<label >Apellido paterno 
								<input 
								type="text" 
								name="ap" 
								className="datosAlumnos form-control"
								onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}  
								value={this.state.datosAlumnos.ap}
								disabled={this.state.disabled}  
								required/>
							</label>
						</div>
						<div className="col-md-4">
							<label >Apellido materno 
								<input 
								type="text" 
								name="am" 
								className="datosAlumnos form-control"
								onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
								value={this.state.datosAlumnos.am}
								disabled={this.state.disabled}   
								required/>
							</label>
						</div>
				</div>
				<div className="row">

					<div className="col-md-4">
						<label >Fecha de nacimiento 
							<input 
							type="date" 
							name="fechanac" 
							className="datosAlumnos form-control"
							onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
							value={this.state.datosAlumnos.fechanac}
							disabled={this.state.disabled}  
							required/>
						</label>
					</div>
					<div className="col-md-4">
						<label >Edad 
							<input 
							type="text" 
							name="edad" 
							className="datosAlumnos form-control"
							value={this.state.datosAlumnos.edad}
							//required 
							disabled/>
						</label>
					</div>
					<div className="col-md-4">
						<label >Sexo <br/>
							H<input 
							type="radio" 
							name="sexo" 
							className="nogrid datosAlumnos form-control" 
							onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
							value="H"
							disabled={this.state.disabled}
							checked={this.state.datosAlumnos.sexo==='H'} 
							required 
							/> 
							M<input 
							type="radio" 
							name="sexo" 
							className="nogrid datosAlumnos form-control" 
							onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
							value="M"
							checked={this.state.datosAlumnos.sexo==='M'}
							disabled={this.state.disabled}
							required 
							/> 
						</label> 
					</div>
				</div>


				<div className="row">
					<div className="col-md-4">
						<label >
							Estado 						
							<select 
							name="estado"
							className="datosAlumnos form-control select-picker"
							onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
							value={this.state.datosAlumnos.estado}
							disabled={this.state.disabled}
							required
							>
							{estados}

							</select>
						</label>
					</div>

					<div className="col-md-4">
						<label>
							Municipio 						
							<select 
							name="municipio"
							className="datosAlumnos form-control"
							onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
							value={this.state.datosAlumnos.municipio}
							disabled={this.state.disabled}
							required
							>
							<option 
							value="">
							Seleccion un municipio</option>
							 {municipios}
							</select>
						</label>
					</div>
					<div className="col-md-4">
						<label >Calle 
							<input 
							type="text" 
							name="calle"
							className="form-control" 
							onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
							value={this.state.datosAlumnos.calle}
							disabled={this.state.disabled}
							required/>
						</label> 
					</div>
				</div>

				<div className="row">
					<div className="col-md-4">
							<label >Colonia 
								<input 
								type="text" 
								name="colonia"
								className="form-control"
								onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
								value={this.state.datosAlumnos.colonia}
								disabled={this.state.disabled}
								required/>
							</label> 
					</div>
					<div className="col-md-4">
						<label >N°      
							<input 
							type="text" 
							name="numerocasa"
							className="form-control"
							onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
							value={this.state.datosAlumnos.numerocasa} 
							disabled={this.state.disabled}
							required/>
						</label> 
					</div>
					<div className="col-md-4">
						<label >Número de telefono 
							<input 
							type="tel" 
							name="tel" 
							className="form-control"
							onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
							value={this.state.datosAlumnos.tel}
							disabled={this.state.disabled}
							required
							/>
						</label> 
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<label >Número de celular 
							<input 
							type="tel" 
							name="cel" 
							className="form-control"
							onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
							value={this.state.datosAlumnos.cel}
							disabled={this.state.disabled}
							required
							/>
						</label> 
					</div>
					<div className="col-md-4">
						<label >Correo 
							<input 
							type="email" 
							name="correo" 
							placeholder="ejemplo@gmail.com"
							className="form-control"
							onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
							value={this.state.datosAlumnos.correo}
							disabled={this.state.disabled}
							required
							/>
						</label> 
					</div>
					<div className="col-md-4">
						<label >Curp 
							<input 	type="text" 
									name="curp" 
									className="form-control"
									maxLength="18"
									minLength="18"
									onChange={(e) => this.onChangeHandler(e,"datosAlumnos")}
									value={this.state.datosAlumnos.curp}
									disabled={this.state.disabled}
									required
									/> 
									
						</label> 
					</div>
				</div>

				</div>
			</div>
{/*Datos del alumno*/}	


{/*Datos del tutor*/}	

			<div className="container">
					<div className="col-lg-12 well">
						<h2>Datos del tutor</h2>

						<div className="row">
							<div className="col-md-4">
								<label >Nombre
									<input 
									type="text" 
									name="nombre" 
									className="datosTutor form-control"
									onChange={(e) => this.onChangeHandler(e,"datosTutor")}
									value={this.state.datosTutor.nombre}
									disabled={this.state.disabled}  
									required
									/>
								</label>
							</div>
							<div className="col-md-4">
								<label >Apellido paterno
									<input 
									type="text" 
									name="ap" 
									className="datosTutor form-control"
									onChange={(e) => this.onChangeHandler(e,"datosTutor")} 
									value={this.state.datosTutor.ap}
									disabled={this.state.disabled} 
									required
									/>
								</label>
							</div>
							<div className="col-md-4">
								<label >Apellido materno
									<input 
									type="text" 
									name="am" 
									className="datosTutor form-control" 
									onChange={(e) => this.onChangeHandler(e,"datosTutor")} 
									value={this.state.datosTutor.am}
									disabled={this.state.disabled} 
									required
									/>
								</label>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4">
								<label >Teléfono
									<input 
									type="tel" 
									name="telefono" 
									className="datosTutor form-control" 
									onChange={(e) => this.onChangeHandler(e,"datosTutor")} 
									value={this.state.datosTutor.telefono}
									disabled={this.state.disabled} 
									required
									/>
								</label>
							</div>
							<div className="col-md-4">
								<label >Correo
									<input 
									type="email" 
									name="correo" 
									placeholder="ejemplo@gmail.com"
									className="datosTutor form-control" 
									onChange={(e) => this.onChangeHandler(e,"datosTutor")} 
									value={this.state.datosTutor.correo}
									disabled={this.state.disabled} 
									required
									/>
								</label>
							</div>
							<div className="col-md-4"></div>
						</div>
							

					

						
					</div>
				</div>

{/*Datos del tutor*/}	
					
{/*Datos del inscripciones*/}	
					<div className="container">
					<div className="col-lg-12 well">
						<h2>Datos escolares</h2>
						<div className="row">
							
							{/*<div className="col-md-4">
								<label>
									N° Control: <input 
									type="text" 
									name="nombre"
									className="form-control"
									onChange={(e) => this.onChangeHandler(e,"datosInscripciones")} 
									value={this.state.datosInscripciones.nocontrol} 								
									disabled
									//required
									/>
								</label>
							</div>*/}

							<div className="col-md-4">
							  	<label>	Nivel escolar: 
									<select 
									className="form-control"
									name="nivelescolar"
									onChange={(e) => this.onChangeHandler(e,"datosInscripciones")}
									value={this.state.datosInscripciones.nivelescolar}
									required
									>
									<option value="">Seleccione nivel escolar</option>
									{nivelesescolares} 
									</select>
								</label>
						  	</div>
						  	<div className="col-md-4">
								<label>
									Grado Escolar: 						
									<select 
									className="combobox form-control"
									name="gradoescolar"
									onChange={(e) => this.onChangeHandler(e,"datosInscripciones")}
									value={this.state.datosInscripciones.gradoescolar}
									required
									>
									<option 
									value="">
										Seleccione un grado escolar
									</option>
									{gradosescolares}
																			
									</select>
								</label>
							</div>
								<div className="col-md-4">
							  	<label>	Especialidad o Carrera: 
									<select 
									className="form-control"
									name="carrera"
									onChange={(e) => this.onChangeHandler(e,"datosInscripciones")}
									value={this.state.datosInscripciones.carrera}
									disabled={this.state.disabledCarrera}
									>
									<option 
									value="">
										Seleccione una carrera
									</option>
									{carreras}
									</select>
								</label>
						  	</div>
						</div>
						<div className="row">
							
						
							<div className="col-md-4">
							  	<label>	Periodo Escolar: 
									<select 
									className="form-control"
									name="periodo"
									onChange={(e) => this.onChangeHandler(e,"datosInscripciones")}
									value={this.state.datosInscripciones.periodo}
									required
									>
									<option value="">Seleccione periodo escolar</option>
									{periodos} 
									</select>
								</label>
						  	</div>
							<div className="col-md-4">
								<label>
									Solicitud de beca: <input 
									type="checkbox" 
									className="nogrid" 
									name="solicitudbeca" 
									onChange={(e)=> this.onChangeHandler(e,"datosInscripciones")}
									checked={this.state.datosInscripciones.solicitudbeca}
									/>
								</label>
							</div>
						</div>
					</div>
				</div>

{/*Datos de la inscripción*/}	
				
					<div className="container">
						<div className="col-lg-12">
							<div className="row">
								<div className="col-md-3"></div>
								<div className="col-md-3">
									<input 
									type="submit"  
									value="Registrar alumno" 
									className="btn btn-secondary"
									/>
								</div>
								<div className="col-md-3">
									<input 
									type="button" 
									value="Limpiar"
									className="btn btn-secondary"/>
								</div>
								<div className="col-md-3"></div>
							</div>
						</div>
					</div>

		</form>
		</div>
    		);





    }

	render()
	{
		var registro= this.search();

		return(
			<div>
			<Navigation/>
			
				<div className="contenedor-inscripciones">
					
					
					{/* <BotonesInicio nombreBotones={["Buscar Alumno","Registrar nuevo Alumno"]} searchStudent={this._searchStudent.bind(this)}/> */}
					<div className="container">
						<div className="col-lg-12 well">
							<h1>Registro de inscripcion</h1>	
							<div className="row">
								<div className="col-md-8">
									<BuscarAlumno 
									nombre={"Buscar"} 
									searchStudent={this._searchStudent.bind(this)}/>
								</div>
								<div className="col-md-4">
									<input type="button" className="btn btn-primary"
									name="registrarNuevo" 
									onClick={(e) => this.onClickHandler(e,"")} 
									value="Registrar nuevo alumno"/>
								</div>
							</div>
						</div>
					</div>
					
				{registro}
				
					



				</div>

			</div>
			);
	}

}

export default Principal;



