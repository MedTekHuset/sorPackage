import gql from 'graphql-tag';

export class QueryVariableBuilder {
    queryVariable: {};
    queryType: string;
    innerQueryVar: string;

    constructor() {
        this.queryVariable = {};
    }

    setQueryType(gqlInputType: string) {
        this.queryType = gqlInputType;
        return this;
    }

    setQueryVariable(innerQueryVar: {} | string) {
        this.innerQueryVar = innerQueryVar instanceof Object ? JSON.stringify(innerQueryVar) : innerQueryVar;
        this.updateQuery()
        return this;
    }

    private updateQuery() {
        var innerQV = { query: this.innerQueryVar };
        this.queryVariable[this.queryType] = innerQV;
    }

    addVariable(varKey: any, varVal: any) {
        var innerQuery = this.queryVariable[this.queryType]
        innerQuery[varKey] = varVal
        return this
    }

    getQuery() {
        return JSON.stringify(this.queryVariable);
    }
}
