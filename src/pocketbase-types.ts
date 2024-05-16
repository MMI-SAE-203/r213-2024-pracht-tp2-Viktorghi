/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Agence = "Agence",
	Maison = "Maison",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AgenceRecord = {
	Nom?: string
	Prenom?: string
	email?: string
	field?: RecordIdString
	tel?: number
}

export type MaisonRecord = {
	adresse?: string
	exclusive?: boolean
	favoris?: boolean
	image?: string
	nb_de_chambre?: number
	nb_salle_de_bain?: number
	nom?: string
	price?: number
	surface?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AgenceResponse<Texpand = unknown> = Required<AgenceRecord> & BaseSystemFields<Texpand>
export type MaisonResponse<Texpand = unknown> = Required<MaisonRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Agence: AgenceRecord
	Maison: MaisonRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Agence: AgenceResponse
	Maison: MaisonResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Agence'): RecordService<AgenceResponse>
	collection(idOrName: 'Maison'): RecordService<MaisonResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
