import CrudBaseService from "./CrudBase.service.js";
import SaleRepository from "../repositories/Sale.repository.js";

class SaleService extends CrudBaseService {
  constructor() {
    super(new SaleRepository());
  }
}

export default SaleService;
