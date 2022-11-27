//forma antiga de importacao
//const express = require('express');

import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

import { convertHourStringToMinutes } from './utils/converte_hora_minuto';
import { convertToMinutesToHourString } from './utils/convert_hour_string_to_minuts';

const app = express();
app.use(cors());

app.use(express.json())

const prisma = new PrismaClient({
    log: ['query']
})
// localhost: 3333/ads

// HTTP methods / API RESTful / HTTP Codes

app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        /* Counting the number of ads for each game. */
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    }) // metodos assíncronos
    return response.json(games);
});


// criacao de rotas do nosso APP
app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    const body: any = request.body;

    const ad = await prisma.ad.create({
        data: {
            /* Creating a new ad. */
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    });

    return response.status(201).json(ad);
});

app.get('/games/:id/ads', async (request, response) => {
    //console.log("acessou Ads!!");
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId: gameId
        },
        orderBy: {
            createAt: 'desc'
        }
    });

    return response.json(ads.map((ad) => {
        return{
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertToMinutesToHourString(ad.hourStart),
            hourEnd: convertToMinutesToHourString(ad.hourEnd),
        }
    }))
});


app.get('/ads/:id/discord', async (request, response) => {
    //console.log("acessou Ads!!");
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adId
        }
    })
    

    //return response.send(adId);

    return response.json({
        discord: ad.discord,
    })
});

app.listen(3333);