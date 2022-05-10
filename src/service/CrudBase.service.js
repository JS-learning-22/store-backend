class CrudBaseService {
  constructor(repository) {
    this.repository = repository;
  }

  createRecord(document, uniqueField) {
    const entityDB = this.repository.findOne(document[uniqueField]);
    if (entityDB) {
      console.log("Entity already exist");
      return False;
    }
    return this.repository.save(document);
  }

  getRecords(field, value) {
    return this.repository.find(field, value);
  }

  deleteRecord(value, field = undefined) {
    if (field === undefined) {
      return this.repository.deleteOne(value);
    } else {
      return this.repository.deleteOne(value, field);
    }
  }

  updateRecord(value, newData, field = undefined) {
    if (field === undefined) {
      return this.repository.updateOne(value, newData);
    } else {
      return this.repository.updateOne(value, newData, field);
    }
  }
}

export default CrudBaseService;
