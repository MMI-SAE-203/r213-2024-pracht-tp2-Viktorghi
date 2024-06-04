/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqgjr7bhnrthg9e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "agfgrj8h",
    "name": "agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "qa6i2o4mw6umyvv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqgjr7bhnrthg9e")

  // remove
  collection.schema.removeField("agfgrj8h")

  return dao.saveCollection(collection)
})
