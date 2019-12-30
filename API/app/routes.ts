import {Constructeur} from './controllers/controllers';
import {jwtCheck} from "./security/jwt";
export class Routes {
    public Constructeur: Constructeur = new Constructeur();
    public routes(app): void {
        app.route("/").get(jwtCheck,this.Constructeur.index);
        app.route('/listeHeros').get(jwtCheck,this.Constructeur.allHeros);
        app.route('/listeHeros').post(jwtCheck,this.Constructeur.addHero);
        app.route('/listeHeros/:id').get(jwtCheck,this.Constructeur.showHero);
        app.route('/listeHeros/:id').put(jwtCheck,this.Constructeur.updateHero);
        app.route('/listeHeros/:id').delete(jwtCheck,this.Constructeur.deleteHero);
        app.route('/test').get(this.Constructeur.testAPI);
        app.use((req, res) => {
        res.status(404).json({url: req.originalUrl, error: 'not found'});
        });
    }
}