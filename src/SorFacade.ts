import { DocumentNode } from 'graphql';
import { GraphQLClient } from 'graphql-request';

export class SorFacade {
    sorServerAddress: string;
    gqlClient: GraphQLClient;

    /**
     *
     * @param {[String]} sorServerAddress - Like http://localhost:4000
     */
    constructor(sorServerAddress: string) {
        this.sorServerAddress = sorServerAddress;
        this.instantiateClient();
    }

    instantiateClient() {
        this.gqlClient = new GraphQLClient(this.sorServerAddress);
    }

    /**
     *
     * @param {[Object]} headers {authorization: 'Bearer MY_TOKEN', anotherheader: 'header_value'}
     */
    setHeaders(headers: {}) {
        this.gqlClient.setHeaders(headers);
    }

    /**
     *
     * @param {[DocumentNode]} query GraphQL Query - https://graphql.org/learn/queries/
     * @param {[Object]} queryVariables {queryInput : {query : "{\"SghAfdkode\": \"number\"}"}}
     * @returns JSON String
     */
    async sorLookup(query: DocumentNode, queryVariables: {}) {
        var data = await this.gqlClient.request(query, queryVariables);
        return data;
    }
}
