// script.js

pannellum.viewer('panorama', {
    "default": {
        "firstScene": "i1",
        "sceneFadeDuration": 1000
    },
    "scenes": {
        "i1": {
            "type": "equirectangular",
            "panorama": "images/ingang.JPG",
            'etage': 1, 
            'mapPosition': { 'x': 50, 'y': 50 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "i2",
                }
            ]
        },
        "i2": {
            "type": "equirectangular",
            "panorama": "images/ingang2.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 250, 'y': 250 },
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 10,
                    "type": "scene",
                    "text": "naar binnen",
                    "sceneId": "b1"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "buiten",
                    "sceneId": "i1"
                }
            ],
        },
        "b1": {
            "type": "equirectangular",
            "panorama": "images/b1.JPG",
            'etage': 0, 
            'mapPosition': { 'x': 250, 'y': 250 },
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
                    "text": "onderbouw aula",
                    "sceneId": "oba1"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "i2"
                }
            ]
        },
        "b2": {
            "type": "equirectangular",
            "panorama": "images/b2.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -70,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b3"
                },
                {
                    "pitch": -10,
                    "yaw": 130,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b1"
                },
                {
                    "pitch": -10,
                    "yaw": 20,
                    "type": "scene",
                    "text": "leraren",
                    "sceneId": "lg1"
                },
                {
                    "pitch": -10,
                    "yaw": -150,
                    "type": "scene",
                    "text": "naar boven",
                    "sceneId": "e1"
                }
            ]
        },
        "b3": {
            "type": "equirectangular",
            "panorama": "images/b3.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 20,
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
                    "yaw": 80,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b2"
                },
                {
                    "pitch": -10,
                    "yaw": -170,
                    "type": "scene",
                    "text": "onderbouw aula",
                    "sceneId": "oba5"
                },
                {
                    "pitch": -10,
                    "yaw": 165,
                    "type": "scene",
                    "text": "naar boven",
                    "sceneId": "e1"
                }
            ]
        },
        "b4": {
            "type": "equirectangular",
            "panorama": "images/b4.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b5"
                },
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b3"
                }
            ]
        },

        "b5": {
            "type": "equirectangular",
            "panorama": "images/b5.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 100,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b6"
                },
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b4"
                }
            ]
        },
        "b6": {
            "type": "equirectangular",
            "panorama": "images/b6.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 25,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b7"
                },
                {
                    "pitch": -10,
                    "yaw": -30,
                    "type": "scene",
                    "text": "mediatheek",
                    "sceneId": "m1"
                },
                {
                    "pitch": -10,
                    "yaw": -120,
                    "type": "scene",
                    "text": "buiten",
                    "sceneId": "tuin"
                },
                {
                    "pitch": -10,
                    "yaw": 130,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b5"
                }
            ]
        },
        "b7": {
            "type": "equirectangular",
            "panorama": "images/b7.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b8"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b6"
                }
            ]
        },
        "b8": {
            "type": "equirectangular",
            "panorama": "images/b8.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b9"
                },
                {
                    "pitch": -10,
                    "yaw": -85,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b7"
                }
            ]
        },
        "b9": {
            "type": "equirectangular",
            "panorama": "images/b9.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -100,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b10"
                },
                {
                    "pitch": -10,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b8"
                },
                {
                    "pitch": -10,
                    "yaw": 175,
                    "type": "scene",
                    "text": "aula",
                    "sceneId": "ba"
                }
            ]
        },
        "b10": {
            "type": "equirectangular",
            "panorama": "images/b10.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -90,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b11"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b9"
                },
                {
                    "pitch": -10,
                    "yaw": 160,
                    "type": "scene",
                    "text": "",
                    "sceneId": "0,49"
                }
            ]
        },
        "b11": {
            "type": "equirectangular",
            "panorama": "images/b11.JPG",
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
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b13"
                },
                {
                    "pitch": -10,
                    "yaw": 100,
                    "type": "scene",
                    "text": "bovenbouw aula",
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
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -90,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b14"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b12"
                }
            ]
        },
        "b14": {
            "type": "equirectangular",
            "panorama": "images/b14.JPG",
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
                    "text": "handvaardigheid",
                    "sceneId": "hvl"
                },
                {
                    "pitch": -10,
                    "yaw": 95,
                    "type": "scene",
                    "text": "naar boven",
                    "sceneId": "b5"
                }
            ]
        },
        "b15": {
            "type": "equirectangular",
            "panorama": "images/b15.JPG",
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
                    "yaw": -10,
                    "type": "scene",
                    "text": "180",
                    "sceneId": "b14"
                },
                {
                    "pitch": -10,
                    "yaw": -10,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b4"
                }
            ]
        },
        "m1": {
            "type": "equirectangular",
            "panorama": "images/m1.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "next",
                    "sceneId": "m2"
                },
                {
                    "pitch": -10,
                    "yaw": -80,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b6"
                }
            ]
        },

        "m2": {
            "type": "equirectangular",
            "panorama": "images/m2.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 170,
                    "type": "scene",
                    "text": "next",
                    "sceneId": "m3"
                },
                {
                    "pitch": -10,
                    "yaw":80,
                    "type": "scene",
                    "text": "aula",
                    "sceneId": "ba"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "m1"
                }
            ]
        },

        "m3": {
            "type": "equirectangular",
            "panorama": "images/m3.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "m2"
                }
            ]
        },

        "ba": {
            "type": "equirectangular",
            "panorama": "images/ba.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 110,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b9"
                },
                {
                    "pitch": -10,
                    "yaw": -150,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b13"
                },
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "mediatheek",
                    "sceneId": "m2"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Mandelazaal",
                    "sceneId": "mz"
                }
            ]
        },
        "mz": {
            "type": "equirectangular",
            "panorama": "images/mz.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -40,
                    "type": "scene",
                    "text": "aula",
                    "sceneId": "ba"
                },
                {
                    "pitch": -10,
                    "yaw": 40,
                    "type": "scene",
                    "text": "",
                    "sceneId": "b11"
                }
            ]
        },

        "lg1": {
            "type": "equirectangular",
            "panorama": "images/lg1.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -10,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "b2"
                },                
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "verder",
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
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -160,
                    "type": "scene",
                    "text": "terug",
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
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -10,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "lg1"
                },                
            ]
        }, 
        "hvl": {
            "type": "equirectangular",
            "panorama": "images/hvl.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 20,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "b14"
                },
            ]
        },  
        "tuin": {
            "type": "equirectangular",
            "panorama": "images/tuin.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 20,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "b6"
                },
            ]
        },       
        "0,49": {
            "type": "equirectangular",
            "panorama": "images/0,49.JPG",
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
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "verder",
                    "sceneId": "oba2"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "ingang",
                    "sceneId": "b2"
                },
                {
                    "pitch": 20,
                    "yaw": 150,
                    "type": "scene",
                    "text": "naar boven",
                    "sceneId": "eoba1"
                }
                
            ]
        },
        "oba2": {
            "type": "equirectangular",
            "panorama": "images/oba2.JPG",
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
                    "text": "gymzalen",
                    "sceneId": "lo1"
                },
            ]
        },
        "oba3": {
            "type": "equirectangular",
            "panorama": "images/oba3.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "verder",
                    "sceneId": "oba4"
                },
                {
                    "pitch": -10,
                    "yaw": -80,
                    "type": "scene",
                    "text": "rerug",
                    "sceneId": "oba2"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "gymzalen",
                    "sceneId": "lo1"
                },
                
            ]
        },
        "oba4": {
            "type": "equirectangular",
            "panorama": "images/oba4.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 120,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oba5"
                },
                {
                    "pitch": -10,
                    "yaw": -10,
                    "type": "scene",
                    "text": "",
                    "sceneId": "oba3"
                },
                {
                    "pitch": -10,
                    "yaw": 100,
                    "type": "scene",
                    "text": "muzieklokaal",
                    "sceneId": "ml"
                }
                
            ]
        },
        "oba5": {
            "type": "equirectangular",
            "panorama": "images/oba5.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 10,
                    "type": "scene",
                    "text": "verder",
                    "sceneId": "b3"
                },
                {
                    "pitch": -10,
                    "yaw": 30,
                    "type": "scene",
                    "text": "verder",
                    "sceneId": "b2"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "oba4"
                },    
            ]
        },
        
        "ml": {
            "type": "equirectangular",
            "panorama": "images/ml.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 90,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "oba5"
                },
                
            ]
        },
        "lo1": {
            "type": "equirectangular",
            "panorama": "images/lo1.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 40,
                    "type": "scene",
                    "text": "aula",
                    "sceneId": "oba2"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "aula",
                    "sceneId": "oba3"
                },
                {
                    "pitch": 10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "naar boven",
                    "sceneId": "lo2"
                },
                {
                    "pitch": -10,
                    "yaw": -130,
                    "type": "scene",
                    "text": "gymzaal s06",
                    "sceneId": "s06"
                }
            ]
        },
        "lo2": {
            "type": "equirectangular",
            "panorama": "images/lo2.JPG",
            "hotSpots": [
                {
                    "pitch": 20,
                    "yaw": 0,
                    "type": "scene",
                    "text": "naar boven",
                    "sceneId": "lo3"
                },
                {
                    "pitch": -20,
                    "yaw": 0,
                    "type": "scene",
                    "text": "naar beneden",
                    "sceneId": "lo1"
                },
                {
                    "pitch": -10,
                    "yaw": -90,
                    "type": "scene",
                    "text": "sportzaal 1",
                    "sceneId": "s12"
                }
                
            ]
        },
        "lo3": {
            "type": "equirectangular",
            "panorama": "images/lo3.JPG",
            "hotSpots": [

                {
                    "pitch": -20,
                    "yaw": 0,
                    "type": "scene",
                    "text": "naar beneden",
                    "sceneId": "lo2"
                },
                {
                    "pitch": 20,
                    "yaw": 0,
                    "type": "scene",
                    "text": "sportzaal 2",
                    "sceneId": "s14"
                },
                {
                    "pitch": -10,
                    "yaw": -160,
                    "type": "scene",
                    "text": "gymzaal s10",
                    "sceneId": "s10"
                }
                
            ]
        },
        "s06": {
            "type": "equirectangular",
            "panorama": "images/s06.JPG",
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": -170,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "lo1"
                },
                
            ]
        },
        "s10": {
            "type": "equirectangular",
            "panorama": "images/s10.JPG",
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "lo3"
                },
                
            ]
        },
        "s12": {
            "type": "equirectangular",
            "panorama": "images/s12.JPG",
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": -160,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "lo2"
                },
                
            ]
        },
        "s14": {
            "type": "equirectangular",
            "panorama": "images/s14.JPG",
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": -160,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "lo3"
                },
                
            ]
        },
        "eoba": {
            "type": "equirectangular",
            "panorama": "images/eoba.JPG",
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 90,
                    "type": "scene",
                    "text": "naar beneden",
                    "sceneId": "oba1"
                },
                {
                    "pitch": -10,
                    "yaw": -45,
                    "type": "scene",
                    "text": "verder",
                    "sceneId": "e1"
                },
                
            ]
        },
        "e1": {
            "type": "equirectangular",
            "panorama": "images/e1.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "verder",
                    "sceneId": "e2"
                },
                                {
                    "pitch": -10,
                    "yaw": 100,
                    "type": "scene",
                    "text": "onderbouw aula",
                    "sceneId": "eoba"
                },  
                {
                    "pitch": -20,
                    "yaw": -170,
                    "type": "scene",
                    "text": "naar beneden",
                    "sceneId": "b3"
                },
                
            ]
        },
        "e2": {
            "type": "equirectangular",
            "panorama": "images/e2.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": -5,
                    "type": "scene",
                    "text": "verder",
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
                    "text": "terug",
                    "sceneId": "e5"
                },
                {
                    "pitch": -10,
                    "yaw": 120,
                    "type": "scene",
                    "text": "leerplein",
                    "sceneId": "lpv"
                }
                
            ]
        },
        "e3": {
            "type": "equirectangular",
            "panorama": "images/e3.JPG",
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "verder",
                    "sceneId": "e4"
                },                
                {
                    "pitch": -10,
                    "yaw": -175,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "e2"
                },
                
            ]
        },
        "e4": {
            "type": "equirectangular",
            "panorama": "images/e4.JPG",
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "naar beneden",
                    "sceneId": "lg2"
                },                
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "e3"
                },
                
            ]
        },
        "e5": {
            "type": "equirectangular",
            "panorama": "images/e5.JPG",
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "e2"
                },                
                {
                    "pitch": -10,
                    "yaw": 90,
                    "type": "scene",
                    "text": "naar beneden",
                    "sceneId": "b14"
                },
                
            ]
        },
        "lpv": {
            "type": "equirectangular",
            "panorama": "images/lpv.JPG",
            "hotSpots": [

                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "e2"
                },                
                {
                    "pitch": -10,
                    "yaw": 20,
                    "type": "scene",
                    "text": "naar beneden",
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
        }
    }
});
const viewer = pannellum.viewer('panorama', {
    'default': {
        'firstScene': 'i1',
        'sceneFadeDuration': 1000
    },
    'scenes': scenes
});

viewer.on('scenechange', function(sceneId) {
    const mapMarker = document.getElementById('map-marker');
    const mapImage = document.getElementById('map-image');
    const scene = scenes[sceneId];

    if (scene) {
        if (scene.etage === 0) {
            mapImage.src = 'images/begane_grond.png';
        } else if (scene.etage === 1) {
            mapImage.src = 'images/eerste_etage.png';
        }

        if (scene.mapPosition) {
            mapMarker.style.left = scene.mapPosition.x + 'px';
            mapMarker.style.top = scene.mapPosition.y + 'px';
        }
    }
});

// Initialiseer de marker positie
const initialScene = viewer.getScene();
const initialMapPosition = scenes[initialScene].mapPosition;
const initialEtage = scenes[initialScene].etage;
const mapMarker = document.getElementById('map-marker');
const mapImage = document.getElementById('map-image');

if (initialEtage === 0) {
    mapImage.src = 'images/begane_grond.png';
} else if (initialEtage === 1) {
    mapImage.src = 'images/eerste_etage.png';
}

mapMarker.style.left = initialMapPosition.x + 'px';
mapMarker.style.top = initialMapPosition.y + 'px';
