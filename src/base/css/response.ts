import Objects from 'wasabi-common/lib/types/Objects';

export enum Responsive {
    mobile = 'isMobile',
    desktop = 'isDesktop',
    tablet = 'isTablet'
}

export const responsiveValues = Objects.values(Responsive);
