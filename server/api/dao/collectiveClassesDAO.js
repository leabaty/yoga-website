import { ObjectId } from "mongodb";

/*------------ Quelle database/Quelle collection ? ------------*/
/* On définit d'abord une variable que l'on va "utiliser" pour stocker nos données */
let collectiveClasses;

/* Ici on répond aux questions suivantes : 
   - Quelle est la base de données à injecter ?
   - Dans cette BDD, quelle est la collection à injecter ? */
export default class CollectiveClassesDAO {
  static async injectDB(conn) {
    if (collectiveClasses) {
      return;
    }
    try {
      collectiveClasses = await conn
        .db(process.env.APSARAYOGA_NS) // BDD = apsara-yoga
        .collection("classes"); // collection = classes
      console.log("DAO - je me connecte à la BDD");
    } catch (e) {
      console.error(
        `Unable to establish collection handles in collectiveClassesDAO: ${e}`
      );
    }
  }

  /*------------ Quel objet/Quel document ? ------------*/

  /* Dans le cas de l'ajout d'un cours collectif, on reprend les props précédemment récupérés et organisés par notre controller*/
  static async addOneCollectiveClass(
    startTime,
    endTime,
    collectiveclass,
    studio,
    weekday
  ) {
    try {
      // on crée d'abord un joli objet de données à insérer
      const NewCollectiveClass = {
        startTime: startTime,
        endTime: endTime,
        class: collectiveclass,
        studio: {
          name: studio.name,
          website: studio.website,
        },
      };

      // et on crée une variable contenant le jour il falloir insérer cet objet
      const DayToUpdate = weekday;

      console.log("DAO - j'ai bien récupéré l'objet");
      console.log(NewCollectiveClass);

      /* ici, on va insérer les données: 
      - On lui donne où ( dans l'array schedule, DayToUpdate) 
      - et ce qu'il faut y injecter (l'objet précédemment construit) */

      const result = await collectiveClasses.updateOne(
        { _id: ObjectId("622890c8d3c756c9fae6b044") },
        // { $push: { "collective.schedule.monday": NewCollectiveClass } }
        {
          $push: { [`collective.schedule.${DayToUpdate}`]: NewCollectiveClass },
        }
      );

      console.log(result);

      return result;

      //TODO Need : {classes {collective {schedule {DayToUpdate[*]}}}}
      //TODO * being CollectiveClassData
    } catch (e) {
      console.error(`Unable to post collective class: ${e}`);
      return { error: e };
    }
  }
}
