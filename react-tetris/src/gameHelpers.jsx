export const STAGE_WIDTH = 12;
export const STAGE_HEIGTH = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGTH), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    );