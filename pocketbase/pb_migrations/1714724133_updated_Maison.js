/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqgjr7bhnrthg9e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kqakyeya",
    "name": "Price",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oweiysuf",
    "name": "Images",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 5,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ayxigmix",
    "name": "Adresse",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zqgjr7bhnrthg9e")

  // remove
  collection.schema.removeField("kqakyeya")

  // remove
  collection.schema.removeField("oweiysuf")

  // remove
  collection.schema.removeField("ayxigmix")

  return dao.saveCollection(collection)
})
