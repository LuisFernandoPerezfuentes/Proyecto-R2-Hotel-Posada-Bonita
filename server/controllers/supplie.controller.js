const Supplie = require('../models/supplie');
const supplieCtrl = {};

supplieCtrl.getSupplies = async ( req, res) => {
    const supplies = await Supplie.find();
    res.json(supplies);
};

supplieCtrl.createSupplies = async (req, res) => {
   const supplie = new Supplie ({
       name: req.body.name,
       brand: req.body.brand,
       quantity: req.body.quantity,
   });
   await supplie.save()
   res.json({
       'status': 'Supplie Saved'
   });
};

supplieCtrl.getSupplie = async (req, res) => {
  const supplie = await Supplie.findById(req.params.id);
    res.json(supplie);
}
supplieCtrl.editSupplie = async (req, res) => {
    const { id } = req.params;
    const supplie = {
        name: req.body.name,
        brand: req.body.brand,
        quantity: req.body.quantity,
    };

   await Supplie.findByIdAndUpdate(id, {$set: supplie}, {new: true});
    res.json({status: 'Supplie Updated'});
};

supplieCtrl.deleteSupplie = async (req, res) => {
   await Supplie.findByIdAndRemove(req.params.id);
    res.json({status: 'Supplie Deleted'});
}
module.exports = supplieCtrl;
