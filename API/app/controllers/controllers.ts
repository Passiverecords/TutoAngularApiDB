import { Request, Response } from "express";
import Hero from "../model/hero";
var jwt = require('jsonwebtoken');
export class Constructeur{
public index = (req: Request, res: Response) => {
    var token = req.headers.authorization.split(' ')[1]
    var decoded = jwt.decode(token, {complete: true})
    res.json(
    {
    jwkType : req.headers.authorization.split(' ')[0],
    jwkToken : req.headers.authorization.split(' ')[1],
    jwkToken2 : req.headers.authorization.split(' ')[1].split('.'),
    jwtHeader : decoded.header,
    jwtPayload: decoded.payload
    });
}
public testAPI = (req: Request, res: Response) => {
    res.json(
    {
    Response : "API is Running",
    });
}
public allHeros = (req: Request, res: Response) => {
    const heros = Hero.find((err: any, heros: any) => {
    if (err) {
        res.send(err);
    } else {
        res.send(heros);
    }
    });
}
public showHero = (req: Request, res: Response) => {
    const hero = Hero.findById(req.params.id, (err: any, hero: any) => {
    if (err) {
        res.send(err);
    } else {
        res.send(hero);
    }
    });
}
public addHero = (req: Request, res: Response) => {
    const hero = new Hero(req.body);
    hero.save((err: any) => {
    if (err) {
        res.send(err);
    } else {
        res.send(hero);
    }
    });
}
public updateHero = (req: Request, res: Response) => {
    const hero = Hero.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err: any, hero: any) => {
        if (err) {
        res.send(err);
        } else {
        res.send(hero);
        }
    }
    );
}
public deleteHero = (req: Request, res: Response) => {
    const hero = Hero.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err)
    {
        res.send(err);
    } 
    else 
    {
        res.send("Hero deleted from database");
    }
    });
}
}