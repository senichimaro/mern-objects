module.exports = {
  appConfig:{
    routes:[
      {
        url:'/',
        name:'Home'
      },
      {
        url:'/new',
        name:'New'
      },
      {
        url:'/edit',
        name:'Edit'
      }
    ],
    api:{
      // post:process.env.REACT_APP_POST_URL,
      post:'http://localhost:3000/post',
      // put:process.env.REACT_APP_POST_URL
      put:'http://localhost:3000/put'
    }
  }
}
