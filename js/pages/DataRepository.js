//封装网络请求
export default class DataRepository{
    fetchNetRepository(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
                .then(response=>response.json())
                .then(result=>{
                    resolve(result)//成功状态则返回数据
                })
                .catch(error=>{
                    reject(error)//失败状态则返回错误
                })
        })
    }
}