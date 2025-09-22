import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Foundation from "../pages/Foundation/Foundation";
import ResidenciesProgram from "../pages/ResidenciesProgram/ResidenciesProgram";
import Archive from '../pages/Archive/Archive';
import Residency from '../pages/Residency/Residency';
import Exposition from '../pages/Exposition/Exposition';
import ArtPiece from '../pages/ArtPiece/ArtPiece';
import Publication from '../pages/Publication/Publication';
import Collaboration from "../pages/Collaboration/Collaboration";
import Success from "../pages/SuccessCancel/Success";
import Cancel from "../pages/SuccessCancel/Cancel"
import Root from "../root/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Navigate to="/inicio" replace />
            },
            {
                path: "/inicio",
                element: <Home />
            },
            {
                path: "/fundacion-azar",
                element: <Foundation />
            },
            {
                path: "/programa-residencias",
                element: <ResidenciesProgram />
            },
            {
                path: "/proyectos",
                element: <Archive />
            },
            {
                path: "/residencia/:id",
                element: <Residency />
            },
            {
                path: "/exposicion/:id",
                element: <Exposition />
            },
            {
                path: "/obra-colectiva/:id",
                element: <ArtPiece />
            },
            {
                path: "/publicacion/:id",
                element: <Publication />
            },
            {
                path: "/colaboracion/:id", 
                element: <Collaboration />
            },
            {
                path: "/success",
                element: <Success />
            },
            {
                path: "/cancel", 
                element: <Cancel />
            },
            // {
            //     path: "/jurado/:id", 
            //     element: <Cancel />
            // },


            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/azar-foundation",
                element: <Foundation />
            },
            {
                path: "/residencies-program",
                element: <ResidenciesProgram />
            },
            {
                path: "/projects",
                element: <Archive />
            },
            {
                path: "/residency/:id",
                element: <Residency />
            },
            {
                path: "/exhibition/:id",
                element: <Exposition />
            },
            {
                path: "/collective-art-piece/:id",
                element: <ArtPiece />
            },
            {
                path: "/publication/:id",
                element: <Publication />
            },
            {
                path: "/collaboration/:id", 
                element: <Collaboration />
            },
            {
                path: "/success",
                element: <Success />
            },
            {
                path: "/cancel", 
                element: <Cancel />
            },


            {
                path: "/pt/inicio",
                element: <Home />
            },
            {
                path: "/pt/azar-fundacao",
                element: <Foundation />
            },
            {
                path: "/pt/programa-residencias",
                element: <ResidenciesProgram />
            },
            {
                path: "/pt/projetos",
                element: <Archive />
            },
            {
                path: "/pt/residencia/:id",
                element: <Residency />
            },
            {
                path: "/pt/exposicao/:id",
                element: <Exposition />
            },
            {
                path: "/pt/obra-coletiva/:id",
                element: <ArtPiece />
            },
            {
                path: "/pt/publicacao/:id",
                element: <Publication />
            },
            {
                path: "/pt/colaboracao/:id",
                element: <Collaboration />
            },
            {
                path: "/success",
                element: <Success />
            },
            {
                path: "/cancel", 
                element: <Cancel />
            },
        ]
    }])

export default router;