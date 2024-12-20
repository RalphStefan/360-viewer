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
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "i2",
                    "mapPosition": { "x": 50, "y": 50 } // Voeg de positie op de kaart toe
                }
            ]
        },
        "i2": {
            "type": "equirectangular",
            "panorama": "images/ingang2.JPG",
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
            "mapPosition": { "x": 100, "y": 100 }
        },
        "b1": {
            "type": "equirectangular",
            "panorama": "images/b1.JPG",
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
                }
            ]
        },

        "b4": {
            "type": "equirectangular",
            "panorama": "images/b4.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b5"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
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
                    "yaw": -35,
                    "type": "scene",
                    "text": "mediatheek",
                    "sceneId": "m1"
                },
                {
                    "pitch": -10,
                    "yaw": -110,
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
                    "yaw": -90,
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
                    "yaw": -90,
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
                    "yaw": 180,
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
                }
            ]
        },
        "b11": {
            "type": "equirectangular",
            "panorama": "images/b11.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 20,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b12"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "Back",
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
                    "yaw": 20,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b13"
                },
                {
                    "pitch": -10,
                    "yaw": 100,
                    "type": "scene",
                    "text": "aula",
                    "sceneId": "ba"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "Back",
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
                    "pitch": -90,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b15"
                },
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b13"
                }
            ]
        },
        "b15": {
            "type": "equirectangular",
            "panorama": "images/b15.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Next",
                    "sceneId": "b3"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b14"
                },
                {
                    "pitch": -10,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Back",
                    "sceneId": "b14"
                }
            ]
        },

        "m1": {
            "type": "equirectangular",
            "panorama": "images/m1.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 150,
                    "type": "scene",
                    "text": "next",
                    "sceneId": "m2"
                },
                {
                    "pitch": -10,
                    "yaw": 0,
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
                    "yaw": 150,
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
                    "yaw": -20,
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
                    "yaw": 20,
                    "type": "scene",
                    "text": "verder",
                    "sceneId": "oba4"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "rerug",
                    "sceneId": "oba2"
                },
                {
                    "pitch": -10,
                    "yaw": -60,
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
                    "yaw": 20,
                    "type": "scene",
                    "text": "verder",
                    "sceneId": "oba5"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "rerug",
                    "sceneId": "oba3"
                },
                
            ]
        },
        "oba5": {
            "type": "equirectangular",
            "panorama": "images/oba5.JPG",
            "hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 20,
                    "type": "scene",
                    "text": "verder",
                    "sceneId": "b3"
                },
                {
                    "pitch": -10,
                    "yaw": -20,
                    "type": "scene",
                    "text": "terug",
                    "sceneId": "oba4"
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
                    "pitch": 20,
                    "yaw": 180,
                    "type": "scene",
                    "text": "naar boven",
                    "sceneId": "lo2"
                },
                {
                    "pitch": -10,
                    "yaw": -160,
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
        }
    }
});
const viewer = pannellum.viewer('panorama', { 
    "default": { "firstScene": "scene1", 
        "sceneFadeDuration": 1000 }, 
        "scenes": scenes 
    }); 
    viewer.on('scenechange', function(sceneId) { 
        const mapMarker = document.getElementById('map-marker'); 
        const scene = scenes[sceneId]; if (scene && scene.mapPosition) { 
            mapMarker.style.left = scene.mapPosition.x + 'px'; 
            mapMarker.style.top = scene.mapPosition.y + 'px'; 
        } 
    }); // Initialiseer de marker positie const initialScene = viewer.getScene(); 
    const initialMapPosition = scenes[initialScene].mapPosition; 
    const mapMarker = document.getElementById('map-marker'); 
    mapMarker.style.left = initialMapPosition.x + 'px'; 
    mapMarker.style.top = initialMapPosition.y + 'px';
