const ACTIVE_INDEXES = 'update-active-indexs';

export function updateIndexes(indexs){
    return {type:ACTIVE_INDEXES,indexs}
}