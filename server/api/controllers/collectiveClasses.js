import CollectiveClassesDAO from "../dao/collectiveClassesDAO.js";

/*Ici, on va récupérer les props passées de notre client à notre serveur : */
export default class CollectiveClassesController {
  static async apiPostNewClass(req, res, next) {
    try {
      console.log("Controleur - j'ai récupéré la data du front")

      let { collectiveClassesData } = req.body;
      /* il s'agit ici de notre state React qui s'appelle collectiveClassesData */

      const startTime = collectiveClassesData.startTime;
      const endTime = collectiveClassesData.endTime;
      const collectiveclass = collectiveClassesData.class;
      const studio = {
        name: collectiveClassesData.studioName,
        website: collectiveClassesData.studioWebsite,
      };
      const weekday = collectiveClassesData.weekday;

      console.log(collectiveClassesData)
      /* et vu qu'on a bien récupéré toutes les infos, on va pouvoir les passer à notre DAO qui va s'occuper d'injecter ces infos dans mongo */
      await CollectiveClassesDAO.addOneCollectiveClass(
        startTime,
        endTime,
        collectiveclass,
        studio,
        weekday,
      );
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  
}
