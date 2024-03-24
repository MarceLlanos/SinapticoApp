import { PrivateDashboardRoutes } from "@/models";

export const menuItems = [
    {
        icon: 'tablero',
        label: 'Tablero de tareas',
        navigateUrl: `${PrivateDashboardRoutes.TASKBOARD}`
    },
    {
        icon: 'files',
        label: 'Archivos del proyecto',
        navigateUrl: `${PrivateDashboardRoutes.DRIVEBOARD}`
    },
    {
        icon: 'lista',
        label: 'Lista global de tareas',
        navigateUrl: `${PrivateDashboardRoutes.TASKLIST}`
    },
    {
        icon: 'reporte',
        label: 'Reporte Diario',
        navigateUrl: `${PrivateDashboardRoutes.DAILYREPORT}`
    },
    {
        icon: 'estadisticas',
        label: 'Estadisticas',
        navigateUrl: `${PrivateDashboardRoutes.STATICS}`
    },
    {
        icon: 'revision',
        label: 'Revisión y Retrospectiva de fases',
        navigateUrl: `${PrivateDashboardRoutes.PHASESREVIEW}`
    },
    {
        icon: 'equipo',
        label: 'Equipo y roles',
        navigateUrl: `${PrivateDashboardRoutes.TEAM}`
    },
    {
        icon: 'chat',
        label: 'Chat',
        navigateUrl: `${PrivateDashboardRoutes.CHAT}`
    }
]