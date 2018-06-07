const FLUO_DIAGNOSIS_HOST = "INSERT THE FLUO DIAGNOSIS HOST HERE";
const JWT_PARTNER_TOKEN = "INSERT YOUR JWT PARTNER TOKEN HERE";

if(JWT_PARTNER_TOKEN === "INSERT YOUR JWT PARTNER TOKEN HERE" || FLUO_DIAGNOSIS_HOST === "INSERT THE FLUO DIAGNOSIS HOST HERE"){
  throw new Error('Please configure your credentials according to the README.');
}

function getHeaders(){
  return {
    'Authorization': `Bearer ${JWT_PARTNER_TOKEN}`,
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json',
  };
}

export async function fetchBanks() {
  const response = await fetch(`${FLUO_DIAGNOSIS_HOST}/diagnosis/payment_card/v1/banks`, {
    method: 'GET',
    headers: getHeaders()
  });
  
  return await response.json();
}

export async function fetchCardsByBank(bank) {
  const response = await fetch(`${FLUO_DIAGNOSIS_HOST}/diagnosis/payment_card/v1/banks/${bank.id}/cards`, {
    method: 'GET',
    headers: getHeaders()
  });
  
  return await response.json();
}

export async function fetchDestinations() {
  const response = await fetch(`${FLUO_DIAGNOSIS_HOST}/diagnosis/v1/countries`, {
    method: 'GET',
    headers: getHeaders()
  });
  
  return await response.json();
}

export async function fetchDiagnosis(card, destination) {
  const response = await fetch(`${FLUO_DIAGNOSIS_HOST}/diagnosis/payment_card/v1/diagnoses`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      "contextType": "TRAVEL",
      "cardId": card.id,
      "travelDestination": destination.alpha2Code,
    })
  });
  
  return await response.json();
}
