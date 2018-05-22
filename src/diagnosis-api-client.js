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

export function fetchCardsByBankId(bankId) {
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