import SaleService from "../service/Sale.service.js";

class SaleController {
  static async createSale(req, res) {
    const { total, description, seller } = req.body;
    if (!(total && description && seller)) {
      res.status(400).json({
        ok: false,
        error: "All fields are required",
      });
    }

    try {
      const saleService = new SaleService();
      const sale = await saleService.createRecord({
        total,
        description,
        seller,
      });

      res.status(201).json({
        ok: true,
        code: 201,
        message: "Sale successfully created",
        data: { sale },
      });
    } catch (err) {
      res.status(400).json({ ok: false, error: err.message });
    }
  }

  static async getSales(req, res) {
    const { seller } = req.query;

    try {
      const saleService = new SaleService();
      const sales = await saleService.getRecords("seller", seller);
      res.status(200).json({
        ok: true,
        code: 200,
        message: "Sales successfully found",
        data: { sales },
      });
    } catch (err) {
      res.status(400).json({ ok: false, error: err.message });
    }
  }

  static async deleteSale(req, res) {
    const { saleId } = req.params;
    if (!saleId) {
      res.status(400).json({
        ok: false,
        error: "All fields are required",
      });
    }

    try {
      const saleService = new SaleService();
      await saleService.deleteRecord(saleId, "_id");
      res.status(204).json({
        ok: true,
        code: 204,
        message: "Sales successfully deleted",
      });
    } catch (err) {
      res.status(400).json({ ok: false, error: err.message });
    }
  }

  static async updateSale(req, res) {
    const { saleId } = req.params;
    const newData = req.body;
    if (!saleId) {
      res.status(400).json({
        ok: false,
        error: "All fields are required",
      });
    }

    try {
      const saleService = new SaleService();
      await saleService.updateRecord(saleId, newData, "_id");
      res.status(204).json({
        ok: true,
        code: 204,
        message: "Sales successfully updated",
      });
    } catch (err) {
      res.status(400).json({ ok: false, error: err.message });
    }
  }
}

export default SaleController;
