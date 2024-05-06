/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqgjr7bhnrthg9e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u6fki54f",
    "name": "Favoris",
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
  collection.schema.removeField("u6fki54f")

  return dao.saveCollection(collection)
})
