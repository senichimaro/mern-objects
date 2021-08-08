import axios from 'axios'
import { appConfig } from '../config'

export async function postFormData(data){
  console.log("postFormData",data.title);
  try {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('textarea', data.textarea)
    // const response = await axios({
    //   url:appConfig.api.post,
    //   method:'POST',
    //   data:formData
    // })
    // return response;
    console.log("postFormData",formData);
    return true
  }
  catch(e){
    console.error(`postFormData error: ${e.message}`);
  }
}
