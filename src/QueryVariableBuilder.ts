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

    setQueryVariable(innerQueryVar) {
        this.innerQueryVar = innerQueryVar instanceof Object ? JSON.stringify(innerQueryVar) : innerQueryVar;
        return this;
    }

    constructQuery() {
        var innerQV = { query: this.innerQueryVar };
        this.queryVariable[this.queryType] = innerQV;
    }

    addVariable() {}

    getQuery() {
        this.constructQuery();
        return JSON.stringify(this.queryVariable);
    }
}
