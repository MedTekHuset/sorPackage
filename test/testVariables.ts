import gql from 'graphql-tag';

export class TestData{
  
  sltestQuery = gql`
  query SorLookup($queryInput: QueryInput!) {
    SorLookup(queryInput: $queryInput){
      Enhedsnavn
      SORkode
      Lokationsnummer
      Enhedstype
      Ydernummer
      Apoteksnummer
      SghAfdkode
      Lokalkode
      Pnummer
      CVR
      ParentSORkode
    }
  }
  `
  slmtestQuery = gql`
  query SorLookupMultiple($queryInput: QueryInput!) {
    SorLookupMultiple(queryInput: $queryInput){
      Enhedsnavn
      SORkode
      Lokationsnummer
      Enhedstype
      Ydernummer
      Apoteksnummer
      SghAfdkode
      Lokalkode
      Pnummer
      CVR
      ParentSORkode  
    }
  }
  `
  slptestQuery = gql`
  query ParentSorLookup($parentSorInput: ParentSorInput!) {
    ParentSorLookup(parentSorInput: $parentSorInput){
      Enhedsnavn
      SORkode
      Lokationsnummer
      Enhedstype
      Ydernummer
      Apoteksnummer
      SghAfdkode
      Lokalkode
      Pnummer
      CVR
      ParentSORkode  
    }
  }
  `

  slctestQuery = gql`
  query sorLookupChildren($childSorInput: ChildSorInput!) {
    sorLookupChildren(childSorInput: $childSorInput){
      Enhedsnavn
      SORkode
      Lokationsnummer
      Enhedstype
      Ydernummer
      Apoteksnummer
      SghAfdkode
      JSONHierachy
    }
  }
  ` 
  
  slTestVariable = { queryInput: { query: "{\"SghAfdkode\": \"9704\"}" } }
  slmTestVariable = { queryInput: { query: "{\"Region\": \"Region Midtjylland\"}" } }
  slpTestVariable = { parentSorInput : { query : "{\"SORkode\": \"279941000016006\"}", "depth": 2}}
  slcTestVariable = { childSorInput : { query : "{\"SORkode\": \"279941000016006\"}", "depth": 2}}
}