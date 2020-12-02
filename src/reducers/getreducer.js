import { ADD_ONE, MIN_ONE } from '../action/getaction'

const initialState={
    count:0
};
function getreducer(state=initialState,action)
{
    switch (action.type)
    {
        case ADD_ONE:
            return  {
                count:state.count+1
            };
        
        case MIN_ONE:
            return  {
                count:state.count-1
            };

        default:
            return state;
    }
}
export default getreducer