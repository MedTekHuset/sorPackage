﻿# Sor Package

## How to install & use

- To add the package to a project use 

    `yarn add https://github.com/MedTekHuset/sorPackage` 
    
    or 
    
    `npm install git+https://github.com/MedTekHuset/sorPackage`

- After it is installed you can import it like following 

    `import { SorFacade, DefaultQueries, QueryVariableBuilder } from 'sorpackage'` if you need all classes.
Else just use one or more.

- Using the QueryVariableBuilder is rather simple as its build with Method Chaining. Start by initiating the Class and then you are free to chain methods. It should look a little like the following 
```
queryVBuilder.setQueryType('parentSorInput')
                .setQueryVariable({ "SORkode": "1195041000016003" }
                .addVariable("depth", 2)
                .getQuery()
```
`.setQueryType()`. Will set the type of object that the sorservice will resolve.

`.setQueryVariable()`. Will set the Query terms to get the desired result

`addVariable()` Will set an additional Query parameter if the endpoint accepts that.

`getQuery()` Will return the constructed Query as a JSON String.

### Initiating SorFacade

- Initiate SorFacade like following `var sorFacade = new SorFacade("http://localhost:4000");` Instead of `localhost:4000` use the address to SorService.

- If headers are needed to be set such as Auth Tokens or other you can use 

    `sorFacade.SetHeaders({Key,Value})` 
    
    Now we are ready to send a request to our SorService you can simply call the following method
    
    `sorFacade.sorLookup(query, queryVariable)`

    `sorLookup()` Runs async and will return you with the raw response from SorService. 
