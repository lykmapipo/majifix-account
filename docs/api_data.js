define({ "api": [
  {
    "type": "post",
    "url": "/accounts/:id/accessors",
    "title": "Create Account Accessor",
    "group": "Account",
    "name": "CreateAccountAccessor",
    "version": "1.0.0",
    "description": "<p>Create account accessors</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts/:id/accessors"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when account was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5ae6e306f6eea02c073de6eb\",\n  \"category\": \"Domestic\",\n  \"number\": \"50524\",\n  \"name\": \"Terrell Stoltenberg\",\n  \"phone\": \"809-584-7580\",\n  \"email\": \"ayden.goodwin@majifix.com\",\n  \"neighborhood\": \"Joanieborough\",\n  \"address\": \"30337 Cristobal Divide\",\n  \"locale\": \"en\",\n  \"location\":\n  {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      39.2563,\n      -6.9328\n    ]\n  },\n  \"bills\": [\n  {\n    \"number\": \"895052418\",\n    \"period\":\n    {\n      \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n      \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n    },\n    \"balance\":\n    {\n      \"outstand\": 3235,\n      \"open\": 7,\n      \"charges\": 210,\n      \"debt\": 281,\n      \"close\": 145\n    },\n    \"items\": [\n    {\n      \"name\": \"Previous Readings\",\n      \"quantity\": 281,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"time\": \"2018-03-05T10:06:02.820Z\",\n      \"name\": \"Current Readings\",\n      \"quantity\": 206,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"name\": \"Unit Consumed\",\n      \"quantity\": 80,\n      \"unit\": \"cbm\"\n    }],\n    \"currency\": \"HRK\",\n    \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n  }],\n  \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n  \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n  \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/accounts/:id",
    "title": "Delete Account",
    "group": "Account",
    "name": "DeleteAccount",
    "version": "1.0.0",
    "description": "<p>Delete existing account</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when account was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5ae6e306f6eea02c073de6eb\",\n  \"category\": \"Domestic\",\n  \"number\": \"50524\",\n  \"name\": \"Terrell Stoltenberg\",\n  \"phone\": \"809-584-7580\",\n  \"email\": \"ayden.goodwin@majifix.com\",\n  \"neighborhood\": \"Joanieborough\",\n  \"address\": \"30337 Cristobal Divide\",\n  \"locale\": \"en\",\n  \"location\":\n  {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      39.2563,\n      -6.9328\n    ]\n  },\n  \"bills\": [\n  {\n    \"number\": \"895052418\",\n    \"period\":\n    {\n      \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n      \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n    },\n    \"balance\":\n    {\n      \"outstand\": 3235,\n      \"open\": 7,\n      \"charges\": 210,\n      \"debt\": 281,\n      \"close\": 145\n    },\n    \"items\": [\n    {\n      \"name\": \"Previous Readings\",\n      \"quantity\": 281,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"time\": \"2018-03-05T10:06:02.820Z\",\n      \"name\": \"Current Readings\",\n      \"quantity\": 206,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"name\": \"Unit Consumed\",\n      \"quantity\": 80,\n      \"unit\": \"cbm\"\n    }],\n    \"currency\": \"HRK\",\n    \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n  }],\n  \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n  \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n  \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/accounts/:id/accessors/:phone",
    "title": "Delete Account Accessor",
    "group": "Account",
    "name": "DeleteAccountAccessor",
    "version": "1.0.0",
    "description": "<p>Delete account accessors</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts/:id/accessors/:phone"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when account was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5ae6e306f6eea02c073de6eb\",\n  \"category\": \"Domestic\",\n  \"number\": \"50524\",\n  \"name\": \"Terrell Stoltenberg\",\n  \"phone\": \"809-584-7580\",\n  \"email\": \"ayden.goodwin@majifix.com\",\n  \"neighborhood\": \"Joanieborough\",\n  \"address\": \"30337 Cristobal Divide\",\n  \"locale\": \"en\",\n  \"location\":\n  {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      39.2563,\n      -6.9328\n    ]\n  },\n  \"bills\": [\n  {\n    \"number\": \"895052418\",\n    \"period\":\n    {\n      \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n      \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n    },\n    \"balance\":\n    {\n      \"outstand\": 3235,\n      \"open\": 7,\n      \"charges\": 210,\n      \"debt\": 281,\n      \"close\": 145\n    },\n    \"items\": [\n    {\n      \"name\": \"Previous Readings\",\n      \"quantity\": 281,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"time\": \"2018-03-05T10:06:02.820Z\",\n      \"name\": \"Current Readings\",\n      \"quantity\": 206,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"name\": \"Unit Consumed\",\n      \"quantity\": 80,\n      \"unit\": \"cbm\"\n    }],\n    \"currency\": \"HRK\",\n    \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n  }],\n  \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n  \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n  \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/accounts/:id",
    "title": "Get Existing Account",
    "group": "Account",
    "name": "GetAccount",
    "version": "1.0.0",
    "description": "<p>Get existing account</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when account was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5ae6e306f6eea02c073de6eb\",\n  \"category\": \"Domestic\",\n  \"number\": \"50524\",\n  \"name\": \"Terrell Stoltenberg\",\n  \"phone\": \"809-584-7580\",\n  \"email\": \"ayden.goodwin@majifix.com\",\n  \"neighborhood\": \"Joanieborough\",\n  \"address\": \"30337 Cristobal Divide\",\n  \"locale\": \"en\",\n  \"location\":\n  {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      39.2563,\n      -6.9328\n    ]\n  },\n  \"bills\": [\n  {\n    \"number\": \"895052418\",\n    \"period\":\n    {\n      \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n      \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n    },\n    \"balance\":\n    {\n      \"outstand\": 3235,\n      \"open\": 7,\n      \"charges\": 210,\n      \"debt\": 281,\n      \"close\": 145\n    },\n    \"items\": [\n    {\n      \"name\": \"Previous Readings\",\n      \"quantity\": 281,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"time\": \"2018-03-05T10:06:02.820Z\",\n      \"name\": \"Current Readings\",\n      \"quantity\": 206,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"name\": \"Unit Consumed\",\n      \"quantity\": 80,\n      \"unit\": \"cbm\"\n    }],\n    \"currency\": \"HRK\",\n    \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n  }],\n  \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n  \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n  \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/accounts/:id/accessors",
    "title": "Get Account Accessor",
    "group": "Account",
    "name": "GetAccountAccessor",
    "version": "1.0.0",
    "description": "<p>Get account accessors</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts/:id/accessors"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when account was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5ae6e306f6eea02c073de6eb\",\n  \"category\": \"Domestic\",\n  \"number\": \"50524\",\n  \"name\": \"Terrell Stoltenberg\",\n  \"phone\": \"809-584-7580\",\n  \"email\": \"ayden.goodwin@majifix.com\",\n  \"neighborhood\": \"Joanieborough\",\n  \"address\": \"30337 Cristobal Divide\",\n  \"locale\": \"en\",\n  \"location\":\n  {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      39.2563,\n      -6.9328\n    ]\n  },\n  \"bills\": [\n  {\n    \"number\": \"895052418\",\n    \"period\":\n    {\n      \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n      \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n    },\n    \"balance\":\n    {\n      \"outstand\": 3235,\n      \"open\": 7,\n      \"charges\": 210,\n      \"debt\": 281,\n      \"close\": 145\n    },\n    \"items\": [\n    {\n      \"name\": \"Previous Readings\",\n      \"quantity\": 281,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"time\": \"2018-03-05T10:06:02.820Z\",\n      \"name\": \"Current Readings\",\n      \"quantity\": 206,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"name\": \"Unit Consumed\",\n      \"quantity\": 80,\n      \"unit\": \"cbm\"\n    }],\n    \"currency\": \"HRK\",\n    \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n  }],\n  \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n  \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n  \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/accounts",
    "title": "List Accounts",
    "group": "Account",
    "name": "GetAccounts",
    "version": "1.0.0",
    "description": "<p>Returns a list of accounts</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of accounts</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "data.jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "data.location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "data.location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "data.bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "data.bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "data.bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "data.bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "data.active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when account was last updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of accounts</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of accounts returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest account was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [{\n     \"_id\": \"5ae6e306f6eea02c073de6eb\",\n     \"category\": \"Domestic\",\n     \"number\": \"50524\",\n     \"name\": \"Terrell Stoltenberg\",\n     \"phone\": \"809-584-7580\",\n     \"email\": \"ayden.goodwin@majifix.com\",\n     \"neighborhood\": \"Joanieborough\",\n     \"address\": \"30337 Cristobal Divide\",\n     \"locale\": \"en\",\n     \"location\":\n     {\n       \"type\": \"Point\",\n       \"coordinates\": [\n          39.2563,\n          -6.9328\n        ]\n     },\n     \"bills\": [{\n       \"number\": \"895052418\",\n       \"period\":\n       {\n         \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n         \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n         \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n         \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n       },\n       \"balance\":\n       {\n         \"outstand\": 3235,\n         \"open\": 7,\n         \"charges\": 210,\n         \"debt\": 281,\n         \"close\": 145\n       },\n       \"items\": [\n       {\n         \"name\": \"Previous Readings\",\n         \"quantity\": 281,\n         \"unit\": \"cbm\"\n       },\n       {\n         \"time\": \"2018-03-05T10:06:02.820Z\",\n         \"name\": \"Current Readings\",\n         \"quantity\": 206,\n         \"unit\": \"cbm\"\n       },\n       {\n         \"name\": \"Unit Consumed\",\n         \"quantity\": 80,\n         \"unit\": \"cbm\"\n        }],\n        \"currency\": \"HRK\",\n        \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n      }],\n      \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n      \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n      \"active\": true\n     }],\n     \"total\": 10,\n     \"size\": 1,\n     \"limit\": 1,\n     \"skip\": 0,\n     \"page\": 1,\n     \"pages\": 10,\n     \"lastModified\": \"Mon, 30 Apr 2018 12:33:58 GMT\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/jurisdictions/:jurisdiction/accounts",
    "title": "List Jurisdiction Accounts",
    "version": "1.0.0",
    "name": "GetJurisdictionAccounts",
    "group": "Account",
    "description": "<p>Returns a list of accounts of specified jurisdiction</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/jurisdictions/:jurisdiction/accounts"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of accounts</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "data.jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "data.location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "data.location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "data.bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "data.bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "data.bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "data.bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "data.bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "data.bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "data.active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when account was last updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of accounts</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of accounts returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest account was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"data\": [{\n     \"_id\": \"5ae6e306f6eea02c073de6eb\",\n     \"category\": \"Domestic\",\n     \"number\": \"50524\",\n     \"name\": \"Terrell Stoltenberg\",\n     \"phone\": \"809-584-7580\",\n     \"email\": \"ayden.goodwin@majifix.com\",\n     \"neighborhood\": \"Joanieborough\",\n     \"address\": \"30337 Cristobal Divide\",\n     \"locale\": \"en\",\n     \"location\":\n     {\n       \"type\": \"Point\",\n       \"coordinates\": [\n          39.2563,\n          -6.9328\n        ]\n     },\n     \"bills\": [{\n       \"number\": \"895052418\",\n       \"period\":\n       {\n         \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n         \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n         \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n         \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n       },\n       \"balance\":\n       {\n         \"outstand\": 3235,\n         \"open\": 7,\n         \"charges\": 210,\n         \"debt\": 281,\n         \"close\": 145\n       },\n       \"items\": [\n       {\n         \"name\": \"Previous Readings\",\n         \"quantity\": 281,\n         \"unit\": \"cbm\"\n       },\n       {\n         \"time\": \"2018-03-05T10:06:02.820Z\",\n         \"name\": \"Current Readings\",\n         \"quantity\": 206,\n         \"unit\": \"cbm\"\n       },\n       {\n         \"name\": \"Unit Consumed\",\n         \"quantity\": 80,\n         \"unit\": \"cbm\"\n        }],\n        \"currency\": \"HRK\",\n        \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n      }],\n      \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n      \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n      \"active\": true\n     }],\n     \"total\": 10,\n     \"size\": 1,\n     \"limit\": 1,\n     \"skip\": 0,\n     \"page\": 1,\n     \"pages\": 10,\n     \"lastModified\": \"Mon, 30 Apr 2018 12:33:58 GMT\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/accounts/:id",
    "title": "Patch Existing Account",
    "group": "Account",
    "name": "PatchAccount",
    "version": "1.0.0",
    "description": "<p>Patch existing account</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when account was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5ae6e306f6eea02c073de6eb\",\n  \"category\": \"Domestic\",\n  \"number\": \"50524\",\n  \"name\": \"Terrell Stoltenberg\",\n  \"phone\": \"809-584-7580\",\n  \"email\": \"ayden.goodwin@majifix.com\",\n  \"neighborhood\": \"Joanieborough\",\n  \"address\": \"30337 Cristobal Divide\",\n  \"locale\": \"en\",\n  \"location\":\n  {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      39.2563,\n      -6.9328\n    ]\n  },\n  \"bills\": [\n  {\n    \"number\": \"895052418\",\n    \"period\":\n    {\n      \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n      \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n    },\n    \"balance\":\n    {\n      \"outstand\": 3235,\n      \"open\": 7,\n      \"charges\": 210,\n      \"debt\": 281,\n      \"close\": 145\n    },\n    \"items\": [\n    {\n      \"name\": \"Previous Readings\",\n      \"quantity\": 281,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"time\": \"2018-03-05T10:06:02.820Z\",\n      \"name\": \"Current Readings\",\n      \"quantity\": 206,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"name\": \"Unit Consumed\",\n      \"quantity\": 80,\n      \"unit\": \"cbm\"\n    }],\n    \"currency\": \"HRK\",\n    \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n  }],\n  \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n  \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n  \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/accounts/:id/accessors/:phone",
    "title": "Patch Account Accessor",
    "group": "Account",
    "name": "PatchAccountAccessor",
    "version": "1.0.0",
    "description": "<p>Patch account accessors</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts/:id/accessors/:phone"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when account was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5ae6e306f6eea02c073de6eb\",\n  \"category\": \"Domestic\",\n  \"number\": \"50524\",\n  \"name\": \"Terrell Stoltenberg\",\n  \"phone\": \"809-584-7580\",\n  \"email\": \"ayden.goodwin@majifix.com\",\n  \"neighborhood\": \"Joanieborough\",\n  \"address\": \"30337 Cristobal Divide\",\n  \"locale\": \"en\",\n  \"location\":\n  {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      39.2563,\n      -6.9328\n    ]\n  },\n  \"bills\": [\n  {\n    \"number\": \"895052418\",\n    \"period\":\n    {\n      \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n      \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n    },\n    \"balance\":\n    {\n      \"outstand\": 3235,\n      \"open\": 7,\n      \"charges\": 210,\n      \"debt\": 281,\n      \"close\": 145\n    },\n    \"items\": [\n    {\n      \"name\": \"Previous Readings\",\n      \"quantity\": 281,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"time\": \"2018-03-05T10:06:02.820Z\",\n      \"name\": \"Current Readings\",\n      \"quantity\": 206,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"name\": \"Unit Consumed\",\n      \"quantity\": 80,\n      \"unit\": \"cbm\"\n    }],\n    \"currency\": \"HRK\",\n    \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n  }],\n  \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n  \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n  \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/accounts",
    "title": "Create New Account",
    "group": "Account",
    "name": "PostAccount",
    "version": "1.0.0",
    "description": "<p>Create new Account</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when account was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5ae6e306f6eea02c073de6eb\",\n  \"category\": \"Domestic\",\n  \"number\": \"50524\",\n  \"name\": \"Terrell Stoltenberg\",\n  \"phone\": \"809-584-7580\",\n  \"email\": \"ayden.goodwin@majifix.com\",\n  \"neighborhood\": \"Joanieborough\",\n  \"address\": \"30337 Cristobal Divide\",\n  \"locale\": \"en\",\n  \"location\":\n  {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      39.2563,\n      -6.9328\n    ]\n  },\n  \"bills\": [\n  {\n    \"number\": \"895052418\",\n    \"period\":\n    {\n      \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n      \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n    },\n    \"balance\":\n    {\n      \"outstand\": 3235,\n      \"open\": 7,\n      \"charges\": 210,\n      \"debt\": 281,\n      \"close\": 145\n    },\n    \"items\": [\n    {\n      \"name\": \"Previous Readings\",\n      \"quantity\": 281,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"time\": \"2018-03-05T10:06:02.820Z\",\n      \"name\": \"Current Readings\",\n      \"quantity\": 206,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"name\": \"Unit Consumed\",\n      \"quantity\": 80,\n      \"unit\": \"cbm\"\n    }],\n    \"currency\": \"HRK\",\n    \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n  }],\n  \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n  \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n  \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/accounts/:id",
    "title": "Put Existing Account",
    "group": "Account",
    "name": "PutAccount",
    "version": "1.0.0",
    "description": "<p>Put existing account</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when account was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5ae6e306f6eea02c073de6eb\",\n  \"category\": \"Domestic\",\n  \"number\": \"50524\",\n  \"name\": \"Terrell Stoltenberg\",\n  \"phone\": \"809-584-7580\",\n  \"email\": \"ayden.goodwin@majifix.com\",\n  \"neighborhood\": \"Joanieborough\",\n  \"address\": \"30337 Cristobal Divide\",\n  \"locale\": \"en\",\n  \"location\":\n  {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      39.2563,\n      -6.9328\n    ]\n  },\n  \"bills\": [\n  {\n    \"number\": \"895052418\",\n    \"period\":\n    {\n      \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n      \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n    },\n    \"balance\":\n    {\n      \"outstand\": 3235,\n      \"open\": 7,\n      \"charges\": 210,\n      \"debt\": 281,\n      \"close\": 145\n    },\n    \"items\": [\n    {\n      \"name\": \"Previous Readings\",\n      \"quantity\": 281,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"time\": \"2018-03-05T10:06:02.820Z\",\n      \"name\": \"Current Readings\",\n      \"quantity\": 206,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"name\": \"Unit Consumed\",\n      \"quantity\": 80,\n      \"unit\": \"cbm\"\n    }],\n    \"currency\": \"HRK\",\n    \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n  }],\n  \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n  \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n  \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/accounts/:id/accessors/:phone",
    "title": "Put Account Accessor",
    "group": "Account",
    "name": "PutAccountAccessor",
    "version": "1.0.0",
    "description": "<p>Put account accessors</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts/:id/accessors/:phone"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when account was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5ae6e306f6eea02c073de6eb\",\n  \"category\": \"Domestic\",\n  \"number\": \"50524\",\n  \"name\": \"Terrell Stoltenberg\",\n  \"phone\": \"809-584-7580\",\n  \"email\": \"ayden.goodwin@majifix.com\",\n  \"neighborhood\": \"Joanieborough\",\n  \"address\": \"30337 Cristobal Divide\",\n  \"locale\": \"en\",\n  \"location\":\n  {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      39.2563,\n      -6.9328\n    ]\n  },\n  \"bills\": [\n  {\n    \"number\": \"895052418\",\n    \"period\":\n    {\n      \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n      \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n    },\n    \"balance\":\n    {\n      \"outstand\": 3235,\n      \"open\": 7,\n      \"charges\": 210,\n      \"debt\": 281,\n      \"close\": 145\n    },\n    \"items\": [\n    {\n      \"name\": \"Previous Readings\",\n      \"quantity\": 281,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"time\": \"2018-03-05T10:06:02.820Z\",\n      \"name\": \"Current Readings\",\n      \"quantity\": 206,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"name\": \"Unit Consumed\",\n      \"quantity\": 80,\n      \"unit\": \"cbm\"\n    }],\n    \"currency\": \"HRK\",\n    \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n  }],\n  \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n  \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n  \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/accounts/verify",
    "title": "Verify Account Access",
    "group": "Account",
    "name": "VerifyAccountAccess",
    "version": "1.0.0",
    "description": "<p>Create new Account</p>",
    "filename": "lib/http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://majifix-account.herokuapp.com/v1/accounts/verify"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique account identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": true,
            "field": "jurisdiction",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction under which this account belongs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Human readable category of the account(or customer)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Unique human readable account number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Human readable name of the account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Primary mobile phone number used to contact an account direct by a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Primary email address used to contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "neighborhood",
            "description": "<p>Human readable district or town of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>Human readable physical address of an account</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "locale",
            "defaultValue": "en",
            "description": "<p>defines the account's language, region and any special variant preferences</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "location",
            "defaultValue": "undefined",
            "description": "<p>jurisdiction point of interest on account</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "location.coordinates",
            "description": "<p>data pair for longitude and latitude in format [ <code>&lt;x&gt;</code>, <code>&lt;y&gt;</code> ] or [ <code>&lt;longitude&gt;</code> , <code>&lt;latitude&gt;</code> ]</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[0]",
            "description": "<p>longitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "location.coordinates[1]",
            "description": "<p>latitude</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "bills",
            "defaultValue": "undefined",
            "description": "<p>account bill(or invoice) from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.number",
            "description": "<p>bill(or invoice) number from jurisdiction e.g pay number, reference number etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.period",
            "description": "<p>bill(or invoice) period</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.period.name",
            "description": "<p>Human readable bill period name e.g November, Jan-Jun, May2018 etc</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.billedAt",
            "description": "<p>A date when a bill come to effect i.e bill runned or bill generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.startedAt",
            "description": "<p>A bill period start date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.endedAt",
            "description": "<p>A bill period end date(or time)</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.period.duedAt",
            "description": "<p>A bill period due date(or time). Mostly used by jurisdiction to refer the date when an account should have already pay the bill.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.balance",
            "description": "<p>bill(or invoice) balances</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.outstand",
            "description": "<p>Current bill period outstand balance i.e total amount still due after all payments within a bill period</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.open",
            "description": "<p>Current bill period open balance</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.charges",
            "description": "<p>Current bill period charges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.debt",
            "description": "<p>Current bill period account total additional debt i.e loan</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.balance.close",
            "description": "<p>Current bill period close balance i.e total amount due before any payments within a bill period.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "bills.items",
            "description": "<p>bill(or invoice) items</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.name",
            "description": "<p>Human readable name of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.quantity",
            "description": "<p>Bill item quantity</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "bills.items.price",
            "description": "<p>Bill item total price e.g if quantity if 5 then price must be total for all of the 5 item</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.items.unit",
            "description": "<p>Human readable unit of bill item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "bills.items.time",
            "description": "<p>Date when a bill item realized.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.currency",
            "description": "<p>Human readable bill currency code i.e USD, TZS etc</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "bills.notes",
            "description": "<p>Additional human readable information about the bill from jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "defaultValue": "true",
            "description": "<p>state whether the account is active as per contract with a jurisdiction</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when account was created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when account was last updated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5ae6e306f6eea02c073de6eb\",\n  \"category\": \"Domestic\",\n  \"number\": \"50524\",\n  \"name\": \"Terrell Stoltenberg\",\n  \"phone\": \"809-584-7580\",\n  \"email\": \"ayden.goodwin@majifix.com\",\n  \"neighborhood\": \"Joanieborough\",\n  \"address\": \"30337 Cristobal Divide\",\n  \"locale\": \"en\",\n  \"location\":\n  {\n    \"type\": \"Point\",\n    \"coordinates\": [\n      39.2563,\n      -6.9328\n    ]\n  },\n  \"bills\": [\n  {\n    \"number\": \"895052418\",\n    \"period\":\n    {\n      \"billedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"startedAt\": \"2018-02-28T09:33:57.784Z\",\n      \"endedAt\": \"2018-03-30T09:33:57.784Z\",\n      \"duedAt\": \"2018-04-30T09:33:57.784Z\"\n    },\n    \"balance\":\n    {\n      \"outstand\": 3235,\n      \"open\": 7,\n      \"charges\": 210,\n      \"debt\": 281,\n      \"close\": 145\n    },\n    \"items\": [\n    {\n      \"name\": \"Previous Readings\",\n      \"quantity\": 281,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"time\": \"2018-03-05T10:06:02.820Z\",\n      \"name\": \"Current Readings\",\n      \"quantity\": 206,\n      \"unit\": \"cbm\"\n    },\n    {\n      \"name\": \"Unit Consumed\",\n      \"quantity\": 80,\n      \"unit\": \"cbm\"\n    }],\n    \"currency\": \"HRK\",\n    \"notes\": \"Veniam dolorum totam sint excepturi culpa voluptatem quasi.\"\n  }],\n  \"createdAt\": \"2018-04-30T09:33:58.451Z\",\n  \"updatedAt\": \"2018-04-30T09:33:58.451Z\",\n  \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  }
] });
