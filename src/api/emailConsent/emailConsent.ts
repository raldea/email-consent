/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/


export const emailConsent = () => {
  return 'Howdy!';
}

export const checkIfEmailExist = (
    email: string,
    apiKey: string,
    apiUrl: string,
    apiRevision: string
) => {
  console.log(email);
  console.log(apiKey);
  console.log(apiUrl);
  console.log(apiRevision);

  // let qs = new URLSearchParams({
  //   'filter': `equals(email,"${email}")`
  // });

  fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));

  console.log('asda');

  fetch('https://api.agify.io/?name=michael')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));


  const query = `
  query getDetails {
    products(filter: { sku: { eq: "VA01" } }) {
      items {
        name
        sku
        url_key
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;

  fetch("https://edge-sandbox-graph.adobe.io/api/3bb8eab1-35cb-4b38-ace9-46e6b4c6c3e7/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add your API key or authentication header if required:
      // "Authorization": "Bearer <YOUR_TOKEN>"
    },
    body: JSON.stringify({ query })
  })
      .then(response => response.json())
      .then(data => {
        console.log("GraphQL response:", data);
      })
      .catch(error => {
        console.error("Error fetching GraphQL:", error);
      });

  // fetch(`https://a.klaviyo.com/api/profiles?${qs}`, {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/vnd.api+json',
  //     Authorization: `Klaviyo-API-Key ${apiKey}`,
  //     revision: apiRevision
  //   }
  // }).then(res => {
  //   if (!res.ok) throw new Error(`HTTP ${res.status}`);
  //     return res.json();
  //   }
  // ).then(json => {
  //   const profile = json.data?.[0] ?? null;
  //
  //   if (!profile) {
  //     console.log('No profile found for', email);
  //   } else {
  //     console.log('Profile:', profile);
  //   }
  //
  //   return profile;
  // }).catch(err => {
  //   console.error('Klaviyo lookup failed:', err);
  // }).finally(() => {
  //   console.log('Lookup complete');
  // });

  return null;
}
