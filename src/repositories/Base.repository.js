class MongoRepository {
  constructor(model, uniqueField) {
    this.model = model;
    this.uniqueField = uniqueField;
  }

  save(document) {
    return this.model.create(document);
  }

  findOne(uniqueValue = undefined) {
    if (uniqueValue !== undefined) {
      return this.model
        .findOne({
          [this.uniqueField]: uniqueValue,
        })
        .lean();
    }
    return false;
  }

  find(field, value) {
    return this.model
      .find({
        [field]: value,
      })
      .lean();
  }

  deleteOne(uniqueValue, field = undefined) {
    if (field === undefined) {
      return this.model.deleteOne({ [this.uniqueField]: uniqueValue });
    } else {
      return this.model.deleteOne({ [field]: uniqueValue });
    }
  }

  updateOne(uniqueValue, newData, field = undefined) {
    if (field === undefined) {
      return this.model.updateOne({ [this.uniqueField]: uniqueValue }, newData);
    } else {
      return this.model.updateOne({ [field]: uniqueValue }, newData);
    }
  }
}

export default MongoRepository;
