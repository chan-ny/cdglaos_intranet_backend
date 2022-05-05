const controller = require("../../Controller/index");
const position = new controller.PositionController();

module.exports = {
  CreatePosition(req, res) {
    position.createPosition(req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  UpdatePosition(req, res) {
    position.updatePosition(req.params.Id, req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  RemovePositon(req, res) {
    position.removePosition(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  AllPosition(req, res) {
    position.allPosition().then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetPosition(req, res) {
    position.getPosition(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
