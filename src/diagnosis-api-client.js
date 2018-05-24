const BASE_URL = "http://localhost:8080";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbklkIjoiMTEzNjJhOTktYWEyZi00ZGYzLTlmNDgtMjNhZmY5OGFlMGE3IiwiZ3JhbnRzIjpbIkNBTl9BQ1RfT05fQkVIQUxGX09GX1VTRVJTIl0sInN1YiI6InRoaWVycnkuYWJhbGVhK2RlbW9AZmx1by5jb20iLCJpYXQiOjE1MjcxNDk3NDcsImV4cCI6MTUyNzE3ODU0NywiYXVkIjoiYmFjay1vZmZpY2UifQ.UDJlRglSmGai4YZ-IZVfrn5Cx2jxdoJu1ha-RyQR0V8";

export async function fetchBanks() {
  const response = await fetch(BASE_URL + '/diagnosis/payment_card/v1/banks', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + TOKEN,
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json',
    }
  });
  
  return await response.json();
}

export async function fetchCardsByBank(bank) {
  const response = await fetch(`${BASE_URL}/diagnosis/payment_card/v1/banks/${bank.id}/cards`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + TOKEN,
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json',
    }
  });
  
  return await response.json();
}

export async function fetchDestinations() {
  const response = await fetch(`${BASE_URL}/diagnosis/v1/countries`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + TOKEN,
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json',
    }
  });
  
  return await response.json();
}

export async function fetchDiagnosis(card, destination) {
  const response = await fetch(`${BASE_URL}/diagnosis/payment_card/v1/diagnoses`, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + TOKEN,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      "contextType": "TRAVEL",
      "cardId": card.id,
      "travelDestination": destination.alpha2Code,
    })
  });
  
  return await response.json();
}