const BASE_URL = "";
const TOKEN = "";

export async function fetchBanks() {
  const response = await fetch(BASE_URL + '/diagnosis/payment_card/v1/banks', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + TOKEN
    }
  });
  
  return await response.json();
}

export async function fetchCardsByBank(bank) {
  const response = await fetch(`${BASE_URL}/diagnosis/payment_card/v1/banks/${bank.id}/cards`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + TOKEN
    }
  });
  
  return await response.json();
}

export async function fetchDestinations() {
  const response = await fetch(`${BASE_URL}/diagnosis/v1/countries`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + TOKEN
    }
  });
  
  return await response.json();
}

export async function fetchDiagnosis(card, destination) {
  const response = await fetch(`${BASE_URL}/diagnosis/payment_card/v1/diagnoses`, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + TOKEN
    },
    body: JSON.stringify({
      "contextType": "TRAVEL",
      "cardId": card.id,
      "travelDestination": destination.alpha2Code.toLowerCase(),
    })
  });
  
  return await response.json();
}