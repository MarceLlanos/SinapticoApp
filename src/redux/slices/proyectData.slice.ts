import { DataProject } from '@/models';
import { addDocument, getCurrentUser } from '@/services';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const currentUser = getCurrentUser();

export const projectApi = createApi({
	tagTypes: ['Project'],
	baseQuery: fetchBaseQuery(),
	endpoints: builder => ({
		addProject: builder.mutation({
			async queryFn(data: DataProject): Promise<any> {
				try {
					console.log(`from porject APi ${data}`);
					const docRef = await addDocument('Project', {
						uidProject: data.uidProject,
						nameProject: data.nameProject,
						description: data.description,
						assigment: data.assigment,
						proffessorName: data.proffessorName,
						dateDeliverProject: data.dateDeliverProject,
						userUid: currentUser,
					});
					return { id: docRef.id, ...data };
				} catch (error) { }
			},
		}),
	}),
});

export const { useAddProjectMutation } = projectApi;
