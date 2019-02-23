import {API_URL} from '../../settings'
import axios from 'axios'

export const pipelineStart_SelectTab = (tabId) => {
    return {
        type: 'PIPELINE_START_SELECT_TAB',
        payload: {
            tabId
        }
    }
}

export const pipelineStart_GetTemplates = () => async dispatch =>{
    const response = await axios.get(`${API_URL}/pipeline/template`)
    dispatch({type: 'PIPELINE_START_GET_TEMPLATES', payload: response.data})
}




export const pipelineStart_VerifyTab = (tabId, verified) => {
    return {
        type: 'PIPELINE_START_VERIFY_TAB',
        payload: {
            tabId, verified
        }
    }
}



export const pipelineStart_GetTemplate = (id) => async dispatch => {
    const response = await axios.get(`${API_URL}/pipeline/template/${id}`)
    dispatch({type: 'PIPELINE_START_GET_TEMPLATE', payload: response.data})
}


export const pipelineStart_ToggleModal = (id) => {
    return {
        type: 'PIPELINE_START_TOGGLE_MODAL',
        payload:{
            id:id
        }
    }
}