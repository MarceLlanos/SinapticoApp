import { PrivateDashboardRoutes } from "@/models";

export const menuBottomItems = [
    {
        icon: 'help',
        label: 'Ayuda',
        navigateUrl: `${PrivateDashboardRoutes.HELP}`
    },
    {
        icon: 'settings',
        label: 'Configuración',
        navigateUrl: `${PrivateDashboardRoutes.SETTINGS}`
    }
]