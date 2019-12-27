import {Constructeur} from './controllers/controllers';
export class Routes {
    public Constructeur: Constructeur = new Constructeur();
    public routes(app): void {
        app.route("/").get(this.Constructeur.index);
        app.route('/listeHeros').get(this.Constructeur.allHeros);
        app.route('/listeHeros').post(this.Constructeur.addHero);
        app.route('/listeHeros/:id').get(this.Constructeur.showHero);
        app.route('/listeHeros/:id').put(this.Constructeur.updateHero);
        app.route('/listeHeros/:id').delete(this.Constructeur.deleteHero);
        app.route('/test').get(this.Constructeur.testAPI);
        app.use((req, res) => {
        res.status(404).json({url: req.originalUrl, error: 'not found'});
        });
    }
}