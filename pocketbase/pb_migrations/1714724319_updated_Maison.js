/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqgjr7bhnrthg9e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zp4mfyx0",
    "name": "Exclusive",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqgjr7bhnrthg9e")

  // remove
  collection.schema.removeField("zp4mfyx0")

  return dao.saveCollection(collection)
})
