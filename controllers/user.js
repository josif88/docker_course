export const create = async (req, res) => {
  try {
    return res.send("post user");
  } catch (e) {
    return res.send(e.message);
  }
};

export const getById = async (req, res, next) => {
  const { id } = req.params;

  try {
    return res.send("get user by id " + id);
  } catch (e) {
    return res.send(e.message);
  }
};
