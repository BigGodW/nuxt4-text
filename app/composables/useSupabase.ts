export const useSupabase = () => {
  const supabase = useSupabaseClient()
  return supabase
}
export const useSupabaseUpload = async(storage:string,file:File,path?:string)=>{
  let pathurl = ''
  // 时间
  let timestr =  new Date().toISOString().split('T')[0]
  const lastDotIndex = file.name.lastIndexOf('.');
  // 随机字符
  const randomPart = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  // 后缀名
  const extension = file.name.substring(lastDotIndex + 1).toLowerCase(); // 可选：转小写

  if(path){
    pathurl = path+'/'+timestr+'-'+randomPart+'.'+extension
  }else{
    pathurl = pathurl+'-'+randomPart+'.'+extension
  }
  const minFile = await compressImage(file)
  const {data,error} = await useSupabase().storage.from(storage).upload(pathurl,minFile)
  if(error){
    return '上传失败'
  }else{
    return data.fullPath
  }
}

// 图片url
export const useSupabaseImgUrl = (fullPath:string)=>{
  const config = useRuntimeConfig()
  return config.public.imgBaseUrl+"/"+fullPath
}