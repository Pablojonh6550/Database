export const STAGE_WIDTH = 12;
export const STAGE_HEIGTH = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGTH), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < array.length; y++) {
        const element = array[y];
        
    }
};