export interface ProjectInput {
	user_id: string
	name_proj: string
	description: string
	assigment: string
	professor: string
	date_release: Date
}

export interface DriveInput {
	drive_link: string
}

export interface Project {
	id_project: string
	user_id: string
	name_proj: string
	description: string
	assigment: string
	professor: string
	date_release: Date
	code_project: string
	drive_link: string
	createAt: Date
}

export interface ProjectResult {
	isSuccess: boolean,
	message: string,
	id_project?: string
}