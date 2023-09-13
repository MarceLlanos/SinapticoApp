export interface DataProject {
	userId: string;
	projectId: string;
	nameProject: string;
	description: string;
	assigment: string;
	proffessorName: string;
	dateDeliverProject: Date | null;
}

export interface Project {
	userId: string;
	nameProject: string;
	description: string;
	assigment: string;
	proffessorName: string;
	dateDeliverProject: Date;
}