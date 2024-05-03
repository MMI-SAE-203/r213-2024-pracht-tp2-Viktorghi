/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("542mc4z1wy7u44r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hpnxbngi",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "542mc4z1wy7u44r",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("542mc4z1wy7u44r")

  // remove
  collection.schema.removeField("hpnxbngi")

  return dao.saveCollection(collection)
})
