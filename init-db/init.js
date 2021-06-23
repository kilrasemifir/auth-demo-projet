db = connect("test")

db.utilisateur.insert([{
    "username":"username",
    "email":"email@email.email"
},{
    "username":"truc",
    "email":"truc@email.email" 
}])

db.data.insert([
{
    "typeIdentifiantNational": "SIREN",
    "denomination": "KASPERSKY LAB FRANCE",
    "nomUsage": "KASPERSKY FRANCE",
    "categorieOrganisation": {
        "code": "SOCOM",
        "label": "Société commerciale",
        "categorie": "SOCIETE",
        "notifSansChiffreAffaire": false
    },
    "adresse": "KASPERSKY LAB FRANCE\r\nL IMMEUBLE L EUROPEEN BATIMENT\r\n2 RUE JOSEPH MONIER",
    "publierMonAdressePhysique": true,
    "codePostal": "92859",
    "ville": "RUEIL MALMAISON CEDEX",
    "pays": "FRANCE",
    "publierMonAdresseEmail": true,
    "emailDeContact": "arnaud.dechoux@kaspersky.com",
    "publierMonTelephoneDeContact": false,
    "lienSiteWeb": "https://www.kaspersky.fr/",
    "lienPageTwitter": "https://twitter.com/kasperskyfrance",
    "lienPageFacebook": "https://www.facebook.com/kasperskylabfrance/",
    "lienPageLinkedin": "https://www.linkedin.com/company/4974159/",
    "dirigeants": [
        {
            "civilite": "M",
            "nom": "DE COATPONT",
            "prenom": "Tanguy",
            "fonction": "Directeur général Europe du Sud"
        }
    ],
    "collaborateurs": [
        {
            "civilite": "M",
            "nom": "DE COATPONT",
            "prenom": "Tanguy",
            "fonction": "Directeur général Europe du Sud"
        },
        {
            "civilite": "M",
            "nom": "TRASTOUR",
            "prenom": "Bertrand",
            "fonction": "Directeur général France"
        },
        {
            "civilite": "M",
            "nom": "DECHOUX",
            "prenom": "Arnaud",
            "fonction": "Public affairs manager Europe"
        }
    ],
    "declarationTiers": false,
    "clients": [],
    "declarationOrgaAppartenance": false,
    "affiliations": [],
    "activites": {
        "listSecteursActivites": [
            {
                "code": "RECHERCHE",
                "label": "Recherche, innovation",
                "categorie": null,
                "ordre": 12
            },
            {
                "code": "NUMERIQUE",
                "label": "Numérique",
                "categorie": null,
                "ordre": 19
            }
        ],
        "listNiveauIntervention": [
            {
                "code": "NATIONAL",
                "label": "National",
                "categorie": null,
                "ordre": 2
            }
        ]
    }}])