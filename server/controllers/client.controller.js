const Client = require('../models/client');
const clientCtrl = {};

clientCtrl.getClients = async ( req, res) => {
    const cliets = await Client.find();
    res.json(cliets);
};

clientCtrl.createClients = async (req, res) => {
   const client = new Client ({
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       address: req.body.address,
       phone: req.body.phone,
       e_mail: req.body.e_mail,
   });
   await client.save()
   res.json({
       'status': 'Client Saved'
   });
};

clientCtrl.getClient = async (req, res) => {
  const client = await Client.findById(req.params.id);
    res.json(client);
}
clientCtrl.editClient = async (req, res) => {
    const { id } = req.params;
    const client = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        phone: req.body.phone,
        e_mail: req.body.e_mail,
    };

   await Client.findByIdAndUpdate(id, {$set: client}, {new: true});
    res.json({status: 'Client Updated'});
};

clientCtrl.deleteClient = async (req, res) => {
   await Client.findByIdAndRemove(req.params.id);
    res.json({status: 'Client Deleted'});
}
module.exports = clientCtrl;
