/*! Copyright 2025 Adobe
All Rights Reserved. */
const t=()=>"Howdy!",l=(o,c,n,r)=>(console.log(o),console.log(c),console.log(n),console.log(r),fetch("https://jsonplaceholder.typicode.com/posts/1").then(e=>e.json()).then(e=>console.log(e)).catch(e=>console.error(e)),console.log("asda"),fetch("https://api.agify.io/?name=michael").then(e=>e.json()).then(e=>console.log(e)).catch(e=>console.error(e)),fetch("https://edge-sandbox-graph.adobe.io/api/3bb8eab1-35cb-4b38-ace9-46e6b4c6c3e7/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
`})}).then(e=>e.json()).then(e=>{console.log("GraphQL response:",e)}).catch(e=>{console.error("Error fetching GraphQL:",e)}),null);export{l as c,t as e};
//# sourceMappingURL=emailConsent.js.map
