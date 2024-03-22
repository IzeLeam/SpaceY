import React, {DetailedHTMLProps, useEffect, useState} from "react";
import '../styles/Nearest.css';

function NearAsteroid() {

    /* Example of the data we will receive from the API
    {
    "links": {
        "next": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2024-03-26&end_date=2024-04-02&detailed=false&api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt",
        "previous": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2024-03-12&end_date=2024-03-19&detailed=false&api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt",
        "self": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2024-03-19&end_date=2024-03-26&detailed=false&api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
    },
    "element_count": 27,
    "near_earth_objects": {
        "2024-03-25": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2380476?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2380476",
                "neo_reference_id": "2380476",
                "name": "380476 (2003 YO1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2380476",
                "absolute_magnitude_h": 19.35,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.3585543342,
                        "estimated_diameter_max": 0.8017518649
                    },
                    "meters": {
                        "estimated_diameter_min": 358.5543341929,
                        "estimated_diameter_max": 801.7518648824
                    },
                    "miles": {
                        "estimated_diameter_min": 0.2227952652,
                        "estimated_diameter_max": 0.498185358
                    },
                    "feet": {
                        "estimated_diameter_min": 1176.3594017933,
                        "estimated_diameter_max": 2630.4195883808
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-25",
                        "close_approach_date_full": "2024-Mar-25 11:23",
                        "epoch_date_close_approach": 1711365780000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.1132516694",
                            "kilometers_per_hour": "43607.7060100034",
                            "miles_per_hour": "27096.1326593824"
                        },
                        "miss_distance": {
                            "astronomical": "0.3105770543",
                            "lunar": "120.8144741227",
                            "kilometers": "46461665.794154341",
                            "miles": "28869940.4075622658"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2471956?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2471956",
                "neo_reference_id": "2471956",
                "name": "471956 (2013 SC25)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2471956",
                "absolute_magnitude_h": 19.28,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.3703010782,
                        "estimated_diameter_max": 0.828018383
                    },
                    "meters": {
                        "estimated_diameter_min": 370.3010782229,
                        "estimated_diameter_max": 828.0183830478
                    },
                    "miles": {
                        "estimated_diameter_min": 0.2300943513,
                        "estimated_diameter_max": 0.5145066107
                    },
                    "feet": {
                        "estimated_diameter_min": 1214.8985894767,
                        "estimated_diameter_max": 2716.5958318385
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-25",
                        "close_approach_date_full": "2024-Mar-25 19:29",
                        "epoch_date_close_approach": 1711394940000,
                        "relative_velocity": {
                            "kilometers_per_second": "17.9009513376",
                            "kilometers_per_hour": "64443.4248155242",
                            "miles_per_hour": "40042.6380471794"
                        },
                        "miss_distance": {
                            "astronomical": "0.4124441518",
                            "lunar": "160.4407750502",
                            "kilometers": "61700766.603236666",
                            "miles": "38339078.5605553508"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3293926?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3293926",
                "neo_reference_id": "3293926",
                "name": "(2005 TU50)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3293926",
                "absolute_magnitude_h": 21.44,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1369477737,
                        "estimated_diameter_max": 0.3062245314
                    },
                    "meters": {
                        "estimated_diameter_min": 136.9477737298,
                        "estimated_diameter_max": 306.2245314272
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0850953751,
                        "estimated_diameter_max": 0.1902790433
                    },
                    "feet": {
                        "estimated_diameter_min": 449.3037339638,
                        "estimated_diameter_max": 1004.6736916875
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-25",
                        "close_approach_date_full": "2024-Mar-25 01:15",
                        "epoch_date_close_approach": 1711329300000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.9362971862",
                            "kilometers_per_hour": "75370.6698704395",
                            "miles_per_hour": "46832.403175885"
                        },
                        "miss_distance": {
                            "astronomical": "0.0721611293",
                            "lunar": "28.0706792977",
                            "kilometers": "10795151.240074591",
                            "miles": "6707795.9359517158"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            }
        ],
        "2024-03-26": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2226198?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2226198",
                "neo_reference_id": "2226198",
                "name": "226198 (2002 UN3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2226198",
                "absolute_magnitude_h": 18.87,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.4472547654,
                        "estimated_diameter_max": 1.0000920588
                    },
                    "meters": {
                        "estimated_diameter_min": 447.2547654325,
                        "estimated_diameter_max": 1000.0920587679
                    },
                    "miles": {
                        "estimated_diameter_min": 0.2779111409,
                        "estimated_diameter_max": 0.6214282026
                    },
                    "feet": {
                        "estimated_diameter_min": 1467.3713246217,
                        "estimated_diameter_max": 3281.1420300879
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-26",
                        "close_approach_date_full": "2024-Mar-26 03:21",
                        "epoch_date_close_approach": 1711423260000,
                        "relative_velocity": {
                            "kilometers_per_second": "4.8151599418",
                            "kilometers_per_hour": "17334.5757904156",
                            "miles_per_hour": "10771.0312737724"
                        },
                        "miss_distance": {
                            "astronomical": "0.4232107229",
                            "lunar": "164.6289712081",
                            "kilometers": "63311422.707000223",
                            "miles": "39339893.8550121574"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3300165?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3300165",
                "neo_reference_id": "3300165",
                "name": "(2005 WA)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3300165",
                "absolute_magnitude_h": 23.9,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.04411182,
                        "estimated_diameter_max": 0.0986370281
                    },
                    "meters": {
                        "estimated_diameter_min": 44.1118199997,
                        "estimated_diameter_max": 98.6370281305
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0274098057,
                        "estimated_diameter_max": 0.0612901888
                    },
                    "feet": {
                        "estimated_diameter_min": 144.7238235278,
                        "estimated_diameter_max": 323.6123073718
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-26",
                        "close_approach_date_full": "2024-Mar-26 23:45",
                        "epoch_date_close_approach": 1711496700000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.6023191686",
                            "kilometers_per_hour": "27368.3490070611",
                            "miles_per_hour": "17005.6277483041"
                        },
                        "miss_distance": {
                            "astronomical": "0.3812410168",
                            "lunar": "148.3027555352",
                            "kilometers": "57032844.069914216",
                            "miles": "35438565.9969035408"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3457847?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3457847",
                "neo_reference_id": "3457847",
                "name": "(2009 HH21)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3457847",
                "absolute_magnitude_h": 26.9,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0110803882,
                        "estimated_diameter_max": 0.0247765013
                    },
                    "meters": {
                        "estimated_diameter_min": 11.0803882126,
                        "estimated_diameter_max": 24.7765012606
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0068850319,
                        "estimated_diameter_max": 0.0153953994
                    },
                    "feet": {
                        "estimated_diameter_min": 36.3529808636,
                        "estimated_diameter_max": 81.2877363957
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-26",
                        "close_approach_date_full": "2024-Mar-26 11:13",
                        "epoch_date_close_approach": 1711451580000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.5655072544",
                            "kilometers_per_hour": "45235.826115844",
                            "miles_per_hour": "28107.7831773698"
                        },
                        "miss_distance": {
                            "astronomical": "0.3045563162",
                            "lunar": "118.4724070018",
                            "kilometers": "45560976.198566494",
                            "miles": "28310277.8447618572"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3548666?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3548666",
                "neo_reference_id": "3548666",
                "name": "(2010 TW54)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3548666",
                "absolute_magnitude_h": 27.6,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0080270317,
                        "estimated_diameter_max": 0.0179489885
                    },
                    "meters": {
                        "estimated_diameter_min": 8.0270316728,
                        "estimated_diameter_max": 17.948988478
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0049877647,
                        "estimated_diameter_max": 0.0111529809
                    },
                    "feet": {
                        "estimated_diameter_min": 26.3354065935,
                        "estimated_diameter_max": 58.8877593581
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-26",
                        "close_approach_date_full": "2024-Mar-26 11:53",
                        "epoch_date_close_approach": 1711453980000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.0491113097",
                            "kilometers_per_hour": "36176.8007148606",
                            "miles_per_hour": "22478.857088631"
                        },
                        "miss_distance": {
                            "astronomical": "0.0785748841",
                            "lunar": "30.5656299149",
                            "kilometers": "11754635.296856867",
                            "miles": "7303991.6828720846"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            }
        ],
        "2024-03-19": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2085628?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2085628",
                "neo_reference_id": "2085628",
                "name": "85628 (1998 KV2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2085628",
                "absolute_magnitude_h": 17.3,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.9216265485,
                        "estimated_diameter_max": 2.0608196123
                    },
                    "meters": {
                        "estimated_diameter_min": 921.6265485028,
                        "estimated_diameter_max": 2060.8196123208
                    },
                    "miles": {
                        "estimated_diameter_min": 0.5726720101,
                        "estimated_diameter_max": 1.2805335433
                    },
                    "feet": {
                        "estimated_diameter_min": 3023.70924539,
                        "estimated_diameter_max": 6761.2194168867
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-19",
                        "close_approach_date_full": "2024-Mar-19 01:56",
                        "epoch_date_close_approach": 1710813360000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.6790294359",
                            "kilometers_per_hour": "13244.5059693458",
                            "miles_per_hour": "8229.6209452304"
                        },
                        "miss_distance": {
                            "astronomical": "0.4047921085",
                            "lunar": "157.4641302065",
                            "kilometers": "60556037.224408895",
                            "miles": "37627776.708056951"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3092220?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3092220",
                "neo_reference_id": "3092220",
                "name": "(1999 GR6)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3092220",
                "absolute_magnitude_h": 20.09,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2550086879,
                        "estimated_diameter_max": 0.5702167609
                    },
                    "meters": {
                        "estimated_diameter_min": 255.0086878569,
                        "estimated_diameter_max": 570.2167609011
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1584550034,
                        "estimated_diameter_max": 0.3543161589
                    },
                    "feet": {
                        "estimated_diameter_min": 836.6427034685,
                        "estimated_diameter_max": 1870.7899578349
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-19",
                        "close_approach_date_full": "2024-Mar-19 15:57",
                        "epoch_date_close_approach": 1710863820000,
                        "relative_velocity": {
                            "kilometers_per_second": "42.2828390329",
                            "kilometers_per_hour": "152218.220518341",
                            "miles_per_hour": "94582.4826326325"
                        },
                        "miss_distance": {
                            "astronomical": "0.4836031086",
                            "lunar": "188.1216092454",
                            "kilometers": "72345994.971938682",
                            "miles": "44953716.7440185316"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            }
        ],
        "2024-03-20": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2410777?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2410777",
                "neo_reference_id": "2410777",
                "name": "410777 (2009 FD)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2410777",
                "absolute_magnitude_h": 22.17,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0978486812,
                        "estimated_diameter_max": 0.2187963027
                    },
                    "meters": {
                        "estimated_diameter_min": 97.8486811942,
                        "estimated_diameter_max": 218.7963026589
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0608003329,
                        "estimated_diameter_max": 0.1359536774
                    },
                    "feet": {
                        "estimated_diameter_min": 321.0258672091,
                        "estimated_diameter_max": 717.8356616154
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-20",
                        "close_approach_date_full": "2024-Mar-20 03:58",
                        "epoch_date_close_approach": 1710907080000,
                        "relative_velocity": {
                            "kilometers_per_second": "8.7781949192",
                            "kilometers_per_hour": "31601.5017089558",
                            "miles_per_hour": "19635.9442146565"
                        },
                        "miss_distance": {
                            "astronomical": "0.3657021969",
                            "lunar": "142.2581545941",
                            "kilometers": "54708269.710560603",
                            "miles": "33994142.4688102014"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2469219?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2469219",
                "neo_reference_id": "2469219",
                "name": "469219 Kamo`oalewa (2016 HO3)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2469219",
                "absolute_magnitude_h": 24.33,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0361871997,
                        "estimated_diameter_max": 0.0809170384
                    },
                    "meters": {
                        "estimated_diameter_min": 36.1871996599,
                        "estimated_diameter_max": 80.917038355
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0224856764,
                        "estimated_diameter_max": 0.050279501
                    },
                    "feet": {
                        "estimated_diameter_min": 118.7244121323,
                        "estimated_diameter_max": 265.4758561166
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-20",
                        "close_approach_date_full": "2024-Mar-20 09:06",
                        "epoch_date_close_approach": 1710925560000,
                        "relative_velocity": {
                            "kilometers_per_second": "3.4636302459",
                            "kilometers_per_hour": "12469.0688852255",
                            "miles_per_hour": "7747.7944970447"
                        },
                        "miss_distance": {
                            "astronomical": "0.1701130587",
                            "lunar": "66.1739798343",
                            "kilometers": "25448551.240704969",
                            "miles": "15812996.4825838122"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3177177?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3177177",
                "neo_reference_id": "3177177",
                "name": "(2004 EH1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3177177",
                "absolute_magnitude_h": 22.27,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0934447651,
                        "estimated_diameter_max": 0.2089488469
                    },
                    "meters": {
                        "estimated_diameter_min": 93.4447650924,
                        "estimated_diameter_max": 208.9488468882
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0580638671,
                        "estimated_diameter_max": 0.1298347539
                    },
                    "feet": {
                        "estimated_diameter_min": 306.5773231058,
                        "estimated_diameter_max": 685.5277348245
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-20",
                        "close_approach_date_full": "2024-Mar-20 08:02",
                        "epoch_date_close_approach": 1710921720000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.0528641318",
                            "kilometers_per_hour": "50590.3108744307",
                            "miles_per_hour": "31434.8517763928"
                        },
                        "miss_distance": {
                            "astronomical": "0.1095100466",
                            "lunar": "42.5994081274",
                            "kilometers": "16382469.714960742",
                            "miles": "10179594.6468005596"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            }
        ],
        "2024-03-23": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2485110?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2485110",
                "neo_reference_id": "2485110",
                "name": "485110 (2010 HZ108)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2485110",
                "absolute_magnitude_h": 20.85,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1797028549,
                        "estimated_diameter_max": 0.4018277992
                    },
                    "meters": {
                        "estimated_diameter_min": 179.7028548592,
                        "estimated_diameter_max": 401.8277992159
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1116621426,
                        "estimated_diameter_max": 0.2496841414
                    },
                    "feet": {
                        "estimated_diameter_min": 589.5763143362,
                        "estimated_diameter_max": 1318.3327167796
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-23",
                        "close_approach_date_full": "2024-Mar-23 11:42",
                        "epoch_date_close_approach": 1711194120000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.0039788054",
                            "kilometers_per_hour": "43214.323699413",
                            "miles_per_hour": "26851.7001897825"
                        },
                        "miss_distance": {
                            "astronomical": "0.279079673",
                            "lunar": "108.561992797",
                            "kilometers": "41749724.64109651",
                            "miles": "25942075.941931438"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2529951?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2529951",
                "neo_reference_id": "2529951",
                "name": "529951 (2010 UD)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2529951",
                "absolute_magnitude_h": 21.08,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1616422833,
                        "estimated_diameter_max": 0.3614431336
                    },
                    "meters": {
                        "estimated_diameter_min": 161.6422833399,
                        "estimated_diameter_max": 361.4431335863
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1004398272,
                        "estimated_diameter_max": 0.2245902814
                    },
                    "feet": {
                        "estimated_diameter_min": 530.3224688728,
                        "estimated_diameter_max": 1185.8370903951
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-23",
                        "close_approach_date_full": "2024-Mar-23 07:05",
                        "epoch_date_close_approach": 1711177500000,
                        "relative_velocity": {
                            "kilometers_per_second": "26.106110665",
                            "kilometers_per_hour": "93981.9983941292",
                            "miles_per_hour": "58396.7589466188"
                        },
                        "miss_distance": {
                            "astronomical": "0.4626886683",
                            "lunar": "179.9858919687",
                            "kilometers": "69217239.250816521",
                            "miles": "43009598.0888931498"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            }
        ],
        "2024-03-24": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2264993?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2264993",
                "neo_reference_id": "2264993",
                "name": "264993 (2003 DX10)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2264993",
                "absolute_magnitude_h": 20.41,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2200670271,
                        "estimated_diameter_max": 0.4920848322
                    },
                    "meters": {
                        "estimated_diameter_min": 220.0670271147,
                        "estimated_diameter_max": 492.0848322348
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1367432687,
                        "estimated_diameter_max": 0.3057672443
                    },
                    "feet": {
                        "estimated_diameter_min": 722.0047052391,
                        "estimated_diameter_max": 1614.4516009894
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-24",
                        "close_approach_date_full": "2024-Mar-24 17:16",
                        "epoch_date_close_approach": 1711300560000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.5775298649",
                            "kilometers_per_hour": "45279.1075135187",
                            "miles_per_hour": "28134.6765547194"
                        },
                        "miss_distance": {
                            "astronomical": "0.0596495889",
                            "lunar": "23.2036900821",
                            "kilometers": "8923451.445815643",
                            "miles": "5544775.6137681534"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3092342?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3092342",
                "neo_reference_id": "3092342",
                "name": "(2001 SH276)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3092342",
                "absolute_magnitude_h": 19.76,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2968622513,
                        "estimated_diameter_max": 0.6638041738
                    },
                    "meters": {
                        "estimated_diameter_min": 296.8622512601,
                        "estimated_diameter_max": 663.8041737711
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1844615939,
                        "estimated_diameter_max": 0.4124686633
                    },
                    "feet": {
                        "estimated_diameter_min": 973.9575484241,
                        "estimated_diameter_max": 2177.8352854753
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-24",
                        "close_approach_date_full": "2024-Mar-24 17:41",
                        "epoch_date_close_approach": 1711302060000,
                        "relative_velocity": {
                            "kilometers_per_second": "13.0214591949",
                            "kilometers_per_hour": "46877.2531016364",
                            "miles_per_hour": "29127.7020730696"
                        },
                        "miss_distance": {
                            "astronomical": "0.104930304",
                            "lunar": "40.817888256",
                            "kilometers": "15697349.97685248",
                            "miles": "9753880.982145024"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3400310?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3400310",
                "neo_reference_id": "3400310",
                "name": "(2008 BX2)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3400310",
                "absolute_magnitude_h": 23.6,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0506471459,
                        "estimated_diameter_max": 0.1132504611
                    },
                    "meters": {
                        "estimated_diameter_min": 50.6471458835,
                        "estimated_diameter_max": 113.2504610618
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0314706677,
                        "estimated_diameter_max": 0.0703705522
                    },
                    "feet": {
                        "estimated_diameter_min": 166.1651821003,
                        "estimated_diameter_max": 371.5566426699
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-24",
                        "close_approach_date_full": "2024-Mar-24 06:32",
                        "epoch_date_close_approach": 1711261920000,
                        "relative_velocity": {
                            "kilometers_per_second": "20.0108371889",
                            "kilometers_per_hour": "72039.0138800468",
                            "miles_per_hour": "44762.2417078547"
                        },
                        "miss_distance": {
                            "astronomical": "0.3307842524",
                            "lunar": "128.6750741836",
                            "kilometers": "49484619.588582388",
                            "miles": "30748316.7939494344"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            }
        ],
        "2024-03-21": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2219071?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2219071",
                "neo_reference_id": "2219071",
                "name": "219071 (1997 US9)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2219071",
                "absolute_magnitude_h": 17.14,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.9920989194,
                        "estimated_diameter_max": 2.2184006242
                    },
                    "meters": {
                        "estimated_diameter_min": 992.098919421,
                        "estimated_diameter_max": 2218.4006242295
                    },
                    "miles": {
                        "estimated_diameter_min": 0.6164614977,
                        "estimated_diameter_max": 1.3784498143
                    },
                    "feet": {
                        "estimated_diameter_min": 3254.9178187933,
                        "estimated_diameter_max": 7278.2175039971
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-21",
                        "close_approach_date_full": "2024-Mar-21 02:01",
                        "epoch_date_close_approach": 1710986460000,
                        "relative_velocity": {
                            "kilometers_per_second": "14.3204270388",
                            "kilometers_per_hour": "51553.5373398413",
                            "miles_per_hour": "32033.3632431919"
                        },
                        "miss_distance": {
                            "astronomical": "0.2739402155",
                            "lunar": "106.5627438295",
                            "kilometers": "40980872.746140985",
                            "miles": "25464333.527616193"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2277810?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2277810",
                "neo_reference_id": "2277810",
                "name": "277810 (2006 FV35)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2277810",
                "absolute_magnitude_h": 21.72,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1203801767,
                        "estimated_diameter_max": 0.2691782583
                    },
                    "meters": {
                        "estimated_diameter_min": 120.3801767384,
                        "estimated_diameter_max": 269.1782583305
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0748007508,
                        "estimated_diameter_max": 0.1672595636
                    },
                    "feet": {
                        "estimated_diameter_min": 394.9480990504,
                        "estimated_diameter_max": 883.1307970609
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-21",
                        "close_approach_date_full": "2024-Mar-21 10:28",
                        "epoch_date_close_approach": 1711016880000,
                        "relative_velocity": {
                            "kilometers_per_second": "10.2555036147",
                            "kilometers_per_hour": "36919.8130129531",
                            "miles_per_hour": "22940.536035743"
                        },
                        "miss_distance": {
                            "astronomical": "0.3771393718",
                            "lunar": "146.7072156302",
                            "kilometers": "56419246.714418066",
                            "miles": "35057294.2800026708"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3427459?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3427459",
                "neo_reference_id": "3427459",
                "name": "(2008 SS)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3427459",
                "absolute_magnitude_h": 22.18,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0973991073,
                        "estimated_diameter_max": 0.217791025
                    },
                    "meters": {
                        "estimated_diameter_min": 97.3991073414,
                        "estimated_diameter_max": 217.7910249632
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0605209807,
                        "estimated_diameter_max": 0.135329027
                    },
                    "feet": {
                        "estimated_diameter_min": 319.5508873299,
                        "estimated_diameter_max": 714.5375063401
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-21",
                        "close_approach_date_full": "2024-Mar-21 01:55",
                        "epoch_date_close_approach": 1710986100000,
                        "relative_velocity": {
                            "kilometers_per_second": "22.5597291098",
                            "kilometers_per_hour": "81215.0247953354",
                            "miles_per_hour": "50463.8580457461"
                        },
                        "miss_distance": {
                            "astronomical": "0.4664735038",
                            "lunar": "181.4581929782",
                            "kilometers": "69783442.579916906",
                            "miles": "43361420.5233730628"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3455259?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3455259",
                "neo_reference_id": "3455259",
                "name": "(2009 FW25)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3455259",
                "absolute_magnitude_h": 23.42,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0550243571,
                        "estimated_diameter_max": 0.1230382028
                    },
                    "meters": {
                        "estimated_diameter_min": 55.0243570509,
                        "estimated_diameter_max": 123.038202784
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0341905398,
                        "estimated_diameter_max": 0.0764523711
                    },
                    "feet": {
                        "estimated_diameter_min": 180.5261115868,
                        "estimated_diameter_max": 403.6686572217
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-21",
                        "close_approach_date_full": "2024-Mar-21 03:48",
                        "epoch_date_close_approach": 1710992880000,
                        "relative_velocity": {
                            "kilometers_per_second": "22.2345088566",
                            "kilometers_per_hour": "80044.2318839227",
                            "miles_per_hour": "49736.3728614296"
                        },
                        "miss_distance": {
                            "astronomical": "0.3935395429",
                            "lunar": "153.0868821881",
                            "kilometers": "58872677.378613623",
                            "miles": "36581785.4031410774"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            }
        ],
        "2024-03-22": [
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2005645?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2005645",
                "neo_reference_id": "2005645",
                "name": "5645 (1990 SP)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2005645",
                "absolute_magnitude_h": 17.2,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.9650614696,
                        "estimated_diameter_max": 2.1579430484
                    },
                    "meters": {
                        "estimated_diameter_min": 965.0614695789,
                        "estimated_diameter_max": 2157.9430484443
                    },
                    "miles": {
                        "estimated_diameter_min": 0.5996612104,
                        "estimated_diameter_max": 1.34088323
                    },
                    "feet": {
                        "estimated_diameter_min": 3166.2122718533,
                        "estimated_diameter_max": 7079.8658710581
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-22",
                        "close_approach_date_full": "2024-Mar-22 10:32",
                        "epoch_date_close_approach": 1711103520000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.3630722643",
                            "kilometers_per_hour": "66107.0601515826",
                            "miles_per_hour": "41076.3563480764"
                        },
                        "miss_distance": {
                            "astronomical": "0.3383544517",
                            "lunar": "131.6198817113",
                            "kilometers": "50617105.279337879",
                            "miles": "31452010.7714615702"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2175921?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2175921",
                "neo_reference_id": "2175921",
                "name": "175921 (2000 DM1)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2175921",
                "absolute_magnitude_h": 18.34,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.57089334,
                        "estimated_diameter_max": 1.2765563162
                    },
                    "meters": {
                        "estimated_diameter_min": 570.8933400239,
                        "estimated_diameter_max": 1276.5563161953
                    },
                    "miles": {
                        "estimated_diameter_min": 0.3547365656,
                        "estimated_diameter_max": 0.7932150748
                    },
                    "feet": {
                        "estimated_diameter_min": 1873.009705684,
                        "estimated_diameter_max": 4188.1770244263
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-22",
                        "close_approach_date_full": "2024-Mar-22 05:37",
                        "epoch_date_close_approach": 1711085820000,
                        "relative_velocity": {
                            "kilometers_per_second": "12.6661686239",
                            "kilometers_per_hour": "45598.207045999",
                            "miles_per_hour": "28332.9525947764"
                        },
                        "miss_distance": {
                            "astronomical": "0.4941327977",
                            "lunar": "192.2176583053",
                            "kilometers": "73921214.033060899",
                            "miles": "45932512.4812384462"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/2511684?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "2511684",
                "neo_reference_id": "2511684",
                "name": "511684 (2015 BN509)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2511684",
                "absolute_magnitude_h": 20.79,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.1847374636,
                        "estimated_diameter_max": 0.4130855266
                    },
                    "meters": {
                        "estimated_diameter_min": 184.7374636151,
                        "estimated_diameter_max": 413.0855266343
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1147905025,
                        "estimated_diameter_max": 0.2566793668
                    },
                    "feet": {
                        "estimated_diameter_min": 606.094060127,
                        "estimated_diameter_max": 1355.2675192028
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-22",
                        "close_approach_date_full": "2024-Mar-22 22:30",
                        "epoch_date_close_approach": 1711146600000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.9528036518",
                            "kilometers_per_hour": "35830.0931463297",
                            "miles_per_hour": "22263.426488618"
                        },
                        "miss_distance": {
                            "astronomical": "0.403867427",
                            "lunar": "157.104429103",
                            "kilometers": "60417706.84158049",
                            "miles": "37541822.193931162"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3177202?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3177202",
                "neo_reference_id": "3177202",
                "name": "(2004 FH)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3177202",
                "absolute_magnitude_h": 26.41,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0138852907,
                        "estimated_diameter_max": 0.0310484539
                    },
                    "meters": {
                        "estimated_diameter_min": 13.8852907036,
                        "estimated_diameter_max": 31.0484539006
                    },
                    "miles": {
                        "estimated_diameter_min": 0.008627917,
                        "estimated_diameter_max": 0.0192926088
                    },
                    "feet": {
                        "estimated_diameter_min": 45.555417152,
                        "estimated_diameter_max": 101.8650094952
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-22",
                        "close_approach_date_full": "2024-Mar-22 14:16",
                        "epoch_date_close_approach": 1711116960000,
                        "relative_velocity": {
                            "kilometers_per_second": "9.9555140779",
                            "kilometers_per_hour": "35839.8506804309",
                            "miles_per_hour": "22269.4894408489"
                        },
                        "miss_distance": {
                            "astronomical": "0.0930056318",
                            "lunar": "36.1791907702",
                            "kilometers": "13913444.415284266",
                            "miles": "8645413.4665082308"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3525129?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3525129",
                "neo_reference_id": "3525129",
                "name": "(2010 KV39)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3525129",
                "absolute_magnitude_h": 26.8,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.0116025908,
                        "estimated_diameter_max": 0.0259441818
                    },
                    "meters": {
                        "estimated_diameter_min": 11.6025908209,
                        "estimated_diameter_max": 25.9441817907
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0072095135,
                        "estimated_diameter_max": 0.0161209622
                    },
                    "feet": {
                        "estimated_diameter_min": 38.066244069,
                        "estimated_diameter_max": 85.1187093863
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-22",
                        "close_approach_date_full": "2024-Mar-22 20:31",
                        "epoch_date_close_approach": 1711139460000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.1191507901",
                            "kilometers_per_hour": "25628.9428442115",
                            "miles_per_hour": "15924.8284022824"
                        },
                        "miss_distance": {
                            "astronomical": "0.3219255371",
                            "lunar": "125.2290339319",
                            "kilometers": "48159374.648765977",
                            "miles": "29924847.7731134026"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
            {
                "links": {
                    "self": "http://api.nasa.gov/neo/rest/v1/neo/3547771?api_key=idjXegOG5bwYVk8pY9nGo7OTCIsriDCeX7GMGsmt"
                },
                "id": "3547771",
                "neo_reference_id": "3547771",
                "name": "(2010 TE)",
                "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3547771",
                "absolute_magnitude_h": 26.07,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.016238839,
                        "estimated_diameter_max": 0.0363111479
                    },
                    "meters": {
                        "estimated_diameter_min": 16.238839022,
                        "estimated_diameter_max": 36.3111479288
                    },
                    "miles": {
                        "estimated_diameter_min": 0.0100903436,
                        "estimated_diameter_max": 0.0225626943
                    },
                    "feet": {
                        "estimated_diameter_min": 53.2770326169,
                        "estimated_diameter_max": 119.1310665709
                    }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                    {
                        "close_approach_date": "2024-03-22",
                        "close_approach_date_full": "2024-Mar-22 07:18",
                        "epoch_date_close_approach": 1711091880000,
                        "relative_velocity": {
                            "kilometers_per_second": "7.9106299904",
                            "kilometers_per_hour": "28478.2679656159",
                            "miles_per_hour": "17695.2882256351"
                        },
                        "miss_distance": {
                            "astronomical": "0.2475800901",
                            "lunar": "96.3086550489",
                            "kilometers": "37037454.133368087",
                            "miles": "23014006.8247981206"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            }
        ]
    }
}
     */

    useEffect(() => {
        let carousel = document.getElementsByClassName("carousel")[0],
            slider = carousel.getElementsByClassName("carousel__slider")[0] as HTMLElement,
            items = carousel.getElementsByClassName("carousel__slider__item") as HTMLCollectionOf<HTMLElement>,
            prevBtn = carousel.getElementsByClassName("carousel__prev")[0],
            nextBtn = carousel.getElementsByClassName("carousel__next")[0];

        let width: number,
            height,
            totalWidth,
            margin = 20,
            currIndex = 0,
            interval: NodeJS.Timer,
            intervalTime = 5000;

        async function getAsteroidsData() {
            const response = await fetch('http://localhost:5000/asteroids');
            let data = await response.json();
            let near_objects = data.near_earth_objects;
            let dates = Object.keys(near_objects);
            for (let i in dates) {
                let asteroids = near_objects[dates[i]];
                for (let j in asteroids) {
                    let name = asteroids[j].name.match(/\(([^)]+)\)/)[1];
                    let diameter = asteroids[j].estimated_diameter.kilometers.estimated_diameter_min;
                    let close_approach_data = asteroids[j].close_approach_data[0];
                    let speed = close_approach_data.relative_velocity.kilometers_per_hour;
                    let distance = close_approach_data.miss_distance.kilometers;
                    let isDangerous = asteroids[j].is_potentially_hazardous_asteroid;

                    slider.innerHTML += `
                    <div class="carousel__slider__item">
                        <div class="item__3d-frame">
                            <div class="item__3d-frame__box item__3d-frame__box--front">
                                <h1>${name}</h1>
                                <p>Diameter: ${diameter} km</p>
                                <p>${isDangerous ? "Potentially dangerous" : "Not dangerous"}</p>
                                <p>Close Approach Date: ${close_approach_data.close_approach_date_full}</p>
                                <p>Speed: ${speed} km/h</p>
                                <p>Distance: ${distance} km</p>
                            </div>
                        </div>
                    </div>
                `;
                }
            }
        }

        function init() {
            getAsteroidsData().then(() => {
                items = carousel.getElementsByClassName("carousel__slider__item") as HTMLCollectionOf<HTMLElement>;
                resize();
                move(Math.floor(items.length / 2));
                timer(0);
                }
            )
            bindEvents();
        }

        function resize() {
            width = Math.max(window.innerWidth * 0.25, 275);
            height = window.innerHeight * 0.5;
            totalWidth = width * items.length;

            slider.style.width = totalWidth + "px";

            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                item.style.width = width - margin * 2 + "px";
                item.style.height = height + "px";
            }
        }

        function move(index: number) {
            if (index < 1) index = items.length;
            if (index > items.length) index = 1;
            currIndex = index;

            for (let i = 0; i < items.length; i++) {
                let item = items[i],
                    box = item.getElementsByClassName("item__3d-frame")[0] as HTMLElement;
                if (i === index - 1) {
                    item.classList.add("carousel__slider__item--active");
                    box.style.transform = "perspective(1200px)";
                } else {
                    item.classList.remove("carousel__slider__item--active");
                    box.style.transform =
                        "perspective(1200px) rotateY(" + (i < index - 1 ? 40 : -40) + "deg)";
                }
            }

            slider.style.transform =
                "translate3d(" +
                (index * -width + width / 2 + window.innerWidth / 2) +
                "px, 0, 0)";
        }

        function timer(t: number) {
            let time = (t !== 0 ? t : intervalTime);
            clearInterval(interval);
            interval = setInterval(() => {
                move(++currIndex);
            }, time);
        }

        function prev() {
            move(--currIndex);
            timer(30000);
        }

        function next() {
            move(++currIndex);
            timer(30000);
        }

        function bindEvents() {
            window.onresize = resize;
            prevBtn.addEventListener("click", () => {
                prev();
            });
            nextBtn.addEventListener("click", () => {
                next();
            });
        }

        init();
    });

    return (
        <div id="asteroidInfos" className="carousel">
            <div className="carousel__body">
                <div className="carousel__prev"><i className="far fa-angle-left">&lt;</i></div>
                <div className="carousel__next"><i className="far fa-angle-right">&gt;</i></div>
                <div className="carousel__slider">
                </div>
            </div>
        </div>
    );
}

export default NearAsteroid;
