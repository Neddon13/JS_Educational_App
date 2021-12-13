use countries_api;
db.dropDatabase();
db.countries.insertMany([
     
    {
        "name": "United Kingdom",
        "officialName": "United Kingdom of Great Britain and Northern Ireland",
        "continent": "Europe",
        "capital": "London",
        "population": 67215293,
        "currency": {
                "officialName": "British pound",
                "symbol": "£",
                "name": "GBP"
                 },
        "areaKM": 242495,
        "highestPoint": {
                        "tallestpointM": 1343,
                        "location": "Ben Nevis"
                        },
        "olympicMedals":{
                  "totalMedalcount": 917,
                  "medals": {"gold": 286, "silver": 316, "bronze": 315}
                  },
        "about" : "The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe",
        "officialLanguage": "English",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/gb.svg",
        "borderingCountries": "Ireland",
        "nationalAnimal": "Lion",
        "animalPhoto": "https://en.wikipedia.org/wiki/Lion#/media/File:Lion_waiting_in_Namibia.jpg",
        "googleMap": "https://goo.gl/maps/FoDtc3UKMkFsXAjHA"
    }, 

    {
        "name": "France",
        "officialName": "French Republic",
        "continent": "Europe",
        "capital": "Paris",
        "population": 67391582,
        "currency": {
                "officialName": "Euro",
                "symbol": "€",
                "name": "Euro"
                 },
        "areaKM": 547660 ,
        "highestPoint": {
                        "tallestpointM": 4810,
                        "location": "Mont Blanc"
                        },
        "olympicMedals":{
                  "totalMedalcount": 761,
                  "medals": {"gold": 225, "silver": 257, "bronze": 279}
                  },
        "about" : "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine",
        "officialLanguage": "French",   
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/fr.svg",
        "borderingCountries": "Andorra, Belgium, Germany, Italy, Luxembourg, Monaco, Spain, Switzerland",
        "nationalAnimal": "The Gallic Rooster",
        "animalPhoto": "https://en.wikipedia.org/wiki/List_of_national_animals#/media/File:Coq-gaulois-dore.JPG",
        "googleMap": "https://goo.gl/maps/g7QxxSFsWyTPKuzd7"
    },
    {
        "name": "Spain",
        "officialName": "Kingdom of Spain",
        "continent": "Europe",
        "capital": "Madrid",
        "population": 47351567,
        "currency": {
                "officialName": "Euro",
                "symbol": "€",
                "name": "Euro"
                 },
        "areaKM": 505992,
        "highestPoint": {
                        "tallestpointM": 3479,
                        "location": "Mulhacen"
                        },
        "olympicMedals":{
                  "totalMedalcount": 168,
                  "medals": {"gold": 48, "silver": 78, "bronze": 48}
                  },
        "about" : "Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures",
        "officialLanguage": "Spanish",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/es.svg",
        "borderingCountries": "Andorra, France, Gibraltar, Portugal, Morocco",
        "nationalAnimal": "Bull",
        "animalPhoto": "https://en.wikipedia.org/wiki/List_of_animals_representing_first-level_administrative_country_subdivisions#/media/File:Toro_de_Osborne_(Llanes,_Asturias)_01.jpg",
        "googleMap": "https://goo.gl/maps/138JaXW8EZzRVitY9"
    },
    {
        "name": "Italy",
        "officialName": "Italian Republic",
        "continent": "Europe",
        "capital": "Rome",
        "population": 59554023,
        "currency": {
                "officialName": "Euro",
                "symbol": "€",
                "name": "Euro"
                 },
        "areaKM": 301336,
        "highestPoint": {
                        "tallestpointM": 4810,
                        "location": "Monte Bianco"
                        },
        "olympicMedals":{
                  "totalMedalcount": 618,
                  "medals": {"gold": 217, "silver": 188, "bronze": 213}
                  },
        "about" : "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence",
        "officialLanguage": "Italian",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/it.svg",
        "borderingCountries": "Austria, France, San Marino, Slovenia, Switzerland, Vatican City",
        "nationalAnimal": "Italian Wolf",
        "animalPhoto": "https://en.wikipedia.org/wiki/List_of_national_animals#/media/File:Lupo_appenninico_3.jpg",
        "googleMap": "https://goo.gl/maps/8M1K27TDj7StTRTq8"
    },
    {
        "name": "Germany",
        "officialName": "Federal Republic of Germany",
        "continent": "Europe",
        "capital": "Berlin",
        "population": 83240525,
        "currency": {
                "officialName": "Euro",
                "symbol": "€",
                "name": "Euro"
                 },
        "areaKM": 357114,
        "highestPoint": {
                        "tallestpointM": 2962,
                        "location": "The Zugspitze"
                        },
        "olympicMedals":{
                  "totalMedalcount": 653,
                  "medals": {"gold": 201, "silver": 206, "bronze": 246}
                  },
        "about" : "Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls",
        "officialLanguage": "German",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/de.svg",
        "borderingCountries": "Austria, Belgium, Czech Republic, Denmark, France, Luxembourg, Netherlands, Poland, Switzerland",
        "nationalAnimal": "Federal eagle",
        "animalPhoto": "https://en.wikipedia.org/wiki/List_of_national_birds#/media/File:Aquila_chrysaetos_Flickr.jpg",
        "googleMap": "https://goo.gl/maps/mD9FBMq1nvXUBrkv6"
    },
    {
        "name": "United States",
        "officialName": "United States of America",
        "continent": "North America",
        "capital": "Washington, D.C.",
        "population": 329484123,
        "currency": {
                "officialName": "United States Dollar",
                "symbol": "$",
                "name": "USD"
                 },
        "areaKM": 9372610,
        "highestPoint": {
                        "tallestpointM": 6190,
                        "location": "Denali"
                        },
        "olympicMedals":{
                  "totalMedalcount": 2632,
                  "medals": {"gold": 1061, "silver": 832, "bronze": 739}
                  },
        "about" : "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking.",
        "officialLanguage": "English",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/us.svg",
        "borderingCountries": "Canada, Mexico",
        "nationalAnimal": "Bald Eagle",
        "animalPhoto": "https://en.wikipedia.org/wiki/List_of_national_birds#/media/File:Bald_eagle_closeup_16x9.jpg",
        "googleMap": "https://goo.gl/maps/e8M246zY4BSjkjAv6"
    },
    {
        "name": "Mexico",
        "officialName": "United Mexican States",
        "continent": "North America",
        "capital": "Mexico City",
        "population": 128932753,
        "currency": {
                "officialName": "Mexican peso",
                "symbol": "$",
                "name": "MXN"
                 },
        "areaKM": 1964375,
        "highestPoint": {
                        "tallestpointM": 5675,
                        "location": "Pico de Orizaba"
                        },
        "olympicMedals":{
                  "totalMedalcount": 73,
                  "medals": {"gold": 13, "silver": 24, "bronze": 36}
                  },
        "about" : "Mexico, officially the United Mexican States, is a country in the southern portion of North America. It is bordered to the north by the United States; to the south and west by the Pacific Ocean; to the southeast by Guatemala, Belize, and the Caribbean Sea; and to the east by the Gulf of Mexico",
        "officialLanguage": "Spanish",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/mx.svg",
        "borderingCountries": "Belize, Guatemala, United States",
        "nationalAnimal": "Golden Eagle",
        "animalPhoto": "https://en.wikipedia.org/wiki/List_of_national_birds#/media/File:GoldenEagle-Nova.jpg",
        "googleMap": "https://goo.gl/maps/s5g7imNPMDEePxzbA"
    },
    {
        "name": "Canada",
        "officialName": "Canada",
        "continent": "North America",
        "capital": "Ottawa",
        "population": 38005238,
        "currency": {
                "officialName": "Canadian Dollar",
                "symbol": "$",
                "name": "CAD"
                 },
        "areaKM": 9984670,
        "highestPoint": {
                        "tallestpointM": 5959,
                        "location": "Mount Logan"
                        },
        "olympicMedals":{
                  "totalMedalcount": 326,
                  "medals": {"gold": 71, "silver": 108, "bronze": 147}
                  },
        "about" : "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world's second-largest country by total area",
        "officialLanguage": "French",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/ca.svg",
        "borderingCountries": "United States",
        "nationalAnimal": "North American beaver",
        "animalPhoto": "https://en.wikipedia.org/wiki/List_of_national_animals#/media/File:American_Beaver.jpg",
        "googleMap": "https://goo.gl/maps/jmEVLugreeqiZXxbA"
    },
    {
        "name": "Jamaica",
        "officialName": "Jamaica",
        "continent": "North America",
        "capital": "Kingston",
        "population": 2961161,
        "currency": {
                "officialName": "Jamaican dollar",
                "symbol": "$",
                "name": "Jamaican dollar"
                 },
        "areaKM": 10991,
        "highestPoint": {
                        "tallestpointM": 2256,
                        "location": "Blue Mountain Peak"
                        },
        "olympicMedals":{
                  "totalMedalcount": 87,
                  "medals": {"gold": 26, "silver": 36, "bronze": 25}
                  },
        "about" : "Jamaica, a Caribbean island nation, has a lush topography of mountains, rainforests and reef-lined beaches. Many of its all-inclusive resorts are clustered in Montego Bay, with its British-colonial architecture, and Negril, known for its diving and snorkeling sites. Jamaica is famed as the birthplace of reggae music, and its capital Kingston is home to the Bob Marley Museum, dedicated to the famous singer.",
        "officialLanguage": "English",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/jm.svg",
        "borderingCountries": "This country does not border any countries",
        "nationalAnimal": "Red-Billed streamertail",
        "animalPhoto": "https://en.wikipedia.org/wiki/List_of_national_animals#/media/File:Red-billed_Streamertail_2506104129.jpg",
        "googleMap": "https://goo.gl/maps/Z8mQ6jxnRQKFwJy9A"
    },
    {
        "name": "Guatemala",
        "officialName": "Republic of Guatemala",
        "continent": " North America",
        "capital": "Guatemala City",
        "population": 16858333,
        "currency": {
                "officialName": "Guatemalan quetzal",
                "symbol": "Q",
                "name": "GTQ"
                 },
        "areaKM": 108889,
        "highestPoint": {
                        "tallestpointM": 4220,
                        "location": "Volcán Tajumulco"
                        },
        "olympicMedals":{
                  "totalMedalcount": 1,
                  "medals": {"gold": 0, "silver": 1, "bronze": 0}
                  },
        "about" : "Guatemala, a Central American country south of Mexico, is home to volcanoes, rainforests and ancient Mayan sites. The capital, Guatemala City, features the stately National Palace of Culture and the National Museum of Archaeology and Ethnology. Antigua, west of the capital, contains preserved Spanish colonial buildings. Lake Atitlán, formed in a massive volcanic crater, is surrounded by coffee fields and villages.",
        "officialLanguage": "Spanish",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/gt.svg",
        "borderingCountries": "Belize, El Salvador, Honduras, Mexico",
        "nationalAnimal": "Quetzal",
        "animalPhoto": "https://en.wikipedia.org/wiki/List_of_national_animals#/media/File:Quetzal01.jpg",
        "googleMap": "https://goo.gl/maps/JoRAbem4Hxb9FYbVA"
    },
    {
        "name": "Papua New Guinea",
        "officialName": "Independent State of Papua New Guinea",
        "continent": "Oceania",
        "capital": "Port Moresby",
        "population": 8947027,
        "currency": {
                "officialName": "Papua New Guinean kina",
                "symbol": "K",
                "name": "PGK"
                 },
        "areaKM": 462840,
        "highestPoint": {
                        "tallestpointM": 4509,
                        "location": "Mount Wilhelm"
                        },
        "olympicMedals":{
                  "totalMedalcount": 0,
                  "medals": {"gold": 0, "silver": 0, "bronze": 0}
                  },
        "about" : "Southern Region is one of four regions of Papua New Guinea. The region includes the national capital Port Moresby",
        "officialLanguage": "English",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/pg.svg",
        "borderingCountries": "Indonesia",
        "nationalAnimal": "Dugong",
        "animalPhoto": "https://en.wikipedia.org/wiki/List_of_national_animals#/media/File:Dugong_Marsa_Alam.jpg",
        "googleMap": "https://goo.gl/maps/ChGmzZBjZ3vnBwR2A"
    },
    {
        "name": "New Zealand",
        "officialName": "New Zealand",
        "continent": "Oceania",
        "capital": "Wellington",
        "population": 5084300,
        "currency": {
                "officialName": "New Zealand dollar",
                "symbol": "$",
                "name": "NZD"
                 },
        "areaKM": 270467,
        "highestPoint": {
                        "tallestpointM": 3754,
                        "location": "Mt. Cook"
                        },
        "olympicMedals":{
                  "totalMedalcount": 137,
                  "medals": {"gold": 53, "silver": 33, "bronze": 51}
                  },
        "about" : "New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and over 700 smaller islands.",
        "officialLanguage": "English",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/nz.svg",
        "borderingCountries": "This country does not border any countries",
        "nationalAnimal": "Kiwi",
        "animalPhoto": "https://en.wikipedia.org/wiki/List_of_national_animals#/media/File:TeTuatahianui.jpg",
        "googleMap": "https://goo.gl/maps/xXiDQo65dwdpw9iu8"
    },

    {
        "name": "Brazil",
        "officialName": "Federative Republic of Brazil",
        "continent": "South America",
        "capital": "Brasília",
        "population": 212559409,
        "currency": {
                "officialName": "Brazilian real",
                "symbol": "R$",
                "name": "BRL"
                 },
        "areaKM": 8515767,
        "highestPoint": {
                        "tallestpointM": 2994,
                        "location": "Pico da Neblina"
                        },
        "olympicMedals":{
                  "totalMedalcount": 150,
                  "medals": {"gold": 37, "silver": 42, "bronze": 71}
                  },
        "about" : "Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America. At 8.5 million square kilometers and with over 211 million people, Brazil is the world's fifth-largest country by area and the sixth most populous",
        "officialLanguage": "Portuguese",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/br.svg",
        "borderingCountries": "Argentina, Bolivia, Colombia, French Guiana, Guyana, Paraguay, Peru, Suriname, Uruguay, Venezuela",
        "nationalAnimal": "Rufous-bellied thrush",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Turdus-rufiventris.jpg/800px-Turdus-rufiventris.jpg",
        "googleMap": "https://goo.gl/maps/waCKk21HeeqFzkNC9"
    },
    
    {
        "name": "Argentina",
        "officialName": "Argentine Republic",
        "continent": "South America",
        "capital": "Buenos Aires",
        "population": 45376763,
        "currency": {
                "officialName": "Argentine peso",
                "symbol": "$",
                "name": "ARS"
                 },
        "areaKM": 2780400,
        "highestPoint": {
                        "tallestpointM": 6959,
                        "location": "Aconcagua "
                        },
        "olympicMedals":{
                  "totalMedalcount": 77,
                  "medals": {"gold": 21, "silver": 26, "bronze": 30}
                  },
        "about" : "Argentina, officially the Argentine Republic, is a country in the southern half of South America. Argentina covers an area of 2,780,400 km², making it the largest Spanish-speaking nation in the world by area.",
        "officialLanguage":"None (Spanish has de facto status)",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/ar.svg",
        "borderingCountries": "Bolivia, Brazil, Chile, Paraguay, Uruguay",
        "nationalAnimal": "	Rufous hornero",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flickr_-_Dario_Sanches_-_JO%C3%83O-DE-BARRO_%28Furnarius_rufus%29_%283%29.jpg/300px-Flickr_-_Dario_Sanches_-_JO%C3%83O-DE-BARRO_%28Furnarius_rufus%29_%283%29.jpg",
        "googleMap": "https://goo.gl/maps/Z9DXNxhf2o93kvyc6"
    },
    
    {
        "name": "Venezuela",
        "officialName": "Bolivarian Republic of Venezuela",
        "continent": "South America",
        "capital": "Caracas",
        "population": 28435943,
        "currency": {
                "officialName": "Venezuelan bolívar soberano",
                "symbol": "Bs.S.",
                "name": "VES"
                 },
        "areaKM": 916445,
        "highestPoint": {
                        "tallestpointM": 4978,
                        "location": "Bolívar Peak"
                        },
        "olympicMedals":{
                  "totalMedalcount": 19,
                  "medals": {"gold": 3, "silver": 7, "bronze": 9}
                  },
        "about" : "Venezuela is a country on the northern coast of South America with diverse natural attractions. Along its Caribbean coast are tropical resort islands including Isla de Margarita and the Los Roques archipelago. ",
        "officialLanguage": "Spanish and Venezuelan Sign Language",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/ve.svg",
        "borderingCountries": "Brazil, Colombia, Guyana",
        "nationalAnimal": "Venezuelan troupial",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Curacao-Icterus-Icterus-2013.JPG/1591px-Curacao-Icterus-Icterus-2013.JPG",
        "googleMap": "https://goo.gl/maps/KLCwDN8sec7z2kse9"
    },
    {
        "name": "Suriname",
        "officialName": "Republic of Suriname",
        "continent": "South America",
        "capital": "Paramaribo",
        "population": 586634,
        "currency": {
                "officialName": "Surinamese dollar",
                "symbol": "$",
                "name": "SRD"
                 },
        "areaKM": 163820,
        "highestPoint": {
                        "tallestpointM": 1286,
                        "location": "Julianatop"
                        },
        "olympicMedals":{
                  "totalMedalcount": 2,
                  "medals": {"gold": 1, "silver": 0, "bronze": 1}
                  },
        "about" : "Suriname is a small country on the northeastern coast of South America. It's defined by vast swaths of tropical rainforest, Dutch colonial architecture and a melting-pot culture. ",
        "officialLanguage": "Dutch",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/sr.svg",
        "borderingCountries": "Brazil, French Guiana, Guyana",
        "nationalAnimal": "Lesser Kiskadee",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lesser_kiskadee_%28Pitangus_lictor_panamense%29.jpg/440px-Lesser_kiskadee_%28Pitangus_lictor_panamense%29.jpg",
        "googleMap": "https://goo.gl/maps/iy7TuQLSi4qgoBoG7"
    },
    {
        "name": "Chile",
        "officialName": "Republic of Chile",
        "continent": "South America",
        "capital": "Santiago",
        "population": 19116209,
        "currency": {
                "officialName": "Chilean peso",
                "symbol": "$",
                "name": "CLP"
                 },
        "areaKM": 756102,
        "highestPoint": {
                        "tallestpointM": 6891,
                        "location": "Nevado Ojos del Salado"
                        },
        "olympicMedals":{
                  "totalMedalcount": 13,
                  "medals": {"gold": 2, "silver": 7, "bronze": 4}
                  },
        "about" : "Chile is a long, narrow country stretching along South America's western edge, with more than 6,000km of Pacific Ocean coastline.",
        "officialLanguage": "None (Spanish has de facto status)",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/cl.svg",
        "borderingCountries": "Argentina, Bolivia, Peru",
        "nationalAnimal": "Huemul",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Huemul_verdadero.JPG",
        "googleMap": "https://goo.gl/maps/XboxyNHh2fAjCPNn9"
    },
    {
        "name": "Peru",
        "officialName": "Republic of Peru",
        "continent": "South America",
        "capital": "Lima",
        "population": 32971846,
        "currency": {
                "officialName": "Peruvian sol",
                "symbol": "S/ ",
                "name": "PEN"
                 },
        "areaKM": 1285216,
        "highestPoint": {
                        "tallestpointM": 6768,
                        "location": "Huascarán."
                        },
        "olympicMedals":{
                  "totalMedalcount": 4,
                  "medals": {"gold": 1, "silver": 3, "bronze": 0}
                  },
        "about" : "Peru is home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains. The region around Machu Picchu, including the Sacred Valley, Inca Trail and colonial city of Cusco, is rich in archaeological sites. ",
        "officialLanguage": "Spanish, Aymara, Quechua",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/pe.svg",
        "borderingCountries": "Bolivia, Brazil, Chile, Colombia, Ecuador",
        "nationalAnimal": "Vicuña",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Vicunacrop.jpg",
        "googleMap": "https://goo.gl/maps/uDWEUaXNcZTng1fP6"
    },
    {
        "name": "Uganda",
        "officialName": "Republic of Uganda",
        "continent": "Africa",
        "capital": "Kampala",
        "population": 45741000,
        "currency": {
                "officialName": "Ugandan shilling",
                "symbol": "Sh",
                "name": "UGX"
                 },
        "areaKM": 241550,
        "highestPoint": {
                        "tallestpointM": 5094 ,
                        "location": "Alexandra - Ruwenzori mountain range"
                        },
        "olympicMedals":{
                  "totalMedalcount": 11,
                  "medals": {"gold": 4, "silver": 4, "bronze": 3}
                  },
        "about" : "Uganda is a landlocked country in East Africa whose diverse landscape encompasses the snow-capped Rwenzori Mountains and immense Lake Victoria. Its abundant wildlife includes chimpanzees as well as rare birds.",
        "officialLanguage": "English, Swahili",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/ug.svg",
        "borderingCountries": "Democratic Republic of the Congo, Kenya, Rwanda, South Sudan, Tanzania",
        "nationalAnimal": "Grey crowned crane",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Balearica_regulorum_001.jpg/898px-Balearica_regulorum_001.jpg",
        "googleMap": "https://goo.gl/maps/Y7812hFiGa8LD9N68",
    },
    {
        "name": "Algeria",
        "officialName": "People's Democratic Republic of Algeria",
        "continent": "Africa",
        "capital": "Algiers",
        "population": 510713,
        "currency": {
                "officialName": "Algerian dinar",
                "symbol": "د.ج",
                "name": "DZD"
                 },
        "areaKM": 2381741,
        "highestPoint": {
                        "tallestpointM": 3003,
                        "location": "Mount Tahat"
                        },
        "olympicMedals":{
                  "totalMedalcount": 17,
                  "medals": {"gold": 5, "silver": 4, "bronze": 8}
                  },
        "about" : "Algeria is a North African country with a Mediterranean coastline and a Saharan desert interior. Many empires have left legacies here, such as the ancient Roman ruins in seaside Tipaza.",
        "officialLanguage": "Arabic, Tamazight",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/dz.svg",
        "borderingCountries": "Tunisia , Libya, Niger, Western Sahara, Morocco, Mali and Mauritania",
        "nationalAnimal": "Fennec fox",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Fennec_Foxes.jpg",
        "googleMap": "https://goo.gl/maps/RsAyAfyaiNVb8DpW8"
    },
    {
        "name": "Angola",
        "officialName": "Republic of Angola",
        "continent": "Africa",
        "capital": "Luanda",
        "population": 32866268,
        "currency": {
                "officialName": "Angolan kwanza",
                "symbol": "Kz",
                "name": "AOA"
                 },
        "areaKM": 1246700,
        "highestPoint": {
                        "tallestpointM": 2620,
                        "location": "Morro de Môco"
                        },
        "olympicMedals":{
                  "totalMedalcount": 0,
                  "medals": {"gold": 0, "silver": 0, "bronze": 0}
                  },
        "about" : "Angola is a Southern African nation whose varied terrain encompasses tropical Atlantic beaches, a labyrinthine system of rivers and Sub-Saharan desert that extends across the border into Namibia.",
        "officialLanguage": "Portuguese",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/ao.svg",
        "borderingCountries": "Republic of the Congo, Democratic Republic of the Congo, Zambia and Namibia",
        "nationalAnimal": "Red-crested turaco",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/RedcrestedTuraco.jpg/1500px-RedcrestedTuraco.jpg",
        "googleMap": "https://goo.gl/maps/q42Qbf1BmQL3fuZg9"
    },
    {
        "name": "Egypt",
        "officialName": "Arab Republic of Egypt",
        "continent": "Africa",
        "capital": "Cairo",
        "population": 102334403,
        "currency": {
                "officialName": "Egyptian pound",
                "symbol": "£",
                "name": "EGP"
                 },
        "areaKM": 1002450,
        "highestPoint": {
                        "tallestpointM": 2642,
                        "location": "Mount Kātrīnā"
                        },
        "olympicMedals":{
                  "totalMedalcount": 38,
                  "medals": {"gold": 8, "silver": 11, "bronze": 19}
                  },
        "about" : "Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza's colossal Pyramids and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple and Valley of the Kings tombs.",
        "officialLanguage": "Arabic",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/eg.svg",
        "borderingCountries": "Israel, Libya, Palestinian Territory, Sudan",
        "nationalAnimal": "Steppe Eagle ",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Steppe_Eagle_Portrait.jpg/1024px-Steppe_Eagle_Portrait.jpg",
        "googleMap": "https://goo.gl/maps/uoDRhXbsqjG6L7VG7"
    },
    {
        "name": "South Africa",
        "officialName": "Republic of South Africa",
        "continent": "Africa",
        "capital": "Pretoria, Bloemfontein, Cape Town",
        "population": 59308690,
        "currency": {
                "officialName": "South African rand",
                "symbol": "R",
                "name": "ZAR"
                 },
        "areaKM": 1221037,
        "highestPoint": {
                        "tallestpointM": 3482,
                        "location": "Thabana Ntlenyana"
                        },
        "olympicMedals":{
                  "totalMedalcount": 89,
                  "medals": {"gold": 27, "silver": 33, "bronze": 29}
                  },
        "about" : "South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems.",
        "officialLanguage": "Afrikaans, English, Southern Ndebele, Sotho, Northern Sotho, Swazi, Tsonga, Tswana, Venda, Xhosa, Zulu",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/za.svg",
        "borderingCountries": "Botswana, Lesotho, Mozambique, Namibia, Eswatini and Zimbabwe",
        "nationalAnimal": "Springbok",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Springbok.JPG",
        "googleMap": "https://goo.gl/maps/CLCZ1R8Uz1KpYhRv6"
    },
    {
        "name": "Morocco",
        "officialName": "Kingdom of Morocco",
        "continent": "Africa",
        "capital": "Rabat",
        "population": 36910558,
        "currency": {
                "officialName": "Moroccan dirham",
                "symbol": "د.م.",
                "name": "MAD"
                 },
        "areaKM": 446550,
        "highestPoint": {
                        "tallestpointM": 4165,
                        "location": "Mount Toubkal"
                        },
        "olympicMedals":{
                  "totalMedalcount": 24,
                  "medals": {"gold": 7, "silver": 5, "bronze": 12}
                  },
        "about" : "Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and European cultural influences. ",
        "officialLanguage": "Arabic, Tamazight",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/ma.svg",
        "borderingCountries": "Algeria, Western Sahara and Spain",
        "nationalAnimal": "Barbary lion",
        "animalPhoto": "https://upload.wikimedia.org/wikipedia/commons/4/43/Barbary_lion.jpg",
        "googleMap": "https://goo.gl/maps/6oMv3dyBZg3iaXQ5A"
    },
    {
        "name": "Indonesia",
        "officialName": "Republic of Indonesia",
        "continent": "Asia",
        "capital": "Jakarta",
        "population": 273523621,
        "currency": {
                        "officialName": "Indonesian rupiah",
                        "symbol": "Rp",
                        "name": "IDR"
                    },
        "areaKM": 1904569,
        "highestPoint": {
                            "tallestpointM": 4884,
                            "location": "Puncak Jaya"
                        },
        "olympicMedals":{
                            "totalMedalcount": 37,
                            "medals": {"gold": 8, "silver": 14, "bronze": 15 }
                        },
        "about" : "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over seventeen thousand islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.",
        "officialLanguage": "Indonesian",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/id.svg",
        "borderingCountries": "Papua New Guinea, Malaysia and Timor-Leste",
        "nationalAnimal": "Komodo dragon",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:Komodo_dragon_(Varanus_komodoensis).jpg",
        "googleMap": "https://goo.gl/maps/9gfPupm5bffixiFJ6"
    },
    
    {
        "name": "Cambodia",
        "officialName": "Kingdom of Cambodia",
        "continent": "Asia",
        "capital": "Phnom Penh",
        "population": 16718971,
        "currency": {
                        "officialName": "Cambodian riel",
                        "symbol": "៛",
                        "name": "KHR"
                    },
        "areaKM": 181035,
        "highestPoint": {
                            "tallestPointM": 1813,
                            "location": "Mount Aôral"
                        },
        "olympicMedals":{
                            "totalMedalcount": 0,
                            "medals": {"gold": 0, "silver": 0, "bronze": 0 }
                        },
        "about" : "Cambodia is a Southeast Asian nation whose landscape spans low-lying plains, the Mekong Delta, mountains and Gulf of Thailand coastline. Phnom Penh, its capital, is home to the art deco Central Market, glittering Royal Palace and the National Museum's historical and archaeological exhibits. In the country's northwest are the ruins of Angkor Wat, a massive stone temple complex built during the Khmer Empire.",
        "officialLanguage": "Khmer",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/kh.svg",
        "borderingCountries": "Laos, Thailand and Vietnam",
        "nationalAnimal": "Kouprey",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:Saen_Monourom_Mondul_Kiri_Cambodia_crop.jpg",
        "googleMap": "https://goo.gl/maps/nztQtFSrUXZymJaW8"           
                
    },
    
    {
        "name": "Taiwan",
        "officialName": "Republic of China (Taiwan)",
        "continent": "Asia",
        "capital": "Taipei",
        "population": 23503349,
        "currency": {
                        "officialName": "New Taiwan dollar",
                        "symbol": "$",
                        "name": "TWD"
                    },
        "areaKM": 36193,
        "highestPoint": {
                            "tallestPointM": 3952,
                            "location": "Yushan"
                        },
        "olympicMedals":{
                            "totalMedalcount": 36,
                            "medals": {"gold": 7, "silver": 11, "bronze": 18 }
                        },
        "about" : "Taiwan, officially the Republic of China, is a country in East Asia. It shares maritime borders with the People's Republic of China to the northwest, Japan to the northeast, and the Philippines to the south.",
        "officialLanguage": "Chinese",
        "independent": false,
        "unMember": false,
        "flag": "https://flagcdn.com/tw.svg",
        "borderingCountries": "This Country does not border any Countries",
        "nationalAnimal": "Formosan black bear(unofficial)",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:Formosan_Black_Bear.JPG",
        "googleMap": "https://goo.gl/maps/HgMKFQjNadF3Wa6B6"
        
    },
    
    {
        "name": "India",
        "officialName": "Republic of India",
        "continent": "Asia",
        "capital": "New Delhi",
        "population": 1380004385,
        "currency": {
                        "officialName": "Indian rupee",
                        "symbol": "₹",
                        "name": "INR"
                     },
        "areaKM": 3287590,
        "highestPoint": {
                            "tallestpointM": 8586,
                            "location": "Kangchenjunga"
                        },
        "olympicMedals":{
                            "totalMedalcount": 35,
                            "medals": {"gold": 10, "silver": 9, "bronze": 16}
                        },
        "about" : "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world.",
        "officialLanguage": "Hindi",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/in.svg",
        "borderingCountries": "Bangladesh, Bhutan, Myanmar(Burma), China, Nepal and Pakistan",
        "nationalAnimal": "Tiger",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:Panthera_tigris_tigris.jpg",
        "googleMap": "https://goo.gl/maps/WSk3fLwG4vtPQetp7"
    },
    
    {
        "name": "Singapore",
        "officialName": "Republic of Singapore",
        "continent": "Asia",
        "capital": "Singapore",
        "population": 5685807,
        "currency": {
                        "officialName": "Singapore dollar",
                        "symbol": "$",
                        "name": "SGD"
                     },
        "areaKM": 710,
        "highestPoint": {
                            "tallestpointM": 163.63,
                            "location": "Bukit Timah Hill"
                        },
        "olympicMedals":{
                            "totalMedalcount": 5,
                            "medals": {"gold": 1, "silver": 2, "bronze": 2}
                        },
        "about" : "Singapore, officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.",
        "officialLanguage": "Malay",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/sg.svg",
        "borderingCountries": "Malaysia and Indonesia",
        "nationalAnimal": "Lion",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:Lion_d%27Afrique.jpg",
        "googleMap": "https://goo.gl/maps/QbQt9Y9b5KFzsahV6"
    },
    
    {
        "name": "Hong Kong",
        "officialName": "Hong Kong Special Administrative Region of the People's Republic of China",
        "continent": "Asia",
        "capital": "City of Victoria",
        "population": 7500700,
        "currency": {
                        "officialName": "Hong Kong dollar",
                        "symbol": "$",
                        "name": "HKD"
                     },
        "areaKM": 1104,
        "highestPoint": {
                            "tallestpointM": 957,
                            "location": "Tai Mo Shan"
                        },
        "olympicMedals":{
                            "totalMedalcount": 9,
                            "medals": {"gold": 2, "silver": 3, "bronze": 4}
                        },
        "about" : "Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China, is a city and special administrative region of China on the eastern Pearl River Delta in South China.",
        "officialLanguage": "Chinese",
        "independent": false,
        "unMember": false,
        "flag": "https://flagcdn.com/hk.svg",
        "borderingCountries": "China",
        "nationalAnimal": "Giant Panda",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:Grosser_Panda.JPG",
        "googleMap": "https://goo.gl/maps/1sEnNmT47ffrC8MU8"
    },
    
    {
        "name": "Japan",
        "officialName": "Japan",
        "continent": "Asia",
        "capital": "Tokyo",
        "population": 125836021,
        "currency": {
                        "officialName": "Japanese yen",
                        "symbol": "¥",
                        "name": "JPY"
                     },
        "areaKM": 377930,
        "highestPoint": {
                            "tallestpointM": 3776,
                            "location": "Mount Fuji"
                        },
        "olympicMedals":{
                            "totalMedalcount": 497,
                            "medals": {"gold": 169, "silver": 150, "bronze": 178}
                        },
        "about" : "Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.",
        "officialLanguage": "Japanese",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/jp.svg",
        "borderingCountries": "South Korea",
        "nationalAnimal": "Japanese macaque",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:Japanese_Snow_Monkey_(Macaque)_Mother_Grooms_Her_Young.jpg",
        "googleMap": "https://goo.gl/maps/NGTLSCSrA8bMrvnX9"
    },
    
    {
        "name": "South Korea",
        "officialName": "Republic of Korea",
        "continent": "Asia",
        "capital": "Seoul",
        "population": 51780579,
        "currency": {
                        "officialName": "South Korean won",
                        "symbol": "₩",
                        "name": "KRW"
                     },
        "areaKM": 100210,
        "highestPoint": {
                            "tallestpointM": 1950,
                            "location": "Hallasan"
                        },
        "olympicMedals":{
                            "totalMedalcount": 287,
                            "medals": {"gold": 96, "silver": 91, "bronze": 100}
                        },
        "about" : "South Korea, an East Asian nation on the southern half of the Korean Peninsula, shares one of the world’s most heavily militarized borders with North Korea. It’s equally known for its green, hilly countryside dotted with cherry trees and centuries-old Buddhist temples, plus its coastal fishing villages, sub-tropical islands and high-tech cities such as Seoul, the capital.",
        "officialLanguage": "Korean",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/kr.svg",
        "borderingCountries": "North Korea",
        "nationalAnimal": "The Siberian tiger",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:P.t.altaica_Tomak_Male.jpg",
        "googleMap": "https://goo.gl/maps/7ecjaJXefjAQhxjGA"
    },
    
    {
        "name": "Australia",
        "officialName": "Commonwealth of Australia",
        "continent": "Oceania",
        "capital": "Canberra",
        "population": 25687041,
        "currency": {
                        "officialName": "Australian dollar",
                        "symbol": "$",
                        "name": "AUD"
                     },
        "areaKM": 7692024,
        "highestPoint": {
                            "tallestpointM": 2228,
                            "location": "Mount Kosciuszko"
                        },
        "olympicMedals":{
                            "totalMedalcount": 547,
                            "medals": {"gold": 164, "silver": 173, "bronze": 210}
                        },
        "about" : "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest country by area in Oceania and the world's sixth-largest country.",
        "officialLanguage": "English",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/au.svg",
        "borderingCountries": "This Country does not border any Countries",
        "nationalAnimal": "Red Kangaroo",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:Red_kangaroo_-_melbourne_zoo.jpg",
        "googleMap": "https://goo.gl/maps/DcjaDa7UbhnZTndH6"
    },
    
    {
        "name": "Fiji",
        "officialName": "Republic of Fiji",
        "continent": "Oceania",
        "capital": "Suva",
        "population": 896444,
        "currency": {
                        "officialName": "Fijian dollar",
                        "symbol": "$",
                        "name": "FJD"
                     },
        "areaKM": 18272,
        "highestPoint": {
                            "tallestpointM": 1324,
                            "location": "Tomanivi"
                        },
        "olympicMedals":{
                            "totalMedalcount": 3,
                            "medals": {"gold": 2, "silver": 0, "bronze": 1}
                        },
        "about" : "Fiji, a country in the South Pacific, is an archipelago of more than 300 islands. It's famed for rugged landscapes, palm-lined beaches and coral reefs with clear lagoons. Its major islands, Viti Levu and Vanua Levu, contain most of the population. Viti Levu is home to the capital, Suva, a port city with British colonial architecture. The Fiji Museum, in the Victorian-era Thurston Gardens, has ethnographic exhibits.",
        "officialLanguage": "English, Fijian, Hindi",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/fj.svg",
        "borderingCountries": "This Country does not border any Countries",
        "nationalAnimal": "Collared Lory",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:Collared_Lories_taveuni_june2008.JPG",
        "googleMap": "https://goo.gl/maps/r9fhDqoLZdg1zmE99"
    },
    
    {
        "name": "Samoa",
        "officialName": "Independent State of Samoa",
        "continent": "Oceania",
        "capital": "Apia",
        "population": 198410,
        "currency": {
                        "officialName": "Samoan tālā",
                        "symbol": "T",
                        "name": "WST"
                     },
        "areaKM": 2842,
        "highestPoint": {
                            "tallestpointM": 1858,
                            "location": "Mount Silisili"
                        },
        "olympicMedals":{
                            "totalMedalcount": 1,
                            "medals": {"gold": 0, "silver": 1, "bronze": 0}
                        },
        "about" : "Samoa, officially the Independent State of Samoa and until 1997 known as Western Samoa, is a Polynesian island country consisting of two main islands, two smaller, inhabited islands, and several smaller, uninhabited islands, including the Aleipata Islands.",
        "officialLanguage": "Samoan",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/ws.svg",
        "borderingCountries": "This Country does not border any Countries",
        "nationalAnimal": "Humpback whale",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:Humpback_Whale_underwater_shot.jpg",
        "googleMap": "https://goo.gl/maps/CFC9fEFP9cfkYUBF9"
    },
    
    {
        "name": "Tonga",
        "officialName": "Kingdom of Tonga",
        "continent": "Oceania",
        "capital": "Nuku'alofa",
        "population": 105697,
        "currency": {
                        "officialName": "Tongan paʻanga",
                        "symbol": "T$",
                        "name": "TOP"
                     },
        "areaKM": 747,
        "highestPoint": {
                            "tallestpointM": 1033,
                            "location": "Kao Island"
                        },
        "olympicMedals":{
                            "totalMedalcount": 1,
                            "medals": {"gold": 0, "silver": 1, "bronze": 0}
                        },
        "about" : "Tonga is a Polynesian kingdom of more than 170 South Pacific islands, many uninhabited, most lined in white beaches and coral reefs and covered with tropical rainforest. The main island, Tongatapu, is protected by lagoons and limestone cliffs. It’s home to the rural capital of Nuku'alofa, as well as beach resorts, plantations and the Ha'amonga ʻa Maui, a monumental coral gate from the 1200s.",
        "officialLanguage": "Tongan",
        "independent": true,
        "unMember": true,
        "flag": "https://flagcdn.com/to.svg",
        "borderingCountries": "This Country does not border any Countries",
        "nationalAnimal": "Radiated tortoise",
        "animalPhoto": "https://en.wikipedia.org/wiki/File:Radiated_tortoise_(Astrochelys_radiata)_Tsimanampetsotsa.jpg",
        "googleMap": "https://goo.gl/maps/p5YALBY2QdEzswRo7"
    }, 
]);