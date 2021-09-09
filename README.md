# Trusk X

Trusk X is a sample project used for
- QA candidates technical test
- 'Classe verte' BDD workflow

# Get started

## Run Socket.IO events server

```
cd trusk-x-socket-io
yarn start
```

## Run API server

```
cd trusk-x-api
yarn start
```

## Run Web app

```
cd trusk-x-web
yarn start
```

## Run Acceptance tests

```
cd trusk-x-acceptance-tests
yarn cy:run
```

# List of features

| code | resumé | lien |
|------|--------|------|
| FEA001 | Employee signup | https://github.com/AdrianP-Trusk/truskX-sample-classe-verte/issues/1 |
| FEA002 | Employee login | https://github.com/AdrianP-Trusk/truskX-sample-classe-verte/issues/2 |
| FEA003 | Logout | https://github.com/AdrianP-Trusk/truskX-sample-classe-verte/issues/3 |
| FEA004 | Post creation | https://github.com/AdrianP-Trusk/truskX-sample-classe-verte/issues/4 |
| FEA005 | Posts list | https://github.com/AdrianP-Trusk/truskX-sample-classe-verte/issues/5 |

# 'Classe verte'

Le but est de faire des workshops sur différents scénarios avec un process Acceptance Tests Driven Development bien identifié.

## Scenario 1 - Nouvelle feature sans impacts (live)

On a une application (branche master)
On souhaite faire une nouvelle feature sur l'application
On écrit des acceptance tests automatiques en amont
On lance les tests pour voir qu'on a pas d'erreur de compilation
On code l'évolution avec les tests en //

### FEA0056 - Enable employees to see a post details specific view

https://github.com/AdrianP-Trusk/truskX-sample-classe-verte/issues/5

## Scenario 2 - Nouvelle feature qui impacte la non regression (workshop)

### FEA007 - Require employee phone number for registration

https://github.com/AdrianP-Trusk/truskX-sample-classe-verte/issues/6
