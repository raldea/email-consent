/*! Copyright 2025 Adobe
All Rights Reserved. */
import{Initializer as s}from"@dropins/tools/lib.js";import{FetchGraphQL as a}from"@dropins/tools/fetch-graphql.js";const r=new s({init:async o=>{const t={};r.config.setConfig({...t,...o})},listeners:()=>[]}),p=r.config,{setEndpoint:h,setFetchGraphQlHeader:u,removeFetchGraphQlHeader:f,setFetchGraphQlHeaders:m,fetchGraphQl:g,getConfig:d}=new a().getMethods(),y=()=>"Howdy!",b=(o,t,n,i)=>(console.log(o),console.log(t),console.log(n),console.log(i),null),v=(o,t)=>(fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
  }`,variables:{revision:"2025-04-15",input:{data:{type:"profile",attributes:{first_name:"johnc",email:"john.doe@example.com"}}}}})}).then(e=>e.json()).then(e=>(console.log("GraphQL mutation response:",e),e)).catch(e=>{console.error("Error executing GraphQL mutation:",e)}),null);export{b as checkIfEmailExist,p as config,y as emailConsent,g as fetchGraphQl,d as getConfig,r as initialize,f as removeFetchGraphQlHeader,h as setEndpoint,u as setFetchGraphQlHeader,m as setFetchGraphQlHeaders,v as subscribeProfile};
//# sourceMappingURL=api.js.map
