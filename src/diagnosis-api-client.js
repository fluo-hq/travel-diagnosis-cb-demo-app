export function fetchBanks() {
  return {
    "status": "OK",
    "data": [
      {
        "id":"5f43e8cd-d250-46e8-83a2-7d2b53cca9d3", 
        "name":"Air France KLM",
        "imageURL":"https://api-partner.fluo.com/v1/1E84C2CA-7B56-41E0-901B-A94170B027B8/image/bank/AirFrance.png"
      },
      {
        "id":"7f9d3449-f687-4673-ac9f-08cd95a889a9",
        "name":"Allianz Banque",
        "imageURL":"https://api-partner.fluo.com/v1/1E84C2CA-7B56-41E0-901B-A94170B027B8/image/bank/Allianz.png"
      }
    ]
  };
}

export function fetchCardsByBankId(bank) {
  return {
    "status": "OK",
    "data": [
        {
            "id":"1db2fd42-8799-4763-8f74-331cd12a61b9",
            "name":"Amex Gold (Air France KLM)",
            "cardType": {
                "id":"23fcc79d-d1ca-4890-8093-71f875991d81",
                "imageURL":"https://api-partner.fluo.com/v1/1E84C2CA-7B56-41E0-901B-A94170B027B8/image/card/AmericanExpressGold.png",
                "name":"American Express Gold",
                "type": "AMEX",
            },
            "bankId": "5f43e8cd-d250-46e8-83a2-7d2b53cca9d3"
        },
        {
            "id":"cad56636-9030-40a0-956f-d369e0a56849",
            "name":"Amex Platinum (Air France KLM)",
            "cardType": {
                "id":"039145a3-3b44-4f8a-9e3d-c0638c6bc8cc",
                "imageURL":"https://api-partner.fluo.com/v1/1E84C2CA-7B56-41E0-901B-A94170B027B8/image/card/AmericanExpressPlatinum.png",
                "name":"American Express Platinum",
                "type": "AMEX",
            },
            "bankId": "5f43e8cd-d250-46e8-83a2-7d2b53cca9d3"
        }
    ]
  }
}

export function fetchDestinations() {
  return {
    "status": "OK",
    "data": [
      {
          "alpha2Code": "AU",
          "alpha3Code": "AUS",
          "numericCode": 36,
          "usualName": "Australie",
          "officialName": "Australie (l')"
      },
      {
          "alpha2Code": "AW",
          "alpha3Code": "ABW",
          "numericCode": 533,
          "usualName": "Aruba",
          "officialName": "Aruba"
      }
    ]
  };
}

export function fetchDiagnosis(card, destination) {
  return {
    "coverage": "PARTIALLY_COVERED",
    "coveredPersons": {
        "label": "Personnes couvertes conjoints et enfants du même foyer...",
        "items": [
          {
            "id": "01108875-35de-415f-b95d-6f2af671a783",
            "name": "titulaire carte ou contrat"
          },
          {
            "id": "08f90eab-5c57-4e18-a7f9-22ce54b8f548",
            "name": "enfant fiscalement à charge"
          },
          {
            "id": "6e528f81-65b6-4ec0-acef-378baf862bce",
            "name": "conjoint ou concubin"
          },
          {
            "id": "7bf324c5-04da-4449-b909-738aa4c2155d",
            "name": "petit-enfant"
          },
          {
            "id": "8ffe2bba-e14e-4b27-b85f-a7487b720e3f",
            "name": "ascendant fiscalement à charge"
          }
        ]
    },
    "coveredPersonsLimits": [
          {
              "limitedPersonId": "7bf324c5-04da-4449-b909-738aa4c2155d",
              "name": "",
              "included": true,
              "comparator": "LESS",
              "value": "25",
              "unit": "ans"
          },
          {
              "limitedPersonId": "7bf324c5-04da-4449-b909-738aa4c2155d",
              "name": "couvert s'il voyage avec titulaire de la carte",
              "included": true,
              "comparator": "NA",
              "value": "",
              "unit": ""
          },
          {
              "name": "assuré couvert si âgé (le premier jour du voyage)",
              "included": true,
              "comparator": "LESS",
              "value": "76",
              "unit": "ans"
          },
          {
              "name": "les assurés peuvent voyager ensemble ou séparément",
              "included": true,
              "comparator": "NA",
              "value": "",
              "unit": ""
          },
          {
              "limitedPersonId": "08f90eab-5c57-4e18-a7f9-22ce54b8f548",
              "name": "",
              "included": true,
              "comparator": "LESS",
              "value": "25",
              "unit": "ans"
          }
      ],
    "covers": [

    ],
    "coverageDuration": {
      "assistance": {
        "type": "LIMITED",
        "periodInDays": 90,
      },
      "insurance": {
        "type": "LIMITED",
        "periodInDays": 180,
      },
      "label": "Durée du voyage inférieure à : 90 jours",
    },
    "paymentTerms": {
        "fullPaymentRequired": true,
        "label": "Pour être couvert, payez intégralement vos achats avec votre carte bancaire",
    },
    "tripType": {
        "hasToBeALeisureTrip": false,
        "label": "Valable dans le cadre d’un voyage privé ou professionnel"
    }
  };
}