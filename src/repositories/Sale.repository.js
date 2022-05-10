import MongoRepository from "./Base.repository.js";
import { Sale } from "../models/index.js";

class SaleRepository extends MongoRepository {
  constructor() {
    super(Sale, "");
  }
}

export default SaleRepository;
