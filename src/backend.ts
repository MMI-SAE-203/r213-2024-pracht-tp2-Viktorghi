import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Copier ici les fonctions developpées en R214 | Système d'information
export async function allMaisons() {
    const records = await pb.collection('maison').getFullList() ;
    return records ;
}

export async function oneID(id) {
    const record = await pb.collection('maison').getOne(id);
    return record;
}

export async function allMaisonsFavori() {
    const records = await pb.collection('maison').getFullList({
        filter : 'favoris = true'
    });
    return records;
}

export async function allMaisonsSorted() {
    const records = await pb.collection('maison').getFullList({
        sort : 'price'
    });
    return records;
}

export async function bySurface(s) {
    const records = await pb.collection('maison').getFullList({
        filter: `surface > ${s}`
    });
    return records;
}

export async function surfaceORprice(surface, price) {
    const records = await pb.collection('maison').getFullList({
        filter: `surface > ${surface} || price < ${price}`
    });
    return records;
}

export async function agentByID(id) {
    const record = await pb.collection('agent').getOne(id);
    return record;
}