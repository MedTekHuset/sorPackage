import gql from 'graphql-tag';

export class DefaultQueries {
    sorLookupQuery = gql`
        query SorLookup($queryInput: QueryInput!) {
            SorLookup(queryInput: $queryInput) {
                id
                Enhedsnavn
                Enhedstype
                SORtype
                Gaeldende_fra_dato
                Ophoert_dato
                Sidst_aendret_dato
                SghAfdkode
                SORkode
                ParentSORkode
                Institutionsejer
                Sundhedsinstitution
                Ydernummer
                Lokalkode
                Telefon
                Fax
                Email
                Hjemmeside
                Lokationsnummer
                Region
                EDBsystem
                Systemleverandoer
                Netoperatoer
                Nedarvningsstatus
                Lokationsnummerstatus
                P_Postnummer
                P_By
                Postadresse
            }
        }
    `;

    sorLookupMultipleQuery = gql`
        query SorLookupMultiple($queryInput: QueryInput!) {
            SorLookupMultiple(queryInput: $queryInput) {
                id
                Enhedsnavn
                Enhedstype
                SORtype
                Gaeldende_fra_dato
                Ophoert_dato
                Sidst_aendret_dato
                SghAfdkode
                SORkode
                ParentSORkode
                Institutionsejer
                Sundhedsinstitution
                Ydernummer
                Lokalkode
                Telefon
                Fax
                Email
                Hjemmeside
                Lokationsnummer
                Region
                EDBsystem
                Systemleverandoer
                Netoperatoer
                Nedarvningsstatus
                Lokationsnummerstatus
                P_Postnummer
                P_By
                Postadresse
            }
        }
    `;

    sorLookupParentQuery = gql`
        query ParentSorLookup($parentSorInput: ParentSorInput!) {
            ParentSorLookup(parentSorInput: $parentSorInput) {
                id
                Enhedsnavn
                Enhedstype
                SORtype
                Gaeldende_fra_dato
                Ophoert_dato
                Sidst_aendret_dato
                SghAfdkode
                SORkode
                ParentSORkode
                Institutionsejer
                Sundhedsinstitution
                Ydernummer
                Lokalkode
                Telefon
                Fax
                Email
                Hjemmeside
                Lokationsnummer
                Region
                EDBsystem
                Systemleverandoer
                Netoperatoer
                Nedarvningsstatus
                Lokationsnummerstatus
                P_Postnummer
                P_By
                Postadresse
                ParentSORkode
            }
        }
    `;

    sorLookupChildrenQuery = gql`
        query sorLookupChildren($childSorInput: ChildSorInput!) {
            sorLookupChildren(childSorInput: $childSorInput) {
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
    `;
}
