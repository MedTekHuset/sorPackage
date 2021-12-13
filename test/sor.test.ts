import { TestData } from "./testVariables";
import { SorFacade } from "../src/SorFacade";
import { DefaultQueries } from "../src/DefaultQueries";
import { QueryVariableBuilder } from "../src/QueryVariableBuilder";

var sorFacade: SorFacade
var testData: TestData
beforeAll(() => {
    testData = new TestData()
})

beforeEach(() => {
    sorFacade = new SorFacade("http://localhost:4000");
  });

afterEach(() => {
    sorFacade = null;
})

afterAll(() => {
    testData = null
})

test('we can call Sorservice locally', async () => {
    var res = await sorFacade.sorLookup(testData.sltestQuery, testData.slTestVariable)
    expect(res).toBeDefined()
})

test('look up multiple based on region', async () => {
    var res = await sorFacade.sorLookup(testData.slmtestQuery, testData.slmTestVariable)
    expect(res).toBeDefined()
})

test('look up parents', async () => {
    var res = await sorFacade.sorLookup(testData.slptestQuery, testData.slpTestVariable)
    expect(res).toBeDefined()
})

test('look up children', async () => {
    var res = await sorFacade.sorLookup(testData.slctestQuery, testData.slcTestVariable)
    expect(res).toBeDefined()
})

test('QueryVariable builder', async () => {
    var queryVBuilder = new QueryVariableBuilder();
    var res = queryVBuilder.setQueryType('queryInput').setQueryVariable("{\"SghAfdkode\": \"9704\"}").getQuery()
    console.log(res)
    expect(res).toEqual(res)
})

test('QueryVariable builder with object query', async () => {
    var queryVBuilder = new QueryVariableBuilder();
    var res = queryVBuilder.setQueryType('queryInput').setQueryVariable({SghAfdkode: 9704}).getQuery()
    console.log(res)
    expect(res).toEqual(res)
})

test('QueryVariable builder add variable', async () => {
    var queryVBuilder = new QueryVariableBuilder();
    var res = queryVBuilder.setQueryType('parentSorInput').setQueryVariable({ "SORkode": "1195041000016003" }).addVariable("depth", 2).getQuery()
    console.log(res)
    expect(res).toEqual(res)
})