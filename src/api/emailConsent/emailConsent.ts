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
  //
  // fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.error(err));
  //
  // console.log('asda');
  //
  // fetch('https://api.agify.io/?name=michael')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.error(err));



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

export const subscribeProfile = (
    data: object,
    meshApiPoint: string
) => {
  const mutation = `
  mutation CreateProfile($revision: String!, $input: CreateProfileInput!) {
    create_profile(
    revision: $revision
    input: $input
    ) {
      data {
        type
        id
        attributes {
          email
        }
        relationships
      }
    }
  }`;

  const variables = {
    revision: "2025-04-15",
    input: {
      data: {
        type: "profile",
        attributes: {
          first_name: "johnc",
          email: "john.doe@example.com"
        }
      }
    }
  };

  fetch(meshApiPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: mutation,
      variables
    })
  }).then(
    response => response.json()
  ).then(data => {
    console.log("GraphQL mutation response:", data);

    return data;
  }).catch(error => {
    console.error("Error executing GraphQL mutation:", error);
  });

  return null;
}
