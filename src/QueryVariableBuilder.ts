import gql from 'graphql-tag';

export class QueryVariableBuilder {
    queryVariable: {};
    queryType: string;
    innerQueryVar: string;

    constructor() {
        this.queryVariable = {};
    }
    /**
     * @param {[String]} gqlInputType example "parentSorInput", "queryInput" ...... 
     */
    setQueryType(gqlInputType: string) {
        this.queryType = gqlInputType;
        return this;
    }

    /**
     * @param {[Object][String]} innerQueryVar Can be digested in multiple forms such as 
     * "{\"SghAfdkode\": \"9704\"}", 
     * {SghAfdkode: 9704} or 
     * { "SORkode": "1195041000016003" }
     * this depends on the SorService Query
     */
    setQueryVariable(innerQueryVar: {} | string) {
        this.innerQueryVar = innerQueryVar instanceof Object ? JSON.stringify(innerQueryVar) : innerQueryVar;
        this.updateQuery()
        return this;
    }

    private updateQuery() {
        var innerQV = { query: this.innerQueryVar };
        this.queryVariable[this.queryType] = innerQV;
    }
    /**
     * @param {[any]} varKey any key supported by the query - Example "depth"
     * @param {[any]} varVal any value supported by the query - Example 2
     */
    addVariable(varKey: any, varVal: any) {
        var innerQuery = this.queryVariable[this.queryType]
        innerQuery[varKey] = varVal
        return this
    }
    /**
     * 
     * @returns {[String]} GraphQL QueryVariable as String
     */
    getQuery() {
        return JSON.stringify(this.queryVariable);
    }
}
