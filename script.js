// script.js
document.addEventListener('DOMContentLoaded', function() {
    const scenes= {
        "i1": {
            "type": "equirectangular",
            "panorama": "images/ingang.JPG",
            'etage': 0,

            'mapPosition': { 'x': 86, 'y': 184 },
            "noordPunt": 90, // Noordpunt in graden voor scene 1
            "initialYaw": 180,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "i2",
                },
            ]
        },
        "i2": {
            "type": "equirectangular",
            "panorama": "images/ingang2.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 91, 'y': 158 },
            "noordPunt": 90, // Noordpunt in graden voor scene 
            "initialYaw": 180,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Naar binnen",
                    "sceneId": "b1"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Naar buiten",
                    "sceneId": "i1"
                }
            ],
        },
        "b1": {
            "type": "equirectangular",
            "panorama": "images/b1.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 93, 'y': 151 },
            "noordPunt": 90, 
            "initialYaw": 180,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 30,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b2"
                },
                {
                    "pitch": -10,
                    "yaw": -90,
                    "type": "scene",
                    "text": "Onderbouw aula",
                    "sceneId": "oba1"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "i2"
                }
            ]
        },
        "b2": {
            "type": "equirectangular",
            "panorama": "images/b2.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 103, 'y': 140 },
            "noordPunt": 180, 
            "initialYaw": 180,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -70,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b3"
                },
                {
                    "pitch": -10,
                    "yaw": 130,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b1"
                },
                {
                    "pitch": -10,
                    "yaw": 20,
                    "type": "scene",
                    "text": "Lerarengang",
                    "sceneId": "lg1"
                },
                {
                    "pitch": -10,
                    "yaw": -140,
                    "type": "scene",
                    "text": "Naar boven",
                    "sceneId": "e1"
                },
                {
                    "pitch": -10,
                    "yaw": -130,
                    "type": "scene",
                    "text": "Onderbouw aula",
                    "sceneId": "oba5"
                }
            ]
        },
        "b3": {
            "type": "equirectangular",
            "panorama": "images/b3.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 99, 'y': 132 },
            "noordPunt": 180, 
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 10,
                    "type": "scene",
                    "text": "rechts",
                    "sceneId": "b4"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "links",
                    "sceneId": "b15"
                },
                {
                    "pitch": -10,
                    "yaw": 90,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b2"
                },
                {
                    "pitch": -10,
                    "yaw": -165,
                    "type": "scene",
                    "text": "Onderbouw aula",
                    "sceneId": "oba5"
                },
                {
                    "pitch": -10,
                    "yaw": 165,
                    "type": "scene",
                    "text": "Naar boven",
                    "sceneId": "e1"
                }
            ]
        },
        "b4": {
            "type": "equirectangular",
            "panorama": "images/b4.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 123, 'y': 130 },
            "noordPunt": 180, 
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b5"
                },
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b3"
                }
            ]
        },

        "b5": {
            "type": "equirectangular",
            "panorama": "images/b5.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 139, 'y': 131 },
            "noordPunt": 180, 
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 95,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b6"
                },
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b4"
                }
            ]
        },
        "b6": {
            "type": "equirectangular",
            "panorama": "images/b6.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 146, 'y': 107 },
            "noordPunt": 180, 
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 5,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b7"
                },
                {
                    "pitch": -10,
                    "yaw": -45,
                    "type": "scene",
                    "text": "Mediatheek",
                    "sceneId": "m1"
                },
                {
                    "pitch": -10,
                    "yaw": -140,
                    "type": "scene",
                    "text": "Buiten",
                    "sceneId": "tuin"
                },
                {
                    "pitch": -10,
                    "yaw": 130,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b5"
                }
            ]
        },
        "b7": {
            "type": "equirectangular",
            "panorama": "images/b7.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 168, 'y': 105 },
            "noordPunt": 180, 
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b8"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b6"
                }
            ]
        },
        "b8": {
            "type": "equirectangular",
            "panorama": "images/b8.JPG",'etage': 0, 
            'mapPosition': { 'x': 180, 'y': 106 },
            "noordPunt": 90, 
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b9"
                },
                {
                    "pitch": -10,
                    "yaw": -85,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b7"
                }
            ]
        },
        "b9": {
            "type": "equirectangular",
            "panorama": "images/b9.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 180, 'y': 63 },
            "noordPunt": 180, 
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -100,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b10"
                },
                {
                    "pitch": -10,
                    "yaw": 90,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b8"
                },
                {
                    "pitch": -10,
                    "yaw": 175,
                    "type": "scene",
                    "text": "Bovenbouw aula",
                    "sceneId": "ba"
                }
            ]
        },
        "b10": {
            "type": "equirectangular",
            "panorama": "images/b10.JPG",
            'etage': 0, 
            'mapPosition': { 'x':176, 'y': 30 },
            "noordPunt": 60,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -85,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b11"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b9"
                },
                {
                    "pitch": -10,
                    "yaw": 145,
                    "type": "scene",
                    "text": "Leerplein",
                    "sceneId": "0,49"
                }
            ]
        },
        "b11": {
            "type": "equirectangular",
            "panorama": "images/b11.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 145, 'y': 45 },
            "noordPunt": 150,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b12"
                },
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b10"
                },
                {
                    "pitch": -10,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Mandelazaal",
                    "sceneId": "mz"
                }
            ]
        },
        "b12": {
            "type": "equirectangular",
            "panorama": "images/b12.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 135, 'y': 56 },
            "noordPunt": 150,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -175,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b13"
                },
                {
                    "pitch": -10,
                    "yaw": 100,
                    "type": "scene",
                    "text": "Bovenbouw aula",
                    "sceneId": "ba"
                },
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b11"
                }
            ]
        },
        "b13": {
            "type": "equirectangular",
            "panorama": "images/b13.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 124, 'y':62 },
            "noordPunt": 330,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b14"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b12"
                }
            ]
        },
        "b14": {
            "type": "equirectangular",
            "panorama": "images/b14.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 108, 'y': 88 },
            "noordPunt": 270,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b15"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b13"
                },
                {
                    "pitch": -10,
                    "yaw": 60,
                    "type": "scene",
                    "text": "Handvaardigheid",
                    "sceneId": "hvl"
                },
                {
                    "pitch": -10,
                    "yaw": 95,
                    "type": "scene",
                    "text": "Naar boven",
                    "sceneId": "e5"
                }
            ]
        },
        "b15": {
            "type": "equirectangular",
            "panorama": "images/b15.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 108, 'y': 121 },
            "noordPunt": 270,
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 85,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b3"
                },
                {
                    "pitch": -10,
                    "yaw": -174,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b14"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b4"
                }
            ]
        },
        "m1": {
            "type": "equirectangular",
            "panorama": "images/m1.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 145, 'y': 95 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "m2"
                },
                {
                    "pitch": -10,
                    "yaw": -80,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b6"
                }
            ]
        },

        "m2": {
            "type": "equirectangular",
            "panorama": "images/m2.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 155, 'y': 95 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 170,
                    "type": "scene",
                    "text": "",
                    "sceneId": "m3"
                },
                {
                    "pitch": -10,
                    "yaw":80,
                    "type": "scene",
                    "text": "Bovenbouw aula",
                    "sceneId": "ba"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "",
                    "sceneId": "m1"
                }
            ]
        },

        "m3": {
            "type": "equirectangular",
            "panorama": "images/m3.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 165, 'y': 95 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 10,
                    "type": "scene",
                    "text": "",
                    "sceneId": "m2"
                }
            ]
        },

        "ba": {
            "type": "equirectangular",
            "panorama": "images/ba.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 158, 'y': 80 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 130,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b12"
                },
                {
                    "pitch": -10,
                    "yaw": -140,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b9"
                },
                {
                    "pitch": 5,
                    "yaw": 20,
                    "type": "scene",
                    "text": "Mediatheek",
                    "sceneId": "m2"
                },
                {
                    "pitch": 0,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Mandelazaal",
                    "sceneId": "mz"
                }
            ]
        },
        "mz": {
            "type": "equirectangular",
            "panorama": "images/mz.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 150, 'y': 45 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -35,
                    "type": "scene",
                    "text": "Bovenbouw aula",
                    "sceneId": "ba"
                },
                {
                    "pitch": -10,
                    "yaw": 35,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b11"
                }
            ]
        },

        "lg1": {
            "type": "equirectangular",
            "panorama": "images/lg1.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 107, 'y': 157 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -10,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b2"
                },                
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "lg2"
                },
                {
                    "pitch": -10,
                    "yaw": 90,
                    "type": "scene",
                    "text": "leraren kamer",
                    "sceneId": "lk"
                }
            ]
        }, 
        "lg2": {
            "type": "equirectangular",
            "panorama": "images/lg2.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 111, 'y': 175 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 140,
                    "type": "scene",
                    "text": "",
                    "sceneId": "lg1"
                },                
                {
                    "pitch": 10,
                    "yaw": -10,
                    "type": "scene",
                    "text": "boven",
                    "sceneId": "e4"
                },
            ]
        }, 
        "lk": {
            "type": "equirectangular",
            "panorama": "images/lk.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 119, 'y': 171 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -10,
                    "type": "scene",
                    "text": "",
                    "sceneId": "lg1"
                },                
            ]
        }, 
        "hvl": {
            "type": "equirectangular",
            "panorama": "images/hvl.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 98, 'y': 98 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 35,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b14"
                },
            ]
        },  
        "tuin": {
            "type": "equirectangular",
            "panorama": "images/tuin.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 250, 'y': 250 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 5,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "b6"
                },
            ]
        },       
        "0,49": {
            "type": "equirectangular",
            "panorama": "images/0,49.JPG",
            'etage': 0, 
            'mapPosition': { 'x':180, 'y': 38 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -160,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b10"
                },
                {
                    "pitch": -10,
                    "yaw": 160,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b9"
                },
                
            ]
        },

        "oba1": {
            "type": "equirectangular",
            "panorama": "images/oba1.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 70, 'y': 150 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oba2"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Ingang",
                    "sceneId": "b2"
                },
                {
                    "pitch": 20,
                    "yaw": 150,
                    "type": "scene",
                    "text": "Naar boven",
                    "sceneId": "eoba"
                }
                
            ]
        },
        "oba2": {
            "type": "equirectangular",
            "panorama": "images/oba2.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 61, 'y': 150 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 80,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oba3"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oba1"
                },
                {
                    "pitch": -10,
                    "yaw": 30,
                    "type": "scene",
                    "text": "Gymzalen",
                    "sceneId": "lo1"
                },
            ]
        },
        "oba3": {
            "type": "equirectangular",
            "panorama": "images/oba3.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 61, 'y': 132 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oba4"
                },
                {
                    "pitch": -10,
                    "yaw": 140,
                    "type": "scene",
                    "text": "Muzieklokaal",
                    "sceneId": "ml"
                },
                {
                    "pitch": -10,
                    "yaw": -80,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oba2"
                },
                {
                    "pitch": -10,
                    "yaw": -35,
                    "type": "scene",
                    "text": "Gymzalen",
                    "sceneId": "lo1"
                },
                
            ]
        },
        "oba4": {
            "type": "equirectangular",
            "panorama": "images/oba4.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 71, 'y': 133 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 110,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oba5"
                },
                {
                    "pitch": -10,
                    "yaw": -30,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oba3"
                },
                {
                    "pitch": -10,
                    "yaw": -90,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oba2"
                },
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Muzieklokaal",
                    "sceneId": "ml"
                }
                
            ]
        },
        "oba5": {
            "type": "equirectangular",
            "panorama": "images/oba5.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 83, 'y': 127 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 10,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b3"
                },
                {
                    "pitch": -10,
                    "yaw": 50,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b2"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oba4"
                },    
            ]
        },
        
        "ml": {
            "type": "equirectangular",
            "panorama": "images/ml.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 68, 'y':117 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 30,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "oba4"
                },
                
            ]
        },
        "lo1": {
            "type": "equirectangular",
            "panorama": "images/lo1.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 47, 'y': 142 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 40,
                    "type": "scene",
                    "text": "Aula",
                    "sceneId": "oba2"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "Aula",
                    "sceneId": "oba3"
                },
                {
                    "pitch": 10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Naar boven",
                    "sceneId": "lo2"
                },
                {
                    "pitch": -10,
                    "yaw": -130,
                    "type": "scene",
                    "text": "Gymzaal s06",
                    "sceneId": "s06"
                }
            ]
        },
        "lo2": {
            "type": "equirectangular",
            "panorama": "images/lo2.JPG",
            'etage': 3, 
            'mapPosition': { 'x': 133, 'y': 96 },
            "hotSpots": [
                {
                    "pitch": 20,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Naar boven",
                    "sceneId": "lo3"
                },
                {
                    "pitch": -30,
                    "yaw": 5,
                    "type": "scene",
                    "text": "Naar beneden",
                    "sceneId": "lo1"
                },
                {
                    "pitch": -10,
                    "yaw": -90,
                    "type": "scene",
                    "text": "Sportzaal 1",
                    "sceneId": "s08"
                }
                
            ]
        },
        "lo3": {
            "type": "equirectangular",
            "panorama": "images/lo3.JPG",
            'etage': 4, 
            'mapPosition': { 'x': 140, 'y': 97 },
            "hotSpots": [

                {
                    "pitch": -35,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Naar beneden",
                    "sceneId": "lo2"
                },
                {
                    "pitch": 20,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Sportzaal 2",
                    "sceneId": "s14"
                },
                {
                    "pitch": -10,
                    "yaw": -160,
                    "type": "scene",
                    "text": "Gymzaal s10",
                    "sceneId": "s10"
                }
                
            ]
        },
        "s06": {
            "type": "equirectangular",
            "panorama": "images/s06.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 25, 'y': 130 },
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": -170,
                    "type": "scene",
                    "text": "",
                    "sceneId": "lo1"
                },
                
            ]
        },
        "s08": {
            "type": "equirectangular",
            "panorama": "images/s12.JPG",
            'etage': 3, 
            'mapPosition': { 'x': 147, 'y': 52 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -160,
                    "type": "scene",
                    "text": "",
                    "sceneId": "lo2"
                },
                
            ]
        },
        "s10": {
            "type": "equirectangular",
            "panorama": "images/s10.JPG",
            'etage': 4, 
            'mapPosition': { 'x': 75, 'y': 95 },
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "lo3"
                },
                
            ]
        },
        "s14": {
            "type": "equirectangular",
            "panorama": "images/s14.JPG",
            'etage': 5, 
            'mapPosition': { 'x': 155, 'y': 150 },
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": -160,
                    "type": "scene",
                    "text": "",
                    "sceneId": "lo3"
                },
                
            ]
        },
        "eoba": {
            "type": "equirectangular",
            "panorama": "images/eoba.JPG",
            'etage': 1, 
            'mapPosition': { 'x': 26, 'y': 140 },
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Naar beneden",
                    "sceneId": "oba1"
                },
                {
                    "pitch": -10,
                    "yaw": -80,
                    "type": "scene",
                    "text": "",
                    "sceneId": "e1"
                },
                
            ]
        },
        "e1": {
            "type": "equirectangular",
            "panorama": "images/e1.JPG",
            'etage': 1, 
            'mapPosition': { 'x': 27, 'y': 135 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "e2"
                },
                                {
                    "pitch": -10,
                    "yaw": 100,
                    "type": "scene",
                    "text": "Onderbouw aula",
                    "sceneId": "eoba"
                },  
                {
                    "pitch": -20,
                    "yaw": -170,
                    "type": "scene",
                    "text": "Naar beneden",
                    "sceneId": "b3"
                },
                
            ]
        },
        "e2": {
            "type": "equirectangular",
            "panorama": "images/e2.JPG",
            'etage': 1, 
            'mapPosition': { 'x': 52, 'y': 132 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -5,
                    "type": "scene",
                    "text": "",
                    "sceneId": "e3"
                },
                {
                    "pitch": -10,
                    "yaw": 90,
                    "type": "scene",
                    "text": "",
                    "sceneId": "e1"
                }, 
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "e5"
                },
                {
                    "pitch": -10,
                    "yaw": 120,
                    "type": "scene",
                    "text": "Leerplein",
                    "sceneId": "lpv"
                }
                
            ]
        },
        "e3": {
            "type": "equirectangular",
            "panorama": "images/e3.JPG",
            'etage': 1, 
            'mapPosition': { 'x': 52, 'y':158 },
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "e4"
                },                
                {
                    "pitch": -10,
                    "yaw": -175,
                    "type": "scene",
                    "text": "",
                    "sceneId": "e2"
                },
                
            ]
        },
        "e4": {
            "type": "equirectangular",
            "panorama": "images/e4.JPG",
            'etage': 1, 
            'mapPosition': { 'x': 49, 'y':175 },
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "Naar beneden",
                    "sceneId": "lg2"
                },                
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "",
                    "sceneId": "e3"
                },
                
            ]
        },
        "e5": {
            "type": "equirectangular",
            "panorama": "images/e5.JPG",
            'etage': 1, 
            'mapPosition': { 'x': 51, 'y':95 },
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "e2"
                },                
                {
                    "pitch": -10,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Naar beneden",
                    "sceneId": "b14"
                },
                
            ]
        },
        "lpv": {
            "type": "equirectangular",
            "panorama": "images/lpv.JPG",
            'etage': 1, 
            'mapPosition': { 'x': 39, 'y': 125 },
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "",
                    "sceneId": "e2"
                },                
                {
                    "pitch": -10,
                    "yaw": 20,
                    "type": "scene",
                    "text": "Naar beneden",
                    "sceneId": "e1"
                },
                {
                    "pitch": -10,
                    "yaw": -160,
                    "type": "scene",
                    "text": "",
                    "sceneId": "e5"
                }
            ]
        },
    };
    // Function to calculate view direction
    function calculateInitialYaw(fromScene, toScene, hotspotYaw) {
        const sourceNorth = fromScene.noordPunt || 0;
        const targetNorth = toScene.noordPunt || 0;
        return ((hotspotYaw + sourceNorth - targetNorth) % 360 + 360) % 360;
    }

    // Initialize viewer
    const viewer = pannellum.viewer('panorama', {
        default: { 
            firstScene: 'i1'
        },
        scenes: scenes
    });

    // Handle scene changes
    window.changeScene = function(sceneId, sourceSceneId, hotspotYaw) {
        const scene = scenes[sceneId];
        if (scene) {
            console.log(`Changing to scene: ${sceneId}, Etage: ${scene.etage}`);
            
            // Calculate initial view direction if we have source info
            if (sourceSceneId && hotspotYaw !== undefined) {
                const sourceScene = scenes[sourceSceneId];
                const initialYaw = calculateInitialYaw(sourceScene, scene, hotspotYaw);
                viewer.loadScene(sceneId, null, initialYaw);
            } else {
                viewer.loadScene(sceneId);
            }

            // Update mini-map
            const mapImage = document.getElementById('map-image');
            const locationIndicator = document.getElementById('location-indicator');
            if (mapImage) {
                const mapSrc = `plattegrond/etage_${scene.etage}.png`;
                console.log(`Changing map to: ${mapSrc}`);
                mapImage.src = mapSrc;
                
                const { x, y } = scene.mapPosition;
                locationIndicator.style.left = `${x}px`;
                locationIndicator.style.top = `${y}px`;
            }
        }
    };

    // Listen for scene changes
    viewer.on('scenechange', function() {
        const currentScene = viewer.getScene();
        changeScene(currentScene);
    });

    // Handle initial scene from URL
    const urlParams = new URLSearchParams(window.location.search);
    const initialScene = urlParams.get('scene');
    if (initialScene) {
        changeScene(initialScene);
    } else {
        console.error('Geen begin scène gedefinieerd.');
    }

});