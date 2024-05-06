/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zqgjr7bhnrthg9e",
    "created": "2024-04-12 09:51:53.011Z",
    "updated": "2024-04-12 09:51:53.011Z",
    "name": "Maison",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rw15kvsm",
        "name": "Nom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "9d0ouy1j",
        "name": "Surface",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "zpi3bhtk",
        "name": "Nb_salle_de_bain",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "zfykbuxg",
        "name": "Nb_de_chambre",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zqgjr7bhnrthg9e");

  return dao.deleteCollection(collection);
})
